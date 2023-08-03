---
title: Object.getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
---

{{JSRef}}

**`Object.getOwnPropertySymbols()`** メソッドは、与えられたオブジェクト上で直接見つかるシンボルプロパティすべての配列を返します。

{{EmbedInteractiveExample("pages/js/object-getownpropertysymbols.html")}}

## 構文

```js
Object.getOwnPropertySymbols(obj);
```

### 引数

- `obj`
  - : シンボルプロパティが返されるオブジェクトです。

### 返値

与えられたオブジェクト上で直接見つかるシンボルプロパティすべての配列です。

## 解説

{{jsxref("Object.getOwnPropertyNames()")}} と同様、与えられたオブジェクトのすべてのシンボルプロパティをシンボルの配列として取得することができます。 {{jsxref("Object.getOwnPropertyNames()")}} 自体はオブジェクトのシンボルプロパティを含まず、文字列プロパティのみを含むことに注意して下さい。

すべてのオブジェクトが最初に自身のシンボルプロパティを持っているとは限らないので、 `Object.getOwnPropertySymbols()` は、オブジェクトにシンボルプロパティを設定しない限りは空の配列を返します。

## 例

### getOwnPropertySymbols の使用

```js
var obj = {};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols); // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]); // Symbol(a)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.getOwnPropertySymbols")}}

## 関連情報

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Symbol")}}
