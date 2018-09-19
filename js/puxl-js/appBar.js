/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//    Puxl
//
//    Version:     1-beta
//
//    Author:      Iñigo Garcia (@MrKanuel)
//
//    Route:       puxl-framework/js/puxl/appBar.js
//
//    Requires:    puxl-framework/css/puxl/compound/_bar.scss
//
//    License:     The MIT License (MIT)
//                 https://github.com/puxl/puxl-framework/blob/master/LICENSE
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/


function puxl_appBar(id) {
  'use strict';

  var
    // appBar: the found appBar.
    appBar = document.getElementById(id),

    // appBarToggler: the appBarCollapsible toggle button.
    appBarToggler = appBar.querySelector('.toggler'),

    // appBarTogglerImg: the toggle button icon.
    appBarTogglerIcon = appBarToggler.querySelector('img'),

    // appBarTogglerText: the toggle button text.
    appBarTogglerText = appBarToggler.querySelector('span'),

    // appBarCollapsible: the collapsible section.
    appBarCollapsible = appBar.querySelector('#' + appBarToggler.getAttribute('aria-controls')),

    // appBarTogglerIconPath: the path to icons folder.
    appBarTogglerIconPath = 'img/puxl-icons/',

    // appBarTogglerIconShown: the path to toggler icon when collapsible is shown.
    appBarTogglerIconShown = 'cross.svg',

    // appBarTogglerIconHidden: the path to toggler icon when collapsible is hidden.
    appBarTogglerIconHidden = 'menu-burger.svg',

    // appBarTogglerTextShown: the toggler text when collapsible is shown.
    appBarTogglerTextShown = 'Close',

    // appBarTogglerTextHidden: the toggler text when collapsible is hidden.
    appBarTogglerTextHidden = 'Menu';


  // Show collapsible.
  function showCollapsible() {
    // set appBarToggler attribute "aria-expanded" to "true".
    appBarToggler.setAttribute('aria-expanded', 'true');

    // set appBarToggler icon attribute "src" to the path in appBarTogglerIconShown.
    appBarTogglerIcon.setAttribute('src', appBarTogglerIconPath + appBarTogglerIconShown);

    // set appBarToggler text to appBarTogglerTextShown.
    appBarTogglerText.innerHTML = appBarTogglerTextShown;

    // set appBarCollapsible attribute "aria-hidden" to "false".
    appBarCollapsible.setAttribute('aria-hidden', 'false');
  }


  // Hide collapsible.
  function hideCollapsible() {
    // set appBarToggler attribute "aria-expanded" to "false".
    appBarToggler.setAttribute('aria-expanded', 'false');

    // set appBarToggler icon attribute "src" to the path in appBarTogglerIconHidden.
    appBarTogglerIcon.setAttribute('src', appBarTogglerIconPath + appBarTogglerIconHidden);

    // set appBarToggler text to appBarTogglerTextHidden.
    appBarTogglerText.innerHTML = appBarTogglerTextHidden;

    // set appBarCollapsible attribute "aria-hidden" to "true".
    appBarCollapsible.setAttribute('aria-hidden', 'true');
  }


  // If appBar does not exist, return error message on console.
  if (document.getElementById(id) === null) {

    console.log('Puxl appBar(): Sorry, #' + id + ' was not found.');

  // If appBar exists, return success message on console and do the magic.
  } else {

    console.log('Puxl appBar(): #' + id + ' was found.');

    // If collapsible is shown.
    if (appBarCollapsible.getAttribute('aria-hidden') === 'false') {

      // Reset attributes for appBarToggler and appBarCollapsible.
      showCollapsible();

    // If collapsible is hidden.
    } else {

      // Reset attributes for appBarToggler and appBarCollapsible.
      hideCollapsible();

    }// if (appBarCollapsible.getAttribute('aria-hidden') === 'false')

    // On clicking on toggler.
    appBarToggler.onclick = function () {

      // If collapsible is shown.
      if (appBarCollapsible.getAttribute('aria-hidden') === 'false') {

        // Hide collapsible.
        hideCollapsible();

      // If collapsible is hidden.
      } else {

        // Show collapsible.
        showCollapsible();

      }// if (appBarCollapsible.getAttribute('aria-hidden') === 'false')

    };// appBarToggler.onclick

  }// if (document.getElementById(id) === null)

}// puxl_appBar(id)
