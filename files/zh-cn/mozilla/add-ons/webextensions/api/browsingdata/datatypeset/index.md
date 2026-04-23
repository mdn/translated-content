---
title: browsingData.DataTypeSet
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/DataTypeSet
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

**`browsingData.DataTypeSet`** 类型描述了一组数据类型。

它包含多个布尔属性。每个属性的名称是某种特定浏览数据的名称，例如“downloads”、“history”等。所有属性都是可选的。

此类型用于：

- 在 {{WebExtAPIRef("browsingData.remove()")}} 中描述要删除的数据类型
- 在 {{WebExtAPIRef("browsingData.settings()")}} 中描述当前在浏览器的“清除历史记录”功能中选择的数据类型

## 类型

此类型的值是对象。它们包含以下属性：

- `cache` {{optional_inline}}
  - : `boolean`。浏览器的缓存。
- `cookies` {{optional_inline}}
  - : `boolean`。浏览过程中获得的 cookie。
- `downloads` {{optional_inline}}
  - : `boolean`。用户的下载历史记录。
- `fileSystems` {{optional_inline}}
  - : `boolean`。网站的文件系统。
- `formData` {{optional_inline}}
  - : `boolean`。保存的表单数据，用于自动填充。
- `history` {{optional_inline}}
  - : `boolean`。用户的浏览历史记录。
- `indexedDB` {{optional_inline}}
  - : `boolean`。IndexedDB 数据。
- `localStorage` {{optional_inline}}
  - : `boolean`。本地存储数据。
- `passwords` {{optional_inline}}
  - : `boolean`。保存的密码，用于自动填充。
- `pluginData` {{optional_inline}}
  - : `boolean`。与插件关联的存储数据。
- `serverBoundCertificates` {{optional_inline}}
  - : `boolean`。存储的服务器绑定证书。
- `serviceWorkers` {{optional_inline}}
  - : `boolean`。service worker 缓存的数据。

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
