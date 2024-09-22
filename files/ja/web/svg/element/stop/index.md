---
title: <stop>
slug: Web/SVG/Element/stop
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

SVG の **`<stop>`** 要素は、グラデーションで使用する色と位置を定義します。この要素は常に {{SVGElement("linearGradient")}} または {{SVGElement("radialGradient")}} 要素の子です。

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
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Content_type#number)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("stop-color")}}
  - : この属性は、グラデーションの色経由点の色を定義します。 CSS プロパティとして使用することができます。
    _値の型_: `currentcolor`|[**\<color>**](/ja/docs/Web/SVG/Content_type#color)|[**\<icccolor>**](/ja/docs/Web/SVG/Content_type#icccolor); _既定値_: `black`; _アニメーション_: **可**
- {{SVGAttr("stop-opacity")}}
  - : この属性はグラデーションの色経由点の (不) 透明度を表します。 CSS プロパティとして使用することができます。
    _値の型_: [**\<opacity>**](/ja/docs/Web/SVG/Content_type#opacity_value); _既定値_: `1`; _アニメーション_: **可**

## 使用コンテキスト

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
