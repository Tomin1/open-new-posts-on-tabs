Open new posts on tabs
======================
This Firefox WebExtension opens new forum posts on new tabs with a single
click. It only adds a button to url bar on pages that have unread posts. The
button opens all of the unread posts to new tabs on the same window.

Supported websites
------------------
Currently this addon works on some sites that use one of the following forum software:
 - Simple Machines Forum
 - phpBB
 - Discourse
 - vBulletin

This may not apply to all sites using these software, because of differing
themes or versions of software. If you notice that some site is not working,
please send me a patce (pull request) or open a bug report (an issue), but
first please read the contributing section.

Contributing
------------
If you would like to send a bug report to get support for a new site or
software, please include CSS selector for the new post links on the pages and
example urls for those pages. Otherwise it can be quite hard to quess what
changes should be done. If you have coding skills or you would like to learn,
adding support to this extension is fairly easy. Just take a look at existing
support and mimic it.

If you would like to contribute to this piece of software by sending a patch (a
pull request in GitHub lingo), please follow these simple advices:
 - Make your commits clean and take the time to write good commit messages.
 - Don't split your pull requests to many commits unnecessarily. If your patch
   set is small, one commit may very well suffice. This is a small project.
 - One way to split bigger contributions is to separate different types of
   files. Use your consideration, if this is useful or necessary.
 - Always use 4 spaces for intendation and try to match your coding style with
   existing code.
 - Please, test your changes.

Patches to add support for new sites are very welcome!

If you would like to contribute by sending translations to new languages,
follow the guidelines above for code contributions and note that:
 - You should have good skills in the language that you are translating to.
   Native skills with good education preferred.
 - You should use this extension yourself to be familiar with it's operation.
 - Think how other people may understand your chosen wording and how much there
   is change to misunderstand what you wrote.

I'm not trying to disencourage anyone from contributing, but it is much nicer
for everyone if we try to keep the quality up than fix crap. Mistakes are not
forbidden and you will not be banned from contributing just because you didn't
do everything perfectly.

Copying
-------
    WebExtension that opens new forum posts on new tabs with a single click
    Copyright (C) 2017  Tomi Leppänen

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

All files that are not explictly marked as GPLv3 are still licensed under
GPLv3.
