---
title: <mpath>
slug: Web/SVG/Element/mpath
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

**`<mpath>`** は {{SVGElement("animateMotion")}} 要素のサブ要素で、モーションパスの定義として外部の {{SVGElement("path")}} 要素を参照する機能を提供します。

## 使用可能な場所

{{svginfo}}

## 属性

- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM インターフェイス

この要素は {{domxref("SVGMPathElement")}} インターフェイスを実装しています。

## 例

### SVG

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 500 300"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect
    x="1"
    y="1"
    width="498"
    height="298"
    fill="none"
    stroke="blue"
    stroke-width="2" />

  <!-- Draw the outline of the motion path in blue, along
          with three small circles at the start, middle and end. -->
  <path
    id="path1"
    d="M100,250 C 100,50 400,50 400,250"
    fill="none"
    stroke="blue"
    stroke-width="7.06" />
  <circle cx="100" cy="250" r="17.64" fill="blue" />
  <circle cx="250" cy="100" r="17.64" fill="blue" />
  <circle cx="400" cy="250" r="17.64" fill="blue" />

  <!-- Here is a triangle which will be moved about the motion path.
       It is defined with an upright orientation with the base of
       the triangle centered horizontally just above the origin. -->
  <path
    d="M-25,-12.5 L25,-12.5 L 0,-87.5 z"
    fill="yellow"
    stroke="red"
    stroke-width="7.06">
    <!-- Define the motion path animation -->
    <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
      <mpath href="#path1" />
    </animateMotion>
  </path>
</svg>
```

### 結果

{{EmbedLiveSample("Example", 250, 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("animateMotion")}}
