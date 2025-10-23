---
title: "SVGAngle: value プロパティ"
short-title: value
slug: Web/API/SVGAngle/value
l10n:
  sourceCommit: a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{APIRef("SVG")}}

`value` は {{domxref("SVGAngle")}} インターフェイスのプロパティで、 [`<angle>`](/ja/docs/Web/SVG/Guides/Content_type#angle) の浮動小数点値を度単位で表します。

この属性を設定すると、 {{domxref("SVGAngle.valueInSpecifiedUnits", "valueInSpecifiedUnits")}} と {{domxref("SVGAngle.valueAsString", "valueAsString")}} が自動的に更新され、この設定を反映します。

## 値

数値です。度単位の角度値です。

## 例

```js
// SVGAngle オブジェクトを取得
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// value を設定
angle.value = 45;
console.log(angle.value); // 出力: 45

// value を反映
angle.value = 90;
console.log(angle.value); // 出力: 90
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedAngle")}}
