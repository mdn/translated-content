---
title: <feOffset>
slug: Web/SVG/Reference/Element/feOffset
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`<feOffset>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、入力画像をオフセットします。入力画像全体は {{SVGAttr("dx")}} と {{SVGAttr("dy")}} 属性で指定した値だけオフセットされます。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("in")}}
- {{SVGAttr("dx")}}
- {{SVGAttr("dy")}}

## DOM インターフェイス

この要素は {{domxref("SVGFEOffsetElement")}} インターフェイスを実装しています。

## 例

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="offset" width="180" height="180">
      <feOffset in="SourceGraphic" dx="60" dy="60" />
    </filter>
  </defs>

  <rect x="0" y="0" width="100" height="100" stroke="black" fill="green" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    stroke="black"
    fill="green"
    filter="url(#offset)" />
</svg>
```

### 結果

{{EmbedLiveSample("Example", 200, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

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
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
