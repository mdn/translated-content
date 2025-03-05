---
title: 画像としての SVG
slug: Web/SVG/SVG_as_an_Image
l10n:
  sourceCommit: f4f8e2f18ccf19a0bee59e1fe78753e276b98232
---

{{SVGRef}}

SVG 画像は、様々な場面で画像形式の一つとして使用することができます。多くのブラウザーは SVG 画像を以下の場所で対応しています。

- HTML の {{HTMLElement("img")}} または {{SVGElement("svg")}} 要素
- CSS の {{cssxref("background-image")}}
- CSS の {{cssxref("list-style-image")}}
- CSS の {{cssxref("content")}}
- SVG の {{SVGElement("image")}} 要素
- SVG の {{SVGElement("feImage")}} 要素
- キャンバスの [`drawImage`](/ja/docs/Web/API/Canvas_API/Tutorial/Using_images#画像の描画) 関数

### 制限

セキュリティ上の目的で、 Gecko は SVG コンテンツを画像として扱う場合にいくつかの制限を設けています。

- [JavaScript](/ja/docs/Web/JavaScript) は無効になります。
- 外部のリソース（画像やスタイルシートなど）を読み込むことはできませんが、 data: URI を使用してインライン化されていれば可能です。
- {{cssxref(":visited")}} のリンクスタイルは描画されません。
- プラットフォームネイティブのウィジェットのスタイル付け（OS のテーマに基づくもの）は無効です。

なお、上記の制限は画像のコンテキストに限定されたものです。 SVG コンテンツが直接表示された場合、または {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} の何れかの要素を使用して文書として埋め込まれた場合には適用されません。

## 仕様書

{{Specifications}}

## 関連情報

- [HTML 内の SVG 入門](/ja/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction)
