---
title: tabs.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/query
---

{{AddonSidebar()}}

获取具有指定属性的所有标签页，如果未指定任何属性，则获取所有标签页。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let querying = browser.tabs.query(queryObj)
```

### 参数

- `queryObj`

  - : `object`。`query()` 函数将仅获取其属性与此处包含的属性相匹配的标签页。

    请参阅 {{WebExtAPIRef("tabs.Tab")}} 文档以了解有关这些属性的详细信息。

    - `active` {{optional_inline}}
      - : `boolean`。标签页是否在窗口中处于活动状态。
    - `audible` {{optional_inline}}
      - : `boolean`。标签页是否在播放声音。
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`。浏览器是否可以自动丢弃该标签页。默认值为 `true`。若设置为 `false`，则浏览器将不会自动丢弃该标签页。但是，标签页仍可使用 {{WebExtAPIRef("tabs.discard")}} 来丢弃。
    - `cookieStoreId` {{optional_inline}}
      - : `string` 或 `string` 数组。使用它来返回 `tab.cookieStoreId` 与指定的任何 `cookieStoreId` 字符串相匹配的标签页。此选项仅在附加组件具有 `"cookies"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)时才可用。
    - `currentWindow` {{optional_inline}}
      - : `boolean`。标签页是否在当前窗口中。
    - `discarded` {{optional_inline}}
      - : `boolean`。标签页是否被丢弃。丢弃的标签页是指其内容已从内存中卸载，但仍在标签条中可见的标签页。其内容将下次激活时重新加载。
    - `hidden` {{optional_inline}}
      - : `boolean`。标签页是否被隐藏。
    - `highlighted` {{optional_inline}}
      - : `boolean`。标签页是否突出显示。
    - `index` {{optional_inline}}
      - : `integer`。标签页在其窗口中的位置。
    - `muted` {{optional_inline}}
      - : `boolean`。标签页是否静音。
    - `lastFocusedWindow` {{optional_inline}}
      - : `boolean`。标签页是否在最近聚焦的（last focused）窗口中。
    - `pinned` {{optional_inline}}
      - : `boolean`。标签页是否固定。
    - `status` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.TabStatus')}}。标签页是否已完成加载。
    - `title` {{optional_inline}}
      - : `string`。将页面标题与模式进行匹配。需要“tabs”权限或匹配标签的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。
    - `url` {{optional_inline}}
      - : `string` 或 `string` 数组。将标签页与一个或多个[匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)进行匹配。请注意，不会匹配片段标识符。需要“tabs”权限或匹配标签的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。
    - `windowId` {{optional_inline}}
      - : `integer`。父窗口的 ID，或 {{WebExtAPIRef('windows.WINDOW_ID_CURRENT')}}（用于当前窗口）。
    - `windowType` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.WindowType')}}。标签页所在窗口的类型。

### 返回值

一个将兑现为包含 {{WebExtAPIRef('tabs.Tab')}} 对象（其中包含有关每个匹配的标签页的信息）的数组的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象。

如果发生任何错误，promise 将以一条错误消息被拒绝。

## 示例

获取所有标签页：

```js
function logTabs(tabs) {
  for (const tab of tabs) {
    // tab.url 需要 `tabs` 权限或匹配的主机（host）权限。
    console.log(tab.url);
  }
}

function onError(error) {
  console.error(`错误：${error}`);
}

browser.tabs.query({}).then(logTabs, onError);
```

获取当前窗口中的所有标签页：

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url 需要 `tabs` 权限或匹配的主机权限。
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`错误：${error}`);
}

browser.tabs.query({ currentWindow: true }).then(logTabs, onError);
```

获取当前窗口中的活动标签页：

```js
function logTabs(tabs) {
  // tabs[0].url 需要 `tabs` 权限或匹配的主机权限。
  console.log(tabs[0].url);
}

function onError(error) {
  console.error(`错误：${error}`);
}

browser.tabs
  .query({ currentWindow: true, active: true })
  .then(logTabs, onError);
```

获取 `"mozilla.org"` 及其任何子域下所有 HTTP 和 HTTPS URL 的标签页：

```js
function logTabs(tabs) {
  for (const tab of tabs) {
    // tab.url 需要 `tabs` 权限或匹配的主机权限。
    console.log(tab.url);
  }
}

function onError(error) {
  console.error(`错误：${error}`);
}

browser.tabs.query({ url: "*://*.mozilla.org/*" }).then(logTabs, onError);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> **备注：** 该 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-query) API。本文档衍生自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
