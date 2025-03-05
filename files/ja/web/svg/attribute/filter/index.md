---
title: filter
slug: Web/SVG/Attribute/filter
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}

**`filter`** 属性は、　{{SVGElement("filter")}}　要素で定義したフィルター効果を指定します。

> [!NOTE]
> プレゼンテーション属性として、 `filter` は CSS プロパティとして使用することができます。詳しい情報は {{cssxref("filter", "CSS の filter")}} を参照してください。

プレゼンテーション属性として、任意の要素に適用することができますが、効果があるのは[コンテナー要素](/ja/docs/Web/SVG/Element#コンテナー要素)（{{SVGElement("defs")}} 要素以外を除く）、すべての[グラフィック要素](/ja/docs/Web/SVG/Element#グラフィック要素)、および {{SVGElement("use")}} 要素のみです。

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
          href="/ja/docs/Web/CSS/Value_definition_syntax#single_bar"
          title="Single bar: exactly one of the entities must be present"
          >|</a
        >
        <code>&#x3C;filter-function-list></code>
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

値の説明は {{cssxref("filter", "CSS filter")}} プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("filter")}}
- {{cssxref("filter","CSS filter")}}
