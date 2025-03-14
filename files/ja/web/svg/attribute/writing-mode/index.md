---
title: writing-mode
slug: Web/SVG/Attribute/writing-mode
---

{{SVGRef}}

**`writing-mode`** 属性は、 {{SVGElement("text")}} 要素の最初のインライン進行方向が左から右、右から左、上から下のいずれであるかを指定します。 `writing-mode` 属性は {{ SVGElement("text") }} 要素にのみ適用されます。 {{ SVGElement("tspan") }}, {{ SVGElement("tref") }}, {{ SVGElement("altGlyph") }}, {{ SVGElement("textPath") }} サブ要素には無視されます。 (なお、インライン進行方向は、 Unicode 双方向アルゴリズムとプロパティ {{ SVGAttr("direction") }} および {{ SVGAttr("unicode-bidi") }} により、 {{ SVGElement("text") }} 要素内で変更される可能性があることに注意してください)。

> [!NOTE]
> プレゼンテーション属性なので、 `writing-mode` は CSS プロパティとして使用することができます。詳しくは CSS の {{cssxref("writing-mode")}} プロパティを参照してください。

プレゼンテーション属性として、どの要素にも適用できますが、 {{SVGElement("altGlyph")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}}, {{SVGElement("tref")}}, {{SVGElement("tspan")}} の 5 つの要素にのみ効果があります。

## 使用上の注意

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">既定値</th>
      <td><code>horizontal-tb</code></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>horizontal-tb</code> | <code>vertical-rl</code> |
        <code>vertical-lr</code>
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション可能</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

- `horizontal-tb`
  - : この値はブロックのフロー方向を上から下に定義します。書字方向と文字の方向は共に水平方向です。
- `vertical-rl`
  - : この値はブロックのフロー方向を右から左に定義します。書字方向と文字の方向は共に垂直方向です。
- `vertical-lr`
  - : この値はブロックのフロー方向を左から右に定義します。書字方向と文字の方向は共に垂直方向です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("writing-mode", "CSS writing-mode")}}
