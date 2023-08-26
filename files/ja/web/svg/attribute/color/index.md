---
title: color
slug: Web/SVG/Attribute/color
---

{{SVGRef}}

**`color`** 属性は、間接的な値の候補である `currentcolor` を {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}}, {{SVGAttr("lighting-color")}} の各属性に与えるために使用します。

> **メモ:** プレゼンテーション属性として、`color` は CSS プロパティとして使用できます。詳しい情報は [CSS 色](/ja/docs/Web/CSS/color) を参照してください。

プレゼンテーション属性として、任意の要素に適用することができますが、上記のように SVG 要素には直接影響を与えません。

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code><a href="/ja/docs/Web/CSS/color_value">&#x3C;color></a></code>
        | <code>inherit</code>
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td>ユーザーエージェントによる</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

<h2 id="Example">例</h2>

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g color="green">
    <rect width="50" height="50" fill="currentcolor" />
    <circle
      r="25"
      cx="70"
      cy="70"
      stroke="currentcolor"
      fill="none"
      stroke-width="5" />
  </g>
</svg>
```

{{EmbedLiveSample("Example", "100%", "110")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
