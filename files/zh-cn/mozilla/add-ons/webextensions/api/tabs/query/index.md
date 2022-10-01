---
title: tabs.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/query
original_slug: Mozilla/Add-ons/WebExtensions/API/tabs/查询
---

\[阿登侧边栏（）]

获取具有指定属性的所有选项卡，如果未指定任何属性，则获取所有选项卡。

这是返回 的异步函数。[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## 语法

```js
let querying = browser.tabs.query(queryObj)
```

### 参数

- `queryObj`

  - : `object`.函数将仅获取其属性与此处包含的属性匹配的选项卡。`query()`

    请参阅 \WebExtAPIRef（"选项卡"）。Tab"）=文档以了解有关这些属性的详细信息。

    - `active` {{optional_inline}}
      - : `boolean`.选项卡是否在窗口中处于活动状态。
    - `audible` {{optional_inline}}
      - : `boolean`.标签是否可听见。
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`.当资源不足时，浏览器是否可以自动丢弃选项卡。
    - `cookieStoreId` {{optional_inline}}
      - : `string`.使用此仅返回其 Cookie 存储 ID 为 的选项卡。此选项仅在加载项具有权限时[才可用](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。`cookieStoreId` `cookies`
    - `currentWindow` {{optional_inline}}
      - : `boolean`.选项卡是否在当前窗口中。
    - `discarded` {{optional_inline}}
      - : `boolean`.是否丢弃选项卡。丢弃的选项卡是其内容已从内存中卸载，但仍在选项卡条中可见的选项卡。下次激活时，其内容将重新加载。
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
      - : {WebExtAPIRef（'选项卡。TabStatus '）=。选项卡是否已完成加载。
    - `title` {{optional_inline}}
      - : `string`.将页面标题与图案匹配。
    - `url` {{optional_inline}}
      - : `string`或。将选项卡与一个或多个匹配[模式匹配](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)。请注意，片段标识符不匹配。`array of string`
    - `windowId`{{optional_inline}}
      - : `integer`. The of the parent window, or {{WebExtAPIRef('windows.WINDOW_ID_CURRENT')}} for the current window.`id`
    - `windowType`{{optional_inline}}
      - : {{WebExtAPIRef('tabs.WindowType')}}. The type of window the tabs are in.

### Return value

A [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an `array` of `{{WebExtAPIRef('tabs.Tab')}}` objects, containing information about each matching tab.

If any error occurs, the promise will be rejected with an error message.

## Examples

Get all tabs:

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let querying = browser.tabs.query({});
querying.then(logTabs, onError);
```

Get all tabs in the current window:

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let querying = browser.tabs.query({currentWindow: true});
querying.then(logTabs, onError);
```

Get the active tab in the current window:

```js
function logTabs(tabs) {
  // tabs[0].url requires the `tabs` permission
  console.log(tabs[0].url);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let querying = browser.tabs.query({currentWindow: true, active: true});
querying.then(logTabs, onError);
```

Get tabs for all HTTP and HTTPS URLs under or any of its subdomains: `"mozilla.org"`

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let querying = browser.tabs.query({url: "*://*.mozilla.org/*"});
querying.then(logTabs, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **备注：** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-query) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.
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
