---
title: tabs.create()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/create
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/create
---
<div>{{AddonSidebar()}}</div>

<p>新しいタブを作ります。</p>

<p>これは<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>を返す非同期関数です.</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox brush:js">var creating = browser.tabs.create(
  createProperties   // object
)
</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>createProperties</code></dt>
 <dd>新しいタブについてのプロパティを与える<code>オブジェクト</code>。これらのプロパティについて詳しくは{{WebExtAPIRef("tabs.Tab")}}を参照してください。</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>active</code>{{optional_inline}}</dt>
  <dd>タブをアクティブにするかどうかを<code>真理値</code>で指定します。ウィンドウがフォーカスされているかには影響されません({{WebExtAPIRef('windows.update')}}も参照)。デフォルト値は<code>true</code>.</dd>
  <dt><code>cookieStoreId</code> {{optional_inline}}</dt>
  <dd><code>文字列</code> 。タブのcookie store IDが<code>cookieStoreId</code>のタブを作るときに使用します。このオプションは拡張機能が<code>"cookies"</code> <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a>を持つときのみ使用できます。</dd>
  <dt><code>index</code>{{optional_inline}}</dt>
  <dd><code>整数値</code>。ウィンドウ中のタブの位置を指定します。数値はゼロからウィンドウ内のタブの数までです。</dd>
  <dt><code>openerTabId</code>{{optional_inline}}</dt>
  <dd><code>整数値</code>。開くタブのIDを指定します。指定した場合、開く側のタブは新しいタブと同じウィンドウにある必要があります。</dd>
  <dt><code>openInReaderMode</code>{{optional_inline}}</dt>
  <dd><code>真理値</code>。もし<code>true</code>であれば<a href="/ja/Add-ons/WebExtensions/API/tabs/toggleReaderMode">リーダーモード</a>で開かれます。 デフォルトは<code>false</code>。</dd>
  <dt><code>pinned</code>{{optional_inline}}</dt>
  <dd><code>真理値</code>。タブをピン留めするかを指定します。デフォルトは<code>false</code>。</dd>
  <dt><code>selected</code>{{optional_inline}}</dt>
  <dd><code>真理値</code>。ウィンドウ内で選択されるかどうかを指定します。デフォルトは<code>true</code>。
  <div class="warning">このプロパティは非推奨です。Firefoxではサポートされません。代わりに<code>active</code>を使用してください。</div>
  </dd>
  <dt><code>url</code>{{optional_inline}}</dt>
  <dd><code>文字列</code>。はじめに開くURLを指定します。デフォルトは新しいタブ。</dd>
  <dd>スキームを含む完全なURLを指定します。(例えば 'www.google.com' → 'http://www.google.com').</dd>
  <dd>セキュリティの観点からFirefoxでは特権URLは使用できません。</dd>
  <dd>
  <ul>
   <li>chrome: URL</li>
   <li>javascript: URL</li>
   <li>data: URL</li>
   <li>file: URL(ファイルシステム上のファイルなど。拡張機能内にパッケージ化されたファイルは指定できます。下部を参照してください)</li>
   <li>特権 about: URL (例、 <code>about:config</code>, <code>about:addons</code>, <code>about:debugging</code>)<span class="hidden"> </span>。ただし非特権 URL (<code>about:blank</code>) は使用できます。</li>
   <li>新しいタブ (<code>about:newtab</code>) はURLを指定しなければ開かれます。</li>
  </ul>

  <p>拡張機能内のファイルをロードするためにはmanifest.jsonファイルからの絶対パスで指定します。（例: '/path/to/my-page.html'）。もし'/'を省略すると相対パスとして解釈されます。またブラウザによっては、また異なった絶対パスとして解釈されます。</p>
  </dd>
  <dt><code>windowId</code>{{optional_inline}}</dt>
  <dd><code>整数値</code>。新しくタブを作るウィンドウを指定します。デフォルトは現在開いているウィンドウ。</dd>
 </dl>
 </dd>
</dl>

<h3 id="返り値">返り値</h3>

<p>新しく作ったタブに関する{{WebExtAPIRef('tabs.Tab')}}オブジェクトを引数に持つ<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>が返されます。URLが特権URLであるなどして、タブが作られなかった場合はpromiseはエラーメッセージとともにrejectされます。</p>

<h2 id="ブラウザー互換状況">ブラウザー互換状況</h2>

<p>{{Compat("webextensions.api.tabs.create", 10)}}</p>

<h2 id="例">例</h2>

<p>"https://example.org" を新しいタブで開きます</p>

<pre class="brush: js">function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(function() {
  var creating = browser.tabs.create({
    url:"https://example.org"
  });
  creating.then(onCreated, onError);
});</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>このAPIはChromiumの<a href="https://developer.chrome.com/extensions/tabs#method-create"><code>chrome.tabs</code></a> APIに基づいています。 このドキュメントは <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json"><code>tabs.json</code></a> における Chromium のコードに基づいています。</p>

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
