---
title: PublicKeyCredential.getClientExtensionResults()
slug: Web/API/PublicKeyCredential/getClientExtensionResults
tags:
  - API
  - Method
  - PublicKeyCredential
  - Reference
  - Web Authentication API
  - WebAuthn
translation_of: Web/API/PublicKeyCredential/getClientExtensionResults
---
<div>{{APIRef("Web Authentication API")}}{{securecontext_header}}</div>

<p><strong><code>getClientExtensionResults()</code></strong> は {{domxref("PublicKeyCredential")}} インターフェイスのメソッドであり、 {{jsxref("ArrayBuffer")}} の形で拡張機能の識別子と、クライアントが処理した後の結果の対応表を返します。</p>

<p><code>PublicKeyCredential</code> の生成または読み出し中 (それぞれ {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} および {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} で実施) に、それぞれ {{domxref("PublicKeyCredentialCreationOptions.extensions")}} および {{domxref("PublicKeyCredentialRequestOptions.extensions")}} によって与えられる別々の拡張機能のために、クライアントが処理する「専用の」処理を持つことができます。</p>

<div class="blockIndicator note">
<p><strong>メモ:</strong> 拡張機能はオプションであり、ブラウザーによって認識する拡張機能は異なります。すべての拡張機能はクライアントが処理することはオプションです。ブラウザーが指定された拡張機能を知らない場合、失敗としてはいけません。</p>
</div>

<div class="note">
<p><strong>メモ:</strong> このプロパティは最上位のコンテキストでしか使えない可能性があり、例えば {{HTMLElement("iframe")}} の中では利用できません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">mapArrayBuffer = publicKeyCredential.getClientExtensionResults()</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{jsxref("ArrayBuffer")}} の形で、クライアントが様々な拡張機能を処理した結果です。拡張子の識別子と、クライアントが処理した後の結果の対応表を返します。このオブジェクトには拡張機能の識別子と処理の結果の対応表が入っています。</p>

<div class="blockIndicator warning">
<p><strong>警告!</strong> 2019年3月時点で、 <code>appId</code> ({{domxref("PublicKeyCredentialRequestOptions.extensions")}} の生成の間に使用される) のみ、 <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=818303">Chrome</a> および <a href="https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/windows-integration/web-authentication#api-surface">Edge</a> が対応しています。 Firefox は<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1370728">どの拡張機能にも対応していない</a>ようです。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">var publicKey = {
  // Here are the extensions (as "inputs")
  extensions: {
    "loc": true, // This extension has been defined to include location information in attestation
    "uvi": true  // user verification index: how the user was verified
  },
  challenge: new Uint8Array(16) /* from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(16) /* from the server */,
    name: "jdoe@example.com",
    displayName: "John Doe"
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7
    }
  ]
};

navigator.credentials.create({ publicKey })
  .then(function (newCredentialInfo) {
    var myBuffer = newCredentialInfo.getClientExtensionResults();
    // myBuffer will contain the result of any of the processing of the "loc" and "uvi" extensions
  }).catch(function (err) {
     console.error(err);
  });</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('WebAuthn','#dom-publickeycredential-getclientextensionresults','getClientExtensionResults()')}}</td>
   <td>{{Spec2('WebAuthn')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.PublicKeyCredential.getClientExtensionResults")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.w3.org/TR/webauthn/#sctn-defined-extensions">現在定義されている拡張機能の一覧</a></li>
 <li>{{domxref("AuthenticatorAssertionResponse.authenticatorData")}}: 認証者の実行処理の結果が入る</li>
 <li>{{domxref("PublicKeyCredentialCreationOptions.extensions")}}: 認証情報を作成するためのクライアント拡張機能の入力値が入る</li>
 <li>{{domxref("PublicKeyCredentialRequestOptions.extensions")}}: 認証情報を受け取るクライアント拡張機能の入力値が入る</li>
</ul>
