---
title: cookies.set()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/set
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{WebExtAPIRef("cookies")}} API 的 **`set()`** 方法设置包含指定 cookie 数据的 cookie。此方法相当于在请求给定 URL 时发出 HTTP `Set-cookie` 标头。

只有在你的 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中包含“cookies” [API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)以及给定 URL 的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)时，调用才会成功。给定的 URL 也需要必要的权限来创建具有给定参数的 cookie。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let setting = browser.cookies.set(
  details, // 对象
);
```

### 参数

- `details`
  - : 一个包含你想要设置的 cookie 详细信息的 `object`。它可以包含以下属性：
    - `domain` {{optional_inline}}
      - : 一个表示 cookie 域的 `string`。如果省略，cookie 将成为仅限主机（host-only）的 cookie。
    - `expirationDate` {{optional_inline}}
      - : 一个表示 cookie 过期日期的 `number`，以 UNIX 纪元以来的秒数表示。如果省略，cookie 将成为会话 cookie。
    - `firstPartyDomain` {{optional_inline}}
      - : 一个表示 cookie 将关联的第一方域的 `string`。如果浏览器启用了第一方隔离，则必须提供此属性。参见[第一方隔离](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/cookies#第一方隔离)。
    - `httpOnly` {{optional_inline}}
      - : 一个 `boolean`，指定是否应将 cookie 标记为 HttpOnly（`true`），或不标记（`false`）。如果省略，默认为 false。
    - `name` {{optional_inline}}
      - : 一个表示 cookie 名称的 `string`。如果省略，默认为空。
    - `partitionKey` {{optional_inline}}
      - : 一个表示存储分区的 `object`，用于在分区存储中设置 cookie。包含此对象以在分区存储中设置 cookie。该对象包含：
        - `topLevelSite` {{optional_inline}}
          - : 一个表示包含 cookie 的顶级站点存储分区的第一方 URL 的 `string`。
    - `path` {{optional_inline}}
      - : 一个表示 cookie 路径的 `string`。如果省略，默认为 URL 参数的路径部分。
    - `sameSite` {{optional_inline}}
      - : 一个 {{WebExtAPIRef("cookies.SameSiteStatus")}} 值，指示 cookie 的 SameSite 状态。如果省略，默认为 0，即“no_restriction”。
    - `secure` {{optional_inline}}
      - : 一个 `boolean`，指定是否应将 cookie 标记为安全（`true`），或不标记（`false`）。如果省略，默认为 false。
    - `storeId` {{optional_inline}}
      - : 一个表示要在其中设置 cookie 的 cookie 存储区 ID 的 `string`。如果省略，默认情况下 cookie 设置在当前执行上下文的 cookie 存储区中。
    - `url`
      - : 一个表示与 cookie 关联的请求 URI 的 `string`。此值可以影响创建的 cookie 的默认域和值路径。如果清单（manifest）文件中未指定此 URL 的主机权限，则方法调用将失败。
    - `value` {{optional_inline}}
      - : 一个表示 cookie 值的 `string`。如果省略，默认为空。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，它会兑现一个包含已设置 cookie 详细信息的 {{WebExtAPIRef('cookies.Cookie')}} 对象。如果由于任何原因调用失败，Promise 会以错误消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

此示例为当前活动标签页托管的文档设置一个 cookie：

```js
let getActive = browser.tabs.query({ active: true, currentWindow: true });
getActive.then(setCookie);

function setCookie(tabs) {
  browser.cookies.set({
    url: tabs[0].url,
    name: "favorite-color",
    value: "red",
  });
}
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.cookies`](https://developer.chrome.google.cn/docs/extensions/reference/api/cookies#method-set) API。该文档衍生自 Chromium 代码中的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。

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
