---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
tags:
  - API
  - Dictionary
  - PublicKeyCredentialRequestOptions
  - Reference
  - Web Authentication API
  - WebAuthn
  - 辞書
translation_of: Web/API/PublicKeyCredentialRequestOptions
---
<div>{{APIRef("Web Authentication API")}}{{securecontext_header}}</div>

<p><code><strong>PublicKeyCredentialRequestOptions</strong></code> は <a href="/ja/docs/Web/API/Web_Authentication_API">Web Authentication API</a> の辞書で、 {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} で指定された {{domxref("PublicKeyCredential")}} を読み取るために渡されるオプションを保持します。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("PublicKeyCredentialRequestOptions.challenge")}}</dt>
 <dd>{{domxref("BufferSource")}} 型で、証明書利用者のサーバーによって生成され、<a href="https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication">暗号チャレンジ</a>として使用されるものです。この値は認証プロバイダーによって署名され、署名は {{domxref("AuthenticatorAssertionResponse.signature")}} の一部として送り返されます。</dd>
 <dt>{{domxref("PublicKeyCredentialRequestOptions.timeout")}} {{optional_inline}}</dt>
 <dd>数値のヒントで、取得操作が完了するまで呼び出し元が待機する時間をミリ秒単位で表します。このヒントは、ブラウザーによって上書きされる場合があります。</dd>
 <dt>{{domxref("PublicKeyCredentialRequestOptions.rpId")}} {{optional_inline}}</dt>
 <dd>{{domxref("USVString")}} で、信頼する利用者の識別子 (例: <code>"login.example.org"</code>) を示します。このオプションが指定されていない場合、クライアントは現在のオリジンのドメインを使用します。</dd>
 <dt>{{domxref("PublicKeyCredentialRequestOptions.allowCredentials")}} {{optional_inline}}</dt>
 <dd>{{jsxref("Array")}} 型で、取得で利用できる既存の資格情報を制限する資格情報記述子の配列です。</dd>
 <dt>{{domxref("PublicKeyCredentialRequestOptions.userVerification")}} {{optional_inline}}</dt>
 <dd>文字列で、認証プロセスにどのようにユーザー認証を組み込むかを説明します。</dd>
 <dt>{{domxref("PublicKeyCredentialRequestOptions.extensions")}} {{optional_inline}}</dt>
 <dd>複数のクライアント拡張機能の入力を持つオブジェクトです。これらの拡張機能は、追加の処理を要求するために使用されます (例えば、従来の FIDO API 資格情報を処理、認証端末上でのテキストの要求など)。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p>なし。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">var options = {
  challenge: new Uint8Array([/* bytes sent from the server */]),
  rpId: "example.com" /* will only work if the current domain
                         is something like foo.example.com */
  userVerification: "preferred",
  timeout: 60000,     // Wait for a minute
  allowCredentials: [
    {
      transports: "usb",
      type: "public-key",
      id: new Uint8Array(26) // actually provided by the server
    },
    {
      transports: "internal",
      type: "public-key",
      id: new Uint8Array(26) // actually provided by the server
    }
  ],
  extensions: {
    uvm: true,  // RP wants to know how the user was verified
    loc: false,
    txAuthSimple: "Could you please verify yourself?"
  }
};

navigator.credentials.get({ "publicKey": options })
    .then(function (credentialInfoAssertion) {
    // send assertion response back to the server
    // to proceed with the control of the credential
}).catch(function (err) {
     console.error(err);
});

</pre>

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
   <td>{{SpecName('WebAuthn','#dictdef-publickeycredentialrequestoptions', 'PublicKeyCredentialRequestOptions dictionary')}}</td>
   <td>{{Spec2('WebAuthn')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.PublicKeyCredentialRequestOptions")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("PublicKeyCredentialCreationOptions")}}: the dictionary which provides option for the public key credential creation</li>
</ul>
