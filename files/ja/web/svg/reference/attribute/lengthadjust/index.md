---
title: lengthAdjust
slug: Web/SVG/Reference/Attribute/lengthAdjust
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

lengthAdjust 属性は、テキストが {{SVGAttr("textLength")}} 属性で定義された長さにどのように引き伸ばされるかを制御します。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
  <g font-face="sans-serif">
    <text x="0" y="20" textLength="300" lengthAdjust="spacing">
      字間のみを使って引き伸ばします。
    </text>
    <text x="0" y="50" textLength="300" lengthAdjust="spacingAndGlyphs">
      時間と字形を使って引き伸ばします。
    </text>
    <text x="0" y="80" textLength="100" lengthAdjust="spacing">
      字間のみを使って縮小します。
    </text>
    <text x="0" y="110" textLength="100" lengthAdjust="spacingAndGlyphs">
      時間と字形を使って縮小します。
    </text>
  </g>
</svg>
```

{{EmbedLiveSample("Example", "420", "150")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>spacing</code> | <code>spacingAndGlyphs</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>spacing</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
