---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
---

{{JSRef}}

**`DataView`** ビューは {{jsxref("ArrayBuffer")}} の多様な数値型を、プラットフォームの[エンディアン](/ja/docs/Glossary/Endianness)に関係なく読み書きするための低水準インターフェイスを提供します。

## 解説

### エンディアン

多バイトの数値形式は、マシンアーキテクチャによってメモリー内での表現が異なります。説明は[エンディアン](/ja/docs/Glossary/Endianness)を参照してください。 `DataView` のアクセサーは、プラットフォームアーキテクチャのエンディアンに関係なくデータにアクセスする方法を明確に制御する手段を提供します。

```js
var littleEndian = (function () {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* リトルエンディアン */);
  // Int16Array はプラットフォームのエンディアンを使用する
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true または false
```

### 64 ビット整数値

一部のブラウザーは {{jsxref("DataView.prototype.setBigInt64()")}} および {{jsxref("DataView.prototype.setBigUint64()")}} に対応していません。そのため、各ブラウザーで動作するコードで 64 ビット操作ができるようにするには、独自の `getUint64()` 関数を実装し、 {{jsxref("Number.MAX_SAFE_INTEGER")}} までの精度の値を受け取れるようにします。これで十分な場合もあるでしょう。

```js
function getUint64(dataview, byteOffset, littleEndian) {
  // 64 ビット数を 2 つの 32 ビット (4 バイト) の部分に分割する
  const left = dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset + 4, littleEndian);

  // 2 つの 32 ビットの値を結合する
  const combined = littleEndian
    ? left + 2 ** 32 * right
    : 2 ** 32 * left + right;

  if (!Number.isSafeInteger(combined))
    console.warn(combined, "exceeds MAX_SAFE_INTEGER. Precision may be lost");

  return combined;
}
```

他にも、完全な 64 ビットの幅が必要な場合、{{jsxref("BigInt")}} を作成することもできます。さらに言えば、ネイティブの BigInt はユーザーランドライブラリーの同等品よりもはるかに速いのですが、JavaScript では BigInt は可変長であるという性質上、常に 32 ビット整数よりもはるかに遅くなります。

```js
const BigInt = window.BigInt,
  bigThirtyTwo = BigInt(32),
  bigZero = BigInt(0);
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // 64 ビット数を 2 つの 32 ビット (4 バイト) の部分に分割する
  const left = BigInt(dataview.getUint32(byteOffset | 0, !!littleEndian) >>> 0);
  const right = BigInt(
    dataview.getUint32(((byteOffset | 0) + 4) | 0, !!littleEndian) >>> 0,
  );

  // 2 つの 32 ビットの値を結合して返す
  return littleEndian
    ? (right << bigThirtyTwo) | left
    : (left << bigThirtyTwo) | right;
}
```

## コンストラクター

- [`DataView()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/DataView/DataView)
  - : 新しい `DataView` オブジェクトを作成します。

## インスタンスプロパティ

- {{jsxref("DataView.prototype.buffer")}}
  - : このビューによって参照される {{jsxref("ArrayBuffer")}}。構築時に設定されるため、**読み取り専用**です。
- {{jsxref("DataView.prototype.byteLength")}}
  - : {{jsxref("ArrayBuffer")}} の開始位置からこのビューの (バイト単位の) 長さ。構築時に設定されるため、**読み取り専用**です。
- {{jsxref("DataView.prototype.byteOffset")}}
  - : {{jsxref("ArrayBuffer")}} の開始位置からこのビューの (バイト単位の) オフセット。構築時に設定されるため、**読み取り専用**です。

## インスタンスメソッド

- {{jsxref("DataView.prototype.getInt8()")}}
  - : ビューの開始位置から指定されたバイト単位のオフセット位置にある符号付き 8 ビット整数値 (byte) を取得します。
- {{jsxref("DataView.prototype.getUint8()")}}
  - : ビューの開始位置から指定されたバイト単位のオフセット位置にある符号無し 8 ビット整数値 (unsigned byte) を取得します。
- {{jsxref("DataView.prototype.getInt16()")}}
  - : ビューの開始位置から指定されたバイト単位のオフセット位置にある符号付き 16 ビット整数値 (short) を取得します。
- {{jsxref("DataView.prototype.getUint16()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号無し 16 ビット整数値 (unsigned short) を取得します。
- {{jsxref("DataView.prototype.getInt32()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 32 ビット整数値 (long) を取得します。
- {{jsxref("DataView.prototype.getUint32()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号無し 32 ビット整数値 (unsigned long) を取得します。
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 32 ビット浮動小数点数 (float) を取得します。
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 64 ビット浮動小数点数 (double) を取得します。
- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 64 ビット整数値(long long) を取得します。
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号なし 64 ビット整数値 (unsigned long long) を取得します。
- {{jsxref("DataView.prototype.setInt8()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 8 ビット整数値 (byte) を格納します。
- {{jsxref("DataView.prototype.setUint8()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号なし 8 ビット整数値 (unsigned byte) を格納します。
- {{jsxref("DataView.prototype.setInt16()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 16 ビット整数値 (short) を格納します。
- {{jsxref("DataView.prototype.setUint16()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号無し 16 ビット整数値 (unsigned short) を格納します。
- {{jsxref("DataView.prototype.setInt32()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 32 ビット整数値 (long) を格納します。
- {{jsxref("DataView.prototype.setUint32()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号無し 32 ビット整数値 (unsigned long) を格納します。
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 32 ビット浮動小数点数 (float) を格納します。
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 64 ビット浮動小数点数 (double) を格納します。
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 64 ビット整数値 (long long) を格納します。
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号なし 64 ビット整数値 (unsigned long long) を格納します。

## 例

### DataView を使用する

```js
var buffer = new ArrayBuffer(16);
var view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `DataView` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays) で利用できます
- [jDataView](https://github.com/jDataView/jDataView): `DataView` API をすべてのブラウザーや Node.js に展開するポリフィルの JavaScript ライブラリー
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
