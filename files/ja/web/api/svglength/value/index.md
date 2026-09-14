---
title: "SVGLength: value プロパティ"
short-title: value
slug: Web/API/SVGLength/value
l10n:
  sourceCommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{APIRef("SVG")}}

`value` は {{domxref("SVGLength")}} インターフェイスのプロパティで、ユーザー単位における [\<length>](/ja/docs/Web/SVG/Guides/Content_type#length) の浮動小数点値を度単位で表します。

この属性を設定すると、 {{domxref("SVGLength.valueInSpecifiedUnits", "valueInSpecifiedUnits")}} と {{domxref("SVGLength.valueAsString", "valueAsString")}} が自動的に更新され、この設定を反映します。

## 値

The length value in user units as a float.
ユーザー単位における長さの値の浮動小数点値です。

## 例

```js
// SVGLength オブジェクトを取得
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// value を設定
length.value = 10;
console.log(length.value); // 出力: 10

// value を反映
length.value = 20;
console.log(length.value); // 出力: 20
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedLength")}}
