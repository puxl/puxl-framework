/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//    Puxl
//
//    Version:     1-beta
//
//    Author:      Iñigo Garcia (@MrKanuel)
//
//    Route:       puxl-framework/js/puxl/appBarScroll.js
//
//    Requires:    puxl-framework/css/puxl/compound/_bar.scss
//
//    License:     The MIT License (MIT)
//                 https://github.com/puxl/puxl-framework/blob/master/LICENSE
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/


function puxl_appBarScroll(id) {
  'use strict';

  var
    // appBars: The list of found appBars.
    appBars = [],

    // scrollLast: The number of pixels that the document is scrolled vertically.
    scrollLast = document.documentElement.scrollTop,

    // scrollCurrent: The number of pixels that the document is currently scrolled vertically.
    scrollCurrent = window.pageYOffset,

    // scrollDelta.
    scrollDelta = 0,

    // scrollSteps.
    scrollSteps = 0;


  // Loop as many times as there are arguments passed to this appBarScroll() function.
  for (var i = 0; i < arguments.length; i ++) {

    // If appBar does not exist, return error message on console.
    if (document.getElementById(arguments[i]) === null) {

      console.log('Puxl appBarScroll(): Sorry, #' + arguments[i] + ' was not found.');

    // If appBar exists, return success message on console and add this appBar to appBars.
    } else {

      console.log('Puxl appBarScroll(): #' + arguments[i] + ' was found.');
      appBars.push(arguments[i]);

    }

  }// for (var i = 0; i < arguments.length; i ++)


  // On scroll:
  window.onscroll = function() {

    // scrollCurrent: The number of pixels that the document is currently scrolled vertically.
    scrollCurrent = window.pageYOffset;

    // scrollDelta: The difference between window.pageYOffset and scrollLast.
    scrollDelta = scrollCurrent - scrollLast;

    // scrollSteps: Add scrollDelta.
    scrollSteps = scrollSteps + scrollDelta;

    // scrollLast: Update scrollLast with the value of scrollCurrent.
    scrollLast = scrollCurrent;


    // For each appBar in appBars:
    appBars.forEach(function(appBar) {

      var
        // thisAppBar: The current appBar in the appBars array.
        thisAppBar = document.getElementById(appBar),

        // appBarHeight: The height value of thisAppBar.
        appBarHeight = thisAppBar.offsetHeight;


      // If thisAppBar has '.app', '.bar' and '.top' classes:
      if (thisAppBar.classList.contains('app') && thisAppBar.classList.contains('bar') && thisAppBar.classList.contains('top')) {

        // If scrollSteps is less than or equal to 0:
        if (scrollSteps <= 0) {

          // Set --app-bar--top value to 0.
          thisAppBar.style.setProperty('--app-bar--top', 0);

          // Update scrollSteps value to 0.
          scrollSteps = 0;

        // Else if scrollSteps is greater than or equal to appBarHeight:
        } else if (scrollSteps >= appBarHeight) {

          // Set --app-bar--top value to the negative value of appBarHeight in pixels.
          thisAppBar.style.setProperty('--app-bar--top', '-' + appBarHeight + 'px');

          // Update scrollSteps value to appBarHeight.
          scrollSteps = appBarHeight;

        // Else:
        } else {

          // Set --app-bar--top value to the negative value of scrollSteps in pixels.
          thisAppBar.style.setProperty('--app-bar--top', '-' + scrollSteps + 'px');

        }// if (scrollSteps <= 0)

      }// if (thisAppBar.classList.contains('app') && thisAppBar.classList.contains('bar') && thisAppBar.classList.contains('top'))


      // If thisAppBar has '.app', '.bar' and '.bottom' classes:
      if (thisAppBar.classList.contains('app') && thisAppBar.classList.contains('bar') && thisAppBar.classList.contains('bottom')) {

        // If scrollSteps is less than or equal to 0:
        if (scrollSteps <= 0) {

          // Set --app-bar--bottom value to 0.
          thisAppBar.style.setProperty('--app-bar--bottom', 0);

          // Update scrollSteps value to 0.
          scrollSteps = 0;

        // Else if scrollSteps is greater than or equal to appBarHeight:
        } else if (scrollSteps >= appBarHeight) {

          // Set --app-bar--bottom value to the negative value of appBarHeight in pixels.
          thisAppBar.style.setProperty('--app-bar--bottom', '-' + appBarHeight + 'px');

          // Update scrollSteps value to appBarHeight.
          scrollSteps = appBarHeight;

        // Else:
        } else {

          // Set --app-bar--bottom value to the negative value of scrollSteps in pixels.
          thisAppBar.style.setProperty('--app-bar--bottom', '-' + scrollSteps + 'px');

        }// if (scrollSteps <= 0)

      }// if (thisAppBar.classList.contains('app') && thisAppBar.classList.contains('bar') && thisAppBar.classList.contains('bottom'))

    });// appBars.forEach()

  };// window.onscroll

}// puxl_appBarScroll(id)
