---
title: StylePropertyMapReadOnly.forEach()
slug: Web/API/StylePropertyMapReadOnly/forEach
tags:
  - API
  - CSS Typed Object Model API
  - 実験的
  - Houdini
  - メソッド
  - リファレンス
  - StylePropertyMapReadOnly
  - forEach()
browser-compat: api.StylePropertyMapReadOnly.forEach
translation_of: Web/API/StylePropertyMapReadOnly/forEach
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`StylePropertyMapReadOnly.forEach()`** メソッドは、指定された関数を {{domxref('StylePropertyMapReadOnly')}} のそれぞれの要素に対して 1 回ずつ呼び出します。

## 構文

```js
StylePropertyMapReadOnly.forEach(function callback(currentValue[, index[, array]]) {
    //コード
}[, thisArg]);
```

### 引数

- `callback`

  - : それぞれの要素に対して呼び出す関数であり、 3 つの引数を取ります。

    - `currentValue`
      - : 処理しようとしている現在の要素の値です。
    - `index`{{optional_inline}}
      - : 処理しようとしている現在の要素の位置です。
    - `array`{{optional_inline}}
      - : `forEach()` が呼び出された StylePropertyMapReadOnly です。

- `thisArg` {{Optional_inline}}
  - : `callback` を実行するときに **`this`** として使用する値（すなわち、 `Object` への参照）です。

### 返値

{{jsxref("undefined")}} です。

## 例

こちらは、 `forEach()` を {{domxref('Element.computedStyleMap()')}} の結果に対して使用する例です。

```js
// button 要素を取得
const buttonEl = document.querySelector('.example');

// `computedStyleMap` ですべての計算済みスタイルが取得できます
const allComputedStyles = buttonEl.computedStyleMap();

// forEach ですべてのプロパティ/値の組に対してコードを実行することができます
allComputedStyles.forEach((elem, index, arr) => {
  // code to run for each pair
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
