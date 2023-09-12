---
title: arguments[@@iterator]()
slug: Web/JavaScript/Reference/Functions/arguments/@@iterator
---

{{jsSidebar("Functions")}}

**`@@iterator`** プロパティの初期値は {{jsxref("Array.prototype.values")}} プロパティの初期値と同じ関数オブジェクトです。

## 構文

```js
arguments[Symbol.iterator]();
```

## 例

### for...of ループを用いた反復処理

```js
function f() {
  // your browser must support for..of loop
  // and let-scoped variables in for loops
  for (let letter of arguments) {
    console.log(letter);
  }
}
f("w", "y", "k", "o", "p");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.values()")}}
