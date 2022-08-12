---
title: bookmarks.getSubTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getSubTree
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree
---
<p>{{AddonSidebar()}}</p>

<p><strong><code>bookmarks.getSubTree()</code></strong> は、ID を指定して {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}} を非同期に取得するメソッドです。</p>

<p>対象がフォルダの場合、<code>children</code> プロパティを再帰的にたどることで、すべての子要素にアクセスすることができます。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.bookmarks.getSubTree(
  id,      // 文字列
  callback // 関数
)
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>id</code></dt>
 <dd>取得したい部分木のルートノードに対応する ID を表す {{jsxref("string")}} です。</dd>
 <dt><code>callback</code></dt>
 <dd>リクエストしたノードが取得された際に呼び出される関数です。この関数には以下の引数が渡ります。</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>results</code></dt>
  <dd>指定した ID に対応する {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} オブジェクトが 1 つ含まれた配列</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.bookmarks.getSubTree")}}</p>

<h2 id="例">例</h2>

<p>以下の例は、指定したノードの配下にある部分木を再帰的に出力するものです。</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">makeIndent</span><span class="punctuation token">(</span>indentLength<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">return</span> <span class="string token">"."</span><span class="punctuation token">.</span><span class="function token">repeat</span><span class="punctuation token">(</span>indentLength<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">function</span> <span class="function token">logItems</span><span class="punctuation token">(</span>bookmarkItem<span class="punctuation token">,</span> indent<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">if</span> <span class="punctuation token">(</span>bookmarkItem<span class="punctuation token">.</span>url<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="function token">makeIndent</span><span class="punctuation token">(</span>indent<span class="punctuation token">)</span> <span class="operator token">+</span> bookmarkItem<span class="punctuation token">.</span>url<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span> <span class="keyword token">else</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="function token">makeIndent</span><span class="punctuation token">(</span>indent<span class="punctuation token">)</span> <span class="operator token">+</span> <span class="string token">"Folder"</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    indent<span class="operator token">++</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
  <span class="keyword token">if</span> <span class="punctuation token">(</span>bookmarkItem<span class="punctuation token">.</span>children<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="keyword token">for</span> <span class="punctuation token">(</span>child <span class="keyword token">of</span> bookmarkItem<span class="punctuation token">.</span>children<span class="punctuation token">)</span> <span class="punctuation token">{</span>
      <span class="function token">logItems</span><span class="punctuation token">(</span>child<span class="punctuation token">,</span> indent<span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
  <span class="punctuation token">}</span>
  indent<span class="operator token">--</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">function</span> <span class="function token">logSubTree</span><span class="punctuation token">(</span>bookmarkItems<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="function token">logItems</span><span class="punctuation token">(</span>bookmarkItems<span class="punctuation token">[</span><span class="number token">0</span><span class="punctuation token">]</span><span class="punctuation token">,</span> <span class="number token">0</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">function</span> <span class="function token">handleClick</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">var</span> subTreeID <span class="operator token">=</span> <span class="string token">"unfiled_____"</span><span class="punctuation token">;</span>
  chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">getSubTree</span><span class="punctuation token">(</span>subTreeID<span class="punctuation token">,</span> logSubTree<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

chrome<span class="punctuation token">.</span>browserAction<span class="punctuation token">.</span>onClicked<span class="punctuation token">.</span><span class="function token">addListener</span><span class="punctuation token">(</span>handleClick<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a class="external external-icon" href="https://developer.chrome.com/extensions/bookmarks#method-getSubTree"><code>chrome.bookmarks</code></a> API に基づいています。また、このドキュメントは <a class="external external-icon" href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json"><code>bookmarks.json</code></a> における Chromium のコードから作成されています。</p>

<p>Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います。</p>
</div>

<p> </p>

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

<p> </p>
