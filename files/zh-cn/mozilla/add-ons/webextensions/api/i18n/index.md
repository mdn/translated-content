---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
---

国际化扩展的函数。你可以使用这些 api 从与扩展打包在一起的本地化文件中获取本地化字符串，查找浏览器的当前语言，并查找其 [Accept-Language header](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header)头的值。

有关对扩展使用 i18n 的详细信息，请参阅：

- [Internationalization](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization)国际化：使用 WebExtension i18n 系统的指南
- [Locale-Specific Message reference](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference): 扩展在 `messages.json`文件中提供特定于语言环境的字符串。此网页介绍`messages.json`

## 类型

- {{WebExtAPIRef("i18n.LanguageCode")}}
  - : 一个[语言标记](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.10) 例如 `"en-US"` 或者 "`fr`".

## 方法

- {{WebExtAPIRef("i18n.getAcceptLanguages()")}}
  - : 得到浏览器 [支持的语言](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header) 。这与浏览器使用的区域设置不同。要获得区域设置，请使用{{WebExtAPIRef('i18n.getUILanguage')}}.
- {{WebExtAPIRef("i18n.getMessage()")}}
  - : 获取指定消息的本地化字符串。
- {{WebExtAPIRef("i18n.getUILanguage()")}}
  - : 获取浏览器的用户界面语言。这与返回首选的用户语言 {{WebExtAPIRef('i18n.getAcceptLanguages')}} 不同。
- {{WebExtAPIRef("i18n.detectLanguage()")}}
  - : 使用 [Compact Language Detector](https://github.com/CLD2Owners/cld2)属性检测所提供文本的语言。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.i18n`](https://developer.chrome.google.cn/docs/extensions/reference/api/i18n) API。该文档衍生自 Chromium 代码中的 [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/i18n.json)。

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
