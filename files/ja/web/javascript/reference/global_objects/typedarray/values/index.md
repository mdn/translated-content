---
title: TypedArray.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/values
---

{{JSRef}}

**`values()`** メソッドは、配列の各インデックスの値を持つ新しい配列イテレーターオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/array-values.html")}}

## 構文

```
arr.values()
```

### 返値

新しい配列イテレーターオブジェクトです。

## 例

### for...of ループを用いた反復処理

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();

for (let letter of iterator) {
  console.log(letter);
}  //"a" "b" "c" "d" "e"
```

`Array.prototype.values` は `Array.prototype[Symbol.iterator]` の既定の実装です。

```
Array.prototype.values === Array.prototype[Symbol.iterator]      //true
```

### .next() を使用した反復処理

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();
iterator.next();               // Object { value: "a", done: false }
iterator.next().value;         // "b"
iterator.next()["value"];      // "c"
iterator.next();               // Object { value: "d", done: false }
iterator.next();               // Object { value: "e", done: false }
iterator.next();               // Object { value: undefined, done: true }
iteraror.next().value;         // undefined
```

> **警告:** 一度だけの使用: 配列イテレーターオブジェクトは一度だけの使用または一時オブジェクトです

例:

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
 var iterator = arr.values();
 for (let letter of iterator) {
 console.log(letter);
} //"a" "b" "c" "d" "e"
for (let letter of iterator) {
console.log(letter);
} // undefined
```

**理由:** `next().done=true` または `currentIndex>length` が `for..of` の終了条件だからです。[反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を参照して下さい。

**値**: 配列のイテレーターオブジェクトには値が格納されません。その代わりに、その作成に使用された配列のアドレスが格納されるので、その配列に格納されている値に依存します。

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();
console.log(iterator);        // Array Iterator {  }
iterator.next().value;        // "a"
arr[1]='n';
iterator.next().value;        //  "n"
```

> **メモ:** 配列内の値が変化した場合は、配列の反復子オブジェクトの値も変化します。

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-array.prototype.values', 'Array.prototype.values')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.values")}}

## 関連情報

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
