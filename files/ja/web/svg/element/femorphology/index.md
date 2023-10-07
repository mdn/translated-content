---
title: <feMorphology>
slug: Web/SVG/Element/feMorphology
---

{{SVGRef}}

**`<feMorphology>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、入力画像の拡大・縮小に用いられます。このプリミティブの有用性は、特に太らせたり痩せさせたりする効果にあります。

## 使用場面

{{svginfo}}

## 属性

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute#core_attributes)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute#presentation_attributes)
- [Filter primitive attributes](/ja/docs/Web/SVG/Attribute#filter_primitive_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### 特有の属性

- {{SVGAttr("in")}}
- {{SVGAttr("operator")}}
- {{SVGAttr("radius")}}

## DOM インターフェイス

この要素は {{domxref("SVGFEMorphologyElement")}} インターフェイスを実装しています。

## 例

<h3 id="Filtering_SVG_content">SVG コンテンツのフィルタリング</h3>

#### SVG

```html
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

```css
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

<h3 id="Filtering_HTML_content">HTML コンテンツのフィルタリング</h3>

#### SVG

```html
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

```css
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
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorial/Filter_effects)
