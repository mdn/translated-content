---
title: AuthenticatorResponse
slug: Web/API/AuthenticatorResponse
tags:
  - API
  - Authentication
  - AuthenticatorResponse
  - Interface
  - Reference
  - Web Authentication API
  - WebAuthn
  - インターフェイス
translation_of: Web/API/AuthenticatorResponse
---
<div>{{APIRef("Web Authentication API")}}{{securecontext_header}}</div>

<p><code><strong>AuthenticatorResponse</strong></code> は <a href="/ja/docs/Web/API/Web_Authentication_API">Web Authentication API</a> のインターフェイスで、キーペアを信頼する暗号化ルートを提供するインターフェイスの基本インターフェイスです。子インターフェイスでは、チャレンジのオリジンなどのブラウザーからの情報を含み、 {{domxref("PublicKeyCredential.response")}} から返されることがあります。</p>

<h2 id="Interfaces_based_on_AuthenticatorResponse" name="Interfaces_based_on_AuthenticatorResponse">AuthenticatorResponse に基づくインターフェイス</h2>

<p>以下のインターフェイスは AuthenticatorResponse インターフェイスに基づいています。</p>

<div class="index">
<ul>
 <li>{{domxref("AuthenticatorAssertionResponse")}}</li>
 <li>{{domxref("AuthenticatorAttestationResponse")}}</li>
</ul>
</div>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("AuthenticatorResponse.clientDataJSON")}}</dt>
 <dd><a href="/ja/docs/Learn/JavaScript/Objects/JSON">JSON</a> 文字列が入った {{domxref("ArrayBuffer")}} で、 {{domxref("CredentialsContainer.create()")}} または {{domxref("CredentialsContainer.get()")}} に渡されたクライアントデータを表します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p>なし。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Getting_an_AuthenticatorAssertionResponse" name="Getting_an_AuthenticatorAssertionResponse">AuthenticatorAssertionResponse の取得</h3>

<pre class="brush: js">var options = {
  challenge: new Uint8Array([/* bytes sent from the server */])
};

navigator.credentials.get({ "publicKey": options })
    .then(function (credentialInfoAssertion) {
    var assertionResponse = credentialInfoAssertion.response;
    // send assertion response back to the server
    // to proceed with the control of the credential
}).catch(function (err) {
     console.error(err);
});

</pre>

<h3 id="Getting_an_AuthenticatorAttestationResponse" name="Getting_an_AuthenticatorAttestationResponse">AuthenticatorAttestationResponse の取得</h3>

<pre class="brush: js">var publicKey = {
  challenge: /* from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(16),
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
    var attestationResponse = newCredentialInfo.response;
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
   <td>{{SpecName('WebAuthn','#authenticatorresponse', 'AuthenticatorResponse interface')}}</td>
   <td>{{Spec2('WebAuthn')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.PublicKeyCredentialRequestOptions")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("AuthenticatorAttestationResponse")}}</li>
 <li>{{domxref("AuthenticatorAssertionResponse")}}</li>
 <li>{{domxref("PublicKeyCredential.response")}}</li>
</ul>
