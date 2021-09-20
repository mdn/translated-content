---
title: bookmarks.search()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/search
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - Search
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/search
---
<div>{{AddonSidebar()}}</div>

<p><strong><code>bookmarks.search()</code></strong> 関数は、指定したクエリにマッチするブックマークを検索するものです。マッチしたブックマークは、{{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} オブジェクトの配列として、指定されたコールバック関数の引数に渡されます。</p>

<p>入力引数の値や型が不正だった場合、この関数は例外を送出します。エラーメッセージは<a href="/ja/Add-ons/WebExtensions/%E3%83%87%E3%83%90%E3%83%83%E3%82%B0">コンソール</a>で確認できます。送出された例外はエラー ID を含んでおらず、またメッセージを変更される可能性があるため、これらを解析するようなコードは書かないでください。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.bookmarks.search(
  query,   // 文字列またはオブジェクト
  callback // 関数
)
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>query</code></dt>
 <dd>実行するクエリを表す {{jsxref("string")}} または {{jsxref("object")}} です。</dd>
 <dd><code>query</code> を文字列で指定する場合、<code>query</code> は 0 個以上の検索項から構成されます。検索項はスペースで区切りますが、複数語からなる句を検索したい場合は引用符でくくります。それぞれの検索項はブックマークの URL やタイトルの部分文字列にマッチします（大文字・小文字は区別されません）。あるブックマークがクエリにマッチするには、クエリの検索項すべてがマッチしなければなりません。</dd>
 <dd>
 <p><code>query</code> をオブジェクトで指定する場合、以下の 3 つのプロパティのうち 0 個以上を指定することになります。あるブックマークがクエリにマッチするには、指定されたプロパティすべてにおいてマッチしなければなりません。</p>
 </dd>
 <dd>
 <dl class="reference-values">
  <dt><code>query</code>{{optional_inline}}</dt>
  <dd>1 つ以上の検索項を含んだ {{jsxref("string")}} を指定します。このフォーマットは <code>query</code> 引数における文字列のフォーマットと同じです。このプロパティ値が {{jsxref("string")}} でなかった場合、 例外が送出されます。</dd>
  <dt><code>url</code>{{optional_inline}}</dt>
  <dd>ブックマークの URL と完全一致しなければならない {{jsxref("string")}} <code>を指定します。</code>マッチの際に大文字・小文字は区別されず、また末尾のスラッシュも無視されます。</dd>
  <dd>
  <p>無効な URL を指定した場合、例外が送出されます。</p>
  </dd>
 </dl>

 <dl class="reference-values">
  <dt><code>title</code>{{optional_inline}}</dt>
  <dd>ブックマークのタイトルと完全一致しなければならない {{jsxref("string")}} <code>を指定します。</code>マッチの際には大文字・小文字が区別されます。</dd>
 </dl>
 </dd>
 <dt><code>callback</code></dt>
 <dd>クエリの結果が得られた場合に呼び出される関数を指定します。この関数には以下の引数が渡ります。</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>results</code></dt>
  <dd>{{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} オブジェクトの配列であり、各要素はマッチしたブックマークをそれぞれ表しています。何も見つからなかった場合は空の配列となります。</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.bookmarks.search")}}</p>

<h2 id="使用例">使用例</h2>

<p>以下の例は、ブックマークすべての ID を出力するものです。</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">onGot</span><span class="punctuation token">(</span>bookmarkItems<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">for</span> <span class="punctuation token">(</span>item <span class="keyword token">of</span> bookmarkItems<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>item<span class="punctuation token">.</span>id<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span>

chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">search</span><span class="punctuation token">(</span><span class="punctuation token">{</span><span class="punctuation token">}</span><span class="punctuation token">,</span> onGot<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>以下の例は、その時にアクティブなタブがブックマークされているかどうかを確認するものです。</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">onGot</span><span class="punctuation token">(</span>bookmarkItems<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">if</span> <span class="punctuation token">(</span>bookmarkItems<span class="punctuation token">.</span>length<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">"active tab is bookmarked"</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span> <span class="keyword token">else</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">"active tab is not bookmarked"</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span>

<span class="keyword token">function</span> <span class="function token">checkActiveTab</span><span class="punctuation token">(</span>tab<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">search</span><span class="punctuation token">(</span><span class="punctuation token">{</span>url<span class="punctuation token">:</span> tab<span class="punctuation token">.</span>url<span class="punctuation token">}</span><span class="punctuation token">,</span> onGot<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

chrome<span class="punctuation token">.</span>browserAction<span class="punctuation token">.</span>onClicked<span class="punctuation token">.</span><span class="function token">addListener</span><span class="punctuation token">(</span>checkActiveTab<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/bookmarks#method-search"><code>chrome.bookmarks</code></a> API に基づいています。また、このドキュメントは <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json"><code>bookmarks.json</code></a> における Chromium のコードから作成されています。</p>

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
