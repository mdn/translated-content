---
title: events.Rule
slug: Mozilla/Add-ons/WebExtensions/API/events/Rule
l10n:
  sourceCommit: a16fecbf75f71fc11e03ef6cd0b0c34ad6f3d480
---

{{AddonSidebar}}

处理事件的声明性规则的描述。

## 类型

本类型的取值是对象。它包含以下属性：

- `id` {{optional_inline}}
  - : `string`，可选的规则 ID 用于引用这一规则。
- `tags` {{optional_inline}}
  - : `string` 的 `array`，标签可用于注释规则和对规则集执行操作。
- `conditions`
  - : `any` 的 `array`，可触发操作的条件列表。
- `actions`
  - : `any` 的 `array`，满足条件之一时触发的操作列表。
- `priority` {{optional_inline}}
  - : `integer`，可选的规则优先级，默认值 100。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.events`](https://developer.chrome.google.cn/docs/extensions/reference/api/events#type-Rule) API。本文衍生自 Chromium 代码中的 [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json)。

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
