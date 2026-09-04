---
title: <feImage>
slug: Web/SVG/Reference/Element/feImage
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

**`<feImage>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、外部ソースから画像データを取得し、そのピクセルデータを出力します（すなわち、外部ソースが SVG 画像である場合は、ラスタライズされます）。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("crossorigin")}}
- {{SVGAttr("fetchpriority")}} {{experimental_inline}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("href")}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
- [フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM インターフェイス

この要素は {{domxref("SVGFEImageElement")}} インターフェイスを実装しています。

## 例

### SVG

```html
<svg
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="200"
  height="200">
  <defs>
    <filter id="image">
      <feImage href="mdn_logo_only_color.png" />
    </filter>
  </defs>

  <rect x="10%" y="10%" width="80%" height="80%" filter="url(#image)" />
</svg>
```

### 結果

{{EmbedLiveSample("Example", 200, 210)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルター属性)
- {{SVGAttr("flood-color")}} 属性
- {{SVGAttr("flood-opacity")}} 属性
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateTransform")}}
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
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- {{SVGAttr("fetchpriority")}} 属性
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
