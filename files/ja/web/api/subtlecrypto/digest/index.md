---
title: SubtleCrypto.digest()
slug: Web/API/SubtleCrypto/digest
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} インターフェースの **`digest()`** メソッドは、指定されたデータの {{Glossary("digest", "ダイジェスト")}} を返します。ダイジェストとは、可変長の入力に由来する固定長の短い値です。暗号的ダイジェスト値は耐衝突性を示すため、同じダイジェスト値を持つ 2 つの異なる入力を見つけるのは非常に困難です。

引数として、使用するダイジェストアルゴリズムの識別子とダイジェスト値の元となるデータを受け取ります。ダイジェスト値で解決される {{jsxref("Promise")}} を返します。

## 構文

```js
const digest = crypto.subtle.digest(algorithm, data);
```

### 引数

- `algorithm` は、使用するダイジェストアルゴリズムを定義する {{domxref("DOMString")}} です。サポートされる値は次のとおりです:

  - `SHA-1` (暗号化アプリケーションではこれを使用しないでください)
  - `SHA-256`
  - `SHA-384`
  - `SHA-512`

- `data` は、ダイジェスト値の元となるデータを含む {{jsxref("ArrayBuffer")}} もしくは {{domxref("ArrayBufferView")}} です。

### 返値

- `digest` は {{jsxref("Promise")}} であり、ダイジェスト値を含む {{jsxref("ArrayBuffer")}} で解決されます。

## 対応しているアルゴリズム

ダイジェストアルゴリズムは [暗号ハッシュ関数](/ja/docs/Glossary/Cryptographic_hash_function) とも呼ばれ、任意の大きなデータブロックを固定サイズの出力 (通常は入力よりもはるかに短い出力) に変換します。暗号化にはさまざまな用途があります。

### SHA-1

このアルゴリズムは [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), section 6.1 で定義されており、160 bit 長の出力を生成します。

> **警告:** このアルゴリズムは現在脆弱であると見なされているため、暗号化アプリケーションには使用しないでください。

### SHA-256

このアルゴリズムは [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), section 6.2 で定義されており、256 bit 長の出力を生成します。

### SHA-384

このアルゴリズムは [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), section 6.5 で定義されており、384 bit 長の出力を生成します。

### SHA-512

このアルゴリズムは [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), section 6.4 で定義されており、512 bit 長の出力を生成します。

> **メモ:** キー付きハッシュメッセージ認証コード ([HMAC](/ja/docs/Glossary/HMAC)) の作成方法をここで探している場合は、代わりに [SubtleCrypto.sign()](/ja/docs/Web/API/SubtleCrypto/sign#HMAC) を使用する必要があります。

## 例

### 基本的な例

この例では、メッセージをエンコードし、 SHA-256 ダイジェスト値を計算して、ダイジェスト長を記録します。

```js
const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return hash;
}

const digestBuffer = await digestMessage(text);
console.log(digestBuffer.byteLength);
```

### ダイジェスト値を 16 進文字列に変換する

ダイジェストは`ArrayBuffer`として返されますが、比較および表示のために、ダイジェスト値は多くの場合 16 進文字列として表されます。 この例では、ダイジェストを計算し、`ArrayBuffer`を 16 進文字列に変換します。

```js
const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // (utf-8 の) Uint8Array にエンコードする
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // メッセージをハッシュする
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // バッファーをバイト列に変換する
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // バイト列を16進文字列に変換する
  return hashHex;
}

const digestHex = await digestMessage(text);
console.log(digestHex);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.SubtleCrypto.digest")}}

> **メモ:** Chrome 60 では、 TLS 接続でない場合に crypto.subtle を無効化する機能が追加されました。

## 関連情報

- [Chromium secure origins specification](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features)
- [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) SHA 系のダイジェストアルゴリズムを定義しています。
