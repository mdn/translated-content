---
title: Chrome incompatibilities
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
---

{{AddonSidebar}}

Веб расширения разработаны с поддержкой совместимости с расширениями Chrome и Оперы на сколько это возможно. Расширения, написанные для этих браузеров, должны работать в Firefox с минимальными изменениями.

Всё же, Firefox на данный момент имеет поддержку только для ограниченного набора функций и API, поддержуемых в Chrome и Опере. Мы работаем над добавлением большей поддержки, но много функций пока ещё не поддерживаются и некоторые из них никогда не будут поддерживаться.

Эта статья перечисляет все функции и API, которые полностью поддерживаются в Firefox Developer Edition (на данный момент Firefox 47). Там где функция поддерживается частично, мы указали на проблемные места.

> **Примечание:** You should assume that features and APIs not listed here at all are not yet supported.

## manifest.json функция

### Полностью поддерживаемые ключи

- [`applications`](/en-US/Add-ons/WebExtensions/manifest.json/applications)
- [`browser_action`](/en-US/Add-ons/WebExtensions/manifest.json/browser_action)
- [`default_locale`](/en-US/Add-ons/WebExtensions/manifest.json/default_locale)
- [`description`](/en-US/Add-ons/WebExtensions/manifest.json/description)
- [`icons`](/en-US/Add-ons/WebExtensions/manifest.json/icons)
- [`manifest_version`](/en-US/Add-ons/WebExtensions/manifest.json/manifest_version)
- [`name`](/en-US/Add-ons/WebExtensions/manifest.json/name)
- [`page_action`](/en-US/Add-ons/WebExtensions/manifest.json/page_action)
- [`version`](/en-US/Add-ons/WebExtensions/manifest.json/version)
- [`web_accessible_resources`](/en-US/Add-ons/WebExtensions/manifest.json/web_accessible_resources)

### Частично поддерживаемые ключи

#### background

Firefox не поддерживает `"устойчивое"` свойство. Фоновые скрипты остаются загруженными всё время.

#### commands

Firefox не поддерживает:

- Media keys как сокращение
- `global`
- специальную команду `_execute_browser_action`

#### content_scripts

Firefox не поддерживает:

- `match_about_blank`

#### content_security_policy

Firefox не поддерживает:

- `http://127.0.0.1` or `http://localhost` as script sources: they must be served over HTTPS.

#### options_ui

Firefox не поддерживает:

- `chrome_style`

Using `options_ui` requires a valid value for the [applications.gecko.id](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications) property.

#### permissions

Firefox не поддерживает следующие разрешения:

- `background`
- `clipboardRead`
- `clipboardWrite`
- `geolocation`
- `unlimitedStorage`

Obviously, it doesn't support permissions for APIs that are themselves not supported.

#### incognito

Firefox does not support the following incognito (private browsing) modes:

- `split`

## JavaScript APIs

### Fully supported APIs

- [alarms](/ru/docs/Mozilla/Add-ons/WebExtensions/API/alarms)
- [browserAction](/ru/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)

  - Relative URLs passed to `setPopup()` are resolved relative to the caller document, rather than to the extension root

- [commands](/ru/docs/Mozilla/Add-ons/WebExtensions/API/commands)
- [contextMenus](/ru/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus)
- [cookies](/ru/docs/Mozilla/Add-ons/WebExtensions/API/cookies)
- [i18n](/ru/docs/Mozilla/Add-ons/WebExtensions/API/i18n)
- [pageAction](/ru/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)

  - Relative URLs passed to `setPopup()` are resolved relative to the caller document, rather than to the extension root

### Partially supported APIs

#### bookmarks

- Firefox does not support:

  - `import()`
  - `export()`
  - `onCreated`
  - `onRemoved`
  - `onChanged`
  - `onMoved`
  - `onChildrenReordered`
  - `onImportBegan`
  - `onImportEnded`
  - `BookmarkTreeNodeUnmodifiable`

- Firefox has special bookmarks like "Recently Bookmarked" or "Recently Visited"

#### contextMenus

- Firefox does not support:

  - the "browser_action" or "page_action" context types

#### downloads

- Firefox does not support:

  - `drag()`
  - `acceptDanger()`
  - `setShelfEnabled()`
  - `onDeterminingFilename`

- The `saveAs` option and values other than `"GET"` for the `method` option are not supported by `download()`

#### extension

- Firefox does not support:

  - `setUpdateUrlData()`

- Additionally, the following deprecated properties will not be supported:

  - `onRequest`
  - `onRequestExternal`
  - `getExtensionTabs()`
  - `sendRequest()`

#### idle

- Firefox does not support:

  - `onStateChanged`
  - `setDetectionInterval()`

Additoinally, `queryState()` always returns `"active"` in Firefox, regardless of the current system idle state.

#### notifications

- Firefox does not support:

  - `update()`

- Firefox doesn't provide `byUser` data.

#### runtime

- Firefox does not support:

  - `getPackageDirectoryEntry()`
  - `reload()`
  - `requestUpdateCheck()`
  - `restart()`
  - `sendNativeMessage()`
  - `onBrowserUpdateAvailable`
  - `onConnectExternal`
  - `onInstalled`
  - `onMessageExternal`
  - `onRestartRequired`
  - `onStartup`
  - `onSuspend`
  - `onSuspendCanceled`
  - `onUpdateAvailable`

#### storage

- Firefox does not support:

  - `managed` storage area
  - `sync` storage area
  - `getBytesInUse()`.

#### tabs

- Firefox treats `highlighted` and `active` as the same, since Firefox has no concept of selecting multiple tabs.
- In Firefox, you need the `tabs` [permission](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) if you want to include `url` in the `queryInfo` parameter to [`tabs.query()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query).
- In Firefox, relative URLs passed into `tabs.executeScript()` or `tabs.insertCSS()` are resolved relative to the current page URL. In Chrome, these URLs are resolved relative to the add-on's base URL. To work cross-browser, you can specify the path as an absolute URL, starting at the add-on's root, like this:

  ```html
  /path/to/script.js
  ```

- In Firefox, you can't open (using {{WebExtAPIRef("tabs.create")}}), or navigate to (using {{WebExtAPIRef("tabs.update")}}) privileged URLs:

  - chrome: URLs
  - javascript: URLs
  - data: URLs
  - privileged about: URLs (for example, about:config, about:addons, about:debugging)

- Additionally, the following deprecated properties will not be supported:

  - `sendRequest()`
  - `getSelected()`
  - `onActiveChanged`
  - `onHighlightChanged`
  - `onSelectionChanged`

#### webNavigation

- Firefox does not support:

  - `onCreatedNavigationTarget`
  - `onTabReplaced`

#### webRequest

- Firefox does not support:

  - `onAuthRequired`
  - filtering by `windowId` and `tabId`
  - the `"requestBody"` instruction in `opt_extraInfoSpec`

- In Firefox requests can be redirected only if their original URL uses the http or https scheme

#### windows

- Firefox does not support:

  - the `focused` option in `create()`

- In Firefox `onFocusChanged` will trigger multiple times for a given focus change.

### Planned APIs

We don't support the following APIs, but plan to, soon:

- [Devtools (mostly panels)](https://developer.chrome.com/extensions/devtools)
- [debugger](https://developer.chrome.com/extensions/debugger)
- [omnibox](https://developer.chrome.com/extensions/omnibox)
- [permissions](https://developer.chrome.com/extensions/permissions)

This doesn't mean that these are the only additional APIs we will support, but that they are our current priorities.

### Miscellaneous incompatibilities

#### Optional arguments

#### URLs in CSS

Firefox resolves URLs in injected CSS files relative to the CSS file itself, rather than to the page it's injected into.

#### Additional incompatibilities

Firefox does not support using [alert()](/ru/docs/Web/API/Window/alert) from background pages. Using `alert(message)` from a background page will cause the [Browser Console](/ru/docs/Tools/Browser_Console) to be opened and both a line stating "alert() is not supported in background windows; please use console.log instead." and the `message` will be output to the console.
