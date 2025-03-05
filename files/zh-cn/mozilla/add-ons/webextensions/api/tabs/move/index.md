---
title: tabs.move()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/move
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

移动一个或多个标签页到同一窗口中的新位置或不同窗口中。

只能将标签页移动到 {{WebExtAPIRef('windows.WindowType', 'WindowType')}} 属性为 `"normal"` 的窗口，或在 {{WebExtAPIRef('windows.WindowType', 'WindowType')}} 属性为 `"normal"` 的窗口中移动标签页。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js
let moving = browser.tabs.move(
  tabIds, // 整数或整数数组
  moveProperties, // 对象
);
```

### 参数

- `tabIds`
  - : 整数或整数数组。要移动的{{WebExtAPIRef('tabs.Tab', '标签页', '', 'nocode')}}的 ID，或标签页 ID 数组。
- `moveProperties`

  - : `object`。指定标签页移动目标的对象。

    - `windowId` {{optional_inline}}
      - : `integer`。要将标签页移动到的窗口的 ID。如果省略此参数，则每个在 `tabIds` 中的标签页将会移动到其当前窗口的 `index` 位置。如果包含此参数，并且 `tabIds` 包含多个标签页，则第一个标签页将移动到 `index` 位置，其他标签页将按照给定的顺序依次跟随。
    - `index`

      - : `integer`。要移动到的索引位置，从 0 开始计数。值为 -1 将标签页放置在窗口的末尾。

        如果传递一个小于 -1 的值，函数将抛出错误。

        注意，不能将固定标签页移动到未固定标签页之后的位置，也不能将任何未固定标签页移动到固定标签页之前的位置。例如，如果目标窗口中有一个或多个固定标签页，并且 `tabIds` 引用的是一个未固定标签页，则不能在此处传递 0。如果尝试这样做，函数将静默失败（不会抛出错误）。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在所有移动的标签页都完成移动时其会兑现为一个 `{{WebExtAPIRef('tabs.Tab')}}` 对象或包含多个 `{{WebExtAPIRef('tabs.Tab')}}` 对象的数组，其中每个 `{{WebExtAPIRef('tabs.Tab')}}` 对象包含了已进行移动的标签页的详情。如果没有标签页被移动（例如，因为尝试将一个未固定标签页移动到一个固定标签页之前），则返回一个空数组。如果发生任何错误，promise 将会以错误信息拒绝。

## 示例

将当前窗口中的第一个标签页移动到当前窗口的最后位置：

```js
function onMoved(tab) {
  console.log(`已移动：${tab}`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

function firstToLast(windowInfo) {
  if (windowInfo.tabs.length === 0) {
    return;
  }
  let moving = browser.tabs.move(windowInfo.tabs[0].id, { index: -1 });
  moving.then(onMoved, onError);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingCurrent = browser.windows.getCurrent({ populate: true });
  gettingCurrent.then(firstToLast, onError);
});
```

将所有通过 HTTP 或 HTTPS 提供的来自 \*.mozilla.org 的标签页移动到它们所在窗口的末尾：

```js
function onMoved(tab) {
  console.log(`已移动：${tab}`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

function moveMoz(tabs) {
  let mozTabIds = tabs.map((tabInfo) => tabInfo.id);
  let moving = browser.tabs.move(mozTabIds, { index: -1 });
  moving.then(onMoved, onError);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingMozTabs = browser.tabs.query({ url: "*://*.mozilla.org/*" });
  gettingMozTabs.then(moveMoz, onError);
});
```

将所有通过 HTTP 或 HTTPS 提供的来自 \*.mozilla.org 的标签页移动到第一个这样的标签页所在窗口，从 0 号位置开始：

```js
function onMoved(tab) {
  console.log(`已移动：${tab}`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

function moveMoz(tabs) {
  let mozTabIds = tabs.map((tabInfo) => tabInfo.id);
  let targetWindow = tabs[0].windowId;
  let moving = browser.tabs.move(mozTabIds, {
    windowId: targetWindow,
    index: 0,
  });
  moving.then(onMoved, onError);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingMozTabs = browser.tabs.query({ url: "*://*.mozilla.org/*" });
  gettingMozTabs.then(moveMoz, onError);
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-move) API。此文档来源于 Chromium 代码库中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
