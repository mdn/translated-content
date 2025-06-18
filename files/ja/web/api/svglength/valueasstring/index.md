---
title: "SVGLength: valueAsString プロパティ"
short-title: valueAsString
slug: Web/API/SVGLength/valueAsString
l10n:
  sourceCommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{APIRef("SVG")}}

`valueAsString` は {{domxref("SVGLength")}} インターフェイスのプロパティで、 {{domxref("SVGLength.unitType", "unitType")}} で表された単位での [\<length>](/ja/docs/Web/SVG/Guides/Content_type#length) の値を文字列として表します。

この属性を設定すると、{{domxref("SVGLength.value", "value")}}、{{domxref("SVGLength.valueInSpecifiedUnits", "valueInSpecifiedUnits")}}、{{domxref("SVGLength.unitType", "unitType")}} が自動的に更新され、この設定を反映します。

## 値

文字列です。

## 例

### `valueAsString` の設定と取得

```js
// SVGLength オブジェクトを作成
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// length を文字列として取得
length.valueAsString = "45%";
console.log(length.valueAsString); // 出力: "45%"
console.log(length.unitType); // 出力: 2 (SVG_LENGTHTYPE_PERCENTAGE)
console.log(length.valueInSpecifiedUnits); // 出力: 45

// length の値を変更
length.valueAsString = "100px";
console.log(length.valueAsString); // 出力: "100px"
console.log(length.unitType); // 出力: 5 (SVG_LENGTHTYPE_PX)
console.log(length.value); // 出力: 100
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number)
- [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length)
- {{domxref("SVGAnimatedLength")}}
