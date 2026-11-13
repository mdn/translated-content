---
title: <stop>
slug: Web/SVG/Reference/Element/stop
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

**`<stop>`** は [SVG](/ja/docs/Web/SVG) の要素で、グラデーションで使用する色とその位置を定義します。この要素は常に {{SVGElement("linearGradient")}} または {{SVGElement("radialGradient")}} 要素の子です。

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

- {{SVGAttr("offset")}}
  - : この属性は、グラデーションベクトルに沿って配置される色経由点の位置を定義します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("stop-color")}}
  - : この属性は、グラデーションの色経由点の色を定義します。 CSS プロパティとして使用することができます。
    _値の型_: [**\<color>**](/ja/docs/Web/SVG/Guides/Content_type#color); _既定値_: `black`; _アニメーション_: **可**
- {{SVGAttr("stop-opacity")}}
  - : この属性はグラデーションの色経由点の (不) 透明度を表します。 CSS プロパティとして使用することができます。
    _値の型_: [**\<opacity-value>**](/ja/docs/Web/SVG/Guides/Content_type#opacity_value); _既定値_: `1`; _アニメーション_: **可**

## 使用コンテキスト

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
