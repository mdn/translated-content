---
title: font-stretch
slug: Web/SVG/Reference/Attribute/font-stretch
l10n:
  sourceCommit: 3e97bf7d99f829a3cab9676837e8d9beabf9a1de
---

**`font-stretch`** 属性は、テキストの描画に使用される字形 (glyph) の圧縮または拡張の度合いを指定します。

> [!NOTE]
> `font-stretch` 属性は、対応する CSS プロパティの改名に合わせて {{SVGAttr("font-width")}} に改名されました。 互換性を維持するため、仕様書では `font-stretch` を `font-width` 属性の古い別名として残しています。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

> [!NOTE]
> プレゼンテーション属性であるため、 `font-stretch` には対応する CSS プロパティ {{cssxref("font-stretch")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>See {{cssxref("font-stretch", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>normal</code></td>
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

- SVG {{SVGAttr("font-width")}} 属性（置き換え後のもの）
- CSS {{cssxref("font-width")}} プロパティ
- CSS {{cssxref("font-stretch")}} プロパティ（古い別名）
