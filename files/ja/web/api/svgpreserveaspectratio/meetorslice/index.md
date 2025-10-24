---
title: "SVGPreserveAspectRatio: meetOrSlice プロパティ"
short-title: meetOrSlice
slug: Web/API/SVGPreserveAspectRatio/meetOrSlice
l10n:
  sourceCommit: 59fec48b4572624a0b23bc98385dd05029125a76
---

{{APIRef("SVG")}}

**`meetOrSlice`** は {{domxref("SVGPreserveAspectRatio")}} インターフェイスの読み取り専用プロパティで、このインターフェイスで定義された `SVG_MEETORSLICE_*` 定数のいずれかで指定された配置の値の種類を反映します。

## 値

以下のいずれかです。

- `SVGPreserveAspectRatio.SVG_MEETORSLICE_UNKNOWN` (0)
- `SVGPreserveAspectRatio.SVG_MEETORSLICE_MEET` (1)
- `SVGPreserveAspectRatio.SVG_MEETORSLICE_SLICE` (2)

## 例

### `meetOrSlice` プロパティへのアクセス

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="400"
  height="200"
  preserveAspectRatio="xMidYMid slice">
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");

// meetOrSlice プロパティへのアクセス
console.log(svgElement.preserveAspectRatio.baseVal.meetOrSlice); // 出力: 2 (SVG_MEETORSLICE_SLICE)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
