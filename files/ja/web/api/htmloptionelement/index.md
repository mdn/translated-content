---
title: HTMLOptionElement
slug: Web/API/HTMLOptionElement
---

{{APIRef("HTML DOM")}}

**`HTMLOptionElement`** インターフェイスは {{HTMLElement("option")}} 要素を表し、 {{domxref("HTMLElement")}} インターフェイスのすべてのクラスとメソッドを継承しています。

{{InheritanceDiagram(600, 120)}}

## プロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLOptionElement.defaultSelected")}}
  - : `true` または `false` の値を取り、選択肢が既定で選択されているかどうかを示す HTML の {{htmlattrxref("selected", "option")}} 属性の初期値を表します。
- {{domxref("HTMLOptionElement.disabled")}}
  - : `true` または `false` の値を取り、その選択肢が選択できないことを示す HTML の {{htmlattrxref("disabled", "option")}} 属性の値を表します。選択肢は無効状態の {{HTMLElement("optgroup")}} 要素の子である場合も無効になります。
- {{domxref("HTMLOptionElement.form")}} {{readonlyInline}}
  - : {{domxref("HTMLFormElement")}} で、この選択肢が {{HTMLElement("select")}} 要素の子孫であった場合は、対応する {{HTMLElement("select")}} 要素の `form` と同じ値を表します。見つからない場合は null になります。
- {{domxref("HTMLOptionElement.index")}} {{readonlyInline}}
  - : `long` 値で、所属する選択肢のリスト内におけるツリー順の位置を表します。その選択肢がリストに含まれていない場合、例えば {{HTMLElement("datalist")}} 要素の一部である場合などは、値は `0` になります。
- {{domxref("HTMLOptionElement.label")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} で、この選択肢のラベルを提供する HTML の {{htmlattrxref("label", "option")}} 属性の値を反映します。この属性が特に設定されていない場合は、この値を読み取ると要素のテキストコンテンツが返されます。
- {{domxref("HTMLOptionElement.selected")}}
  - : `true` または `false` の値を取り、この選択肢が現在選択されているかどうかを示します。
- {{domxref("HTMLOptionElement.text")}}
  - : {{domxref("DOMString")}} で、この要素のテキストコンテンツが入ります。
- {{domxref("HTMLOptionElement.value")}}
  - : {{domxref("DOMString")}} で、 HTML の {{htmlattrxref("value", "option")}} 属性が存在する場合は、その値を反映します。存在しない場合は {{domxref("Node.textContent")}} プロパティの値を反映します。

## メソッド

_親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

- Option()
  - : `HTMLOptionElement` オブジェクトを生成するコンストラクターです。 4 つの値、表示するテキストである `text`、関連付ける値である `value`、 `defaultSelected` の値、 `selected` の値を取ります。後三者は省略可能です。

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "#htmloptionelement", "HTMLOptionElement")}}             | {{Spec2('HTML WHATWG')}} |                                                                                                                                                                                                        |
| {{SpecName('HTML5 W3C', "forms.html#the-option-element", "HTMLOptionElement")}} | {{Spec2('HTML5 W3C')}}     | コンストラクターである `Option()` を追加した。 `form` プロパティが `null` 値を取れるようになった。                                                                                                     |
| {{SpecName('DOM2 HTML', 'html.html#ID-70901257', 'HTMLOptionElement')}}         | {{Spec2('DOM2 HTML')}}     | `selected` プロパティの意味を変更した。その選択肢が現在選択されているかどうかを示すようになり、最初に選択されているかどうかではなくなった。 `defaultSelected` プロパティが読み取り専用ではなくなった。 |
| {{SpecName('DOM1', 'level-one-html.html#ID-70901257', 'HTMLOptionElement')}}     | {{Spec2('DOM1')}}         | 初回定義                                                                                                                                                                                               |

## ブラウザーの互換性

{{Compat("api.HTMLOptionElement")}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("option")}}.
