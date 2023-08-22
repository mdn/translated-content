---
title: <use>
slug: Web/SVG/Element/use
---

{{SVGRef}}

**`<use>`** 要素は SVG 文書の中からノード取り出して、別の場所に複製します。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue" />
  <use href="#myCircle" x="10" fill="blue" />
  <use href="#myCircle" x="20" fill="white" stroke="red" />
  <!--
stroke="red" will be ignored here, as stroke was already set on myCircle.
Most attributes (except for x, y, width, height and (xlink:)href)
do not override those set in the ancestor.
That's why the circles have different x positions, but the same stroke value.
  -->
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

効果は、あたかもそのノードが非公開の DOM に配下を含めて複製され、 HTML5 の [template 要素](/ja/docs/Web/HTML/Element/template)のように、 `use` 要素がある場所に貼り付けられたかのように同じになります。

`use` のほとんどの属性は、 `use` から*参照*される要素に既にある属性を上書き**しません**。 (これは CSS のスタイル属性がカスケードで「以前」に設定されたものを上書きする方法とは異なります)。 `use` 要素にある{{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("href")}} の各属性**のみ**が参照される要素に設定されているものを上書きします。ただし、参照される要素に設定されていない*他のすべての属性*は、 `use` 要素に適用**され得ます**。

クローンされたノードは公開されないので、 [CSS](/ja/docs/Web/CSS) を使って `use` 要素とその隠れた子孫要素にスタイル付けをする場合は注意が必要です。[CSS の継承](/ja/docs/Web/CSS/inheritance)を使用して明示的に要求しない限り、CSS 属性は隠された複製の DOM によって継承されることが保証されません。

セキュリティ上の理由で、ブラウザーは[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)を `use` 要素に適用して、 {{SVGAttr("href")}} 属性にあるオリジンをまたがる URL を読み込むことを拒否することがあります。現在のところ、 `use` 要素の同一オリジンポリシーを設定する方法は定義されていません。

> **警告:** SVG 2 で {{SVGAttr("xlink:href")}} 属性が非推奨になり、 {{SVGAttr("href")}} に置き換えられました。詳しくは {{SVGAttr("xlink:href")}} のページを参照してください。ただし、 {{SVGAttr("xlink:href")}} はブラウザー間の互換性のために今でも実装する必要があります (下記の[互換性一覧表](#browser_compatibility)を参照)。

## 属性

- {{SVGAttr("href")}}
  - : 複製する必要がある要素やフラグメントへの URL です。
    _値の型_: [**\<URL>**](/ja/docs/Web/SVG/Content_type#url) ; _既定値_: none; _Animatable_: **yes**
- {{SVGAttr("xlink:href")}}
  - : {{Deprecated_Header("SVG2")}}複製する必要がある要素やフラグメントの [\<IRI>](/ja/docs/Web/SVG/Content_type#iri) 参照です。
    _値の型_: [**\<IRI>**](/ja/docs/Web/SVG/Content_type#iri) ; _既定値_: none; _Animatable_: **yes**
- {{SVGAttr("x")}}
  - : この use 要素の X 座標です。
    _値の型_: [**\<coordinate>**](/ja/docs/Web/SVG/Content_type#coordinate) ; _既定値_: `0`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : この use 要素の Y 座標です。
    _値の型_: [**\<coordinate>**](/ja/docs/Web/SVG/Content_type#coordinate) ; _既定値_: `0`; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : The width of the use element.
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length) ; _既定値_: `0`; _Animatable_: **yes**
- {{SVGAttr("height")}}
  - : The height of the use element.
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length) ; _既定値_: `0`; _Animatable_: **yes**

> **メモ:** `width` および `height` は `use` 要素では効果がありません。ただし、参照される要素に [viewbox](/ja/docs/Web/SVG/Attribute/viewBox) がある場合を除きます。 すなわち、 `use` が `svg` または `symbol` 要素を参照していた時だけ効果があります。

> **メモ:** SVG2 から、 `x`, `y`, `width`, `height` は*位置プロパティ*となり、すなわちこれらの属性がその要素への CSS プロパティとしても使用することができるようになりました。

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute/Core)
  - : 特に: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [スタイル属性](/ja/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [条件処理属性](/ja/docs/Web/SVG/Attribute/Conditional_Processing)
  - : 特に: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- イベント属性
  - : [グローバルイベント属性](/ja/docs/Web/SVG/Attribute/Events#global_Event_Attributes), [グラフィックイベント属性](/ja/docs/Web/SVG/Attribute/Events#graphical_Event_Attributes)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute/Presentation)
  - : 特に: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA 属性
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`
- XLink 属性
  - : {{SVGAttr("xlink:href")}}, {{SVGAttr("xlink:title")}}

## 使用上の注意

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("svg.elements.use")}}
