---
title: declarativeNetRequest.testMatchOutcome
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/testMatchOutcome
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

检查扩展的任何 `declarativeNetRequest` 规则是否与假设请求匹配。仅在测试期间可用，因为这是用于扩展开发的。有关如何在每个浏览器中启用测试的详细信息，请参见[测试](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#测试)。

## 语法

```js-nolint
let result = await browser.declarativeNetRequest.testMatchOutcome(
    request,                // 对象
    options                 // 可选的对象
);
```

### 参数

- `request`
  - : 要测试的请求的详细信息。
    - `initiator` {{optional_inline}}
      - : `string`。假设请求的发起者 URL（如果有）。
    - `method` {{optional_inline}}
      - : `string`。假设请求的标准 HTTP 方法（小写）。默认为 HTTP 请求的 `"get"`，对于非 HTTP 请求，则忽略此项。
    - `tabId` {{optional_inline}}
      - : `number`。发生假设请求的标签页的 ID。不需要对应实际标签页的 ID。默认为 `-1`，表示请求与标签页无关。
    - `type`
      - : {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}。假设请求的资源类型。
    - `url`
      - : `string`。假设请求的 URL。

- `options` {{optional_inline}}
  - : 请求选项的详细信息。
    - `includeOtherExtensions` {{optional_inline}}
      - : `boolean`。表示是否在 `matchedRules` 中包含其他扩展的匹配规则。当其他扩展的规则匹配时，生成的 `matchedRule` 将具有 `extensionId` 属性。默认为 `false`。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个具有以下属性的对象：

- `matchedRules`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}。与假设请求匹配的规则的详细信息（如果有）。

如果没有规则匹配，则 `matchedRules` 数组为空。如果请求失败，promise 将被拒绝并带有错误消息。

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
