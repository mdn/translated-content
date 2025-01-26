---
title: "SubtleCrypto: encrypt() メソッド"
short-title: encrypt()
slug: Web/API/SubtleCrypto/encrypt
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`encrypt()`** は {{domxref("SubtleCrypto")}} インターフェイスのメソッドで、データを暗号化します。

引数として、暗号化する {{glossary("key")}} 、アルゴリズム固有の引数、暗号化するデータ（「平文」とも呼ばれます）を取ります。
暗号化されたデータ（「暗号文」とも呼ばれます）で履行される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
encrypt(algorithm, key, data)
```

### 引数

- `algorithm`

  - : 使用する[アルゴリズム](#対応しているアルゴリズム)と、必要に応じて追加の引数を指定するオブジェクトです。
    - [RSA-OAEP](#rsa-oaep) を使用するには、 {{domxref("RsaOaepParams")}} を渡してください。
    - [AES-CTR](#aes-ctr) を使用するには、 {{domxref("AesCtrParams")}} を渡してください。
    - [AES-CBC](#aes-cbc) を使用するには、 {{domxref("AesCbcParams")}} を渡してください。
    - [AES-GCM](#aes-gcm) を使用するには、 {{domxref("AesGcmParams")}} を渡してください。

- `key`
  - : 暗号化に使用するキーを格納した {{domxref("CryptoKey")}} です。
- `data`
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかで、暗号化するデータ（{{glossary("plaintext", "平文")}} とも呼ばれます）を格納します。

### 返値

「暗号文」を格納した {{jsxref("ArrayBuffer")}} で履行される {{jsxref("Promise")}} です。

### 例外

以下の例外が発生した場合、プロミスは拒否されます。

- `InvalidAccessError` {{domxref("DOMException")}}
  - : リクエストされた処理が指定された鍵に対して有効でない場合に発生します（無効な暗号化アルゴリズム、または指定した暗号化アルゴリズムに対して無効な鍵など）。
- `OperationError` {{domxref("DOMException")}}
  - : 処理固有の理由で処理に失敗した場合に発生します（アルゴリズム引数が不正なサイズであったり、 AES-GCM の平文が 2<sup>39</sup>−256 バイトよりも長いなど）。

## 対応しているアルゴリズム

ウェブ暗号 API は `encrypt()` と `decrypt()` の処理に対応する 4 つのアルゴリズムを提供します。

これらのアルゴリズムの 1 つである RSA-OAEP は{{Glossary("public-key cryptography", "公開鍵暗号システム")}}です。

ここにある他の3つの暗号化アルゴリズムはすべて{{Glossary("Symmetric-key cryptography", "対称鍵アルゴリズム")}}で、すべて同じ基盤である AES (Advanced Encryption Standard) をベースにしています。
これらの違いは{{Glossary("Block cipher mode of operation", "モード")}}です。
ウェブ暗号 API は 3 つの異なる AES モードに対応しています。

- CTR （カウンターモード）
- CBC （暗号化ブロックチェーン）
- GCM （ガロア/カウンターモード）

暗号文が攻撃者によって変更されていないことを調べるために、「認証された暗号化」を使用することを強く推奨します。
認証は、攻撃者がシステムに任意のメッセージの復号を依頼し、その結果を使用して秘密鍵に関する情報を推測することができる、_chosen-ciphertext_ 攻撃からの防御を支援します。
CTR モードと CBC モードに認証を追加することは可能ですが、既定値では提供されておらず、手動で実装するために些細な、しかし重大な間違いを犯す可能性があります。
GCM は組み込みの認証を提供し、そのため他の 2 種類の AES モードよりも推奨されることが多いです。

### RSA-OAEP

RSA-OAEP 公開鍵暗号システムは、 [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) で定義されています。

### AES-CTR

これは AES のカウンターモードの表現であり、 [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) で定義されています。

AES はブロック暗号であり、メッセージをブロックに分割し、一度に 1 ブロックずつ暗号化することを意味しています。
CTR モードでは、メッセージのブロックが暗号化されるたびに、データの余分なブロックが混合されます。この余分なブロックは「カウンターブロック」と呼ばれます。

指定されたカウンターブロックの値は、同じ鍵で複数回使用してはいけません。

- _n_ ブロックの長さのメッセージが指定された場合、ブロックごとに異なるカウンターブロックを使用しなければなりません。
- 複数のメッセージの暗号化に同じ鍵を用いる場合、すべてのメッセージのすべてのブロックに異なるカウンターブロックを使用しなければなりません。

通常これは、カウンターブロックの初期値を 2 つの連結部分に分割することで実現されます。

- [ノンス](https://ja.wikipedia.org/wiki/%E3%83%8E%E3%83%B3%E3%82%B9)（つまり、一度しか使用しない番号）。ブロックのノンスの部分はメッセージのどのブロックでも同じです。新しいメッセージが暗号化される時刻になると、新しいノンスが選べます。ノンスは秘密である必要はありませんが、同じ鍵で再利用してはいけません。
- カウンター。この部分はブロックが暗号化されるたびに増加します。

基本的には、ノンスはカウンターブロックが一つのメッセージから次のメッセージに再利用されないことを保証し、カウンターはカウンターブロックが単一のメッセージ内で再利用されないことを保証します。

> [!NOTE]
> 詳しくは [Appendix B of the NIST SP800-38A standard](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) を参照してください。

### AES-CBC

これは AES の暗号化ブロックチェーンモードにおける表現であり、 [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) で定義されています。

### AES-GCM

これは AES の ガロア/カウンターモードにおける表現であり、 [NIST SP800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final) で定義されています。

このモードと他のモードとの大きな違いの一つは、GCM が「認証された」モードであり、暗号文が攻撃者によって変更されていないことのチェックが含まれていることを意味しています。

## 例

> [!NOTE]
> GitHub の[動作例を試してみる](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html)ことができます。

### RSA-OAEP

このコードはテキストボックスのコンテンツを読み取り、暗号化のためにエンコードし、RSA-OAEPを使用して暗号化します。 [GitHub で完全なコードを確認してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-oaep #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(publicKey) {
  let encoded = getMessageEncoding();
  return window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    publicKey,
    encoded,
  );
}
```

### AES-CTR

このコードはテキストボックスのコンテンツを読み取り、暗号化のためにエンコードし、 CTR モードで AES を使用して暗号化します。
[GitHub で完全なコードを確認してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-ctr #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // counter will be needed for decryption
  counter = window.crypto.getRandomValues(new Uint8Array(16));
  return window.crypto.subtle.encrypt(
    {
      name: "AES-CTR",
      counter,
      length: 64,
    },
    key,
    encoded,
  );
}
```

```js
let iv = window.crypto.getRandomValues(new Uint8Array(16));
let key = window.crypto.getRandomValues(new Uint8Array(16));
let data = new Uint8Array(12345);
// crypto functions are wrapped in promises so we have to use await and make sure the function that
// contains this code is an async function
// encrypt function wants a cryptokey object
const key_encoded = await crypto.subtle.importKey(
  "raw",
  key.buffer,
  "AES-CTR",
  false,
  ["encrypt", "decrypt"],
);
const encrypted_content = await window.crypto.subtle.encrypt(
  {
    name: "AES-CTR",
    counter: iv,
    length: 128,
  },
  key_encoded,
  data,
);

// Uint8Array
console.log(encrypted_content);
```

### AES-CBC

このコードはテキストボックスのコンテンツを読み取り、暗号化のためにエンコードし、 CBC モードで AES を使用して暗号化します。
[GitHub で完全なコードを確認してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-cbc #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // iv will be needed for decryption
  iv = window.crypto.getRandomValues(new Uint8Array(16));
  return window.crypto.subtle.encrypt(
    {
      name: "AES-CBC",
      iv: iv,
    },
    key,
    encoded,
  );
}
```

### AES-GCM

このコードはテキストボックスのコンテンツを読み取り、暗号化のためにエンコードし、 GCM モードで AES を使用して暗号化します。
[GitHub で完全なコードを確認してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-gcm #message");
  const message = messageBox.value;
  const enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  const encoded = getMessageEncoding();
  // iv will be needed for decryption
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  return window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv },
    key,
    encoded,
  );
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SubtleCrypto.decrypt()")}}.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) は RSAOAEP を定義しています。
- [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) は CTR モードを定義しています。
- [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) は CBC モードを定義しています。
- [NIST SP800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final) は GCM モードを定義しています。
