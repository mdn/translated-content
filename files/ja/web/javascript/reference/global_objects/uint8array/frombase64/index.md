---
title: Uint8Array.fromBase64()
short-title: fromBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Uint8Array.fromBase64()`** は静的メソッドで、新しい {{jsxref("Uint8Array")}} オブジェクトを [base64](/ja/docs/Glossary/Base64) でエンコードされた文字列から作成します。

このメソッドは、 {{domxref("Window.atob()")}} よりも推奨されます。これは、デコードしたバイナリーデータが実際に ASCII テキストであることを意図していない限り、文字列よりも扱いやすいバイト配列になるからです。すでに割り当てられた配列バッファーがあり、それにデータを格納したい場合は、代わりにインスタンスメソッド {{jsxref("Uint8Array.prototype.setFromBase64()")}} を使用してください。

## 構文

```js-nolint
Uint8Array.fromBase64(string)
Uint8Array.fromBase64(string, options)
```

### 引数

- `string`
  - : base64 文字列で、 `Uint8Array` に変換するバイト列をエンコードしたものです。文字列には、A～Z、a～z、0～9、および 2 つの特殊文字（`options` で `alphabet: "base64"` を使用している場合は `+` および `/`、`options` で `alphabet: "base64url"` を使用している場合は `-` および `_`）を含む base64 文字集合のみが含まれている必要があります。末尾にパディング文字 `=` を含むことができます。文字列内の ASCII ホワイトスペース文字は無視されます。
- `options` {{optional_inline}}
  - : base64 文字列の解釈プロセスをカスタマイズするオブジェクトです。次のプロパティが含まれています。
    - `alphabet` {{optional_inline}}
      - : 使用する base64 アルファベットを指定する文字列。次のいずれかになります。
        - `"base64"` (default)
          - : `+` および `/` を使用する標準の base64 文字集合でエンコードされた入力を受け入れます。
        - `"base64url"`
          - : URL に安全な base64 文字集合（`-` および `_` を使用）でエンコードされた入力を受け入れます。
    - `lastChunkHandling` {{optional_inline}}
      - : base64 文字列の最後の塊を処理する方法を指定する文字列。base64 では 4 文字ごとに 3 バイトがエンコードされるため、文字列は 4 文字の塊に分割されます。最後の塊が 4 文字未満の場合は、別の方法で処理する必要があります。次のいずれかを指定できます。
        - `"loose"` (default)
          - : 最後の塊は、2 または 3 文字の base64 文字、または `=` 文字でパディングされた正確に 4 文字の長さである必要があります。最後の塊はデコードされ、結果に追加されます。
        - `"strict"`
          - : 最後の塊は、 `=` 文字でパディングされた正確に 4 文字の長さでなければなりません。さらに、[オーバーフロービット](/ja/docs/Glossary/Base64#末尾の塊) （データを表さない最後の base64 文字の末尾のビット）は 0 でなければなりません。最後の塊はデコードされ、結果に追加されます。
        - `"stop-before-partial"`
          - : 最後の塊が、 `=` 文字でパディングされた 4 文字の長さの場合、デコードされて結果に追加されます。それ以外の場合、最後の断片は無視されます（ただし、 `=` に続く 1 文字の base64 文字が含まれている場合は、構文エラーが発生します）。これは、文字列がストリームから決まり、最後の塊がまだ完全ではない場合に便利です。入力の何文字が読み込まれたかを知るには、代わりに {{jsxref("Uint8Array.prototype.setFromBase64()")}} を使用してください (リンク先のページには、 `"stop-before-partial"` を使用したストリームのデコードの例も含まれています)。

### 返値

base64 エンコードされた文字列からデコードされたバイトが含まれている新しい `Uint8Array` オブジェクト。

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

この例では、既定の `alphabet` および `lastChunkHandling` オプションを使用して、base64 文字列をデコードしています。次の点に注意してください。

- 空間内の空白は無視されます。
- 文字列は 4 の倍数ではなく、14 個の base64 文字で構成されています。これは、 `lastChunkHandling: "loose"` で指定した場合にのみ有効であり、デコード可能です。
- 最後の塊 `Ph` は、base64 で `0b100001` である文字 `h` で終わっているため、最後の `0001` ビットは「オーバーフロービット」であり、無視されます。これは、 `lastChunkHandling: "loose"` に対応している場合にのみ有効で、デコード可能です。

```js
const uint8Array = Uint8Array.fromBase64("PGI+ TURO PC9i Ph");
console.log(uint8Array); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]
```

### URL セーフ base64 文字列のデコード

この例では、 `alphabet` オプションを使用して、URL 対応 base64 文字列をデコードしています。

```js
const uint8Array = Uint8Array.fromBase64("PGI-TUROPC9iPg", {
  alphabet: "base64url",
});
console.log(uint8Array); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]
```

### 最後の塊を厳密に処理する base64 文字列のデコード

この例では、`lastChunkHandling` オプションを使用して base64 文字列をデコードしています。この文字列では、最後の塊は、`=` 文字でパディングされた 4 文字の長さでなければならず、オーバーフロービットは 0 でなければなりません。

```js
const array1 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg==", {
  lastChunkHandling: "strict",
});
console.log(array1); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]

const array2 = Uint8Array.fromBase64("PGI+ TURO PC9i Ph==", {
  lastChunkHandling: "strict",
});
// Throws a SyntaxError because h is 0b100001, where the last 4 bits are not 0

const array3 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg", {
  lastChunkHandling: "strict",
});
// Throws a SyntaxError because the last chunk is not exactly 4 characters long
```

### 最後の塊の一部を処理する base64 文字列のデコード

この例では、`lastChunkHandling` オプションを使用して、最後の部分的なチャンクを無視して base64 文字列をデコードしています。

```js
// 最後の塊が完全
const array1 = Uint8Array.fromBase64("PGI+ TURO PC9i", {
  lastChunkHandling: "stop-before-partial",
});
console.log(array1); // Uint8Array(9) [60, 98, 62, 77, 68, 78, 60, 47, 98]

// 最後の塊もパディングつきで完全
const array2 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg==", {
  lastChunkHandling: "stop-before-partial",
});
console.log(array2); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]

// 最後の塊は部分的なもので、無視される
const array3 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg", {
  lastChunkHandling: "stop-before-partial",
});
console.log(array3); // Uint8Array(9) [60, 98, 62, 77, 68, 78, 60, 47, 98]

// 最後の塊は部分的なもので、パディングが含まれている。これも無視される。
const array4 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg=", {
  lastChunkHandling: "stop-before-partial",
});
console.log(array4); // Uint8Array(9) [60, 98, 62, 77, 68, 78, 60, 47, 98]

// 最後の塊は部分的だが、1 つの base64 文字とそれに続く `=` が含まれている
const array5 = Uint8Array.fromBase64("PGI+ TURO PC9i P=", {
  lastChunkHandling: "stop-before-partial",
});
// これは有効な base64 文字列の一部とはならないため、SyntaxError が発生する
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Uint8Array.fromBase64` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims による `Uint8Array.fromBase64` のポリフィル](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.prototype.setFromBase64()")}}
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{domxref("Window.atob()")}}
