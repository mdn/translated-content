---
title: <pattern>
slug: Web/SVG/Element/pattern
---

{{SVGRef}}

**`<pattern>`** 要素は、ある領域をカバーするために、x座標とy座標の間隔を繰り返して (「タイル」) 再描画することができるグラフィックオブジェクトを定義します。

`<pattern>` は、他の[グラフィック要素](/ja/docs/Web/SVG/Tutorial/Basic_Shapes)の {{SVGAttr("fill")}} や {{SVGAttr("stroke")}} 属性から参照され、参照されたパターンでそれらの要素を埋めたり、描いたりします。

<h2 id="Example">例</h2>

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 230 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattern>
  </defs>

  <circle cx="50" cy="50" r="50" fill="url(#star)" />
  <circle
    cx="180"
    cy="50"
    r="40"
    fill="none"
    stroke-width="20"
    stroke="url(#star)" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## 属性

- {{SVGAttr("height")}}
  - : この属性はパターンタイルの高さを指定します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("href")}}
  - : この属性は `<pattern>` 属性の既定値を提供するテンプレートパターンを参照します。
    _値の型_: [**\<URL>**](/ja/docs/Web/SVG/Content_type#url); _既定値_: _none_; _アニメーション_: **可**
- {{SVGAttr("patternContentUnits")}}

  - : この属性は {{SVGElement("pattern")}} の内容物の座標系を定義します。
    _値の型_: `userSpaceOnUse`|`objectBoundingBox`; _既定値_: `userSpaceOnUse`; _アニメーション_: **可**

    > **メモ:** この属性は、`viewBox` 属性が `<pattern>` 上に指定された場合は効果がありません。

- {{SVGAttr("patternTransform")}}
  - : この属性は、パターン座標系からターゲット座標系への任意の追加変換の定義が入ります。
    _値の型_: **[\<transform-list>](/ja/docs/Web/SVG/Content_type#transform-list)**; _既定値_: _none_; _アニメーション_: **可**
- {{SVGAttr("patternUnits")}}
  - : この属性は `x`, `y`, `width`, `height` の各属性の座標系を定義します。
    _値の型_: `userSpaceOnUse`|`objectBoundingBox`; _既定値_: `objectBoundingBox`; _アニメーション_: **可**
- {{SVGAttr("preserveAspectRatio")}}
  - : この属性は、SVG フラグメントが異なるアスペクト比を持つコンテナーに埋め込まれた場合に、どのように変形させなければならないかを定義します。
    _値の型_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _既定値_: `xMidYMid meet`; _アニメーション_: **可**
- {{SVGAttr("viewBox")}}
  - : この属性は、パターンフラグメントの SVG ビューポートの境界を定義します。
    _値の型_: **[\<list-of-numbers>](/ja/docs/Web/SVG/Content_type#list-of-ts)** ; _既定値_: none; _アニメーション_: **可**
- {{SVGAttr("width")}}
  - : この属性はパターンタイルの幅を指定します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage) ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("x")}}
  - : この属性はパターンタイルの x 方向のシフト量を指定します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage) ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

  - : この属性は `<pattern>` 属性の既定値を提供するテンプレートパターンを参照します。
    _値の型_: [**\<URL>**](/ja/docs/Web/SVG/Content_type#url); _既定値_: _none_; _アニメーション_: **可**

    > **メモ:** `href` を実装しているブラウザーでは、 `href` と `xlink:href` を共に設定した場合、`xlink:href` は無視され `href` のみが使用されます。

- {{SVGAttr("y")}}
  - : この属性はパターンタイルの y 方向のシフト量を指定します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage) ; _既定値_: `0`; _アニメーション_: **可**

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute/Core)
  - : 最重要なもの: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [スタイル付け属性](/ja/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [条件処理属性](/ja/docs/Web/SVG/Attribute/Conditional_Processing)
  - : 最重要なもの: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute/Presentation)
  - : 最重要なもの: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- XLink 属性
  - : 最重要なもの: {{SVGAttr("xlink:title")}}

## 利用メモ

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
