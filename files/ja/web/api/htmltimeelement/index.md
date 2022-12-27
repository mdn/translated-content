---
title: HTMLTimeElement
slug: Web/API/HTMLTimeElement
---

{{ APIRef("HTML DOM") }}

**`HTMLTimeElement`** インターフェイスは、 {{HTMLElement("time")}} 要素を操作するための特別なプロパティを提供します (通常の {{domxref("HTMLElement")}} インターフェイスに加え、継承によっても利用できます。) 。

{{InheritanceDiagram(600, 120)}}

## プロパティ

_また、親である {{domxref("HTMLElement")}} からプロパティを継承します。_

- {{domxref("HTMLTimeElement.dateTime")}}
  - : {{ htmlattrxref("datetime", "time") }} HTML 属性を反映する {{domxref("DOMString")}} であり、機械で読み取り可能な形式の日付と時刻の値を含みます。

## 関数

_特定の関数無し; 親である {{domxref("HTMLElement")}} から関数を継承します。_

## 仕様書

| 仕様                                                                                                                     | ステータス                       | 備考                                               |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------------------- |
| {{SpecName('HTML WHATWG', "#htmltimeelement", "HTMLTimeElement")}}                                 | {{Spec2('HTML WHATWG')}} |                                                    |
| {{SpecName('HTML5.1', "text-level-semantics.html#the-time-element", "HTMLTimeElement")}}     | {{Spec2('HTML5.1')}}     | {{SpecName("HTML5 W3C")}}. からの変更なし。 |
| {{SpecName('HTML5 W3C', "text-level-semantics.html#the-time-element", "HTMLTimeElement")}} | {{Spec2('HTML5 W3C')}}     | 初回定義。                                         |

## ブラウザーの互換性

{{Compat("api.HTMLTimeElement")}}

## 関連情報

- このインターフェイスを実装する HTML 要素: {{HTMLElement("time")}}.
