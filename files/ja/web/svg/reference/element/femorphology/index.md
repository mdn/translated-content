---
title: <feMorphology>
slug: Web/SVG/Reference/Element/feMorphology
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`<feMorphology>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、入力画像の拡大・縮小に用いられます。このプリミティブの有用性は、特に太らせたり痩せさせたりする効果にあります。

他のフィルタープリミティブと同様に、既定では色成分を `linearRGB` {{glossary("color space", "色空間")}}で処理します。 {{svgattr("color-interpolation-filters")}} を使用すると、代わりに `sRGB` を使用することができます。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("in")}}
- {{SVGAttr("operator")}}
- {{SVGAttr("radius")}}

## DOM インターフェイス

この要素は {{domxref("SVGFEMorphologyElement")}} インターフェイスを実装しています。

## 例

### SVG コンテンツのフィルタリング

#### SVG

```html live-sample___filtering_svg_content
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180">
  <filter id="erode">
    <feMorphology operator="erode" radius="1" />
  </filter>
  <filter id="dilate">
    <feMorphology operator="dilate" radius="2" />
  </filter>
  <text y="1em">Normal text</text>
  <text id="thin" y="2em">Thinned text</text>
  <text id="thick" y="3em">Fattened text</text>
</svg>
```

#### CSS

```css live-sample___filtering_svg_content
text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
}

#thin {
  filter: url(#erode);
}

#thick {
  filter: url(#dilate);
}
```

{{EmbedLiveSample("Filtering_SVG_content", 340, 180)}}

### HTML コンテンツのフィルタリング

#### SVG

```html live-sample___filtering_html_content
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <filter id="erode">
    <feMorphology operator="erode" radius="1" />
  </filter>
  <filter id="dilate">
    <feMorphology operator="dilate" radius="2" />
  </filter>
</svg>

<p>Normal text</p>
<p id="thin">Thinned text</p>
<p id="thick">Fattened text</p>
```

#### CSS

```css live-sample___filtering_html_content
p {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
}

#thin {
  filter: url(#erode);
}

#thick {
  filter: url(#dilate);
}
```

{{EmbedLiveSample("Filtering_HTML_content", 340, 180)}}

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
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
