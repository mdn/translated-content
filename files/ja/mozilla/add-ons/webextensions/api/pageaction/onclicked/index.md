---
title: pageAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked
translation_of: Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked
---
<div>{{AddonSidebar()}}</div>

<p>ページアクションのアイコンがクリックされたときに発火します。ページアクションがポップアップを持っているならこのイベントは発火しません。</p>

<p>右クリックのアクションを定義するには、{{WebExtAPIRef('contextMenus')}} APIを"page_action" {{WebExtAPIRef('contextMenus/ContextType', 'context type', '', 'nocode')}}とともに使ってください。</p>

<h2 id="書式">書式</h2>

<pre class="syntaxbox brush:js">browser.pageAction.onClicked.addListener(listener)
browser.pageAction.onClicked.removeListener(listener)
browser.pageAction.onClicked.hasListener(listener)
</pre>

<p>イベントは3つの関数を持ちます:</p>

<dl>
 <dt><code>addListener(callback)</code></dt>
 <dd>このイベントにリスナーを追加します。Adds a listener to this event.</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>このイベントのリスニングを停止します。引数<code>listener</code>は削除するリスナーです。</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd><code>listener</code>がイベントに登録されているかを調べます。リスニング中であれば<code>true</code>を、そうれなければ<code>false</code>を返します。</dd>
</dl>

<h2 id="addListenerの書式">addListenerの書式</h2>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>イベント発生時に呼び出される関数です。関数は次の引数を渡されます:</p>

 <dl class="reference-values">
  <dt><code>tab</code></dt>
  <dd>ページアクションがクリックされたタブの{{WebExtAPIRef('tabs.Tab')}}オブジェクト。</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("webextensions.api.pageAction.onClicked")}}</p>

<h2 id="例">例</h2>

<p>ユーザがページアクションをクリックしたとき、それを隠し、アクティブタブを"<a href="http://chilloutandwatchsomecatgifs.com/">http://chilloutandwatchsomecatgifs.com/</a>"に誘導します:</p>

<pre class="brush: js">var CATGIFS = "http://chilloutandwatchsomecatgifs.com/";

browser.pageAction.onClicked.addListener((tab) =&gt; {
  browser.pageAction.hide(tab.id);
  browser.tabs.update({url: CATGIFS});
});

browser.pageAction.onClicked.addListener(function () {
});</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/pageAction#event-onClicked"><code>chrome.pageAction</code></a> API. This documentation is derived from <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json"><code>page_action.json</code></a> in the Chromium code.</p>

<p>Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.</p>
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
