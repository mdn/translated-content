---
title: GlobalEventHandlers.onformdata
slug: conflicting/Web/API/HTMLFormElement/formdata_event
tags:
  - API
  - Event Handler
  - Experimental
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/onformdata
original_slug: Web/API/GlobalEventHandlers/onformdata
---
{{ApiRef("HTML DOM")}}

**`onformdata`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、フォームのデータを表す項目リストが構築された後に発行される {{event("formdata")}} イベントを処理するイベントハンドラー ({{event("Event_handlers", "event handler")}}) です。これはフォームが送信されたときに発生しますが、 {{domxref("FormData.FormData", "FormData()")}} コンストラクターを呼び出しても発行することができます。 `onformdata` は {{domxref("HTMLFormElement")}} で利用できます。

## 構文

```
target.onclick = functionRef;
```

### 値

`functionRef` は関数名または [関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)です。この関数は唯一の引数として {{domxref("FormDataEvent")}} オブジェクトを受け取ります。

## 例

```js
// grab reference to form

const formElem = document.querySelector('form');

// submit handler

formElem.addEventListener('submit', (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});

// formdata handler to retrieve data

formElem.onformdata = (e) => {
  console.log('formdata fired');

  // Get the form data from the event object
  let data = e.formData;
  for (var value of data.values()) {
    console.log(value);
  }

  // submit the data via XHR
  var request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
};
```

## 仕様書

<table class="spectable standard-table">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('HTML WHATWG','webappapis.html#handler-onformdata','onformdata')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers.onformdata")}}

## 関連情報

- {{domxref("HTMLFormElement/formdata_event", "formdata")}} イベント
- {{domxref("FormDataEvent")}}
- [FormData オブジェクトの使用](/ja/docs/Web/API/FormData/Using_FormData_Objects)
