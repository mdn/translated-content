---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
---

{{AddonSidebar}}

拡張機能を国際化する関数です。これらの API は、拡張機能に同梱したロケールファイルからローカライズ文字列を取得したり、ブラウザーの現在の言語や、その [Accept-Language ヘッダー](/ja/docs/Web/HTTP/Content_negotiation#the_accept-language_header) を調べるために使用します。

拡張機能で i18n を使用するための詳細は、以下の記事を参照してください:

- [国際化拡張](/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization): WebExtension の i18n システムを使うためのガイド。
- [ロケール固有のメッセージ参照](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference): 拡張機能が `messages.json` と呼ばれるファイルで供給するロケール固有の文字列。このページは、`messages.json` の書式について書かれています。

## 型

- {{WebExtAPIRef("i18n.LanguageCode")}}
  - : `"en-US"` や "`fr`" などの [言語タグ](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.10)。

## 関数

- {{WebExtAPIRef("i18n.getAcceptLanguages()")}}
  - : ブラウザーの [accept-languages](/ja/docs/Web/HTTP/Content_negotiation#the_accept-language_header) を取得します。これは、ブラウザーに使用されているロケールとは異なります。ロケールを取得するには、{{WebExtAPIRef('i18n.getUILanguage')}} を使用してください。
- {{WebExtAPIRef("i18n.getMessage()")}}
  - : 指定したメッセージのローカライズ文字列を取得します。
- {{WebExtAPIRef("i18n.getUILanguage()")}}
  - : ブラウザーの UI 言語を取得します。これは、優先されるユーザー言語を返す {{WebExtAPIRef('i18n.getAcceptLanguages')}} とは異なります。
- {{WebExtAPIRef("i18n.detectLanguage()")}}
  - : 提供されたテキストの言語を [Compact Language Detector](https://github.com/CLD2Owners/cld2) を利用して検出します。

<!---->

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> この API は、Chromium の [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n) API を基にしています。このドキュメンテーションは、Chromium コード内の [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/i18n.json) に由来しています。Microsoft Edge 互換性データは、Microsoft Corporation より供給され、Creative Commons Attribution 3.0 United States License の下で含まれています。

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
