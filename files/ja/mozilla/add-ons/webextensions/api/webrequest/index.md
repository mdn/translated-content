---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

websocket が `ws://` や `wss://` としてリクエストするものも含めた、HTTP リクエスト作成のいろいろなステージでイベントリスナーを追加します。イベントリスナーはリクエストの詳細情報を受け取ったり、リクエストを編集、修正したりします。

それぞれのイベントはリクエストの特定ステージで発生します。イベントの典型的なシーケンスは次のようなものです。

![リクエストの順序は、onBeforeRequest、onBeforeSendHeader、onSendHeaders、onHeadersReceived、onResponseStarted、onCompleted の順です。onHeadersReceived は、onBeforeRedirect および onAuthRequired を発生させる可能性があります。onHeadersReceived によって発生するイベントは、onBeforeRequest の開始時点から始まります。onAuthRequired によって発生するイベントは、onBeforeSendHeader から始まります。](webrequest-flow.png)

ただし、これらのイベントのすべてが拡張機能によって監視されるとは限りません。例えば、リダイレクト先がイベントの `filter.urls` と一致しない場合、`onBeforeRedirect` の後に `onBeforeRequest` が続かないことがあります。これは、フィルター内での URL の定義が狭すぎる場合や、`data:` URL へのリダイレクトなど、拡張機能ではリダイレクト先を監視できない場合などが考えられます。

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} はリクエストの期間中のあらゆる時に発生します。また注意点としてイベントシーケンスがこれと異なることもあります。例えば、Firefox では、[HSTS](/ja/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) 更新の時には、`onBeforeRequest` のすぐ後に `onBeforeRedirect` イベントが発生します。`onErrorOccurred` は [Firefox トラッキング防止](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)がリクエストをブロックした場合も発生します。

`onErrorOccurred` を除くすべてのイベントは `addListener()` への次の 3 つの引数を取ります。

- リスナー自身
- {{WebExtAPIRef("webRequest.RequestFilter", "filter")}} オブジェクト、これを使って特定の URL や特定のリソースタイプにリクエストされた時だけに通知を受けられます。
- オプションの `extraInfoSpec` オブジェクト。これを使ってイベントに固有な追加の命令を渡せます。

リスナー関数はリクエストの情報を含む `details` オブジェクトを渡されます。これにはリクエスト ID が入っていて、その ID でアドオンは単一のリクエストとイベントを関連付けられます。これはブラウザーセッションとアドオンのコンテキストごとにユニークです。リダイレクトと認証交換であっても、リクエストを通じて同じ値を保ちます。

あるホストに webRequest API を使うには、拡張機能は "webRequest" [API 権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) とそのホストの [host 権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) を持たねばなりません。「ブロッキング」機能を使うためには、拡張機能は "webRequestBlocking" API 権限も必要です。

ページに読み込まれるリソース (例えば画像、スクリプト、スタイルシート) を中断するには、拡張機能はそのメインページと同様にリソースの host 権限も持っている必要があります。例えば、"https\://developer.mozilla.org" のページが "https\://mdn.mozillademos.org" から画像を読み込む場合、画像のリクエストを中断するには拡張機能は両方の host 権限を持たねばなりません。

## リクエストを修正する

いくつかのイベントでは、リクエストを修正できます。特に、次のことが可能:

- 次の API でリクエストをキャンセル:
  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

- 次の API でリクエストをリダイレクト:
  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- 次の API でリクエストヘッダーの修正:
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}

- 次の API でレスポンスヘッダーの修正:
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- 次の API で認証資格情報の提供:
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

これを行うには、イベント `addListener()` の `extraInfoSpec` の引数に"blocking"の値のオプションを渡す必要があります。これによりリスナーが同期します。

このリスナーでは {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} オブジェクトを返すことがあります。これは行うことが必要な変更を示します。例えば、送信したい修正後のリクエストヘッダーなどです。

## ブラウザー起動時のリクエスト

`"blocking"` オプションを指定してリスナーを登録し、かつその登録が拡張機能の起動中に実行された場合、ブラウザーの起動中にそのリスナーに一致するリクエストが発生すると、拡張機能は早期に起動します。これにより、拡張機能はブラウザーの起動時にそのリクエストを監視することができます。これらの手順を実行しない場合、起動時に発生したリクエストを見逃してしまう可能性があります。

## 投機的リクエスト

ブラウザーは、URI へのリクエストがまもなく行われる可能性があると判断した場合、投機的接続を確立することがあります。この種の接続では有効なタブ情報が提供されないため、`tabId`、`frameId`、`parentFrameId` などのリクエストの詳細は不正確になります。これらの接続の {{WebExtAPIRef("webRequest.ResourceType")}} は `speculative` となります。

## セキュリティ情報へのアクセス

{{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} リスナー内では、{{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}} を呼ぶことで [TLS](/ja/docs/Glossary/TLS) にアクセスできます。これを行うには、イベントの `addListener()` の `extraInfoSpec` 引数に"blocking" を渡す必要もあります。

TLS ハンドシェイクについて詳しく読むことができますが、修正したり、ブラウザーのトラストな決定を上書きできません。

## レスポンスの修正

{{WebExtAPIRef("webRequest.filterResponseData")}} にリクエスト ID を渡すことで得られる {{WebExtAPIRef("webRequest.StreamFilter")}} を使うと、ブラウザーが受け取った HTTP リクエストのレスポンス本文を検査したり修正したりすることができます。

そのためには、"webRequestBlocking" 権限と "webRequest" [API 権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) 、さらに修正したい対象のリクエスト URL にあてはまる [host 権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)を得ている必要があります。

## 型

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : この型のオブジェクトは、イベントリスナーによって `extraInfoSpec` 引数にて `"blocking"` をセットして返されます。`BlockingResponse` プロパティに特定の値をセットすることで、リスナーはネットワークリクエストを変更できます。
- {{WebExtAPIRef("webRequest.CertificateInfo")}}
  - : 単一の X.509 証明書を記述するオブジェクト。
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : HTTP ヘッダーの配列。それぞれのヘッダーは 2 つのプロパティを持つオブジェクトで表現されます: `name` と、`value` か `binaryValue` のいずれか。
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : webRequest イベントに適用するフィルターを記述するオブジェクト。
- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : ウェブリクエスト内で取得されるリソースの特定の種類を表す。
- {{WebExtAPIRef("webRequest.SecurityInfo")}}
  - : 特定のウェブリクエストのセキュリティプロパティを記述するオブジェクト。
- {{WebExtAPIRef("webRequest.StreamFilter")}}
  - : HTTP レスポンスの受信中に、それをモニターしたり修正したりするのに使うオブジェクト。
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : URL リクエスト内でアップロードされるデータを含む。

## プロパティ

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : 10 分間に {{WebExtAPIRef("WebRequest.handlerBehaviorChanged", "handlerBehaviorChanged()")}} を最大限呼べる回数。

## メソッド

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : このメソッドは、ページがブラウザーのインメモリーキャッシュ内にあるときに、イベントリスナーが確実に呼べるように使われます。
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : あるリクエストに対する {{WebExtAPIRef("webRequest.StreamFilter")}} オブジェクトを返します。
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : あるリクエストに対する [TLS](/ja/docs/Glossary/TLS) コネクションの詳細情報を返します。

## イベント

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : リクエストがもうすぐなされて、ヘッダーは利用できないときに発生します。リクエストをキャンセルやリダイレクトしたい場合に、ここをリッスンします。
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : HTTP データを送信する前だが、HTTP ヘッダーが利用できるときに発生します。HTTP リクエストとヘッダーを修正したい場合に、ここをリッスンします。
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : ヘッダー送信の直前に発生します。あなたや他の人のアドオンが `{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}` でヘッダーを修正した場合、ここでは修正後のバージョンが見えるでしょう。
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : リクエストに関連する HTTP レスポンスヘッダーを受け取ったときに発生します。HTTP レスポンスヘッダーを修正するのにこのイベントを使用できます。
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : サーバーがクライアントに認証資格情報を要求するときに発生します。このリスナーは何もしないか、リクエストをキャンセルするか、認証資格情報を供給するかのいずれかです。
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : レスポンスボディの最初のバイトを受け取ったときに発生します。HTTP リクエストにとって、これはステータスラインとレスポンスヘッダーが利用可能ということになります。
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : サーバーが開始するリダイレクトが起きる直前に発生します。
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : リクエストが完了したときに発生します。
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : エラーが起きたときに発生します。

{{WebExtExamples("h2")}}

## ブラウザーの互換性

{{Compat}}

[Chrome との非互換性に関するメモ](/ja/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webrequest_api).

> [!NOTE]
> この API は、Chromium の [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest) API を参照しています。このドキュメントは、Chromium のソースコードにある [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) を基に作成されています。

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
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
-->
