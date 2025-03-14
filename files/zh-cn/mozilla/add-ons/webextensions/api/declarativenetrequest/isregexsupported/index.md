---
title: declarativeNetRequest.isRegexSupported
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/isRegexSupported
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

检查是否支持将某个正则表达式作为 {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}`.regexFilter` 规则的条件。

## 语法

```js-nolint
let count = browser.declarativeNetRequest.isRegexSupported(
    regexOptions                // 对象
);
```

### 参数

- `regexOptions`

  - : 一个包含要检查的正则表达式的对象。
    - `isCaseSensitive` {{optional_inline}}
      - : `boolean`。正则表达式是否区分大小写。默认值为 `true`。
    - `regex`
      - : `string`。要检查的正则表达式。
    - `requireCapturing` {{optional_inline}}
      - : `boolean`。是否需要捕获。只有在指定了 regexSubstitution 操作的重定向规则中需要捕获。默认值为 `false`。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个对象，具有以下属性：

- `isSupported`
  - : `boolean`。正则表达式是否支持。
- `reason` {{optional_inline}}
  - : `string`。指定正则表达式不支持的原因。可能的值为 `"syntaxError"` 和 `"memoryLimitExceeded"`。仅在 `isSupported` 为 false 时提供。

如果请求失败，promise 将被拒绝并带有错误消息。

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
