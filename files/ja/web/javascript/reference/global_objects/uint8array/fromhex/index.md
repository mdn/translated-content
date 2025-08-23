---
title: Uint8Array.fromHex()
short-title: fromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromHex
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Uint8Array.fromHex()`** は静的メソッドで、新しい {{jsxref("Uint8Array")}} オブジェクトを 16 進文字列から作成します。

このメソッドは、文字列をバイト配列に解釈します。文字列を単一の数値に変換するには、代わりに {{jsxref("Global_Objects/parseInt", "parseInt()")}} 関数を、 `radix` を `16` に設定して使用してください。

## 構文

```js-nolint
Uint8Array.fromHex(string)
```

### 引数

- `string`
  - : `Uint8Array` に変換するバイト列をエンコードした 16 進文字列。文字列は次の条件を満たす必要があります。
    - 2 文字で 1 バイトをエンコードするため、文字数は偶数である必要があります。
    - 0～9 および A～F （大文字と小文字を区別しない）の 16 進文字のみが含まれている必要があります。
    - ホワイトスペースが含まれていないこと（{{jsxref("Uint8Array.prototype.setFromBase64()")}} とは異なります）。

### 返値

16 進文字列からデコードされたバイトが含まれている新しい `Uint8Array` オブジェクト。

### 例外

- {{jsxref("SyntaxError")}}
  - : 入力文字列に 16 進文字以外の文字が含まれているか、その長さが奇数の場合に発生します。
- {{jsxref("TypeError")}}
  - : 入力文字列が文字列でない場合に発生します。

## 例

### 16 進文字列のデコード

この例では、16 進文字列を `Uint8Array` にデコードしています。

```js
const hexString = "cafed00d";
const bytes = Uint8Array.fromHex(hexString);
console.log(bytes); // Uint8Array [ 202, 254, 208, 13 ]
```

大文字も対応しています。

```js
const hexString = "CAFEd00d";
const bytes = Uint8Array.fromHex(hexString);
console.log(bytes); // Uint8Array [ 202, 254, 208, 13 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Uint8Array.fromHex` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims による `Uint8Array.fromHex` のポリフィル](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
- {{jsxref("Uint8Array.prototype.toHex()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
