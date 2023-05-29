---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
l10n:
  sourceCommit: c66bfef4fbe37744579bfed6dcecd7c7b73741c2
---

{{JSRef}}

**`entries()`** メソッドは、配列内の各要素に対するキー/値のペアを含む新しい **Array イテレーター**オブジェクトを返します。

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

## 構文

```js
entries();
```

### 返値

新しい {{jsxref("Array")}} イテレーターオブジェクトを返します。

## 例

### 添字と要素の反復処理

```js
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### for...of ループの使用

```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.entries` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of)
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- [ポリフィル](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
