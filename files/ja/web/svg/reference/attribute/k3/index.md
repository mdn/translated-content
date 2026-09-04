---
title: k3
slug: Web/SVG/Reference/Attribute/k3
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`k3`** 属性は、{{SVGElement("feComposite")}} フィルタープリミティブの `arithmetic` 演算内で使用される値の一つを定義します。

ピクセルの構成は、次の式を用いて計算されます。

```js
result = k1 * i1 * i2 + k2 * i1 + k3 * i2 + k4;
```

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("feComposite")}}

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
  <filter id="composite1" x="0" y="0" width="100%" height="100%">
    <feComposite
      in2="SourceGraphic"
      operator="arithmetic"
      k1="1"
      k2="0"
      k3="1"
      k4="0" />
  </filter>
  <filter id="composite2" x="0" y="0" width="100%" height="100%">
    <feComposite
      in2="SourceGraphic"
      operator="arithmetic"
      k1="1"
      k2="0"
      k3="10"
      k4="0" />
  </filter>

  <image
    href="mdn.svg"
    x="0"
    y="0"
    width="200"
    height="200"
    filter="url(#composite1)" />
  <image
    href="mdn.svg"
    x="220"
    y="0"
    width="200"
    height="200"
    filter="url(#composite2)" />
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
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
