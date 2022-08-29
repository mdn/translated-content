---
title: 'HTMLFormElement: submit イベント'
slug: Web/API/HTMLFormElement/submit_event
tags:
  - Event
  - Forms
  - HTML DOM
  - HTMLFormElement
  - Reference
  - events
  - submit
  - イベント
  - フォーム
translation_of: Web/API/HTMLFormElement/submit_event
---
{{APIRef}}

**`submit`** イベントは {{HtmlElement("form")}} が送信されたときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり (ただし、バブリングしない単純なイベントとして指定されている)</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{DOMxRef("SubmitEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("GlobalEventHandlers.onsubmit")}}</td>
    </tr>
  </tbody>
</table>

`submit` イベントは `<form>` 要素自身で発生するものであり、その中の {{HtmlElement("button")}} や {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}} で発生するものではないことに注意してください。しかし、フォームの送信が起動されたことを示すために送信される {{domxref("SubmitEvent")}} には、送信リクエストがどのボタンで起動されたかを {{domxref("SubmitEvent.submitter", "submitter")}} プロパティが含まれています。

`submit` イベントは、ユーザーが送信ボタン ({{HtmlElement("button")}} または {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}) を押したり、 <kbd>Enter</kbd> キーをフォーム内のフィールド (例えば {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) の編集中に押したりしたときに発生します。このイベントは {{domxref("HTMLFormElement.submit()", "form.submit()")}} メソッドを呼び出した場合には送信されません。

> **Note:** **注:** [フォームの検証](/ja/docs/Learn/HTML/Forms/Form_validation)に合格していないフォームを送信しようとすると、 {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントが発生します。この場合、フォーム検証が送信を阻止しますので、 `submit` イベントは発生しません。

## 例

この例は {{domxref("EventTarget.addEventListener()")}} を使用してフォームの送信を待受けし、実行されたときに現在の {{domxref("Event.timeStamp")}} をログ出力し、それからフォームを送信する既定の動作を阻止します。

### HTML

```html
<form id="form">
  <label>Test field: <input type="text"></label>
  <br><br>
  <button type="submit">Submit form</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
function logSubmit(event) {
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

| 仕様書                                                                                               | 状態                         | 備考     |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("HTML WHATWG", "indices.html#event-submit", "submit")}}             | {{Spec2("UI Events")}} | 変更なし |
| {{SpecName("HTML5.2", "fullindex.html#eventdef-global-submit", "submit")}} | {{Spec2("HTML5.2")}} | 変更なし |
| {{SpecName("HTML5.1", "fullindex.html#eventdef-global-submit", "submit")}} | {{Spec2("HTML5.1")}} | 変更なし |
| {{SpecName("HTML5 W3C", "index.html#events-0", "submit")}}                         | {{Spec2("HTML5 W3C")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.HTMLFormElement.submit_event")}}

## 関連情報

- HTML の {{HtmlElement("form")}} 要素
- 関連イベント: {{domxref("HTMLInputElement/invalid_event", "invalid")}}
