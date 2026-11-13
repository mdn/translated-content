---
title: "SVGAngle: valueInSpecifiedUnits プロパティ"
short-title: valueInSpecifiedUnits
slug: Web/API/SVGAngle/valueInSpecifiedUnits
l10n:
  sourceCommit: a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{APIRef("SVG")}}

`valueInSpecifiedUnits` は {{domxref("SVGAngle")}} インターフェイスのプロパティで、この角度の {{domxref("SVGAngle.unitType", "unitType")}} で表現される単位で、この角度の数値を表します。

この属性を設定すると、 {{domxref("SVGAngle.value", "value")}} と {{domxref("SVGAngle.valueAsString", "valueAsString")}} が自動的に更新され、この設定を反映します。

## 値

数値です。角度の数値係数です。

## 例

```js
// SVGAngle オブジェクトを取得
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// 角度の値を度単位で設定
angle.value = 45;
console.log(angle.valueInSpecifiedUnits); // 出力: 45

// 角度を数値係数で更新
angle.valueInSpecifiedUnits = 90;
console.log(angle.valueInSpecifiedUnits); // 出力: 90
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedAngle")}}
