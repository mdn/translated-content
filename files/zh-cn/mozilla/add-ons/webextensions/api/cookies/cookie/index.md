---
title: cookies.Cookie
slug: Mozilla/Add-ons/WebExtensions/API/cookies/Cookie
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{WebExtAPIRef("cookies")}} API 的 `Cookie` 类型表示有关 HTTP cookie 的信息。

## 类型

此类型的值是对象，可以包含以下属性：

- `domain`
  - : 表示 cookie 所属域的 `string`（例如“www\.google.com”、“example.com”）。
- `expirationDate` {{optional_inline}}
  - : 表示 cookie 到期日期的 `number`，以 UNIX 纪元以来的秒数表示。会话 cookie 不提供此属性。
- `firstPartyDomain`
  - : 表示与 cookie 关联的第一方域的 `string`。如果在第一方隔离关闭时设置 cookie，此属性将为空字符串。参见[第一方隔离](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/cookies#第一方隔离)。
- `hostOnly`
  - : 一个 `boolean`，如果 cookie 仅适用于主机（即请求的主机必须与 cookie 的域完全匹配），则为 `true`，否则为 `false`。
- `httpOnly`
  - : 一个 `boolean`，如果 cookie 标记为 HttpOnly（即客户端脚本无法访问 cookie），则为 `true`，否则为 `false`。
- `name`
  - : 表示 cookie 名称的 `string`。
- `partitionKey` {{optional_inline}}
  - : 一个 `object`，表示包含 cookie 的存储分区的描述。如果 cookie 不在分区存储中，则此对象省略（空值）。此对象包含以下属性：
    - `topLevelSite`
      - : 如果 cookie 存储在按顶级站点分区的存储中，则表示 cookie 存储分区的第一方 URL 的 `string`。
- `path`
  - : 表示 cookie 路径的 `string`。
- `secure`
  - : 一个 `boolean`，如果 cookie 标记为安全（即其作用域仅限于安全通道，通常是 HTTPS）则为 `true`，否则为 `false`。
- `session`
  - : 一个 `boolean`，如果 cookie 是会话 cookie，则为 `true`；如果是具有到期日期的持久 cookie，则为 `false`。
- `sameSite`
  - : 一个 {{WebExtAPIRef("cookies.SameSiteStatus")}} 值，指示 cookie 的同站（SameSite）状态。
- `storeId`
  - : 表示包含此 cookie 的 cookie 存储的 ID 的 `string`，由 {{WebExtAPIRef("cookies.getAllCookieStores()")}} 提供。
- `value`
  - : 表示 cookie 值的 `string`。

## 浏览器兼容性

{{Compat}}

## 示例

cookies API 中的大多数方法涉及使用 `Cookie` 对象作为输入参数或作为返回值的一部分。例如，调用 {{WebExtAPIRef("cookies.getAll()")}} 会返回一个 `Cookie` 对象数组。

在下面的示例中，我们请求获取所有的 cookie，然后输出每个 `Cookie` 对象的一些值：

```js
function logCookies(cookies) {
  for (cookie of cookies) {
    console.log(`Domain: ${cookie.domain}`);
    console.log(`Name: ${cookie.name}`);
    console.log(`Value: ${cookie.value}`);
    console.log(`Persistent: ${!cookie.session}`);
  }
}

let gettingAll = browser.cookies.getAll({});
gettingAll.then(logCookies);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.cookies`](https://developer.chrome.google.cn/docs/extensions/reference/api/cookies#type-Cookie) API。该文档衍生自 Chromium 代码中的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。

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
