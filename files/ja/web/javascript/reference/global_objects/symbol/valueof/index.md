---
title: Symbol.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

**`valueOf()`** は {{jsxref("Symbol")}} 値のメソッドで、このシンボル値を返します。

{{EmbedInteractiveExample("pages/js/symbol-prototype-valueof.html")}}

## 構文

```js-nolint
valueOf()
```

### 引数

なし。

### 返値

指定された {{jsxref("Symbol")}} オブジェクトのプリミティブ値です。

## 解説

`valueOf()` は {{jsxref("Symbol")}} オブジェクトのメソッドで、 Symbol オブジェクトのプリミティブ値をシンボルデータ型として返します。

JavaScript はオブジェクトをプリミティブ値に変換するために `valueOf()` メソッドを呼び出します。`valueOf()` メソッドを自分で呼び出す必要はほとんどありません。JavaScript は、プリミティブ値が期待されているオブジェクトに遭遇したときに、自動的にこれを呼び出します。

## 例

### valueOf() の使用

```js
const sym = Symbol("example");
sym === sym.valueOf(); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.valueOf()")}}
