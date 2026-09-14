---
title: flood-opacity
slug: Web/SVG/Reference/Attribute/flood-opacity
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`flood-opacity`** 属性は、現在のフィルタープリミティブのサブ領域全体で使用する不透過度の値を示します。

> [!NOTE]
> プレゼンテーション属性であるため、`flood-opacity` には対応する CSS プロパティの {{cssxref("flood-opacity")}} もあります。両方が指定された場合、 CSS プロパティの方が優先されます。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("feFlood")}} および {{SVGElement("feDropShadow")}}

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
    <feFlood
      flood-color="seagreen"
      flood-opacity="1"
      x="0"
      y="0"
      width="200"
      height="200" />
  </filter>
  <filter id="flood2">
    <feFlood
      flood-color="seagreen"
      flood-opacity="0.3"
      x="0"
      y="0"
      width="200"
      height="200" />
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#flood1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#flood2)" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;alpha-value></code></td>
    </tr>
    <tr>
      <th scope="row">初期値</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<alpha-value>`
  - : 現在のフィルタープリミティブのサブ領域全体に使用する不透過度の値を示す数値またはパーセント値です。
    数値の `0` またはパーセント値の `0%` は完全に透明な色を表し、`1` または `100%` は完全に不透明な色を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("flood-opacity")}} プロパティ
- {{SVGAttr("flood-color")}}
