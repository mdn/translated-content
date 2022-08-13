---
title: PublicKeyCredentialCreationOptions
slug: >-
  conflicting/Web/API/CredentialsContainer/create_18148a708412fc42b1affe2f08eab270
tags:
  - API
  - Dictionary
  - PublicKeyCredentialCreationOptions
  - Reference
  - Web Authentication API
  - WebAuthn
translation_of: Web/API/PublicKeyCredentialCreationOptions
original_slug: Web/API/PublicKeyCredentialCreationOptions
---
<div>{{APIRef("Web Authentication API")}}{{securecontext_header}}</div>

<p><code><strong>PublicKeyCredentialCreationOptions</strong></code> は <a href="/ja/docs/Web/API/Web_Authentication_API">Web Authentication API</a> の辞書で、 {{domxref("CredentialsContainer.create()","navigators.credentials.create()")}} で {{domxref("PublicKeyCredential")}} を生成するために渡されるオプションを保持します。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("PublicKeyCredentialCreationOptions.rp")}}</dt>
 <dd>資格情報の生成のリクエスト元を示すオブジェクトです。</dd>
 <dt>{{domxref("PublicKeyCredentialCreationOptions.user")}}</dt>
 <dd>資格情報が生成されるユーザーアカウントを示すオブジェクトです。</dd>
 <dt>{{domxref("PublicKeyCredentialCreationOptions.challenge")}}</dt>
 <dd>{{domxref("BufferSource")}} 型で、証明書利用者のサーバーによって生成され、<a href="https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication">暗号チャレンジ</a>として使用されるものです。この値は認証プロバイダーによって署名され、署名は {{domxref("AuthenticatorAssertionResponse.signature")}} の一部として送り返されます。</dd>
 <dt>{{domxref("PublicKeyCredentialCreationOptions.pubKeyCredParams")}}</dt>
 <dd>{{jsxref("Array")}} 型で、資格情報に要求される機能を指定する要素の配列です。暗号化署名の操作で使用される種類とアルゴリズムを含みます。この配列は設定の降順で並べ替えられます。</dd>
 <dt>{{domxref("PublicKeyCredentialCreationOptions.timeout")}} {{optional_inline}}</dt>
 <dd>数値のヒントで、取得操作が完了するまで呼び出し元が待機する時間をミリ秒単位で表します。このヒントは、ブラウザーによって上書きされる場合があります。</dd>
 <dt>{{domxref("PublicKeyCredentialCreationOptions.excludeCredentials")}} {{optional_inline}}</dt>
 <dd>{{jsxref("Array")}} で、既存の資格情報の記述子の配列です。これは、すでに資格情報を持つ既存のユーザーが新しい公開鍵資格情報を生成することを防ぐために、認証者によって提供されます。</dd>
 <dt>{{domxref("PublicKeyCredentialCreationOptions.authenticatorSelection")}} {{optional_inline}}</dt>
 <dd>生成操作で使用可能な認証機器を絞り込む条件をプロパティに持つオブジェクトです。</dd>
 <dt>{{domxref("PublicKeyCredentialCreationOptions.attestation")}} {{optional_inline}}</dt>
 <dd>{{jsxref("String")}} で、認証結果を (認証機器の元が) 送信する方法を示します。</dd>
 <dt>{{domxref("PublicKeyCredentialCreationOptions.extensions")}} {{optional_inline}}</dt>
 <dd>複数のクライアント拡張機能の入力を持つオブジェクトです。これらの拡張機能は、追加の処理を要求するために使用されます (例えば、従来の FIDO API 資格情報を処理、認証端末上でのテキストの要求など)。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p>なし。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js;">// some examples of COSE algorithms
const cose_alg_ECDSA_w_SHA256 = -7;
const cose_alg_ECDSA_w_SHA512 = -36;

var createCredentialOptions = {
    // Format of new credentials is publicKey
    publicKey: {
        // Relying Party
        rp: {
            name: "Example CORP",
            id: "login.example.com",
            icon: "https://login.example.com/login.ico"
        },
        // Cryptographic challenge from the server
        challenge: new Uint8Array(26),
        // User
        user: {
            id: new Uint8Array(16),
            name: "john.p.smith@example.com",
            displayName: "John P. Smith",
        },
        // Requested format of new keypair
        pubKeyCredParams: [{
            type: "public-key",
            alg: cose_alg_ECDSA_w_SHA256,
        }],
        // Timeout after 1 minute
        timeout: 60000,
        // Do not send the authenticator's origin attestation
        attestation: "none",
        extensions: {
          uvm: true,
          exts: true
        },
        // Filter out authenticators which are bound to the device
        authenticatorSelection:{
          authenticatorAttachment: "cross-platform",
          requireResidentKey: true,
          userVerification: "preferred"
        },
        // Exclude already existing credentials for the user
        excludeCredentials: [
          {
            type: "public-key",
            // the id for john.doe@example.com
            id  : new Uint8Array(26) /* this actually is given by the server */
          },
          {
            type: "public-key",
            // the id for john-doe@example.com
            id : new Uint8Array(26) /* another id */
          }
        ]
    }
};

// Create the new credential with the options above
navigator.credentials.create(createCredentialOptions)
  .then(function (newCredentialInfo) {
    var attestationResponse = newCredentialInfo.response;
    var clientExtensionsOutputs = newCredentialInfo.getClientExtensionsResults();

    // Send the response to the relying party server
    // it will verify the content and integrity before
    // creating a new credential

  }).catch(function (err) {
    // Deal with any error properly
    console.error(err);
  });;
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
   <td>{{SpecName('WebAuthn','#dictdef-publickeycredentialcreationoptions', 'PublicKeyCredentialCreationOptions dictionary')}}</td>
   <td>{{Spec2('WebAuthn')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.PublicKeyCredentialCreationOptions")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("PublicKeyRequestOptions")}}: 公開鍵を受け取る操作のオプションを提供する辞書</li>
</ul>
