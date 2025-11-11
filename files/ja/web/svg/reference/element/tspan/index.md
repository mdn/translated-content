---
title: <tspan>
slug: Web/SVG/Reference/Element/tspan
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

**`<tspan>`** は [SVG](/ja/docs/Web/SVG) の要素で、 {{SVGElement('text')}} 要素内にあるサブテキストやその他の `<tspan>` 要素を定義します。これにより、必要に応じてサブテキストのスタイルや位置を調整することができます。

> [!NOTE]
> `<tspan>` 要素は、既定では折り返されません。折り返すには、CSS の {{CSSXRef("white-space")}} プロパティを使用してスタイルを設定する必要があります。

## 例

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
    _値の型_: ([**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage)) のリスト; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("y")}}
  - : テキストのベースラインの開始点の Y 座標です。
    _値の型_: ([**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage)) のリスト; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("dx")}}
  - : テキストの位置を直前のテキスト要素から水平方向にずらします。
    _値の型_: ([**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage)) のリスト; _既定値_: _none_; _アニメーション_: **可**
- {{SVGAttr("dy")}}
  - : テキストの位置を直前のテキスト要素から垂直方向にずらします。
    _値の型_: ([**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage)) のリスト; _既定値_: _none_; _アニメーション_: **可**
- {{SVGAttr("rotate")}}
  - : それぞれの文字の向きを回転します。文字ごとに個別に回転させることができます。
    _値の型_: [**\<list-of-number>**](/ja/docs/Web/SVG/Guides/Content_type#list-of-ts); _既定値_: none; _アニメーション_: **可**
- {{SVGAttr("lengthAdjust")}}
  - : テキストを`textLength` 属性で定義された幅に合わせるために伸縮する方法です。
    _値の型_: `spacing`|`spacingAndGlyphs`; _既定値_: `spacing`; _アニメーション_: **可**
- {{SVGAttr("textLength")}}
  - : テキストを伸縮して合わせる幅です。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _既定値_: _none_; _アニメーション_: **可**

## 使用コンテキスト

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXRef("white-space", "", "#svg_の_text_要素内の複数行")}}
