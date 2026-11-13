---
title: "SVGLength: unitType プロパティ"
short-title: unitType
slug: Web/API/SVGLength/unitType
l10n:
  sourceCommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{APIRef("SVG")}}

**`unitType`** は {{domxref("SVGLength")}} インターフェイスのプロパティで、このインターフェイスで定義されている `SVG_LENGTHTYPE_*` 定数のいずれかを指定することで値の型を表します。

## 値

以下のいずれかです。

- `SVGLength.SVG_LENGTHTYPE_UNKNOWN` (0)
- `SVGLength.SVG_LENGTHTYPE_NUMBER` (1)
- `SVGLength.SVG_LENGTHTYPE_PERCENTAGE` (2)
- `SVGLength.SVG_LENGTHTYPE_EMS` (3)
- `SVGLength.SVG_LENGTHTYPE_EXS` (4)
- `SVGLength.SVG_LENGTHTYPE_PX` (5)
- `SVGLength.SVG_LENGTHTYPE_CM` (6)
- `SVGLength.SVG_LENGTHTYPE_MM` (7)
- `SVGLength.SVG_LENGTHTYPE_IN` (8)
- `SVGLength.SVG_LENGTHTYPE_PT` (9)
- `SVGLength.SVG_LENGTHTYPE_PC` (10)

## 例

`unitType` プロパティにアクセスする方法の例を以下に示します。

```js
// SVGLength オブジェクトを取得
const svg = document.querySelector("svg");

// `length` が SVGLength であるとする
const length = svg.createSVGLength();

// length に値を設定
length.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 20);

// 単位型をチェック
console.log(length.unitType); // 出力: 2 (SVG_LENGTHTYPE_PERCENTAGE)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedLength")}}
