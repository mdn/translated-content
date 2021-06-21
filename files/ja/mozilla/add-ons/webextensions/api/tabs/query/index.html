---
title: tabs.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/query
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/query
---
<div>{{AddonSidebar()}}</div>

<p>指定されたプロパティを持つ全てのタブを取得します。何も指定しない場合、全てのタブを取得します。</p>

<p>この関数は <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> を返す非同期関数です。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox brush:js notranslate">var querying = browser.tabs.query(
  queryInfo             // object
)
</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>queryInfo</code></dt>
 <dd><code>object</code>. <code>query()</code> 関数はここで指定されたプロパティにマッチするタブだけを取得します。 このプロパティについての詳細は {{WebExtAPIRef("tabs.Tab")}} を参照してください。</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>active</code>{{optional_inline}}</dt>
  <dd><code>boolean</code>. 各ウインドウの中でアクティブかどうか。</dd>
  <dt><code>audible</code>{{optional_inline}}</dt>
  <dd><code>boolean</code>. 音が鳴っているか。</dd>
  <dt><code>autoDiscardable</code>{{optional_inline}}</dt>
  <dd><code>boolean</code>. リソースが少なくなったときにブラウザーによって自動的にdiscardできるか。</dd>
  <dt><code>cookieStoreId</code> {{optional_inline}}</dt>
  <dd><code>string</code>. CookieストアのIDが <code>cookieStoreId</code> なタブのみを返すために使います。このオプションは <code>"cookies"</code> <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a>を持つ拡張でのみ使用できます。</dd>
  <dt><code>currentWindow</code>{{optional_inline}}</dt>
  <dd><code>boolean</code>. カレントウインドウの中のタブか。</dd>
  <dt><code>discarded</code>{{optional_inline}}</dt>
  <dd><code>boolean</code>. タブがdiscardされているか。 discardされたタブはコンテンツがメモリからアンロードされているが、タブの一覧には表示されたままになります。コンテンツはタブが次にアクティブになったときにリロードされます。</dd>
  <dt><code>highlighted</code>{{optional_inline}}</dt>
  <dd><code>boolean</code>. ハイライトされているか。</dd>
  <dt><code>index</code>{{optional_inline}}</dt>
  <dd><code>integer</code>. ウィンドウの中での位置。</dd>
  <dt><code>muted</code>{{optional_inline}}</dt>
  <dd><code>boolean</code>. ミュートされているか。</dd>
  <dt><code>lastFocusedWindow</code>{{optional_inline}}</dt>
  <dd><code>boolean</code>. 最後にフォーカスされたウインドウのタブか。</dd>
  <dt><code>openerTabId</code>{{optional_inline}}</dt>
  <dd><code>integer</code>. そのタブを開いたタブのID。</dd>
  <dt><code>pinned</code>{{optional_inline}}</dt>
  <dd><code>boolean</code>. ピン留めされているか。</dd>
  <dt><code>status</code>{{optional_inline}}</dt>
  <dd>{{WebExtAPIRef('tabs.TabStatus')}}. ロードが完了しているか。</dd>
  <dt><code>title</code>{{optional_inline}}</dt>
  <dd><code>string</code>. ページのタイトル。</dd>
  <dt><code>url</code>{{optional_inline}}</dt>
  <dd><code><code>string</code></code> もしくは <code><code>array</code> of <code><code>string</code></code></code>. 1つ以上の<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">マッチパターン</a>にマッチするタブか。フラグメント識別子にはマッチしません。</dd>
  <dt><code>windowId</code>{{optional_inline}}</dt>
  <dd><code>integer</code>. そのウインドウのID。カレントウインドウの場合は、 {{WebExtAPIRef('windows.WINDOW_ID_CURRENT')}} 。</dd>
  <dt><code>windowType</code>{{optional_inline}}</dt>
  <dd>{{WebExtAPIRef('tabs.WindowType')}}. そのタブの属するウインドウの種類。</dd>
 </dl>
 </dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>マッチしたタブの情報を持つ <code>{{WebExtAPIRef('tabs.Tab')}}</code> オブジェクトの <code>array</code> に解決される <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>。</p>

<p>エラーが発生した場合、その Promise はエラーメッセージとともに却下されます。</p>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.tabs.query", 10)}}</p>

<h2 id="例">例</h2>

<p>全てのタブを取得する例：</p>

<pre class="brush: js notranslate">function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({});
querying.then(logTabs, onError);</pre>

<p>カレントウインドウの全てのタブを取得する例：</p>

<pre class="brush: js notranslate">function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({currentWindow: true});
querying.then(logTabs, onError);</pre>

<p>カレントウインドウのアクティブなタブを取得する例：</p>

<pre class="brush: js notranslate">function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({currentWindow: true, active: true});
querying.then(logTabs, onError);</pre>

<p>"mozilla.org" またはそのサブドメイン下のHTTP/HTTPS URLを開いている全てのタブを取得する例：</p>

<pre class="brush: js notranslate">function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({url: "*://*.mozilla.org/*"});
querying.then(logTabs, onError);</pre>

<p>moz-extension:// URLを開いている全てのタブを取得する例：</p>

<pre class="brush: js notranslate">function logTabs(tabs) {
  console.log(tabs);
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({url: "moz-extension://*/*"});
querying.then(logTabs, onError);
</pre>

<p>この拡張機能のURLを開いている全てのタブを取得する例：</p>

<pre class="brush: js notranslate">function logTabs(tabs) {
  console.log(tabs);
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({url: browser.extension.getURL("*")});
querying.then(logTabs, onError);
</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>この API は Chromium の <a class="external external-icon" href="https://developer.chrome.com/extensions/tabs#method-duplicate"><code>chrome.tabs</code></a> APIに基づいています。 This documentation is derived from <a class="external external-icon" href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json"><code>tabs.json</code></a> in the Chromium code.</p>

<p>Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。</p>
</div>

<div class="hidden">
<pre class="notranslate">// Copyright 2015 The Chromium Authors. All rights reserved.
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
