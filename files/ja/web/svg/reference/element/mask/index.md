---
title: <mask>
slug: Web/SVG/Reference/Element/mask
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

**`<mask>`** は [SVG](/ja/docs/Web/SVG) の要素で、現在のオブジェクトを背景に合成するためのアルファマスクを定義します。マスクは {{SVGAttr("mask")}} プロパティを使用して使用/参照します。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 120 120">
  <rect x="-10" y="-10" width="120" height="120" fill="blue" />
  <mask id="myMask">
    <!-- 白いピクセルの下はすべて表示される -->
    <rect x="0" y="0" width="100" height="100" fill="white" />

    <!-- 黒いピクセルの下はすべて見えなくなる -->
    <path
      d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
      fill="black" />
  </mask>

  <polygon points="-10,110 110,110 110,-10" fill="orange" />

  <!-- このマスクを適用した状態で、ハートの図形の穴を円に「パンチ」する -->
  <circle cx="50" cy="50" r="50" fill="purple" mask="url(#myMask)" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## 属性

- {{SVGAttr("height")}}
  - : この属性はマスク領域の高さを定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length); _既定値_: `120%`; _アニメーション_: **可**
- {{SVGAttr("maskContentUnits")}}
  - : この属性は `<mask>` のコンテンツの座標系を定義します。
    _値の型_: `userSpaceOnUse` | `objectBoundingBox` ; _既定値_: `userSpaceOnUse`; _アニメーション_: **可**
- {{SVGAttr("maskUnits")}}
  - : この属性は `<mask>` の属性 {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} の座標系を定義します。
    _値の型_: `userSpaceOnUse` | `objectBoundingBox` ; _既定値_: `objectBoundingBox`; _アニメーション_: **可**
- {{SVGAttr("x")}}
  - : この属性は、マスク領域の左上隅の x 軸座標を定義します。
    _値の型_: [**\<coordinate>**](/ja/docs/Web/SVG/Guides/Content_type#coordinate); _既定値_: `-10%`; _アニメーション_: **可**
- {{SVGAttr("y")}}
  - : この属性は、マスク領域の左上隅の y 軸座標を定義します。
    _値の型_: [**\<coordinate>**](/ja/docs/Web/SVG/Guides/Content_type#coordinate); _既定値_: `-10%`; _アニメーション_: **可**
- {{SVGAttr("width")}}
  - : この属性はマスク領域の幅を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length); _既定値_: `120%`; _アニメーション_: **可**

## 使用上のメモ

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のクリッピングとマスクの SVG 要素: {{SVGElement("clipPath")}}
- クリッピングとマスクの CSS プロパティ: {{cssxref("mask")}}, {{cssxref("mask-image")}}, {{cssxref("mask-mode")}}, {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}}, {{cssxref("mask-clip")}}, {{cssxref("mask-origin")}}, {{cssxref("mask-composite")}}, {{cssxref("mask-size")}}, {{cssxref("pointer-events")}}
