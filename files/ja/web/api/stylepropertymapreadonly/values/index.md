---
title: StylePropertyMapReadOnly.values()
slug: Web/API/StylePropertyMapReadOnly/values
tags:
  - API
  - CSS Typed Object Model API
  - 実験的
  - Houdini
  - メソッド
  - リファレンス
  - StylePropertyMapReadOnly
  - values()
browser-compat: api.StylePropertyMapReadOnly.values
translation_of: Web/API/StylePropertyMapReadOnly/values
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`StylePropertyMapReadOnly.values()`** メソッドは、 `StylePropertyMapReadOnly` オブジェクトのそれぞれのインデックスに対応する値を含む新しい*配列反復子*を返します。

## 構文

```js
StylePropertyMapReadOnly.values()
```

### 引数

なし。

### 返値

新しい {{jsxref("Array")}} です。

## 例

この例では、 `values()` メソッドを使用して [`Element.computedStyleMap()`](/ja/docs/Web/API/Element/computedStyleMap) の中にある値にアクセスすることができます。

```js
// button 要素を取得
const buttonEl = document.querySelector('button');

// すべての計算済みスタイルを `computedStyleMap` で受け取る
const allComputedStyles = buttonEl.computedStyleMap();

// values は CSS 値の反復可能なリストを返す
const vals = allComputedStyles.values();
console.log(vals.next().value); // CSSStyleValue を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
