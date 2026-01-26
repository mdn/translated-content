---
title: cookies.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAll
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{WebExtAPIRef("cookies")}} API 的 **`getAll()`** 方法用于从单个 cookie 存储中检索与给定信息匹配的所有 cookie。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let getting = browser.cookies.getAll(
  details                // 对象
)
```

### 参数

- `details`
  - : 一个 `object`，包含用于匹配要检索的 Cookie 的详细信息。包含的属性如下（有关这些属性的更多信息，请参见 [Cookie 类型](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/cookies/Cookie#type)）：
    - `domain` {{optional_inline}}
      - : 一个 `string`，表示 Cookie 必须关联的域（它们可以与此确切域或其子域之一关联）。

    - `firstPartyDomain` {{optional_inline}}
      - : 一个 `string`，表示要检索的 Cookie 所关联的第一方域。

        如果浏览器启用了第一方隔离，则必须提供此属性。但是，在这种情况下，你可以将这个值设为 `null`。如果这样做，那么结果中将包括 `firstPartyDomain` 值为任意或为空的 Cookie。请参见[第一方隔离](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/cookies#第一方隔离)。

    - `name` {{optional_inline}}
      - : 一个 `string`，表示 Cookie 应该具有的名称。

    - `partitionKey` {{optional_inline}}
      - : 一个 `object`，定义要从哪个[存储分区](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/cookies#存储分区)返回 Cookie：
        - 如果省略，则仅返回未分区存储中的 Cookie。
        - 如果提供但未指定 `topLevelSite`，则返回分区和未分区存储中的所有 Cookie。
        - 如果提供并指定了 topLevelSite，则返回指定分区存储中的 Cookie。

        此对象包含：
        - `topLevelSite` {{optional_inline}}
          - : 一个 `string`，表示包含 Cookie 的顶级站点存储分区的第一方 URL。

    - `path` {{optional_inline}}
      - : 一个 `string`，表示路径——Cookie 的路径必须与此路径相同。

    - `secure` {{optional_inline}}
      - : 一个 `boolean`，根据其 `secure` 属性过滤 Cookie，允许你过滤安全 Cookie 和非安全 Cookie。

    - `session` {{optional_inline}}
      - : 一个 `boolean`，根据其 `session` 属性过滤 Cookie，允许你过滤会话 Cookie 和持久性 Cookie。

    - `storeId` {{optional_inline}}
      - : 一个 `string`，表示要从中检索 Cookie 的 Cookie 存储。如果省略，将使用当前执行上下文的 Cookie 存储。

    - `url` {{optional_inline}}
      - : 一个 `string`，表示要检索的 Cookie 必须关联的 URL。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个 {{WebExtAPIRef('cookies.Cookie')}} 对象数组，这些对象与 `details` 参数中给定的属性匹配。仅返回未过期的 Cookie。返回的 Cookie 将按路径长度排序，从最长到最短。如果多个 Cookie 的路径长度相同，则创建时间最早的将排在最前面。

## 浏览器兼容性

{{Compat}}

## 示例

在下面的代码片段中，我们调用函数来获取浏览器当前存储的所有名称为“favorite-color”的 Cookie。当结果返回时，我们将每个结果的值打印到控制台。

```js
function logCookies(cookies) {
  for (const cookie of cookies) {
    console.log(cookie.value);
  }
}

browser.cookies
  .getAll({
    name: "favorite-color",
  })
  .then(logCookies);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.cookies`](https://developer.chrome.google.cn/docs/extensions/reference/api/cookies#method-getAll) API。该文档衍生自 Chromium 代码中的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。

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
