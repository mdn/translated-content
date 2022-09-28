---
title: TypedArray.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/keys
---

{{JSRef}}

**`keys()`** メソッドは、配列内の各インデックスに対するキーを含む新しい配列イテレーターオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/typedarray-keys.html")}}

## 構文

```
arr.keys()
```

### 返値

新しい配列イテレーターオブジェクトです。

## 例

### for...of を使用した反復処理

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.keys();
// ブラウザーが for..of loop および for ループ内の
// let-scoped 変数に対応している必要があります
for (let n of eArray) {
  console.log(n);
}
```

### 他の繰り返し処理

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.keys();
console.log(eArr.next().value); // 0
console.log(eArr.next().value); // 1
console.log(eArr.next().value); // 2
console.log(eArr.next().value); // 3
console.log(eArr.next().value); // 4
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.keys', '%TypedArray%.prototype.keys()')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.keys")}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
- [for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of)
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
