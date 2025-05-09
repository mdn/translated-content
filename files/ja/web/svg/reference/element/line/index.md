---
title: <line>
slug: Web/SVG/Reference/Element/line
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

**`<line>`** は [SVG](/ja/docs/Web/SVG) の要素で、 SVG の基本図形であり、2 つの点をつなぐ直線を作成するために使用します。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />

  <!-- If you do not specify the stroke
       color the line will not be visible -->
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## 属性

- {{SVGAttr('x1')}}
  - : 線の始点の X 座標を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr('x2')}}
  - : 線の終点の X 座標を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr('y1')}}
  - : 線の始点の Y 座標を定義します。
    _Value type_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr('y2')}}
  - : 線の終点の Y 座標を定義します。
    _Value type_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("pathLength")}}
  - : パス全体の長さをユーザーの単位で定義します。
    _Value type_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _既定値_: _none_; _アニメーション_: **可**

## 使用上のメモ

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の SVG 基本図形: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('polygon') }}, **{{ SVGElement('polyline') }}**, {{ SVGElement('rect') }}
