/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//    Puxl
//
//    Version:     1-beta
//
//    Author:      Iñigo Garcia (@MrKanuel)
//
//    Route:       js/puxl/disclosure.js
//
//    Requires:    puxl-framework/css/puxl/compound/_disclosure.scss
//
//    License:     The MIT License (MIT)
//                 https://github.com/puxl/puxl-framework/blob/master/LICENSE
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/



function puxl_disclosure(iconPath, iconOpened, iconClosed, txtOpened, txtClosed) {
  'use strict';

  var
    // disclosureComponents: every .disclosure component.
    disclosureComponents = document.getElementsByClassName('disclosure'),

    // disclosureTogglerIconPath: the path to icons folder.
    disclosureTogglerIconPath = iconPath,

    // disclosureTogglerIconOpened: the icon when content is opened.
    disclosureTogglerIconOpened = iconOpened,

    // disclosureTogglerIconClosed: the icon when content is closed.
    disclosureTogglerIconClosed = iconClosed,

    // disclosureTogglerTextShown: the toggler text when content is opened.
    disclosureTogglerTextShown = txtOpened,

    // disclosureTogglerTextHidden: the toggler text when content is closed.
    disclosureTogglerTextHidden = txtClosed;





  // If no disclosure is found, return error message on console.
  if (disclosureComponents.length === 0) {

    console.log('Puxl disclosure(): Sorry, no disclosure was found.');

  // If any disclosure is found, return success message on console and do the magic.
  } else {

    // If there are more than one disclosures, return success message on console.
    if (disclosureComponents.length >= 2) {

      console.log('Puxl disclosure(): ' + disclosureComponents.length + ' disclosures were found.');

    // If there is one disclosures, return success message on console.
    } else {

      console.log('Puxl disclosure(): ' + disclosureComponents.length + ' disclosure was found.');

    }// End if: If there are more than one disclosures, return success message on console.


    // If <html> tag contains class="js".
    if (document.documentElement.classList.contains('js')) {

      // For each found disclosure:
      Array.prototype.forEach.call(disclosureComponents, function (thisDisclosure, thisDisclosureCount) {

        var
          // thisDisclosureNumber: the number for this disclosure.
          thisDisclosureNumber = thisDisclosureCount + 1,

          // thisDisclosureHeading: the header for this disclosure.
          thisDisclosureHeading = thisDisclosure.getElementsByTagName('h3')[0],

          // thisDisclosureToggler: the button in heading for this disclosure.
          thisDisclosureToggler = thisDisclosureHeading.querySelector('button'),

          // thisDisclosureTogglerIcon: create a img element for this button element.
          thisDisclosureTogglerIcon = document.createElement('img'),

          // thisDisclosureContent: the content for this disclosure.
          thisDisclosureContent = thisDisclosure.getElementsByTagName('div')[0];


        // Open disclosure.
        function disclosureOpen() {

          // Set this disclosure toggler button icon "src" attribute to opened icon path.
          thisDisclosureTogglerIcon.setAttribute('src', iconPath + disclosureTogglerIconOpened);

          // Set this disclosure content attribute "aria-hidden" to "false".
          thisDisclosureContent.setAttribute('aria-hidden', 'false');

        }// End: Open disclosure.


        // Close disclosure.
        function disclosureClose() {

          // Set this disclosure toggler button icon "src" attribute to closed icon path.
          thisDisclosureTogglerIcon.setAttribute('src', iconPath + disclosureTogglerIconClosed);

          // Set this disclosure content attribute "aria-hidden" to "true".
          thisDisclosureContent.setAttribute('aria-hidden', 'true');

        }// End: Close disclosure.



        // If this disclosure does not have any id attribute.
        if (thisDisclosure.hasAttribute('id') === false) {

          // Set id to 'disclosure-[thisDisclosureNumber]'.
          thisDisclosure.setAttribute('id', 'disclosure-' + thisDisclosureNumber);

        }// End if: If this disclosure does not have any id attribute.


        // If this disclosure heading does not have any id attribute.
        if (thisDisclosureHeading.hasAttribute('id') === false) {

          // Set id to 'disclosure-[thisDisclosureNumber]--heading'.
          thisDisclosureHeading.setAttribute('id', 'disclosure-' + thisDisclosureNumber + '--heading');

        }// End if: If this disclosure does not have any id attribute.


        // Set this disclosure toggler button "type" attribute to "button".
        thisDisclosureToggler.setAttribute('type', 'button');


        // Add icon to button.
        thisDisclosureToggler.appendChild(thisDisclosureTogglerIcon);


        // Set this disclosure toggler button icon "alt" attribute to "" (empty).
        thisDisclosureTogglerIcon.setAttribute('alt', '');


        // Set this disclosure toggler button icon "src" attribute to opened icon path.
        thisDisclosureTogglerIcon.setAttribute('src', iconPath + disclosureTogglerIconOpened);


        // Set this disclosure toggler button icon 'aria-hidden' attribute to 'true'.
        thisDisclosureTogglerIcon.setAttribute('aria-hidden', 'true');


        // If this disclosure content does not have any id attribute.
        if (thisDisclosureContent.hasAttribute('id') === false) {

          // Set id to 'disclosure-[thisDisclosureNumber]--content'.
          thisDisclosureContent.setAttribute('id', 'disclosure-' + thisDisclosureNumber + '--content');

        }// End if: If this disclosure does not have any id attribute.


        // Set this disclosure toggler button "aria-controls" attribute to content id.
        thisDisclosureToggler.setAttribute('aria-controls', thisDisclosureContent.getAttribute('id'));


        // Set content 'aria-labelledby' attribute to heading id.
        thisDisclosureContent.setAttribute('aria-labelledby', thisDisclosureHeading.getAttribute('id'));


        // If this disclosure content has aria-hidden="false".
        if (thisDisclosureContent.getAttribute('aria-hidden') === 'false') {

          // Set this disclosure toggler button 'aria-expanded' attribute to 'true'.
          thisDisclosureToggler.setAttribute('aria-expanded', 'true');

        // Else, if this disclosure content has aria-hidden="true", or no aria-hidden="".
        } else {

          // Set this disclosure toggler button 'aria-expanded' attribute to 'false'.
          thisDisclosureToggler.setAttribute('aria-expanded', 'false');


          // Set this disclosure toggler button icon "src" attribute to closed icon path.
          thisDisclosureTogglerIcon.setAttribute('src', iconPath + disclosureTogglerIconClosed);


          // Set this disclosure content 'aria-hidden' attribute to 'false'.
          thisDisclosureContent.setAttribute('aria-hidden', 'true');

        }// End if: If this disclosure content has aria-hidden="true".


        // Click on this disclosure toggler button.
        thisDisclosureToggler.addEventListener('click', function (thisDisclosureTogglerClickEvent) {

          // If thisDisclosureContent is closed.
          if (thisDisclosureContent.getAttribute('aria-hidden') === 'true') {

            // Open disclosure.
            disclosureOpen();

          // Else, if thisDisclosureContent is opened.
          } else if (thisDisclosureContent.getAttribute('aria-hidden') === 'false') {

            // Close disclosure.
            disclosureClose();

          }
        });// End: Click on this disclosure toggler button.

      });// End: For each found disclosure.

    }// End if: If <html> tag contains class="js".

  }// End if: If no disclosure exists, return error message on console.

}// puxl_disclosure()
