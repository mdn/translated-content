---
title: <path>
slug: Web/SVG/Reference/Element/path
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

**`<path>`** は [SVG](/ja/docs/Web/SVG) の要素で、図形を定義する汎用的な要素です。全ての基本図形は path 要素によって定義することができます。

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
  <path
    d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## 属性

- {{SVGAttr("d")}}
  - : この属性は、図形のパスを定義します。
    _値の型_: **\<string>**; _既定値_: `''`; _アニメーション_: **可**
- {{SVGAttr("pathLength")}}
  - : この属性は、ユーザー単位系でのパスの全長を指定することを可能にします。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _既定値_: _none_; _アニメーション_: **可**

## 使用可能な場所

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG 基本図形: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
- [MDN の「ゼロから始める SVG 入門」チュートリアル : パス](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)
