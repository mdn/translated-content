---
title: bookmarks.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged
tags:
  - API
  - Add-ons
  - Bookmarks
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onChanged
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged
---
<div>{{AddonSidebar()}}</div>

<p>以下の変更に対して発火します。</p>

<ul>
 <li>ブックマークのタイトルまたは URL</li>
 <li>フォルダの名前</li>
</ul>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.bookmarks.onChanged.addListener(function(
  id,        // 文字列
  changeInfo // オブジェクト
) {...})
browser.bookmarks.onChanged.removeListener(listener)
browser.bookmarks.onChanged.hasListener(listener)
</pre>

<p>このイベントには 3 つのメソッドが用意されています。</p>

<dl>
 <dt><code>addListener(callback)</code></dt>
 <dd>イベントリスナを追加します。</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>イベントリスナを削除します。引数 <code>listener</code> には削除したいリスナを指定します。</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd><code>listener</code> がイベントリスナとして登録されているか確認します。登録されていれば <code>true</code> を、それ以外の場合は <code>false</code> を返します。</dd>
</dl>

<h2 id="addListener_の構文">addListener の構文</h2>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>イベントが発火した際に呼び出される関数を指定します。この関数には以下の引数が渡ります。</p>
 </dd>
</dl>

<dl>
 <dd>
 <dl class="reference-values">
  <dt><code>id</code></dt>
  <dd>変更を受けた要素の ID を表す {{jsxref("string")}}</dd>
 </dl>

 <dl class="reference-values">
  <dt><code>changeInfo</code></dt>
  <dd>変更に関する詳細を含んだ {{jsxref("object")}}</dd>
 </dl>
 </dd>
</dl>

<h2 id="付随するオブジェクト">付随するオブジェクト</h2>

<h3 id="changeInfo">changeInfo</h3>

<dl class="reference-values">
 <dt><code>title</code></dt>
 <dd>変更された要素のタイトルを表す {{jsxref("string")}}</dd>
 <dt><code>url</code>{{optional_inline}}</dt>
 <dd>変更された要素の URL を表す {{jsxref("string")}}。要素がフォルダだった場合に値は入りません。</dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.bookmarks.onChanged")}}</p>

<h2 id="使用例">使用例</h2>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">handleChanged</span><span class="punctuation token">(</span>id<span class="punctuation token">,</span> changeInfo<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">"Item: "</span> <span class="operator token">+</span> id <span class="operator token">+</span> <span class="string token">" changed"</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">"Title: "</span> <span class="operator token">+</span> changeInfo<span class="punctuation token">.</span>title<span class="punctuation token">)</span><span class="punctuation token">;</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">"Url: "</span> <span class="operator token">+</span> changeInfo<span class="punctuation token">.</span>url<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">function</span> <span class="function token">handleClick</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span>onChanged<span class="punctuation token">.</span><span class="function token">addListener</span><span class="punctuation token">(</span>handleChanged<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

chrome<span class="punctuation token">.</span>browserAction<span class="punctuation token">.</span>onClicked<span class="punctuation token">.</span><span class="function token">addListener</span><span class="punctuation token">(</span>handleClick<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/bookmarks#method-update"><code>chrome.bookmarks</code></a> API に基づいています。また、このドキュメントは <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json"><code>bookmarks.json</code></a> における Chromium のコードから作成されています。</p>

<p>Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います。</p>
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
