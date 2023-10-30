---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`Array.of()`** メソッドは、引数の数や型にかかわらず、可変長引数から、新しい `Array` インスタンスを生成します。

**`Array.of()`** と `Array` コンストラクタの違いは整数引数の扱いにあります。**`Array.of(7)`** は単一の要素、`7` を持つ配列を作成しますが、**`Array(7)`** は `length` プロパティが 7 の空の配列を作成します（これは {{jsxref("undefined")}} の値を持つ実在のスロットではなく、7 つの空のスロットの配列を意味します）。

```js
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
```

## 構文

```js
Array.of(element0);
Array.of(element0, element1);
Array.of(element0, element1, /* … ,*/ elementN);
```

### 引数

- `elementN`
  - : 生成する配列の要素。

### 返値

新しい {{jsxref("Array")}} インスタンス。

## 例

### Array.of の使用

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.of` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [ポリフィル](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
- {{jsxref("Array")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
- [`Array.of()` と `Array.from()` の提案](https://gist.github.com/rwaldron/1074126)
- [`Array.of()` のポリフィル](https://gist.github.com/rwaldron/3186576)
