---
title: 仕様書一覧表
slug: >-
  conflicting/MDN/Writing_guidelines/Page_structures_5ea871ce36d498595dfc8b64cac16ee9
tags:
  - ガイド
  - MDN メタ
  - 構造
translation_of: MDN/Structures/Specification_tables
original_slug: MDN/Structures/Specification_tables
---
{{MDNSidebar}}

MDN 上のすべてのリファレンスページでは、 API または技術が定義されている仕様書に関する情報を提供するようにしてください。この記事ではこれらの表の外見を示し、構築方法を説明します。

この表は[互換性一覧表](/ja/docs/MDN/Structures/Compatibility_tables)と似ており、ふつうは両方ともリファレンスページの中にあります。

## 標準の仕様書一覧表

標準の仕様書の節は次のようになります。

```html
<h2 id="仕様書">仕様書</h2>

\{{Specifications}}
```

`\{{Specifications}}` マクロはすべての作業を行い、関連する最新の仕様書を含む一覧表を生成します。
どの機能に対して仕様書を読み込むかを決定するために、ページの先頭部分の `browser-compat` プロパティをチェックします。

もし、ページが `browser-compat: css.property.text-align` のような先頭部分を持っていれば、マクロは {{cssxref("text-align")}} の仕様書を取得し、表に表示します。

### 仕様書

{{Specifications("css.properties.text-align")}}

## 先頭部分のない仕様書一覧表

先頭部分が用意されていないページで仕様書の節を表示したい場合、 browser-compat クエリーを直接マクロに渡し、 `{{Specifications("css.properties.text-align")}}` とすることができます。

## 標準外の機能

（既に）仕様書に載っていない機能を文書化する場合は、 `\{{Specifications}}` マクロを呼び出さないでください。

その代わり、標準化の状況や考えられる代替案についての情報を提供するようにしましょう。例えば次のようにします。

- このメソッドはもう標準化路線にありません。互換性のために残してあります。代わりに _他のこのメソッド_ を使用してください。
- このメソッドはもともと [DOM Level 2 Traversal and Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/) の一部でしたが、現在の DOM 仕様には存在しません。この機能は、もはや標準になる見込みはありません。
- このイベントハンドラーは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でしたが、[WebXR Device API](https://immersive-web.github.io/webxr/) に取って代わられました。この機能は標準化される予定がありません。
