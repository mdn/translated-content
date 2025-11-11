---
title: StylePropertyMapReadOnly.getAll()
slug: Web/API/StylePropertyMapReadOnly/getAll
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`getAll()`** は {{domxref("StylePropertyMapReadOnly")}} インターフェイスのメソッドで、指定されたプロパティの値を含む {{domxref("CSSStyleValue")}} オブジェクトの配列を返します。

## 構文

```js
var cssStyleValues[] = StylePropertyMapReadOnly.getAll(property)
```

### 引数

- property
  - : すべての値を取得するプロパティの名前です。

### 返値

{{domxref("CSSStyleValue")}} オブジェクトの配列です。

## 例

以下の例では、 `getAll()` を使用して {{cssxref('background-image')}} プロパティに対して使用しています。宣言されているそれぞれの背景画像の項目が入った {{jsxref('Array')}} を返します。

```js
// button 要素を取得
const buttonEl = document.querySelector("button");

// `computedStyleMap` ですべての計算済みスタイルが取得できます
const allComputedStyles = buttonEl.computedStyleMap();

// getAll() を background-image プロパティに対して使用
const allBkImages = allComputedStyles.getAll("background-image");
console.log(allBkImages); // それぞれの背景画像を項目とした配列を出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
