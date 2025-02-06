---
layout: project
title: ReelMyFiles
submenu: true
group: projects

---
ReelMyFiles is a utility to rename files adding a UID at the end of the filename using hashing. Was developed to be used in video post production.

The purpose of the application is to copy media files from one location to another, renaming files that do not have unique names so that they have a name that can uniquely identify them. Most cameras do not have mechanisms to give files unique names, so ReelMyFiles will create that unique name, thus creating a <span translate="no"> “Reel Name” </span> or <span translate="no"> “Tape Name”</span>, which can be safely used to create proxies and future <span translate="no"> relink </span> of the proxy media to the original media.

As the application can use <span translate="no"> file checksums </span> to guarantee the reliability of the copy, its use as a copy tool, even without using its renaming function, is recommended to guarantee error-free copies. On the other hand, using <span translate="no"> checksums </span> makes copying slower.