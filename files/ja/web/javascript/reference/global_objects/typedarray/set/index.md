---
title: TypedArray.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/set
---

{{JSRef}}

**`set()`** メソッドは、複数の値を指定した配列から入力値を読み込み、型付き配列に格納します。

{{EmbedInteractiveExample("pages/js/typedarray-set.html")}}

## 構文

```
typedarray.set(array[, offset])
typedarray.set(typedarray[, offset])
```

### 引数

- `array`
  - : 値のコピーする配列です。コピー元の配列からのすべての値がコピー先の配列にコピーされます。ただし、コピー元の配列の長さにオフセットを加えた長さがコピー先の配列の長さを超えた場合は、例外が発生します。
- `typedarray`
  - : コピー元の配列が型付き配列の場合、2 つの配列は同じ {{jsxref("ArrayBuffer")}} を共有することができます。 JavaScript エンジンは、バッファのコピー元の範囲をコピー先の範囲にインテリジェントに **copy** します。
- `offset` {{optional_inline}}
  - : コピー先の配列へのオフセットで、コピー元の配列からの値の書き込みを開始する位置です。この値を省略した場合は 0 と見なされます (つまり、コピー元の配列はインデックス 0 から始まるコピー先配列の値を上書きします)。

### 例外

{{jsxref("RangeError")}}: `offset` が型付けされた配列の最後を超えて格納されるように設定されていた場合。

## 例

### set() の使用

```js
var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);

uint8.set([1, 2, 3], 3);

console.log(uint8); // Uint8Array [ 0, 0, 0, 1, 2, 3, 0, 0 ]
```

## 仕様書

| 仕様書                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.set-array-offset', 'TypedArray.prototype.set')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.set")}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
