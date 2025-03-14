---
title: HTMLOutputElement
slug: Web/API/HTMLOutputElement
---

{{APIRef("HTML DOM")}}

**`HTMLOutputElement`** インターフェイスは、（{{domxref("HTMLElement")}} から継承したもの以外に）{{HTMLElement("output")}} 要素のレイアウトや表示を操作するためのプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLOutputElement.defaultValue")}}
  - : 文字列で、要素の既定値を表します。初期値は空文字列です。
- {{domxref("HTMLOutputElement.form")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLFormElement")}} で、コントロールに関連付けられたフォームを表し、定義されていれば HTML の [`form`](/ja/docs/Web/HTML/Element/output#form) 属性を反映します。
- {{domxref("HTMLOutputElement.htmlFor")}} {{ReadOnlyInline}}
  - : {{domxref("DOMTokenList")}} で、HTML の [`for`](/ja/docs/Web/HTML/Element/output#for) 要素を反映し、計算値の `value` に寄与する（または他の形で影響する）同じ文書内の他の要素の ID のリストが入ります。
- {{domxref("HTMLOutputElement.labels")}} {{ReadOnlyInline}}
  - : {{domxref("NodeList")}} で、この要素に関連付けられた {{HTMLElement("label")}} 要素です。
- {{domxref("HTMLOutputElement.name")}}
  - : 文字列で、 HTML の [`name`](/ja/docs/Web/HTML/Element/output#name) 属性を反映し、フォームデータと共に送信されるコントロールの名前が入ります。
- {{domxref("HTMLOutputElement.type")}} {{ReadOnlyInline}}
  - : 文字列で "`output`" です。
- {{domxref("HTMLOutputElement.validationMessage")}} {{ReadOnlyInline}}
  - : 文字列で、（もしあれば）制約検証でコントロールが合格しなかった場合のローカライズされたメッセージを表現します。この属性はコントロールが制約検証の対象にならない場合（`willValidate` が `false` の場合）や、制約を満たしている場合は空文字列になります。
- {{domxref("HTMLOutputElement.validity")}} {{ReadOnlyInline}}
  - : {{domxref("ValidityState")}} で、この要素がある妥当性の状態を表します。
- {{domxref("HTMLOutputElement.value")}}
  - : 文字列で、要素の内容の値を表します。 {{domxref("Node.textContent")}} プロパティと同様です。
- {{domxref("HTMLOutputElement.willValidate")}} {{ReadOnlyInline}}
  - : 論理値で、要素が制約検証の対象になるかどうかを示します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("HTMLElement")}} から継承したメソッドもあります。_

- {{domxref("HTMLOutputElement.checkValidity()")}}
  - : 要素の妥当性をチェックし、チェック結果を論理値で返します。
- {{domxref("HTMLOutputElement.reportValidity()")}}

  - : このメソッドは、もしあれば、要素の制約に関する問題をユーザーに報告します。問題があれば、要素上で {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントを発生させ、 `false` を返します。問題がなければ `true` を返します。

    問題が報告された場合、ユーザーエージェントは要素にフォーカスを移し、文書のスクロール位置を変更したり、他の動作を行ったりして要素にユーザーの関心を集めることがあります。この要素に複数の問題が同時に発生した場合、ユーザーエージェントは複数の制約検証を報告することがあります。要素が表示されない場合、ユーザーエージェントはユーザーに通知する代わりに実行中のスクリプトにエラーを報告することがあります。

- {{domxref("HTMLOutputElement.setCustomValidity()")}}
  - : 独自の検証メッセージをこの要素に設定します。メッセージが空文字列でなければ、この要素は独自の検証エラーが発生している状態であり、検証に合格していません。

## モード

この要素は 2 つのモードのどちらかで動作します。*既定*モードと*値*モードです。

### 既定モード

初期状態では、要素は既定モードになっており、要素のコンテンツは要素の値と既定値の両方を表します。

要素が既定モードである場合、何らかの形で要素の子孫が変更されたとき、`defaultValue` プロパティは {{domxref("Node.textContent","textContent")}} プロパティの値が設定されます。

フォームをリセットすると、要素は既定モードになり、{{domxref("Node.textContent","textContent")}} プロパティに `defaultValue` プロパティの値が設定されます。

### 値モード

要素は `value` プロパティの内容が設定されたときに、値モードへと移行します。 `value` プロパティはそれ以外は {{domxref("Node.textContent","textContent")}} プロパティと同様の動作をします。要素が値モードである場合、既定値には `defaultValue` プロパティからしかアクセスできません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("output")}}
