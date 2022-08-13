---
title: PublicKeyCredentialCreationOptions.authenticatorSelection
slug: Web/API/CredentialsContainer/create
tags:
  - API
  - Property
  - PublicKeyCredentialCreationOptions
  - Reference
  - Web Authentication API
  - WebAuthn
translation_of: Web/API/PublicKeyCredentialCreationOptions/authenticatorSelection
original_slug: Web/API/PublicKeyCredentialCreationOptions/authenticatorSelection
---
<div>{{APIRef("Web Authentication API")}}{{securecontext_header}}</div>

<p><strong><code>authenticatorSelection</code></strong> は {{domxref("PublicKeyCredentialCreationOptions")}} 辞書の任意のプロパティであり、生成操作に使用される認証機器をフィルタリングする条件を指定するオブジェクトです。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>authenticatorSelection</em> = <em>publicKeyCredentialCreationOptions</em>.authenticatorSelection</pre>

<h3 id="Value" name="Value">値</h3>

<p>以下のプロパティを持つオブジェクトです。</p>

<dl>
 <dt><code>authenticatorAttachment</code>{{optional_inline}}</dt>
 <dd>文字列で、 "<code>platform</code>" または "<code>cross-platform</code>" のどちらかです。前者は認証機器がクライアントに接続されており、通常は取り外し不可能であることを示します。後者は機器が異なるプラットフォームをまたがって使用される可能性があることを示します (USB や NFC 端末など)。</dd>
 <dt><code>requireResidentKey</code>{{optional_inline}}</dt>
 <dd>論理値で、認証情報の秘密鍵を認証機器、クライアント、クライアント端末の中に格納する必要があるのか、どうかを示します。既定値は <code>false</code> です。</dd>
 <dt><code>userVerification</code>{{optional_inline}}</dt>
 <dd>A string qualifying how the user verification should be part of the authentication process. The values may be:
 <ul>
  <li>"<code>required</code>": user verification is required, the operation will fail if the {{domxref("AuthenticatorAttestationResponse","response","",1)}} does not have the UV flag (as part of the <code>authenticatorData</code> property of {{domxref("AuthenticatorAttestationResponse.attestationObject")}})</li>
  <li>"<code>preferred</code>": user verification is prefered, the operation will not fail if the {{domxref("AuthenticatorAttestationResponse","response","",1)}} does not have the UV flag (as part of the <code>authenticatorData</code> property of {{domxref("AuthenticatorAttestationResponse.attestationObject")}})</li>
  <li>"<code>discouraged</code>": user verification should not be employed as to minimize the user interaction during the process.</li>
 </ul>
 The default value is "<code>preferred</code>".</dd>
</dl>

<p>The authenticator used for the creation of the public key credential must comply with the requirements.</p>

<div class="blockIndicator note">
<p><strong>Note: </strong>See {{domxref("PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()")}} which resolves to <code>true</code> when a user-verifiying platform authenticator is available.</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">var publicKey = {
  authenticatorSelection:{
    authenticatorAttachment: "cross-platform",
    requireResidentKey: true,
    userVerification: "required"
  },
  challenge: new Uint8Array(26) /* this actually is given from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(26), /* To be changed for each user */
    name: "jdoe@example.com",
    displayName: "John Doe",
  },
  pubKeyCredParams: [ {
    type: "public-key",
    alg: -7 } ]
};

navigator.credentials.create({ publicKey })
  .then(function (newCredentialInfo) {
    // send attestation response and client extensions
    // to the server to proceed with the registration
    // of the credential
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
   <td>{{SpecName('WebAuthn','#dom-publickeycredentialcreationoptions-authenticatorselection','authenticatorSelection')}}</td>
   <td>{{Spec2('WebAuthn')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.PublicKeyCredentialCreationOptions.excludeCredentials")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()")}}</li>
 <li>{{domxref("AuthenticatorAssertionResponse.authenticatorData")}} whose structure contains the UV flag (please note that for the creation operation, {{domxref("AuthenticatorAttestationResponse.attestationObject")}} only contains a CBOR encoded version of this data and does not give an immediate access to the flag).</li>
</ul>
