---
title: bookmarks
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks
---
<p>{{AddonSidebar}}</p>

<p><a href="/ja/docs/Mozilla/Add-ons/WebExtensions">WebExtensions</a> {{WebExtAPIRef("bookmarks")}} API を利用すると、拡張機能からブラウザーのブックマークシステムにアクセスしたり、操作することができます。ページをブックマークしたり、既存のブックマークを取得したり、ブックマークを編集・削除・整理することが可能です。</p>

<p>この API を使用する際は、拡張機能の <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a></code> ファイルで "bookmarks" <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions">パーミッション</a> を指定する必要があります。</p>

<p>拡張機能ではブックマークツリーのルートノードではブックマークを作成・編集・削除できません。それをしようとすると次のエラーになります: "<em>The bookmark root cannot be modified</em>"</p>

<h2 id="Types" name="Types">関連する値の型</h2>

<dl>
 <dt>{{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}</dt>
 <dd>ブックマークツリー上のブックマークやフォルダーを表します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}</dt>
 <dd>ツリー内のノードがブックマークかフォルダーかセパレーターかを表す {{jsxref("string")}} の列挙型です。</dd>
 <dt>{{WebExtAPIRef("bookmarks.BookmarkTreeNodeUnmodifiable")}}</dt>
 <dd>ブックマークやフォルダーが変更不可である理由を表す {{jsxref("string")}} の列挙型です。</dd>
 <dt>{{WebExtAPIRef("bookmarks.CreateDetails")}}</dt>
 <dd>新しいブックマークを作成する際、{{WebExtAPIRef("bookmarks.create()")}} メソッドに渡す情報を含みます。</dd>
</dl>

<h2 id="Functions" name="Functions">関数</h2>

<dl>
 <dt>{{WebExtAPIRef("bookmarks.create()")}}</dt>
 <dd>ブックマークやフォルダーを作成します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.get()")}}</dt>
 <dd>ブックマークの ID や ID の配列を指定し、1 つ以上の {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode(s)")}} を取得します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.getChildren()")}}</dt>
 <dd>指定した {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} の子要素を取得します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.getRecent()")}}</dt>
 <dd>最近追加されたブックマークを取得します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.getSubTree()")}}</dt>
 <dd>指定したノードを起点とする、ブックマークツリーの部分木を取得します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.getTree()")}}</dt>
 <dd>ブックマークのツリー全体を {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} オブジェクトの配列として取得します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.move()")}}</dt>
 <dd>指定した {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} を所望の場所に移します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.remove()")}}</dt>
 <dd>ノードの ID を指定し、ブックマークや空のブックマークフォルダーを削除します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.removeTree()")}}</dt>
 <dd>ブックマークのフォルダーを再帰的に削除します。すなわち、フォルダーノードの ID を指定し、そのノードと子要素すべてを削除します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.search()")}}</dt>
 <dd>与えた条件に一致する {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNodes")}} を検索します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.update()")}}</dt>
 <dd>ブックマークの ID を指定し、ブックマークの URL やタイトル、またはフォルダーの名前を更新します。</dd>
</dl>

<h2 id="Events" name="Events">Events</h2>

<dl>
 <dt>{{WebExtAPIRef("bookmarks.onCreated")}}</dt>
 <dd>ブックマークやフォルダーが作成された際に発火します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.onRemoved")}}</dt>
 <dd>ブックマークやフォルダーが削除された際に発火します。フォルダーが再帰的に削除された場合は、そのフォルダーに対して一回だけ発火し、フォルダーの中身については発火しません。</dd>
 <dt>{{WebExtAPIRef("bookmarks.onChanged")}}</dt>
 <dd>ブックマークやフォルダーが変更された際に発火します。現在は <code>title</code> と url の変更に対してのみ発火します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.onMoved")}}</dt>
 <dd>異なる親フォルダーへ、または同じフォルダー内の異なる場所へブックマークやフォルダーが移された際に発火します。</dd>
 <dt>{{WebExtAPIRef("bookmarks.onChildrenReordered")}}</dt>
 <dd>UI で表示されている順序に伴って子フォルダーの順序も変更された際に発火します。{{WebExtAPIRef("bookmarks.move", "move()")}} の実行後には発火しません。</dd>
 <dt>{{WebExtAPIRef("bookmarks.onImportBegan")}}</dt>
 <dd>ブックマークのインポートが開始した際に発火します。パフォーマンスが重要である場合、イベントのオブザーバは {{WebExtAPIRef("bookmarks.onImportEnded")}} が発火するまで {{WebExtAPIRef("bookmarks.onCreated")}} を無視すべきでしょう。その場合であっても、オブザーバは他のイベントについては即座に処理すべきでしょう。</dd>
 <dt>{{WebExtAPIRef("bookmarks.onImportEnded")}}</dt>
 <dd>ブックマークのインポートが終了した際に発火します。</dd>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("webextensions.api.bookmarks")}}</p>

<div class="hidden note">
<p>The "Chrome incompatibilities" section is included from <a href="https://developer.mozilla.org/ja/Add-ons/WebExtensions/Chrome_incompatibilities"> https://developer.mozilla.org/ja/Add-ons/WebExtensions/Chrome_incompatibilities</a> using the <a href="/ja/docs/Template:WebExtChromeCompat">WebExtChromeCompat</a> macro.</p>

<p>If you need to update this content, edit <a href="https://developer.mozilla.org/ja/Add-ons/WebExtensions/Chrome_incompatibilities">https://developer.mozilla.org/ja/Add-ons/WebExtensions/Chrome_incompatibilities</a>, then shift-refresh this page to see your changes.</p>
</div>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/bookmarks"><code>chrome.bookmarks</code></a> API に基づいています。また、このドキュメントは <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json"><code>bookmarks.json</code></a> における Chromium のコードに基づいています。</p>

<p>Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。</p>
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
