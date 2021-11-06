---
title: PublicKeyCredentialCreationOptions.excludeCredentials
slug: conflicting/Web/API/CredentialsContainer/create
tags:
  - API
  - Property
  - PublicKeyCredentialCreationOptions
  - Reference
  - Web Authentication API
  - WebAuthn
  - プロパティ
translation_of: Web/API/PublicKeyCredentialCreationOptions/excludeCredentials
original_slug: Web/API/PublicKeyCredentialCreationOptions/excludeCredentials
---
<div>{{APIRef("Web Authentication API")}}{{securecontext_header}}</div>

<p><strong><code>excludeCredentials</code></strong> は {{domxref("PublicKeyCredentialCreationOptions")}} 辞書の任意のプロパティであり、指定されたユーザーに既に存在する公開鍵の記述子を要素に持つ {{jsxref("Array")}} オブジェクトです。これは既存のユーザーに新しい認証情報を生成することを避けたい場合、パーティのサーバーから提供されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>excludeCredentials </em>= <em>publicKeyCredentialCreationOptions</em>.excludeCredentials</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{jsxref("Array")}} で、以下のプロパティを持つオブジェクトを要素に持ちます。</p>

<dl>
 <dt><code>type</code></dt>
 <dd>文字列で、生成された公開鍵の認証情報の種類を表します。この文書の執筆時点 (2019年3月) では、 "<code>public-key</code>" のみが使用可能です。</dd>
 <dt><code>id</code></dt>
 <dd>{{domxref("BufferSource")}} で、既存の公開鍵の認証情報の識別子 ({{domxref("PublicKeyCredential.rawId")}}) に一致します。子の識別子は <code>PublicKeyCredential</code> インスタンスの生成時に生成されます。</dd>
 <dt><code>transports</code> {{optional_inline}}</dt>
 <dd>文字列の {{jsxref("Array")}} で、クライアントと認証機器の通信方法を記述します。使用可能な文字列は次の通りです。
 <ul>
  <li>"<code>usb</code>": 認証機器は取り外し可能な USB 接続で接続することができます</li>
  <li>"<code>nfc</code>": 認証機器は <a href="https://en.wikipedia.org/wiki/Near-field_communication">NFC (Near Field Communication)</a> を通して使用することができます</li>
  <li>"<code>ble</code>": 認証機器は <a href="https://en.wikipedia.org/wiki/Bluetooth_Low_Energy">BLE (Bluetooth Low Energy)</a> を通して使用することができます</li>
  <li>"<code>internal</code>": 認証機器はクライアント端末の中に埋め込まれています (取り外せません)。</li>
 </ul>
 </dd>
</dl>

<p>認証機器がすでにそのような公開鍵認証情報の一つを含んでいる場合、クライアントは {{domxref("DOMException")}} を発生さえるか、ユーザーに新しい認証情報を生成したいかを確認するかします。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">var publicKey = {
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
  ],
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
   <td>{{SpecName('WebAuthn','#dom-publickeycredentialcreationoptions-excludecredentials','excludeCredentials')}}</td>
   <td>{{Spec2('WebAuthn')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.PublicKeyCredentialCreationOptions.excludeCredentials")}}</p>
