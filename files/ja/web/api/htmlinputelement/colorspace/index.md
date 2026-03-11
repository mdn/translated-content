---
title: "HTMLInputElement: colorSpace プロパティ"
short-title: colorSpace
slug: Web/API/HTMLInputElement/colorSpace
l10n:
  sourceCommit: de5b557883e8eff2514f0fe6eeb180db782575b1
---

{{APIRef("HTML DOM")}}

**`colorSpace`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、{{HTMLElement("input")}} 要素の [`colorspace`](/ja/docs/Web/HTML/Reference/Elements/input/color#colorspace) 属性を反映し、シリアライズされた CSS 色の{{glossary("color space", "色空間")}}が `sRGB` （デフォルト）か `display-p3` かを示します。これは [color](/ja/docs/Web/HTML/Reference/Elements/input/color) コントロールでのみ関連します。

## 値

文字列で、[`colorspace`](/ja/docs/Web/HTML/Reference/Elements/input/color#colorspace) 属性の値が入ります。

## 例

### 色空間の取得と設定

```html
<input id="color-picker" type="color" colorspace="display-p3" alpha />
```

```js
const colorInput = document.getElementById("color-picker");
console.log(colorInput.colorSpace); // "display-p3"
colorInput.colorSpace = "limited-srgb"; // srgb へ変換
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<input type="color">`](/ja/docs/Web/HTML/Reference/Elements/input/color)
