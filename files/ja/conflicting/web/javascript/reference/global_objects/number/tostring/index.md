---
title: Number.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Number/toString
tags:
  - JavaScript
  - メソッド
  - Number
  - 非推奨
  - プロトタイプ
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/Number/toSource
browser-compat: javascript.builtins.Number.toSource
---
{{JSRef}} {{deprecated_header}}

**`toSource()`** メソッドは、オブジェクトのソースコードを表す文字列を返します。

## 構文

```js
toSource()
```

### 返値

そのオブジェクトのソースコードを表す文字列です。

## 例

### ネイティブ関数

組み込みの {{jsxref("Number")}} オブジェクトでは、`toSource()` はソースコードが利用できないことを表す次の文字列を返します。

```js
function Number() {
    [native code]
}
```

{{jsxref("Number")}} のインスタンスでは、 `toSource()` はソースコードを表す文字列を返します。

このメソッドは JavaScript で内部的に呼び出されるものであり、ウェブのコードから明示的に呼び出されるものではありません。

## 仕様書

標準には含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.toSource()")}}
