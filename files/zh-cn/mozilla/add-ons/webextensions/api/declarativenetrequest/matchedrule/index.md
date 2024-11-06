---
title: declarativeNetRequest.MatchedRule
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MatchedRule
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

描述匹配规则的对象。此类型可能由 {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} 或 {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome")}} 方法返回，也可以通过 {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}} 事件观察到。

## 类型

此类型的值为对象，包含以下属性：

- `extensionId`
  - : `string`。如果此规则属于其他扩展，则为该扩展的 ID。仅当与 {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome")}} 一起使用，且将 `includeOtherExtensions` 选项设置为 `true` 时，才可用此属性。
- `ruleId`
  - : `number`。匹配规则的 ID。
- `rulesetId`
  - : `string`。此规则所属的[规则集](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#rulesets)的 ID。返回的值为：
    - 对于来自静态规则集的规则，是在[清单（manifest）键 `declarative_net_request.rule_resources`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) 中规则集的“id”键所指定的值。
    - 对于来自动态规则集的规则，是在 {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}} 中定义的值，即 `"_dynamic"`。
    - 对于来自会话规则集的规则，是在 {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}} 中定义的值，即 `"_session"`。

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
