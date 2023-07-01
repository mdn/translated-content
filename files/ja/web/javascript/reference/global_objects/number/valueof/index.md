---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`valueOf()`** メソッドは {{jsxref("Number")}} オブジェクトがラップしているプリミティブ値を返します。

{{EmbedInteractiveExample("pages/js/number-valueof.html")}}

## 構文

```js-nolint
valueOf()
```

### 返値

指定した {{jsxref("Number")}} オブジェクトのプリミティブ値を表した数値です。

## 解説

このメソッドは、通常は JavaScript によって内部的に呼び出されるものであり、ウェブのコード中で明示的に呼び出されることはありません。

## 例

### valueOf の使用

```js
const numObj = new Number(10);
console.log(typeof numObj); // object

const num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.valueOf()")}}
