---
title: FormDataEvent
slug: Web/API/FormDataEvent
---

{{APIRef("DOM")}}

**`FormDataEvent`** インターフェイスは [`formdata` イベント](/ja/docs/Web/API/HTMLFormElement/formdata_event)を表します。 — このようなイベントは {{domxref("HTMLFormElement")}} オブジェクトで、フォームデータを表すエントリーリストが構築された後に発行されます。これはフォームが送信されようとするときに発行されますが、 {{domxref("FormData.FormData", "FormData()")}} コンストラクターの呼び出しでも発行させることができます。

これにより、 {{domxref("XMLHttpRequest")}} などのメソッドでフォームデータを送信する際に、自分で用意しなくても、 `formdata` イベントの発行に応じて、 {{domxref("FormData")}} オブジェクトをすばやく取得することができます ([FormData オブジェクトの使用](/ja/docs/Web/API/FormData/Using_FormData_Objects)を参照)。

## コンストラクター

- {{domxref("FormDataEvent.FormDataEvent","FormDataEvent()")}}
  - : 新しい `FormDataEvent` オブジェクトインスタンスを生成します。

## プロパティ

_親インターフェイスである {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("FormDataEvent.formData")}}
  - : イベントが発行された時点のフォーム内に含まれるデータを表す {{domxref("FormData")}} オブジェクトです。

## メソッド

_親インターフェイスである {{domxref("Event")}} からメソッドを継承しています。_

## 例

```js
// フォームの参照を得る

const formElem = document.querySelector('form');

// submit ハンドラー

formElem.addEventListener('submit', (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // FormData オブジェクトを構築し、 formdata イベントを発行させる
  new FormData(formElem);
});

// データを受け取るための formdata ハンドラー

formElem.addEventListener('formdata', (e) => {
  console.log('formdata fired');

  // イベントオブジェクトからフォームデータを取得
  let data = e.formData;
  for (var value of data.values()) {
    console.log(value);
  }

  // XHR を通じてデータを送信
  var request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLHTTPRequest")}}
- {{domxref("FormData")}}
- [FormData オブジェクトの使用](/ja/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
