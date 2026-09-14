---
title: Uint8Array.prototype.toBase64()
short-title: toBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/toBase64
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toBase64()`** は {{jsxref("Uint8Array")}} インスタンスのメソッドで、この `Uint8Array` オブジェクトのデータに基づいて、 [base64](/ja/docs/Glossary/Base64) でエンコードされた文字列を返します。

このメソッドは、 {{domxref("Window.btoa()")}} よりも推奨されます。特に、オブジェクトを格納する `Uint8Array` がすでに存在する場合、最初に文字列に変換する必要がないためです。

## 構文

```js-nolint
toBase64()
toBase64(options)
```

### 引数

- `options` {{optional_inline}}
  - : base64 文字列の書式をカスタマイズするオブジェクトです。次のプロパティを設定することができます。
    - `alphabet` {{optional_inline}}
      - : 使用する base64 文字集合を指定する文字列。次のいずれかになります。
        - `"base64"` （既定値）
          - : 標準の base64 文字集合（`+` および `/` を使用）で入力をエンコードします。
        - `"base64url"`
          - : 標準の base64 文字集合（`-` および `_` を使用）で入力をエンコードします。
    - `omitPadding` {{optional_inline}}
      - : Base64 文字列の終わりのパディング文字 (`=`) を除外するかどうかを指定する論理値です。既定は `false` です。

### 返値

`Uint8Array` のデータを表す base64 エンコードされた文字列です。

### 例外

- {{jsxref("TypeError")}}
  - : 次のいずれかの場合に発生します。
    - `options` オブジェクトはオブジェクトでも `undefined` でもない場合。
    - `options.alphabet` が期待される値ではないか、 `undefined` である場合。

## 例

### バイナリーデータのエンコード

この例では、既定の `alphabet` および `omitPadding` オプションを使用して、`Uint8Array` のデータを base64 文字列にエンコードしています。

```js
const uint8Array = new Uint8Array([29, 233, 101, 161]);
console.log(uint8Array.toBase64()); // "HelloQ=="
```

### パディングなしのデータのエンコード

```js
const uint8Array = new Uint8Array([29, 233, 101, 161]);
console.log(uint8Array.toBase64({ omitPadding: true })); // "HelloQ"
```

### URL 対応文字でデータをエンコード

この例では、URL 対応文字を使用して base64 エンコードされた文字列を {{domxref("URLSearchParams")}} オブジェクトに格納しています。

```js
const uint8Array = new Uint8Array([46, 139, 222, 255, 42, 46]);
const base64 = uint8Array.toBase64({ alphabet: "base64url" });
const params = new URLSearchParams();
params.set("data", base64);
console.log(params.toString()); // "data=Love_you"
```

### ストリームエンコード

この例は、[元の提案](https://github.com/tc39/proposal-arraybuffer-base64/blob/main/stream.mjs)を改変したもので、ユーザーランドでストリーミングを実装する方法を示しています。これは、 `stream` オプションに対応する {{domxref("TextEncoder")}} API を模倣しています。

```js
class Base64Encoder {
  #extra;
  #extraLength;
  constructor() {
    this.#extra = new Uint8Array(3);
    this.#extraLength = 0;
  }

  // 部分的に https://github.com/lucacasonato/base64_streams/blob/main/src/iterator/encoder.ts から派生
  encode(chunk = Uint8Array.of(), options = {}) {
    const stream = options.stream ?? false;

    if (this.#extraLength > 0) {
      const bytesNeeded = 3 - this.#extraLength;
      const bytesAvailable = Math.min(bytesNeeded, chunk.length);
      this.#extra.set(chunk.subarray(0, bytesAvailable), this.#extraLength);
      chunk = chunk.subarray(bytesAvailable);
      this.#extraLength += bytesAvailable;
    }

    if (!stream) {
      // assert: this.#extraLength.length === 0 || this.#extraLength === 3 || chunk.length === 0
      const prefix = this.#extra.subarray(0, this.#extraLength).toBase64();
      this.#extraLength = 0;
      return prefix + chunk.toBase64();
    }

    let extraReturn = "";

    if (this.#extraLength === 3) {
      extraReturn = this.#extra.toBase64();
      this.#extraLength = 0;
    }

    const remainder = chunk.length % 3;
    if (remainder > 0) {
      this.#extra.set(chunk.subarray(chunk.length - remainder));
      this.#extraLength = remainder;
      chunk = chunk.subarray(0, chunk.length - remainder);
    }

    return extraReturn + chunk.toBase64();
  }
}

const encoder = new Base64Encoder();

console.log(
  encoder.encode(Uint8Array.of(72, 101, 108, 108, 111), { stream: true }),
);
// "SGVs"
console.log(
  encoder.encode(Uint8Array.of(32, 87, 111, 114, 108, 100), { stream: true }),
);
// "bG8gV29y"
console.log(encoder.encode());
// "bGQ="
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Uint8Array.prototype.toBase64` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims による `Uint8Array.prototype.toBase64` のポリフィル](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromBase64()")}}
- {{jsxref("Uint8Array.prototype.setFromBase64()")}}
- {{domxref("Window.btoa()")}}
