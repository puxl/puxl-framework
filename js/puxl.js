/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//    PUXL framework
//
//    Version:     1-beta
//
//    Author:      Iñigo Garcia (@MrKanuel)
//
//    Route:       puxl-framework/js/puxl.js
//
//    License:     GNU General Public License v3.0
//                 https://github.com/puxl/puxl-framework/blob/master/LICENSE
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/


'use strict';


var
  // html: The root <html> tag.
  html = document.documentElement,

  // body: The <body> tag.
  body = document.body,

  // agent: The browser user-agent.
  agent = navigator.userAgent,

  // url: The document location.
  url = window.location,

  // stats: A new FormData object.
  stats = new FormData(),

  // xhr: A new XML Http Request.
  xhr = new XMLHttpRequest();


// This code manages class="no-js" and class="js" in <html> tag.
// Is necessary for some modules.
// If <html> tag contains class="no-js"  - - - - - - - - - - - - - - - - - - - -
if (html.classList.contains('no-js')) {

  // Replace from <html> tag class="no-js" with class="js" - - - - - - - - - - -
  html.classList.replace('no-js', 'js');

// If <html> tag does not contain class="js" - - - - - - - - - - - - - - - - - -
} else if (!html.classList.contains('js')) {

  // Add class="js" to <html> tag  - - - - - - - - - - - - - - - - - - - - - - -
  html.classList.add('js');

}


// This code helps us for statistical purposes to know where PUXL framework
// is published.
// Add "action" key with a value of "qa" to the stats object - - - - - - - - - -
stats.append('action', 'qa');

// Add "url" key with value of url.href to the stats object  - - - - - - - - - -
stats.append('url', url.href);

// Open a "POST" request to puxl.io/track  - - - - - - - - - - - - - - - - - - -
xhr.open('POST', '//puxl.io/track/wp-admin/admin-ajax.php');

// Send the FormData object to puxl.io/track - - - - - - - - - - - - - - - - - -
xhr.send(stats);
