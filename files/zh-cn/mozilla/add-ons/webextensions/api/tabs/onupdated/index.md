---
title: tabs.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
l10n:
  sourceCommit: 934dace5fd2f456fb9178b687ad0abb6e4b0a049
---

{{AddonSidebar}}

标签页更新时触发。

当用户在标签页中导航到新 URL 时，通常会生成多个 `onUpdated` 事件，因为 {{WebExtAPIRef("tabs.Tab")}} 对象的各种属性会被更新。这包括 `url`，但也可能包括 `title` 和 `favIconUrl` 属性。`status` 属性会在 `"loading"` 和 `"complete"` 之间循环。

此事件也会在标签页的属性更改时触发，这些更改不涉及导航，例如固定和取消固定（更新 `pinned` 属性）以及静音或取消静音（更新 `audible` 和 `mutedInfo` 属性）。

你可以过滤此事件，使其仅针对 URL 匹配特定[模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)的标签页、更改特定属性、更改特定标签页或窗口，或这些限制的任意组合触发。

## 语法

```js-nolint
browser.tabs.onUpdated.addListener(
  listener, // 函数
  filter     // 可选的对象
)
browser.tabs.onUpdated.removeListener(listener)
browser.tabs.onUpdated.hasListener(listener)
```

事件有三个函数：

- `addListener(callback, filter)`
  - : 向此事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册此事件。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 此事件发生时调用的函数。该函数接收以下参数：

    - `tabId`
      - : `integer`。更新的标签页的 ID。
    - `changeInfo`
      - : `object`。标签页更改的属性。详见 [changeInfo](#changeinfo_2) 部分。
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}。标签页的新状态。

- `filter` {{optional_inline}}

  - : `object`。一组过滤器，限制发送给此监听器的事件。此对象可以具有以下属性之一或多个。仅当事件满足提供的所有过滤器时才发送事件。

    - `urls`
      - : `Array`。一个[匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)数组。仅当标签页的当前 `url` 属性匹配任意一个模式时才触发事件。
    - `properties`

      - : `Array`。一个由支持的 {{WebExtAPIRef("tabs.Tab")}} 对象属性名称组成的字符串数组。仅当更改了数组中的某个属性时才触发事件。可以使用这些属性：

        - `"attention"`
        - `"autoDiscardable"`
        - `"audible"`
        - `"discarded"`
        - `"favIconUrl"`
        - `"hidden"`
        - `"isArticle"`
        - `"mutedInfo"`
        - `"openerTabId"`
        - `"pinned"`
        - `"status"`
        - `"title"`
        - `"url"`

        > **备注：** `"url"` 值自 Firefox 88 起支持。在 Firefox 87 及更早版本中，可以通过过滤“status”来观察 `"url"` 的更改。

    - `tabId`
      - : `Integer`。仅针对此 ID 标识的标签页触发该事件。
    - `windowId`
      - : `Integer`。仅针对此 ID 标识的窗口中的标签页触发该事件。

## 附加对象

### changeInfo

列出更新标签页的状态更改。要了解这些属性的详细信息，请参阅 {{WebExtAPIRef("tabs.Tab")}} 文档。注意，并非所有 {{WebExtAPIRef("tabs.Tab")}} 属性都受支持。

- `attention` {{optional_inline}}
  - : `boolean`。表示标签页是否吸引注意力。例如，当标签页显示模态对话框时，`attention` 为 `true`。
- `audible` {{optional_inline}}
  - : `boolean`。标签页的新可听状态。
- `autoDiscardable` {{optional_inline}}
  - : `boolean`。标签页是否可以被浏览器丢弃。默认值为 `true`。当设置为 `false` 时，浏览器无法自动丢弃标签页。但标签页可以被 {{WebExtAPIRef("tabs.discard")}} 丢弃。
- `discarded` {{optional_inline}}
  - : `boolean`。标签页是否被丢弃。丢弃的标签页是其内容已从内存中卸载但在标签页栏中可见的标签页。下次激活时，其内容会重新加载。
- `favIconUrl` {{optional_inline}}
  - : `string`。标签页的新图标 URL。当标签页失去图标（从具有图标的页面导航到没有图标的页面）时不包括此属性。请检查 [tab](#tab) 中的 `favIconUrl`。
- `hidden` {{optional_inline}}
  - : `boolean`。如果标签页是{{WebExtAPIRef("tabs.hide()", "隐藏的", "", 1)}}，则为 `true`。
- `isArticle` {{optional_inline}}
  - : `boolean`。如果标签页是文章，因此可以显示在[阅读模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)中，则为 `true`。
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}。标签页的新静音状态及更改原因。
- `openerTabId` {{optional_inline}}
  - : `integer`。打开了当前标签页的标签页的 ID（如果存在）。仅当打开当前标签页的标签页存在且与当前标签页在同一窗口中时，才会出现此属性。
- `pinned` {{optional_inline}}
  - : `boolean`。标签页的新固定状态。
- `status` {{optional_inline}}
  - : `string`。标签页的状态。可以是 _loading_ 或 _complete_。
- `title` {{optional_inline}}
  - : `string`。标签页的新标题。
- `url` {{optional_inline}}
  - : `string`。如果标签页的 URL 已更改。

## 示例

监听并记录所有更改信息和新状态：

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`更新的标签：${tabId}`);
  console.log("改变的属性：", changeInfo);
  console.log("新标签的信息：", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

记录 URL 的更改：

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {
    console.log(`标签：${tabId} 的 URL 改变为 ${changeInfo.url}`);
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

### 过滤示例

仅当标签页的 `url` 属性[匹配](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) `https://developer.mozilla.org/*` 或 `https://mastodon.social/@mdn` 时记录更改：

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mastodon.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`更新的标签：${tabId}`);
  console.log("改变的属性：", changeInfo);
  console.log("新标签的信息：", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

仅记录标签页的 `pinned` 属性的更改（即固定和取消固定操作）：

```js
const filter = {
  properties: ["pinned"],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`更新的标签：${tabId}`);
  console.log("改变的属性：", changeInfo);
  console.log("新标签的信息：", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

组合前两个过滤器，仅当标签页的 `pinned` 属性更改且 `url` 属性匹配 `https://developer.mozilla.org/*` 或 `https://mastodon.social/@mdn` 时记录更改：

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mastodon.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`更新的标签：${tabId}`);
  console.log("改变的属性：", changeInfo);
  console.log("新标签的信息：", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

仅当标签页的 `pinned` 属性更改且 `url` 属性[匹配](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) `https://developer.mozilla.org/*` 或 `https://mastodon.social/@mdn` 且在事件触发时标签页属于当前浏览器窗口时记录更改：

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mastodon.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"],
  windowId: browser.windows.WINDOW_ID_CURRENT,
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`更新的标签：${tabId}`);
  console.log("改变的属性：", changeInfo);
  console.log("新标签的信息：", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#event-onUpdated) API。此文档来自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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

{{AddonSidebar}}
