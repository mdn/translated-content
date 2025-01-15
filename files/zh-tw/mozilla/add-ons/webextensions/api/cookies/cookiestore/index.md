---
title: cookies.CookieStore
slug: Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore
---

{{AddonSidebar}}

{{WebExtAPIRef("cookies")}} API 的 `CookieStore` 型別代表瀏覽器中的 cookie 存放空間。

不同瀏覽模式（browsing mode）的視窗，有不同的 cookie 存放空間：例如隱私/隱身模式的視窗，會使用來自非隱私/隱身模式視窗的個別 cookie 存放空間。

## 型別

此型別的值都是物件，並包含以下屬性：

- `id`
  - : `string`，代表 cookie 存放空間內的唯一識別號（identifier）。
- `tabIds`
  - : `integers` 的 `array`，識別所有分享此 cookie 存放空間的瀏覽頁籤。

## 瀏覽器相容性

{{Compat}}

## 示例

在以下程式碼片段內，{{WebExtAPIRef("cookies.getAllCookieStores()")}} 用來查找瀏覽器內，所有目前能用 cookie 存放空間，並列出每個 cookie 存放空間的 ID、還有分享此 cookie 存放空間的頁籤。

```js
function logStores(cookieStores) {
  for (store of cookieStores) {
    console.log(`Cookie store: ${store.id}\n Tab IDs: ${store.tabIds}`);
  }
}

var getting = browser.cookies.getAllCookieStores();
getting.then(logStores);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基於 Chromium 的 [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies) API 而來，文件改作自 Chromium 程式碼裡的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。
>
> Microsoft Edge 的相容資訊來自微軟公司，原文以創用 CC 姓名標示 3.0 美國版條款授權大眾使用。

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
