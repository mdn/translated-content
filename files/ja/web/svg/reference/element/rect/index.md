---
title: <rect>
slug: Web/SVG/Reference/Element/rect
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<rect>`** は [SVG](/ja/docs/Web/SVG) の要素で、 [SVG の基本図形](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes)であり、位置・幅・高さで定義される矩形を描画します。矩形は角を丸めることができます。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("x")}}
  - : 矩形の x 座標です。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("y")}}
  - : 矩形の y 座標です。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("width")}}
  - : 矩形の幅です。
    _値の型_: `auto` | [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("height")}}
  - : 矩形の高さです。
    _値の型_: `auto` | [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("rx")}}
  - : 矩形の角の水平方向の半径。`ry` が指定されていた場合は、それが既定値です。
    _値の型_: `auto` | [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("ry")}}
  - : 矩形の角の垂直方向の半径。`rx` が指定されていた場合は、それが既定値です。
    _値の型_: `auto` | [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("pathLength")}}
  - : 矩形の周囲の長さの合計をユーザー単位で指定します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _既定値_: _none_; _アニメーション_: **可**

> [!NOTE]
> SVG2 以降、`x`, `y`, `width`, `height`, `rx`, `ry` は幾何プロパティです。すなわち、これらの属性はその要素の CSS プロパティとしても使用することができます。

## DOM インターフェイス

この要素は {{domxref("SVGRectElement")}} インターフェイスを実装しています。

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
  <!-- 通常の矩形 -->
  <rect width="100" height="100" />

  <!-- 角丸矩形 -->
  <rect x="120" width="100" height="100" rx="15" />
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG プレゼンテーション属性](/ja/docs/Web/SVG/Reference/Attribute#プレゼンテーション属性)、{{SVGAttr("fill")}} や {{SVGAttr("stroke")}} など
- その他の SVG 基本図形: {{SVGElement('circle')}}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, **{{ SVGElement('polygon') }}**, {{ SVGElement('polyline') }}
