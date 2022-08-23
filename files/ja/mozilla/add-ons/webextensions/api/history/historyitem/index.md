---
title: history.HistoryItem
slug: Mozilla/Add-ons/WebExtensions/API/history/HistoryItem
tags:
  - API
  - Add-ons
  - Extensions
  - History
  - HistoryItem
  - Non-standard
  - Reference
  - Type
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/history/HistoryItem
---
<p>{{AddonSidebar()}}</p>

<p><code>HistoryItem</code> オブジェクトはブラウザー履歴でのページ情報を提供します。</p>

<h2 id="Type" name="Type">型</h2>

<p>これは下記のプロパティを持つオブジェクトです:</p>

<dl class="reference-values">
 <dt><code>id</code></dt>
 <dd><code>string</code>。アイテムに固有のID。</dd>
 <dt><code>url</code> {{optional_inline}}</dt>
 <dd><code>string</code>。ページのURL。</dd>
 <dt><code>title</code> {{optional_inline}}</dt>
 <dd><code>string</code>。ページのタイトル。</dd>
 <dt><code>lastVisitTime</code> {{optional_inline}}</dt>
 <dd><code>number</code>。ページが最後に読み込まれた日付と時間で、epochからのミリ秒で表現される。</dd>
 <dt><code>visitCount</code> {{optional_inline}}</dt>
 <dd><code>number</code>。ユーザーがページを訪問した回数。</dd>
 <dt><code>typedCount</code> {{optional_inline}}</dt>
 <dd><code>number</code>。ユーザーがアドレスをタイプしてページに移動したきた回数。</dd>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.history.HistoryItem")}}</p>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>謝</strong><strong>辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/history#type-HistoryItem"><code>chrome.history</code></a> API に基づいています。また、このドキュメントは <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json"><code>history.json</code></a> における Chromium のコードに基づいています。</p>

<p>Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。</p>
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
