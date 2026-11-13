---
title: Uint8Array.prototype.setFromBase64()
short-title: setFromBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromBase64
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`setFromBase64()`** は {{jsxref("Uint8Array")}} インスタンスのメソッドで、この `Uint8Array` オブジェクトに [base64](/ja/docs/Glossary/Base64) エンコードされた文字列のバイト列を格納し、読み込んだバイト数と書き込んだバイト数を示すオブジェクトを返します。

このメソッドは、事前に割り当てられた配列バッファーにデータを格納するのに最適です。base64 エンコードされた文字列から新しい `Uint8Array` オブジェクトを作成したい場合は、代わりに静的メソッド {{jsxref("Uint8Array.fromBase64()")}} を使用してください。

## 構文

```js-nolint
setFromBase64(string)
setFromBase64(string, options)
```

### 引数

- `string`
  - : `Uint8Array` に書き込むバイトをエンコードした base64 文字列。 [`Uint8Array.fromBase64()` の `string` 引数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64#string)と同じ要件です。文字列は、配列が満たされるまでの点までしか読み込まれないため、その点以降の不正な base64 構文は無視されます。
- `options` {{optional_inline}}
  - : base64 文字列の解釈プロセスをカスタマイズするオブジェクトです。これは、 [`Uint8Array.fromBase64()` の `options` 引数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64#options)と同じ要件です。

### 返値

次のプロパティが含まれているオブジェクトです。

- `read`
  - : 入力文字列から読み込まれた base64 の文字数。デコードされたデータが配列に収まる場合、これは入力文字列の長さ（パディングを含む）です。そうでない場合、これは配列に収まる最後の完全な 4 文字の塊までの長さです。塊は決して分割されません（残りのビットは、完全に再エンコードしないと base64 に部分的に「戻す」ことができないため）。次の塊が配列の残りの部分に収まらない場合、その塊は完全に読み込まれず、配列の最後の 1 または 2 バイトは書き込まれません。
- `written`
  - : `Uint8Array` に書き込まれたバイト数。この `Uint8Array` の {{jsxref("TypedArray/byteLength", "byteLength")}} より大きくなることはありません。

### 例外

- {{jsxref("SyntaxError")}}
  - : 入力文字列に指定したアルファベット以外の文字が含まれている場合、または最後の塊が `lastChunkHandling` オプションの条件を満たしていない場合に発生します。
- {{jsxref("TypeError")}}
  - : 次のいずれかの場合に発生します。
    - 入力文字列が文字列ではない場合。
    - `options` オブジェクトがオブジェクトまたは `undefined` ではない場合。
    - オプションが期待される値または `undefined` ではない場合。

## 例

### base64 文字列のデコード

この例では、既定の `alphabet` および `lastChunkHandling` オプションを使用して、base64 文字列を既存の `Uint8Array` にデコードしています。

```js
const uint8Array = new Uint8Array(16);
const result = uint8Array.setFromBase64("PGI+ TURO PC9i Pg==");
console.log(result); // { read: 19, written: 10 }
console.log(uint8Array);
// Uint8Array(16) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62, 0, 0, 0, 0, 0, 0]
```

### 長い文字列を小さな配列にデコード

文字列に配列が保持できるデータよりも多くのデータが含まれている場合、メソッドは、ビットを廃棄することなく、配列が保持できるバイト数だけ書き込みます。

```js
const uint8Array = new Uint8Array(8);
const result = uint8Array.setFromBase64("PGI+ TURO PC9i Pg==");
console.log(result); // { read: 9, written: 6 }
console.log(uint8Array);
// Uint8Array(8) [60, 98, 62, 77, 68, 78, 0, 0]
```

配列の最後の 2 バイトが書かれていないことに注意してください。この 2 バイトをデコードするには、18 ビットを表す 3 文字以上の base64 文字を読み込む必要があります。これらは、配列の残りの 2 バイトには収まらないため、2 つの塊、つまり 6 バイトしか書き込むことができません。

### 特定のオフセットでのデータ設定

`setFromBase64()` メソッドは、常に `Uint8Array` の先頭から書き込みを始めます。配列の途中から書き込む場合は、代わりに {{jsxref("TypedArray.prototype.subarray()")}} に書き込むことができます。

```js
const uint8Array = new Uint8Array(16);
// オフセット 2 から書き始める
const result = uint8Array.subarray(2).setFromBase64("PGI+ TURO PC9i Pg==");
console.log(result); // { read: 19, written: 10 }
console.log(uint8Array);
// Uint8Array(16) [0, 0, 60, 98, 62, 77, 68, 78, 60, 47, 98, 62, 0, 0, 0, 0]
```

### ストリームデコード

この例は、[元の提案](https://github.com/tc39/proposal-arraybuffer-base64/blob/main/stream.mjs)を改変したものです。これは、`stream` オプションに対応する {{domxref("TextDecoder")}} API を模倣しています。不完全な塊を処理するために `lastChunkHandling: "stop-before-partial"` を使用していることに注意してください。

```js
class Base64Decoder {
  #extra = "";

  decode(chunk = "", options = {}) {
    const opts = { ...options };
    // match TextEncoder API
    if (opts.stream) {
      opts.lastChunkHandling = "stop-before-partial";
    }
    chunk = this.#extra + chunk;
    this.#extra = "";
    // 分かりやすいように、以下の計算が十分であることが保証されるたびに
    // 新しいメモリーを割り当てますが、メモリーが実際に心配な場合は、
    // 空白がある場合、割り当て過ぎになる可能性があります。
    // メモリーが心配な場合は、TextDecoder スタイル API は不適切な選択です。
    let buffer = new Uint8Array(Math.ceil((chunk.length * 3) / 4));
    const { read, written } = buffer.setFromBase64(chunk, opts);
    buffer = buffer.subarray(0, written);
    this.#extra = chunk.slice(read);
    return buffer;
  }
}

const decoder = new Base64Decoder();

console.log(decoder.decode("SG Vsb ", { stream: true }));
// Uint8Array(3) [72, 101, 108]
console.log(decoder.decode("G8gV29ybGR ", { stream: true }));
// Uint8Array(6) [108, 111, 32, 87, 111, 114]
console.log(decoder.decode(""));
// Uint8Array(2) [108, 100]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Uint8Array.prototype.setFromBase64` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims による `Uint8Array.prototype.setFromBase64` のポリフィル](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromBase64()")}}
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{domxref("Window.atob()")}}
