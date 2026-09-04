---
title: font-size-adjust
slug: Web/SVG/Reference/Attribute/font-size-adjust
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

`font-size-adjust` 属性は、開発者がある要素に対してアスペクト比を指定できるようにするもので、これにより、代替フォントが使用された場合でも、第一候補フォントの x-height が維持されます。

> [!NOTE]
> プレゼンテーション属性であるため、 `font-size-adjust` には対応する CSS プロパティ {{cssxref("font-size-adjust")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  width="600"
  height="80"
  viewBox="0 0 500 80"
  xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-family="Times, serif" font-size="10px">
    This text uses the Times font (10px), which is hard to read in small sizes.
  </text>
  <text y="40" font-family="Verdana, sans-serif" font-size="10px">
    This text uses the Verdana font (10px), which has relatively large lowercase
    letters.
  </text>
  <text
    y="60"
    font-family="Times, serif"
    font-size="10px"
    font-size-adjust="0.58">
    This is the 10px Times, but now adjusted to the same aspect ratio as the
    Verdana.
  </text>
</svg>
```

{{EmbedLiveSample("Example", "600", "100")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td><code>none</code> | {{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `none`
  - : フォントサイズは、{{ Cssxref("font-size") }} プロパティのみに基づいて選択します。
- {{cssxref("&lt;number&gt;")}}
  - : フォントサイズを、その小文字の高さ（フォントの x-height によって決定される）が、指定された数値の {{ Cssxref("font-size") }} 倍になるように設定します。

    指定する数値は、通常、第一候補の {{ Cssxref("font-family")}} の{{glossary("aspect ratio", "アスペクト比")}}（x-height とフォントサイズの比率）で指定します。つまり、第一候補のフォントが利用可能な場合、ブラウザーが `font-size-adjust` に対応しているかどうかに関わらず、ブラウザー上で同じサイズで表示されることになります。

    `0` を指定すると、高さのゼロのテキスト（非表示のテキスト）が生成されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{cssxref("font-size-adjust")}} プロパティ
