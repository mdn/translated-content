---
title: <foreignObject>
slug: Web/SVG/Element/foreignObject
---

{{SVGRef}}

**`<foreignObject>`** [SVG](/ja/docs/Web/SVG) 要素は、異なるユーザーエージェントによって描画されるグラフィックコンテンツを持つ外部 XML 名前空間を含めることを可能にします。含まれた外部グラフィックコンテンツは、SVG 変換や合成の対象となります。

The contents of `foreignObject` are assumed to be from a different namespace. Any SVG elements within a `foreignObject` will not be drawn, except in the situation where a properly defined SVG subdocument with a proper `xmlns` attribute specification is embedded recursively. One situation where this can occur is when an SVG document fragment is embedded within another non-SVG document fragment, which in turn is embedded within an SVG document fragment (e.g., an SVG document fragment contains an XHTML document fragment which in turn contains yet another SVG document fragment).

Usually, a `foreignObject` will be used in conjunction with the {{SVGElement("switch")}} element and the {{SVGAttr("requiredExtensions")}} attribute to provide proper checking for user agent support and provide an alternate rendering in case user agent support is not available.

## 利用可能な場所

{{svginfo}}

## 例

```xml
<svg width="400px" height="300px" viewBox="0 0 400 300"
     xmlns="http://www.w3.org/2000/svg">
  <desc>This example uses the 'switch' element to provide a
        fallback graphical representation of a paragraph, if
        XHTML is not supported.</desc>

  <!-- The 'switch' element will process the first child element
       whose testing attributes evaluate to true.-->
  <switch>

    <!-- Process the embedded XHTML if the requiredExtensions attribute
         evaluates to true (i.e., the user agent supports XHTML
         embedded within SVG). -->
    <foreignObject width="100" height="50"
                   requiredExtensions="http://www.w3.org/1999/xhtml">
      <!-- XHTML content goes here -->
      <body xmlns="http://www.w3.org/1999/xhtml">
        <p>Here is a paragraph that requires word wrap</p>
      </body>
    </foreignObject>

    <!-- Else, process the following alternate SVG.
         Note that there are no testing attributes on the 'text' element.
         If no testing attributes are provided, it is as if there
         were testing attributes and they evaluated to true.-->
    <text font-size="10" font-family="Verdana">
      <tspan x="10" y="10">Here is a paragraph that</tspan>
      <tspan x="10" y="20">requires word wrap.</tspan>
    </text>
  </switch>
</svg>
```

## 属性

### グローバル属性

- [条件処理属性](/ja/docs/Web/SVG/Attribute#Conditional_processing_attributes)
- [コア属性](/ja/docs/Web/SVG/Attribute#Core_attributes)
- [グラフィカルイベント属性](/ja/docs/Web/SVG/Attribute#Graphical_event_attributes)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute#Presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### 専用属性

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("width")}}
- {{SVGAttr("height")}}

## DOM インターフェイス

この要素は {{domxref("SVGForeignObjectElement")}} インターフェイスを実装します。

## 仕様

| 仕様                                                                                                             | 状態                     | コメント   |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('SVG2', 'embedded.html#ForeignObjectElement', '&lt;foreignObject&gt;')}} | {{Spec2('SVG2')}} |            |
| {{SpecName('SVG1.1', 'extend.html#ForeignObjectElement', '&lt;foreignObject&gt;')}} | {{Spec2('SVG1.1')}} | 初期の定義 |

## ブラウザー互換性

{{Compat("svg.elements.foreignObject")}}
