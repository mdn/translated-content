---
title: StylePropertyMap.append()
slug: Web/API/StylePropertyMap/append
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`append()`** は {{domxref("StylePropertyMap")}} インターフェイスのメソッドで、渡された CSS の値をこの `StylePropertyMap` の指定されたプロパティで追加します。

## 構文

```js-nolint
append(property, value)
```

### 引数

- `property`
  - : 追加するスタイル特性（フォント、幅、背景色など）を示す識別子です。
- `value`
  - : 指定されたプロパティが持つべき値です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、要素の {{cssxref('background-image')}} プロパティに、{{domxref('HTMLElement.attributeStyleMap')}} を使用して追加の背景画像の値を追加しています。

```js
// button 要素を取得
const buttonEl = document.querySelector("button");

// background-image プロパティに別の値を追加する
buttonEl.attributeStyleMap.append(
  "background-image",
  "linear-gradient(180deg, blue, black",
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
