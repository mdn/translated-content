---
title: declarativeNetRequest.getDynamicRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getDynamicRules
l10n:
  sourceCommit: c26709292444632dfbc4862f4b0b5f2adc5fff56
---

{{AddonSidebar}}

返回扩展的动态规则集。

## 语法

```js-nolint
let gettingDynamicRules = browser.declarativeNetRequest.getDynamicRules();
```

### 参数

- `filter` {{optional_inline}}

  - : 一个用于过滤返回规则列表的对象。
    - `ruleIds` {{optional_inline}}
      - : 一个包含 `integer` 的数组。要返回的规则的 ID。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个 {{WebExtAPIRef("declarativeNetRequest.Rule")}} 对象的数组。每个对象表示一个属于扩展的规则。如果没有活动的规则，则数组为空。如果请求失败，promise 将被拒绝并带有错误消息。

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
