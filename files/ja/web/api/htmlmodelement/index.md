---
title: HTMLModElement
slug: Web/API/HTMLModElement
---

{{ APIRef("HTML DOM") }}

**`HTMLModElement`** インターフェイスは、 (継承によって {{domxref("HTMLElement")}} を通じて利用できる通常のメソッドやプロパティに加えて) 改変 (modification) 要素、すなわち {{HTMLElement("del")}} と {{HTMLElement("ins")}} を操作するための特有のプロパティを提供します。

{{InheritanceDiagram(600, 120)}}

## プロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLModElement.cite")}}
  - : {{domxref("DOMString")}} で、 HTML の {{htmlattrxref("cite", "del")}} 属性の値を反映します。変更点についての説明を含むリソースの URI が入ります。
- {{domxref("HTMLModElement.dateTime")}}
  - : {{domxref("DOMString")}} で、 HTML の {{htmlattrxref("datetime", "del")}} 属性の値を反映します。変更されたタイムスタンプを示す日時文字列が入ります。

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考                                            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------- |
| {{SpecName('HTML WHATWG', "edits.html#htmlmodelement", "HTMLAnchorElement")}} | {{Spec2('HTML WHATWG')}} | {{SpecName("HTML5 W3C")}} から変更なし。 |
| {{SpecName('HTML5 W3C', "edits.html#htmlmodelement", "HTMLAnchorElement")}}     | {{Spec2('HTML5 W3C')}}     | {{SpecName("DOM2 HTML")}} から変更なし。 |
| {{SpecName('DOM2 HTML', 'html.html#ID-79359609', 'HTMLModElement')}}             | {{Spec2('DOM2 HTML')}}     | {{SpecName("DOM1")}} から変更なし。     |
| {{SpecName('DOM1', 'level-one-html.html#ID-79359609', 'HTMLModElement')}}         | {{Spec2('DOM1')}}         | 初回定義                                        |

## ブラウザーの互換性

{{Compat("api.HTMLModElement")}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("ins")}}, {{HTMLElement("del")}}
