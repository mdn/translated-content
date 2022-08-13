---
title: tabs
slug: Mozilla/Add-ons/WebExtensions/API/tabs
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - NeedsTranslation
  - Non-standard
  - Reference
  - TopicStub
  - WebExtensions
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs
---
<div>{{AddonSidebar}}</div>

<p>Interact with the browser's tab system.</p>

<p>브라우저의 탭 시스템과의 상호작용.</p>

<p>You can use this API to get a list of opened tabs, filtered by various criteria, and to open, update, move, reload, and remove tabs. You can't directly access the content hosted by tabs using this API, but you can insert JavaScript and CSS into tabs using the {{WebExtAPIRef("tabs.executeScript()")}} or {{WebExtAPIRef("tabs.insertCSS()")}} APIs.</p>

<p>이 API는 열려있는 탭의 목록을 얻는데, 다양한 기준으로 걸러내는데, 그리고 탭을 열고, 고치고, 옮기고, 다시 싣고, 없애는데 사용할 수 있다. 이 API로 탭에 열린 콘텐트를 직접 다룰 수는 없지만, {{WebExtAPIRef("tabs.executeScript()")}}나 {{WebExtAPIRef("tabs.insertCSS()")}} API로 탭에 자바스크립트와 CSS를 끼워 넣을 수는 있다.</p>

<p>You can use most of this API without any special permission. However:</p>

<p>특별한 권한없이 이 API의 대부분을 사용할 수 있지만:</p>

<ul>
 <li>to access <code>Tab.url</code>, <code>Tab.title</code>, and <code>Tab.favIconUrl</code>, you need to have the "tabs" <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a>. In Firefox this also means you need "tabs" to {{WebExtAPIRef("tabs.query", "query")}} by URL.</li>
 <li>to use {{WebExtAPIRef("tabs.executeScript()")}} or {{WebExtAPIRef("tabs.insertCSS()")}} you must have the <a href="/en-US/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">host permission</a> for the tab</li>
</ul>

<p> </p>

<ul>
 <li><code>Tab.url</code>, <code>Tab.title</code>, and <code>Tab.favIconUrl</code>에 접근하려면 "tabs" <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">권한</a>을 가져야 한다. 파이어폭스에서 이 말은 URL로 {{WebExtAPIRef("tabs.query", "query")}} 하는데도 "tabs"가 필요하다는 뜻이다.</li>
 <li>{{WebExtAPIRef("tabs.executeScript()")}}나 {{WebExtAPIRef("tabs.insertCSS()")}}를 사용하려면 탭에 대한 <a href="/en-US/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">host 권한</a>을 가져야 한다.</li>
</ul>

<p> </p>

<p>또는 이런 권한을 일시적으로 얻는 방법도 있다. 현재 활성 탭이거나 명시적인 사용자 동작의 응답이라면 <a href="/en-US/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission">"activeTab" 권한</a>을 요청하면 된다.</p>

<p>많은 탭 작업은 탭 ID를 사용한다. 탭 ID는 브라우저 세션 내에서 탭마다 고유하도록 보장된다. 브라우저가 다시 시작되면, 탭 ID를 재사용할 수 있고 그럴 것이다. 다시 시작하는 브라우저에 걸쳐서 탭에 정보를 연관시키려면 {{WebExtAPIRef("sessions.setTabValue()")}}를 사용해라.</p>

<h2 id="Types">Types</h2>

<dl>
 <dt>{{WebExtAPIRef("tabs.MutedInfoReason")}}</dt>
 <dd>Specifies the reason a tab was muted or unmuted.</dd>
 <dt>{{WebExtAPIRef("tabs.MutedInfo")}}</dt>
 <dd>This object contains a boolean indicating whether the tab is muted, and the reason for the last state change.</dd>
 <dt>{{WebExtAPIRef("tabs.Tab")}}</dt>
 <dd>This type contains information about a tab.</dd>
 <dt>{{WebExtAPIRef("tabs.TabStatus")}}</dt>
 <dd>Indicates whether the tab has finished loading.</dd>
 <dt>{{WebExtAPIRef("tabs.WindowType")}}</dt>
 <dd>The type of window that hosts this tab.</dd>
 <dt>{{WebExtAPIRef("tabs.ZoomSettingsMode")}}</dt>
 <dd>Defines whether zoom changes are handled by the browser, by the add-on, or are disabled.</dd>
 <dt>{{WebExtAPIRef("tabs.ZoomSettingsScope")}}</dt>
 <dd>Defines whether zoom changes will persist for the page's origin, or only take effect in this tab.</dd>
 <dt>{{WebExtAPIRef("tabs.ZoomSettings")}}</dt>
 <dd>Defines zoom settings {{WebExtAPIRef("tabs.ZoomSettingsMode", "mode")}}, {{WebExtAPIRef("tabs.ZoomSettingsScope", "scope")}}, and default zoom factor.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{WebExtAPIRef("tabs.TAB_ID_NONE")}}</dt>
 <dd>A special ID value given to tabs that are not browser tabs (for example, tabs in devtools windows).</dd>
</dl>

<h2 id="Functions">Functions</h2>

<dl>
 <dt>{{WebExtAPIRef("tabs.connect()")}}</dt>
 <dd>Sets up a messaging connection between the add-on's background scripts (or other privileged scripts, such as popup scripts or options page scripts) and any <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">content scripts</a> running in the specified tab.</dd>
 <dt>{{WebExtAPIRef("tabs.create()")}}</dt>
 <dd>Creates a new tab.</dd>
 <dt>{{WebExtAPIRef("tabs.captureVisibleTab()")}}</dt>
 <dd>Creates a data URI encoding an image of the visible area of the currently active tab in the specified window.</dd>
 <dt>{{WebExtAPIRef("tabs.detectLanguage()")}}</dt>
 <dd>Detects the primary language of the content in a tab.</dd>
 <dt>{{WebExtAPIRef("tabs.duplicate()")}}</dt>
 <dd>Duplicates a tab.</dd>
 <dt>{{WebExtAPIRef("tabs.executeScript()")}}</dt>
 <dd>Injects JavaScript code into a page.</dd>
 <dt>{{WebExtAPIRef("tabs.get()")}}</dt>
 <dd>Retrieves details about the specified tab.</dd>
 <dt>{{WebExtAPIRef("tabs.getAllInWindow()")}} {{deprecated_inline}}</dt>
 <dd>Gets details about all tabs in the specified window.</dd>
 <dt>{{WebExtAPIRef("tabs.getCurrent()")}}</dt>
 <dd>Gets information about the tab that this script is running in, as a <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/Tabs/Tab" title="This type contains information about a tab."><code>tabs.Tab</code></a> object.</dd>
 <dt>{{WebExtAPIRef("tabs.getSelected()")}} {{deprecated_inline}}</dt>
 <dd>Gets the tab that is selected in the specified window.</dd>
 <dt>{{WebExtAPIRef("tabs.getZoom()")}}</dt>
 <dd>Gets the current zoom factor of the specified tab.</dd>
 <dt>{{WebExtAPIRef("tabs.getZoomSettings()")}}</dt>
 <dd>Gets the current zoom settings for the specified tab.</dd>
 <dt>{{WebExtAPIRef("tabs.highlight()")}}</dt>
 <dd>Highlights one or more tabs.</dd>
 <dt>{{WebExtAPIRef("tabs.insertCSS()")}}</dt>
 <dd>Injects CSS into a page.</dd>
 <dt>{{WebExtAPIRef("tabs.removeCSS()")}}</dt>
 <dd>Removes from a page CSS which was previously injected by calling {{WebExtAPIRef("tabs.insertCSS()")}}.</dd>
 <dt>{{WebExtAPIRef("tabs.move()")}}</dt>
 <dd>Moves one or more tabs to a new position in the same window or to a different window.</dd>
 <dt>{{WebExtAPIRef("tabs.query()")}}</dt>
 <dd>Gets all tabs that have the specified properties, or all tabs if no properties are specified.</dd>
 <dt>{{WebExtAPIRef("tabs.reload()")}}</dt>
 <dd>Reload a tab, optionally bypassing the local web cache.</dd>
 <dt>{{WebExtAPIRef("tabs.remove()")}}</dt>
 <dd>Closes one or more tabs.</dd>
 <dt>{{WebExtAPIRef("tabs.sendMessage()")}}</dt>
 <dd>Sends a single message to the content script(s) in the specified tab.</dd>
 <dt>{{WebExtAPIRef("tabs.sendRequest()")}} {{deprecated_inline}}</dt>
 <dd>Sends a single request to the content script(s) in the specified tab. <strong>Deprecated</strong>: use {{WebExtAPIRef("tabs.sendMessage()")}} instead.</dd>
 <dt>{{WebExtAPIRef("tabs.setZoom()")}}</dt>
 <dd>Zooms the specified tab.</dd>
 <dt>{{WebExtAPIRef("tabs.setZoomSettings()")}}</dt>
 <dd>Sets the zoom settings for the specified tab.</dd>
 <dt>{{WebExtAPIRef("tabs.update()")}}</dt>
 <dd>Navigate the tab to a new URL, or modify other properties of the tab.</dd>
</dl>

<h2 id="Events">Events</h2>

<dl>
 <dt>{{WebExtAPIRef("tabs.onActivated")}}</dt>
 <dd>Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired.</dd>
 <dt>{{WebExtAPIRef("tabs.onActiveChanged")}} {{deprecated_inline}}</dt>
 <dd>Fires when the selected tab in a window changes. <strong>Deprecated:</strong> use {{WebExtAPIRef("tabs.onActivated")}} instead.</dd>
 <dt>{{WebExtAPIRef("tabs.onAttached")}}</dt>
 <dd>Fired when a tab is attached to a window, for example because it was moved between windows.</dd>
 <dt>{{WebExtAPIRef("tabs.onCreated")}}</dt>
 <dd>Fired when a tab is created. Note that the tab's URL may not be set at the time this event fired.</dd>
 <dt>{{WebExtAPIRef("tabs.onDetached")}}</dt>
 <dd>Fired when a tab is detached from a window, for example because it is being moved between windows.</dd>
 <dt>{{WebExtAPIRef("tabs.onHighlightChanged")}} {{deprecated_inline}}</dt>
 <dd>Fired when the highlighted or selected tabs in a window change. <strong>Deprecated:</strong> use {{WebExtAPIRef("tabs.onHighlighted")}} instead.</dd>
 <dt>{{WebExtAPIRef("tabs.onHighlighted")}}</dt>
 <dd>Fired when the highlighted or selected tabs in a window change.</dd>
 <dt>{{WebExtAPIRef("tabs.onMoved")}}</dt>
 <dd>Fired when a tab is moved within a window.</dd>
 <dt>{{WebExtAPIRef("tabs.onRemoved")}}</dt>
 <dd>Fired when a tab is closed.</dd>
 <dt>{{WebExtAPIRef("tabs.onReplaced")}}</dt>
 <dd>Fired when a tab is replaced with another tab due to prerendering.</dd>
 <dt>{{WebExtAPIRef("tabs.onSelectionChanged")}} {{deprecated_inline}}</dt>
 <dd>Fires when the selected tab in a window changes. <strong>Deprecated:</strong> use {{WebExtAPIRef("tabs.onActivated")}} instead.</dd>
 <dt>{{WebExtAPIRef("tabs.onUpdated")}}</dt>
 <dd>Fired when a tab is updated.</dd>
 <dt>{{WebExtAPIRef("tabs.onZoomChange")}}</dt>
 <dd>Fired when a tab is zoomed.</dd>
</dl>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("webextensions.api.tabs")}}</p>

<div class="hidden note">
<p>The "Chrome incompatibilities" section is included from <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities"> https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities</a> using the <a href="/en-US/docs/Template:WebExtChromeCompat">WebExtChromeCompat</a> macro.</p>

<p>If you need to update this content, edit <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities">https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities</a>, then shift-refresh this page to see your changes.</p>
</div>

<h3 id="Edge_incompatibilities">Edge incompatibilities</h3>

<p>Promises are not supported in Edge. Use callbacks instead.</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/tabs"><code>chrome.tabs</code></a> API. This documentation is derived from <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json"><code>tabs.json</code></a> in the Chromium code.</p>

<p>Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.</p>
</div>

<div class="hidden">
<pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre>
</div>
