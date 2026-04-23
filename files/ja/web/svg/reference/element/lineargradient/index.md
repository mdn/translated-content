---
title: <linearGradient>
slug: Web/SVG/Reference/Element/linearGradient
l10n:
  sourceCommit: 6aeb1ae589087f90e99bdeffd57c258ebfc81b29
---

**`<linearGradient>`** は [SVG](/ja/docs/Web/SVG) の要素で、制作者が他の SVG 要素に適用する線形グラデーションを定義することができます。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("gradientUnits")}}
  - : この属性は、 `x1`, `x2`, `y1`, `y2` の各属性の座標系を定義します。
    _値の型_: `userSpaceOnUse` | `objectBoundingBox`; _デフォルト値_: `objectBoundingBox`; _アニメーション_: **可**
- {{SVGAttr("gradientTransform")}}
  - : この属性は、追加の[座標変換](/ja/docs/Web/SVG/Reference/Attribute/transform)をグラデーション座標系へ提供します。
    _値の型_: [**\<transform-list>**](/ja/docs/Web/SVG/Guides/Content_type#transform-list); _デフォルト値_: _等価変換_; _アニメーション_: **可**
- {{SVGAttr("href")}}
  - : この属性は、テンプレートとして使用する別の `<linearGradient>` 要素への参照を定義します。
    _値の型_: [**\<URL>**](/ja/docs/Web/SVG/Guides/Content_type#url); _デフォルト値_: none; _アニメーション_: **可**
- {{SVGAttr("spreadMethod")}}
  - : この属性は、グラデーションがグラデーションを含む図形の境界の内側で始まったり終わったりする場合の振る舞いを示します。
    _値の型_: `pad` | `reflect` | `repeat`; _デフォルト値_: `pad`; _アニメーション_: **可**
- {{SVGAttr("x1")}}
  - : この属性は、線形グラデーションが描画されるベクトルグラデーションの開始点の x 座標を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length); _デフォルト値_: `0%`; _アニメーション_: **可**
- {{SVGAttr("x2")}}
  - : この属性は、線形グラデーションが描画されるベクトルグラデーションの終了点の x 座標を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length); _デフォルト値_: `100%`; _アニメーション_: **可**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : テンプレートとして使用する別の `<linearGradient>` 要素への [\<IRI>](/ja/docs/Web/SVG/Guides/Content_type#iri) 参照です。
    _値の型_: [**\<IRI>**](/ja/docs/Web/SVG/Guides/Content_type#iri); _デフォルト値_: none; _アニメーション_: **可**
- {{SVGAttr("y1")}}
  - : この属性は、線形グラデーションが描画されるベクトルグラデーションの開始点の y 座標を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length); _デフォルト値_: `0%`; _アニメーション_: **可**
- {{SVGAttr("y2")}}
  - : この属性は、線形グラデーションが描画されるベクトルグラデーションの終了点の y 座標を定義します。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length); _デフォルト値_: `0%`; _アニメーション_: **可**

## DOM インターフェイス

この要素は {{domxref("SVGLinearGradientElement")}} インターフェイスを実装しています。

## 例

### 基本的な線形グラデーション

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 10 10"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- using my linear gradient -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Basic linear gradient', 150, '100%')}}

### 角度付き反復グラデーション

この例では、2 つの {{SVGElement("rect")}} 要素のアスペクト比は異なりますが、グラデーションの角度は同じです。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 500 500"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient
      id="grad"
      x1="0"
      y1="0"
      x2="20"
      y2="20"
      spreadMethod="repeat"
      gradientUnits="userSpaceOnUse">
      <stop offset="50%" stop-color="red" />
      <stop offset="50%" stop-color="gold" />
    </linearGradient>
  </defs>
  <rect width="100%" height="25%" fill="url(#grad)" />
  <rect width="100%" height="65%" fill="url(#grad)" y="30%" />
</svg>
```

{{EmbedLiveSample('Repeating angled gradient', 500, '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
