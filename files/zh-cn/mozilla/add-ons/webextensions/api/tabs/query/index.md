---
title: tabs.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/query
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.query
original_slug: Mozilla/Add-ons/WebExtensions/API/tabs/查询
---

{{AddonSidebar()}}

获取具有指定属性的所有选项卡，如果未指定任何属性，则获取所有选项卡。

这是返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js
let querying = browser.tabs.query(queryObj)
```

### 参数

- `queryObj`

  - : `object`. `query()` 函数将仅获取其属性与此处包含的属性匹配的选项卡。

    请参阅 {{WebExtAPIRef("tabs.Tab")}} 文档以了解有关这些属性的详细信息。

    - `active` {{optional_inline}}
      - : `boolean`.选项卡在其窗口中是否处于活动状态。
    - `audible` {{optional_inline}}
      - : `boolean`.标签是否可听见。
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`.浏览器是否可以丢弃该选项卡。默认值为“true”。当设置为“false”时，浏览器无法自动丢弃该选项卡。但是，该选项卡可以被 {{WebExtAPIRef("tabs.discard")}} 丢弃。
    - `cookieStoreId` {{optional_inline}}
      - : `string`.或“字符串”组成的“数组”。Use this to return tabs whose `tab.cookieStoreId` matches any of the `cookieStoreId` strings. 仅当附加组件具有“cookies”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 时，此选项才可用。
    - `currentWindow` {{optional_inline}}
      - : `boolean`.选项卡是否位于当前窗口中。
    - `discarded` {{optional_inline}}
      - : `boolean`.选项卡是否被丢弃。一个被丢弃的标签是指其内容已经从内存中卸载，但在标签条中仍然可见。它的内容在下次被激活时被重新加载。
    - `hidden` {{optional_inline}}
      - : `boolean`.选项卡是否隐藏。
    - `highlighted` {{optional_inline}}
      - : `boolean`.选项卡是否突出显示。
    - `index` {{optional_inline}}
      - : `integer`.选项卡在其窗口中的位置。
    - `muted` {{optional_inline}}
      - : `boolean`.选项卡是否为静音。
    - `lastFocusedWindow` {{optional_inline}}
      - : `boolean`.选项卡是否在上一个焦点窗口中。
    - `pinned` {{optional_inline}}
      - : `boolean`.选项卡是否固定。
    - `status` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.TabStatus')}}。选项卡是否已完成加载。
    - `title` {{optional_inline}}
      - : `string`.根据一个模式匹配页面标题。需要 "tabs "权限或[host permissions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)来匹配标签。
    - `url` {{optional_inline}}
      - : `string` 或“字符串”组成的“数组”。根据一个或多个[匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)匹配标签。注意，片段标识符不被匹配。需要 "tabs "权限或[host permissions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)来匹配标签。
    - `windowId`{{optional_inline}}
      - : `integer`. 父窗口的 "id"，或当前窗口的{{WebExtAPIRef('windows.WINDOW_ID_CURRENT')}}。
    - `windowType`{{optional_inline}}
      - : {{WebExtAPIRef('tabs.WindowType')}}. 选项卡所在窗口的类型。

### Return value

A [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an `array` of `{{WebExtAPIRef('tabs.Tab')}}` objects, containing information about each matching tab.

If any error occurs, the promise will be rejected with an error message.

## Examples

Get all tabs:

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs.query({}).then(logTabs, onError);
```

Get all tabs in the current window:

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs.query({ currentWindow: true }).then(logTabs, onError);
```

Get the active tab in the current window:

```js
function logTabs(tabs) {
  // tabs[0].url requires the `tabs` permission or a matching host permission.
  console.log(tabs[0].url);
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs
  .query({ currentWindow: true, active: true })
  .then(logTabs, onError);
```

Get tabs for all HTTP and HTTPS URLs under `"mozilla.org"` or any of its subdomains:

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs.query({ url: "*://*.mozilla.org/*" }).then(logTabs, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **备注：** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-query) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.
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
