---
title: GlobalEventHandlers.oninvalid
slug: conflicting/Web/API/HTMLInputElement/invalid_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/oninvalid
original_slug: Web/API/GlobalEventHandlers/oninvalid
---
{{ ApiRef("HTML DOM") }}

**`oninvalid`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、{{event("invalid")}} イベントを処理する{{domxref("EventHandler", "イベントハンドラー")}}です。

`invalid` イベントは、送信可能な要素が検証され、条件を満たしていない場合に発生します。送信可能な要素の有効性は、フォームを送信する前、またはフォームの [`checkValidity()`](/ja/docs/Learn/HTML/Forms/Form_validation) メソッドが呼び出された後に検証されます。

## 構文

```
target.oninvalid = functionRef;
var functionRef = target.oninvalid;
```

### 値

`functionRef` は、関数名または[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)です。この関数は、{{domxref("Event")}} オブジェクトを唯一の引数として受け取ります。

## 例

この例は、フォーム上の `oninvalid` と {{domxref("GlobalEventHandlers.onsubmit", "onsubmit")}} イベントハンドラーを示しています。

### HTML

```html
<form id="form">
  <p id="error" hidden>Please fill out all fields.</p>

  <label for="city">City</label>
  <input type="text" id="city" required>

  <button type="submit">Submit</button>
</form>
<p id="thanks" hidden>Your data has been received. Thanks!</p>
```

### JavaScript

```js
const form = document.getElementById('form');
const error = document.getElementById('error');
const city = document.getElementById('city');
const thanks = document.getElementById('thanks');

city.oninvalid = invalid;
form.onsubmit = submit;

function invalid(event) {
  error.removeAttribute('hidden');
}

function submit(event) {
  form.setAttribute('hidden', '');
  thanks.removeAttribute('hidden');

  // For this example, don't actually submit the form
  event.preventDefault();
}
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様

<table class="spectable standard-table">
  <tbody>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">策定状況</th>
      <th scope="col">コメント</th>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML WHATWG','#handler-oninvalid','oninvalid')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## ブラウザー実装状況

{{Compat("api.GlobalEventHandlers.oninvalid")}}

## 関連情報

- {{event("invalid")}} event
- [DOM onevent ハンドラー](/ja/docs/Web/Guide/Events/Event_handlers "/ja/docs/Web/Guide/DOM/Events/Event_handlers")
