---
title: stdDeviation
slug: Web/SVG/Reference/Attribute/stdDeviation
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`stdDeviation`** 属性は、ぼかし操作の標準偏差を定義します。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("feDropShadow")}}
- {{SVGElement("feGaussianBlur")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="gaussianBlur1">
    <feGaussianBlur stdDeviation="1" />
  </filter>
  <filter id="gaussianBlur2">
    <feGaussianBlur stdDeviation="5" />
  </filter>
  <filter id="gaussianBlur3" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="10" />
  </filter>

  <circle cx="100" cy="100" r="50" filter="url(#gaussianBlur1)" />
  <circle cx="240" cy="100" r="50" filter="url(#gaussianBlur2)" />
  <circle cx="380" cy="100" r="50" filter="url(#gaussianBlur3)" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
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

- `<number-optional-number>`
  - : 2 つの数値が指定された場合、1 つ目の数値は X 軸方向の標準偏差を表します。2 つ目の数値は Y 軸方向の標準偏差を表します。1 つの数値のみが指定された場合は、その値が X 軸と Y 軸の両方に使用されます。

    負の値は使用できません。値が 0 の場合、指定されたフィルタープリミティブの効果が無効になります（つまり、結果はフィルター処理前の入力画像となります）。X または Y のいずれか一方のみ `stdDeviation` が 0 の場合、ぼかし処理は値が 0 以外の方向に対してのみ適用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
