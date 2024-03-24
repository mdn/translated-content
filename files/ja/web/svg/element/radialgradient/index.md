---
title: <radialGradient>
slug: Web/SVG/Element/radialGradient
l10n:
  sourceCommit: ba32817d1601205e4b45b7b8b80284cc794da1d2
---

{{SVGRef}}

**`<radialGradient>`** 要素は、グラフィック要素の塗りつぶしや線の描画に適用できる放射状のグラデーションを定義することができます。

> **メモ:** CSS の {{cssxref('gradient/radial-gradient', 'gradient()')}} と混同しないでください。 CSS のグラデーションは HTML 要素に対してのみ適用することができるのに対し、 SVG のグラデーションは SVG 要素にのみ適用できます。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 10 10"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <radialGradient id="myGradient">
      <stop offset="10%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </radialGradient>
  </defs>

  <!-- using my radial gradient -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## 属性

- {{SVGAttr("cx")}}
  - : この属性は、放射グラデーションの終了円の x 座標を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length) ; _既定値_: `50%`; _アニメーション_: **可**
- {{SVGAttr("cy")}}
  - : この属性は、放射グラデーションの終了円の y 座標を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length) ; _既定値_: `50%`; _アニメーション_: **可**
- {{SVGAttr("fr")}}
  - : この属性は、放射グラデーションの開始円の半径を定義します。グラデーションは、 0% の{{SVGElement('stop','色経由点')}}が開始円の外周にマッピングされるように描画されます。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length) ; _既定値_: `0%`; _アニメーション_: **可**
- {{SVGAttr("fx")}}
  - : この属性は、放射グラデーションの開始円の x 座標を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length) ; _既定値_: Same as `cx`; _アニメーション_: **可**
- {{SVGAttr("fy")}}
  - : この属性は、放射グラデーションの開始円の y 座標を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length) ; _既定値_: Same as `cy`; _アニメーション_: **可**
- {{SVGAttr("gradientUnits")}}
  - : この属性は、 `cx`, `cy`, `r`, `fx`, `fy`, `fr` の各属性の座標系を定義します。
    _値の型_: `userSpaceOnUse`|`objectBoundingBox` ; _既定値_: `objectBoundingBox`; _アニメーション_: **可**
- {{SVGAttr("gradientTransform")}}
  - : この属性は、グラデーションの座標系に対するさらなる[座標変換](/ja/docs/Web/SVG/Attribute/transform)を提供します。
    _値の型_: **[\<transform-list>](/ja/docs/Web/SVG/Content_type#transform-list)** ; _既定値_: _identity transform_; _アニメーション_: **可**
- {{SVGAttr("href")}}
  - : この属性は、テンプレートとして使用される他の `<radialGradient>` 要素への参照を定義します。
    _値の型_: [**\<URL>**](/ja/docs/Web/SVG/Content_type#url) ; _既定値_: none; _アニメーション_: **可**
- {{SVGAttr("r")}}
  - : この属性は、放射状グラデーションの終了円の半径を定義します。グラデーションは、100% の{{SVGElement('stop','色経由点')}} が終了円の周囲にマッピングされるように描画されます。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length) ; _既定値_: `50%`; _アニメーション_: **可**
- {{SVGAttr("spreadMethod")}}
  - : この属性は、グラデーションが、グラデーションを含むシェイプの境界の内側で開始または終了した場合の動作を示すものです。
    _値の型_: `pad`|`reflect`|`repeat` ; _既定値_: `pad`; _アニメーション_: **可**
- {{SVGAttr("xlink:href")}}
  - : {{Deprecated_Header}} [\<IRI>](/ja/docs/Web/SVG/Content_type#iri) の参照で、テンプレートとして使用される他の `<radialGradient>` 要素を差します。
    _値の型_: [**\<IRI>**](/ja/docs/Web/SVG/Content_type#iri) ; _既定値_: none; _アニメーション_: **可**

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute/Core)
  - : 特に: {{SVGAttr('id')}}
- [スタイル属性](/ja/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- イベント属性
  - : [グローバルイベント属性](/ja/docs/Web/SVG/Attribute/Events#グローバルイベント属性), [文書要素イベント属性](/ja/docs/Web/SVG/Attribute/Events#文書要素イベント属性)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute/Presentation)
  - : 特に: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- XLink 属性
  - : {{SVGAttr("xlink:href")}}, {{SVGAttr("xlink:title")}}

## 使用メモ

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
