---
title: browsingData.RemovalOptions
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions
l10n:
  sourceCommit: 61fd66033bcc197a9d511dc95370ca042623ad5e
---

**`browsingData.RemovalOptions`** 类型包含控制浏览数据删除的某些方面的选项。

## 类型

此类型的值是对象。它们包含以下属性：

- `cookieStoreId` {{optional_inline}}
  - : `string`。此属性只适用于 cookie 和 indexedDB 项。删除仅限于通过 ID 指定的 [cookie 存储](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore)中的项目。有关更多信息，请参见[使用场景身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。

    > [!NOTE]
    > Firefox Nightly 还支持通过 `cookieStoreId` 删除 localStorage 项目。

- `hostnames` {{optional_inline}}
  - : `string` 数组。此属性适用于 cookie、indexedDB、本地存储和 service worker 注册项。仅删除与这些主机名关联的 cookie、indexedDB、本地存储和 service worker 注册项。

    这里必须传递不带协议的主机名（例如，`"google.com"` 而不是 `"https://google.com"`）。你可以使用 [`URL`](/zh-CN/docs/Web/API/URL) 接口来解析原始 URL 并检索主机名。与给定主机名的子域关联的项目不会被删除：你必须显式列出子域。

- `originTypes` {{optional_inline}}
  - : `object`。用于控制是仅从普通网页中删除数据，还是也从托管的 Web 应用程序和扩展中删除数据。如果省略此选项，则仅删除来自普通网页（`"unprotectedWeb"`）的数据。在删除来自 Web 应用程序或扩展的数据之前，请务必保持谨慎，以确保这确实是用户想要的。

    此对象可以包含以下任何属性：
    - `unprotectedWeb` {{optional_inline}}
      - : `boolean`。如果存在且为 `true`，则从普通网页中删除数据。
    - `protectedWeb` {{optional_inline}}
      - : `boolean`。如果存在且为 `true`，则从已安装为托管应用程序的网站中删除数据。
    - `extension` {{optional_inline}}
      - : `boolean`。如果存在且为 `true`，则从扩展中删除数据。

- `since` {{optional_inline}}
  - : `number`。从何时开始删除数据，以[自纪元以来的毫秒数表示](https://zh.wikipedia.org/wiki/UNIX时间)。请注意，在删除浏览器缓存时，将始终删除整个缓存，此选项将被忽略。如果省略 `since` 属性，则默认为 0，表示“所有时间”。

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browsingData`](https://developer.chrome.google.cn/docs/extensions/reference/api/browsingData) API。

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
