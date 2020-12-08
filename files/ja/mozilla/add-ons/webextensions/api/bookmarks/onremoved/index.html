---
title: bookmarks.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onRemoved
tags:
  - API
  - Add-ons
  - Bookmarks
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onRemoved
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/onRemoved
---
<p>{{AddonSidebar()}}</p>

<p>ブックマークやフォルダが削除された際に発火します。フォルダが再帰的に削除された場合は、そのフォルダに対して 1 回だけ発火し、そのフォルダの中身に関しては発火しません。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.bookmarks.onRemoved.addListener(function(
  id,        // 文字列
  removeInfo // オブジェクト
) {...})
browser.bookmarks.onRemoved.removeListener(listener)
browser.bookmarks.onRemoved.hasListener(listener)
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
  <dd>削除された要素の ID を表す {{jsxref("string")}}</dd>
 </dl>

 <dl class="reference-values">
  <dt><code>removeInfo</code></dt>
  <dd>削除された要素の詳細を含んだ {{jsxref("object")}}</dd>
 </dl>
 </dd>
</dl>

<h2 id="付随するオブジェクト">付随するオブジェクト</h2>

<h3 id="removeInfo">removeInfo</h3>

<dl class="reference-values">
 <dt><code>parentId</code></dt>
 <dd>要素の親の ID を表す {{jsxref("string")}}</dd>
 <dt><code>index</code></dt>
 <dd>この要素が親からみて何番目にあるかを表す 0 以上の整数</dd>
 <dt><code>node</code></dt>
 <dd>削除された要素に関する詳細を含む {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}</dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.bookmarks.onRemoved")}}</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">handleRemoved</span><span class="punctuation token">(</span>id<span class="punctuation token">,</span> removeInfo<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">"Item: "</span> <span class="operator token">+</span> id <span class="operator token">+</span> <span class="string token">" removed"</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">"Title: "</span> <span class="operator token">+</span> removeInfo<span class="punctuation token">.</span>node<span class="punctuation token">.</span>title<span class="punctuation token">)</span><span class="punctuation token">;</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">"Url: "</span> <span class="operator token">+</span> removeInfo<span class="punctuation token">.</span>node<span class="punctuation token">.</span>url<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">function</span> <span class="function token">handleClick</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span>onRemoved<span class="punctuation token">.</span><span class="function token">addListener</span><span class="punctuation token">(</span>handleRemoved<span class="punctuation token">)</span><span class="punctuation token">;</span>
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
