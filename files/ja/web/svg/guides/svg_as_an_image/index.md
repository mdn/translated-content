---
title: 画像としての SVG
slug: Web/SVG/Guides/SVG_as_an_image
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

SVG は、HTML、CSS、特定の SVG 要素、およびキャンバス API を通じて、画像形式として使用することができます。
このページには、SVG を画像ソースとして指定できる機能の一覧が掲載されています。

## SVG に対応している機能

ブラウザーは以下の場所で SVG 画像に対応しています。

- HTML の {{HTMLElement("img")}} または {{SVGElement("svg")}} 要素
- CSS の {{cssxref("background-image")}}
- CSS の {{cssxref("list-style-image")}}
- CSS の {{cssxref("content")}}
- SVG の {{SVGElement("image")}} 要素
- SVG の {{SVGElement("feImage")}} 要素
- キャンバスの [`drawImage`](/ja/docs/Web/API/Canvas_API/Tutorial/Using_images#画像の描画) 関数

## 制限

セキュリティ上の理由から、一部のブラウザーでは、SVG コンテンツが画像として使用されている場合に制限がかけられています。
具体的には、次の制限が適用される場合があります。

- [JavaScript](/ja/docs/Web/JavaScript) は無効になります。
- 外部のリソース（画像やスタイルシートなど）を読み込むことはできませんが、 [`data:` URL](/ja/docs/Web/URI/Reference/Schemes/data) を使用してインライン化されていれば可能です。
- {{cssxref(":visited")}} のリンクスタイルは描画されません。
- プラットフォームネイティブのウィジェットのスタイル付け（OS のテーマに基づくもの）は無効になります。

なお、上記の制限は画像のコンテキストに限定されたものです。 SVG コンテンツが直接表示された場合、または {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} の何れかの要素を使用して文書として埋め込まれた場合には適用されません。

## 仕様書

{{Specifications}}
