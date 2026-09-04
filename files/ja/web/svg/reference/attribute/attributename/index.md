---
title: attributeName
slug: Web/SVG/Reference/Attribute/attributeName
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`attributeName`** 属性は、アニメーション中に変更される対象要素の CSS プロパティまたは属性の名前を示します。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("animate")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="5s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "400", "250")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;name></code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- `<name>`
  - : この値は、アニメーションの対象となる要素の CSS プロパティまたは属性の名前を示します。

## 仕様書

{{Specifications}}

## 関連情報

- [SMIL による SVG アニメーション](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
