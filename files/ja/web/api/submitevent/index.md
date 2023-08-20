---
title: SubmitEvent
slug: Web/API/SubmitEvent
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("HTML DOM")}}

**`SubmitEvent`** インターフェイスは、 {{Glossary("HTML")}} フォームの {{domxref("HTMLFormElement.submit_event", "submit")}} イベントを表現するために使用されるオブジェクトを定義します。このイベントは、フォームの送信操作が呼び出されたときに {{HTMLElement("form")}} で発行されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("SubmitEvent.SubmitEvent", "SubmitEvent()")}}
  - : {{domxref("Event.type", "type")}} と他のオプションが指定された `SubmitEvent` オブジェクトを新しく作成して返します。現在、`SubmitEvent` の有効な `type` は `submit` だけであることに注意してください。

## プロパティ

_以下のプロパティに加えて、このインターフェイスには親インターフェイスである {{domxref("Event")}} から継承したプロパティがあります。_

- {{domxref("SubmitEvent.submitter", "submitter")}} {{ReadOnlyInline}}
  - : フォーム送信のきっかけとなったボタンやその他の要素を特定する {{domxref("HTMLElement")}} オブジェクトです。

## メソッド

_`SubmitEvent` には自身のメソッドがありませんが、親インターフェイスである {{domxref("Event")}} から継承したメソッドがあります。_

## 例

この例では、ユーザーの設定、店舗の設定、決済業者によって確立された商品券の合計額の最小値または最大値等の要因に応じて、ショッピングカートに様々な組み合わせの送信ボタンが表示される可能性があります。それぞれの送信要素の {{domxref("Element.id", "id")}} で、ボタンに対応する決済業者を識別します。

```js
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  let submitter = event.submitter;
  let handler = submitter.id;

  if (handler) {
    processOrder(form, handler);
  } else {
    showAlertMessage(
      "不明または未対応の支払い方法が選択されました。やり直してください。",
      "OK",
    );
  }
});
```

ハンドラー ID は、 `submit` イベントの {{domxref("SubmitEvent.submitter", "submitter")}} プロパティを使用して送信ボタンを取得し、そこから ID を取得します。これで、 `processOrder()` 関数を呼び出して、フォームとハンドラー ID を渡しながら注文を処理することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
