---
title: bookmarks.getRecent()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getRecent
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getRecent
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/getRecent
---
<p>{{AddonSidebar()}}</p>

<p><strong><code>bookmarks.getRecent()</code></strong> は、最近に追加されたブックマークを指定した最大個数まで取得し、{{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} オブジェクトの配列としてコールバック関数に渡します。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.bookmarks.getRecent(
  numberOfItems, // 整数
  callback       // 関数
)
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>numberOfItems</code></dt>
 <dd>取得する要素の最大個数を指定する整数です。最近追加された要素のうち、ここで指定した個数までが戻り値のリストに含まれます。</dd>
 <dt><code>callback</code></dt>
 <dd>リストが取得された際に実行される関数です。この関数には以下の引数が渡ります。</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>results</code></dt>
  <dd>各要素が 1 つのブックマークノードを表す {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} オブジェクトの {{jsxref("array")}}</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.bookmarks.getRecent")}}</p>

<h2 id="使用例">使用例</h2>

<p id="Find_the_most_recently_added_bookmark">以下の例は、直近に追加されたブックマークの URL を出力するものです。</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">gotMostRecent</span><span class="punctuation token">(</span>bookmarkItems<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">if</span> <span class="punctuation token">(</span>bookmarkItems<span class="punctuation token">.</span>length<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>bookmarkItems<span class="punctuation token">[</span><span class="number token">0</span><span class="punctuation token">]</span><span class="punctuation token">.</span>url<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span>

chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">getRecent</span><span class="punctuation token">(</span><span class="number token">1</span><span class="punctuation token">,</span> gotMostRecent<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/bookmarks#method-getRecent"><code>chrome.bookmarks</code></a> API に基づいています。また、このドキュメントは <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json"><code>bookmarks.json</code></a> における Chromium のコードに基づいて作成されています。</p>

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
