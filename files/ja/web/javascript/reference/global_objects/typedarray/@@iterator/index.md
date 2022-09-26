---
title: TypedArray.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator
---

{{JSRef}}

`@@iterator` プロパティは、初期値が {{jsxref("TypedArray.prototype.values()", "values")}} プロパティの同じ関数オブジェクトです。

## 構文

```
arr[Symbol.iterator]()
```

### 返値

この配列の **iterator** 関数で、既定では {{jsxref("TypedArray.prototype.values()", "values()")}} 関数です。

## 例

### for...of ループを使用した反復

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
// your browser must support for..of loop
// and let-scoped variables in for loops
for (let n of arr) {
  console.log(n);
}
```

### 代替の反復

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // 10
console.log(eArr.next().value); // 20
console.log(eArr.next().value); // 30
console.log(eArr.next().value); // 40
console.log(eArr.next().value); // 50
```

## 仕様書

| 仕様書                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype-@@iterator', '%TypedArray%.prototype[@@iterator]()')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.@@iterator")}}

## 関連情報

- [JavaScript typed arrays](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
