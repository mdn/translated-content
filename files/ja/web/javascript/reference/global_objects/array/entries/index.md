---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/entries
---
{{JSRef}}

**`entries()`** メソッドは、配列内の各要素に対するキー/値のペアを含む新しい **Array イテレーター**オブジェクトを返します。

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

## 構文

```
array.entries()
```

### 返値

新しい {{jsxref("Array")}} イテレーターオブジェクトを返します。

## 例

### インデックスと要素の反復処理

```js
const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries())
  console.log(index, element);

// 0 'a'
// 1 'b'
// 2 'c'
```

### [for…of](/ja/docs/Web/JavaScript/Reference/Statements/for...of) loop で使う

```js
var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-array.prototype.entries', 'Array.prototype.entries')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.entries")}}

## 関連情報

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of)
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
