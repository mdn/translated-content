---
title: <polygon>
slug: Web/SVG/Element/polygon
---

{{SVGRef}}

**`<polygon>`** 要素は、接続された一連の直線の区間で構成される閉じた図形を定義します。最後の点は最初の点と結ばれます。

開いた図形については {{SVGElement("polyline")}} 要素をご覧ください。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 既定で塗りつぶす多角形の例 -->
  <polygon points="0,100 50,25 50,75 100,0" />

  <!-- 同じ多角形で線を持ち塗りつぶされない例 -->
  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

{{EmbedLiveSample('例', 100, 100)}}

## 属性

- {{SVGAttr('points')}}
  - : この属性は多角形を描くのに必要な点 (絶対座標の `x,y` の組) のリストを定義します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Content_type#number)+ ; _既定値_: `""`; _アニメーション_: **可**
- {{SVGAttr("pathLength")}}
  - : This attribute lets specify the total length for the path, in user units.
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Content_type#number) ; _既定値_: _none_; _アニメーション_: **可**

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute/Core)
  - : 特に重要なもの: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [スタイル属性](/ja/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [条件処理属性](/ja/docs/Web/SVG/Attribute/Conditional_Processing)
  - : 特に重要なもの: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- イベント属性
  - : [グローバルイベント属性](/ja/docs/Web/SVG/Attribute/Events#global_event_attributes), [グラフィックイベント属性](/ja/docs/Web/SVG/Attribute/Events#graphical_event_attributes)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute/Presentation)
  - : 特に重要なもの: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA 属性
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## 使い方メモ

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("svg.elements.polygon")}}

## 関連情報

- **他の SVG 基本図形:**

  - {{ SVGElement('circle') }}
  - {{ SVGElement('ellipse') }}
  - {{ SVGElement('line') }}
  - {{ SVGElement('polyline') }}
  - {{ SVGElement('rect') }}
