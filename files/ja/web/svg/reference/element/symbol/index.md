---
title: <symbol>
slug: Web/SVG/Reference/Element/symbol
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<symbol>`** は [SVG](/ja/docs/Web/SVG) 要素で、{{SVGElement("use")}} 要素によってインスタンス化することができるグラフィカルなテンプレートオブジェクトを定義する際に使用されます。

`<symbol>` 要素を同じ文書内で複数回使用されるグラフィックに用いることで、構造と意味づけが追加されます。構造が豊かな文書は、グラフィック、音声、点字として表示される可能性があり、これによりアクセシビリティが向上します。

> [!NOTE]
> `<symbol>` 要素自体はレンダリングされることを意味していません。 `<symbol>` 要素のインスタンス（つまり、{{SVGElement("use")}} 要素による `<symbol>` への参照）のみがレンダリングされます。すなわち、ブラウザーによっては、CSS の {{cssxref("display")}} プロパティの指示に関わらず、`<symbol>` 要素を直接表示しない場合があります。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("height")}}
  - : この属性は、シンボルの高さを決定します。
    値の型: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); 既定値: `auto`; アニメーション: **可**
- {{SVGAttr("preserveAspectRatio")}}
  - : この属性は、 SVG 断片が異なる{{glossary("aspect ratio", "アスペクト比")}}を持つコンテナーに埋め込まれた場合、どのように変形されるかを定義する。
    値の型: (`none` | `xMinYMin` | `xMidYMin` | `xMaxYMin` | `xMinYMid` | `xMidYMid` | `xMaxYMid` | `xMinYMax` | `xMidYMax` | `xMaxYMax`) (`meet` | `slice`)?; 既定値: `xMidYMid meet`; アニメーション: **可**
- {{SVGAttr("refX")}}
  - : この属性は、シンボルの参照点の x 座標を決定します。
    値の型: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) | `left` | `center` | `right`; 既定値: None; アニメーション: **可**
- {{SVGAttr("refY")}}
  - : この属性は、シンボルの参照点の y 座標を決定します。
    値の型: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage) | `top` | `center` | `bottom`; 既定値: None; アニメーション: **可**
- {{SVGAttr("viewBox")}}
  - : この属性は、現在のシンボルに対する SVG ビューポートの境界を定義します。
    値の型: **[\<list-of-numbers>](/ja/docs/Web/SVG/Guides/Content_type#list-of-ts)**; 既定値: none; アニメーション: **可**
- {{SVGAttr("width")}}
  - : この属性は、シンボルの幅を決定します。
    値の型: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); 既定値: `auto`; アニメーション: **可**
- {{SVGAttr("x")}}
  - : この属性は、シンボルの x 座標を決定します。
    値の型: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); 既定値: `0`; アニメーション: **可**
- {{SVGAttr("y")}}
  - : この属性は、シンボルの y 座標を決定します。
    値の型: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); 既定値: `0`; アニメーション: **可**

## DOM インターフェイス

この要素は {{domxref("SVGSymbolElement")}} インターフェイスを実装しています。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg">
  <!-- 独自の座標系の中で定義したシンボル -->
  <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
    <circle cx="1" cy="1" r="1" />
  </symbol>

  <!-- シンボルの位置を具体化するグリッド -->
  <path
    d="M0,10 h80 M10,0 v20 M25,0 v20 M40,0 v20 M55,0 v20 M70,0 v20"
    fill="none"
    stroke="pink" />

  <!-- シンボルのすべてのインスタンス -->
  <use href="#myDot" x="5" y="5" opacity="1.0" />
  <use href="#myDot" x="20" y="5" opacity="0.8" />
  <use href="#myDot" x="35" y="5" opacity="0.6" />
  <use href="#myDot" x="50" y="5" opacity="0.4" />
  <use href="#myDot" x="65" y="5" opacity="0.2" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
