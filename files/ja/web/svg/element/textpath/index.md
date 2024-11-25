---
title: <textPath>
slug: Web/SVG/Element/textPath
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

{{SVGElement("path")}} の図形に沿ってテキストを表示するには、テキストを **`<textPath>`** 要素で囲み、その要素に {{SVGAttr("href")}} 属性を指定して {{SVGElement("path")}} 要素を参照します。

## 例

```css hidden live-sample___example
html,
body,
svg {
  height: 100%;
}
```

```html live-sample___example
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- to hide the path, it is usually wrapped in a <defs> element -->
  <!-- <defs> -->
  <path
    id="MyPath"
    fill="none"
    stroke="red"
    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />
  <!-- </defs> -->

  <text>
    <textPath href="#MyPath">Quick brown fox jumps over the lazy dog.</textPath>
  </text>
</svg>
```

{{EmbedLiveSample('Example', 200, 200)}}

## 属性

- {{SVGAttr("href")}}
  - : テキストを表示するパスまたは基本図形への URL です。 `path` 属性を設定した場合、 `href` は効果がありません。
    _値の型_: [**\<URL>**](/ja/docs/Web/SVG/Content_type#url) ; _既定値_: なし; _アニメーション_: **可**
- {{SVGAttr("lengthAdjust")}}
  - : テキストの長さを調整する場所です。文字間、または空間と文字の両方。
    _値の型_: `spacing`|`spacingAndGlyphs`; _既定値_: `spacing`; _アニメーション_: **可**
- {{SVGAttr("method")}}
  - : パスに沿って個々の文字描画する方法です。
    _値の型_: `align`|`stretch` ; _既定値_: `align`; _アニメーション_: **可**
- {{SVGAttr("path")}} {{Experimental_Inline}}
  - : テキストが描画されるパスです。
    _値の型_: [**\<path_data>**](/ja/docs/Web/SVG/Attribute/path#path-data) ; _既定値_: なし; _アニメーション_: **可**
- {{SVGAttr("side")}} {{Experimental_Inline}}
  - : テキストをパス上のどの辺に描画するかです。
    _値の型_: `left`|`right` ; _既定値_: `left`; _アニメーション_: **可**
- {{SVGAttr("spacing")}}
  - : 文字間をどのように処理すべきかです。
    _値の型_: `auto`|`exact` ; _既定値_: `exact`; _アニメーション_: **可**
- {{SVGAttr("startOffset")}}
  - : テキストの開始位置をパスの開始位置からどれだけずらすか。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/ja/docs/Web/SVG/Content_type#number) ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("textLength")}}
  - : テキストがレンダリングされる空間の幅。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/ja/docs/Web/SVG/Content_type#number) ; _既定値_: _auto_; _アニメーション_: **可**

## 使用コンテキスト

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
