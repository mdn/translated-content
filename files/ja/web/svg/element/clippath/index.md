---
title: <clipPath>
slug: Web/SVG/Element/clipPath
tags:
  - 要素
  - リファレンス
  - SVG
browser-compat: svg.elements.clipPath
translation_of: Web/SVG/Element/clipPath
---
{{SVGRef}}

**`<clipPath>`** は [SVG](/ja/docs/Web/SVG) の要素で、 {{SVGAttr("clip-path")}} プロパティで使用されるクリッピングパスを定義します。

クリッピングパスは、描画が適用される領域を制限する。概念的には、クリッピングパスで囲まれた領域の外にある部分は描画されません。

## 例

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100">
  <clipPath id="myClip">
    <!--
      Everything outside the circle will be
      clipped and therefore invisible.
    -->
    <circle cx="40" cy="35" r="35" />
  </clipPath>

  <!-- The original black heart, for reference -->
  <path id="heart" d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />

  <!--
    Only the portion of the red heart
    inside the clip circle is visible.
  -->
  <use clip-path="url(#myClip)" xlink:href="#heart" fill="red" />
</svg>
```

```css
/* With a touch of CSS for browsers who *
 * implemented the r Geometry Property. */

@keyframes openYourHeart {from {r: 0} to {r: 60px}}

#myClip circle {
  animation: openYourHeart 15s infinite;
}
```

{{EmbedLiveSample('Example', 100, 100)}}

クリッピングパスは、概念的には、参照している要素のカスタムビューポートと同じです。したがって、要素の*レンダリング*に影響を与えますが、要素の*固有のジオメトリー*には影響を与えません。クリッピングされた要素 (`<clipPath>` 要素を {{SVGAttr("clip-path")}} プロパティで参照している要素、または参照している要素の子) のバウンディングボックスは、クリッピングされていない場合と同じでなければなりません。

既定では、クリップされた領域では {{cssxref("pointer-events")}} が発行されません。例えば、半径 `10` の円が半径 `5` の円でクリッピングされている場合、小さい方の半径の外側では "click" イベントを受け取ることはありません。

## 属性

*   {{SVGAttr("clipPathUnits")}}
    *   : `<clipPath>` 要素の内容物の座標系を定義します。
        *値の型*: `userSpaceOnUse`|`objectBoundingBox` ; *既定値*: `userSpaceOnUse`; *アニメーション*: **可**

### グローバル属性

*   [コア属性](/ja/docs/Web/SVG/Attribute/Core)
    *   : 最重要なもの: {{SVGAttr('id')}}
*   [スタイル付け属性](/ja/docs/Web/SVG/Attribute/Styling)
    *   : {{SVGAttr('class')}}, {{SVGAttr('style')}}
*   [条件処理属性](/ja/docs/Web/SVG/Attribute/Conditional_Processing)
    *   : 最重要なもの: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
*   [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute/Presentation)
    *   : 最重要なもの: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}

## 利用メモ

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

*   クリッピングとマスクの SVG 要素: {{SVGElement("mask")}}
*   CSS プロパティ: {{cssxref("clip-path")}}, {{cssxref("pointer-events")}}
