---
title: menus.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/menus/onClicked
translation_of: Mozilla/Add-ons/WebExtensions/API/menus/onClicked
---
<div>{{AddonSidebar()}}</div>

<p>メニューアイテムがクリックされたときに発火します。</p>

<p>他のブラウザとの互換性のためにFirefoxはこのイベントを名前空間<code>contextMenus</code>と<code>menu</code>を経由して利用可能にしています。</p>

<h2 id="書式">書式</h2>

<pre class="syntaxbox brush:js">browser.menus.onClicked.addListener(listener)
browser.menus.onClicked.removeListener(listener)
browser.menus.onClicked.hasListener(listener)
</pre>

<p>イベントは3つの関数を持ちます:</p>

<dl>
 <dt><code>addListener(callback)</code></dt>
 <dd>このイベントのリスナーを追加します。</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>リスニングを停止します。引数<code>listener</code>は削除するリスナーです。</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd><code>listener</code>が登録されているかどうかを調べます。<code>true</code>が返ればリスニング中、そうでなければ<code>false</code>が返ります。</dd>
</dl>

<h2 id="addListenerの書式">addListenerの書式</h2>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>イベントが起こったときに呼ばれる関数です。以下の引数を渡されます:</p>

 <dl class="reference-values">
  <dt><code>info</code></dt>
  <dd>{{WebExtAPIRef('menus.OnClickData')}}. Information about the item clicked and the context where the click happened.</dd>
 </dl>

 <dl class="reference-values">
  <dt><code>tab</code></dt>
  <dd>{{WebExtAPIRef('tabs.Tab')}}. The details of the tab where the click took place. If the click did not take place in or on a tab, this parameter will be missing.</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("webextensions.api.menus.onClicked", 10)}}</p>

<h2 id="例">例</h2>

<p>この例はメニューアイテムのクリックをリッスンし、アイテムのIDとタブのIDをログします:</p>

<pre class="brush: js">browser.menus.create({
  id: "click-me",
  title: "Click me!",
  contexts: ["all"]
});

browser.menus.onClicked.addListener((info, tab) =&gt; {
  console.log("Item " + info.menuItemId + " clicked " +
              "in tab " + tab.id);
});</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/contextMenus#event-onClicked"><code>chrome.contextMenus</code></a> API. This documentation is derived from <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json"><code>context_menus.json</code></a> in the Chromium code.</p>
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
