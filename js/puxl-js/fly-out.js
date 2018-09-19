/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//    Puxl
//
//    Version:     1-beta
//
//    Author:      Iñigo Garcia (@MrKanuel)
//
//    Route:       puxl-framework/js/puxl/fly-out.js
//
//    Requires:    puxl-framework/css/puxl/compound/_fly-out.scss
//
//    License:     The MIT License (MIT)
//                 https://github.com/puxl/puxl-framework/blob/master/LICENSE
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/


function puxl_flyout() {
  'use strict';

  var
    // flyoutComponents: every .flyout component.
    flyoutComponents = document.getElementsByClassName('flyout'),

    // flyoutObjects: empty array to store the structure of all fly-outs.
    flyoutObjects = [],

    // flyoutTogglerIconPath: the path to icons folder.
    flyoutTogglerIconPath = 'img/puxl/puxl-icons/',

    // flyoutTogglerUp: the icon when content is shown.
    flyoutTogglerUp = 'drop-arrow--n.svg',

    // flyoutTogglerDown: the icon when content is hidden.
    flyoutTogglerDown = 'drop-arrow--s.svg';


  // If there are two or more fly-outs.
  if (flyoutComponents.length >= 2) {

    // Return message on console.
    console.log('Puxl flyout(): ' + flyoutComponents.length + ' .flyout components were found.');

  // If there is just one fly-out.
  } else {

    // Return message on console.
    console.log('Puxl flyout(): ' + flyoutComponents.length + ' .flyout component was found.');

  }// End if: If there are two or more fly-outs.


  // Hide .content in all fly-outs.
  function hideAllFlyouts() {

    Array.prototype.forEach.call(flyoutComponents, function (getFlyout) {

      var
        // Get .title.
        title = getFlyout.querySelector('.title'),

        // Get .toggler.
        toggler = getFlyout.querySelector('.toggler'),

        // Get .toggler icon.
        icon = getFlyout.querySelector('.toggler img'),

        // Get .content.
        content = getFlyout.querySelector('.content');


      // set 'aria-expanded' to 'false' for .title and .toggler.
      title.setAttribute('aria-expanded', 'false');
      toggler.setAttribute('aria-expanded', 'false');


      // set .toggler icon pointing down.
      icon.setAttribute('src', flyoutTogglerIconPath + flyoutTogglerDown);


      // If this fly-out has 'down' class.
      if (getFlyout.classList.contains('down') === true) {

        // set .toggler icon pointing down.
        icon.setAttribute('src', flyoutTogglerIconPath + flyoutTogglerDown);

      }// End if: If this fly-out has 'down' class.


      // If this fly-out has 'up' class.
      if (getFlyout.classList.contains('up') === true) {

        // set .toggler icon pointing up.
        icon.setAttribute('src', flyoutTogglerIconPath + flyoutTogglerUp);

      }// End if: If this fly-out has 'up' class.


      // set 'aria-hidden' to 'false' for .content.
      content.setAttribute('aria-hidden', 'true');

    });// End: Array.prototype.forEach.call(flyoutComponents, function (getFlyout)

  }// End: function hideAllFlyouts()


  // For each found fly-out:
  Array.prototype.forEach.call(flyoutComponents, function (thisFlyout, thisFlyoutCount) {

    var
      // thisFlyoutNumber: the number for this fly-out.
      thisFlyoutNumber = thisFlyoutCount + 1,

      // thisFlyoutTitle: the title of this fly-out.
      thisFlyoutTitle = thisFlyout.getElementsByClassName('title')[0],

      // thisFlyoutToggler: the toggler for this fly-out.
      thisFlyoutToggler,

      // thisFlyoutTogglerImg: img element for this fly-out toggler.
      thisFlyoutTogglerImg,

      // thisFlyoutContent: the content of this fly-out.
      thisFlyoutContent = thisFlyout.getElementsByClassName('content')[0],

      // thisFlyoutContent: the content of this fly-out.
      thisFlyoutItems = thisFlyoutContent.querySelectorAll('*'),

      // flyoutObject: empty object to learn the structure of the current fly-out.
      flyoutObject = {
        id: '',
        direction: 'down',
        enabledItems: []
      },

      // empty variables for different operations.
      loopThisFlyoutItems,
      thisFlyoutItem;


    // Show this fly-out .content.
    function showFlyout() {

      // set 'aria-expanded' to 'true' for .title and .toggler.
      thisFlyoutTitle.setAttribute('aria-expanded', 'true');
      thisFlyoutToggler.setAttribute('aria-expanded', 'true');

      // set .toggler icon pointing up.
      thisFlyoutTogglerImg.setAttribute('src', flyoutTogglerIconPath + flyoutTogglerUp);

      // If this fly-out has 'down' class.
      if (thisFlyout.classList.contains('down') === true) {

        // set .toggler icon pointing up.
        thisFlyoutTogglerImg.setAttribute('src', flyoutTogglerIconPath + flyoutTogglerUp);

      }// End if: If this fly-out has 'down' class.

      // If this fly-out has 'up' class.
      if (thisFlyout.classList.contains('up') === true) {

        // set .toggler icon pointing down.
        thisFlyoutTogglerImg.setAttribute('src', flyoutTogglerIconPath + flyoutTogglerDown);

      }// End if: If this fly-out has 'up' class.

      // set 'aria-hidden' to 'false' for .content.
      thisFlyoutContent.setAttribute('aria-hidden', 'false');

    }// End: function showFlyout().


    // Hide this fly-out .content.
    function hideFlyout() {

      // set 'aria-expanded' to 'false' for .title and .toggler.
      thisFlyoutTitle.setAttribute('aria-expanded', 'false');
      thisFlyoutToggler.setAttribute('aria-expanded', 'false');

      // set .toggler icon pointing down.
      thisFlyoutTogglerImg.setAttribute('src', flyoutTogglerIconPath + flyoutTogglerDown);

      // If this fly-out has 'down' class.
      if (thisFlyout.classList.contains('down') === true) {

        // set .toggler icon pointing down.
        thisFlyoutTogglerImg.setAttribute('src', flyoutTogglerIconPath + flyoutTogglerDown);

      }// End if: If this fly-out has 'down' class.

      // If this fly-out has 'up' class.
      if (thisFlyout.classList.contains('up') === true) {

        // set .toggler icon pointing up.
        thisFlyoutTogglerImg.setAttribute('src', flyoutTogglerIconPath + flyoutTogglerUp);

      }// End if: If this fly-out has 'up' class.

      // set 'aria-hidden' to 'false' for .content.
      thisFlyoutContent.setAttribute('aria-hidden', 'true');

    }// End: function hideFlyout().


    // Toggle show/hide state of this fly-out .content.
    function toggleFlyout() {

      // If .content is hidden.
      if (thisFlyoutContent.getAttribute('aria-hidden') === 'true') {

        // hide all fly-outs, and return message on console.
        hideAllFlyouts();
        console.log('Puxl flyout(): Hide all fly-outs.');

        // show this fly-out, and return message on console.
        showFlyout();
        console.log('Puxl flyout(): Show #' + thisFlyoutContent.id + '.');


      // If .content is shown.
      } else {

        // hide this fly-out, and return message on console.
        hideFlyout();
        console.log('Puxl flyout(): Hide #' + thisFlyoutContent.id + '.');

      }// End if: If .content is hidden.

    }// End: function toggleFlyout().


    // If this fly-out does not have any id attribute.
    if (thisFlyout.getAttribute('id') === null) {

      // Set a generated secuential id name.
      thisFlyout.setAttribute('id', 'flyout-' + thisFlyoutNumber);

    }// End if: If this fly-out does not have any id attribute.


    // Add this id to flyoutObject.
    flyoutObject.id = thisFlyout.id;


    // If this fly-out has class 'up'.
    if (thisFlyout.classList.contains('up')) {

      // Set direction to 'up'.
      flyoutObject.direction = 'up';

    }// End if: If this fly-out has class 'up'.


    // If .title does not have any id attribute.
    if (thisFlyoutTitle.getAttribute('id') === null) {

      // Set a generated secuential id name.
      thisFlyoutTitle.setAttribute('id', 'flyout-' + thisFlyoutNumber + '__title');

    }// End if: If .title does not have any id attribute.


    // If .title does not have any aria-expanded attribute.
    if (thisFlyoutTitle.getAttribute('aria-expanded') === null) {

      // Set aria-expanded to false.
      thisFlyoutTitle.setAttribute('aria-expanded', 'false');

    }// End if: If .title does not have any aria-expanded attribute.


    // If .title does not have any aria-haspopup attribute.
    if (thisFlyoutTitle.getAttribute('aria-haspopup') === null) {

      // Set aria-haspopup to true.
      thisFlyoutTitle.setAttribute('aria-haspopup', 'true');

    }// End if: If .title does not have any aria-haspopup attribute.


    // If there is a .toggler button.
    if (thisFlyout.getElementsByClassName('toggler')[0] !== undefined) {

       //thisFlyoutToggler: the button element to toggle this fly-out.
      thisFlyoutToggler = thisFlyout.getElementsByClassName('toggler')[0];

      // thisFlyoutTogglerImg: img element for this fly-out toggler.
      thisFlyoutTogglerImg = thisFlyoutToggler.getElementsByTagName('img')[0];

    // Else, if there is no toggler button
    } else {

       //thisFlyoutToggler: create a button element to toggle this fly-out.
      thisFlyoutToggler = document.createElement('button');

      // set button 'class' attribute to 'toggler'.
      thisFlyoutToggler.setAttribute('class', 'toggler');

      // set button 'aria-labelledby' attribute to .title 'id'.
      thisFlyoutToggler.setAttribute('aria-labelledby', thisFlyoutTitle.id);

      // set button 'type' attribute to 'button'.
      thisFlyoutToggler.setAttribute('type', 'button');

      // thisFlyoutTogglerImg: create a img element for this button element.
      thisFlyoutTogglerImg = document.createElement('img');

      // set img 'alt' attribute to '' (empty).
      thisFlyoutTogglerImg.setAttribute('alt', '');

      // set img 'aria-hidden' attribute to 'true'.
      thisFlyoutTogglerImg.setAttribute('aria-hidden', 'true');

      // append thisFlyoutTogglerImg to thisFlyoutToggler.
      thisFlyoutToggler.appendChild(thisFlyoutTogglerImg);

      // prepend thisFlyoutToggler before thisFlyoutContent.
      thisFlyout.insertBefore(thisFlyoutToggler, thisFlyoutContent);

    }// End if: If there is a .toggler button.


    // If .toggler does not have any 'aria-expanded' attribute.
    if (thisFlyoutToggler.getAttribute('aria-expanded') === null) {

      // Set 'aria-expanded' to false.
      thisFlyoutToggler.setAttribute('aria-expanded', 'false');

    }// End if: If .toggler does not have any 'aria-expanded' attribute.


    // If .toggler does not have any 'type' attribute.
    if (thisFlyoutToggler.getAttribute('type') === null) {

      // set 'type' attribute to 'button'.
      thisFlyoutToggler.setAttribute('type', 'button');

    }// End if: If .toggler does not have any 'type' attribute.


    // If .toggler icon does not have any 'aria-hidden' attribute.
    if (thisFlyoutTogglerImg.getAttribute('aria-hidden') === null) {

      // set 'aria-hidden' attribute to 'true'.
      thisFlyoutTogglerImg.setAttribute('aria-hidden', 'true');

    }// End if: If .toggler icon does not have any 'aria-hidden' attribute.


    // If .content does not have any 'id' attribute.
    if (thisFlyoutContent.getAttribute('id') === null) {

      // Set a generated secuential 'id' name.
      thisFlyoutContent.setAttribute('id', 'flyout-' + thisFlyoutNumber + '__content');

    }// End if: If .content does not have any 'id' attribute.


    // If .content does not have any 'aria-labelledby' attribute.
    if (thisFlyoutContent.getAttribute('aria-labelledby') === null) {

      // Set the title 'id' value as 'aria-labelledby' value.
      thisFlyoutContent.setAttribute('aria-labelledby', thisFlyoutTitle.id);

    }// End if: If .content does not have any 'aria-labelledby' attribute.


    // If .content does not have any 'aria-hidden' attribute.
    if (thisFlyoutContent.getAttribute('aria-hidden') === null) {

      // Set 'aria-hidden' to true.
      thisFlyoutContent.setAttribute('aria-hidden', 'true');

    }// End if: If .content does not have any 'aria-hidden' attribute.


    // Loop through each element in this fly-out .content.
    for (loopThisFlyoutItems = 0; loopThisFlyoutItems < thisFlyoutItems.length; loopThisFlyoutItems++) {

      // thisFlyoutItem: the current item in this loop of fly-out .content.
      thisFlyoutItem = thisFlyoutItems[loopThisFlyoutItems];

      // If this item is a link.
      if (thisFlyoutItem.tagName === 'A') {

        // If this link is not disabled.
        if (thisFlyoutItem.getAttribute('aria-disabled') !== 'true') {

          // Add this item to list of enabled items.
          flyoutObject.enabledItems.push(thisFlyoutItem);

        }// End if: if (thisFlyoutItem.getAttribute('aria-disabled') !== 'true')

      }// End if: if (thisFlyoutItem.tagName === 'A')

      // If this item is a button.
      if (thisFlyoutItem.tagName === 'BUTTON') {

        // If this button is not disabled.
        if (thisFlyoutItem.getAttribute('disabled') === null) {

          // Add this item to list of enabled items.
          flyoutObject.enabledItems.push(thisFlyoutItem);

        }// End if: if (thisFlyoutItem.getAttribute('disabled') === null)

      }// End if: if (thisFlyoutItem.tagName === 'BUTTON')

    }// End for loop: Loop through each element in this fly-out .content.


    // Add this flyoutObject to flyoutObjects.
    flyoutObjects.push(flyoutObject);


    // Hide this fly-out.
    hideFlyout();


    // Click on .title.
    thisFlyoutTitle.addEventListener('click', function () {

      // If .title is not a link.
      if (thisFlyoutTitle.tagName !== 'A') {

        // Focus and trigger click on .togler.
        thisFlyoutToggler.focus();
        thisFlyoutToggler.click();

      }// End if: If .title is not a link.

    });// End: thisFlyoutTitle.addEventListener('click', function ())


    // Click on .toggler.
    thisFlyoutToggler.addEventListener('click', function () {

      // Toggle fly-out show/hide.
      toggleFlyout();

    });// End: thisFlyoutToggler.addEventListener('click', function ())


    // Keyboard on .toggler.
    thisFlyoutToggler.addEventListener('keydown', function (thisFlyoutTogglerKeydownEvent) {

      // Press esc to blur this .toggler.
      switch (thisFlyoutTogglerKeydownEvent.keyCode) {
      case 27:// Key press: esc

        // If fly-out content is shown.
        if (thisFlyoutContent.getAttribute('aria-hidden') === 'false') {

          // Hide fly-out content.
          hideFlyout();

        }// End if: If .content is shown.

        // Blur this fly-out toggler.
        thisFlyoutToggler.blur();

        break;
      }

    });

  });// End: Array.prototype.forEach.call(flyoutComponents, function (thisFlyout, thisFlyoutCount)


  // On click anywhere in the document.
  document.addEventListener('click', function (flyoutDocumentClick) {

    var
      // target: Where the click event is fired.
      target = flyoutDocumentClick.target;


    // While target is not undefined, null, or the body tag.
    while (target !== undefined && target !== null && target.tagName !== 'BODY') {

      // If target is a fly-out, or descendant of a fly-out.
      if (target.classList.contains('flyout') === true) {

        // Stop event from occurring.
        flyoutDocumentClick.stopPropagation();

        // End while loop.
        return true;

      }// End if: If target is a fly-out, or descendant of a fly-out.

      // Set target as its parent element.
      target = target.parentNode;

    }// End: while (target !== undefined && target !== null && target.tagName !== 'BODY')


    // Hide all fly-outs.
    hideAllFlyouts();

  });// End: On click anywhere in the document.

}// function puxl_flyout()
