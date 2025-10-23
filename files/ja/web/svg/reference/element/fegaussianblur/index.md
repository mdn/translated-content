---
title: <feGaussianBlur>
slug: Web/SVG/Reference/Element/feGaussianBlur
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`<feGaussianBlur>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、ベルカーブを定義する {{SVGAttr("stdDeviation")}} で指定された量だけ入力画像をぼかします。

他のフィルタープリミティブと同様に、既定では色成分を `linearRGB` {{glossary("color space", "色空間")}}で処理します。 {{svgattr("color-interpolation-filters")}} を使用すると、代わりに `sRGB` を使用することができます。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("in")}}
- {{SVGAttr("stdDeviation")}}
- {{SVGAttr("edgeMode")}}

## DOM インターフェイス

この要素は {{domxref("SVGFEGaussianBlurElement")}} インターフェイスを実装しています。

## 例

### 単純な例

#### SVG

```html
<svg
  width="230"
  height="120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <filter id="blurMe">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" />

  <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)" />
</svg>
```

#### 結果

{{EmbedLiveSample("Basic_example", "", "130")}}

### ドロップシャドウの例

#### SVG

```html
<svg
  width="120"
  height="120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <filter id="dropShadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
    <feOffset dx="2" dy="4" />
    <feMerge>
      <feMergeNode />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" filter="url(#dropShadow)" />
</svg>
```

#### 結果

{{EmbedLiveSample("Drop_shadow_example", "", "130")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルター属性)
- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
