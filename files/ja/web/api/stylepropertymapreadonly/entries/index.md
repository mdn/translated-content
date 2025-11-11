---
title: StylePropertyMapReadOnly.entries()
slug: Web/API/StylePropertyMapReadOnly/entries
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`StylePropertyMapReadOnly.entries()`** メソッドは、このオブジェクトが持つ列挙可能なプロパティの `[key, value]` の組の配列を、 {{jsxref("Statements/for...in", "for...in")}} ループで提供されるのと同じ順序で返します（違いは for-in ループではプロトタイプチェーン内のプロパティも列挙する点です）。

## 構文

```js
StylePropertyMapReadOnly.entries();
```

### 引数

なし。

### 返値

この `StylePropertyMapReadOnly` オブジェクトが持つ列挙可能な `[key, value]` の組の配列です。

## 例

こちらは、 `StylePropertyMapReadOnly.entries()` メソッドを使用して要素の計算済みスタイルを取得する例です。

```js
// DOM 要素を取得
const buttonEl = document.querySelector("button");

// `computedStyleMap` ですべての計算済みスタイルが取得できます
const allComputedStyles = buttonEl.computedStyleMap();

// entries は項目の反復可能オブジェクトを返します
const iterableStyles = allComputedStyles.entries();

// align-content を最初の項目、 CSSStyleValue を 2 番目の項目とする 2 項目の配列を返します。
console.log(iterableStyles.next().value);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
