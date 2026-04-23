---
title: browserAction.getPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getPopup
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

获取设置为此浏览器操作弹出窗口的 HTML 文档。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingPopup = browser.browserAction.getPopup(
  details               // 对象
)
```

### 参数

- `details`
  - : 包含以下属性的对象：
    - `tabId` {{optional_inline}}
      - : `integer`。要获取其弹出窗口的标签页。
    - `windowId` {{optional_inline}}
      - : `integer`。要获取其弹出窗口的窗口。

<!---->

- 如果同时提供了 `windowId` 和 `tabId`，则函数失败。
- 如果 `windowId` 和 `tabId` 都省略，则返回全局弹出窗口。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现包含弹出窗口文档的 URL 的字符串。这将是一个完全限定的 URL，例如 `moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/popups/popup2.html`。

## 浏览器兼容性

{{Compat}}

## 示例

获取弹出窗口的 URL：

```js
function gotPopup(popupURL) {
  console.log(popupURL);
}

let gettingPopup = browser.browserAction.getPopup({});
gettingPopup.then(gotPopup);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browserAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/browserAction#method-getPopup) API。该文档衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
