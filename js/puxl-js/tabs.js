/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//    PUXL framework
//
//    Version:     1-beta
//
//    Author:      Iñigo Garcia (@MrKanuel)
//
//    Route:       puxl-framework/js/puxl/tabs.js
//
//    Requires:    puxl-framework/css/puxl/compound/_tabs.scss
//
//    License:     GNU General Public License v3.0
//                 https://github.com/puxl/puxl-framework/blob/master/LICENSE
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/


function puxl_tabs() {
    'use strict';

    var
    // tabsComponents: every .tabs component.
    tabsComponents = document.querySelectorAll('.tabs'),

        // tabsObjects: every tabsObject.
        tabsObjects = [],

        // empty variables for different operations.
        loopTabsComponents,
        loopTabs,
        currentTablist,
        currentTab,
        allTabs = [],
        allTabpanels = [];


    // Select tab.
    function selectTab(tab) {
        tab.focus();
        tab.setAttribute('aria-selected', 'true');
        tab.setAttribute('tabindex', '0');
    }// End: Function selectTab(tab).


    // Deselect tab.
    function deselectTab(tab) {
        tab.blur();
        tab.setAttribute('aria-selected', 'false');
        tab.setAttribute('tabindex', '-1');
    }// End: Function deselectTab(tab).


    // Select tabpanel.
    function selectTabpanel(tabpanel) {
        tabpanel.removeAttribute('hidden');
        tabpanel.setAttribute('tabindex', '0');
    }// End: Function selectTabpanel(tabpanel).


    // Deselect tabpanel.
    function deselectTabpanel(tabpanel) {
        tabpanel.blur();
        tabpanel.setAttribute('hidden', '');
        tabpanel.setAttribute('tabindex', '-1');
    }// End: Function deselectTabpanel(tabpanel).


    // Function buildTabsComponents: Detect structure and manage naming, relations and functionalities in .tabs components.
    function buildTabsComponents() {

        // Starting count from 0, and as many times as there are elements with class .tabs.
        for (loopTabsComponents = 0; loopTabsComponents < tabsComponents.length; loopTabsComponents++) {

            var
            // tabsComponent: the current .tabs component.
            //   Its value comes from the tabsComponents HTMLCollection.
            //   The value is stored in tabs' nth index number, determined by loopTabsComponents.
            tabsComponent = tabsComponents[loopTabsComponents],

                // tabsObject: empty object to learn the structure of the current .tabs component.
                tabsObject = {
                    id: '',
                    tabs: [],
                    enabledTabs: [],
                    tabpanels: []
                },

                // tabsComponentChildren: children of the current .tabs component.
                tabsComponentChildren = tabsComponent.children,

                // tabsComponentChildrenCount: number of children of the current .tabs component.
                tabsComponentChildrenCount = tabsComponent.childElementCount,

                // tablist: the current element with role=tablist.
                tablist = tabsComponent.querySelector('[role=tablist]'),

                // tabs: children of tablist: role=tab.
                tabs = tablist.querySelectorAll('[role=tab]'),

                // tab: empty variable to store a tab.
                tab,

                // tabsCount: number of tabs in tablist.
                tabsCount = tablist.childElementCount,

                // tabsSelected: boolean to know if there is any selected tab.
                tabsSelected = false,

                // tabpanels: empty array to store the elements with role tabpanel.
                tabpanels = [],

                // tabpanel: empty variable to store a tabpanel.
                tabpanel,

                // tabpanelsCount: number of tabpanels in tabsComponent, default 0.
                tabpanelsCount = 0,

                // variables of 0 for different for loops.
                loopTabsComponentChildren;


            // If the current .tabs component does not have any id attribute.
            if (tabsComponent.hasAttribute('id') === false) {

                // Give a generated, consecutive number id attribute to the current .tabs component.
                tabsComponent.setAttribute('id', 'tabs--' + (loopTabsComponents + 1));

            }// End if: If the current .tabs component does not have any id attribute.


            // Add the current .tabs component id to tabsObject.
            tabsObject.id = tabsComponent.id;


            // Starting count from 0, to tabsComponentChildrenCount.
            //   Give an id to the current tabpanel if it does not have one already.
            //   Add the current tabpanel element to tabpanels.
            for (loopTabsComponentChildren = 0; loopTabsComponentChildren < tabsComponentChildrenCount; loopTabsComponentChildren++) {

                // If the current children has role tabpanel.
                if (tabsComponentChildren[loopTabsComponentChildren].getAttribute('role') === 'tabpanel') {

                    // tabpanel: The current tabpanel.
                    tabpanel = tabsComponentChildren[loopTabsComponentChildren];

                    // Add current tabpanel to enabledTabpanels array.
                    //   The value to be added is the id of the current tabpanel.
                    //   The index position in array of for the current tabpanel id is determined by loopTabsComponentChildren.
                    tabpanels.push(tabpanel);

                    // Add 1 to tabpanelsCount.
                    tabpanelsCount++;

                }// End if: If the current children has role tabpanel.

            }// End for loop: Starting count from 0, to tabsComponentChildrenCount.


            // If the number of tabs is not equal to the number of tabpanels.
            if (tabsCount !== tabpanelsCount) {
                alert('PUXL tabs(): Component .tabs#' + tabsComponent.id + ' must have equal number of tabs (' + tabsCount + ') and tabpanels (' + tabpanelsCount + ').');
            }// End if: If the number of tabs is not equal to the number of tabpanels.


            // Starting count from 0, and as many times as there are tabpanels.
            for (loopTabs = 0; loopTabs < tabpanelsCount; loopTabs++) {

                // tab: The correspondent tab for the current tabpanel.
                tab = tabs[loopTabs];


                // tabpanel: The current tabpanel.
                tabpanel = tabpanels[loopTabs];


                // Add current tab element to tabs array in tabsObject.
                //   The index position in array for the current tab id is determined by loopTabs.
                tabsObject.tabs.push(tab);


                // Add current tabpanel element to tabpanels array in tabsObject.
                //   The index position in array for the current tabpanel id is determined by loopTabs.
                tabsObject.tabpanels.push(tabpanel);


                // Give a generated, consecutive number id attribute to the current tabpanel.
                tabpanel.setAttribute('id', tabsComponent.id + '__tabpanel--' + (loopTabs + 1));


                // If the current tab does not have any id attribute.
                if (tab.hasAttribute('id') === false) {

                    // Give a generated, consecutive number id attribute to the current tab.
                    tab.setAttribute('id', tabsComponent.id + '__tab--' + (loopTabs + 1));

                    // If the current tab has an id attribute.
                } else {

                    // Give a generated, consecutive number id attribute to the current tab.
                    tabpanel.setAttribute('id', tab.id + '__tabpanel');

                }// End if: If the current tab does not have any id attribute.


                // Create a relation between current tab and current tabpanel.
                tab.setAttribute('aria-controls', tabpanel.id);


                // Give the name of the current tab to the current tabpanel.
                tabpanel.setAttribute('aria-labelledby', tab.id);


                // If the current tab is not disabled.
                if (tab.hasAttribute('disabled') === false) {

                    // Add current tab element to enabledTabs array in tabsObject.
                    //   The index position in array for the current tab id is determined by loopTabs.
                    tabsObject.enabledTabs.push(tab);

                }// End if: If the current tab is not disabled.


                // If the current tab is selected.
                if (tab.getAttribute('aria-selected') === 'true') {

                    tabsSelected = true;

                    // Make the current tab focusable.
                    tab.setAttribute('tabindex', 0);

                    // Make the current tabpanel focusable.
                    tabpanel.setAttribute('tabindex', 0);

                    // Show the current tabpanel.
                    tabpanel.removeAttribute('hidden');

                    // If the current tab is not selected.
                } else {

                    // Set the current tab as not selected.
                    tab.setAttribute('aria-selected', 'false');

                    // Make the current tab not focusable.
                    tab.setAttribute('tabindex', -1);

                    // Make the current tabpanel not focusable.
                    tabpanel.setAttribute('tabindex', -1);

                    // Hide the current tabpanel.
                    tabpanel.setAttribute('hidden', '');

                }// End if: If the current tab is selected.


                // Give the current tab a button type.
                tab.setAttribute('type', 'button');

            }// End for loop: Starting count from 0, and as many times as there are tabpanels.


            // If no tab is preselected.
            if (tabsSelected === false) {

                // Select the first enabled tab.
                tabsObject.enabledTabs[0].setAttribute('aria-selected', 'true');
                tabsObject.enabledTabs[0].setAttribute('tabindex', '0');

                // Select tabpanel controlled by the first enabled tab.
                document.getElementById(tabsObject.enabledTabs[0].getAttribute('aria-controls')).removeAttribute('hidden');
                document.getElementById(tabsObject.enabledTabs[0].getAttribute('aria-controls')).setAttribute('tabindex', '0');

            }// End if: If no tab is preselected.


            // Make the first enabled tab focusable.
            tabsObject.enabledTabs[0].setAttribute('tabindex', '0');


            // Add current tabsObject object to tabsObjects array.
            //   The index position in array for tabsObject is determined by loopTabsComponents.
            tabsObjects.push(tabsObject);

        }// Starting count from 0, and as many times as there are elements with class .tabs.

    }// End: Function buildTabsComponents().


    // If there are no .tabs components.
    if (tabsComponents.length === 0) {

        console.log('PUXL tabs(): No .tabs components were found.');

        // If there are .tabs components.
    } else {

        // If there are two or more .tabs components.
        if (tabsComponents.length >= 2) {

            // Return message on console.
            console.log('PUXL tabs(): ' + tabsComponents.length + ' .tabs components were found.');

            // If there is one .tabs component.
        } else {

            // Return message on console.
            console.log('PUXL tabs(): ' + tabsComponents.length + ' .tabs component was found.');

        }// End if: If there are two or more .tabs components.


        // Build tabs components.
        buildTabsComponents();


        // Starting count from 0, and as many times as there are tabs objects in tabsObjects.
        for (loopTabsComponents = 0; loopTabsComponents < tabsObjects.length; loopTabsComponents++) {

            // Starting count from 0, and as many times as there are tabs in the current tabsObject.
            for (loopTabs = 0; loopTabs < tabsObjects[loopTabsComponents].tabs.length; loopTabs++) {

                // Add the current tab to allTabs.
                allTabs.push(tabsObjects[loopTabsComponents].tabs[loopTabs]);

            }// End for loop: Starting count from 0, and as many times as there are tabs in the current tabsObject.


            // Starting count from 0, and as many times as there are tabpanels in the current tabsObject.
            for (loopTabs = 0; loopTabs < tabsObjects[loopTabsComponents].tabpanels.length; loopTabs++) {

                // Add the current tab to allTabs.
                allTabpanels.push(tabsObjects[loopTabsComponents].tabpanels[loopTabs]);

            }// End for loop: Starting count from 0, and as many times as there are tabpanels in the current tabsObject.

        }// End for loop: Starting count from 0, and as many times as there are tabs objects in tabsObjects.


        // Assign a function to every tab.
        allTabs.forEach(function (item) {

            // Starting count from 0, and as many times as there are tabs objects in tabsObjects.
            for (loopTabsComponents = 0; loopTabsComponents < tabsObjects.length; loopTabsComponents++) {

                // If the parent .tabs component id is equal to the current tabsObject id.
                if (item.parentNode.parentNode.id === tabsObjects[loopTabsComponents].id) {

                    var
                    // Tabs in the current .tabs component.
                    currentTabs = tabsObjects[loopTabsComponents].tabs,

                        // Enabled tabs in the current .tabs component.
                        currentEnabledTabs = tabsObjects[loopTabsComponents].enabledTabs,

                        // Enabled tabpanels in the current .tabs component.
                        currentTabpanels = tabsObjects[loopTabsComponents].tabpanels,

                        // The current tab.
                        currentTab = item,

                        // The current tab index number in enabledTabs.
                        currentTabIndex = currentEnabledTabs.indexOf(item),

                        // The current tabpanel.
                        currentTabpanel = document.getElementById(item.getAttribute('aria-controls'));


                    // On click on tab.
                    item.addEventListener('click', function () {

                        // Every tab in the current .tabs component.
                        currentTabs.forEach(function (item) {

                            // Deselect tab.
                            deselectTab(item);

                        });


                        // Every tabpanel in the current .tabs component.
                        currentTabpanels.forEach(function (item) {

                            // Deselect tabpanel.
                            deselectTabpanel(item);

                        });


                        // Select the current tab.
                        selectTab(currentTab);


                        // Select the current tabpanel.
                        selectTabpanel(currentTabpanel);

                    });// End: On click on tab.


                    // On keydown on tab.
                    item.addEventListener('keydown', function (tabsTabKeydown) {

                        // Go to first tab.
                        function firstTab() {

                            // Deselect current tab and correspondent tabpanel.
                            deselectTab(currentEnabledTabs[currentTabIndex]);
                            deselectTabpanel(document.getElementById(currentEnabledTabs[currentTabIndex].getAttribute('aria-controls')));

                            // Select first tab and correspondent tabpanel.
                            selectTab(currentEnabledTabs[0]);
                            selectTabpanel(document.getElementById(currentEnabledTabs[0].getAttribute('aria-controls')));

                        }// End: firstTab().


                        // Go to previous tab.
                        function previousTab() {

                            // Deselect current tab and correspondent tabpanel.
                            deselectTab(currentEnabledTabs[currentTabIndex]);
                            deselectTabpanel(document.getElementById(currentEnabledTabs[currentTabIndex].getAttribute('aria-controls')));

                            // Select previous tab and correspondent tabpanel.
                            selectTab(currentEnabledTabs[currentTabIndex - 1]);
                            selectTabpanel(document.getElementById(currentEnabledTabs[currentTabIndex - 1].getAttribute('aria-controls')));

                        }// End: previousTab().


                        // Go to next tab.
                        function nextTab() {

                            // Deselect current tab and correspondent tabpanel.
                            deselectTab(currentEnabledTabs[currentTabIndex]);
                            deselectTabpanel(document.getElementById(currentEnabledTabs[currentTabIndex].getAttribute('aria-controls')));

                            // Select next tab and correspondent tabpanel.
                            selectTab(currentEnabledTabs[currentTabIndex + 1]);
                            selectTabpanel(document.getElementById(currentEnabledTabs[currentTabIndex + 1].getAttribute('aria-controls')));

                        }// End: nextTab().


                        // Go to last tab.
                        function lastTab() {

                            // Deselect current tab and correspondent tabpanel.
                            deselectTab(currentEnabledTabs[currentTabIndex]);
                            deselectTabpanel(document.getElementById(currentEnabledTabs[currentTabIndex].getAttribute('aria-controls')));

                            // Select last tab and correspondent tabpanel.
                            selectTab(currentEnabledTabs[currentEnabledTabs.length - 1]);
                            selectTabpanel(document.getElementById(currentEnabledTabs[currentEnabledTabs.length - 1].getAttribute('aria-controls')));

                        }// End: lastTab().


                        switch (tabsTabKeydown.keyCode) {
                            case 13:// Key press: enter

                                console.log('PUXL tabs(): Pressed Enter (keyCode ' + tabsTabKeydown.keyCode + ') on ' + item.id + '. Focus tabpanel.');
                                document.getElementById(item.getAttribute('aria-controls')).focus();

                                break;
                            case 27:// Key press: escape

                                console.log('PUXL tabs(): Pressed Escape (keyCode ' + tabsTabKeydown.keyCode + ') on ' + item.id + '. Loose focus.');
                                item.blur();

                                break;
                            case 35:// Key press: end

                                console.log('PUXL tabs(): Pressed End (keyCode ' + tabsTabKeydown.keyCode + ') on ' + item.id + '. Go to last tab.');
                                lastTab();

                                break;
                            case 36:// Key press: home

                                console.log('PUXL tabs(): Pressed Home (keyCode ' + tabsTabKeydown.keyCode + ') on ' + item.id + '. Go to first tab.');
                                firstTab();

                                break;
                            case 37:// Key press: left

                                console.log('PUXL tabs(): Pressed Left (keyCode ' + tabsTabKeydown.keyCode + ') on ' + item.id + '. Go to previous tab.');
                                previousTab();

                                break;
                            case 38:// Key press: up

                                console.log('PUXL tabs(): Pressed Up (keyCode ' + tabsTabKeydown.keyCode + ') on ' + item.id + '. Go to previous tab.');
                                previousTab();

                                break;
                            case 39:// Key press: right

                                console.log('PUXL tabs(): Pressed Right (keyCode ' + tabsTabKeydown.keyCode + ') on ' + item.id + '. Go to next tab.');
                                nextTab();

                                break;
                            case 40:// Key press: down

                                console.log('PUXL tabs(): Pressed Down (keyCode ' + tabsTabKeydown.keyCode + ') on ' + item.id + '. Go to next tab.');
                                nextTab();

                                break;
                        }

                    });// End: On keydown on tab.

                }// End if: If the parent .tabs component id is equal to the current tabsObject id.

            }// End for loop: Starting count from 0, and as many times as there are tabs objects in tabsObjects.

        });// End: Assign a function to every tab.


        // Assign a function to every tabpanel.
        allTabpanels.forEach(function (item) {

            // On keydown on tabpanel.
            item.addEventListener('keydown', function (tabsTabpanelKeydown) {

                switch (tabsTabpanelKeydown.keyCode) {
                    case 27:// Key press: escape

                        console.log('PUXL tabs(): Pressed Escape (keyCode ' + tabsTabpanelKeydown.keyCode + ') on ' + item.id + '. Loose focus.');
                        item.blur();

                        break;
                }

            });// End: On keydown on tabpanel.

        });// End: Assign a function to every tabpanel.

    }// End if: If there are no .tabs components.

}// puxl_tabs()

////////////////////////////This code will help us to register the domain where the website is with the framework installed/////7
////////////////////////////This code will help us to register the domain where the website is with the framework installed/////7
var QAURL = window.location;
var formData = new FormData();
formData.append("action", "qa");
formData.append("url", QAURL);
var xhr = new XMLHttpRequest();
xhr.open("POST", "//puxl.io/track/wp-admin/admin-ajax.php");
xhr.send(formData);

