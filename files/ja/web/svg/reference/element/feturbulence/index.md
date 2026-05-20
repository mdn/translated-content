---
title: <feTurbulence>
slug: Web/SVG/Reference/Element/feTurbulence
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

**`<feTurbulence>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、[パーリンタービュランス関数](https://ja.wikipedia.org/wiki/パーリンノイズ)を使用して画像を生成します。これにより、雲や大理石のような人工的なテクスチャを合成することができます。生成された画像は、フィルタープリミティブのサブ領域全体を埋め尽くします。

他のフィルタープリミティブと同様に、デフォルトで `linearRGB` {{glossary("color space", "色空間")}}で色成分を処理します。代わりに `sRGB` を使用するには、{{svgattr("color-interpolation-filters")}} をご利用ください。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("baseFrequency")}}
- {{SVGAttr("numOctaves")}}
- {{SVGAttr("seed")}}
- {{SVGAttr("stitchTiles")}}
- {{SVGAttr("type")}}
- [フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM インターフェイス

この要素は {{domxref("SVGFETurbulenceElement")}} インターフェイスを実装しています。

## 例

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" filter="url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample('Example', 220, 220)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）)、{{SVGAttr('result')}} を含む
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
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
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
