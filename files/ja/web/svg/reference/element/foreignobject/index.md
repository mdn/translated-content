---
title: <foreignObject>
slug: Web/SVG/Reference/Element/foreignObject
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

**`<foreignObject>`** は [SVG](/ja/docs/Web/SVG) 要素で、異なる XML 名前空間の要素を含みます。ブラウザーのコンテキストでは、ほとんどの場合 (X)HTML です。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    div {
      color: white;
      font: 18px serif;
      height: 100%;
      overflow: auto;
    }
  </style>

  <polygon points="5,5 195,10 185,185 10,195" />

  <!-- よくある用途: HTML テキストを SVG へ埋め込む -->
  <foreignObject x="20" y="20" width="160" height="160">
    <!--
      HTML 文書に埋め込まれた SVG のコンテキストでは
      XHTML 名前空間は省略できますが、SVG 文書内の
      コンテキストでは必須です。
    -->
    <div xmlns="http://www.w3.org/1999/xhtml">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis
      mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum
      imperdiet eros. Aliquam erat volutpat.
    </div>
  </foreignObject>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

### 専用属性

- {{SVGAttr("height")}}
  - : The height of the foreignObject.
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) ; _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("width")}}
  - : The width of the foreignObject.
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) ; _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("x")}}
  - : The x coordinate of the foreignObject.
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("y")}}
  - : The y coordinate of the foreignObject.
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) ; _既定値_: `0`; _アニメーション_: **可**

> [!NOTE]
> SVG2 以降、`x`, `y`, `width`, `height` は幾何属性であり、これらの属性は要素の CSS プロパティとして使用することもできます。

## DOM インターフェイス

この要素は {{domxref("SVGForeignObjectElement")}} インターフェイスを実装しています。

## 使用可能な場所

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
