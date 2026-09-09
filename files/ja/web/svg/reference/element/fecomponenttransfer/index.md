---
title: <feComponentTransfer>
slug: Web/SVG/Reference/Element/feComponentTransfer
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

**`<feComponentTransfer>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、それぞれのピクセルについて、色成分ごとにデータの再マッピングを行います。これにより、明るさの調整、コントラストの調整、カラーバランス、閾値処理などの操作をすることができるす。

計算は、事前乗算されていない色値に対して行われます。それぞれのチャンネル（R、G、B、A）を、子要素 {{SVGElement("feFuncR")}}、{{SVGElement("feFuncB")}}、{{SVGElement("feFuncG")}}、{{SVGElement("feFuncA")}} が返す結果に変更することで、色が変更されます。複数の同じ要素が指定された場合は、最後に指定されたものが使用されます。また、いずれかのチャンネルを変更するための要素が指定されていない場合は、そのチャンネルに対して恒等変換が指定された場合と同じ効果になります。

他のフィルタープリミティブと同様に、デフォルトで `linearRGB` {{glossary("color space", "色空間")}}の色成分を処理します。{{svgattr("color-interpolation-filters")}} を使用することで、代わりに `sRGB` を使用することもできます。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("in")}}
- [フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM インターフェイス

この要素は {{domxref("SVGFEComponentTransferElement")}} インターフェイスを実装しています。

## 例

### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300">
  <defs>
    <linearGradient
      id="rainbow"
      gradientUnits="userSpaceOnUse"
      x1="0"
      y1="0"
      x2="100%"
      y2="0">
      <stop offset="0" stop-color="red"></stop>
      <stop offset="0.2" stop-color="yellow"></stop>
      <stop offset="0.4" stop-color="lime"></stop>
      <stop offset="0.6" stop-color="cyan"></stop>
      <stop offset="0.8" stop-color="blue"></stop>
      <stop offset="1" stop-color="purple"></stop>
    </linearGradient>
    <filter id="identity" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="identity"></feFuncR>
        <feFuncG type="identity"></feFuncG>
        <feFuncB type="identity"></feFuncB>
        <feFuncA type="identity"></feFuncA>
      </feComponentTransfer>
    </filter>
    <filter id="table" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="table" tableValues="0 0 1 1"></feFuncR>
        <feFuncG type="table" tableValues="1 1 0 0"></feFuncG>
        <feFuncB type="table" tableValues="0 1 1 0"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="discrete" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="discrete" tableValues="0 0 1 1"></feFuncR>
        <feFuncG type="discrete" tableValues="1 1 0 0"></feFuncG>
        <feFuncB type="discrete" tableValues="0 1 1 0"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="linear" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="linear" slope="0.5" intercept="0"></feFuncR>
        <feFuncG type="linear" slope="0.5" intercept="0.25"></feFuncG>
        <feFuncB type="linear" slope="0.5" intercept="0.5"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="gamma" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="gamma" amplitude="4" exponent="7" offset="0"></feFuncR>
        <feFuncG type="gamma" amplitude="4" exponent="4" offset="0"></feFuncG>
        <feFuncB type="gamma" amplitude="4" exponent="1" offset="0"></feFuncB>
      </feComponentTransfer>
    </filter>
  </defs>
  <g font-weight="bold">
    <text x="0" y="20">Default</text>
    <rect x="0" y="30" width="100%" height="20"></rect>
    <text x="0" y="70">Identity</text>
    <rect x="0" y="80" width="100%" height="20" filter="url(#identity)"></rect>
    <text x="0" y="120">Table lookup</text>
    <rect x="0" y="130" width="100%" height="20" filter="url(#table)"></rect>
    <text x="0" y="170">Discrete table lookup</text>
    <rect x="0" y="180" width="100%" height="20" filter="url(#discrete)"></rect>
    <text x="0" y="220">Linear function</text>
    <rect x="0" y="230" width="100%" height="20" filter="url(#linear)"></rect>
    <text x="0" y="270">Gamma function</text>
    <rect x="0" y="280" width="100%" height="20" filter="url(#gamma)"></rect>
  </g>
</svg>
```

### CSS

```css
rect {
  fill: url("#rainbow");
}
```

### 結果

{{EmbedLiveSample("Example", "100%", 340)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）)
- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
