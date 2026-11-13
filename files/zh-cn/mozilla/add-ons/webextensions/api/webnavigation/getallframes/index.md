---
title: webNavigation.getAllFrames()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

给定一个标签页 ID，获取其包含的所有框架的信息。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingFrames = browser.webNavigation.getAllFrames(
  details                // 对象
)
```

### 参数

- `details`
  - : `object`。要获取所有框架的信息的标签页的信息。
    - `tabId`
      - : `integer`。标签页的 ID。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现为一个对象数组。数组中的每个对象都包含以下属性：

- `errorOccurred`
  - : `boolean`。如果此框架中的最后一次导航因错误中断（即触发了 {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} 事件），则为真。
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`。在现代浏览器中未设置该值。当设置时，它表示运行此标签页渲染器的进程 ID。
- `frameId`
  - : `integer`。框架的 ID。如果这是主框架，则 `frameId` 为零。
- `parentFrameId`
  - : `integer`。此框架父框架的 ID。如果没有父框架（即此框架是标签页中的顶级浏览上下文），则为 -1。
- `url`
  - : `string`。当前与此框架关联的 URL。

如果标签页被丢弃，该 promise 将兑现为 `null`。如果找不到指定的标签页或发生其他错误，则该 promise 将以错误消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

以下代码在用户点击浏览器操作时，记录活动标签页中所有框架的 URL：

```js
function logFrameInfo(framesInfo) {
  for (const frameInfo of framesInfo) {
    console.log(frameInfo);
  }
}

function onError(error) {
  console.error(`错误：${error}`);
}

function logAllFrames(tabs) {
  browser.webNavigation
    .getAllFrames({
      tabId: tabs[0].id,
    })
    .then(logFrameInfo, onError);
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then(logAllFrames, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webNavigation`](https://developer.chrome.google.cn/docs/extensions/reference/api/webNavigation#method-getAllFrames) API。该文档衍生自 Chromium 代码中的 [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json)。

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
