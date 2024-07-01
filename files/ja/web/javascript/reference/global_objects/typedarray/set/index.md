---
title: TypedArray.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/set
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`set()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、複数の値を指定した配列から入力値を読み込み、型付き配列に格納します。

{{EmbedInteractiveExample("pages/js/typedarray-set.html")}}

## 構文

```js-nolint
set(array)
set(array, targetOffset)

set(typedarray)
set(typedarray, targetOffset)
```

### 引数

- `array`
  - : 値のコピーする配列です。コピー元の配列からのすべての値がコピー先の配列にコピーされます。ただし、コピー元の配列の長さにオフセットを加えた長さがコピー先の配列の長さを超えた場合は、例外が発生します。
- `typedarray`
  - : コピー元の配列が型付き配列の場合、2 つの配列は同じ {{jsxref("ArrayBuffer")}} を共有することができます。 JavaScript エンジンは、バッファーのコピー元の範囲をコピー先の範囲にインテリジェントに **copy** します。
- `targetOffset` {{optional_inline}}
  - : コピー先の配列へのオフセットで、コピー元の配列からの値の書き込みを開始する位置です。この値を省略した場合は 0 と見なされます（つまり、コピー元の配列はインデックス 0 から始まるコピー先配列の値を上書きします）。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("RangeError")}}
  - : 以下の条件のいずれかで発生します。
    - `targetOffset` が大きすぎるか、`array` または `typedarray` が大きすぎるために、要素が配列の末尾を越えて格納されることになる。
    - `targetOffset` が負の数である。

## 例

### set() の使用

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);

uint8.set([1, 2, 3], 3);

console.log(uint8); // Uint8Array [ 0, 0, 0, 1, 2, 3, 0, 0 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.set` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
