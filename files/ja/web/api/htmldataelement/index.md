---
title: HTMLDataElement
slug: Web/API/HTMLDataElement
---

{{APIRef("HTML DOM")}}

**`HTMLDataElement`** インターフェースは{{HTMLElement("data")}}要素を扱うための（継承される通常の{{domxref("HTMLElement")}}より高度な）固有の属性を提供します。

{{InheritanceDiagram(600, 120)}}

## 属性

_親である{{domxref("HTMLElement")}}から属性を継承しています。_

- {{domxref("HTMLDataElement.value")}}
  - : は{{domxref("DOMString")}}であり，{{htmlattrxref("value", "data")}} HTML 属性に含まれる機械可読な要素の値を示しています。

## メソッド

_固有のメソッドなし。親である{{domxref("HTMLElement")}}からメソッドを継承しています。_

## 仕様書

| 仕様書                                                                                                                   | 状態                             | 備考 |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', "#htmldataelement", "HTMLDataElement")}}                                 | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-data-element', 'HTMLDataElement')}} | {{Spec2('HTML5 W3C')}}     |      |

## ブラウザーの互換性

{{Compat("api.HTMLDataElement")}}

## 関連情報

- 本インターフェースを実装する HTML 要素: {{HTMLElement("data")}}.
