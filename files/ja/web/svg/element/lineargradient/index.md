---
title: <linearGradient>
slug: Web/SVG/Element/linearGradient
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

**`<linearGradient>`** 要素により、他の SVG 要素に適用する線形グラデーションを定義することができます。

## 例

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

{{EmbedLiveSample('Example', 150, '100%')}}

## 属性

- {{SVGAttr("gradientUnits")}}
  - : この属性は、 `x1`, `x2`, `y1`, `y2` の各属性の座標系を定義します。
    _値の型_: `userSpaceOnUse`|`objectBoundingBox` ; _既定値_: `objectBoundingBox`; _アニメーション_: **可**
- {{SVGAttr("gradientTransform")}}
  - : この属性は、追加の[座標変換](/ja/docs/Web/SVG/Attribute/transform)をグラデーション座標系へ提供します。
    _値の型_: **[\<transform-list>](/ja/docs/Web/SVG/Content_type#transform-list)** ; _既定値_: _等価変換_; _アニメーション_: **可**
- {{SVGAttr("href")}}
  - : この属性は、テンプレートとして使用する別の `<linearGradient>` 要素への参照を定義します。
    _値の型_: [**\<URL>**](/ja/docs/Web/SVG/Content_type#url) ; _既定値_: none; _アニメーション_: **可**
- {{SVGAttr("spreadMethod")}}
  - : この属性は、グラデーションがグラデーションを含む図形の境界の内側で始まったり終わったりする場合の振る舞いを示します。
    _値の型_: `pad`|`reflect`|`repeat` ; _既定値_: `pad`; _アニメーション_: **可**
- {{SVGAttr("x1")}}
  - : この属性は、線形グラデーションが描画されるベクトルグラデーションの開始点の x 座標を定義します。
    _値の型_: {{cssxref("length-percentage")}} | {{cssxref("number")}}; _既定値_: `0%`; _アニメーション_: **可**
- {{SVGAttr("x2")}}
  - : この属性は、線形グラデーションが描画されるベクトルグラデーションの終了点の x 座標を定義します。
    _値の型_: {{cssxref("length-percentage")}} | {{cssxref("number")}}; _既定値_: `100%`; _アニメーション_: **可**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : テンプレートとして使用する別の `<linearGradient>` 要素への [\<IRI>](/ja/docs/Web/SVG/Content_type#iri) 参照です。
    _値の型_: [**\<IRI>**](/ja/docs/Web/SVG/Content_type#iri) ; _既定値_: none; _アニメーション_: **可**
- {{SVGAttr("y1")}}
  - : この属性は、線形グラデーションが描画されるベクトルグラデーションの開始点の y 座標を定義します。
    _値の型_: {{cssxref("length-percentage")}} | {{cssxref("number")}}; _既定値_: `0%`; _アニメーション_: **可**
- {{SVGAttr("y2")}}
  - : この属性は、線形グラデーションが描画されるベクトルグラデーションの終了点の y 座標を定義します。
    _値の型_: {{cssxref("length-percentage")}} | {{cssxref("number")}}; _既定値_: `0%`; _アニメーション_: **可**

## 使用可能な場所

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
