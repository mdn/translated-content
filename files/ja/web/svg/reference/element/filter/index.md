---
title: <filter>
slug: Web/SVG/Reference/Element/filter
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`<filter>`** は [SVG](/ja/docs/Web/SVG) の要素で、原子フィルタープリミティブをグループ化してカスタムフィルター効果を定義します。これ自身はレンダリングされず、 SVG 要素の {{SVGAttr("filter")}} 属性や SVG/HTML 要素の {{Glossary("CSS")}} の {{cssxref("filter")}} プロパティで使用する必要があります。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("width")}}
- {{SVGAttr("height")}}
- {{SVGAttr("filterUnits")}}
- {{SVGAttr("primitiveUnits")}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM インターフェイス

この要素は {{domxref("SVGFilterElement")}} インターフェイスを実装しています。

## 例

### SVG

```html
<svg width="230" height="120" xmlns="http://www.w3.org/2000/svg">
  <filter id="blurMe">
    <feGaussianBlur stdDeviation="5" />
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" />

  <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)" />
</svg>
```

### 結果

{{EmbedLiveSample("Example",235,150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
