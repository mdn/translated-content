---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`valueOf()`** メソッドは、{{jsxref("String")}} オブジェクトのプリミティブ値を返します。

{{EmbedInteractiveExample("pages/js/string-valueof.html")}}

## 構文

```js-nolint
valueOf()
```

### 返値

与えられた {{jsxref("String")}} オブジェクトのプリミティブ値を表す文字列です。

## 詳細

{{jsxref("String")}} オブジェクトの `valueOf()` メソッドは、{{jsxref("String")}} オブジェクトの文字列型としてのプリミティブ値を返します。この値は、{{jsxref("String.prototype.toString()")}} の返値と等価です。

このメソッドは通常、JavaScript によって内部的に呼ばれ、コード中で明示的に呼ばれることはありません。

## 例

### `valueOf()` メソッドの使用

```js
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
