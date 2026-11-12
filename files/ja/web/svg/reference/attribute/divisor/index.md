---
title: divisor
slug: Web/SVG/Reference/Attribute/divisor
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`divisor`** 属性は、入力画像の色値に {{SVGElement("feConvolveMatrix")}} 要素の {{SVGAttr("kernelMatrix")}} を適用して得た数値を除算するための値を指定し、その結果を出力先の色値とします。

行列のすべての値の合計を除数にすると、結果全体の色の強度が均一化される傾向があります。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("feConvolveMatrix")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="convolveMatrix1" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="1 2 0 0 0 0 0 0 -1" divisor="1" />
  </filter>
  <filter id="convolveMatrix2" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="1 2 0 0 0 0 0 0 -1" divisor="8" />
  </filter>

  <image
    href="mdn_logo_only_color.png"
    width="200"
    height="200"
    filter="url(#convolveMatrix1)" />
  <image
    x="220"
    href="mdn_logo_only_color.png"
    width="200"
    height="200"
    filter="url(#convolveMatrix2)" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>
        {{SVGAttr("kernelMatrix")}} のすべての値の合計。合計が 0 の場合は
        <code>1</code>
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : この値は除数を定義します。指定した除数が `0` の場合は、デフォルト値が代わりに使用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
