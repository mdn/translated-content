---
title: declarativeNetRequest.Rule
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Rule
l10n:
  sourceCommit: 3a4950f53f1de09c0ed01438f0620ae972d4161f
---

描述匹配请求所采取的操作的对象。这些可以在由 [manifest.json 的键 `declarative_net_request`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) 链接的静态规则资源中指定，或通过 {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} 或 {{WebExtAPIRef("declarativeNetRequest.updateSessionRules")}} 方法更动态地指定。

有关规则的更多信息，请参见 API 概述页面中的[规则](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#规则)。

## 类型

此类型的值为对象。它们包含以下属性：

- `action`
  - : {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}。如果此规则匹配，则要执行的操作。
- `condition`
  - : {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}。触发此规则的条件。
- `id`
  - : `number`。在规则集中唯一标识规则的 ID。此项为必填项，应大于等于 1。
- `priority` {{optional_inline}}
  - : `number`。规则优先级。默认为 1。当指定时，应大于等于 1。有关优先级如何影响应用哪些规则的详细信息，请参阅[匹配优先级](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#匹配优先级)。

{{WebExtExamples("h2")}}

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
