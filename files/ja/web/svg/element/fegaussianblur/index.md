---
title: <feGaussianBlur>
slug: Web/SVG/Element/feGaussianBlur
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

**`<feGaussianBlur>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、ベルカーブを定義する {{SVGAttr("stdDeviation")}} で指定された量だけ入力画像をぼかします。

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

{{EmbedLiveSample("Simple_example",232,124,"/files/4227/feGaussianBlur.png")}}

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

{{EmbedLiveSample("Drop_shadow_example",125,124,"/files/4229/feGaussianBlur-dropshadow.png")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG フィルタープリミティブ属性](/ja/docs/Web/SVG/Attribute#filters_attributes)
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
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorial/Filter_effects)
