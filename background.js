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

function requestLinks(tab) {
    function handleLinks(links) {
        for (var l = 0; l < links.length; l++) {
            browser.tabs.create({
                "active": false,
                "url": links[l],
                "windowId": tab.windowId
            });
        }
    }

    browser.tabs.sendMessage(tab.id, "links").then(handleLinks);
}

function handleMessage(number_of_links, sender, sendResponse) {
    browser.pageAction.show(sender.tab.id);
    browser.pageAction.onClicked.addListener(requestLinks);
}

browser.runtime.onMessage.addListener(handleMessage);
