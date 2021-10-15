---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - Storage
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/storage
---
<div>{{AddonSidebar}}</div>

<p>拡張機能にデータの保存、取得と、保存項目の変更をリッスンできるようにします。</p>

<p>ストレージのシステムは <a href="/ja/docs/Web/API/Web_Storage_API">Web Storage API</a> に基づいていますが、いくつか相違点があります。とりわけ、以下の違いがあります。</p>

<ul>
 <li>非同期です。</li>
 <li>値は拡張機能のスコープで、特定ドメインのスコープではありません (つまりキー/値ペアーの同じ組み合わせが、すべてのバックグラウンドコンテキストとコンテンツスクリプトから利用できます)。</li>
 <li>保存された値は JSON-ifiable な (JSON化できる) 値で、単なる <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></code> ではありません。とりわけ、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a></code> と <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a></code> も、コンテンツが JSON で表現できる時 (DOM ノードは入りません) を除いて不可です。値を保存する前に JSON <code>Strings</code> に変換する必要はなく、内部で JSON として表現されます、つまり JSON-ifiable である必要があります。</li>
 <li>複数のキー/値ペアーが同じ API 呼び出しで設定、取得できます。</li>
</ul>

<p>この API を利用するためには"storage" <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a> を <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a> に含める必要があります。</p>

<p>各々の拡張機能は独自のストレージ領域を持っています。またそれらは異なる型のストレージに分割することができます。</p>

<p>{{domxref("Window.localStorage")}}とこの API は似ていますが、拡張機能関連のデータを格納する際に拡張コード内で <code>Window.localStorage</code> を使わないことを推奨します。Firefox はプライバシー上の理由で、ブラウザー履歴やデータを消去などをする場合、localStorage API を利用して保存されたデータも消去します。しかし <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/local">storage.local</a></code> API を利用して保存されたデータはこれらの場合でも保持されます。</p>

<div class="note">
<p>ストレージ領域内は暗号化されていないため、ユーザーの機密情報を保存すべきではありません。</p>
</div>

<h2 id="Types" name="Types">型</h2>

<dl>
 <dt>{{WebExtAPIRef("storage.StorageArea")}}</dt>
 <dd>ストレージ領域を表すオブジェクト</dd>
 <dt>{{WebExtAPIRef("storage.StorageChange")}}</dt>
 <dd>ストレージ領域の変更を表すオブジェクト</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><code>storage</code> は 3 つのプロパティを持ち、異なる型の利用可能なストレージ領域を表しています。</p>

<dl>
 <dt>{{WebExtAPIRef("storage.sync")}}</dt>
 <dd><code>sync</code> ストレージ領域を表します。<code>sync</code> ストレージ内のアイテムはブラウザーによって同期され、異なるデバイス間でも、ログインしているユーザーのブラウザーのすべてのインスタンスを跨いで利用できるようになります。</dd>
 <dt>{{WebExtAPIRef("storage.local")}}</dt>
 <dd><code>local</code> ストレージ領域を表します。<code>local</code> ストレージ内のアイテムは拡張機能がインストールされているマシン内のみで扱えます。</dd>
 <dt>{{WebExtAPIRef("storage.managed")}}</dt>
 <dd><code>managed</code> ストレージ領域を表します。<code>managed</code> ストレージ内のアイテムはドメイン管理者によってセットされ、拡張機能は読取権限のみを持ちます。そのため、この名前空間を変更しようとするとエラーになります。</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<dl>
 <dt>{{WebExtAPIRef("storage.onChanged")}}</dt>
 <dd>ストレージ領域内のアイテムを 1 つ以上変更した場合に発火します。</dd>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("webextensions.api.storage")}}</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/storage"><code>chrome.storage</code></a> API に基づいています。また、このドキュメントは <a href="https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json"><code>storage.json</code></a> における Chromium のコードに基づいています。</p>

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
