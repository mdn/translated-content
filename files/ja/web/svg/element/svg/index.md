---
title: svg
slug: Web/SVG/Element/svg
---

{{SVGRef}}

`svg` 要素は、新しい座標系と[ビューポート](/ja/docs/Web/SVG/Attribute/viewBox)を定義するコンテナです。これは SVG ドキュメントの最も外側の要素として使用されますが、SVG または HTML ドキュメントの中に SVG フラグメントを埋め込むためにも使用できます。

> **メモ:** `xmlns` 属性は *SVG ドキュメント*の最も外側の `svg` 要素にのみ必要です。内部の `svg` 要素や HTML 文書の内部には不要です。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 300 100"
  xmlns="http://www.w3.org/2000/svg"
  stroke="red"
  fill="grey">
  <circle cx="50" cy="50" r="40" />
  <circle cx="150" cy="50" r="4" />

  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4" />
  </svg>
</svg>
```

{{EmbedLiveSample('Example', 300, 100)}}

## 属性

- {{SVGAttr("baseProfile")}} {{deprecated_inline}}
  - : 文書が要求する最小の SVG 言語プロファイル
    _値の型_: **\<string>** ; _初期値_: none; _Animatable_: **no**
- {{SVGAttr("contentScriptType")}} {{deprecated_inline}}
  - : SVG フラグメントで用いられる初期記述言語
    _値の型_: **\<string>** ; _初期値_: `application/ecmascript`; _アニメーション可否_: **no**
- {{SVGAttr("contentStyleType")}} {{deprecated_inline}}
  - : SVG フラグメントで用いられる初期のスタイルシート言語
    _値の型_: **\<string>** ; _初期値_: `text/css`; _アニメーション可否_: **no**
- {{SVGAttr("height")}}
  - : 矩形ビューポートで表示される高さ (それ自身の座標系の高さではありません)
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _初期値_: `auto`; _アニメーション可否_: **yes**
- {{SVGAttr("preserveAspectRatio")}}
  - : 異なるアスペクト比での表示時に、`svg`フラグメントがどう変形されるか
    _値の型_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _初期値_: `xMidYMid meet`; _アニメーション可否_: **yes**
- {{SVGAttr("version")}} {{deprecated_inline}}
  - : 要素内の内容にどのバージョンの SVG が用いられるか
    _値の型_: **[\<number>](/ja/docs/Web/SVG/Content_type#Number)** ; _初期値_: none; _アニメーション可否_: **no**
- {{SVGAttr("viewBox")}}
  - : The SVG viewport coordinates for the current SVG fragment.
    _値の型_: **[\<list-of-numbers>](/ja/docs/Web/SVG/Content_type#List-of-Ts)** ; _初期値_: none; _アニメーション可否_: **yes**
- {{SVGAttr("width")}}
  - : 矩形ビューポートで表示される幅 (それ自身の座標系の幅ではありません)
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _初期値_: `auto`; _アニメーション可否_: **yes**
- {{SVGAttr("x")}}
  - : SVG コンテナが表示される x 座標。最も外側の`SVG`要素では効果ありません。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _初期値_: `0`; _アニメーション可否_: **yes**
- {{SVGAttr("y")}}
  - : SVG コンテナが表示される y 座標。最も外側の`SVG`要素では効果ありません。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#Percentage) ; _初期値_: `0`; _Animatable_: **yes**

> **メモ:** SVG2 で開始する場合には、`x`, `y`, `width`, `height` は、*ジオメトリプロパティ*です。これは、これらの属性が CSS プロパティとして用いられることを意味します。

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute/Core)
  - : 特に: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [スタイル属性](/ja/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [条件処理属性](/ja/docs/Web/SVG/Attribute/Conditional_Processing)
  - : 特に: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- イベント属性
  - : [グローバルイベント属性](/ja/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [グラフィカルイベント属性](/ja/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes), [文書イベント属性](/ja/docs/Web/SVG/Attribute/Events#Document_Event_Attributes), [文書要素イベント属性](/ja/docs/Web/SVG/Attribute/Events#Document_Element_Event_Attributes)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute/Presentation)
  - : 特に: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Aria 属性
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## 使用上の注意

{{svginfo}}

## 仕様

{{Specifications}}

## ブラウザの実装状況

{{Compat("svg.elements.svg")}}
