---
title: side
slug: Web/SVG/Reference/Attribute/side
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{SeeCompatTable}}

**`side`** 属性は、テキストが配置されるパスの側を（パス方向から見て相対的に）指定します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("textPath")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}

text {
  font:
    25px "Helvetica",
    "Arial",
    sans-serif;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <text>
    <textPath href="#circle1" side="left">パスの左側</textPath>
  </text>
  <text>
    <textPath href="#circle2" side="right">パスの右側</textPath>
  </text>

  <circle
    id="circle1"
    cx="100"
    cy="100"
    r="70"
    fill="transparent"
    stroke="silver" />
  <circle
    id="circle2"
    cx="320"
    cy="100"
    r="70"
    fill="transparent"
    stroke="silver" />
</svg>
```

{{EmbedLiveSample("Example", "420", "220")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>left</code> | <code>right</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>left</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `left`
  - : この値は、パスの（パスの方向に対して）左側にテキストを配置します。
- `right`
  - : この値は、パスの（パスの方向に対して）右側にテキストを配置します。これにより、事実上パスの方向が反転します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
