---
title: TypedArray.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/entries
---

{{JSRef}}

**`entries()`** メソッドは、配列内の各インデックスのキーと値のペアを含む新しい配列イテレーターオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/typedarray-entries.html")}}

## 構文

```
arr.entries()
```

### 返値

新しい配列イテレーターオブジェクトです。

## 例

### for...of ループを使用した反復

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.entries();
// your browser must support for..of loop
// and let-scoped variables in for loops
for (let n of eArray) {
  console.log(n);
}
```

### 代替の反復

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.entries();
console.log(eArr.next().value); // [0, 10]
console.log(eArr.next().value); // [1, 20]
console.log(eArr.next().value); // [2, 30]
console.log(eArr.next().value); // [3, 40]
console.log(eArr.next().value); // [4, 50]
```

## 仕様書

| 仕様書                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.entries', '%TypedArray%.prototype.entries()')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.entries")}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
