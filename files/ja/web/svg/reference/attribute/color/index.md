---
title: color
slug: Web/SVG/Reference/Attribute/color
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`color`** 属性は、間接的な値の候補である `currentColor` を {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}}, {{SVGAttr("lighting-color")}} の各属性に与えるために使用します。

> [!NOTE]
> プレゼンテーション属性であるため、 `color` には対応する CSS プロパティの {{cssxref("color")}} があります。両方が指定された場合、 CSS プロパティの方が優先されます。

技術的には、`color` は任意の要素に適用できますが、SVG 要素には直接影響しません。

## 例

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
    <rect width="50" height="50" fill="currentColor" />
    <circle
      r="25"
      cx="70"
      cy="70"
      stroke="currentColor"
      fill="none"
      stroke-width="5" />
  </g>
</svg>
```

{{EmbedLiveSample("Example", "100%", "110")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code><a href="/ja/docs/Web/CSS/Reference/Values/color_value">&#x3C;color></a></code>
        | <code>inherit</code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>ユーザーエージェントによる</td>
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

- CSS の {{cssxref("color")}} プロパティ
