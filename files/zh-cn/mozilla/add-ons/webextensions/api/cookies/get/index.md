---
title: cookies.get()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/get
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

{{WebExtAPIRef("cookies")}} API 的 **`get()`** 方法根据 cookie 的名称和 URL 检索有关单个 cookie 的信息。

如果给定 URL 存在多个具有相同名称的 cookie，将返回路径最长的那个 cookie。对于路径长度相同的 cookie，将返回创建时间最早的那个。如果找不到匹配的 cookie，则返回 `null`。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let getting = browser.cookies.get(
  details                // 对象
)
```

## 参数

- `details`

  - : 一个 `object`，包含用于匹配要检索的 cookie 的详细信息。它可以包含以下属性：

    - `firstPartyDomain` {{optional_inline}}

      - : 一个 `string`，表示与要检索的 cookie 关联的第一方域。如果浏览器启用了第一方隔离，则必须提供此属性。请参见[第一方隔离](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/cookies#第一方隔离)。

    - `name`

      - : 一个 `string`，表示要检索的 cookie 的名称。

    - `partitionKey` {{optional_inline}}

      - : 一个 `object`，表示包含 cookie 的[存储分区](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/cookies#存储分区)。包括此对象和 `topLevelSite` 以从分区存储中获取 cookie。否则，从未分区存储中返回 cookie。此对象包含：

        - `topLevelSite` {{optional_inline}}
          - : 一个 `string`，表示包含 cookie 的顶级站点存储分区的第一方 URL。

    - `storeId` {{optional_inline}}

      - : 一个 `string`，表示要查找的 {{WebExtAPIRef("cookies.CookieStore", "cookie 存储", "", 1)}}的 ID（由 {{WebExtAPIRef("cookies.getAllCookieStores()")}} 返回）。默认情况下，将使用当前执行上下文的 cookie 存储。

    - `url`

      - : 一个 `string`，表示与要检索的 cookie 关联的 URL。此参数可以是完整的 URL，在这种情况下，URL 路径之后的任何数据（例如查询字符串）将被忽略。如果此 URL 的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)未在扩展的 [manifest 文件](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json)中指定，则 API 调用将失败。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个包含有关 cookie 的详细信息的 {{WebExtAPIRef('cookies.Cookie', 'Cookie')}} 对象，或者如果未找到 cookie，则兑现 `null`。

## 浏览器兼容性

{{Compat}}

## 示例

此示例尝试获取与当前活动标签页的 URL 关联的名为“favorite-color”的 cookie：

```js
function logCookie(cookie) {
  if (cookie) {
    console.log(cookie.value);
  }
}

function getCookie(tabs) {
  let getting = browser.cookies.get({
    url: tabs[0].url,
    name: "favorite-color",
  });
  getting.then(logCookie);
}

let getActive = browser.tabs.query({
  active: true,
  currentWindow: true,
});
getActive.then(getCookie);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.cookies`](https://developer.chrome.google.cn/docs/extensions/reference/api/cookies#method-get) API。本文档源自 Chromium 代码中的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。

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
