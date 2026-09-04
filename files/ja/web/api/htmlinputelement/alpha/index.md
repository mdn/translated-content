---
title: "HTMLInputElement: alpha プロパティ"
short-title: alpha
slug: Web/API/HTMLInputElement/alpha
l10n:
  sourceCommit: 6d4ac4a04fd5c01adc690b9c95de3d9261570212
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`alpha`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、{{htmlelement("input")}} 要素の [`alpha`](/ja/docs/Web/HTML/Reference/Elements/input/color#alpha) 属性を反映し、CSS 色のアルファ成分をユーザーが操作可能であり、完全に不透明とは限らないか、そうでないかを示します。これは [color](/ja/docs/Web/HTML/Reference/Elements/input/color) コントロールのみに関連します。

## 値

論理値です。

## 例

```html
<input id="color-picker" type="color" alpha />
```

```js
const colorInput = document.getElementById("color-picker");

if (colorInput.alpha) {
  // アルファ成分を持つ色値
} else {
  // 完全に不透明な色値
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<input type="color">`](/ja/docs/Web/HTML/Reference/Elements/input/color)
