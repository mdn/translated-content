---
title: "SVGAngle: valueAsString プロパティ"
short-title: valueAsString
slug: Web/API/SVGAngle/valueAsString
l10n:
  sourceCommit: a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{APIRef("SVG")}}

`valueAsString` は {{domxref("SVGAngle")}} インターフェイスのプロパティで、 unitType で指定された単位での角度値を文字列として表します。

この属性を設定すると、{{domxref("SVGAngle.value", "value")}}、{{domxref("SVGAngle.valueInSpecifiedUnits", "valueInSpecifiedUnits")}}、{{domxref("SVGAngle.unitType", "unitType")}} が自動的に更新され、この設定を反映します。

## 値

文字列で、角度の値です。

## 例

### Setting and retrieving `valueAsString`

```js
// SVGAngle オブジェクトを取得
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// valueAsString を使用して度単位で値を設定
angle.valueAsString = "45deg";
console.log(angle.valueAsString); // 出力: "45deg"
console.log(angle.value); // 出力: 45 （度単位）

// valueAsString を使用してラジアン単位で値を設定
angle.valueAsString = "1.57rad";
console.log(angle.valueAsString); // 出力: "1.57rad"
console.log(Math.round(angle.value)); // 出力: 90 （1.57 ラジアンはおよそ 90 度であるため）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<angle>`](/ja/docs/Web/SVG/Guides/Content_type#angle)
- {{domxref("SVGAnimatedAngle")}}
