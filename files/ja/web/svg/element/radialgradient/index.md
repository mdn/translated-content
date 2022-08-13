---
title: radialGradient
slug: Web/SVG/Element/radialGradient
tags:
  - Element
  - SVG
  - SVG Gradient
translation_of: Web/SVG/Element/radialGradient
---
{{SVGRef}}

`radialGradient`要素はグラフィックス要素の塗りまたは線への放射状グラデーションを定義します。

## 使用可能な場所

{{svginfo}}

## 属性

### グローバル属性

- [コア属性](/ja/Web/SVG/Attribute#Core) »
- [プレゼンテーション属性](/ja/Web/SVG/Attribute#Presentation) »
- [Xlink 属性](/ja/Web/SVG/Attribute#XLink) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### 専用属性

- {{ SVGAttr("gradientUnits") }}
- {{ SVGAttr("gradientTransform") }}
- {{ SVGAttr("cx") }}
- {{ SVGAttr("cy") }}
- {{ SVGAttr("r") }}
- {{ SVGAttr("fx") }}
- {{ SVGAttr("fy") }}
- {{ SVGAttr("fr") }}
- {{ SVGAttr("spreadMethod") }}
- {{ SVGAttr("xlink:href") }}

## DOM インターフェース

この要素は [`SVGRadialGradientElement`](/ja/DOM/SVGRadialGradientElement "/ja/DOM/SVGRadialGradientElement") インターフェースを提供します。

## 例

### SVG

```html
<svg width="120" height="120" viewBox="0 0 120 120"
   xmlns="http://www.w3.org/2000/svg">

  <defs>
    <radialGradient id="exampleGradient">
      <stop offset="10%" stop-color="gold"/>
      <stop offset="95%" stop-color="green"/>
    </radialGradient>
  </defs>

  <circle fill="url(#exampleGradient)" cx="60" cy="60" r="50"/>
</svg>
```

### 結果

{{EmbedLiveSample("Example", 120, 120)}}

## 仕様

| Specification                                                                                                | Status                   | Comment         |
| ------------------------------------------------------------------------------------------------------------ | ------------------------ | --------------- |
| {{SpecName('SVG2', 'pservers.html#RadialGradients', '&lt;radialGradient&gt;')}}     | {{Spec2('SVG2')}} | `fr` 属性の追加 |
| {{SpecName('SVG1.1', 'pservers.html#RadialGradients', '&lt;radialGradient&gt;')}} | {{Spec2('SVG1.1')}} | 初期定義        |

## ブラウザ実装状況

{{Compat("svg.elements.radialGradient")}}

## 関連情報

- {{ SVGElement("linearGradient") }}
