---
title: <feMerge>
slug: Web/SVG/Reference/Element/feMerge
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

**`<feMerge>`** は [SVG](/ja/docs/Web/SVG) の要素で、フィルター効果を順次ではなく並行して適用することができます。これは、他のフィルターが {{ SVGAttr("result") }} 属性を通じて出力を格納し、それを {{ SVGElement("feMergeNode") }} の子要素内で参照することで実現されます。

他のフィルタープリミティブと同様に、デフォルトで `linearRGB` {{glossary("color space", "色空間")}} の色成分を処理します。{{svgattr("color-interpolation-filters")}} を使用することで、代わりに `sRGB` を使用することもできます。

## 使用コンテキスト

{{svginfo}}

## 属性

- [フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM インターフェイス

この要素は {{domxref("SVGFEMergeElement")}} インターフェイスを実装しています。

## 例

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <filter id="feOffset" x="-40" y="-20" width="100" height="200">
    <feOffset in="SourceGraphic" dx="60" dy="60" />
    <feGaussianBlur stdDeviation="5" result="blur2" />
    <feMerge>
      <feMergeNode in="blur2" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>

  <rect
    x="40"
    y="40"
    width="100"
    height="100"
    stroke="black"
    fill="green"
    filter="url(#feOffset)" />
</svg>
```

### Result

{{EmbedLiveSample('Example', 200, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#filters_attributes)
- {{SVGAttr("flood-color")}} 属性
- {{SVGAttr("flood-opacity")}} 属性
- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMergeNode")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
