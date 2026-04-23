---
title: declarativeNetRequest.updateEnabledRulesets
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateEnabledRulesets
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

更新扩展的静态规则集。首先禁用 `options.disableRulesetIds` 中列出的规则集，然后激活 `options.enableRulesetIds` 中列出的规则集。请注意，启用的静态规则集的集合会跨会话保留，但不会跨扩展更新保留，即每次扩展更新时，[declarative_net_request.rule_resources 清单键](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request)决定了启用的静态规则集的集合。

## 语法

```js-nolint
let updatedRulesets = browser.declarativeNetRequest.updateEnabledRulesets(
    options                // 对象
);
```

### 参数

- `options`
  - : 一个详细说明扩展的静态规则集中要激活或禁用的规则集的对象。
    - `disableRulesetIds` {{optional_inline}}
      - : 一个 `string` 数组。要禁用的静态规则集的 ID。
    - enableRulesetIds {{optional_inline}}
      - : 一个 `string` 数组。要激活的静态规则集的 ID。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。如果请求成功，其会被兑现且不带参数。如果请求失败，则 promise 将被拒绝并带有错误消息。

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
