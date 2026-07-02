---
title: <feSpecularLighting>
slug: Web/SVG/Reference/Element/feSpecularLighting
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

**`<feSpecularLighting>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、アルファチャンネルをバンプマップとして使用して、光源となるグラフィックに光沢効果を付与します。結果として得られる画像は、光源の色に基づいた RGBA 画像となります。照明の計算は、[フォン照明モデル](https://en.wikipedia.org/wiki/Phong_reflection_model) の標準的な反射成分に従います。結果として得られる画像は、光源の色、光源の位置、および入力バンプマップの形状によって異なります。照明計算の結果が追加されます。このフィルタープリミティブは、視聴者が z 方向の無限遠にいることを想定しています。

このフィルタープリミティブは、照明計算における反射部分を含む画像を生成します。このマップは、算術演算 {{SVGElement("feComposite")}} メソッドの `add` 項を使用して、テクスチャと合成することを意図しています。テクスチャ画像に適用する前に、これらのライトマップを複数追加することで、複数の光源をシミュレートすることができます。

他のフィルタープリミティブと同様に、デフォルトで `linearRGB` {{glossary("color space", "色空間")}}の色成分を処理します。{{svgattr("color-interpolation-filters")}} を使用することで、代わりに `sRGB` を使用することもできます。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("in")}}
- {{SVGAttr("surfaceScale")}}
- {{SVGAttr("specularConstant")}}
- {{SVGAttr("specularExponent")}}
- {{SVGAttr("kernelUnitLength")}}
- [フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM インターフェイス

この要素は {{domxref("SVGFESpecularLightingElement")}} インターフェイスを実装しています。

## 例

```html
<svg
  height="200"
  width="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="filter">
    <feSpecularLighting
      result="specOut"
      specularExponent="20"
      lighting-color="#bbbbbb">
      <fePointLight x="50" y="75" z="200" />
    </feSpecularLighting>
    <feComposite
      in="SourceGraphic"
      in2="specOut"
      operator="arithmetic"
      k1="0"
      k2="1"
      k3="1"
      k4="0" />
  </filter>
  <circle cx="110" cy="110" r="100" filter="url(#filter)" />
</svg>
```

### 結果

{{EmbedLiveSample("Example", 220, 220)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDistantLight")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("fePointLight")}}
- {{SVGElement("feSpotLight")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
