---
title: Object.getOwnPropertySymbols()
short-title: getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Object.getOwnPropertySymbols()`** は静的メソッドで、与えられたオブジェクト上で直接見つかるシンボルプロパティすべての配列を返します。

{{InteractiveExample("JavaScript デモ: Object.getOwnPropertySymbols()")}}

```js interactive-example
const object = {};
const a = Symbol("a");
const b = Symbol.for("b");

object[a] = "localSymbol";
object[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(object);

console.log(objectSymbols.length);
// 予想される結果: 2
```

## 構文

```js-nolint
Object.getOwnPropertySymbols(obj)
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

{{Compat}}

## 関連情報

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Symbol")}}
