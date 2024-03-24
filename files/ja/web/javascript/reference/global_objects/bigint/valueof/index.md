---
title: BigInt.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
---

{{JSRef}}

**`valueOf()`** メソッドは、 {{jsxref("BigInt")}} オブジェクトにラップされたプリミティブ値を返します。

{{EmbedInteractiveExample("pages/js/bigint-valueof.html","shorter")}}

## 構文

```js
bigIntObj.valueOf();
```

### 返値

指定された {{jsxref("BigInt")}} オブジェクトのプリミティブ値を表す BigInt です。

## 例

### `valueOf` の使用

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("BigInt.prototype.toString()")}}
