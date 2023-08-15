---
title: Symbol.keyFor()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
---

{{JSRef}}

**`Symbol.keyFor(sym)`** メソッドは、指定されたシンボルについて、共有シンボルキーをグローバルシンボルレジストリから受け取ります。

{{EmbedInteractiveExample("pages/js/symbol-keyfor.html")}}

## 構文

```
Symbol.keyFor(sym);
```

### 引数

- `sym`
  - : シンボル、必須。キーを探すシンボル。

### 返値

グローバルレジストリで見つかった場合は、与えられたシンボルのキーを表す文字列です。それ以外の場合は {{jsxref("undefined")}} です。

## 例

### keyFor() の使用

```js
var globalSym = Symbol.for("foo"); // create a new global symbol
Symbol.keyFor(globalSym); // "foo"

var localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// well-known symbols are not symbols registered
// in the global symbol registry
Symbol.keyFor(Symbol.iterator); // undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.keyFor")}}

## 関連情報

- {{jsxref("Symbol.for()")}}
