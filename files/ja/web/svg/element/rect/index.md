---
title: <rect>
slug: Web/SVG/Element/rect
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

**`<rect>`** 要素は [SVG の基本図形](/ja/docs/Web/SVG/Tutorial/Basic_Shapes)であり、位置・幅・高さで定義される長方形を描画します。長方形は角を丸めることができます。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple rectangle -->
  <rect width="100" height="100" />

  <!-- Rounded corner rectangle -->
  <rect x="120" width="100" height="100" rx="15" />
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## 属性

- {{SVGAttr("x")}}
  - : 長方形の x 座標です。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage) ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("y")}}
  - : 長方形の y 座標です。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage) ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("width")}}
  - : 長方形の幅です。
    _値の型_: `auto`|[**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage) ; _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("height")}}
  - : 長方形の高さです。
    _値の型_: `auto`|[**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage) ; _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("rx")}}
  - : 長方形の角の水平方向の半径。`ry` が指定されていた場合は、それが既定値です。
    _値の型_: `auto`|[**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage) ; _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("ry")}}
  - : 長方形の角の垂直方向の半径。`rx` が指定されていた場合は、それが既定値です。
    _値の型_: `auto`|[**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage) ; _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("pathLength")}}
  - : 長方形の周囲の長さの合計をユーザー単位で指定します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Content_type#number) ; _既定値_: _none_; _アニメーション_: **可**

> [!NOTE]
> SVG2 以降、`x`, `y`, `width`, `height`, `rx`, `ry` は幾何プロパティであり、これらの属性はその要素の CSS プロパティとしても使用することができるということを意味しています。

## 使用可能な場所

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG プレゼンテーション属性](/ja/docs/Web/SVG/Attribute#プレゼンテーション属性)、{{SVGAttr("fill")}} や {{SVGAttr("stroke")}} など
- その他の SVG 基本図形: {{SVGElement('circle')}}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, **{{ SVGElement('polygon') }}**, {{ SVGElement('polyline') }}
