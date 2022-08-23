---
title: bookmarks.create()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/create
tags:
  - API
  - Add-ons
  - Bookmarks
  - Create
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/create
---
<div>{{AddonSidebar()}}</div>

<p><strong><code>bookmarks.create()</code></strong> は、<code>parentId</code> で指定した {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} の配下に、ブックマークやフォルダを作成するメソッドです。フォルダを作成する場合は、{{WebExtAPIRef("bookmarks.CreateDetails", "CreateDetails", "url")}} の引数を省略するか空にします。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.bookmarks.create(
  bookmark, // CreateDetails
  callback  // 関数（省略可）
)
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>bookmark</code></dt>
 <dd>{{WebExtAPIRef('bookmarks.CreateDetails')}}</dd>
 <dt><code>callback</code>{{optional_inline}}</dt>
 <dd>ブックマークが新しく作成された際に呼び出される {{jsxref("function")}} です。この関数は以下の引数を 1 つ受け取ります。</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>result</code></dt>
  <dd>新しく作成されたブックマークノードを表す {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.bookmarks.create")}}</p>

<h2 id="使用例">使用例</h2>

<p>以下の例は、このページのブックマークをデフォルトのフォルダ（Firefox は「未分類のブックマーク」、Chrome は「その他のブックマーク」）に作成するものです。</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">onBookmarkAdded</span><span class="punctuation token">(</span>bookmarkItem<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">"Bookmark added with ID: "</span> <span class="operator token">+</span> bookmarkItem<span class="punctuation token">.</span>id<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">create</span><span class="punctuation token">(</span><span class="punctuation token">{</span>
  title<span class="punctuation token">:</span> <span class="string token">"bookmarks.create() on MDN"</span><span class="punctuation token">,</span>
  url<span class="punctuation token">:</span> <span class="string token">"https://developer.mozilla.org/Add-ons/WebExtensions/API/bookmarks/create"</span>
<span class="punctuation token">}</span><span class="punctuation token">,</span> onBookmarkAdded<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/bookmarks#method-create"><code>chrome.bookmarks</code></a> API に基づいています。また、このドキュメントは <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json"><code>bookmarks.json</code></a> における Chromium のコードに基づいています。</p>

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
