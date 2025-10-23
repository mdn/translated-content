---
title: writing-mode
slug: Web/SVG/Reference/Attribute/writing-mode
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`writing-mode`** 属性は、 {{SVGElement("text")}} 要素の最初のインライン進行方向が左から右、右から左、上から下のいずれであるかを指定します。 `writing-mode` 属性は {{ SVGElement("text") }} 要素にのみ適用されます。 {{ SVGElement("tspan") }}、{{ SVGElement("tref") }}、{{ SVGElement("textPath") }} サブ要素には無視されます。（なお、インライン進行方向は、 Unicode 双方向アルゴリズムとプロパティ {{ SVGAttr("direction") }} および {{ SVGAttr("unicode-bidi") }} により、 {{ SVGElement("text") }} 要素内で変更される可能性があることに注意してください。）

> [!NOTE]
> プレゼンテーション属性であるため、 `writing-mode` には対応する CSS プロパティ {{cssxref("writing-mode")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は次の SVG 要素に使用することができます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

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
      <th scope="row">アニメーション</th>
      <td>可</td>
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

- CSS の {{cssxref("writing-mode")}} プロパティ
