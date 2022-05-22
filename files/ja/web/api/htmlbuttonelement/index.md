---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
tags:
  - API
  - HTML DOM
  - HTMLButtonElement
  - インターフェイス
  - リファレンス
browser-compat: api.HTMLButtonElement
translation_of: Web/API/HTMLButtonElement
---
{{APIRef("HTML DOM")}}

**`HTMLButtonElement`** インターフェイスは、（通常の {{domxref("HTMLElement")}} から継承によって利用できるものに加えて) {{HTMLElement("button")}} 要素を操作するためのプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティもあります。_

- {{domxref("HTMLButtonElement.accessKey")}}
  - : 文字列で、ボタンにアクセスするためのキーボードの 1 文字のキーを示します。
- {{domxref("HTMLButtonElement.autofocus")}}
  - : 論理値で、ページが読み込みの際、ユーザーが異なるコントロールに入力するなどで上書きをしない限り、コントロールが入力フォーカスを持つべきかどうかを示します。文書中のフォーム関連要素の中で、この属性を指定できるのは 1 つだけです。
- {{domxref("HTMLButtonElement.disabled")}}
  - : 論理値で、コントロールが無効か否か、つまりクリックを受け付けるかどうかを示します。
- {{domxref("HTMLButtonElement.form")}} {{readonlyInline}}
  - : {{domxref("HTMLFormElement")}} で、このボタンが関連付けられているフォームを反映します。ボタンがフォームの子孫要素である場合は、この属性はフォーム要素の ID になります。
    ボタンがフォーム要素の子孫でない場合は、属性は同じ文書内の任意のフォーム要素の ID になる可能性があり、また一致するものがなければ `null` 値になります。
- {{domxref("HTMLButtonElement.formAction")}}
  - : 文字列で、ボタンによって送信された情報を処理するリソースの URI を反映します。指定された場合は、この属性はこの要素のオーナーである {{HTMLElement("form")}} 要素の {{htmlattrxref("action", "form")}} 属性を上書きします。
- {{domxref("HTMLButtonElement.formEnctype")}}
  - : 文字列で、サーバーにフォームを送信するために使用されるコンテンツの型を反映します。指定された場合は、この属性はこの要素のオーナーである {{HTMLElement("form")}} 要素の {{htmlattrxref("enctype", "form")}} 属性を上書きします。
- {{domxref("HTMLButtonElement.formMethod")}}
  - : 文字列で、ブラウザーがフォームを送信するために使用する HTTP メソッドを反映します。指定された場合は、この属性はこの要素のオーナーである {{HTMLElement("form")}} 要素の {{htmlattrxref("method", "form")}} 属性を上書きします。
- {{domxref("HTMLButtonElement.formNoValidate")}}
  - : 論理値で、フォームの送信時に値の検証が行われないことを示します。指定された場合は、この属性はこの要素のオーナーである {{HTMLElement("form")}} 要素の {{htmlattrxref("novalidate", "form")}} 属性を上書きします。
- {{domxref("HTMLButtonElement.formTarget")}}
  - : 文字列で、フォームに送信した後で受信するレスポンスを表示する場所を示す名前またはキーワードを反映します。指定された場合は、この属性はこの要素のオーナーである {{HTMLElement("form")}} 要素の {{htmlattrxref("target", "form")}} 属性を上書きします。
- {{domxref("HTMLButtonElement.labels")}} {{readonlyInline}}
  - : {{domxref("NodeList")}} で、このボタンのラベルとなる {{HTMLElement("label")}} 要素を表します。
- {{domxref("HTMLButtonElement.menu")}} {{experimental_inline}}
  - : {{domxref("HTMLMenuElement")}} で、ボタンが `type="menu"` である場合にクリックした場合に表示されるメニュー要素を表します。
- {{domxref("HTMLButtonElement.name")}}
  - : 文字列で、フォームを送信したときのオブジェクトの名前を表します。指定された場合は、空文字列にすることはできません。
- {{domxref("HTMLButtonElement.tabIndex")}}
  - : `long` で、タブ順でのこの要素の位置を表します。
- {{domxref("HTMLButtonElement.type")}}

  - : 文字列で、このボタンの動作を示します。これは列挙型属性で、以下の値を取ることができます。

    - `submit`: フォームを送信するボタンです。これは属性が指定されていなかった場合の既定値です。または空の値や無効な値に変更された場合の既定値です。
    - `reset`: フォームをリセットするボタンです。
    - `button`: 何もしないボタンです。
    - `menu`: メニューを表示するボタンです。 {{experimental_inline}}

- {{domxref("HTMLButtonElement.willValidate")}} {{readonlyInline}}
  - : 論理値で、ボタンが制約検証の候補になるかどうかを示します。制約検証が阻止される場合は `false` となり、これには `type` プロパティが `reset` または `button` である場合、祖先に {{HTMLElement("datalist")}} がある場合、 `disabled` プロパティが `true` に設定されている場合が含まれます。
- {{domxref("HTMLButtonElement.validationMessage")}} {{readonlyInline}}
  - : 文字列で、（もしあれば）制約検証でコントロールが合格しなかった場合のローカライズされたメッセージを表現します。この属性はコントロールが制約検証の候補にならない場合（`willValidate` が `false` の場合）や、制約を満たしている場合は空文字列になります。
- {{domxref("HTMLButtonElement.validity")}} {{readonlyInline}}
  - : {{domxref("ValidityState")}} で、このボタンがある妥当性の状態を表します。
- {{domxref("HTMLButtonElement.value")}}
  - : 文字列で、ボタンの現在のフォームコントロールの値を表します。

## メソッド

_親である {{domxref("HTMLElement")}} から継承したメソッドもあります。_

| 名称                                    | 返却型     | 説明                                 |
| --------------------------------------- | --------------- | ------------------------------------------- |
| `checkValidity()`                       | 論理値 | リセットまたはボタン要素は対応していません。 |
| `reportValidity()`                      | 論理値 | リセットまたはボタン要素は対応していません。 |
| `setCustomValidity(in DOMString error)` | `void`          | リセットまたはボタン要素は対応していません。 |

Gecko を基盤としたブラウザーでは、 {{cssxref(":-moz-submit-invalid")}} 擬似クラスを用いてフォームの妥当性に基いた送信ボタンの装飾をすることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("button")}}
