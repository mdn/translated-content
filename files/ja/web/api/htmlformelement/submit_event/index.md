---
title: "HTMLFormElement: submit イベント"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

**`submit`** イベントは {{HtmlElement("form")}} が送信されたときに発生します。

`submit` イベントは `<form>` 要素自身で発生するものであり、その中の {{HtmlElement("button")}} や {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}} で発生するものではないことに注意してください。しかし、フォームの送信が起動されたことを示すために送信される {{domxref("SubmitEvent")}} には、送信リクエストがどのボタンで起動されたかを {{domxref("SubmitEvent.submitter", "submitter")}} プロパティが含まれています。

`submit` イベントは、ユーザーが{{Glossary("submit button", "送信ボタン")}}を押したり、 <kbd>Enter</kbd> キーをフォーム内のフィールド（例えば {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}）の編集中に押したりしたときに発生します。このイベントは {{domxref("HTMLFormElement.submit()", "form.submit()")}} メソッドを呼び出した場合には送信されません。

> **メモ:** [フォームの検証](/ja/docs/Learn/Forms/Form_validation)に合格していないフォームを送信しようとすると、 {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントが発生します。この場合、フォーム検証が送信を阻止しますので、 `submit` イベントは発生しません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを使用するかしてください。

```js
addEventListener("submit", (event) => {});

onsubmit = (event) => {};
```

## イベント型

{{domxref("SubmitEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("SubmitEvent")}}

## イベントプロパティ

_以下に列挙したプロパティに加えて、このインターフェイスは親インターフェイスである {{domxref("Event")}} を継承しています。_

- {{domxref("SubmitEvent.submitter", "submitter")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLElement")}} オブジェクトで、フォームの送信を起動するために関わったボタンやその他の要素を示します。

## 例

この例は {{domxref("EventTarget.addEventListener()")}} を使用してフォームの送信を待受けし、実行されたときに現在の {{domxref("Event.timeStamp")}} をログ出力し、それからフォームを送信する既定の動作を阻止します。

### HTML

```html
<form id="form">
  <label>Test field: <input type="text" /></label>
  <br /><br />
  <button type="submit">Submit form</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
function logSubmit(event) {
  log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HtmlElement("form")}} 要素
- 関連イベント: {{domxref("HTMLInputElement/invalid_event", "invalid")}}
