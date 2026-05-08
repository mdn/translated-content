---
title: yChannelSelector
slug: Web/SVG/Reference/Attribute/yChannelSelector
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`yChannelSelector`** 属性は、{{SVGAttr("in2")}} のどの色チャンネルを使用して、{{SVGAttr("in")}} のピクセルを y 軸に沿って変位させるかを示します。

## 要素

この属性は、SVG の {{SVGElement("feDisplacementMap")}} 要素で使用できます。

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
  - : このキーワードは、{{SVGAttr("in2")}} で定義された入力画像の赤色チャンネルを使用して、{{SVGAttr("in")}} で定義された入力画像のピクセルを y 軸に沿って変位させることを指定します。
- `G`
  - : このキーワードは、{{SVGAttr("in2")}} で定義された入力画像の緑色チャンネルを使用して、{{SVGAttr("in")}} で定義された入力画像のピクセルを y 軸に沿って変位させることを指定します。
- `B`
  - : このキーワードは、{{SVGAttr("in2")}} で定義された入力画像の青色チャンネルを使用して、{{SVGAttr("in")}} で定義された入力画像のピクセルを y 軸に沿って変位させることを指定します。
- `A`
  - : このキーワードは、{{SVGAttr("in2")}} で定義された入力画像のアルファチャンネルを使用して、{{SVGAttr("in")}} で定義された入力画像のピクセルを y 軸に沿って変位させることを指定します。

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
      yChannelSelector="R" />
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
      yChannelSelector="B" />
  </filter>

  <text x="10" y="60" font-size="50" filter="url(#displacementFilter)">
    Some displaced text
  </text>
  <text x="10" y="120" font-size="50" filter="url(#displacementFilter2)">
    Some displaced text
  </text>
</svg>
```

{{EmbedLiveSample("Examples", "480", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
