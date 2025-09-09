---
title: filter
slug: Web/SVG/Reference/Attribute/filter
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`filter`** 属性は、 {{SVGElement("filter")}} 要素で定義したフィルター効果を指定します。

> [!NOTE]
> プレゼンテーション属性であるため、 `filter` には対応する CSS プロパティ {{cssxref("filter")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

プレゼンテーション属性として、任意の要素に適用することができますが、効果があるのは[コンテナー要素](/ja/docs/Web/SVG/Reference/Element#コンテナー要素)（{{SVGElement("defs")}} 要素以外を除く）、すべての[グラフィック要素](/ja/docs/Web/SVG/Reference/Element#グラフィック要素)、および {{SVGElement("use")}} 要素のみです。

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
  <filter id="blur">
    <feGaussianBlur stdDeviation="2" />
  </filter>

  <rect x="10" y="10" width="80" height="80" filter="url(#blur)" />
</svg>
```

{{EmbedLiveSample("Example", "220", "220")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>none</code>
        <a
          href="/ja/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#single_bar"
          title="Single bar: exactly one of the entities must be present"
          >|</a
        >
        <code>&#x3C;filter-value-list></code>
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

値の説明は CSS の {{cssxref("filter")}} プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("filter")}}
- CSS の {{cssxref("filter")}} プロパティ
