---
title: declarativeNetRequest.RuleAction
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleAction
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

{{WebExtAPIRef("declarativeNetRequest.Rule")}} 的 `action` 属性表明了在匹配到规则时采取的相应动作的细节。

## 类型

该类型的值是对象。它们包含以下属性：

- `redirect` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.Redirect")}}。描述如何执行重定向。仅对重定向规则有效。
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}。要修改的请求标头。仅当 `type` 为 `"modifyHeaders"` 时有效。
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}。要修改的响应标头。仅当 `type` 为 `"modifyHeaders"` 时有效。
- `type`
  - : `string`。要执行的操作类型。可能的值有 `"block"`、`"redirect"`、`"allow"`、`"upgradeScheme"`、`"modifyHeaders"` 和 `"allowAllRequests"`。使用 `"redirect"` 和 `"modifyHeaders"` 操作需要请求和请求发起者的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。 `"block"` 和 `"upgradeScheme"` 操作也需要主机权限，除非指定了“declarativeNetRequest”权限。没有这些权限，匹配的规则将被忽略。有关规则操作效果的更多详细信息，请参见 [DeclarativeNetRequest 的权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#权限)。有关规则操作效果的更多详细信息，请参见[匹配优先级](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#匹配优先级)。

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
