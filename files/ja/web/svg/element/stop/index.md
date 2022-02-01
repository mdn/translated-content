---
title: <stop>
slug: Web/SVG/Element/stop
tags:
  - 要素
  - リファレンス
  - SVG
  - SVG グラデーション
browser-compat: svg.elements.stop
translation_of: Web/SVG/Element/stop
---
{{SVGRef}}

SVG の **`<stop>`** 要素は、グラデーションで使用する色と位置を定義します。この要素は常に {{SVGElement("linearGradient")}} または {{SVGElement("radialGradient")}} 要素の子です。

<h2 id="Example">例</h2>

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="5%"  stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- using my linear gradient -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## 属性

*   {{SVGAttr("offset")}}
    *   : この属性は、グラデーションベクトルに沿って配置される色停止点の位置を定義します。
        *値の型*: [**\<number>**](/ja/docs/Web/SVG/Content_type#number)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage); *既定値*: `0`; *アニメーション*: **可**
*   {{SVGAttr("stop-color")}}
    *   : この属性は、グラデーションの色停止点の色を定義します。CSS プロパティとして使用することができます。
        *値の型*: `currentcolor`|[**\<color>**](/ja/docs/Web/SVG/Content_type#color)|[**\<icccolor>**](/ja/docs/Web/SVG/Content_type#icccolor); *既定値*: `black`; *アニメーション*: **可**
*   {{SVGAttr("stop-opacity")}}
    *   : この属性はグラデーションの色停止点の (不) 透明度を表します。CSS プロパティとして使用することができます。
        *値の型*: [**\<opacity>**](/ja/docs/Web/SVG/Content_type#opacity_value); *既定値*: `1`; *アニメーション*: **可**

### グローバル属性

*   [コア属性](/ja/docs/Web/SVG/Attribute/Core)
    *   : 最重要のもの: {{SVGAttr('id')}}
*   [スタイル付け属性](/ja/docs/Web/SVG/Attribute/Styling)
    *   : {{SVGAttr('class')}}, {{SVGAttr('style')}}
*   イベント属性
    *   : [グローバルイベント属性](/ja/docs/Web/SVG/Attribute/Events#global_event_attributes), [文書要素イベント属性](/ja/docs/Web/SVG/Attribute/Events#document_element_event_attributes)
*   [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute/Presentation)
    *   : 最重要のもの: {{SVGAttr('color')}}, {{SVGAttr('display')}}, {{SVGAttr('stop-color')}}, {{SVGAttr('stop-opacity')}}, {{SVGAttr('visibility')}}

## 利用メモ

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
