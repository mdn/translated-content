---
title: <stop>
slug: Web/SVG/Reference/Element/stop
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<stop>`** は [SVG](/ja/docs/Web/SVG) の要素で、グラデーションで使用する色とその位置を定義します。この要素は常に {{SVGElement("linearGradient")}} または {{SVGElement("radialGradient")}} 要素の子要素です。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("offset")}}
  - : この属性は、グラデーションベクトルに沿って配置される色経由点の位置を定義します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _デフォルト値_: `0`; _アニメーション_: **可**
- {{SVGAttr("stop-color")}}
  - : この属性は、グラデーションの色経由点の色を定義します。CSS プロパティとして使用できます。
    _値の型_: [**\<color>**](/ja/docs/Web/SVG/Guides/Content_type#color); _デフォルト値_: `black`; _アニメーション_: **可**
- {{SVGAttr("stop-opacity")}}
  - : この属性は、グラデーションの色経由点の不透明度を定義します。CSS プロパティとして使用できます。
    _値の型_: [**\<opacity-value>**](/ja/docs/Web/SVG/Guides/Content_type#opacity_value); _デフォルト値_: `1`; _アニメーション_: **可**

## DOM インターフェイス

この要素は {{domxref("SVGStopElement")}} インターフェイスを実装しています。

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

  <!-- この線形グラデーションを使用 -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
