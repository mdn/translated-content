---
title: 'HTMLFormElement: formdata イベント'
slug: Web/API/HTMLFormElement/formdata_event
tags:
  - Event
  - Forms
  - Reference
  - formevent
translation_of: Web/API/HTMLFormElement/formdata_event
browser-compat: api.HTMLFormElement.formdata_event
---
{{APIRef}}

**`formdata`** イベントは、フォームのデータを表すエントリーリストが構築された後に発行されます。このイベントは、フォームが送信されたときに発行されますが、 {{domxref("FormData.FormData", "FormData()")}} コンストラクターが呼び出されたときにも発行されます。

## 一般情報

<table class="properties">
  <tbody>
    <tr>
      <th>バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th>キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th>インターフェイス</th>
      <td>{{DOMxRef("FormDataEvent")}}</td>
    </tr>
    <tr>
      <th>イベントハンドラープロパティ</th>
      <td>{{domxref("GlobalEventHandlers.onformdata")}}</td>
    </tr>
  </tbody>
</table>

## 例

```js
// フォームの参照を得る

const formElem = document.querySelector('form');

// submit ハンドラー

formElem.addEventListener('submit', (e) => {
  // フォームの送信時、既定の動作を抑止
  e.preventDefault();

  // FormData オブジェクトを構築し、 formdata イベントが発行される
  new FormData(formElem);
});

// データを受け取るための formdata ハンドラー

formElem.addEventListener('formdata', (e) => {
  console.log('formdata fired');

  // イベントオブジェクトからフォームデータを取得する
  let data = e.formData;
  for (var value of data.values()) {
    console.log(value);
  }

  // XHR でデータを送信
  var request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
});
```

`onformdata` 版はこのようになります。

```js
formElem.onformdata = (e) => {
  console.log('formdata fired');

  // イベントオブジェクトからフォームデータを取得する
  let data = e.formData;
  for (var value of data.values()) {
    console.log(value);
  }

  // XHR でデータを送信
  var request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{htmlElement("form")}} 要素
- {{domxref("FormDataEvent")}}
