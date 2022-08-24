---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/reverse
---
{{JSRef}}

**`reverse()`** メソッドは、配列の要素を *[In-place アルゴリズム](https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)* で反転させます。最初の要素が最後の要素に、最後の要素が最初の要素になります。

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

## 構文

```
a.reverse()
```

### 返値

反転した配列です。

## 解説

`reverse` メソッドは、呼び出した配列オブジェクトの要素を反転し、書き換えられた配列の参照を返します。

`reverse` は意図的に汎用性を持たせています。つまり、このメソッドは配列に類似したオブジェクトに対して{{jsxref("Function.call", "呼び出し", "", 1)}}たり、{{jsxref("Function.apply", "適用し", "", 1)}}たりすることもできます。ゼロから始まる数値プロパティであり、連続した連なりの最後を反映している `length` プロパティを含まないオブジェクトでは効果がないかもしれません。

## 例

### 配列の要素を反転させる

次の例は、3 つの要素を含む配列 `a` を作成し、その配列を反転させます。`reverse()` の呼び出しは、反転した配列 `a` への参照を返します。

```js
const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]
```

### 配列状オブジェクトの要素を反転させる

次の例は、3 つの要素と length プロパティを含む配列状オブジェクト `a` を作成し、その配列状オブジェクトを反転させます。`reverse()` の呼び出しは、反転した配列状オブジェクト `a` への参照を返します。

```js
const a = {0: 1, 1: 2, 2: 3, length: 3};

console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(a); //apply() を使用するのと同じ構文

console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-array.prototype.reverse', 'Array.prototype.reverse')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.reverse")}}

## 関連情報

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
