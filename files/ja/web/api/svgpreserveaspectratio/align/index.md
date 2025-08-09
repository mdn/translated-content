---
title: "SVGPreserveAspectRatio: align プロパティ"
short-title: align
slug: Web/API/SVGPreserveAspectRatio/align
l10n:
  sourceCommit: 59fec48b4572624a0b23bc98385dd05029125a76
---

{{APIRef("SVG")}}

**`align`** は {{domxref("SVGPreserveAspectRatio")}} インターフェイスの読み取り専用プロパティで、このインターフェイスで定義された `SVG_PRESERVEASPECTRATIO_*` 定数のいずれかで指定された配置の値の種類を反映します。

## 値

以下のいずれかです。

- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_UNKNOWN` (0)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_NONE` (1)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMIN` (2)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMIN` (3)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMIN` (4)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMID` (5)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMID` (6)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMID` (7)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMAX` (8)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMAX` (9)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMAX` (10)

## 例

### `align` プロパティへのアクセス

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="400"
  height="200"
  preserveAspectRatio="xMidYMid meet">
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");

// align プロパティへのアクセス
console.log(svgElement.preserveAspectRatio.baseVal.align); // 出力: 6 (SVG_PRESERVEASPECTRATIO_XMIDYMID)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
