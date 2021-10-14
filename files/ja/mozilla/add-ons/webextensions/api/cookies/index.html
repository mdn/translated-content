---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Interface
  - Reference
  - dard
translation_of: Mozilla/Add-ons/WebExtensions/API/cookies
---
<div>{{AddonSidebar}}</div>

<p>拡張機能に cookie の取得と設定と、変更された時の通知を可能にします。</p>

<p>この API を使用するには、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a> ファイルで "cookies" の <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">API パーミッション</a> があることと、同様にアクセスする cookie を持つ <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">host パーミッション</a> も必要になります。<a href="/ja/Add-ons/WebExtensions/API/cookies#Permissions">cookie パーミッション</a>を見てください。</p>

<h2 id="Types" name="Types">型</h2>

<dl>
 <dt>{{WebExtAPIRef("cookies.Cookie")}}</dt>
 <dd>HTTP cookieの情報を表す。</dd>
 <dt>{{WebExtAPIRef("cookies.CookieStore")}}</dt>
 <dd>ブラウザーの cookie store を表す。</dd>
 <dt>{{WebExtAPIRef("cookies.OnChangedCause")}}</dt>
 <dd>cookie の変更理由を表す。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{WebExtAPIRef("cookies.get()")}}</dt>
 <dd>1つの cookie の情報を取得する。</dd>
 <dt>{{WebExtAPIRef("cookies.getAll()")}}</dt>
 <dd>与えられたフィルターにマッチするすべての cookies を取得する。</dd>
 <dt>{{WebExtAPIRef("cookies.set()")}}</dt>
 <dd>与えられた cookie データ を cookie に設定する; おなじ cookies が存在すれば上書きする。</dd>
 <dt>{{WebExtAPIRef("cookies.remove()")}}</dt>
 <dd>指定した名前の cookie を削除する。</dd>
 <dt>{{WebExtAPIRef("cookies.getAllCookieStores()")}}</dt>
 <dd>すべての cookie stores を一覧する。</dd>
</dl>

<h2 id="Event_handlers" name="Event_handlers">イベントハンドラー</h2>

<dl>
 <dt>{{WebExtAPIRef("cookies.onChanged")}}</dt>
 <dd>cookie が設定、削除された時に発火する。</dd>
</dl>

<h2 id="Permissions" name="Permissions">パーミッション</h2>

<p>この API を使うには、アドオンは manifest で "cookies" の <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">API パーミッション</a> を指定せねばならず、同様に cookie がアクセスするあらゆるサイトの <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">host パーミッション</a>も要ります。アドオンは host パーミッションにマッチするURLから読み書きされる cookie を読み書きできます。例えば:</p>

<dl>
 <dt><code>http://*.example.com/</code></dt>
 <dd>
 <p>この host パーミッションを持つアドオンは下記ができます:</p>

 <ul>
  <li><code>www.example.com</code> のあらゆるパスの、非セキュア型 cookie を読む</li>
  <li>セキュア/非セキュア問わず、<code>www.example.com</code> のあらゆるパスの cookie に書き込む</li>
 </ul>

 <p><em>下記はできません</em>:</p>

 <ul>
  <li><code>www.example.com</code> のセキュア型cookie を読む</li>
 </ul>
 </dd>
 <dt><code>http://www.example.com/</code></dt>
 <dd>
 <p>この host パーミッションを持つアドオンは下記ができます:</p>

 <ul>
  <li><code>www.example.com</code> のあらゆるパスの、非セキュア型cookie を読む</li>
  <li><code>.example.com</code>のあらゆるパスの、非セキュア型cookie を読む</li>
  <li>セキュア/非セキュア問わず、<code>www.example.com</code>のあらゆるパスの cookie に書き込む</li>
  <li>セキュア/非セキュア問わず、<code>.example.com</code>のあらゆるパスの cookie に書き込む</li>
 </ul>

 <p><em>下記はできません</em>:</p>

 <ul>
  <li><code>foo.example.com</code> の cookie の読み書き</li>
  <li><code>foo.www.example.com</code> の cookie の読み書き</li>
 </ul>
 </dd>
 <dt><code>*://*.example.com/</code></dt>
 <dd>
 <p>この host パーミッションを持つアドオンは下記ができます:</p>

 <ul>
  <li>セキュア/非セキュア問わず、<code>www.example.com</code> のあらゆるパスの cookie の読み書き</li>
 </ul>
 </dd>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.cookies")}}</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/cookies"><code>chrome.cookies</code></a> API に基づいています。また、このドキュメントは <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json"><code>cookies.json</code></a> における Chromium のコードに基づいています。</p>

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
