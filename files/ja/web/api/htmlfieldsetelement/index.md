---
title: HTMLFieldSetElement
slug: Web/API/HTMLFieldSetElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

**`HTMLFieldSetElement`** インターフェイスは、（継承により利用できる通常の {{domxref("HTMLElement")}} インターフェイスのものに加えて）{{ HTMLElement("fieldset") }} 要素のレイアウトと表示を操作するための特別なプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLFieldSetElement.disabled")}}
  - : 論理値で、 HTML の [`disabled`](/ja/docs/Web/HTML/Reference/Elements/fieldset#disabled) 属性を反映し、ユーザーがこのコントロールを操作できるかどうかを示します。
- {{domxref("HTMLFieldSetElement.elements")}} {{ReadOnlyInline}}
  - : このフィールドセットに所属する要素です。このプロパティの型は、ブラウザーが実装している仕様書のバージョンによって異なります。
- {{domxref("HTMLFieldSetElement.form")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLFormControlsCollection")}} または {{domxref("HTMLCollection")}} で、この要素がフォーム内にあった場合、含んでいるフォーム要素を参照します。
    このフィールドセットがフォーム要素の子孫でなかった場合は、この属性は関連付けられた同じ文書内の何れかのフォームになるか、一致するものがなければ `null` になります。
- {{domxref("HTMLFieldSetElement.name")}}
  - : 文字列で、 HTML の [`name`](/ja/docs/Web/HTML/Reference/Elements/fieldset#name) 属性を反映し、フォームを送信するときに使われるフィールドセットの名前が入ります。
- {{domxref("HTMLFieldSetElement.type")}} {{ReadOnlyInline}}
  - : 文字列 "`fieldset`" です。
- {{domxref("HTMLFieldSetElement.validationMessage")}}
  - : 文字列で、（もしあれば）制約検証でコントロールが合格しなかった場合のローカライズされたメッセージを表現します。この属性はコントロールが制約検証の候補にならない場合（`willValidate` が `false` の場合）や、制約を満たしている場合は空文字列になります。
- {{domxref("HTMLFieldSetElement.validity")}}
  - : {{domxref("ValidityState")}} で、この要素がある妥当性の状態を表します。
- {{domxref("HTMLFieldSetElement.willValidate")}}
  - : 論理値 `false` です。{{HTMLElement("fieldset")}} オブジェクトは制約検証の対象になることがないからです。

## インスタンスメソッド

_親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

- {{domxref("HTMLFieldSetElement.checkValidity()")}}
  - : 常に `true` を返します。 {{HTMLElement("fieldset")}} オブジェクトは制約検証の対象になることがないためです。
- {{domxref("HTMLFieldSetElement.reportValidity()")}}
  - : 常に `true` を返します。 {{HTMLElement("fieldset")}} オブジェクトは制約検証の対象になることがないためです。
- {{domxref("HTMLFieldSetElement.setCustomValidity()")}}
  - : 独自の検証メッセージをフィールドセットに設定します。メッセージが空文字列でなければ、フィールドセットには独自の検証エラーが発生している状態であり、検証に合格していません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("fieldset") }}
