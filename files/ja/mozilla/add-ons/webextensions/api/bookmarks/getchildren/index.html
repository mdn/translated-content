---
title: bookmarks.getChildren()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getChildren
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getChildren
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/getChildren
---
<p>{{AddonSidebar()}}</p>

<p><strong><code>bookmarks.getChildren()</code></strong> は、ブックマークフォルダの ID を {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} で指定し、その直下にあたる子要素をすべて取得します。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.bookmarks.getChildren(
  id,      // 文字列
  callback // 関数
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>id</code></dt>
 <dd>取得したい子要素を持つフォルダ ID を指定する {{jsxref("string")}} です。</dd>
 <dt><code>callback</code></dt>
 <dd>子ノードのリストが取得された際に実行される関数です。この関数には以下の引数が渡ります。</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>results</code></dt>
  <dd>各要素が 1 つの子ノードを表す、{{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} の {{jsxref("array")}} です。要素の順序は、UI に表示されているのと同じ順番です。現在、セパレータの有無は結果に含まれません。指定したノードに子要素が含まれていなかった場合、<code>results</code> は空配列となります。</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.bookmarks.getChildren")}}</p>

<h2 id="使用例">使用例</h2>

<h3 id="基本的な使い方">基本的な使い方</h3>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">gotChildren</span><span class="punctuation token">(</span>children<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>children<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">getChildren</span><span class="punctuation token">(</span>bookmarkItemId<span class="punctuation token">,</span> gotChildren<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<h3 id="指定したフォルダでブックマークを切替">指定したフォルダでブックマークを切替</h3>

<p>以下の例は、フォルダを {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} で指定し、そのフォルダに新しいブックマークを作成するものです。ただし、既に同じ名前のブックマークがあった場合は、逆に既存のブックマークを削除することとします。このとき新しいブックマークは作成されません。</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">toggleBookmark</span><span class="punctuation token">(</span>folderNode<span class="punctuation token">,</span> title<span class="punctuation token">,</span> url<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">getChildren</span><span class="punctuation token">(</span>folderNode<span class="punctuation token">.</span>id<span class="punctuation token">,</span> <span class="keyword token">function</span><span class="punctuation token">(</span>results<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="keyword token">let</span> node <span class="operator token">=</span> results<span class="punctuation token">.</span><span class="function token">find</span><span class="punctuation token">(</span><span class="keyword token">function</span><span class="punctuation token">(</span>el<span class="punctuation token">)</span> <span class="punctuation token">{</span>
      <span class="keyword token">return</span> el<span class="punctuation token">.</span>title <span class="operator token">===</span> title<span class="punctuation token">;</span>
    <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>

    <span class="comment token">// ブックマークが存在する場合は削除する</span>
    <span class="comment token">// そうでなければ新しく作成する</span>

    <span class="keyword token">if</span> <span class="punctuation token">(</span>node <span class="operator token">!==</span> undefined<span class="punctuation token">)</span> <span class="punctuation token">{</span>
      chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">remove</span><span class="punctuation token">(</span>node<span class="punctuation token">.</span>id<span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span> <span class="keyword token">else</span> <span class="punctuation token">{</span>
      chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">create</span><span class="punctuation token">(</span><span class="punctuation token">{</span>
        parentId<span class="punctuation token">:</span> folderNode<span class="punctuation token">.</span>id<span class="punctuation token">,</span>
        title<span class="punctuation token">:</span> title<span class="punctuation token">,</span>
        url<span class="punctuation token">:</span> url
      <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
  <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span></code></pre>

<p>先の <code>toggleBookmark()</code> 関数は、<code>folderNode</code> で指定した {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} の中に既に存在しているすべてのブックマークのリストを取得するため、最初に <code>bookmarks.getChildren()</code> を呼び出しています。</p>

<p>コールバックに指定された匿名関数には <code>results</code> という引数が 1 つ渡されます。この引数は、フォルダの直下にある子要素をすべて含んだ配列です。まず初めに、与えられたタイトルを持つノードがフォルダに存在するかどうかを調べます。ここでは {{jsxref("Array.find()")}} メソッドを使い、タイトルが等しいかどうかをコールバック内で判定しています。</p>

<p>マッチするノードがあった場合（すなわち、<code>node</code> が <code>undefined</code> ではない場合）、指定した <code>title</code> を持つブックマークが既に存在していたことが分かったので、既存のブックマークを削除するために {{WebExtAPIRef("bookmarks.remove()")}} を呼び出します。</p>

<p>そうではなかった場合、新しいブックマークを作成するために {{WebExtAPIRef("bookmarks.create()")}} が呼び出します。この際、引数 <code>folderNode</code> で与えられていたフォルダ ID を新しい親フォルダの ID に指定し、合わせて <code>title</code> と <code>url</code> も指定します。</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/bookmarks#method-getChildren"><code>chrome.bookmarks</code></a> API に基づいています。また、このドキュメントは <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json"><code>bookmarks.json</code></a> における Chromium のコードから作成されています。</p>

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
