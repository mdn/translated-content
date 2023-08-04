---
title: <hatchpath>
slug: orphaned/Web/SVG/Element/hatchpath
---

{{SVGRef}}{{SeeCompatTable}}

**`<hatchpath>`** は [SVG](/ja/docs/Web/SVG) の要素で、 {{SVGElement("hatch")}} 要素で使用されるハッチパスを定義します。

## 使用場所

{{svginfo}}

## 属性

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute#Core_attributes)
- [グローバルイベント属性](/ja/docs/Web/SVG/Attribute#Global_event_attributes)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute#Presentation_attributes)
- [スタイル属性](/ja/docs/Web/SVG/Attribute#Style_attributes)

### 固有の属性

- {{SVGAttr("d")}}
- {{SVGAttr("offset")}}

## DOM インターフェイス

この要素は {{domxref("SVGHatchpathElement")}} インターフェイスを実装しています。

## 例

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <hatch id="hatch" hatchUnits="userSpaceOnUse" pitch="5"
        rotate="135">
      <hatchpath stroke="#a080ff" stroke-width="2"/>
    </hatch>
  </defs>

  <rect fill="url(#hatch)" stroke="black" stroke-width="2"
     x="10%" y="10%" width="80%" height="80%" />
</svg>
```

### 結果

{{EmbedLiveSample("Example", 200, 200)}}

## ブラウザーの互換性

{{Compat("svg.elements.hatchpath")}}

## 関連情報

- {{SVGElement("hatch")}}
