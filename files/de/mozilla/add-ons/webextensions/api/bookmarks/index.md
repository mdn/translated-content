---
title: Lesezeichen
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks
original_slug: Mozilla/Add-ons/WebExtensions/API/Lesezeich.
---
{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) {{WebExtAPIRef("bookmarks")}} API erlaubt es einer Erweiterung mit dem Lesezeichensystem des Browsers interagieren und dieses zu manipulieren. Sie können die API verwenden, um für Seiten Lesezeichen zu setzen, vorhandene Lesezeichen abzurufen und Lesezeichen zu bearbeiten, zu entfernen und zu organisieren.

Um diese API zu verwenden, muss die Erweiterung die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "Lesezeichen" in der [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei besitzen.

## Types

- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeUnmodifiable")}}
  - : Ein {{jsxref("String")}} enum, das angibt, warum ein Lesezeichen oder ein Ordner unmodifizierbar ist.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}
  - : Stellt ein Lesezeichen oder einen Ordner im Lesezeichenbaum dar.
- {{WebExtAPIRef("bookmarks.CreateDetails")}}
  - : Enthält Informationen, die bei der Erstellung eines neuen Lesezeichens an die {{WebExtAPIRef("bookmarks.create()")}} Funktion übergeben werden.

## Functions

- {{WebExtAPIRef("bookmarks.create()")}}
  - : Erstellt ein Lesezeichen oder Ordner.
- {{WebExtAPIRef("bookmarks.get()")}}
  - : Ruft eine oder mehrere {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} ab und übergibt eine Lesezeichen-ID oder ein Array von Lesezeichen ID.
- {{WebExtAPIRef("bookmarks.getChildren()")}}
  - : Ruft die Kinder des angegebenen {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} ab.
- {{WebExtAPIRef("bookmarks.getRecent()")}}
  - : Ruft eine angeforderte Anzahl von zuletzt hinzugefügten Lesezeichen ab.
- {{WebExtAPIRef("bookmarks.getSubTree()")}}
  - : Ruft einen Teil des Lesezeichenbaums ab und beginnt am angegebenen Knoten.
- {{WebExtAPIRef("bookmarks.getTree()")}}
  - : Ruft den gesamten Lesezeichenbaum in ein Array von {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} Objekte auf.
- {{WebExtAPIRef("bookmarks.move()")}}
  - : Moves the specified {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} to a new location in the bookmark tree.
- {{WebExtAPIRef("bookmarks.remove()")}}
  - : Removes a bookmark or an empty bookmark folder, given the node's ID.
- {{WebExtAPIRef("bookmarks.removeTree()")}}
  - : Recursively removes a bookmark folder; that is, given the ID of a folder node, removes that node and all its descendants.
- {{WebExtAPIRef("bookmarks.search()")}}
  - : Searches for {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s matching a specified set of criteria.
- {{WebExtAPIRef("bookmarks.update()")}}
  - : Updates the title and/or URL of a bookmark, or the name of a bookmark folder, given the bookmark's ID.

## Events

- {{WebExtAPIRef("bookmarks.onCreated")}}
  - : Fired when a bookmark or folder is created.
- {{WebExtAPIRef("bookmarks.onRemoved")}}
  - : Fired when a bookmark or folder is removed. When a folder is removed recursively, a single notification is fired for the folder, and none for its contents.
- {{WebExtAPIRef("bookmarks.onChanged")}}
  - : Fired when a bookmark or folder changes. Currently, only `title` and `url` changes trigger this.
- {{WebExtAPIRef("bookmarks.onMoved")}}
  - : Fired when a bookmark or folder is moved to a different parent folder or to a new offset within its folder.
- {{WebExtAPIRef("bookmarks.onChildrenReordered")}}
  - : Fired when the user has sorted the children of a folder in the browser's UI. This is not called as a result of a {{WebExtAPIRef("bookmarks.move", "move()")}}.
- {{WebExtAPIRef("bookmarks.onImportBegan")}}
  - : Fired when a bookmark import session is begun. Expensive observers should ignore {{WebExtAPIRef("bookmarks.onCreated")}} updates until {{WebExtAPIRef("bookmarks.onImportEnded")}} is fired. Observers should still handle other notifications immediately.
- {{WebExtAPIRef("bookmarks.onImportEnded")}}
  - : Fired when a bookmark import session has finished.

## Browser compatibility

{{Compat("webextensions.api.bookmarks")}}

### Edge incompatibilities

Promises are not supported in Edge. Use callbacks instead.

{{WebExtExamples("h2")}}

> **Note:** **Acknowledgements**This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
