---
title: HTMLFieldSetElement
slug: Web/API/HTMLFieldSetElement
---

{{APIRef("HTML DOM")}}

**`HTMLFieldSetElement`** インターフェイスは、 ({{domxref("HTMLElement")}} から継承したものより詳細に) {{ HTMLElement("fieldset") }} 要素のレイアウトと表示を操作するための特別なプロパティやメソッドを提供します。

{{InheritanceDiagram(600, 120)}}

## プロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLFieldSetElement.disabled")}}
  - : {{jsxref("Boolean")}} で、 HTML の {{htmlattrxref("disabled", "fieldset")}} 属性を反映し、ユーザーがこのコントロールと対話できるかどうかを示します。
- {{domxref("HTMLFieldSetElement.elements")}}{{ReadOnlyInline}}
  - : このフィールドセットに所属する要素です。このプロパティの型は、ブラウザーが実装している仕様書のバージョンによって異なります。
- {{domxref("HTMLFieldSetElement.form")}}{{ReadOnlyInline}}
  - : {{domxref("HTMLFormControlsCollection")}} または {{domxref("HTMLCollection")}} で、この要素がフォーム内にあった場合、含んでいるフォーム要素を参照します。
    このフィールドセットがフォーム要素の子孫でなかった場合は、この属性は関連付けられた同じ文書内の何れかのフォームになるか、一致するものがなければ `null` になります。
- {{domxref("HTMLFieldSetElement.name")}}
  - : {{domxref("DOMString")}} で、 HTML の {{htmlattrxref("name", "fieldset")}} 属性を反映し、フォームを送信するときに使われるフィールドセットの名前が入ります。
- {{domxref("HTMLFieldSetElement.type")}}{{ReadOnlyInline}}
  - : {{domxref("DOMString")}} で "`fieldset`" です。
- {{domxref("HTMLFieldSetElement.validationMessage")}}
  - : {{domxref("DOMString")}} で、 (もしあれば) 制約検証でコントロールが合格しなかった場合のローカライズされたメッセージを表現します。この属性はコントロールが制約検証の候補にならない場合 (`willValidate` が `false` の場合) や、制約を満たしている場合は空文字列になります。
- {{domxref("HTMLFieldSetElement.validity")}}
  - : {{domxref("ValidityState")}} で、この要素がある妥当性の状態を表します。
- {{domxref("HTMLFieldSetElement.willValidate")}}
  - : {{jsxref("Boolean")}} で `false` です。 {{HTMLElement("fieldset")}} オブジェクトは制約検証の対象になることがないからです。

## メソッド

_親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

- {{domxref("HTMLFieldSetElement.checkValidity()")}}
  - : 常に `true` を返します。 {{HTMLElement("fieldset")}} オブジェクトは制約検証の対象になることがないためです。
- {{domxref("HTMLFieldSetElement.reportValidity()")}}
  - : 常に `true` を返します。 {{HTMLElement("fieldset")}} オブジェクトは制約検証の対象になることがないためです。
- {{domxref("HTMLFieldSetElement.setCustomValidity()")}}
  - : 独自の検証メッセージをフィールドセットに設定します。メッセージが空文字列でなければ、フィールドセットには独自の検証エラーが発生している状態であり、検証に合格していません。

## 仕様書

| 仕様書                                                                                                           | 状態                             | 備考                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "#htmlfieldsetelement", "HTMLFieldSetElement")}}             | {{Spec2('HTML WHATWG')}} |                                                                                                                                                                                      |
| {{SpecName('HTML5.1', "forms.html#the-fieldset-element", "HTMLFieldSetElement")}}     | {{Spec2('HTML5.1')}}     |                                                                                                                                                                                      |
| {{SpecName('HTML5 W3C', "forms.html#the-fieldset-element", "HTMLFieldSetElement")}} | {{Spec2('HTML5 W3C')}}     | `disabled`, `elements`, `name`, `type`, `valdiationMessage`, `validity`, and `willValidate` プロパティが追加された。 `checkValidity()`, `setCustomValidity()` メソッドが追加された。 |
| {{SpecName('DOM2 HTML', 'html.html#ID-7365882', 'HTMLFieldSetElement')}}                 | {{Spec2('DOM2 HTML')}}     | 変更なし                                                                                                                                                                             |
| {{SpecName('DOM1', 'level-one-html.html#ID-7365882', 'HTMLFieldSetElement')}}         | {{Spec2('DOM1')}}         | 初回定義                                                                                                                                                                             |

## ブラウザーの互換性

{{Compat("api.HTMLFieldSetElement")}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("fieldset") }}
