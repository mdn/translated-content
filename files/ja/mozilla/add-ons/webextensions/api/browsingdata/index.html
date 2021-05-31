---
title: browsingData
slug: Mozilla/Add-ons/WebExtensions/API/browsingData
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - browsingData
translation_of: Mozilla/Add-ons/WebExtensions/API/browsingData
---
<div>{{AddonSidebar}}</div>

<div>拡張機能がユーザーの閲覧中に蓄積したデータをクリアできるようにします。</div>

<p><code>browsingData</code> API では、閲覧データは下記の型に分けられます。</p>

<ul>
	<li>browser cache (ブラウザーキャッシュ)</li>
	<li>cookies</li>
	<li>downloads (ダウンロードデータ)</li>
	<li>history (履歴)</li>
	<li>local storage (ローカルストレージ)</li>
	<li>plugin data (プラグインのデータ)</li>
	<li>saved form data (保存したフォームデータ)</li>
	<li>saved passwords (保存したパスワード)</li>
</ul>

<p>これらの型の組み合わせを削除するのに {{WebExtAPIRef("browsingData.remove()")}} 関数を使用できます。それぞれのデータ型を削除する専用関数もあり、例えば {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}, {{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} などです。</p>

<p>すべての <code>browsingData.remove[X]()</code> 関数は {{WebExtAPIRef("browsingData.RemovalOptions")}} オブジェクトを取って、これをデータ削除のその他2つの側面を管理するのに使うことができます:</p>

<ul>
	<li>データ削除を過去どれだけ遡れるのか</li>
	<li>通常のウェブページか、ホストされたウェブアプリも含めてデータ削除するのかのいずれか。このオプションは Firefox ではまだサポートされていないことに注意してください。</li>
</ul>

<p>最後に、この API の {{WebExtAPIRef("browsingData.settings()")}} 関数で、ブラウザー組み込みの「履歴消去」機能の現在の設定値を取得できます。</p>

<p>この API を使うには、"browsingData" の <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions">API パーミッション</a>が必要です。</p>

<h2 id="Types">型</h2>

<dl>
	<dt>{{WebExtAPIRef("browsingData.DataTypeSet")}}</dt>
	<dd>削除データの型を指定するオブジェクト。例えば、history, downloads, passwords, など</dd>
	<dt>{{WebExtAPIRef("browsingData.RemovalOptions")}}</dt>
	<dd>データ削除するのにどれくらい以前に遡るのか、通常のウェブ閲覧/ホスト型アプリ/アドオンのどのデータを削除するのかを指定するオブジェクト。</dd>
</dl>

<h2 id="Methods">メソッド</h2>

<dl>
	<dt>{{WebExtAPIRef("browsingData.remove()")}}</dt>
	<dd>指定された型の閲覧データを削除する</dd>
	<dt>{{WebExtAPIRef("browsingData.removeCache()")}}</dt>
	<dd>ブラウザーキャッシュを消去する</dd>
	<dt>{{WebExtAPIRef("browsingData.removeCookies()")}}</dt>
	<dd>cookies を削除する</dd>
	<dt>{{WebExtAPIRef("browsingData.removeDownloads()")}}</dt>
	<dd>ダウンロード済みのファイルを削除する</dd>
	<dt>{{WebExtAPIRef("browsingData.removeFormData()")}}</dt>
	<dd>保存されたフォームデータを消去する</dd>
	<dt>{{WebExtAPIRef("browsingData.removeHistory()")}}</dt>
	<dd>ブラウザー履歴を消去する</dd>
	<dt>{{WebExtAPIRef("browsingData.removeLocalStorage()")}}</dt>
	<dd>ウェブサイトが作成した <a href="/ja/docs/Web/API/Window/localStorage">local storage</a> を消去する</dd>
	<dt>{{WebExtAPIRef("browsingData.removePasswords()")}}</dt>
	<dd>パスワードを消去する</dd>
	<dt>{{WebExtAPIRef("browsingData.removePluginData()")}}</dt>
	<dd>プラグインに関連するデータを消去する</dd>
	<dt>{{WebExtAPIRef("browsingData.settings()")}}</dt>
	<dd>ブラウザーの「履歴消去」機能の現在の設定値を得る</dd>
</dl>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("webextensions.api.browsingData", 2)}}</p>

<div class="hidden note">
<p>"Chrome の非互換性" 部分は <a href="/ja/docs/Template:WebExtChromeCompat">WebExtChromeCompat</a> マクロを使って <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities"> https://developer.mozilla.org/ja/Add-ons/WebExtensions/Chrome_incompatibilities</a> からインクルードされています。</p>

<p>このコンテンツを更新するには、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities">https://developer.mozilla.org/ja/Add-ons/WebExtensions/Chrome_incompatibilities</a> を編集して、ページを shift+再読みして変更を確認します。</p>
</div>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/browsingData"><code>chrome.browsingData</code></a> API に基づいています。</p>

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
