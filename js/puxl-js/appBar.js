/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//    PUXL framework
//
//    Version:     1
//
//    Author:      Iñigo Garcia (@MrKanuel)
//
//    Route:       puxl-framework/js/puxl-js/appBar.js
//
//    Requires:    puxl-framework/css/puxl/compound/_bar.scss
//
//    License:     GNU General Public License v3.0
//                 https://github.com/puxl/puxl-framework/blob/master/LICENSE
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/


function puxl_appBar(id, iconPath, iconOpened, iconClosed, txtOpened, txtClosed) {
  'use strict';

  var
    // mobileThreshold: the breakpoint limit between mobile screens an bigger ones.
    mobileThreshold = getComputedStyle(document.documentElement).getPropertyValue('--mobile-threshold'),

    // mediaQueryWidth: the mobile-threshold media-query.
    mediaQueryWidth = window.matchMedia("(min-width: " + mobileThreshold + ")"),

    // appBar: the found app bar.
    appBar = document.getElementById(id),

    // appBarToggler: the app bar toggle button.
    appBarToggler = appBar.querySelector('.toggler'),

    // appBarTogglerIcon: the toggle button icon.
    appBarTogglerIcon = appBarToggler.querySelector('img'),

    // appBarTogglerIconPath: the path to icons folder.
    appBarTogglerIconPath = iconPath,

    // appBarTogglerIconOpened: the path to toggler icon when menu is opened.
    appBarTogglerIconOpened = iconOpened,

    // appBarTogglerIconClosed: the path to toggler icon when menu is closed.
    appBarTogglerIconClosed = iconClosed,

    // appBarTogglerText: the toggle button text.
    appBarTogglerText = appBarToggler.querySelector('span'),

    // appBarTogglerTextOpened: the toggler text when menu is opened.
    appBarTogglerTextOpened = txtOpened,

    // appBarTogglerTextClosed: the toggler text when menu is closed.
    appBarTogglerTextClosed = txtClosed,

    // appBarNav: the navigation section.
    appBarNav = appBar.querySelector('nav'),

    // appBarMenu: the menu.
    appBarMenu = appBar.querySelector('nav > .subheading'),

    // appBarMenuOpened: the state of menu, closed by default on small screens.
    appBarMenuOpened = false;


  // Show menu.
  function showMenu() {

    console.log('PUXL appBar(): Show menu.');

    // set appBarToggler attribute "aria-expanded" to "true".
    appBarToggler.setAttribute('aria-expanded', 'true');

    // set appBarToggler icon attribute "src" to the path to appBarTogglerIconOpened.
    appBarTogglerIcon.setAttribute('src', appBarTogglerIconPath + appBarTogglerIconOpened);

    // set appBarToggler text to appBarTogglerTextOpened.
    appBarTogglerText.innerHTML = appBarTogglerTextOpened;

    // set appBarMenu attribute "aria-hidden" to "false".
    appBarMenu.setAttribute('aria-hidden', 'false');

  }// End: Show menu.


  // Hide menu.
  function hideMenu() {

    console.log('PUXL appBar(): Hide menu.');

    // set appBarToggler attribute "aria-expanded" to "false".
    appBarToggler.setAttribute('aria-expanded', 'false');

    // set appBarToggler icon attribute "src" to the path to appBarTogglerIconClosed.
    appBarTogglerIcon.setAttribute('src', appBarTogglerIconPath + appBarTogglerIconClosed);

    // set appBarToggler text to appBarTogglerTextClosed.
    appBarTogglerText.innerHTML = appBarTogglerTextClosed;

    // set appBarMenu attribute "aria-hidden" to "true".
    appBarMenu.setAttribute('aria-hidden', 'true');

  }// End: Hide menu.


  // Handle width media-query change.
  function handleWidthChange(mediaQueryWidthListener) {

    // If screen width is bigger than mobile threshold.
    if (mediaQueryWidth.matches) {

      console.log('PUXL appBar(): The screen is now bigger than mobile threshold.');

      // Show menu.
      showMenu();

    // If screen width is smaller than mobile threshold.
    } else {

      console.log('PUXL appBar(): The screen is now smaller than mobile threshold.');

      // If menu is opened.
      if (appBarMenuOpened === true) {

        console.log('PUXL appBar(): App bar menu opened = ' + appBarMenuOpened + '.');

        // Show menu.
        showMenu();

      // If menu is closed.
      } else {

        console.log('PUXL appBar(): App bar menu opened = ' + appBarMenuOpened + '.');

        // Hide menu.
        hideMenu();

      }// End if: If menu is opened.

    }// End if: If screen width is bigger than mobile threshold.

  }// End: Handle width media-query change.


  // If appBar does not exist, return error message on console.
  if (document.getElementById(id) === null) {

    console.log('PUXL appBar(): Sorry, #' + id + ' was not found.');

  // If appBar exists, return success message on console and do the magic.
  } else {

    console.log('PUXL appBar(): #' + id + ' was found.');

    console.log('PUXL appBar(): App bar menu opened = ' + appBarMenuOpened + '.');

    // If <html> tag contains class="js".
    if (document.documentElement.classList.contains('js')) {

      // If toggler does not have any id attribute.
      if (appBarToggler.hasAttribute('id') === false) {

        // Get this toggler an id.
        appBarToggler.setAttribute('id', appBar.id + '__toggler');

      }// End if: If toggler does not have any id attribute.


      // If menu does not have any id attribute.
      if (appBarMenu.hasAttribute('id') === false) {

        // Get this menu an ID.
        appBarMenu.setAttribute('id', appBar.id + '__menu');

      }// End if: If menu does not have any id attribute.


      // Configure toggler aria-controls attribute.
      appBarToggler.setAttribute('aria-controls', appBarMenu.id);


      // Configure toggler aria-haspopup attribute.
      appBarToggler.setAttribute('aria-haspopup', 'true');


      // Configure toggler type attribute.
      appBarToggler.setAttribute('type', 'button');


      // Configure navigation role.
      appBarNav.setAttribute('role', 'navigation');


      // If screen width is bigger than mobile threshold.
      if (mediaQueryWidth.matches) {

        console.log('PUXL appBar(): Screen is now bigger than mobile threshold.');

        // Show menu.
        showMenu();

      // If screen width is smaller than mobile threshold.
      } else {

        console.log('PUXL appBar(): Screen is now smaller than mobile threshold.');

        // If menu is closed.
        if (appBarMenuOpened === false) {

          // Hide menu.
          hideMenu();

        }// End if: If menu is closed.

      }// End if: If screen width is bigger than mobile threshold.


      // Detect the width media-query for mobile-threshold.
      if (matchMedia) {

        // Watch screen width change and handle changes with the handleWidthChange function.
        mediaQueryWidth.addListener(handleWidthChange);

      }// End if: Detect the width media-query for mobile-threshold.


      // On clicking on toggler.
      appBarToggler.onclick = function () {

        // If menu is closed.
        if (appBarMenuOpened === false) {

          // Change menu state to opened.
          appBarMenuOpened = true;

          console.log('PUXL appBar(): App bar menu opened = ' + appBarMenuOpened + '.');

          // Show menu.
          showMenu();

        // If menu is opened.
        } else {

          // Change menu state to closed.
          appBarMenuOpened = false;

          console.log('PUXL appBar(): App bar menu opened = ' + appBarMenuOpened + '.');

          // Hide menu.
          hideMenu();

        }// End if: If menu is closed.

      };// End: On clicking on toggler.


      // On press escape key.
      document.addEventListener('keydown', function (appBarMenuKeyEsc) {

        // If menu is opened.
        if (appBarMenuOpened === true) {

          // If key pressed is "Escape".
          if (appBarMenuKeyEsc.keyCode === 27) {

            // Change menu state to closed.
            appBarMenuOpened = false;

            console.log('PUXL appBar(): App bar menu opened = ' + appBarMenuOpened + '.');

            // Hide menu.
            hideMenu();

            appBarToggler.focus();

          }// End if: If key pressed is "Escape".

        }// End if: If menu is opened.

      });// End: On press escape key.

    }// End if: If <html> tag contains class="js".

  }// End if: If appBar does not exist, return error message on console.

}// puxl_appBar(id)
