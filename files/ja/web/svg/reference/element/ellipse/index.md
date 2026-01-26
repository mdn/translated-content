---
title: <ellipse>
slug: Web/SVG/Reference/Element/ellipse
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

**`<ellipse>`** は [SVG](/ja/docs/Web/SVG) の要素で、 SVG の基本的な図形であり、中心となる座標と x 方向と y 方向の半径両方を指定し、楕円を生成するために使用されます。

> [!NOTE]
> 楕円要素では楕円の傾きを指定することはできません（例えば、45 度の角度で傾斜した楕円を描画したい場合）が、 {{SVGAttr("transform")}} 属性を使用することで回転させることは可能です。

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
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## 属性

- {{SVGAttr("cx")}}
  - : 楕円の中心の x 座標。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("cy")}}
  - : 楕円の中心の y 座標。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("rx")}}
  - : 楕円の x 軸の半径。
    _値の型_: `auto`|[**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) ; _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("ry")}}
  - : 楕円の y 軸の半径。
    _値の型_: `auto`|[**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) ; _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("pathLength")}}
  - : この属性は、使用単位でのパスの全長を指定します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number) ; _既定値_: _none_; _アニメーション_: **可**

> [!NOTE]
> SVG2 以降、`cx`、`cy`、`rx`、`ry` は、幾何属性であり、これらの属性は要素の CSS プロパティとして使用することもできます。

## 使用可能な場所

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の SVG 基本図形: **{{ SVGElement('circle') }}**, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
