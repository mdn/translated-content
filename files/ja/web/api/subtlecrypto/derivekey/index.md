---
title: "SubtleCrypto: deriveKey() メソッド"
short-title: deriveKey()
slug: Web/API/SubtleCrypto/deriveKey
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

**`deriveKey()`** は {{domxref("SubtleCrypto")}} インターフェイスのメソッドで、マスター鍵から秘密鍵を導出するために使用することができます。

引数として、初期鍵素材、使用する導出アルゴリズム、導出する鍵に必要なプロパティを取ります。
これは新しい鍵を表す {{domxref("CryptoKey")}} オブジェクトで履行される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。

なお、対応している鍵導出アルゴリズムは、それぞれまったく異なる特性を持っており、適している状況もまったく異なります。
この詳細は、[対応しているアルゴリズム](#対応しているアルゴリズム)を参照してください。

## 構文

```js-nolint
deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)
```

### 引数

- `algorithm`
  - : 使用している[導出アルゴリズム](#対応しているアルゴリズム)を定義するオブジェクト。
    - [ECDH](#ecdh) を使用するには、 [`EcdhKeyDeriveParams`](/ja/docs/Web/API/EcdhKeyDeriveParams) オブジェクトを渡し、文字列 `ECDH` を `name` プロパティに指定してください。
    - [HKDF](#hkdf) を使用するには、 [`HkdfParams`](/ja/docs/Web/API/HkdfParams) オブジェクトを渡してください。
    - [PBKDF2](#pbkdf2) を使用するには、 [`Pbkdf2Params`](/ja/docs/Web/API/Pbkdf2Params) オブジェクトを渡してください。
    - [X25519](#x25519) を使用するには、 [`EcdhKeyDeriveParams`](/ja/docs/Web/API/EcdhKeyDeriveParams) オブジェクトを渡し、文字列 `X25519` を `name` プロパティに指定してください。
- `baseKey`
  - : 導出アルゴリズムへの入力を表す {{domxref("CryptoKey")}} です。
    `algorithm` が ECDH または X25519 である場合、これは ECDH または X25519 の秘密鍵となります。
    それ以外の場合、それは導出関数の初期キー素材になります。例えば、 PBKDF2 の場合、 [`SubtleCrypto.importKey()`](/ja/docs/Web/API/SubtleCrypto/importKey) を使用して `CryptoKey` としてインポートしたパスワードになります。
- `derivedKeyAlgorithm`
  - : 導出鍵を使用するアルゴリズムを定義するオブジェクトです。
    - [HMAC](/ja/docs/Web/API/SubtleCrypto/sign#hmac) の場合、 [`HmacKeyGenParams`](/ja/docs/Web/API/HmacKeyGenParams) オブジェクトを渡してください。
    - [AES-CTR](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)、[AES-CBC](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)、[AES-GCM](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)、[AES-KW](/ja/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) のいずれかの場合、 [`AesKeyGenParams`](/ja/docs/Web/API/AesKeyGenParams) オブジェクトを渡してください。
    - [HKDF](#hkdf) の場合、 [`HkdfParams`](/ja/docs/Web/API/HkdfParams) オブジェクトを渡してください。
    - [PBKDF2](#pbkdf2) の場合、 [`Pbkdf2Params`](/ja/docs/Web/API/Pbkdf2Params) オブジェクトを渡してください。
- `extractable`
  - : 論理値で、 {{domxref("SubtleCrypto.exportKey()")}} または {{domxref("SubtleCrypto.wrapKey()")}} を使用して鍵をエクスポートすることが可能かどうかを示します。
- `keyUsages`
  - : 導出鍵で何ができるかを示す {{jsxref("Array")}} です。
    鍵の使用は `derivedKeyAlgorithm` で設定するにはアルゴリズムで許可されていなければならないことに注意してください。
    配列の使用可能な値は以下の通りです。
    - `encrypt`: この鍵はメッセージの[暗号化](/ja/docs/Web/API/SubtleCrypto/encrypt)で使用される可能性があります。
    - `decrypt`: この鍵はメッセージの[復号](/ja/docs/Web/API/SubtleCrypto/decrypt)で使用される可能性があります。
    - `sign`: この鍵はメッセージの[署名](/ja/docs/Web/API/SubtleCrypto/sign)で使用される可能性があります。
    - `verify`: この鍵は署名の[検証](/ja/docs/Web/API/SubtleCrypto/verify)で使用される可能性があります。
    - `deriveKey`: この鍵は新しい鍵の導出で使用される可能性があります。
    - `deriveBits`: この鍵は[ビットの導出](/ja/docs/Web/API/SubtleCrypto/deriveBits)で使用される可能性があります。
    - `wrapKey`: この鍵は[鍵をラップする](/ja/docs/Web/API/SubtleCrypto/wrapKey)のに使用される可能性があります。
    - `unwrapKey`: この鍵は[鍵のラップを解除する](/ja/docs/Web/API/SubtleCrypto/unwrapKey)のに使用される可能性があります。

### 返値

{{domxref("CryptoKey")}} で履行されるプロミス ({{jsxref("Promise")}}) です。

### 例外

以下の例外が発生した場合、プロミスは拒否されます。

- `InvalidAccessError` {{domxref("DOMException")}}
  - : マスター鍵がリクエストされた導出アルゴリズムの鍵でない場合、またはその鍵の `keyUsages` 値に `deriveKey` が格納されていない場合に発生します。
- `NotSupported` {{domxref("DOMException")}}
  - : 不明なアルゴリズムや導出に適さないアルゴリズムを使用しようとした場合、 あるいは導出鍵にリクエストされたアルゴリズムが鍵長を定義していない場合に発生します。
- `SyntaxError` {{domxref("DOMException")}}
  - : `keyUsages` が空で、ラップされていない鍵の種類が `secret` または `private` である場合に発生します。

## 対応しているアルゴリズム

`deriveKey()` が対応しているアルゴリズムは、それぞれまったく異なる特性を持っており、適している状況もまったく異なります。

### 鍵導出アルゴリズム

### HKDF

HKDF は鍵導出関数です。
HKDF は、 ECDH 鍵合意処理の出力など、高エントロピーの入力から 鍵素材を導出するように設計されています。

パスワードのような相対的にエントロピーの低い入力から鍵を導出するようには設計されていません。
PBKDF2 を使用してください。

HKDF は [RFC 5869](https://datatracker.ietf.org/doc/html/rfc5869) で定義されています。

### PBKDF2

PBKDF2 は鍵導出関数でもあります。
これは、パスワードのような相対的にエントロピーの低い入力から鍵素材を導出するように設計されています。
PBKDF2 は、入力されたパスワードに HMAC のような機能とソルトを適用し、この処理を何度も繰り返すことで鍵素材を導出します。
この処理を繰り返す回数が多ければ多いほど、鍵の導出にはコンピューターが必要とする計算量が増えます。これにより、攻撃者がブルートフォース（総当たり）を使用して 辞書攻撃で鍵を発見することが難しくなります。

PBKDF2 は [RFC 2898](https://datatracker.ietf.org/doc/html/rfc2898) で定義されています。

### 鍵合意アルゴリズム

### ECDH

ECDH (Elliptic Curve Diffie-Hellman) は鍵合意アルゴリズムです。
ECDH の公開鍵と秘密鍵のペアをそれぞれ保有する二人が共有する秘密、すなわち、二人が共有し、他の人とは共有されない秘密を生成することができます。
この共有秘密を共通鍵として使用して通信を安全にしたり、（例えば HKDF アルゴリズムを使用して）そのような鍵を導出するための入力として使用したりすることができます。

ECDH は [RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090) で定義されています。

#### X25519

X25519 は、ECDH と同様の鍵合意アルゴリズムですが、 {{rfc("8032")}} で定義されている Edwards-Curve デジタル署名アルゴリズム （EdDSA） ファミリーの [Curve25519](https://en.wikipedia.org/wiki/Curve25519) 楕円曲線に基づいて構築されています。

Curve25519 アルゴリズムは暗号で広く使用されており、最も効率的で高速なアルゴリズムのひとつとされています。
ECDH で使用されている NIST （米国国立標準技術研究所） の曲線鍵交換アルゴリズムと比較すると、 Curve25519 は実装が簡単で、非政府機関が開発したアルゴリズムであるため、その設計上の決定事項が透明で公開されています。

X25519 は {{rfc("7748")}} で定義されています。

## 例

> [!NOTE]
> GitHub の[動作例を試してみる](https://mdn.github.io/dom-examples/web-crypto/derive-key/index.html)ことができます。

### ECDH: 共有秘密鍵の導出

この例では Alice と Bob がそれぞれ ECDH 鍵ペアを生成し、公開鍵を交換します。
そして `deriveKey()` を使って共有 AES 鍵を生成し、それを使用してメッセージを暗号化します。
[完全なコードは GitHub でご覧ください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/ecdh.js)

```js
/*
Derive an AES key, given:
- our ECDH private key
- their ECDH public key
*/
function deriveSecretKey(privateKey, publicKey) {
  return window.crypto.subtle.deriveKey(
    {
      name: "ECDH",
      public: publicKey,
    },
    privateKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"],
  );
}

async function agreeSharedSecretKey() {
  // Generate 2 ECDH key pairs: one for Alice and one for Bob
  // In more normal usage, they would generate their key pairs
  // separately and exchange public keys securely
  let aliceKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384",
    },
    false,
    ["deriveKey"],
  );

  let bobKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384",
    },
    false,
    ["deriveKey"],
  );

  // Alice then generates a secret key using her private key and Bob's public key.
  let aliceSecretKey = await deriveSecretKey(
    aliceKeyPair.privateKey,
    bobKeyPair.publicKey,
  );

  // Bob generates the same secret key using his private key and Alice's public key.
  let bobSecretKey = await deriveSecretKey(
    bobKeyPair.privateKey,
    aliceKeyPair.publicKey,
  );

  // Alice can then use her copy of the secret key to encrypt a message to Bob.
  let encryptButton = document.querySelector(".ecdh .encrypt-button");
  encryptButton.addEventListener("click", () => {
    encrypt(aliceSecretKey);
  });

  // Bob can use his copy to decrypt the message.
  let decryptButton = document.querySelector(".ecdh .decrypt-button");
  decryptButton.addEventListener("click", () => {
    decrypt(bobSecretKey);
  });
}
```

### X25519: 共有秘密鍵の導出

この例では、 Alice と Bob はそれぞれ X25519 鍵ペアを生成し、公開鍵を交換します。
次に、それぞれ `deriveKey()` を使用して、自分自身で生成した秘密鍵と相手の公開鍵から共有の AES 鍵を導出します。
この共有鍵を使用して、交換するメッセージを暗号化および復号化することができます。

#### HTML

最初に、Alice が送信するプレーンテキストメッセージを入力するために使用する HTML の {{HTMLElement("input")}} と、暗号化プロセスを開始するためにクリックするボタンを定義します。

```html
<label for="message">Plaintext message from Alice (Enter):</label>
<input
  type="text"
  id="message"
  name="message"
  size="50"
  value="The lion roars near dawn" />
<input id="encrypt-button" type="button" value="Encrypt" />
```

これに続いて、アリスが秘密鍵のコピーで平文を暗号化した後に暗号文を表示するための 2 つの要素、およびボブが秘密鍵のコピーで暗号文を復号化した後にテキストを表示するための 2 つの要素が続きます。

```html
<div id="results">
  <label for="encrypted">Encrypted (Alice)</label>
  <input
    type="text"
    id="encrypted"
    name="encrypted"
    size="30"
    value=""
    readonly />

  <label for="results">Decrypted (Bob)</label>
  <input
    type="text"
    id="decrypted"
    name="decrypted"
    size="50"
    value=""
    readonly />
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
input {
  display: block;
  margin: 5px 0px 5px 0px;
}
#results {
  margin-top: 20px;
}

#log {
  height: 150px;
  width: 90%;
  white-space: pre-wrap; /* wrap pre blocks */
  overflow-wrap: break-word; /* break on words */
  overflow-y: auto;
  padding: 0.5rem;
  border: 1px solid black;
  margin-top: 20px;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

以下のコードは、`deriveKey()'` の使用方法を示しています。
リモート側の X25519 公開鍵、ローカル側の X25519 秘密鍵を渡して、導出された鍵を AES-GCM 鍵とすることを指定します。
また、導出された鍵は抽出不可能であり、暗号化および復号化に適したものに設定します。

この関数は、コードのさらに下で、 Bob と Alice 用の共有鍵を作成するために使用します。

```js
/*
Derive an AES-GCM key, given:
- our X25519 private key
- their X25519 public key
*/
function deriveSecretKey(privateKey, publicKey) {
  return window.crypto.subtle.deriveKey(
    {
      name: "X25519",
      public: publicKey,
    },
    privateKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"],
  );
}
```

次に、Alice が平文メッセージを {{glossary("UTF-8")}} エンコードしてから暗号化するために使用する関数、および Bob がメッセージを復号してからデコードするために使用する関数を定義します。
これらの関数は、いずれも、共有 AES鍵、[初期化ベクトル](/ja/docs/Web/API/AesGcmParams#iv)、および暗号化または復号するテキストを引数として取ります。

暗号化と復号には同じ初期化ベクトルを使用する必要がありますが、これは秘密である必要はありません。そのため、通常は暗号化されたメッセージの横に並べて送信されます。
ただし、この例では実際にはメッセージを送信しないため、直接利用できるようにしています。

```js
async function encryptMessage(key, initializationVector, message) {
  try {
    const encoder = new TextEncoder();
    encodedMessage = encoder.encode(message);
    // iv will be needed for decryption
    return await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: initializationVector },
      key,
      encodedMessage,
    );
  } catch (e) {
    console.log(e);
    return `Encoding error`;
  }
}

async function decryptMessage(key, initializationVector, ciphertext) {
  try {
    const decryptedText = await window.crypto.subtle.decrypt(
      // The iv value must be the same as that used for encryption
      { name: "AES-GCM", iv: initializationVector },
      key,
      ciphertext,
    );

    const utf8Decoder = new TextDecoder();
    return utf8Decoder.decode(decryptedText);
  } catch (e) {
    console.log(e);
    return "Decryption error";
  }
}
```

読み込み時に、 `agreeSharedSecretKey()` 関数が呼び出され、 Alice と Bob のペアと共有鍵を生成します。
また、最初の `<input>` で定義されたテキストの暗号化と復号を起動する "Encrypt" ボタンのクリックハンドラーも追加します。
すべてのコードは `try...catch` ハンドラー内にあり、 X25519 アルゴリズムに対応していないために鍵の生成に失敗した場合を確実にログに記録できるようにしています。

```js
async function agreeSharedSecretKey() {
  try {
    // Generate 2 X25519 key pairs: one for Alice and one for Bob
    // In more normal usage, they would generate their key pairs
    // separately and exchange public keys securely
    const aliceKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveKey"],
    );

    log(
      `Created Alice's key pair: (algorithm: ${JSON.stringify(
        aliceKeyPair.privateKey.algorithm,
      )}, usages: ${aliceKeyPair.privateKey.usages})`,
    );

    const bobKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveKey"],
    );

    log(
      `Created Bob's key pair: (algorithm: ${JSON.stringify(
        bobKeyPair.privateKey.algorithm,
      )}, usages: ${bobKeyPair.privateKey.usages})`,
    );

    // Alice then generates a secret key using her private key and Bob's public key.
    const aliceSecretKey = await deriveSecretKey(
      aliceKeyPair.privateKey,
      bobKeyPair.publicKey,
    );

    log(
      `aliceSecretKey: ${aliceSecretKey.type} (algorithm: ${JSON.stringify(
        aliceSecretKey.algorithm,
      )}, usages: ${aliceSecretKey.usages}), `,
    );

    // Bob generates the same secret key using his private key and Alice's public key.
    const bobSecretKey = await deriveSecretKey(
      bobKeyPair.privateKey,
      aliceKeyPair.publicKey,
    );

    log(
      `bobSecretKey: ${bobSecretKey.type} (algorithm: ${JSON.stringify(
        bobSecretKey.algorithm,
      )}, usages: ${bobSecretKey.usages}), \n`,
    );

    // Get access for the encrypt button and the three inputs
    const encryptButton = document.querySelector("#encrypt-button");
    const messageInput = document.querySelector("#message");
    const encryptedInput = document.querySelector("#encrypted");
    const decryptedInput = document.querySelector("#decrypted");

    encryptButton.addEventListener("click", async () => {
      log(`Plaintext: ${messageInput.value}`);

      // Define the initialization vector used when encrypting and decrypting.
      // This must be regenerated for every message!
      const initializationVector = window.crypto.getRandomValues(
        new Uint8Array(8),
      );

      // Alice can use her copy of the shared key to encrypt the message.
      const encryptedMessage = await encryptMessage(
        aliceSecretKey,
        initializationVector,
        messageInput.value,
      );

      // We then display part of the encrypted buffer and log the encrypted message
      let buffer = new Uint8Array(encryptedMessage, 0, 5);
      encryptedInput.value = `${buffer}...[${encryptedMessage.byteLength} bytes total]`;

      log(
        `encryptedMessage: ${buffer}...[${encryptedMessage.byteLength} bytes total]`,
      );

      // Bob uses his shared secret key to decrypt the message.
      const decryptedCiphertext = await decryptMessage(
        bobSecretKey,
        initializationVector,
        encryptedMessage,
      );

      decryptedInput.value = decryptedCiphertext;
      log(`decryptedCiphertext: ${decryptedCiphertext}\n`);
    });
  } catch (e) {
    log(e);
  }
}

// Finally we call the method to set the example running.
agreeSharedSecretKey();
```

#### 結果

暗号化 ボタンを押すと、一番上の `<input>` 要素のテキストが暗号化され、暗号化された暗号文と復号された平文が次の 2 つの要素に表示されます。
下部のログ領域には、コードによって生成された鍵に関する情報が提供されます。

{{EmbedLiveSample("X25519 derived shared key", "100%", "400px")}}

### PBKDF2: パスワードから AES 鍵を導出

この例では、ユーザーにパスワードを要求し、それを使用して PBKDF2 を使って AES 鍵を導出し、その AES 鍵を使ってメッセージを暗号化します。
[完全なコードは GitHub でご覧ください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/pbkdf2.js)

```js
/*
deriveKeyメソッドの入力として使用する鍵素材を取得します。
鍵素材は、ユーザーから提供されたパスワードです。
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveBits", "deriveKey"],
  );
}

async function encrypt(plaintext, salt, iv) {
  const keyMaterial = await getKeyMaterial();
  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"],
  );

  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);
}
```

### HKDF: 共有の秘密から AES 鍵を導出

この例では、共有の秘密 `secret` を使用して、メッセージ `plainText` を暗号化します。この秘密鍵は、ECDH などのアルゴリズムを使用して導出されている可能性があります。
共有の秘密を直接使用する代わりに、 HKDF 機能のためのキー素材として使用し、 AES-GCM 暗号導出します。このキーを使用して、メッセージを暗号化します。
[GitHub でコードの全文をご覧ください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/hkdf.js)

```js
/*
  Given some key material and some random salt,
  derive an AES-GCM key using HKDF.
  */
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: "HKDF",
      salt: salt,
      info: new TextEncoder().encode("Encryption example"),
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"],
  );
}

async function encrypt(secret, plainText) {
  const message = {
    salt: window.crypto.getRandomValues(new Uint8Array(16)),
    iv: window.crypto.getRandomValues(new Uint8Array(12)),
  };

  const key = await getKey(secret, message.salt);

  message.ciphertext = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: message.iv,
    },
    key,
    plainText,
  );

  return message;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HKDF 仕様書](https://datatracker.ietf.org/doc/html/rfc5869).
- [NIST guidelines for password-based key derivation](https://csrc.nist.gov/pubs/sp/800/132/final).
- [Password storage cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Advice on choosing an iteration count for PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
