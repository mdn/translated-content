---
title: browserAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked
translation_of: Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked
---
<div>{{AddonSidebar()}}</div>

<p>ブラウザアクションアイコンがクリックされたときに発火します。このイベントはブラウザアクションがポップアップを持っているときは発火しません。</p>

<p>右クリックを定義するには、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus" title="Add items to the browser's context menu, to be displayed in the contexts you specify. For example, you can show the item only when the user clicks on an image, or on an editable element, or when part of a page is selected."><code>contextMenus</code></a> API の"browser_action" <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus/ContextType" title="The different contexts a menu can appear in.">context type</a>を利用してください。</p>

<h2 id="書式">書式</h2>

<pre class="syntaxbox brush:js">browser.browserAction.onClicked.addListener(<code>listener</code>)
browser.browserAction.onClicked.removeListener(listener)
browser.browserAction.onClicked.hasListener(listener)
</pre>

<p>イベントは３つの関数を持っています:</p>

<dl>
 <dt><code>addListener(listener)</code></dt>
 <dd>このイベントのリスナーを追加します。</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>このイベントのリスニングを停止します。引数<code>listener</code>は削除するリスナーです。</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd><code>listener</code>がこのイベントに登録されているかどうかを調べます。<code>true</code>が返ればリスニング中です。<code>false</code>が返ればそうれはありません。</dd>
</dl>

<h2 id="addListenerの書式">addListenerの書式</h2>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>イベントが発生したときに呼び出される関数です。関数は以下の引数を渡されます:</p>

 <dl class="reference-values">
  <dt><code>tab</code></dt>
  <dd>{{WebExtAPIRef('tabs.Tab')}}. アイコンがクリックされたときにアクティブなタブです。</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("webextensions.api.browserAction.onClicked")}}</p>

<h2 id="例">例</h2>

<p>ユーザがアイコンをクリックすると、アクティブなタブではアイコンを無効にし、タブのURLをログします:</p>

<pre class="brush: js">browser.browserAction.onClicked.addListener((tab) =&gt; {
  // disable the active tab
  browser.browserAction.disable(tab.id);
  // requires the "tabs" or "activeTab" permission
  console.log(tab.url);
});
</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>謝辞</strong>

<p>このAPIはChromiumの<a href="https://developer.chrome.com/extensions/browserAction#event-onClicked"><code>chrome.browserAction</code></a> APIに基づいています。このドキュメントはChromiumコードの<a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json"><code>browser_action.json</code></a>から派生したものです。</p>

<p>Microsoft Edgeの互換性データはMicrosoft Corporationから提供されており、Creative Commons Attribution 3.0 United States Licenseのもとにここに含まれています。</p>
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
