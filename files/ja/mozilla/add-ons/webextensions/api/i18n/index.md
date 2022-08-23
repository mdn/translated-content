---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
  - i18n
translation_of: Mozilla/Add-ons/WebExtensions/API/i18n
---
<div>{{AddonSidebar}}</div>

<p>拡張機能を国際化する関数です。これらの API は、拡張機能に同梱したロケールファイルからローカライズ文字列を取得したり、ブラウザーの現在の言語や、その <a href="/ja/docs/Web/HTTP/Content_negotiation#The_Accept-Language_header">Accept-Language ヘッダー</a> を調べるために使用します。</p>

<p id="See_also">拡張機能で i18n を使用するための詳細は、以下の記事を参照してください:</p>

<ul>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization">Internationalization</a>: WebExtension の i18n システムを使うためのガイド。</li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference">ロケール固有のメッセージ参照</a>: 拡張機能が <code>messages.json</code> と呼ばれるファイルで供給するロケール固有の文字列。このページは、<code>messages.json</code> の書式について書かれています。</li>
</ul>

<h2 id="Types" name="Types">型</h2>

<dl>
 <dt>{{WebExtAPIRef("i18n.LanguageCode")}}</dt>
 <dd><code>"en-US"</code> や "<code>fr</code>" などの <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.10">言語タグ</a>。</dd>
</dl>

<h2 id="Functions" name="Functions">関数</h2>

<dl>
 <dt>{{WebExtAPIRef("i18n.getAcceptLanguages()")}}</dt>
 <dd>ブラウザーの <a href="/ja/docs/Web/HTTP/Content_negotiation#The_Accept-Language_header">accept-languages</a> を取得します。これは、ブラウザーに使用されているロケールとは異なります。ロケールを取得するには、{{WebExtAPIRef('i18n.getUILanguage')}} を使用してください。</dd>
 <dt>{{WebExtAPIRef("i18n.getMessage()")}}</dt>
 <dd>指定したメッセージのローカライズ文字列を取得します。</dd>
 <dt>{{WebExtAPIRef("i18n.getUILanguage()")}}</dt>
 <dd>ブラウザーの UI 言語を取得します。これは、優先されるユーザー言語を返す {{WebExtAPIRef('i18n.getAcceptLanguages')}} とは異なります。</dd>
 <dt>{{WebExtAPIRef("i18n.detectLanguage()")}}</dt>
 <dd>提供されたテキストの言語を <a href="https://github.com/CLD2Owners/cld2">Compact Language Detector</a> を利用して検出します。</dd>
</dl>

<dl>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<p>{{Compat("webextensions.api.i18n")}}</p>

<p>{{WebExtExamples("h2")}}</p>

<dl>
</dl>

<div class="note"><strong>謝辞</strong>

<p>この API は、Chromium の <a href="https://developer.chrome.com/extensions/i18n"><code>chrome.i18n</code></a> API を基にしています。このドキュメンテーションは、Chromium コード内の <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/i18n.json"><code>i18n.json</code></a> に由来しています。</p>

<p>Microsoft Edge 互換性データは、Microsoft Corporation より供給され、Creative Commons Attribution 3.0 United States License の下で含まれています。</p>
</div>

<div class="hidden">
<pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre>
</div>
