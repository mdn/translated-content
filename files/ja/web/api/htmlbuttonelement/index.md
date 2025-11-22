---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("HTML DOM")}}

**`HTMLButtonElement`** インターフェイスは、（通常の {{domxref("HTMLElement")}} から継承によって利用できるものに加えて）{{HTMLElement("button")}} 要素を操作するためのプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティもあります。_

- {{domxref("HTMLButtonElement.disabled")}}
  - : 論理値で、コントロールが無効か否か、つまりクリックを受け付けるかどうかを示します。
- {{domxref("HTMLButtonElement.form")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLFormElement")}} で、このボタンが関連付けられているフォームを反映します。ボタンがフォームの子孫要素である場合は、この属性は関連付けられた `HTMLFormElement` への参照になります。
    ボタンがフォーム要素の子孫でない場合は、属性は同じ文書内にある任意の `HTMLFormElement` への参照になる可能性があり、また一致するものがなければ `null` 値になります。
- {{domxref("HTMLButtonElement.formAction")}}
  - : 文字列で、ボタンによって送信された情報を処理するリソースの URI を反映します。指定された場合は、この属性はこの要素のオーナーである {{HTMLElement("form")}} 要素の [`action`](/ja/docs/Web/HTML/Reference/Elements/form#action) 属性を上書きします。
- {{domxref("HTMLButtonElement.formEnctype")}}
  - : 文字列で、サーバーにフォームを送信するために使用されるコンテンツの型を反映します。指定された場合は、この属性はこの要素のオーナーである {{HTMLElement("form")}} 要素の [`enctype`](/ja/docs/Web/HTML/Reference/Elements/form#enctype) 属性を上書きします。
- {{domxref("HTMLButtonElement.formMethod")}}
  - : 文字列で、ブラウザーがフォームを送信するために使用する HTTP メソッドを反映します。指定された場合は、この属性はこの要素のオーナーである {{HTMLElement("form")}} 要素の [`method`](/ja/docs/Web/HTML/Reference/Elements/form#method) 属性を上書きします。
- {{domxref("HTMLButtonElement.formNoValidate")}}
  - : 論理値で、フォームの送信時に値の検証が行われないことを示します。指定された場合は、この属性はこの要素のオーナーである {{HTMLElement("form")}} 要素の [`novalidate`](/ja/docs/Web/HTML/Reference/Elements/form#novalidate) 属性を上書きします。
- {{domxref("HTMLButtonElement.formTarget")}}
  - : 文字列で、フォームに送信した後で受信するレスポンスを表示する場所を示す名前またはキーワードを反映します。指定された場合は、この属性はこの要素のオーナーである {{HTMLElement("form")}} 要素の [`target`](/ja/docs/Web/HTML/Reference/Elements/form#target) 属性を上書きします。
- {{domxref("HTMLButtonElement.labels")}} {{ReadOnlyInline}}
  - : {{domxref("NodeList")}} で、このボタンのラベルとなる {{HTMLElement("label")}} 要素を表します。
- {{domxref("HTMLButtonElement.name")}}
  - : 文字列で、フォームを送信したときのオブジェクトの名前を表します。指定された場合は、空文字列にすることはできません。
- {{domxref("HTMLButtonElement.popoverTargetAction")}}
  - : 制御ボタンで制御されるポップオーバー要素で実行されるアクション（`"hide"`、`"show"`、`"toggle"` の何れか）を取得および設定します。これは HTML の [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction) 属性の値を反映します。
- {{domxref("HTMLButtonElement.popoverTargetElement")}}
  - : ボタンで制御するポップオーバー要素を取得および設定します。JavaScript において HTML の [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性と同等のものです。
- {{domxref("HTMLButtonElement.type")}}
  - : 文字列で、このボタンの動作を示します。これは列挙型属性で、以下の値を取ることができます。
    - `submit`: フォームを送信するボタンです。これは属性が指定されていなかった場合の既定値です。または空の値や無効な値に変更された場合の既定値です。
    - `reset`: フォームをリセットするボタンです。
    - `button`: 何もしないボタンです。
    - `menu`: メニューを表示するボタンです。 {{experimental_inline}}

- {{domxref("HTMLButtonElement.willValidate")}} {{ReadOnlyInline}}
  - : 論理値で、ボタンが制約検証の候補になるかどうかを示します。制約検証が阻止される場合は `false` となり、これには `type` プロパティが `reset` または `button` である場合、祖先に {{HTMLElement("datalist")}} がある場合、 `disabled` プロパティが `true` に設定されている場合が含まれます。
- {{domxref("HTMLButtonElement.validationMessage")}} {{ReadOnlyInline}}
  - : 文字列で、（もしあれば）制約検証でコントロールが合格しなかった場合のローカライズされたメッセージを表現します。この属性はコントロールが制約検証の候補にならない場合（`willValidate` が `false` の場合）や、制約を満たしている場合は空文字列になります。
- {{domxref("HTMLButtonElement.validity")}} {{ReadOnlyInline}}
  - : {{domxref("ValidityState")}} で、このボタンがある妥当性の状態を表します。
- {{domxref("HTMLButtonElement.value")}}
  - : 文字列で、ボタンの現在のフォームコントロールの値を表します。

## インスタンスメソッド

_親である {{domxref("HTMLElement")}} から継承したメソッドもあります_。

- {{domxref("HTMLButtonElement.checkValidity()")}}
  - : この要素の値に懸賞の問題ない場合は `true` を返します。それ以外の場合は `false` を返します。
- {{domxref("HTMLButtonElement.reportValidity()")}}
  - : `checkValidity()` と同じ処理を行いますが、 `invalid` イベントがキャンセルされなかった場合は、ユーザーにも結果を報告します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("button")}}
