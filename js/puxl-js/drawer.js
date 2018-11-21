/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//    Puxl
//
//    Version:     1-beta
//
//    Author:      Iñigo Garcia (@MrKanuel)
//
//    Route:       puxl-framework/js/puxl/drawer.js
//
//    Requires:    puxl-framework/css/puxl/compound/_drawer.scss
//
//    License:     The MIT License (MIT)
//                 https://github.com/puxl/puxl-framework/blob/master/LICENSE
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/


function puxl_drawer(togglerId) {
  'use strict';

  var
    // toggler: the id of the button that opens the drawer.
    toggler = document.getElementById(togglerId),

    // drawer: the id of the drawer element.
    drawer = document.getElementById(toggler.getAttribute('aria-controls'));


  // Show drawer.
  function showDrawer() {

    // set toggler attribute "aria-expanded" to "true".
    toggler.setAttribute('aria-expanded', 'true');

    // set drawer attribute "aria-hidden" to "false".
    drawer.setAttribute('aria-hidden', 'false');

  }


  // Hide drawer.
  function hideDrawer() {

    // set toggler attribute "aria-expanded" to "false".
    toggler.setAttribute('aria-expanded', 'false');

    // set drawer attribute "aria-hidden" to "true".
    drawer.setAttribute('aria-hidden', 'true');

  }


  // Check if element is child of ancestor.
  function checkAncestor(element, ancestor) {

    // While element is not undefined, null, or the body tag.
    while (element !== undefined && element !== null && element.tagName !== 'BODY') {

      // If element is ancestor.
      if (element === ancestor) {
        return true;
      }

      // Set element value to the value of its parent element.
      element = element.parentNode;
    }

    return false;

  }// End: function checkAncestor(element, ancestor)


  // If toggler does not exist.
  if (document.getElementById(togglerId) === null) {

    // Return error message on console.
    console.log('Puxl drawer(): Sorry, #' + togglerId + ' was not found.');

  // If toggler does exist.
  } else {

    // Return success message on console.
    console.log('Puxl drawer(): #' + drawer.id + ' was found.');


    // On click anywhere in the document.
    document.addEventListener('click', function (drawerDocumentClick) {

      // If drawer is hidden.
      if (drawer.getAttribute('aria-hidden') === 'true') {

        // If click on toggler.
        if (drawerDocumentClick.target === toggler) {

          // Show drawer.
          showDrawer();

        }// End if: If click on toggler.

      // If drawer is shown.
      } else {

        // If click not on drawer.
        if (drawerDocumentClick.target !== drawer) {

          // If not clicked on drawer descendants.
          if (checkAncestor(drawerDocumentClick.target, drawer) === false) {

            // Hide drawer.
            hideDrawer();

          }// End if: If not clicked on drawer descendants.

        }// End if: If click not on drawer.

      }// End if: If drawer is hidden.

    });// End: On click anywhere in the document.


    // On press escape key.
    document.addEventListener('keydown', function (drawerKeyEsc) {

      // If drawer is shown.
      if (drawer.getAttribute('aria-hidden') === 'false') {

        // If key pressed is "Escape".
        if (drawerKeyEsc.keyCode === 27) {

          // Hide drawer.
          hideDrawer();

        }// End if: If key pressed is "Escape".

      }// End if: If drawer is shown.

    });// End: On press escape key.

  }// End if: If toggler does not exist.

}// puxl_drawer(togglerId)
