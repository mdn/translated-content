---
title: declarativeNetRequest.Redirect
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Redirect
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

描述重定向应该如何执行的详细信息，作为 {{WebExtAPIRef("declarativeNetRequest.RuleAction", "RuleAction")}} 的 `redirect` 属性。仅适用于重定向规则。

> [!NOTE]
> 重定向操作不会重定向请求，请求会像往常一样继续进行，当：
>
> - 操作不更改请求。
> - 重定向 URL 无效（例如，{{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} 的值不是有效的 URL）。

## 类型

此类型的值为对象，包含以下属性：

- `extensionPath` {{optional_inline}}
  - : `string`。相对于扩展目录的路径。应以“/”开头。仅当资源在 [`web_accessible_resources`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) 中列出时，请求的发起者才能跟随重定向。
- `regexSubstitution` {{optional_inline}}
  - : `string`。规则指定了 `regexFilter` 的替换模式。`regexFilter` 在 URL 中的第一个匹配项将用此模式替换。在 `regexSubstitution` 中，使用反斜杠转义的数字（`\1` 到 `\9`）来插入相应的捕获组。`\0` 指整个匹配的文本。
- `transform` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}。要执行的 URL 转换。
- `url` {{optional_inline}}
  - : `string`。重定向的 URL。不允许重定向到 JavaScript URL。

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
