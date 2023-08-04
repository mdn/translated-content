---
title: Crypto.getRandomValues()
slug: Web/API/Crypto/getRandomValues
---

{{APIRef("Web Crypto API")}}

**`Crypto.getRandomValues()`** メソッドは、暗号強度の強い乱数値を取得します。
引数で与えた配列は、すべて乱数で（暗号学的な意味でランダムに）埋められます。

十分な性能を保証するために、実装は真に乱数発生器を使用しているのではないものの、十分なエントロピーを有する*シード値*を用いた擬似乱数発生器を使用しています。
擬似乱数発生器アルゴリズム (PRNG) は、{{Glossary("user agent", "ユーザーエージェント")}}によって異なる可能性がありますが、暗号化の目的には適しています。

`getRandomValues()` は `Crypto` インターフェイスで安全なコンテキスト外から使用することができる唯一のメンバーです。

## 構文

```js
getRandomValues(typedArray);
```

### 引数

- `typedArray`
  - : 整数値ベースの {{jsxref("TypedArray")}} です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Uint8ClampedArray")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, {{jsxref("BigUint64Array")}} の何れかです（ただし `Float32Array` や `Float64Array` では**ありません**）。
    配列内のすべての要素は乱数で上書きされます。

### 返値

`typedArray` と同じ配列が渡されますが、その内容は新しく生成された乱数で置き換えられます。
`typedArray` はその場で変更され、コピーは行われないことに注意してください。

### 例外

- `QuotaExceededError` {{domxref("DOMException")}}
  - : `typedArray` の {{jsxref("TypedArray.byteLength", "byteLength")}} が 65,536 バイトを超えた場合に発生します。

## 使用上の注意

`getRandomValues()` を暗号鍵を生成するために使用しないでください。代わりに {{domxref("SubtleCrypto.generateKey", "generateKey()")}} メソッドを使用してください。
これにはいくつかの理由があります。例えば、 `getRandomValues()` が安全なコンテキストで動作することが保証されていないことなどです。

ウェブ暗号仕様書では、エントロピーの最小値は規定されていません。
その代わり、ユーザーエージェントは乱数を生成する際に、ユーザーエージェント自身に組み込まれた、よく定義された効率的な擬似乱数発生器を用いて、可能な限り最高のエントロピーを提供することが求められています。例えば、プラットフォーム固有の乱数関数、 Unix の `/dev/urandom` デバイス、または他のランダムまたは擬似乱数データのソースなど、外部の擬似乱数ソースから取得したシード値が用いられます。

## 例

```js
const array = new Uint32Array(10);
self.crypto.getRandomValues(array);

console.log("Your lucky numbers:");
for (const num of array) {
  console.log(num);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Crypto API](/ja/docs/Web/API/Web_Crypto_API)
- {{domxref("Crypto")}} オブジェクトを取得する {{domxref("Window.crypto")}}。
- {{jsxref("Math.random")}} 暗号学的に安全ではない乱数値。
