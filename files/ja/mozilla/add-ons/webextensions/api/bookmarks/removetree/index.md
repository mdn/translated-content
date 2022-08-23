---
title: bookmarks.removeTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/removeTree
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - removeTree
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/removeTree
---
<p>{{AddonSidebar()}}</p>

<p><strong><code>bookmarks.removeTree()</code></strong> は、ブックマークフォルダやその要素を再帰的に削除するメソッドです。</p>

<p>ブックマークが見つからなかった場合は {{WebExtAPIRef("runtime.lastError")}} がセットされ、エラーの有無はコールバック内で確認できます。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.bookmarks.removeTree(
  id,      // 文字列
  callback // 関数（省略可）
)
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>id</code></dt>
 <dd>子要素とともに削除されるフォルダノードの ID を表す {{jsxref("string")}} です。</dd>
 <dt><code>callback</code>{{optional_inline}}</dt>
 <dd>ノードが削除された際に実行される関数です。この関数に渡される引数はありません。</dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.bookmarks.removeTree")}}</p>

<h2 id="使用例">使用例</h2>

<p>以下の例は、"MDN" という名前のフォルダを探し、それ自身とその子要素をすべて削除するものです。</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">onRemoved</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">if</span> <span class="punctuation token">(</span>chrome<span class="punctuation token">.</span>runtime<span class="punctuation token">.</span>lastError<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>chrome<span class="punctuation token">.</span>runtime<span class="punctuation token">.</span>lastError<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span> <span class="keyword token">else</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">"bookmark item removed!"</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span>

<span class="keyword token">function</span> <span class="function token">removeMDN</span><span class="punctuation token">(</span>searchResults<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">if</span> <span class="punctuation token">(</span>searchResults<span class="punctuation token">.</span>length<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">removeTree</span><span class="punctuation token">(</span>searchResults<span class="punctuation token">[</span><span class="number token">0</span><span class="punctuation token">]</span><span class="punctuation token">.</span>id<span class="punctuation token">,</span> onRemoved<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span>

chrome<span class="punctuation token">.</span>bookmarks<span class="punctuation token">.</span><span class="function token">search</span><span class="punctuation token">(</span><span class="punctuation token">{</span> title<span class="punctuation token">:</span> <span class="string token">"MDN"</span> <span class="punctuation token">}</span><span class="punctuation token">,</span> removeMDN<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

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
