---
title: declarativeNetRequest.updateDynamicRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateDynamicRules
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

修改扩展的一组动态规则。首先删除在 `options.removeRuleIds` 中列出的规则，然后添加 `options.addRules` 中给出的规则。请注意：

- 此更新作为原子操作进行：要么所有指定的规则都添加和删除，要么返回错误。
- 这些规则会跨浏览器会话和扩展更新进行持久化。
- 不能使用此函数删除作为扩展包的一部分指定的静态规则。
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} 是扩展可以添加的动态和会话规则的最大数量。

## 语法

```js-nolint
let updatedRules = browser.declarativeNetRequest.updateDynamicRules(
    options                // 对象
);
```

### 参数

- `options`

  - : 包含要从动态规则中添加或删除的规则详细信息的对象。
    - `addRules` {{optional_inline}}
      - : 一个 {{WebExtAPIRef("declarativeNetRequest.Rule")}} 数组。要添加的规则的详细信息。
    - `removeRuleIds` {{optional_inline}}
      - : 一个 `number` 数组。要移除的规则的 ID。任何无效的 ID 都将被忽略。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。如果请求成功，其会被兑现且不带参数。如果请求失败，则 promise 将被拒绝并带有错误消息。

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
