---
title: fill-opacity
slug: Web/SVG/Attribute/fill-opacity
---

{{SVGRef}}

**`fill-opacity`** 属性は、図形に適用されるペイントサーバー(_色_, _勾配_, _パターン_, 等)の不透明度を定義するプレゼンテーション属性です。

> **メモ:** プレゼンテーション属性としての`fill-opacity`CSS プロパティに適用できます。

プレゼンテーション属性として、任意の要素に適用可能ですが、次の 11 個の要素のみで効果があります: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 既定のfill不透明度: 1 -->
  <circle cx="50" cy="50" r="40" />

  <!-- 数値で指定するfill不透明度 -->
  <circle cx="150" cy="50" r="40" fill-opacity="0.7" />

  <!-- 割合で指定するfill不透明度 -->
  <circle cx="250" cy="50" r="40" fill-opacity="50%" />

  <!-- CSSプロパティで指定するfill不透明度 -->
  <circle cx="350" cy="50" r="40" style="fill-opacity: .25;" />
</svg>
```

{{EmbedLiveSample('topExample', '100%', 150)}}

## 使用上の注意

| 値                 | `[0-1]` \| **[\<percentage>](/ja/docs/Web/SVG/Content_type#Paint)** |
| ------------------ | ------------------------------------------------------------------- |
| 規定値             | `1`                                                                 |
| アニメーション可否 | はい                                                                |

> **メモ:** SVG2 では、`fill-opacity`への割合値を導入していますが、状況としてはこれはまだ広く対応されているわけではありません(_以下の[ブラウザ実装状況](#Browser_Compatibility)を参照_)。最良の実装としては、不透明度を`[0-1]`の範囲の値として指定することです。

## ブラウザー実装状況

{{Compat("svg.attributes.presentation.fill-opacity")}}

## 仕様

{{Specifications}}
