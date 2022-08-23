---
title: webNavigation
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
  - webNavigation
translation_of: Mozilla/Add-ons/WebExtensions/API/webNavigation
---
<div>{{AddonSidebar}}</div>

<p>ナビゲーションのいろいろな段階でイベントリスナーを追加します。ナビゲーションにはある URL から他に移動するブラウザーフレームにより成り立っていて、それは(いつもではなく)通常はリンクのクリックやロケーションバーへの URL 入力といったユーザー操作の応答として発生します。</p>

<p>{{WebExtAPIRef("webRequest")}} API と比較して: ナビゲーションは通常、ブラウザーにウェブリクエストを発生させますが、webRequest API は HTTP 層からの低レベルな観点に関心を持っており、一方で webNavigation API はブラウザー UI 自身に対して、より関心を持っています。</p>

<p>それぞれのイベントはナビゲーションの特定のステージに対応しています。イベントシーケンスは次の通りです:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13374/we-flow.png" style="display: block; height: 562px; margin-left: auto; margin-right: auto; width: 745px;"></p>

<ul>
 <li>主なフローは次の通り:
  <ul>
   <li><code>{{WebExtAPIRef("webNavigation.onBeforeNavigate", "onBeforeNavigate")}}</code></li>
   <li><code>{{WebExtAPIRef("webNavigation.onCommitted", "onCommitted")}}</code></li>
   <li><code>{{WebExtAPIRef("webNavigation.onDOMContentLoaded", "onDOMContentLoaded")}}</code></li>
   <li><code>{{WebExtAPIRef("webNavigation.onCompleted", "onCompleted")}}</code>.</li>
  </ul>
 </li>
 <li>追加のものは次の通り:
  <ul>
   <li><code>{{WebExtAPIRef("webNavigation.onCreatedNavigationTarget", "onCreatedNavigationTarget")}}</code> は、ブラウザーがナビゲーション用にタブやウィンドウを作成する必要がある場合 (例えば、ユーザーがリンクを新しいタブで開いたために)、<code>onBeforeNavigate</code> の前に発火します。</li>
   <li>{{WebExtAPIRef("webNavigation.onHistoryStateUpdated", "onHistoryStateUpdated")}} はページが <a href="http://diveintohtml5.info/history.html">history API</a> を使ってブラウザーのロケーションバーに表示された URL を更新する場合に発火します。</li>
   <li>{{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated", "onReferenceFragmentUpdated")}} はページの <a href="https://en.wikipedia.org/wiki/Fragment_identifier">fragment identifier</a> が変更された場合に発火します。</li>
   <li>{{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} はあらゆる場所で発火します。</li>
  </ul>
 </li>
</ul>

<p>それぞれのナビゲーションは特定のブラウザーフレーム内の URL の遷移です。ブラウザーフレームはタブ ID とフレーム ID で識別されます。フレームはタブ内の再上位のブラウジングコンテキストである場合や、<a href="/ja/docs/Web/HTML/Element/iframe">iframe</a> として実装されたネストされたブラウジングコンテキストである場合があります。</p>

<p>それぞれのイベントの <code>addListener()</code> の呼び出しはオプションの filter パラメーターを受け入れます。filter は 1 つ以上の URL パターンを指定し、イベントはターゲット URL がパターンにマッチしたナビゲーションの時だけに発火します。</p>

<p><code>onCommitted</code> イベントリスナーには 2 つの追加プロパティが渡されます: ナビゲーションの原因 (例えばユーザーがリンクをクリックしたり、ユーザーがブックマークを選んだり) を示す{{WebExtAPIRef("webNavigation.TransitionType","TransitionType")}} と、ナビゲーションの詳細情報を提供する{{WebExtAPIRef("webNavigation.TransitionQualifier","TransitionQualifier")}} です。</p>

<p>この API を使うには"webNavigation" <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">パーミッション</a>が必要です。</p>

<h2 id="Types" name="Types">型</h2>

<dl>
 <dt>{{WebExtAPIRef("webNavigation.TransitionType")}}</dt>
 <dd>ナビゲーションの原因: 例えば、ユーザーがリンクをクリックしたり、アドレスを入力したり、ブックマークをクリックしたりなど。</dd>
 <dt>{{WebExtAPIRef("webNavigation.TransitionQualifier")}}</dt>
 <dd>
 <div>遷移の追加情報</div>
 </dd>
</dl>

<h2 id="Functions" name="Functions">関数</h2>

<dl>
 <dt>{{WebExtAPIRef("webNavigation.getFrame()")}}</dt>
 <dd>特定フレームについての情報を取得します。フレームにはタブ内のトップレベルのフレームや、ネストされた <a href="/ja/docs/Web/HTML/Element/iframe">iframe</a> であり、タブ ID とフレーム ID でユニークに識別されます。</dd>
 <dt>{{WebExtAPIRef("webNavigation.getAllFrames()")}}</dt>
 <dd>
 <p>タブ ID を指定すると、そのタブに含まれているすべてのフレームの情報を取得します。</p>
 </dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<dl>
 <dt>{{WebExtAPIRef("webNavigation.onBeforeNavigate")}}</dt>
 <dd>
 <p>ブラウザーがナビゲーションイベントを開始する直前に発火します。</p>
 </dd>
 <dt>{{WebExtAPIRef("webNavigation.onCommitted")}}</dt>
 <dd>ナビゲーションがコミットされたときに発火します。少なくともサーバーから新しい document がいくらか取得されてブラウザーが新document に切り替えると決決めたとき。</dd>
 <dt>{{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}</dt>
 <dd>ページ内で <a href="/ja/docs/Web/Events/DOMContentLoaded">DOMContentLoaded</a> イベントが発火したときに発火します。</dd>
 <dt>{{WebExtAPIRef("webNavigation.onCompleted")}}</dt>
 <dd>document と、それが参照するリソースが完全にロードされて初期化されたときに発火します。これは DOM <code><a href="/ja/docs/Web/Events/load">load</a></code> イベントと等価です。</dd>
 <dt>{{WebExtAPIRef("webNavigation.onErrorOccurred")}}</dt>
 <dd>エラーが起こってナビゲーションが停止したときに発火します。これはネットワークエラーが起きたときや、ユーザーがナビゲーションを停止したときのいずれかで起こりえます。</dd>
 <dt>{{WebExtAPIRef("webNavigation.onCreatedNavigationTarget")}}</dt>
 <dd>新しいウィンドウや、既存のウィンドウ内の新規タブが作成されてナビゲーションをホストするときに発火します: 例えば、ユーザーが新しいタブでリンクを開いた場合。</dd>
 <dt>{{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}</dt>
 <dd>ページの <a class="external-icon external" href="https://en.wikipedia.org/wiki/Fragment_identifier">fragment identifier</a> が変化したときに発火します。</dd>
 <dt>{{WebExtAPIRef("webNavigation.onTabReplaced")}}</dt>
 <dd>
 <p>タブのコンテンツが別のタブ (通常は以前レンダリング済みのもの) に置き換えられるときに発火します。</p>
 </dd>
 <dt>{{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}}</dt>
 <dd>ページで <a class="external external-icon" href="http://diveintohtml5.info/history.html">history API</a> を使ってブラウザーのロケーションバーの URL が更新されたときに発火します。</dd>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("webextensions.api.webNavigation")}}</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/webNavigation"><code>chrome.webNavigation</code></a> API. This documentation is derived from <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json"><code>web_navigation.json</code></a> in the Chromium code.</p>

<p>Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.</p>
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
