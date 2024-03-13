---
title: CSSTransformValue.toMatrix()
slug: Web/API/CSSTransformValue/toMatrix
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

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
