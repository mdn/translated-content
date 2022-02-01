---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
tags:
  - JavaScript
  - メソッド
  - Number
  - Prototype
  - リファレンス
browser-compat: javascript.builtins.Number.valueOf
translation_of: Web/JavaScript/Reference/Global_Objects/Number/valueOf
---
{{JSRef}}

**`valueOf()`** メソッドは {{jsxref("Number")}} オブジェクトがラップしているプリミティブ値を返します。

{{EmbedInteractiveExample("pages/js/number-valueof.html")}}

## 構文

```js
valueOf()
```

### 返値

指定した {{jsxref("Number")}} オブジェクトのプリミティブ値を表した数値です。

## 解説

このメソッドは、通常は JavaScript によって内部的に呼び出されるものであり、ウェブのコード中で明示的に呼び出されることはありません。

## 例

### valueOf の使用

```js
let numObj = new Number(10)
console.log(typeof numObj)  // object

let num = numObj.valueOf()
console.log(num)            // 10
console.log(typeof num)     // number
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.prototype.toSource()")}}
