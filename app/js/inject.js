/*jslint white: true, browser: true */
/*globals console, image, key, changes, chrome */

/**
* Inject.js
*
*/

var i, elems, url, img, image;

chrome.storage.local.get('image', function (result) {

    "use strict";

    image = result.image;

});

if (image) {

    img = image;

} else {

    img = 'http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-334393.jpg';

}

function changeBackground() {

    "use strict";

    url = decodeURIComponent(img);

    if (document.getElementsByClassName("pane-chat-body").length > 0) {

      document.getElementsByClassName("pane-chat-body")[0].style.background       = "url('" + url + "')";

      document.getElementsByClassName("pane-chat-body")[0].style.backgroundRepeat = 'no-repeat';

      document.getElementsByClassName("pane-chat-body")[0].style.backgroundSize = 'cover';

    }

    if (document.getElementById("app").length > 0) {

      document.getElementById("app").style.background = "url('" + url + "') no-repeat";

    }

}

changeBackground();

document.getElementById("app").addEventListener("click", changeBackground);
