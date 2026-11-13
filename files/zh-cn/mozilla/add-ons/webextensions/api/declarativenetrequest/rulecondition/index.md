---
title: declarativeNetRequest.RuleCondition
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{WebExtAPIRef("declarativeNetRequest.Rule")}} 的 `condition` 属性，用于决定规则是否匹配请求的条件细节。

## 类型

该类型的值是对象，包含以下属性：

- `domainType` {{optional_inline}}
  - : `string`。指定网络请求是其源域的第一方还是第三方请求。如果省略，则接受所有请求。可能的值为 `"firstParty"` 和 `"thirdParty"`。
- `domains` {{deprecated_inline}} {{optional_inline}}
  - : `string` 数组。请使用 [`initiatorDomains`](#initiatordomains) 代替。规则仅匹配源自此域名列表的网络请求。
- `excludedDomains` {{deprecated_inline}} {{optional_inline}}
  - : `string` 数组。请使用 [`excludedInitiatorDomains`](#excludedinitiatordomains) 代替。规则不匹配源自此域名列表的网络请求。
- `initiatorDomains` {{optional_inline}}
  - : `string` 数组。规则仅匹配源自此域名列表的网络请求。如果省略该列表，则规则适用于所有域名的请求。不允许使用空列表。应使用[规范域名](#规范域名)。这与请求发起者而不是请求 URL 匹配。
- `excludedInitiatorDomains` {{optional_inline}}
  - : `string` 数组。规则不匹配源自此域名列表的网络请求。如果列表为空或省略，则不排除任何域名。这优先于 `initiatorDomains`。应使用[规范域名](#规范域名)。这与请求发起者而不是请求 URL 匹配。
- `isUrlFilterCaseSensitive` {{optional_inline}}
  - : `boolean`。[`urlFilter`](#urlfilter) 或 [`regexFilter`](#regexfilter)（指定的任何一个）是否区分大小写。尽管在 [WECG issue 269](https://github.com/w3c/webextensions/issues/269) 中，默认值为 `false` 已在各浏览器中达成共识，但在（较旧的）Chrome 和 Safari 版本中，该值曾为 `true`。详细信息请参见[浏览器兼容性](#browser_compatibility)。
- `regexFilter` {{optional_inline}}
  - : `string`。用于匹配网络请求 URL 的正则表达式。注意：
    - 支持的格式不稳定且在各浏览器中有所不同，详情请参见 [WECG issue 344 中的“DNR API（regexFilter）中的正则表达式”](https://github.com/w3c/webextensions/issues/344)。
    - 只能指定 [`urlFilter`](#urlfilter) 或 `regexFilter` 之一。
    - `regexFilter` 必须仅由 {{Glossary("ASCII")}} 字符组成。这与主机编码为[国际化域名编码](https://zh.wikipedia.org/wiki/国际化域名编码)格式的 URL 匹配（在国际化域名的情况下），任何其他非 ASCII 字符都使用 utf-8 进行 URL 编码。
- `requestDomains` {{optional_inline}}
  - : `string` 数组。规则仅在域名与此列表中的某个匹配时匹配网络请求。如果省略该列表，则规则适用于所有域名的请求。不允许使用空列表。应使用[规范域名](#规范域名)。
- `excludedRequestDomains` {{optional_inline}}
  - : `string` 数组。规则不匹配域名与此列表中的某个匹配的网络请求。如果列表为空或省略，则不排除任何域名。这优先于 `requestDomains`。应使用[规范域名](#规范域名)。
- `requestMethods` {{optional_inline}}
  - : `string` 数组。规则匹配的 HTTP 请求方法列表。不允许使用空列表。指定 `requestMethods` 规则条件还会排除非 HTTP(s) 请求，而指定 [`excludedRequestMethods`](#excludedrequestmethods) 则不会。
- `excludedRequestMethods` {{optional_inline}}
  - : `string` 数组。规则不匹配此列表中的请求方法。只能指定 [`requestMethods`](#requestmethods) 和 `excludedRequestMethods` 之一。如果两者都未指定，则匹配所有请求方法。
- `resourceTypes` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ResourceType")}} 数组。规则匹配的资源类型列表。不允许使用空列表。必须为 `"allowAllRequests"` 规则指定，并且可能仅包含 `"sub_frame"` 和 `"main_frame"` 资源类型。
- `excludedResourceTypes` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ResourceType")}} 数组。规则不匹配的资源类型列表。只能指定 [`resourceTypes`](#resourcetypes) 和 `excludedResourceTypes` 之一。如果两者都未指定，则阻止除 `"main_frame"` 之外的所有资源类型。
- `tabIds` {{optional_inline}}
  - : `number` 数组。规则应匹配的 {{WebExtAPIRef("tabs.Tab")}}.`id` 列表。{{WebExtAPIRef("tabs.TAB_ID_NONE")}} 的 ID 匹配不来源于选项卡的请求。不允许使用空列表。仅支持会话范围的规则。
- `excludedTabIds` {{optional_inline}}
  - : `number` 数组。规则不匹配的 {{WebExtAPIRef("tabs.Tab")}}.`id` 列表。{{WebExtAPIRef("tabs.TAB_ID_NONE")}} 的 ID 排除不来源于选项卡的请求。仅支持会话范围的规则。
- `urlFilter` {{optional_inline}}
  - : `string`。与网络请求 URL 匹配的模式。支持的结构：
    - `*` ：通配符：匹配任意数量的字符。
    - `|` ：左或右锚：如果在模式的任一端使用，则分别指定 URL 的开头或结尾。
    - `||` ：域名锚：如果在模式的开头使用，则指定 URL 的（子）域的开头。
    - `^` ：分隔符字符：这匹配字母、数字或 `_`、`-`、`.`、`%` 之外的任何内容。最后的 `^` 还可以匹配 URL 的结尾，而不是分隔符字符。

    `urlFilter` 由以下部分组成：（可选的左/域名锚）+ 模式 +（可选的右锚）。如果省略，则匹配所有 URL。不允许使用空字符串。以 `||*` 开头的模式不允许使用。请使用 `*` 代替。注意：
    - 只能指定 `urlFilter` 或 [`regexFilter`](#regexfilter) 其中之一。
    - `urlFilter` 必须仅由 ASCII 字符组成。这与主机编码为[国际化域名编码](https://zh.wikipedia.org/wiki/国际化域名编码)格式的 URL 匹配（在国际化域名的情况下），任何其他非 ASCII 字符都使用 utf-8 进行 URL 编码。例如，当请求 URL 为 `http://abc.рф?q=ф` 时，`urlFilter` 与 URL 为 `http://abc.xn--p1ai/?q=%D1%84` 匹配。

### 规范域名

在 `initiatorDomains`、`excludedInitiatorDomains`、`requestDomains` 或 `excludedRequestDomains` 中指定的域应遵循以下规则：

- 允许子域名，如“a.example.com”。
- 条目必须仅由*小写* ASCII 字符组成。
- 对于国际化域名，使用[国际化域名编码](https://zh.wikipedia.org/wiki/国际化域名编码)进行编码。
- IPv4 地址必须表示为由点分隔的 4 个数字。
- IPv6 地址应表示为规范形式，括在方括号内。

要以编程方式生成 URL 的规范域，请使用 [URL API](/zh-CN/docs/Web/API/URL) 并读取其 `hostname` 属性，即 `new URL(url).hostname`。

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
