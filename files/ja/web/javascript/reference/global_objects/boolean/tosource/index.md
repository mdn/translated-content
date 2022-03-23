---
title: Boolean.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toSource
tags:
  - Boolean
  - Deprecated
  - JavaScript
  - メソッド
  - 標準外
  - 非推奨
  - Prototype
browser-compat: javascript.builtins.Boolean.toSource
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/toSource
---
{{JSRef}} {{deprecated_header}}

**`toSource()`** メソッドは、オブジェクトのソースコードを表す文字列を返します。

## 構文

```js
toSource()
```

### 返値

このオブジェクトのソースコードを表す文字列です。

## 例

### ネイティブ関数

組み込みの {{jsxref("Boolean")}} オブジェクトでは、 `toSource` はソースコードが利用できないことを示す以下の文字列を返します。

```js
function Boolean() {
    [native code]
}
```

## 仕様書

いずれの標準仕様にも組み込まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.toSource()")}}
