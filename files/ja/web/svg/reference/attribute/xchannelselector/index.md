---
title: xChannelSelector
slug: Web/SVG/Reference/Attribute/xChannelSelector
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`xChannelSelector`** 属性は、{{SVGAttr("in2")}} のどの色チャンネルを使用して、{{SVGAttr("in")}} のピクセルを x 軸に沿って変位させるかを示します。

## 要素

この属性は、SVG の {{SVGElement("feDisplacementMap")}} 要素で使用できます。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feImage
      href="mdn.svg"
      x="0"
      y="0"
      width="100%"
      height="100%"
      result="abc" />
    <feDisplacementMap
      in2="abc"
      in="SourceGraphic"
      scale="30"
      xChannelSelector="R" />
  </filter>
  <filter id="displacementFilter2">
    <feImage
      href="mdn.svg"
      x="0"
      y="0"
      width="100%"
      height="100%"
      result="abc" />
    <feDisplacementMap
      in2="abc"
      in="SourceGraphic"
      scale="30"
      xChannelSelector="B" />
  </filter>

  <text x="10" y="60" font-size="50" filter="url(#displacementFilter)">
    変位させたテキスト
  </text>
  <text x="10" y="120" font-size="50" filter="url(#displacementFilter2)">
    変位させたテキスト
  </text>
</svg>
```

{{EmbedLiveSample("Examples", "480", "200")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>R</code> | <code>G</code> | <code>B</code> | <code>A</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>A</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `R`
  - : {{SVGAttr("in2")}} で定義された入力画像の赤チャンネルを使用して、{{SVGAttr("in")}} で定義された入力画像のピクセルを x 軸に沿って変位させることを示します。
- `G`
  - : {{SVGAttr("in2")}} で定義された入力画像の緑チャンネルを使用して、{{SVGAttr("in")}} で定義された入力画像のピクセルを x 軸に沿って変位させることを示します。
- `B`
  - : {{SVGAttr("in2")}} で定義された入力画像の青チャンネルを使用して、{{SVGAttr("in")}} で定義された入力画像のピクセルを x 軸に沿って変位させることを示します。
- `A`
  - : {{SVGAttr("in2")}} で定義された入力画像のアルファチャンネルを使用して、{{SVGAttr("in")}} で定義された入力画像のピクセルを x 軸に沿って変位させることを示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
