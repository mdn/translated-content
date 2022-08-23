---
title: history
slug: Mozilla/Add-ons/WebExtensions/API/history
tags:
  - API
  - Add-ons
  - Extensions
  - History
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/history
---
<div>　{{AddonSidebar}}</div>

<p>ブラウザー履歴とやりとりする <code>history</code> API を使用します。</p>

<div class="note">
<p>downloads は <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/HistoryItem" title="A HistoryItem object provides information about a page in the browser history."><code>HistoryItem</code></a> オブジェクトとして扱われるのに注意します。このため、ダウンロードのために <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/onVisited" title="Fired each time the user visits a page. A history.HistoryItem object is passed to the listener. This event fires before the page has loaded."><code>history.onVisited</code></a> も発火します。</p>
</div>

<p>ブラウザー履歴はユーザーが訪れたページの時間順の記録です。history API では次の事ができます:</p>

<ul>
 <li><a href="/ja/Add-ons/WebExtensions/API/history/search">ブラウザー履歴に出てくるページの検索</a></li>
 <li><a href="/ja/Add-ons/WebExtensions/API/history/deleteUrl">ブラウザー履歴から個々のページを削除</a></li>
 <li><a href="/ja/Add-ons/WebExtensions/API/history/addUrl">ブラウザー履歴にページを追加</a></li>
 <li><a href="/ja/Add-ons/WebExtensions/API/history/deleteAll">ブラウザー履歴から全ページを削除</a></li>
</ul>

<p>しかしながら、ユーザーは１つのページを何度も訪問することがあるので、このAPI は「訪問数」の概念もあります。したがってこの API を次のようにも使えます:</p>

<ul>
 <li><a href="/ja/Add-ons/WebExtensions/API/history/getVisits">ユーザーが特定のページを訪問した完全なセットを取得する</a></li>
 <li><a href="/ja/Add-ons/WebExtensions/API/history/deleteRange">所定の期間に訪問したあらゆるページの訪問を削除する</a></li>
</ul>

<p>このAPIを使うには <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a> ファイルで指定する "history" <a href="/JA/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">パーミッション</a>が必要です。</p>

<h2 id="Types" name="Types">型</h2>

<dl>
 <dt>{{WebExtAPIRef("history.TransitionType")}}</dt>
 <dd>ブラウザーがあるページにどのように移動したのかを記述</dd>
 <dt>{{WebExtAPIRef("history.HistoryItem")}}</dt>
 <dd>
 <p>ブラウザー履歴のあるページに関する情報を提供</p>
 </dd>
 <dt>{{WebExtAPIRef("history.VisitItem")}}</dt>
 <dd>
 <p>ページへの単一の訪問を記述</p>
 </dd>
</dl>

<h2 id="Functions" name="Functions">関数</h2>

<dl>
 <dt>{{WebExtAPIRef("history.search()")}}</dt>
 <dd>ブラウザー履歴を検索して、所与の条件にマッチする <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/History/HistoryItem" title="A HistoryItem object provides information about one result from a history query."><code>history.HistoryItem</code></a> オブジェクトを得る</dd>
 <dt>{{WebExtAPIRef("history.getVisits()")}}</dt>
 <dd>所定のページへの訪問についての情報を取得する</dd>
 <dt>{{WebExtAPIRef("history.addUrl()")}}</dt>
 <dd>ブラウザー履歴に所定のページへの訪問のレコードを追加する</dd>
 <dt>{{WebExtAPIRef("history.deleteUrl()")}}</dt>
 <dd>ブラウザー履歴から 所定のURLへのすべての訪問を削除する</dd>
 <dt>{{WebExtAPIRef("history.deleteRange()")}}</dt>
 <dd>所定の時間範囲でユーザーが訪問したすべてのページを削除する</dd>
 <dt>{{WebExtAPIRef("history.deleteAll()")}}</dt>
 <dd>ブラウザー履歴からすべての訪問を削除する</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<dl>
 <dt>{{WebExtAPIRef("history.onTitleChanged")}}</dt>
 <dd>
 <div>ユーザーがあるページに訪問してタイトルが記録された時に発火します</div>
 </dd>
 <dt>{{WebExtAPIRef("history.onVisited")}}</dt>
 <dd>ユーザーがあるページに {{WebExtAPIRef("history.HistoryItem")}} を提供しつつそのページを訪問した時に発火します</dd>
 <dt>{{WebExtAPIRef("history.onVisitRemoved")}}</dt>
 <dd>
 <p>ある URL がブラウザー履歴から完全に削除された時に発火します</p>
 </dd>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.history")}}</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/history"><code>chrome.history</code></a> API に基づいています。また、このドキュメントは <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json"><code>history.json</code></a> における Chromium のコードに基づいています。</p>

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
