---
title: declarativeNetRequest.setExtensionActionOptions
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/setExtensionActionOptions
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

配置是否将标签页的操作计数显示为扩展操作的徽章文本，并提供增加操作计数的方法。

## 语法

```js-nolint
let count = browser.declarativeNetRequest.setExtensionActionOptions(
    extensionActionOptions, // 对象
);
```

### 参数

- `extensionActionOptions`
  - : 包含标签页操作计数配置详细信息的对象。
    - `displayActionCountAsBadgeText` {{optional_inline}}
      - : `boolean`。是否自动将页面的操作计数显示为扩展的徽章文本。此首选项在会话之间持久存在。
    - `tabUpdate` {{optional_inline}}
      - : `object`。标签页操作计数应如何调整的详细信息。有关更多详细信息，请参见 [tabUpdate](#tabupdate_2) 部分。

## 附加对象

### tabUpdate

- `increment`
  - : `number`。要增加标签页的操作计数的数量。负值会减少计数。
- `tabId`
  - : `number`。要更新操作计数的标签页。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会被兑现且不带参数。如果请求失败，promise 将被拒绝并带有错误消息。

## 示例

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

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
