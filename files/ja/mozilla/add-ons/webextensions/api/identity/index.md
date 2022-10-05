---
title: identity
slug: Mozilla/Add-ons/WebExtensions/API/identity
---

{{AddonSidebar}}

identity API を使って [OAuth2](https://oauth.net/2/) の認証コードやアクセストークンを取得し、拡張機能が OAuth2 での認証 (Google や Facebook アカウントなど) をサポートするサービスからユーザーデータを取得できるようにします。

OAuth2 フローがどのように機能するかの詳細は、サービスプロバイダーごとに異なるため、特定のサービスプロバイダーにおいてこの API を使用するには、各サービスごとのドキュメントを参照する必要があります。例:

- <https://developers.google.com/identity/protocols/OAuth2UserAgent>
- <https://developer.github.com/v3/oauth/>

identity API は {{WebExtAPIRef("identity.launchWebAuthFlow()")}} 関数を提供します。この関数は、必要に応じて、サービスのユーザー認証を行い、また、拡張機能にデータへのアクセスを認可するかどうかをユーザーに確認します。処理が完了すると、プロバイダーによって、アクセストークンか認可コードのどちらかが取得されます。

そして、OAuth2 フローを実施して取得した検証済みアクセストークンを、HTTP リクエスト内で使用することで、拡張機能はユーザーから認可された範囲でデータにアクセスできるようになります。

この API を利用するためには、"identity" [API のパーミッション](/ja/Add-ons/WebExtensions/manifest.json/permissions#API_permissions)が必要です。

## セットアップ

拡張機能を公開する前に、いくつかの設定が必要です。

### リダイレクト URL を取得する

[リダイレクト URL](https://www.oauth.com/oauth2-servers/redirect-uris/) は、アクセストークンまたは認可コードを拡張機能に配布するための {{WebExtAPIRef("identity.launchWebAuthFlow()")}} のエンドポイントを意味します。

{{WebExtAPIRef("identity.getRedirectURL()")}}を呼び出すことでリダイレクト URL を取得できます。この関数は、アドオン ID からリダイレクト URL を生成するため、使用したい場合、[`browser_specific_settings`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) キーを使用してアドオン ID を明示的に設定する必要があるでしょう (設定しない場合、アドオンを[一時的にインストール](/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)するたびに、異なるリダイレクト URL を取得することになります)。

`identity.getRedirectURL()` によって返されるリダイレクト URL の利用が必須というわけではありません。独自の URL を指定することもできます。サービスがリダイレクトするものであれば何でもかまいません。ただし、ドメインは自分で管理しているものでなければいけません。

リダイレクト URL は 2 つの場面で利用されます:

- 拡張機能を OAuth2 クライアントとして登録するとき
- `identity.launchWebAuthFlow()` の `url` 引数に URL パラメーターとして渡すとき

### 拡張機能を登録する

サービスプロバイダー経由で OAuth2 を使用する前に、プロバイダーに対して、拡張機能を OAuth2 クライアントとして登録する必要があります。

サービスプロバイダーごとにやり方が異なることがありますが、一般的には、プロバイダーの ウェブサイトにおいて、拡張機能を登録することを意味します。この登録手順の中で、自身のリダイレクト URL を登録し、プロバイダーからクライアント ID (場合によっては、シークレットも) を受け取ります。そして、この両方を {{WebExtAPIRef("identity.launchWebAuthFlow()")}} に渡す必要があります。

## 関数

- {{WebExtAPIRef("identity.getRedirectURL()")}}
  - : リダイレクト URL を取得します。
- {{WebExtAPIRef("identity.launchWebAuthFlow()")}}
  - : ウェブ認証フローを開始します。

## ブラウザーの互換性

{{Compat("webextensions.api.identity")}}

{{WebExtExamples("h2")}}

> **メモ:** この API は Chromium の [`chrome.identity`](https://developer.chrome.com/extensions/identity) API に基づいています。Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います。

<pre class="hidden">// Copyright 2015 The Chromium Authors. All rights reserved.
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
