---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

**`DataView`** ビューは、バイナリーの {{jsxref("ArrayBuffer")}} 内の複数の数値型を、プラットフォームの[エンディアン](/ja/docs/Glossary/Endianness)を意識することなく読み書きするための低水準インターフェイスを提供します。

## 解説

### エンディアン

多バイトの数値形式は、マシンアーキテクチャによってメモリー内での表現が異なります。説明は[エンディアン](/ja/docs/Glossary/Endianness)を参照してください。`DataView` のアクセサーは、実行中のコンピューターのエンディアンに関わらず、データへのアクセス方法を明示的に制御します。例えば、[WebAssembly](/ja/docs/WebAssembly) のメモリーは常にリトルエンディアンであるため、マルチバイト値の読み書きには型付き配列ではなく `DataView` を使用すべきです。例については、[`WebAssembly.Memory`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory) を参照してください。

```js
const littleEndian = (() => {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* リトルエンディアン */);
  // Int16Array はプラットフォームのエンディアンを使用する
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true または false
```

> [!NOTE]
> `DataView` はデフォルトでビッグエンディアンで読み書きしますが、ほとんどのプラットフォームはリトルエンディアンを使用しています。

## コンストラクター

- {{jsxref("DataView/DataView", "DataView()")}}
  - : 新しい `DataView` オブジェクトを作成します。

## インスタンスプロパティ

これらのプロパティは `DataView.prototype` 上に定義られており、すべての `DataView` インスタンスで共有されます。

- {{jsxref("DataView.prototype.buffer")}}
  - : この `DataView` によって参照される {{jsxref("ArrayBuffer")}} を返します。
- {{jsxref("DataView.prototype.byteLength")}}
  - : この `DataView` の長さを（バイト単位で）返します。
- {{jsxref("DataView.prototype.byteOffset")}}
  - : {{jsxref("ArrayBuffer")}} の開始位置からこの `DataView` までのオフセットを（バイト単位で）返します。
- {{jsxref("Object/constructor", "DataView.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数です。`DataView`インスタンスの場合、初期値は {{jsxref("DataView/DataView", "DataView")}} コンストラクターです。
- `DataView.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"DataView"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されています。

## インスタンスメソッド

- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : この `DataView` の指定されたバイトオフセットから始まる 8 バイトを読み取り、符号付き 64 ビット整数値として解釈します。
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : この `DataView` の指定されたバイトオフセットから始まる 8 バイトを読み取り、符号なし 64 ビット整数値として解釈します。
- {{jsxref("DataView.prototype.getFloat16()")}}
  - : この `DataView` の指定されたバイトオフセットから始まる 2 バイトを読み取り、16 ビット浮動小数点値として解釈します。
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : この `DataView` の指定されたバイトオフセットから始まる 4 バイトを読み取り、符号付き 32 ビット浮動小数点値として解釈します。
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : この `DataView` の指定されたバイトオフセットから始まる 8 バイトを読み取り、符号付き 64 ビット浮動小数点値として解釈します。
- {{jsxref("DataView.prototype.getInt16()")}}
  - : この `DataView` の指定されたバイトオフセットから始まる 2 バイトを読み取り、符号付き 16 ビット整数値として解釈します。
- {{jsxref("DataView.prototype.getInt32()")}}
  - : この `DataView` の指定されたバイトオフセットから始まる 4 バイトを読み取り、符号付き 32 ビット整数値として解釈します。
- {{jsxref("DataView.prototype.getInt8()")}}
  - : この `DataView` の指定されたバイトオフセットから始まる 1 バイトを読み取り、符号付き 8 ビット整数値として解釈します。
- {{jsxref("DataView.prototype.getUint16()")}}
  - : この `DataView` の指定されたバイトオフセットから始まる 2 バイトを読み取り、符号なし 16 ビット整数値として解釈します。
- {{jsxref("DataView.prototype.getUint32()")}}
  - : この `DataView` の指定されたバイトオフセットから始まる 4 バイトを読み取り、符号なし 32 ビット整数値として解釈します。
- {{jsxref("DataView.prototype.getUint8()")}}
  - : この `DataView` の指定されたバイトオフセットから始まる 1 バイトを読み取り、符号なし 8 ビット整数値として解釈します。
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : 長整数を受け取り、符号付き 64 ビット整数値として、この `DataView` の指定されたバイトオフセットから始まる 8 バイトに格納します。
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : 長整数を受け取り、符号なし 64 ビット整数値として、この `DataView` の指定されたバイトオフセットから始まる 8 バイトに格納します。
- {{jsxref("DataView.prototype.setFloat16()")}}
  - : 数値を受け取り、16 ビット浮動小数点値として、この `DataView` の指定されたバイトオフセットから始まる 2 バイトに格納します。
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : 数値を受け取り、32 ビット浮動小数点値として、この `DataView` の指定されたバイトオフセットから始まる 4 バイトに格納します。
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : 数値を受け取り、64 ビット浮動小数点値として、この `DataView` の指定されたバイトオフセットから始まる 8 バイトに格納します。
- {{jsxref("DataView.prototype.setInt16()")}}
  - : 数値を受け取り、符号付き 16 ビット整数値として、この `DataView` の指定されたバイトオフセットから始まる 2 バイトに格納します。
- {{jsxref("DataView.prototype.setInt32()")}}
  - : 数値を受け取り、符号付き 32 ビット整数値として、この `DataView` の指定されたバイトオフセットから始まる 4 バイトに格納します。
- {{jsxref("DataView.prototype.setInt8()")}}
  - : 数値を受け取り、符号付き 8 ビット整数値として、この `DataView` の指定されたバイトオフセットから始まる 1 バイトに格納します。
- {{jsxref("DataView.prototype.setUint16()")}}
  - : 数値を受け取り、符号なし 16 ビット整数値として、この `DataView` の指定されたバイトオフセットから始まる 2 バイトに格納します。
- {{jsxref("DataView.prototype.setUint32()")}}
  - : 数値を受け取り、符号なし 32 ビット整数値として、この `DataView` の指定されたバイトオフセットから始まる 4 バイトに格納します。
- {{jsxref("DataView.prototype.setUint8()")}}
  - : 数値を受け取り、符号なし 8 ビット整数値として、この `DataView` の指定されたバイトオフセットから始まる 1 バイトに格納します。

## 例

### DataView の使用

```js
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`DataView` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
