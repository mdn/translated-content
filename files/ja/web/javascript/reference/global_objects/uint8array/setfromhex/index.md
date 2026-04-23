---
title: Uint8Array.prototype.setFromHex()
short-title: setFromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromHex
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`setFromHex()`** は {{jsxref("Uint8Array")}} インスタンスのメソッドで、この `Uint8Array` オブジェクトを 16 進エンコードされた文字列のバイト列で埋めて、読み込んだバイト数と書き込んだバイト数を示すオブジェクトを返します。

このメソッドは、文字列をバイト配列に解釈します。文字列を単一の数値に変換するには、代わりに {{jsxref("Global_Objects/parseInt", "parseInt()")}} 関数を、 `radix` を `16` に設定して使用してください。

## 構文

```js-nolint
setFromHex(string)
```

### 引数

- `string`
  - : `Uint8Array` に書き込むバイト列をエンコードした 16 進文字列。文字列は次の条件を満たす必要があります。
    - 2 文字で 1 バイトをエンコードするため、文字数は偶数である必要があります。
    - 0～9 および A～F （大文字と小文字を区別しない）の 16 進文字のみが含まれている必要があります。
    - ホワイトスペースが含まれていないこと（{{jsxref("Uint8Array.prototype.setFromBase64()")}} とは異なります）。

    文字列は、配列が満たされるまでの点までしか読み込まれませんので、その点以降の不正な 16 進構文は無視されます。

### 返値

次のプロパティが含まれているオブジェクトです。

- `read`
  - : 入力文字列から読み込まれた 16 進文字の数。デコードされたデータが配列に収まる場合、これは入力文字列の長さです。そうでない場合、これは配列に収まる完全な 16 進文字の数です。
- `written`
  - : `Uint8Array` に書き込まれたバイト数。この `Uint8Array` の {{jsxref("TypedArray/byteLength", "byteLength")}} より大きくなることはありません。

### 例外

- {{jsxref("SyntaxError")}}
  - : 入力文字列に 16 進文字以外の文字が含まれているか、その長さが奇数の場合に発生します。
- {{jsxref("TypeError")}}
  - : 入力文字列が文字列でない場合に発生します。

## 例

### 16 進文字列のデコード

この例では、16 進文字列を既存の `Uint8Array` にデコードします。

```js
const uint8Array = new Uint8Array(8);
const result = uint8Array.setFromHex("cafed00d");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(8) [202, 254, 208, 13, 0, 0, 0, 0]
```

### 長い文字列を小さな配列にデコード

文字列に配列が保持できるデータ量以上のデータが含まれている場合、メソッドは配列が保持できるバイト数だけ書き込みます。

```js
const uint8Array = new Uint8Array(4);
const result = uint8Array.setFromHex("cafed00d-some random stuff");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(4) [202, 254, 208, 13]
```

余分な文字は、たとえそれが不正な文字であっても無視されます。ただし、入力文字列の合計長は偶数でなければなりません。

### 特定のオフセットでデータを設定

`setFromHex()` メソッドは、常に `Uint8Array` の先頭から書き込みを始めます。配列の途中から書き込む場合は、代わりに {{jsxref("TypedArray.prototype.subarray()")}} に書き込むことができます。

```js
const uint8Array = new Uint8Array(8);
// オフセット 2 から書き始める
const result = uint8Array.subarray(2).setFromHex("cafed00d");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array);
// Uint8Array(8) [0, 0, 202, 254, 208, 13, 0, 0]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Uint8Array.prototype.setFromHex` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims による `Uint8Array.prototype.setFromHex` のポリフィル](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromHex()")}}
- {{jsxref("Uint8Array.prototype.toHex()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
