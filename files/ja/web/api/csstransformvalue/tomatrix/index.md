---
title: "CSSTransformValue: toMatrix() メソッド"
short-title: toMatrix()
slug: Web/API/CSSTransformValue/toMatrix
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSS Typed OM")}}

**`toMatrix()`** は {{domxref("CSSTransformValue")}} インターフェイスのメソッドで、 {{domxref('DOMMatrix')}} オブジェクトを返します。

## 構文

```js-nolint
toMatrix()
```

### 引数

なし。

### 返値

{{domxref('DOMMatrix')}} オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : 行列の生成に関わる長さが px と互換性のない単位である場合（例えば相対的な長さやパーセント値など）に発生します。

## 例

To Do

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
