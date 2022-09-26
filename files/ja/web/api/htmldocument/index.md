---
title: HTMLDocument
slug: Web/API/HTMLDocument
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

**`HTMLDocument`** は、document オブジェクトに HTML 特有の機能を追加するために、{{domxref("Document")}} インターフェイスを拡張する抽象的なインターフェイスです。これは HTML 文書のルートを表し、その中に [DOM](/ja/docs/Web/API/Document_Object_Model) の階層全体が存在しています。

**注記:** `HTMLDocument` は非推奨になり、そのメンバーは {{domxref("Document")}} インターフェイスの直接のメンバーとして指定されています。コードの根本的な性質のためにブラウザーではこの移行に時間がかかっており、個々のメソッドやプロパティは、ブラウザーごとに異なるタイミングで移動しています。

`HTMLDocument` のメンバーは、{{DOMxRef("Document")}} インターフェイスの文書で見つけることができます。

## 仕様書

| {{SpecName("HTML WHATWG", "#htmldocument", "HTMLDocument")}}                 | {{Spec2("HTML WHATWG")}} | `HTMLDocument` インターフェイスを、{{DOMxRef("Document")}} の拡張に転換。 |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------- |
| {{SpecName("DOM2 HTML", "html.html#ID-26809268", "HTMLDocument")}}         | {{Spec2('DOM2 HTML')}}     | DOM 1 の後継                                                                       |
| {{SpecName("DOM1", "level-one-html.html#ID-26809268", "HTMLDocument")}} | {{Spec2("DOM1")}}         | 初期定義                                                                           |

## ブラウザーの互換性

{{Compat("api.HTMLDocument")}}
