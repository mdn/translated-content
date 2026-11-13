---
title: cookies.getAllCookieStores()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAllCookieStores
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{WebExtAPIRef("cookies")}} API 的 **`getAllCookieStores()`** 方法返回所有 cookie 存储的列表。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingStores = browser.cookies.getAllCookieStores()
```

### 参数

无。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，会兑现一个表示所有现有 cookie 存储的 {{WebExtAPIRef('cookies.CookieStore')}} 对象的数组。

## 浏览器兼容性

{{Compat}}

## 示例

在下面的代码片段中，`getAllCookieStores()` 方法用于检索浏览器中当前可用的所有 cookie 存储，并打印每个 cookie 存储的 ID，以及当前共享对应的 cookie 存储的标签页。

```js
function logStores(cookieStores) {
  for (const store of cookieStores) {
    console.log(`Cookie 存储：${store.id}\n标签页 ID：${store.tabIds}`);
  }
}

browser.cookies.getAllCookieStores().then(logStores);
```

`cookieStores` 数组的每个成员都是一个 {{WebExtAPIRef("cookies.CookieStore")}} 对象。

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.cookies`](https://developer.chrome.google.cn/docs/extensions/reference/api/cookies#method-getAllCookieStores) API。该文档衍生自 Chromium 代码中的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。

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
