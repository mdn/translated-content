---
title: StylePropertyMapReadOnly.keys()
slug: Web/API/StylePropertyMapReadOnly/keys
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`StylePropertyMapReadOnly.keys()`** メソッドは、 `StylePropertyMapReadOnly` の各項目のキーを含む新しい*配列イテレーター*を返します。

## 構文

```js
StylePropertyMapReadOnly.keys();
```

### 引数

なし。

### 返値

新しい {{jsxref("Array")}} です。

## 例

この例では、 `keys()` メソッドを使用して {{domxref('Element.computedStyleMap()')}} の中にあるプロパティにアクセスすることができます。

```js
// button 要素を取得
const buttonEl = document.querySelector("button");

// すべての計算済みスタイルを `computedStyleMap` で受け取る
const allComputedStyles = buttonEl.computedStyleMap();

// keys はプロパティの反復可能なリストを返す
const props = allComputedStyles.keys();
console.log(props.next().value); // align-content を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
