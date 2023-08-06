---
title: <tspan>
slug: Web/SVG/Element/tspan
---

{{SVGRef}}

SVG の **`<tspan>`** 要素は、 {{SVGElement('text')}} 要素内にあるサブテキストやその他の `<tspan>` 要素を定義します。これにより、必要に応じてサブテキストのスタイルや位置を調整することができます。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 40" xmlns="http://www.w3.org/2000/svg">
  <style>
    text {
      font: italic 12px serif;
    }
    tspan {
      font: bold 10px sans-serif;
      fill: red;
    }
  </style>

  <text x="10" y="30" class="small">
    You are
    <tspan>not</tspan>
    a banana!
  </text>
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## 属性

- {{SVGAttr("x")}}
  - : テキストのベースラインの開始点の X 座標です。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _既定値: none; Animatable_: **yes**
- {{SVGAttr("y")}}
  - : テキストのベースラインの開始点の Y 座標です。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _既定値: none; Animatable_: **yes**
- {{SVGAttr("dx")}}
  - : テキストの位置を直前のテキスト要素から水平方向にずらします。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("dy")}}
  - : テキストの位置を直前のテキスト要素から垂直方向にずらします。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _既定値: none; Animatable_: **yes**
- {{SVGAttr("rotate")}}
  - : それぞれの文字の向きを回転します。文字ごとに個別に回転させることができます。
    _値の型_: [**\<list-of-number>**](/ja/docs/Web/SVG/Content_type#List-of-Ts) ; _既定値_: none; _Animatable_: **yes**
- {{SVGAttr("lengthAdjust")}}
  - : テキストを`textLength` 属性で定義された幅に合わせるために伸縮する方法です。
    _値の型_: `spacing`|`spacingAndGlyphs`; _既定値_: `spacing`; _Animatable_: **yes**
- {{SVGAttr("textLength")}}
  - : テキストを伸縮して合わせる幅です。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _既定値_: _none_; _Animatable_: **yes**

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute/Core)
  - : 特に: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [スタイル属性](/ja/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [条件処理属性](/ja/docs/Web/SVG/Attribute/Conditional_Processing)
  - : 特に: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Event Attributes
  - : [グローバルイベント属性](/ja/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [グラフィックイベント属性](/ja/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute/Presentation)
  - : 特に: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('dominant-baseline')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr('text-anchor')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Aria 属性
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## 使用場面

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("svg.elements.tspan")}}
