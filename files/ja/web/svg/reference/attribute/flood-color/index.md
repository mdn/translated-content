---
title: flood-color
slug: Web/SVG/Reference/Attribute/flood-color
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`flood-color`** 属性は、現在のフィルタープリミティブのサブ領域を塗りつぶす際に使用する色を示します。

> [!NOTE]
> プレゼンテーション属性であるため、`flood-color` には対応する CSS プロパティの {{cssxref("flood-color")}} もあります。両方が指定された場合、 CSS プロパティの方が優先されます。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("feFlood")}}
- {{SVGElement("feDropShadow")}}

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
  <filter id="flood1">
    <feFlood flood-color="skyblue" x="0" y="0" width="200" height="200" />
  </filter>
  <filter id="flood2">
    <feFlood flood-color="seagreen" x="0" y="0" width="200" height="200" />
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#flood1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#flood2)" />
</svg>
```

{{EmbedLiveSample("例", "420", "200")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("color")}}</td>
    </tr>
    <tr>
      <th scope="row">初期値</th>
      <td><code>black</code></td>
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

## 関連情報

- CSS の {{cssxref("flood-color")}} プロパティ
- {{SVGAttr("flood-opacity")}}
