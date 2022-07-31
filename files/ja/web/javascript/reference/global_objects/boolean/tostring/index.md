---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
tags:
  - Boolean
  - JavaScript
  - メソッド
  - Prototype
  - リファレンス
browser-compat: javascript.builtins.Boolean.toString
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/toString
---
{{JSRef}}

**`toString()`** メソッドは、指定された Boolean オブジェクトを表す文字列を返します。

{{EmbedInteractiveExample("pages/js/boolean-tostring.html")}}

## 構文

```js
toString()
```

### 返値

指定された {{jsxref("Boolean")}} オブジェクトを表す文字列です。

## 解説

{{jsxref("Boolean")}} オブジェクトは {{jsxref("Object")}} オブジェクトの `toString` メソッドを上書きしており、 {{jsxref("Object.prototype.toString()")}} を継承していません。 `Boolean` オブジェクトでは、 `toString` メソッドはオブジェクトを文字列で表したものを返します。

JavaScript は `toString()` メソッドを、 {{jsxref("Boolean")}} が文字列値として表現されるべき場合や、 {{jsxref("Boolean")}} が文字列の結合で参照されたときに自動的に呼び出します。

{{jsxref("Boolean")}} オブジェクトと論理値では、組み込みの `toString` メソッドはその {{jsxref("Boolean")}} オブジェクトの値によって "`true`" か "`false`" の文字列を返します。

## 例

### `toString` の使用

以下のコードでは、`flag.toString()` は "`true`" を返します。

```js
var flag = new Boolean(true);
var myVar = flag.toString();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
