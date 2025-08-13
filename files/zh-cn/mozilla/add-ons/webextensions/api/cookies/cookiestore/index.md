---
title: cookies.CookieStore
slug: Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{WebExtAPIRef("cookies")}} API 的 `CookieStore` 类型用于表示浏览器中的一个 cookie 存储。

不同浏览模式的窗口可能会使用不同的 cookie 存储。例如，隐私浏览/无痕模式窗口使用的 cookie 存储与非无痕/隐私窗口使用的 cookie 存储是分开的。此外，在 Firefox 中使用[容器标签页](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)时，一个窗口可能会有多个 cookie 存储。

有关 cookie 存储的更多信息，请参见[使用 Cookies API](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API#cookie_存储)。

## 类型

此类型的值是对象，可以包含以下属性：

- `id`
  - : 一个表示 cookie 存储的唯一标识符的 `string`。
- `incognito` {{optional_inline}}
  - : 一个布尔值，指示这是一个无痕 cookie 存储。此属性在 Chrome 或 Safari 中不受支持。不过，由于 Chrome 中无痕 cookie 存储的 `id` 值始终为“1”，你可以借此来识别这一存储。
- `tabIds`
  - : 一个整型数（`integer`）的数组，标识共享此 cookie 存储的所有浏览器标签页。

## 浏览器兼容性

{{Compat}}

## 示例

在以下代码片段中，{{WebExtAPIRef("cookies.getAllCookieStores()")}} 方法用于检索浏览器中当前可用的所有 cookie 存储，并打印出每个 cookie 存储的 ID 以及当前共享对应的 cookie 存储的标签页。

```js
function logStores(cookieStores) {
  for (const store of cookieStores) {
    console.log(`Cookie 存储：${store.id}\n标签页 ID：${store.tabIds}`);
  }
}

browser.cookies.getAllCookieStores().then(logStores);
```

以下代码片段获取所有 cookie 存储，然后记录存储的总数以及其中多少个存储是无痕模式的。

```js
browser.cookies.getAllCookieStores().then((stores) => {
  const incognitoStores = stores.map((store) => store.incognito);
  console.log(
    `${stores.length} 个 cookie 存储中有 ${incognitoStores.length} 个是无痕模式的。`,
  );
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.cookies`](https://developer.chrome.google.cn/docs/extensions/reference/api/cookies#type-CookieStore) API。该文档衍生自 Chromium 代码中的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。

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
