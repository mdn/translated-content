---
title: "SubtleCrypto: digest() メソッド"
short-title: digest()
slug: Web/API/SubtleCrypto/digest
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`digest()`** は {{domxref("SubtleCrypto")}} インターフェイスのメソッドで、指定されたデータの{{Glossary("digest", "ダイジェスト")}}を返します。ダイジェストとは、可変長の入力に由来する固定長の短い値です。暗号的ダイジェスト値は耐衝突性を示すため、同じダイジェスト値を持つ 2 つの異なる入力を見つけるのは非常に困難です。

引数として、使用するダイジェストアルゴリズムの識別子とダイジェスト値の元となるデータを受け取ります。ダイジェスト値で解決される {{jsxref("Promise")}} を返します。

この API はストリーミング入力に対応していないことに注意してください。入力全体をメモリーに読み込んでから、ダイジェスト関数に渡す必要があります。

## 構文

```js-nolint
digest(algorithm, data)
```

### 引数

- `algorithm`
  - : 文字列で、使用するダイジェストアルゴリズムを定義します。対応している値は次のとおりです。
    - `"SHA-1"`（暗号化アプリケーションでは使用しないでください）
    - `"SHA-256"`
    - `"SHA-384"`
    - `"SHA-512"`.
- `data`
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかのオブジェクトで、ダイジェスト値の元となるデータが入ります。

### 返値

{{jsxref("Promise")}} で、ダイジェスト値を含む {{jsxref("ArrayBuffer")}} で履行されます。

## 対応しているアルゴリズム

ダイジェストアルゴリズムは[暗号ハッシュ関数](/ja/docs/Glossary/Hash_function)とも呼ばれ、任意の大きなデータブロックを固定サイズの出力（通常は入力よりもはるかに短い出力）に変換します。暗号化にはさまざまな用途があります。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">アルゴリズム</th>
      <th scope="col">出力長（ビット数）</th>
      <th scope="col">ブロックサイズ（ビット数）</th>
      <th scope="col">仕様書</th>
    </tr>
    <tr>
      <th scope="row">SHA-1</th>
      <td>160</td>
      <td>512</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        >, section 6.1
      </td>
    </tr>
    <tr>
      <th scope="row">SHA-256</th>
      <td>256</td>
      <td>512</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        >, section 6.2
      </td>
    </tr>
    <tr>
      <th scope="row">SHA-384</th>
      <td>384</td>
      <td>1024</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        >, section 6.5
      </td>
    </tr>
    <tr>
      <th scope="row">SHA-512</th>
      <td>512</td>
      <td>1024</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        >, section 6.4
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> SHA-1 は現在脆弱であると見なされているため、暗号化アプリケーションには使用しないでください。

> [!NOTE]
> キー付きハッシュメッセージ認証コード ([HMAC](/ja/docs/Glossary/HMAC)) の作成方法をここで探している場合は、代わりに [SubtleCrypto.sign()](/ja/docs/Web/API/SubtleCrypto/sign#hmac) を使用する必要があります。

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

digestMessage(text).then((digestBuffer) =>
  console.log(digestBuffer.byteLength),
);
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
    .join(""); // バイト列を 16 進文字列に変換する
  return hashHex;
}

digestMessage(text).then((digestHex) => console.log(digestHex));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SubtleCrypto の暗号以外の使用法](/ja/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [Chromium secure origins specification](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/)
- [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) SHA 系のダイジェストアルゴリズムを定義しています。
