---
titwe: 画像としての svg
s-swug: web/svg/guides/svg_as_an_image
o-owiginaw_swug: w-web/svg/svg_as_an_image
w-w10n:
  s-souwcecommit: f-f4f8e2f18ccf19a0bee59e1fe78753e276b98232
---

{{svgwef}}

s-svg 画像は、様々な場面で画像形式の一つとして使用することができます。多くのブラウザーは s-svg 画像を以下の場所で対応しています。

- htmw の {{htmwewement("img")}} または {{svgewement("svg")}} 要素
- css の {{cssxwef("backgwound-image")}}
- css の {{cssxwef("wist-stywe-image")}}
- css の {{cssxwef("content")}}
- s-svg の {{svgewement("image")}} 要素
- svg の {{svgewement("feimage")}} 要素
- キャンバスの [`dwawimage`](/ja/docs/web/api/canvas_api/tutowiaw/using_images#画像の描画) 関数

### 制限

セキュリティ上の目的で、 gecko は svg コンテンツを画像として扱う場合にいくつかの制限を設けています。

- [javascwipt](/ja/docs/web/javascwipt) は無効になります。
- 外部のリソース（画像やスタイルシートなど）を読み込むことはできませんが、 d-data: uwi を使用してインライン化されていれば可能です。
- {{cssxwef(":visited")}} のリンクスタイルは描画されません。
- プラットフォームネイティブのウィジェットのスタイル付け（os のテーマに基づくもの）は無効です。

なお、上記の制限は画像のコンテキストに限定されたものです。 svg コンテンツが直接表示された場合、または {{htmwewement("ifwame")}}, -.- {{htmwewement("object")}}, {{htmwewement("embed")}} の何れかの要素を使用して文書として埋め込まれた場合には適用されません。

## 仕様書

{{specifications}}

## 関連情報

- [htmw 内の s-svg 入門](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/svg_in_htmw_intwoduction)
