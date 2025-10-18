---
title: webNavigation.getFrame()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

获取有关特定框架的信息。一个框架可以是标签页中的顶层框架，也可以是嵌套的 [`<iframe>`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe)，其唯一标识由标签页 ID 和框架 ID 一起确定。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingFrame = browser.webNavigation.getFrame(
  details                // 对象
)
```

### 参数

- `details`
  - : `object`。要获取信息的框架的信息。
    - `tabId`
      - : `integer`。该框架所属的标签页 ID。
    - `processId` {{optional_inline}} {{deprecated_inline}}
      - : `integer`。在现代浏览器中未设置该值。当设置时，它表示运行此标签页渲染器的进程 ID。
    - `frameId`
      - : `integer`。给定标签页中该框架的 ID。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，且该 promise 会以包含以下属性的对象兑现：

- `errorOccurred`
  - : `boolean`。如果该框架中的最后一次导航因错误中断（即触发了 {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} 事件），则为真。
- `url`
  - : `string`。当前与该框架关联的 URL（如果由 `frameId` 标识的框架曾经存在于由 `tabId` 标识的标签页中）。某个 URL 与特定 `frameId` 关联并不意味着该框架当前仍然存在。
- `parentFrameId`
  - : `integer`。该框架的父框架的 ID。如果没有父框架（即该框架为标签页中的顶层浏览上下文），则为 -1。

如果标签页被丢弃，则该 promise 将兑现为 `null`。如果找不到指定的标签页或框架 ID，或发生其他错误，则 promise 将以错误信息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

```js
function onGot(frameInfo) {
  console.log(frameInfo);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let gettingFrame = browser.webNavigation.getFrame({
  tabId: 19,
  frameId: 1537,
});

// Edge 专属：processId 并非可选项而是必选项，必须为一个整型而非 null
//let gettingFrame = browser.webNavigation.getFrame({ tabId: 19, processId: 0, frameId: 1537 });

gettingFrame.then(onGot, onError);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webNavigation`](https://developer.chrome.google.cn/docs/extensions/reference/api/webNavigation#method-getFrame) API。该文档衍生自 Chromium 代码中的 [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json)。

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
