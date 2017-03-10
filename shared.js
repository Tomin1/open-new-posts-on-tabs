/*
 * WebExtension that opens new forum posts on new tabs with a single click
 * Copyright (C) 2017  Tomi Leppänen

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function checkForLinks(selector) {
    var n = document.querySelectorAll(selector).length;
    if (n > 0)
        browser.runtime.sendMessage(n);
}

function setup(selector) {
    function handleRequest(message, sender, sendResponse) {
        var anchors = document.querySelectorAll(selector);
        var links = [];
        for (var a = 0; a < anchors.length; a++)
            links[links.length] = anchors[a].href;
        sendResponse(links);
    }

    browser.runtime.onMessage.addListener(handleRequest);
    checkForLinks(selector);
}
