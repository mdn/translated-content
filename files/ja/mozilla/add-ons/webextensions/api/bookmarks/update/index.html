---
title: bookmarks.update()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/update
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - Update
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/update
---
<p>{{AddonSidebar()}}</p>

<p><strong><code>bookmarks.update()</code></strong> は、ブックマークの URL やタイトル、またはフォルダの名前を更新するメソッドです。</p>

<p>ブックマーク要素が見つからなかった場合には {{WebExtAPIRef("runtime.lastError")}} がセットされるので、エラーの有無をコールバックで確認できます。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.bookmarks.update(
  id,      // 文字列
  changes, // オブジェクト
  callback // 関数（省略可）
)
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>id</code></dt>
 <dd>更新したいブックマーク / フォルダの ID を表す {{jsxref("string")}} です。</dd>
 <dt><code>changes</code></dt>
 <dd>適用したい変更内容を表す {{jsxref("object")}} であり、以下のプロパティから構成されます。指定しなかったプロパティについて、ブックマークやフォルダが変更されることはありません。<br>

 <dl class="reference-values">
  <dt><code>title</code>{{optional_inline}}</dt>
  <dd><code>id</code> がフォルダを表す場合、ブックマークの新しいタイトル / フォルダの新しい名前を指定する {{jsxref("string")}} です。</dd>
  <dt><code>url</code>{{optional_inline}}</dt>
  <dd>ブックマークの新しい URL を指定する {{jsxref("string")}} です。</dd>
 </dl>
 </dd>
 <dt><code>callback</code>{{optional_inline}}</dt>
 <dd>変更が適用された際に実行される関数です。この関数には次の引数が 1 つ渡ります。</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>result</code></dt>
  <dd>更新されたブックマークを表す{{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} オブジェクトです。</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.bookmarks.update")}}</p>

<h2 id="使用例">使用例</h2>

<h3 id="フォルダのリネーム">フォルダのリネーム</h3>

<p>以下の例は、"MDN" という名前のフォルダすべてを "MDN" to "Mozilla Developer Network (MDN)" にリネームするものです。</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">updateFolders</span><span class="punctuation token">(</span>items<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">for</span> <span class="punctuation token">(</span>item <span class="keyword token">of</span> items<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">// only folders, so skip items with a `url`</span>
    <span class="keyword token">if</span> <span class="punctuation token">(</span><span class="operator token">!</span>item<span class="punctuation token">.</span>url<span class="punctuation token">)</span> <span class="punctuation token">{</span>
      chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">update</span><span class="punctuation token">(</span>item<span class="punctuation token">.</span>id<span class="punctuation token">,</span> <span class="punctuation token">{</span>
        title<span class="punctuation token">:</span> <span class="string token">"Mozilla Developer Network (MDN)"</span>
      <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span>

chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">search</span><span class="punctuation token">(</span><span class="punctuation token">{</span> title<span class="punctuation token">:</span> <span class="string token">"MDN"</span> <span class="punctuation token">}</span><span class="punctuation token">,</span> updateFolders<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/bookmarks#method-update"><code>chrome.bookmarks</code></a> API. This documentation is derived from <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json"><code>bookmarks.json</code></a> in the Chromium code.</p>

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
