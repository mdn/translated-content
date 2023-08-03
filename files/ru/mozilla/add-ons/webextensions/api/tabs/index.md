---
title: tabs
slug: Mozilla/Add-ons/WebExtensions/API/tabs
---

{{AddonSidebar}}

Interact with the browser's tab system. You can use this API to get a list of opened tabs and to create, modify, and rearrange tabs in the browser.

You can use most of this API without any special permission. However, to access `Tab.url`, `Tab.title`, and `Tab.faviconUrl`, you need to have the "tabs" [permission](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). In Firefox this also means you need "tabs" to {{WebExtAPIRef("tabs.query", "query")}} by URL.

## Types

- {{WebExtAPIRef("tabs.MutedInfoReason")}}
  - : An event that caused a muted state change.
- {{WebExtAPIRef("tabs.MutedInfo")}}
  - : Tab muted state and the reason for the last state change.
- {{WebExtAPIRef("tabs.Tab")}}
  - : Contains various properties of a single tab.
- {{WebExtAPIRef("tabs.ZoomSettingsMode")}}
  - : Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page; defaults to `automatic`.
- {{WebExtAPIRef("tabs.ZoomSettingsScope")}}
  - : Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to `per-origin` when in `automatic` mode, and `per-tab` otherwise.
- {{WebExtAPIRef("tabs.ZoomSettings")}}
  - : Defines how zoom changes in a tab are handled and at what scope.
- {{WebExtAPIRef("tabs.TabStatus")}}
  - : Whether the tabs have completed loading.
- {{WebExtAPIRef("tabs.WindowType")}}
  - : The type of window.

## Properties

- {{WebExtAPIRef("tabs.TAB_ID_NONE")}}
  - : An ID which represents the absence of a browser tab.

## Functions

- {{WebExtAPIRef("tabs.get()")}}
  - : Retrieves details about the specified tab.
- {{WebExtAPIRef("tabs.getCurrent()")}}
  - : Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for example: a background page or popup view).
- {{WebExtAPIRef("tabs.connect()")}}
  - : Connects to the content script(s) in the specified tab. The {{WebExtAPIRef('runtime.onConnect')}} event is fired in each content script running in the specified tab for the current extension. For more details, see [content script messaging](/en-US/Add-ons/WebExtensions/Content_scripts).
- {{WebExtAPIRef("tabs.sendRequest()")}}
  - : Sends a single request to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The {{WebExtAPIRef('extension.onRequest')}} event is fired in each content script running in the specified tab for the current extension.
- {{WebExtAPIRef("tabs.sendMessage()")}}
  - : Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The {{WebExtAPIRef('runtime.onMessage')}} event is fired in each content script running in the specified tab for the current extension.
- {{WebExtAPIRef("tabs.getSelected()")}}
  - : Gets the tab that is selected in the specified window.
- {{WebExtAPIRef("tabs.getAllInWindow()")}}
  - : Gets details about all tabs in the specified window.
- {{WebExtAPIRef("tabs.create()")}}
  - : Creates a new tab.
- {{WebExtAPIRef("tabs.duplicate()")}}
  - : Duplicates a tab.
- {{WebExtAPIRef("tabs.query()")}}
  - : Gets all tabs that have the specified properties, or all tabs if no properties are specified.
- {{WebExtAPIRef("tabs.highlight()")}}
  - : Highlights the given tabs.
- {{WebExtAPIRef("tabs.update()")}}
  - : Modifies the properties of a tab. Properties that are not specified in _updateProperties_ are not modified.
- {{WebExtAPIRef("tabs.move()")}}
  - : Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (`window.type === "normal"`) windows.
- {{WebExtAPIRef("tabs.reload()")}}
  - : Reload a tab.
- {{WebExtAPIRef("tabs.remove()")}}
  - : Closes one or more tabs.
- {{WebExtAPIRef("tabs.detectLanguage()")}}
  - : Detects the primary language of the content in a tab.
- {{WebExtAPIRef("tabs.captureVisibleTab()")}}
  - : Captures the visible area of the currently active tab in the specified window. You must have `<all_urls>` permission to use this method.
- {{WebExtAPIRef("tabs.executeScript()")}}
  - : Injects JavaScript code into a page. For details, see the programmatic injection section of the [content scripts](/en-US/Add-ons/WebExtensions/Content_scripts) doc.
- {{WebExtAPIRef("tabs.insertCSS()")}}
  - : Injects CSS into a page. For details, see the programmatic injection section of the [content scripts](/en-US/Add-ons/WebExtensions/Content_scripts) doc.
- {{WebExtAPIRef("tabs.setZoom()")}}
  - : Zooms a specified tab.
- {{WebExtAPIRef("tabs.getZoom()")}}
  - : Gets the current zoom factor of a specified tab.
- {{WebExtAPIRef("tabs.setZoomSettings()")}}
  - : Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
- {{WebExtAPIRef("tabs.getZoomSettings()")}}
  - : Gets the current zoom settings of a specified tab.

## Events

- {{WebExtAPIRef("tabs.onCreated")}}
  - : Fired when a tab is created. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events to be notified when a URL is set.
- {{WebExtAPIRef("tabs.onUpdated")}}
  - : Fired when a tab is updated.
- {{WebExtAPIRef("tabs.onMoved")}}
  - : Fired when a tab is moved within a window. Only one move event is fired, representing the tab the user directly moved. Move events are not fired for the other tabs that must move in response. This event is not fired when a tab is moved between windows. For that, see {{WebExtAPIRef('tabs.onDetached')}}.
- {{WebExtAPIRef("tabs.onSelectionChanged")}}
  - : Fires when the selected tab in a window changes.
- {{WebExtAPIRef("tabs.onActiveChanged")}}
  - : Fires when the selected tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to {{WebExtAPIRef('tabs.onUpdated')}} events to be notified when a URL is set.
- {{WebExtAPIRef("tabs.onActivated")}}
  - : Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events to be notified when a URL is set.
- {{WebExtAPIRef("tabs.onHighlightChanged")}}
  - : Fired when the highlighted or selected tabs in a window changes.
- {{WebExtAPIRef("tabs.onHighlighted")}}
  - : Fired when the highlighted or selected tabs in a window changes.
- {{WebExtAPIRef("tabs.onDetached")}}
  - : Fired when a tab is detached from a window, for example because it is being moved between windows.
- {{WebExtAPIRef("tabs.onAttached")}}
  - : Fired when a tab is attached to a window, for example because it was moved between windows.
- {{WebExtAPIRef("tabs.onRemoved")}}
  - : Fired when a tab is closed.
- {{WebExtAPIRef("tabs.onReplaced")}}
  - : Fired when a tab is replaced with another tab due to prerendering or instant.
- {{WebExtAPIRef("tabs.onZoomChange")}}
  - : Fired when a tab is zoomed.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **Примечание:** Это API основано на API Chromium [`chrome.tabs`](https://developer.chrome.com/extensions/tabs). Это документация получена из [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) в коде Chromium.

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
