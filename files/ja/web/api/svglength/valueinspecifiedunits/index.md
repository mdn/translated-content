---
title: "SVGLength: valueInSpecifiedUnits プロパティ"
short-title: valueInSpecifiedUnits
slug: Web/API/SVGLength/valueInSpecifiedUnits
l10n:
  sourceCommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{APIRef("SVG")}}

`valueInSpecifiedUnits` は {{domxref("SVGLength")}} インターフェイスのプロパティで、 {{domxref("SVGLength.unitType", "unitType")}} で表現される単位で、浮動小数点の値を表します。

この属性を設定すると、 {{domxref("SVGLength.value", "value")}} と {{domxref("SVGLength.valueAsString", "valueAsString")}} が自動的に更新され、この設定を反映します。

## 値

長さの数値係数を、浮動小数点数として指定します。

## 例

```js
// SVGLength オブジェクトを取得
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// 長さの value を設定
length.value = 10;
console.log(length.valueInSpecifiedUnits); // 出力: 10

// 長さを数値係数で更新
length.valueInSpecifiedUnits = 20;
console.log(length.valueInSpecifiedUnits); // 出力: 20
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedLength")}}
