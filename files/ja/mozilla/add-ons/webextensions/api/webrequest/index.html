---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest
---
<div>{{AddonSidebar}}</div>

<p>websocket が ws:// and wss:// としてリクエストするものも含めた、HTTP リクエスト作成のいろいろなステージでイベントリスナーを追加します。イベントリスナーはリクエストの詳細情報を受け取ったり、リクエストを編集、修正したりします。</p>

<p>それぞれのイベントはリクエストの特定ステージで発火します。イベントの典型的なシーケンスは次のようなものです:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13376/webRequest-flow.png" style="display: block; height: 680px; margin-left: auto; margin-right: auto; width: 624px;"></p>

<p>{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} はリクエストの期間中のあらゆる時に発火します。また注意点としてイベントシーケンスがこれと違うこともあります: 例えば、Firefox では、<a href="/ja/docs/Web/HTTP/Headers/Strict-Transport-Security">HSTS</a> 更新の時には、<code>onBeforeRequest</code> のすぐ後に <code>onBeforeRedirect</code> イベントが発火します。</p>

<p><code>onErrorOccurred</code> を除くすべてのイベントは <code>addListener()</code> への次の 3 つの引数を取ります:</p>

<ul>
 <li>リスナー自身</li>
 <li>{{WebExtAPIRef("webRequest.RequestFilter", "filter")}} オブジェクト、これを使って特定の URL や特定のリソースタイプにリクエストされた時だけに通知を受けられます。</li>
 <li>オプションの <code>extraInfoSpec</code> オブジェクト。これを使ってイベントに固有な追加の命令を渡せます。</li>
</ul>

<p>リスナー関数はリクエストの情報を含む <code>details</code> オブジェクトを渡されます。これにはリクエスト ID が入っていて、その ID でアドオンは単一のリクエストとイベントを関連付けられます。これはブラウザーセッションとアドオンのコンテキストごとにユニークです。リダイレクトと認証交換であっても、リクエストを通じて同じ値を保ちます。</p>

<p>あるホストに webRequest API を使うには、拡張機能は "webRequest" <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">API パーミッション</a> とそのホストの <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">host パーミッション</a> を持たねばなりません。「ブロッキング」機能を使うためには、拡張機能は "webRequestBlocking" API 権限も必要です。</p>

<p>ページに読み込まれるリソース (例えば画像、スクリプト、スタイルシート) を中断するには、拡張機能はそのメインページと同様にリソースの host パーミッションも持っている必要があります。例えば、"https://developer.mozilla.org" のページが "https://mdn.mozillademos.org" から画像を読み込む場合、画像のリクエストを中断するには拡張機能は両方の host パーミッションを持たねばなりません。</p>

<h2 id="Modifying_requests" name="Modifying_requests">リクエストを修正する</h2>

<p>いくつかのイベントでは、リクエストを修正できます。特に、次のことが可能:</p>

<ul>
 <li>次の API でリクエストをキャンセル:
  <ul>
   <li>{{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}</li>
   <li>{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}</li>
   <li>{{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}</li>
  </ul>
 </li>
 <li>次の API でリクエストをリダイレクト:
  <ul>
   <li>{{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}</li>
   <li>{{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}</li>
  </ul>
 </li>
 <li>次の API でリクエストヘッダーの修正:
  <ul>
   <li>{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}</li>
  </ul>
 </li>
 <li>次の API でレスポンスヘッダーの修正:
  <ul>
   <li>{{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}</li>
  </ul>
 </li>
 <li>次の API で認証クレデンシャルの提供:
  <ul>
   <li>{{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}</li>
  </ul>
 </li>
</ul>

<p>これを行うには、イベント <code>addListener()</code> の <code>extraInfoSpec</code> の引数に"blocking"の値のオプションを渡す必要があります。これによりリスナーが同期します。このリスナーでは {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} オブジェクトを返すことができ、このオブジェクトは加えた修正を指し示します: 例えば、送信したい修正後のリクエストヘッダーなど。</p>

<div class="blockIndicator warning">
<p><strong>Warning</strong>: Non-HTTP(S) protocols do not currently support <code>"blocking"</code> functionality, so modifying these requests is not available at this time. See {{bug(1475832)}} for more details.</p>
</div>

<h2 id="Accessing_security_information" name="Accessing_security_information">セキュリティ情報へのアクセス</h2>

<p>{{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} リスナー内では、{{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}} を呼ぶことで <a href="/ja/docs/Glossary/TLS">TLS</a> にアクセスできます。これを行うには、イベントの <code>addListener()</code> の <code>extraInfoSpec</code> 引数に"blocking" を渡す必要もあります。</p>

<p>TLS ハンドシェイクについて詳しく読むことができますが、修正したり、ブラウザーのトラストな決定を上書きできません。</p>

<h2 id="Modifying_responses" name="Modifying_responses">レスポンスを修正する</h2>

<p>{{WebExtAPIRef("webRequest.filterResponseData")}} にリクエスト ID を渡すことで得られる {{WebExtAPIRef("webRequest.StreamFilter")}} を使うと、ブラウザーが受け取った HTTP リクエストのレスポンス本文を検査したり修正したりすることができます。</p>

<p>そのためには、"webRequestBlocking" パーミッションと "webRequest" <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">API パーミッション</a> 、さらに修正したい対象のリクエスト URL にあてはまる <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">host permission </a>権限を得ている必要があります。</p>

<h2 id="Types" name="Types">型</h2>

<dl>
 <dt>{{WebExtAPIRef("webRequest.BlockingResponse")}}</dt>
 <dd>
 <p>この型のオブジェクトは、イベントリスナーによって <code>extraInfoSpec</code> 引数にて<code>"blocking"</code> をセットして返されます。<code>BlockingResponse</code> プロパティに特定の値をセットすることで、リスナーはネットワークリクエストを変更できます。</p>
 </dd>
 <dt>{{WebExtAPIRef("webRequest.CertificateInfo")}}</dt>
 <dd>単一の X.509 証明書を記述するオブジェクト。</dd>
 <dt>{{WebExtAPIRef("webRequest.HttpHeaders")}}</dt>
 <dd>HTTP ヘッダーの配列。それぞれのヘッダーは 2 つのプロパティを持つオブジェクトで表現されます: <code>name</code> と、<code>value</code> か <code>binaryValue</code> のいずれか。</dd>
 <dt>{{WebExtAPIRef("webRequest.RequestFilter")}}</dt>
 <dd>webRequest イベントに適用するフィルターを記述するオブジェクト。</dd>
 <dt>{{WebExtAPIRef("webRequest.ResourceType")}}</dt>
 <dd>ウェブリクエスト内で取得されるリソースの特定の種類を表す。</dd>
 <dt>{{WebExtAPIRef("webRequest.SecurityInfo")}}</dt>
 <dd>特定のウェブリクエストのセキュリティプロパティを記述するオブジェクト。</dd>
 <dt>{{WebExtAPIRef("webRequest.StreamFilter")}}</dt>
 <dd>HTTP レスポンスの受信中に、それをモニターしたり修正したりするのに使うオブジェクト。</dd>
 <dt>{{WebExtAPIRef("webRequest.UploadData")}}</dt>
 <dd>URL リクエスト内でアップロードされるデータを含む。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}</dt>
 <dd>10分間に <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/WebRequest/handlerBehaviorChanged" title="Suppose an add-on's job is to block web requests against a pattern, and the following scenario happens:"><code>handlerBehaviorChanged()</code></a></code> を最大限呼べる回数。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}</dt>
 <dd>このメソッドは、ページがブラウザーのインメモリーキャッシュ内にあるときに、イベントリスナーが確実に呼べるように使われます。</dd>
 <dt>{{WebExtAPIRef("webRequest.filterResponseData()")}}</dt>
 <dd>あるリクエストに対する {{WebExtAPIRef("webRequest.StreamFilter")}} オブジェクトを返します。</dd>
 <dt>{{WebExtAPIRef("webRequest.getSecurityInfo()")}}</dt>
 <dd>あるリクエストに対する <a href="/ja/docs/Glossary/TLS">TLS</a> コネクションの詳細情報を返します。</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<dl>
 <dt>{{WebExtAPIRef("webRequest.onBeforeRequest")}}</dt>
 <dd>リクエストがもうすぐなされて、ヘッダーは利用できないときに発火します。リクエストをキャンセルやリダイレクトしたい場合に、ここをリッスンします。</dd>
 <dt>{{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}</dt>
 <dd>HTTP データを送信する前だが、HTTP ヘッダーが利用できるときに発火します。HTTP リクエストとヘッダーを修正したい場合に、ここををリッスンします。</dd>
 <dt>{{WebExtAPIRef("webRequest.onSendHeaders")}}</dt>
 <dd>ヘッダー送信の直前に発火します。あなたや他の人のアドオンが <code>{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}</code> でヘッダーを修正した場合、ここでは修正後のバージョンが見えるでしょう。</dd>
 <dt>{{WebExtAPIRef("webRequest.onHeadersReceived")}}</dt>
 <dd>リクエストに関連する HTTP レスポンスヘッダーを受け取ったときに発火します。HTTP レスポンスヘッダーを修正するのにこのイベントを使用できます。</dd>
 <dt>{{WebExtAPIRef("webRequest.onAuthRequired")}}</dt>
 <dd>サーバーがクライアントに認証クレデンシャルを要求するときに発火します。このリスナーは何もしないか、リクエストをキャンセルするか、認証クレデンシャルを供給するかのいずれかです。</dd>
 <dt>{{WebExtAPIRef("webRequest.onResponseStarted")}}</dt>
 <dd>レスポンスボディの最初のバイトを受け取ったときに発火します。HTTP リクエストにとって、これはステータスラインとレスポンスヘッダーが利用可能ということになります。</dd>
 <dt>{{WebExtAPIRef("webRequest.onBeforeRedirect")}}</dt>
 <dd>サーバーが開始するリダイレクトが起きる直前に発火します。</dd>
 <dt>{{WebExtAPIRef("webRequest.onCompleted")}}</dt>
 <dd>リクエストが完了したときに発火します。</dd>
 <dt>{{WebExtAPIRef("webRequest.onErrorOccurred")}}</dt>
 <dd>エラーが起きたときに発火します。</dd>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("webextensions.api.webRequest")}}</p>

<p><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webRequest_incompatibilities">Extra notes on Chrome incompatibilities</a>.</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/webRequest"><code>chrome.webRequest</code></a> API. This documentation is derived from <a href="https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json"><code>web_request.json</code></a> in the Chromium code.</p>

<p>Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.</p>
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
