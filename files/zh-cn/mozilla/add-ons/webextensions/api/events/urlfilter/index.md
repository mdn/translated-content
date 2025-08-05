---
title: events.UrlFilter
slug: Mozilla/Add-ons/WebExtensions/API/events/UrlFilter
l10n:
  sourceCommit: a16fecbf75f71fc11e03ef6cd0b0c34ad6f3d480
---

描述用于过滤 URL 的各种条件。如果过滤器的属性中指定的所有条件都与 URL 匹配，则过滤器是匹配的。通常，过滤器以 UrlFilter [数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)的形式提供给 API 方法。例如，[webNavigation](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation) 监听器可以添加过滤器：该过滤器是一个具有单个 `url` 属性（UrlFilter 数组）的对象，例如 `{url:[UrlFilter, UrlFilter, …]}`。如果[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)中的任何一个 UrlFilter 匹配，则它被认为是数组的匹配项。实际上，单个过滤器中指定的条件将进行逻辑与运算，而数组中的所有单个过滤器则进行逻辑或运算。

所有的条件都是区分大小写的。

## 类型

该类型的取值是对象。包含以下属性：

需要注意的是，最后两个模式不会匹配主机名的最后一个部分，因为主机名的末尾没有隐式的点。例如，`"org."` 将匹配 `https://borg.com`，但不会匹配 `https://example.org`。要匹配这些模式，请使用 `hostSuffix`。

- `hostContains` {{optional_inline}}
  - : `string`，匹配 URL 的[主机名](/zh-CN/docs/Web/API/HTMLAnchorElement/hostname)（不包括协议或端口——请参见 `schemes` 和 `ports`）包含给定字符串的情况。
    - 要测试主机名的某个部分是否以“foo”开头，请使用 `".foo"`。这将匹配 `www.foobar.com` 和 `foo.com`，因为主机名的开头添加了一个隐式的点。
    - 要测试主机名的某个部分是否以“foo”结尾，请使用 `"foo."`。
    - 要测试主机名的某个部分是否完全匹配“foo”，请使用 `".foo."`。

- `hostEquals` {{optional_inline}}
  - : `string`，匹配 URL 的主机名是否等于指定的字符串。
    - 示例：`"www.example.com"` 匹配 `http://www.example.com` 和 `https://www.example.com/`，但不匹配 `http://example.com/`。

- `hostPrefix` {{optional_inline}}
  - : `string`，匹配 URL 的主机名是否以指定的字符串开头。
- `hostSuffix` {{optional_inline}}
  - : `string`，匹配 URL 的主机名是否以指定的字符串结尾。
    - 示例：`".example.com"` 匹配 `http://www.example.com/`，但不匹配 `http://example.com/`。
    - 示例：`"example.com"` 匹配 `http://www.example.com/`，以及 `http://fakeexample.com/`。

- `pathContains` {{optional_inline}}
  - : `string`，匹配 URL 的路径段是否包含指定的字符串。
- `pathEquals` {{optional_inline}}
  - : `string`，匹配 URL 的路径是否等于指定的字符串。
- `pathPrefix` {{optional_inline}}
  - : `string`，匹配 URL 的路径段是否以指定的字符串开头。
- `pathSuffix` {{optional_inline}}
  - : `string`，匹配 URL 的路径段是否以指定的字符串结束。
- `queryContains` {{optional_inline}}
  - : `string`，匹配 URL 的查询段是否包含指定的字符串。
- `queryEquals` {{optional_inline}}
  - : `string`，匹配 URL 的查询段是否等于指定的字符串。
- `queryPrefix` {{optional_inline}}
  - : `string`，匹配 URL 的查询段是否以指定的字符串开头。
- `querySuffix` {{optional_inline}}
  - : `string`，匹配 URL 的查询段是否以指定的字符串结束。
- `urlContains` {{optional_inline}}
  - : `string`，匹配 URL（不含片段标识符）是否包含指定字符串。如果端口号与默认端口号一致，则会从 URL 中删除端口号。
- `urlEquals` {{optional_inline}}
  - : `string`，匹配 URL（不含片段标识符）是否等于指定字符串。如果端口号与默认端口号一致，则会从 URL 中删除端口号。
- `urlMatches` {{optional_inline}}
  - : `string`，检查 URL（不含片段标识符）是否与指定的[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)匹配。如果端口号与默认端口号一致，则会从 URL 中删除端口号。
    - 示例：`urlMatches: "^[^:]*:(?://)?(?:[^/]*\\.)?mozilla\\.org/.*$"` 匹配 `https://mozilla.org/`、`https://developer.mozilla.org/`，但不匹配 `https://developer.fakemozilla.org/`。

- `originAndPathMatches` {{optional_inline}}
  - : `string`，检查 URL（不含查询段和片段标识符）是否与指定的[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)匹配。如果端口号与默认端口号一致，则会从 URL 中删除端口号。
- `urlPrefix` {{optional_inline}}
  - : `string`，检查 URL（不含片段标识符）是否以指定的字符串开头。如果端口号与默认端口号一致，则会从 URL 中删除端口号。
    - 示例：`"https://developer"` 匹配 `https://developer.mozilla.org/` 和 `https://developers.facebook.com/`。

- `urlSuffix` {{optional_inline}}
  - : `string`，检查 URL（不含片段标识符）是否以指定的字符串结尾。如果端口号与默认端口号一致，则会从 URL 中删除端口号。请注意，在主机名后添加了一个隐式的正斜杠“/”，因此 `"com/"` 匹配 `https://example.com`，但 `"com"` 不匹配。
- `schemes` {{optional_inline}}
  - : `string` 数组（`array`），检查 URL 的方案是否等于数组中指定的任何方案。因为方案总是转换为小写，所以应该始终以小写形式给出，否则永远不会匹配。
    - 示例：`["https"]` 只匹配 HTTPS URL。

- `ports` {{optional_inline}}
  - : 由 `integer` 或 `integer` 数组（`array`）组成的数组（`array`）——可能包含整数和整数数组的数组。整数指代端口号，而整数数组指代端口范围。如果 URL 的端口号与任何端口号匹配或包含在任何范围中，则匹配。
    - 示例：`[80, 443, [1000, 1200]]` 匹配端口为 80、443 和端口在 1000-1200 范围内的所有请求。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.events`](https://developer.chrome.google.cn/docs/extensions/reference/api/events#type-UrlFilter) API。该文档衍生自 Chromium 代码中的 [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json)。

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
