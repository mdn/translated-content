---
title: ellipse
slug: Web/SVG/Element/ellipse
---

{{SVGRef}}

`ellipse` 要素は SVG の基本的な図形であり、中心となる座標と x 方向と y 方向の半径両方を指定し、楕円を生成します。

> **メモ:** 楕円要素は楕円の傾きを指定することはできません (例えば、45 度の角度で傾斜した楕円を描画したい場合)、しかし {{SVGAttr("transform")}} 属性を使用することで回転させることは可能です。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>
```

{{EmbedLiveSample('LiveSample', 100, '100%')}}

## 属性

- {{SVGAttr("cx")}}
  - : 楕円の x 座標。
    _Value type_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _デフォルト値_: `0`; _アニメーション_: **yes**
- {{SVGAttr("cy")}}
  - : 楕円の y 座標。
    _Value type_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _デフォルト値_: `0`; _アニメーション_: **yes**
- {{SVGAttr("rx")}}
  - : x 軸の半径。
    _Value type_: `auto`|[**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _デフォルト値_: `auto`; _アニメーション_: **yes**
- {{SVGAttr("ry")}}
  - : y 軸の半径。
    _Value type_: `auto`|[**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _デフォルト値_: `auto`; _アニメーション_: **yes**
- {{SVGAttr("pathLength")}}
  - : この属性は、使用単位での単位合計パス長さを指定します。
    _Value type_: [**\<number>**](/ja/docs/Web/SVG/Content_type#Number) ; _デフォルト値_: _none_; _アニメーション_: **yes**

> **メモ:** SVG2 以降、`cx`、`cy`、`rx`、`ry` は、Geometry Properties であり、これらの属性は要素の CSS プロパティとして使用することもできます。

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute/Core)
  - : 注目すべき属性: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [スタイリング属性](/ja/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [条件処理属性](/ja/docs/Web/SVG/Attribute/Conditional_Processing)
  - : 注目すべき属性: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- イベント属性
  - : [グローバルイベント属性](/ja/docs/Web/SVG/Attribute/Events#Global_Event_Attributes)、[Graphical イベント属性](/ja/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute/Presentation)
  - : 注目すべき属性: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA 属性
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## 使用可能な場所

{{svginfo}}

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat("svg.elements.ellipse")}}

## 関連情報

- その他の SVG 基本図形: **{{ SVGElement('circle') }}**, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
