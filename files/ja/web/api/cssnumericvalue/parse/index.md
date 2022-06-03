---
title: CSSNumericValue.parse()
slug: Web/API/CSSNumericValue/parse
tags:
  - API
  - CSS 型付きオブジェクトモデル API
  - CSSNumericValue
  - 実験的
  - Houdini
  - メソッド
  - リファレンス
  - parse()
browser-compat: api.CSSNumericValue.parse
translation_of: Web/API/CSSNumericValue/parse
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`parse()`** は {{domxref("CSSNumericValue")}} インターフェイスのメソッドで、値の文字列をメンバーが値と単位となっているオブジェクトに変換します。

## 構文

```js
parse(cssText)
```

### 引数

- `cssText`
  - : 数値と単位の部分を持つ文字列です。

### 返値

{{domxref('CSSNumericValue')}} です。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : TBD

## 例

以下は、`unit` プロパティが `"px"` で、`value` プロパティが `42` である {{domxref('CSSUnitValue')}} オブジェクトを返すものです。

```js
let numValue = CSSNumericValue.parse("42.0px");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
