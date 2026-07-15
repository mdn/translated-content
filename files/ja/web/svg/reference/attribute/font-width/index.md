---
title: font-width
slug: Web/SVG/Reference/Attribute/font-width
l10n:
  sourceCommit: 40fa68f80d38ba7142d47f52cdd0960325d63a44
---

{{SeeCompatTable}}{{non-standard_header}}

**`font-width`** 属性は、テキストの描画に使用される字形に対して、フォントファミリーの中から通常、圧縮、拡張の書体を選択します。

> [!NOTE]
> `font-width` 属性は、古い別名である {{SVGAttr("font-stretch")}} 属性に代わる最新の属性です。仕様上は `font-width` が推奨される名称ですが、現時点では `font-stretch` の方がより多くのブラウザーで対応しいます。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

> [!NOTE]
> プレゼンテーション属性であるため、 `font-width` には対応する CSS プロパティ {{cssxref("font-width")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>See {{cssxref("font-width", "", "#formal_syntax")}}</td>
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

- CSS {{cssxref("font-width")}} プロパティ
- 古い SVG {{SVGAttr("font-stretch")}} プロパティ
- CSS {{cssxref("font-stretch")}} プロパティ
