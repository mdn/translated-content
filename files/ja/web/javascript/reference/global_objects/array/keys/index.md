---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/keys
---
{{JSRef}}

**`keys()`** メソッドは、配列内の各インデックスのキーを含む、新しい **Array Iterator** オブジェクトを返します。

{{EmbedInteractiveExample("pages/js/array-keys.html")}}

## 構文

```
arr.keys()
```

### 返値

新しい {{jsxref("Array")}} のイテレーターオブジェクトです。

## 例

### 疎な配列を無視しないキーイテレーター

```js
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.keys', 'Array.prototype.keys')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.keys")}}

## 関連情報

- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.entries()")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
