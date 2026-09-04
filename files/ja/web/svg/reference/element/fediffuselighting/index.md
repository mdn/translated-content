---
title: <feDiffuseLighting>
slug: Web/SVG/Reference/Element/feDiffuseLighting
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

**`<feDiffuseLighting>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、アルファチャンネルをバンプマップとして使用して画像に照明効果を適用します。その結果得られる画像は RGBA の不透明画像となり、その仕上がりは、光の色、光の位置、および入力されたバンプマップの形状によって決まります。

このフィルタープリミティブによって生成されたライトマップは、{{SVGElement("feComposite")}} フィルタープリミティブの `arithmetic` 演算子の乗算項を使用して、テクスチャ画像と合成することができます。これらのライトマップを複数個重ね合わせてからテクスチャ画像に適用することで、複数の光源をシミュレートすることができます。

他のフィルタープリミティブと同様に、デフォルトで `linearRGB` {{glossary("color space", "色空間")}}の色成分を処理します。{{svgattr("color-interpolation-filters")}} を使用することで、代わりに `sRGB` を使用することもできます。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("in")}}
- {{SVGAttr("surfaceScale")}}
- {{SVGAttr("diffuseConstant")}}
- {{SVGAttr("kernelUnitLength")}}
- [フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM インターフェイス

この要素は {{domxref("SVGFEDiffuseLightingElement")}} インターフェイスを実装しています。

## 例

次の例では、利用できるそれぞれの光源を設定した場合に、`<feDiffuseLighting>`要素が円に与える効果を示しています。いずれの場合も、光は左上隅から決まります。

```html
<svg width="440" height="140" xmlns="http://www.w3.org/2000/svg">
  <!-- No light is applied -->
  <text text-anchor="middle" x="60" y="22">No Light</text>
  <circle cx="60" cy="80" r="50" fill="green" />

  <!-- the light source is a fePointLight element -->
  <text text-anchor="middle" x="170" y="22">fePointLight</text>
  <filter id="lightMe1">
    <feDiffuseLighting in="SourceGraphic" result="light" lighting-color="white">
      <fePointLight x="150" y="60" z="20" />
    </feDiffuseLighting>

    <feComposite
      in="SourceGraphic"
      in2="light"
      operator="arithmetic"
      k1="1"
      k2="0"
      k3="0"
      k4="0" />
  </filter>

  <circle cx="170" cy="80" r="50" fill="green" filter="url(#lightMe1)" />

  <!-- the light source is a feDistantLight element -->
  <text text-anchor="middle" x="280" y="22">feDistantLight</text>
  <filter id="lightMe2">
    <feDiffuseLighting in="SourceGraphic" result="light" lighting-color="white">
      <feDistantLight azimuth="240" elevation="20" />
    </feDiffuseLighting>

    <feComposite
      in="SourceGraphic"
      in2="light"
      operator="arithmetic"
      k1="1"
      k2="0"
      k3="0"
      k4="0" />
  </filter>

  <circle cx="280" cy="80" r="50" fill="green" filter="url(#lightMe2)" />

  <!-- the light source is a feSpotLight source -->
  <text text-anchor="middle" x="390" y="22">feSpotLight</text>
  <filter id="lightMe3">
    <feDiffuseLighting in="SourceGraphic" result="light" lighting-color="white">
      <feSpotLight
        x="360"
        y="5"
        z="30"
        limitingConeAngle="20"
        pointsAtX="390"
        pointsAtY="80"
        pointsAtZ="0" />
    </feDiffuseLighting>

    <feComposite
      in="SourceGraphic"
      in2="light"
      operator="arithmetic"
      k1="1"
      k2="0"
      k3="0"
      k4="0" />
  </filter>

  <circle cx="390" cy="80" r="50" fill="green" filter="url(#lightMe3)" />
</svg>
```

予想されるレンダリング:

![この例の予想されるレンダリング結果](fediffuselighting.png)

ライブレンダリング：

{{EmbedLiveSample("Example", 470, 170)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）)
- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDistantLight")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("fePointLight")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feSpotLight")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
