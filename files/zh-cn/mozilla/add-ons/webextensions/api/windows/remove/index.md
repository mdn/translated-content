---
title: windows.remove()
slug: Mozilla/Add-ons/WebExtensions/API/windows/remove
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

关闭给定 ID 的窗口及其所包含的所有标签页。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let removing = browser.windows.remove(
  windowId        // 整型
)
```

### 参数

- `windowId`
  - : `integer`。要关闭的窗口的 ID。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当窗口已关闭时将不带参数地兑现。如果发生任何错误，则该 promise 将以错误消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

当用户点击浏览器操作的图标时，关闭点击图标所在的窗口：

```js
function onRemoved() {
  console.log(`窗口已关闭`);
}

function onError(error) {
  console.error(`发生错误：`, error);
}

browser.browserAction.onClicked.addListener((tab) => {
  let removing = browser.windows.remove(tab.windowId);
  removing.then(onRemoved, onError);
});
```

当用户点击页面上的按钮时，关闭当前窗口（例如弹出窗口）：

```js
// 在窗口中的页面加载的脚本中
document.querySelector("#close").addEventListener(async ({ button }) => {
  try {
    if (button) return; // 不是鼠标左键单击
    const windowId = (await browser.windows.getCurrent()).id;
    await browser.windows.remove(windowId);
    // 因为窗口已被关闭，代码将不会执行到此处
  } catch (error) {
    console.error("无法关闭：", error);
  }
});
```

在 Firefox 中，你可以通过 `.allowScriptsToClose` 窗口创建属性和 `window.close()` 来实现相同的效果。

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.windows`](https://developer.chrome.google.cn/docs/extensions/reference/api/windows#method-remove) API。该文档衍生自 Chromium 代码中的 [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json)。

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
