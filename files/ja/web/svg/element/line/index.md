---
title: line
slug: Web/SVG/Element/line
---

{{SVGRef}}

**`<line>`** 要素は SVG の基本図形であり、2 つの点をつなぐ直線を作成するために使用します。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />

  <!-- If you do not specify the stroke
       color the line will not be visible -->
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## 属性

- {{SVGAttr('x1')}}
  - : 線の始点の X 座標を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage)|[**\<number>**](/ja/docs/Web/SVG/Content_type#Number) ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr('x2')}}
  - : 線の終点の X 座標を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage)|[**\<number>**](/ja/docs/Web/SVG/Content_type#Number) ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr('y1')}}
  - : 線の始点の Y 座標を定義します。
    _Value type_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage)|[**\<number>**](/ja/docs/Web/SVG/Content_type#Number) ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr('y2')}}
  - : 線の終点の Y 座標を定義します。
    _Value type_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage)|[**\<number>**](/ja/docs/Web/SVG/Content_type#Number) ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("pathLength")}}
  - : パス全体の長さをユーザーの単位で定義します。
    _Value type_: [**\<number>**](/ja/docs/Web/SVG/Content_type#Number) ; _既定値_: _none_; _アニメーション_: **可**

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute/Core)
  - : 主なもの: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [スタイル属性](/ja/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [条件付き処理属性](/ja/docs/Web/SVG/Attribute/Conditional_Processing)
  - : 主なもの: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- イベント属性
  - : [グローバルイベント属性](/ja/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [グラフィックイベント属性](/ja/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute/Presentation)
  - : 主なもの: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA 属性
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## 使用上のメモ

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("svg.elements.line")}}

## 関連情報

- その他の SVG 基本図形: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('polygon') }}, **{{ SVGElement('polyline') }}**, {{ SVGElement('rect') }}
