---
title: bookmarks.move()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/move
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/move
---
<p>{{AddonSidebar()}}</p>

<p><strong><code>bookmarks.move()</code></strong> は、指定した {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} をブックマークツリー内の所望の位置に移すメソッドです。このメソッドにより、ブックマークを新しいフォルダの中や、同じフォルダ内の別の場所に移動させることができます。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.bookmarks.move(
  id,          // 文字列
  destination, // オブジェクト
  callback     // 関数（省略可）
)
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>id</code></dt>
 <dd>移動させるブックマーク / フォルダの ID を表す {{jsxref("string")}} です。</dd>
 <dt><code>destination</code></dt>
 <dd>ブックマークの移動先を表す {{jsxref("object")}} です。このオブジェクトには以下のプロパティが必ず 1 つ以上含まれます。</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>parentId </code>{{optional_inline}}</dt>
  <dd>移動先フォルダの ID を指定する {{jsxref("string")}} です。この値が省略された場合、現在と同じフォルダ内の新しい場所へ移動されます。</dd>
  <dt><code>index </code>{{optional_inline}}</dt>
  <dd>移動先フォルダ内における位置を指定する 0 起点のインデックスです。値が 0 の場合、そのフォルダの先頭に移動されます。値が省略された場合、新しい親フォルダ内の最後に移動されます。</dd>
 </dl>
 </dd>
 <dt><code>callback </code>{{optional_inline}}</dt>
 <dd>移動が終了した際に呼び出される {{jsxref("function")}} です。この関数は以下の引数を 1 つ受け取ります。</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>result</code></dt>
  <dd>移動された新しいノードを表す {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}}</dd>
 </dl>

 <p> </p>
 </dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.bookmarks.move")}}</p>

<h2 id="使用例">使用例</h2>

<h3 id="ブックマークを現在のフォルダの先頭へ移動">ブックマークを現在のフォルダの先頭へ移動</h3>

<p>次の例は、既存のブックマークを現在のフォルダの先頭へ移動させるものです。移動後に必要な処理は特にないため、ここではコールバック無しで呼び出しています。</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">browser<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">move</span><span class="punctuation token">(</span>bookmarkID<span class="punctuation token">,</span> <span class="punctuation token">{</span> index<span class="punctuation token">:</span> <span class="number token">0</span> <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<h3 id="ブックマークを異なるフォルダへ移動">ブックマークを異なるフォルダへ移動</h3>

<p>以下の例は、ID で指定したブックマークを、別の ID で指定したフォルダへ移動させる関数です。今回は、移動後に実行されるコールバック関数も指定しています。</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">moveToFolder</span><span class="punctuation token">(</span>bookmarkId<span class="punctuation token">,</span> destinationId<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  browser<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">move</span><span class="punctuation token">(</span>bookmarkId<span class="punctuation token">,</span> <span class="punctuation token">{</span> parentId<span class="punctuation token">:</span> destinationId <span class="punctuation token">}</span><span class="punctuation token">,</span>
                         <span class="keyword token">function</span><span class="punctuation token">(</span>updatedNode<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">/* ブックマークの移動後に行う処理 */</span>
  <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span></code></pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium <code>の </code><a href="https://developer.chrome.com/extensions/bookmarks#method-move"><code>chrome.bookmarks</code></a> API に基づいています。また、このドキュメント<code>は </code><a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json"><code>bookmarks.json</code></a> における Chromium のコードから作成されています。</p>

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
