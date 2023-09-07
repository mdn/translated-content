---
title: circle
slug: Web/SVG/Element/circle
---

{{SVGRef}}

**`<circle>`** [SVG](/ja/docs/Web/SVG) 要素は SVG の基本的な図形を表すものであり、中心座標と半径を指定して円を描画します。

## 使用可能な場所

{{svginfo}}

## 属性値

### グローバル属性

- [条件処理属性](/ja/SVG/Attribute#Conditional_processing_attributes)
- [コア属性](/ja/SVG/Attribute#Core_attributes)
- [グラフィカルイベント属性](/ja/SVG/Attribute#Graphical_event_attributes)
- [プレゼンテーション属性](/ja/SVG/Attribute#Presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### 専用属性

- {{SVGAttr("cx")}}
- {{SVGAttr("cy")}}
- {{SVGAttr("r")}}

## DOM インターフェイス

この要素は [SVGCircleElement](/ja/docs/Web/API/SVGCircleElement) インターフェイスを実装しています。

## 例

### SVG

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="100" />
</svg>
```

### 出力

{{EmbedLiveSample('Example', 200, 200)}}

## 仕様

{{Specifications}}

## ブラウザ実装状況

{{Compat("svg.elements.circle")}}

## 関連情報

- {{ SVGElement("ellipse") }}
