---
title: tabs
slug: Mozilla/Add-ons/WebExtensions/API/tabs
---

{{AddonSidebar}}

Interact with the browser's tab system.

브라우저의 탭 시스템과의 상호작용.

You can use this API to get a list of opened tabs, filtered by various criteria, and to open, update, move, reload, and remove tabs. You can't directly access the content hosted by tabs using this API, but you can insert JavaScript and CSS into tabs using the {{WebExtAPIRef("tabs.executeScript()")}} or {{WebExtAPIRef("tabs.insertCSS()")}} APIs.

이 API는 열려있는 탭의 목록을 얻는데, 다양한 기준으로 걸러내는데, 그리고 탭을 열고, 고치고, 옮기고, 다시 싣고, 없애는데 사용할 수 있다. 이 API로 탭에 열린 콘텐트를 직접 다룰 수는 없지만, {{WebExtAPIRef("tabs.executeScript()")}}나 {{WebExtAPIRef("tabs.insertCSS()")}} API로 탭에 자바스크립트와 CSS를 끼워 넣을 수는 있다.

You can use most of this API without any special permission. However:

특별한 권한없이 이 API의 대부분을 사용할 수 있지만:

- to access `Tab.url`, `Tab.title`, and `Tab.favIconUrl`, you need to have the "tabs" [permission](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). In Firefox this also means you need "tabs" to {{WebExtAPIRef("tabs.query", "query")}} by URL.
- to use {{WebExtAPIRef("tabs.executeScript()")}} or {{WebExtAPIRef("tabs.insertCSS()")}} you must have the [host permission](/en-US/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) for the tab

- `Tab.url`, `Tab.title`, and `Tab.favIconUrl`에 접근하려면 "tabs" [권한](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)을 가져야 한다. 파이어폭스에서 이 말은 URL로 {{WebExtAPIRef("tabs.query", "query")}} 하는데도 "tabs"가 필요하다는 뜻이다.
- {{WebExtAPIRef("tabs.executeScript()")}}나 {{WebExtAPIRef("tabs.insertCSS()")}}를 사용하려면 탭에 대한 [host 권한](/en-US/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions)을 가져야 한다.

또는 이런 권한을 일시적으로 얻는 방법도 있다. 현재 활성 탭이거나 명시적인 사용자 동작의 응답이라면 ["activeTab" 권한](/en-US/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission)을 요청하면 된다.

많은 탭 작업은 탭 ID를 사용한다. 탭 ID는 브라우저 세션 내에서 탭마다 고유하도록 보장된다. 브라우저가 다시 시작되면, 탭 ID를 재사용할 수 있고 그럴 것이다. 다시 시작하는 브라우저에 걸쳐서 탭에 정보를 연관시키려면 {{WebExtAPIRef("sessions.setTabValue()")}}를 사용해라.

## Types

- {{WebExtAPIRef("tabs.MutedInfoReason")}}
  - : Specifies the reason a tab was muted or unmuted.
- {{WebExtAPIRef("tabs.MutedInfo")}}
  - : This object contains a boolean indicating whether the tab is muted, and the reason for the last state change.
- {{WebExtAPIRef("tabs.PageSettings")}}
  - : Used to control how a tab is rendered as a PDF by the [`tabs.saveAsPDF()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) method.
- {{WebExtAPIRef("tabs.Tab")}}
  - : This type contains information about a tab.
- {{WebExtAPIRef("tabs.TabStatus")}}
  - : Indicates whether the tab has finished loading.
- {{WebExtAPIRef("tabs.WindowType")}}
  - : The type of window that hosts this tab.
- {{WebExtAPIRef("tabs.ZoomSettingsMode")}}
  - : Defines whether zoom changes are handled by the browser, by the extension, or are disabled.
- {{WebExtAPIRef("tabs.ZoomSettingsScope")}}
  - : Defines whether zoom changes will persist for the page's origin, or only take effect in this tab.
- {{WebExtAPIRef("tabs.ZoomSettings")}}
  - : Defines zoom settings {{WebExtAPIRef("tabs.ZoomSettingsMode", "mode")}}, {{WebExtAPIRef("tabs.ZoomSettingsScope", "scope")}}, and default zoom factor.

## Properties

- {{WebExtAPIRef("tabs.TAB_ID_NONE")}}
  - : A special ID value given to tabs that are not browser tabs (for example, tabs in devtools windows).

## Functions

- {{WebExtAPIRef("tabs.captureTab()")}}
  - : Creates a data URL encoding an image of the visible area of the given tab.
- {{WebExtAPIRef("tabs.captureVisibleTab()")}}
  - : Creates a data URL encoding an image of the visible area of the currently active tab in the specified window.
- {{WebExtAPIRef("tabs.connect()")}}
  - : Sets up a messaging connection between the extension's background scripts (or other privileged scripts, such as popup scripts or options page scripts) and any [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) running in the specified tab.
- {{WebExtAPIRef("tabs.create()")}}
  - : Creates a new tab.
- {{WebExtAPIRef("tabs.detectLanguage()")}}
  - : Detects the primary language of the content in a tab.
- {{WebExtAPIRef("tabs.discard()")}}
  - : Discards one or more tabs.
- {{WebExtAPIRef("tabs.duplicate()")}}
  - : Duplicates a tab.
- {{WebExtAPIRef("tabs.executeScript()")}} (Manifest V2 only)
  - : Injects JavaScript code into a page.
- {{WebExtAPIRef("tabs.get()")}}
  - : Retrieves details about the specified tab.
- {{WebExtAPIRef("tabs.getAllInWindow()")}} {{deprecated_inline}}
  - : Gets details about all tabs in the specified window.
- {{WebExtAPIRef("tabs.getCurrent()")}}
  - : Gets information about the tab that this script is running in, as a [`tabs.Tab`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) object.
- {{WebExtAPIRef("tabs.getSelected()")}} {{deprecated_inline}}
  - : Gets the tab that is selected in the specified window. **Deprecated: use [`tabs.query({active: true})`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) instead.**
- {{WebExtAPIRef("tabs.getZoom()")}}
  - : Gets the current zoom factor of the specified tab.
- {{WebExtAPIRef("tabs.getZoomSettings()")}}
  - : Gets the current zoom settings for the specified tab.
- {{WebExtAPIRef("tabs.goForward()")}}
  - : Go forward to the next page, if one is available.
- {{WebExtAPIRef("tabs.goBack()")}}
  - : Go back to the previous page, if one is available.
- {{WebExtAPIRef("tabs.hide()")}} {{experimental_inline}}
  - : Hides one or more tabs.
- {{WebExtAPIRef("tabs.highlight()")}}
  - : Highlights one or more tabs.
- {{WebExtAPIRef("tabs.insertCSS()")}} (Manifest V2 only)
  - : Injects CSS into a page.
- {{WebExtAPIRef("tabs.move()")}}
  - : Moves one or more tabs to a new position in the same window or to a different window.
- {{WebExtApiRef("tabs.moveInSuccession()")}}
  - : Modifies the succession relationship for a group of tabs.
- {{WebExtAPIRef("tabs.print()")}}
  - : Prints the contents of the active tab.
- {{WebExtAPIRef("tabs.printPreview()")}}
  - : Opens print preview for the active tab.
- {{WebExtAPIRef("tabs.query()")}}
  - : Gets all tabs that have the specified properties, or all tabs if no properties are specified.
- {{WebExtAPIRef("tabs.reload()")}}
  - : Reload a tab, optionally bypassing the local web cache.
- {{WebExtAPIRef("tabs.remove()")}}
  - : Closes one or more tabs.
- {{WebExtAPIRef("tabs.removeCSS()")}} (Manifest V2 only)
  - : Removes from a page CSS which was previously injected by calling {{WebExtAPIRef("tabs.insertCSS()")}}.
- {{WebExtAPIRef("tabs.saveAsPDF()")}}
  - : Saves the current page as a PDF.
- {{WebExtAPIRef("tabs.sendMessage()")}}
  - : Sends a single message to the content script(s) in the specified tab.
- {{WebExtAPIRef("tabs.sendRequest()")}} {{deprecated_inline}}
  - : Sends a single request to the content script(s) in the specified tab. **Deprecated**: use {{WebExtAPIRef("tabs.sendMessage()")}} instead.
- {{WebExtAPIRef("tabs.setZoom()")}}
  - : Zooms the specified tab.
- {{WebExtAPIRef("tabs.setZoomSettings()")}}
  - : Sets the zoom settings for the specified tab.
- {{WebExtAPIRef("tabs.show()")}} {{experimental_inline}}
  - : Shows one or more tabs that have been {{WebExtAPIRef("tabs.hide()", "hidden")}}.
- {{WebExtAPIRef("tabs.toggleReaderMode()")}}
  - : Toggles Reader mode for the specified tab.
- {{WebExtAPIRef("tabs.update()")}}
  - : Navigate the tab to a new URL, or modify other properties of the tab.
- {{WebExtAPIRef("tabs.warmup()")}}
  - : Prepare the tab to make a potential following switch faster.

## Events

- {{WebExtAPIRef("tabs.onActivated")}}
  - : Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired.
- {{WebExtAPIRef("tabs.onActiveChanged")}} {{deprecated_inline}}
  - : Fires when the selected tab in a window changes. **Deprecated:** use {{WebExtAPIRef("tabs.onActivated")}} instead.
- {{WebExtAPIRef("tabs.onAttached")}}
  - : Fired when a tab is attached to a window, for example because it was moved between windows.
- {{WebExtAPIRef("tabs.onCreated")}}
  - : Fired when a tab is created. Note that the tab's URL may not be set at the time this event fired.
- {{WebExtAPIRef("tabs.onDetached")}}
  - : Fired when a tab is detached from a window, for example because it is being moved between windows.
- {{WebExtAPIRef("tabs.onHighlightChanged")}} {{deprecated_inline}}
  - : Fired when the highlighted or selected tabs in a window change. **Deprecated:** use {{WebExtAPIRef("tabs.onHighlighted")}} instead.
- {{WebExtAPIRef("tabs.onHighlighted")}}
  - : Fired when the highlighted or selected tabs in a window change.
- {{WebExtAPIRef("tabs.onMoved")}}
  - : Fired when a tab is moved within a window.
- {{WebExtAPIRef("tabs.onRemoved")}}
  - : Fired when a tab is closed.
- {{WebExtAPIRef("tabs.onReplaced")}}
  - : Fired when a tab is replaced with another tab due to prerendering.
- {{WebExtAPIRef("tabs.onSelectionChanged")}} {{deprecated_inline}}
  - : Fires when the selected tab in a window changes. **Deprecated:** use {{WebExtAPIRef("tabs.onActivated")}} instead.
- {{WebExtAPIRef("tabs.onUpdated")}}
  - : Fired when a tab is updated.
- {{WebExtAPIRef("tabs.onZoomChange")}}
  - : Fired when a tab is zoomed.

## 브라우저 호환성

{{Compat}}

{{WebExtExamples("h2")}}

> **참고:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
