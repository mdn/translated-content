---
title: Uint8Array.prototype.toHex()
short-title: toHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/toHex
l10n:
  sourceCommit: ac71221e1987611d58450dbee82642c83285c5a0
---

**`toHex()`** は {{jsxref("Uint8Array")}} インスタンスのメソッドで、この `Uint8Array` オブジェクトのデータに基づいて 16 進エンコードされた文字列を返します。

このメソッドは、バイト配列から文字列を作成します。個々の数値を 16 進数に変換するには、代わりに {{jsxref("Number.prototype.toString()")}} メソッドを、 `radix` を `16` に設定して使用してください。

## 構文

```js-nolint
toHex()
```

### 引数

なし。

### 返値

この `Uint8Array` のデータを表す 16 進エンコードされた文字列。

## 例

### バイナリーデータのエンコード

この例では、`Uint8Array` のデータを 16 進文字列にエンコードしています。

```js
const uint8Array = new Uint8Array([202, 254, 208, 13]);
console.log(uint8Array.toHex()); // "cafed00d"

const data = new Uint8Array([255, 0, 0, 0, 255, 0, 0, 0, 255]);
for (let i = 0; i < data.length; i += 3) {
  console.log(data.slice(i, i + 3).toHex());
}
// "ff0000"
// "00ff00"
// "0000ff"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Uint8Array.prototype.toHex` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims による `Uint8Array.prototype.toHex` のポリフィル](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromHex()")}}
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
- {{jsxref("Number.prototype.toString()")}}
