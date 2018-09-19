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



function puxl_disclosure() {
  'use strict';

  var
    // disclosureComponents: every .disclosure component.
    disclosureComponents = document.getElementsByClassName('disclosure'),

    // disclosureTogglerIconPath: the path to icons folder.
    disclosureTogglerIconPath = 'img/puxl-icons/',

    // disclosureTogglerIconShown: the icon when content is shown.
    disclosureTogglerIconShown = 'arrow-n.svg',

    // disclosureTogglerIconHidden: the icon when content is hidden.
    disclosureTogglerIconHidden = 'arrow-s.svg',

    // disclosureTogglerTextShown: the toggler text when content is shown.
    disclosureTogglerTextShown = 'Hide content',

    // disclosureTogglerTextHidden: the toggler text when content is hidden.
    disclosureTogglerTextHidden = 'Show content';


  if (disclosureComponents.length >= 2) {
    console.log('Puxl disclosure(): ' + disclosureComponents.length + ' .disclosure components were found.');
  } else {
    console.log('Puxl disclosure(): ' + disclosureComponents.length + ' .disclosure component was found.');
  }


  // For each found disclosure:
  Array.prototype.forEach.call(disclosureComponents, function (thisDisclosure, thisDisclosureCount) {

    var
      // thisDisclosureNumber: the number for this disclosure.
      thisDisclosureNumber = thisDisclosureCount + 1,

      // thisDisclosureHeader: the header for this disclosure.
      thisDisclosureHeader = thisDisclosure.getElementsByTagName('header')[0],

      // thisDisclosureToggler: create a button element to toggle this disclosure.
      thisDisclosureToggler = document.createElement('button'),

      // thisDisclosureTogglerImg: create a img element for this button element.
      thisDisclosureTogglerImg = document.createElement('img'),

      // thisDisclosureTogglerSpan: create a span element for this button element.
      thisDisclosureTogglerSpan = document.createElement('span'),

      // thisDisclosureTogglerText: create a text node for this span element.
      thisDisclosureTogglerText = document.createTextNode(''),

      // thisDisclosureContent: the content for this disclosure.
      thisDisclosureContent = thisDisclosure.getElementsByTagName('div')[0];


    // set header id to 'disclosure-[thisDisclosureNumber]--header'.
    thisDisclosureHeader.setAttribute('id', 'disclosure-' + thisDisclosureNumber + '__header');

    // set content id to 'disclosure-[thisDisclosureNumber]--content'.
    thisDisclosureContent.setAttribute('id', 'disclosure-' + thisDisclosureNumber + '__content');

    // set content 'aria-labelledby' attribute to header id.
    thisDisclosureContent.setAttribute('aria-labelledby', thisDisclosureHeader.getAttribute('id'));

    // set button 'class' attribute to 'btn-icn'.
    thisDisclosureToggler.setAttribute('class', 'btn-icn');

    // set button 'type' attribute to 'button'.
    thisDisclosureToggler.setAttribute('type', 'button');

    // set button 'aria-controls' attribute to content id.
    thisDisclosureToggler.setAttribute('aria-controls', thisDisclosureContent.getAttribute('id'));

    // set img 'alt' attribute to '' (empty).
    thisDisclosureTogglerImg.setAttribute('alt', '');

    // set img 'src' attribute to '' (empty).
    thisDisclosureTogglerImg.setAttribute('src', '');

    // set img 'aria-hidden' attribute to 'true'.
    thisDisclosureTogglerImg.setAttribute('aria-hidden', 'true');

    // add 'thisDisclosureTogglerText' to span.
    thisDisclosureTogglerSpan.appendChild(thisDisclosureTogglerText);

    // add 'thisDisclosureTogglerImg' to button.
    thisDisclosureToggler.appendChild(thisDisclosureTogglerImg);

    // add 'thisDisclosureTogglerSpan' to button.
    thisDisclosureToggler.appendChild(thisDisclosureTogglerSpan);

    // add button to header.
    thisDisclosureHeader.appendChild(thisDisclosureToggler);


    function disclosureShow() {
      // set thisDisclosureToggler attribute "aria-expanded" to "true".
      thisDisclosureToggler.setAttribute('aria-expanded', 'true');

      // set thisDisclosureTogglerImg attribute "src" to the path in disclosureTogglerIconShown.
      thisDisclosureTogglerImg.setAttribute('src', disclosureTogglerIconPath + disclosureTogglerIconShown);

      // set thisDisclosureTogglerText value to disclosureTogglerTextShown.
      thisDisclosureTogglerText.nodeValue = disclosureTogglerTextShown;

      // set thisDisclosureContent attribute "aria-hidden" to "false".
      thisDisclosureContent.setAttribute('aria-hidden', 'false');
    }

    function disclosureHide() {
      // set thisDisclosureToggler attribute "aria-expanded" to "false".
      thisDisclosureToggler.setAttribute('aria-expanded', 'false');

      // set thisDisclosureTogglerImg attribute "src" to the path in disclosureTogglerIconHidden.
      thisDisclosureTogglerImg.setAttribute('src', disclosureTogglerIconPath + disclosureTogglerIconHidden);

      // set thisDisclosureTogglerText value to disclosureTogglerTextHidden.
      thisDisclosureTogglerText.nodeValue = disclosureTogglerTextHidden;

      // set thisDisclosureContent attribute "aria-hidden" to "true".
      thisDisclosureContent.setAttribute('aria-hidden', 'true');
    }


    // If thisDisclosureContent is hidden.
    if (thisDisclosureContent.getAttribute('aria-hidden') === 'true') {
      // set thisDisclosureTogglerImg attribute "src" to the path in disclosureTogglerIconHidden.
      thisDisclosureTogglerImg.setAttribute('src', disclosureTogglerIconPath + disclosureTogglerIconHidden);

      // set thisDisclosureTogglerText value to disclosureTogglerTextHidden.
      thisDisclosureTogglerText.nodeValue = disclosureTogglerTextHidden;
      
    // Else, if thisDisclosureContent is shown.
    } else if (thisDisclosureContent.getAttribute('aria-hidden') === 'false') {
      // set thisDisclosureTogglerImg attribute "src" to the path in disclosureTogglerIconShown.
      thisDisclosureTogglerImg.setAttribute('src', disclosureTogglerIconPath + disclosureTogglerIconShown);

      // set thisDisclosureTogglerText value to disclosureTogglerTextShown.
      thisDisclosureTogglerText.nodeValue = disclosureTogglerTextShown;
    }


    // Click on thisDisclosureToggler.
    thisDisclosureToggler.addEventListener('click', function (thisDisclosureTogglerClickEvent) {

      // If thisDisclosureContent is hidden.
      if (thisDisclosureContent.getAttribute('aria-hidden') === 'true') {

        // Show thisDisclosureContent.
        disclosureShow();

      // Else, if thisDisclosureContent is shown.
      } else if (thisDisclosureContent.getAttribute('aria-hidden') === 'false') {

        // Hide thisDisclosureContent.
        disclosureHide();
      }
    });


    // Release key on thisDisclosureToggler.
    thisDisclosureToggler.addEventListener('keyup', function (thisDisclosureTogglerKeyupEvent) {

      // If pressed key is "esc".
      if (thisDisclosureTogglerKeyupEvent.keyCode === 27) {

        // Blur thisDisclosureToggler.
        thisDisclosureToggler.blur();
      }
    });

  });// Array.prototype.forEach.call(disclosureComponents, function (thisDisclosure)

}// puxl_disclosure()
