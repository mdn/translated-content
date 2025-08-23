---
title: String.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`valueOf()`** は {{jsxref("String")}} 値のメソッドで、この文字列値を返します。

{{InteractiveExample("JavaScript デモ: String.prototype.valueOf()")}}

```js interactive-example
const stringObj = new String("foo");

console.log(stringObj);
// 予想される結果: String { "foo" }

console.log(stringObj.valueOf());
// 予想される結果: "foo"
```

## 構文

```js-nolint
valueOf()
```

### 引数

なし。

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
