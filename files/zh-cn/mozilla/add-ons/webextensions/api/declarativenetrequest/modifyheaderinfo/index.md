---
title: declarativeNetRequest.ModifyHeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ModifyHeaderInfo
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

要修改的请求的请求标头或响应标头，在 `rule.action.requestHeaders` 数组或 `rule.action.responseHeaders` 数组中声明，用于 {{WebExtAPIRef("declarativeNetRequest.RuleAction", "rule.action")}}`.type` 为"modifyHeaders"这个规则。

每个对象描述了一个标头修改。要修改多个标头，可以在这些数组中指定多个对象，或者跨多个规则。

匹配的 `modifyHeaders` 规则将按照[匹配优先级](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#匹配优先级)中描述的顺序去应用。在每个扩展中，所有优先级低于或等于匹配的 `allow` 或 `allowAllRequests` 规则的 `modifyHeaders` 规则都会被忽略。

如果多个 `modifyHeaders` 规则指定了相同的标头，则标头的最终修改结果将根据每个规则的优先级和指定的操作确定：

- 如果一个规则为标头附加条目，则较低优先级的规则只能对标头附加条目。不允许进行 `set` 和 `remove` 操作。
- 如果一个规则设置了一个标头，那么低优先级规则除了来自相同扩展的 `append` 规则外，不能修改该标头。
- 如果一个规则已经删除了一个标头，那么低优先级规则不能修改该标头。

## 类型

此类型的值为对象，包含以下属性：

- `header`
  - : `string`。要修改的标头的名称。
- `operation`
  - : `string`。要在标头上执行的操作。可能的值为 `"append"`、`"set"` 和 `"remove"`。
- `value` {{optional_inline}}
  - : `string`。标头的新值。必须为 append 和 set 操作指定。不允许用于“remove”操作。

## 标头限制

在 Chrome 中，对以下请求标头支持 `"append"`：

- `Accept`
- `Accept-Encoding`
- `Accept-Language`
- `Access-Control-Request-Headers`
- `Cache-Control`
- `Connection`
- `Content-Language`
- `Cookie`
- `Forwarded`
- `If-Match`
- `If-None-Match`
- `Keep-Alive`
- `Range`
- `Te`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`
- `Want-Digest`
- `X-Forwarded-For`

在 Firefox 中，扩展需要具有主机权限才能对 `Host` 标头设置新值。

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
