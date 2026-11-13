---
title: HTMLFormElement：submit event
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("HTML DOM")}}

**`submit`** 事件會在 {{HtmlElement("form")}} 被提交時觸發。

請注意 `submit` 事件是在 `<form>` 元素本身觸發，而不是在內部的任何 {{HtmlElement("button")}} 或 `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` 上觸發。然而，用來表示表單提交動作已被觸發的 {{domxref("SubmitEvent")}} 包含一個 {{domxref("SubmitEvent.submitter", "submitter")}} 屬性，即為被呼叫以觸發提交請求的按鈕。

`submit` 事件會在下列情況下觸發：

- 使用者點擊{{Glossary("submit button", "提交按鈕")}}、
- 使用者在編輯表單欄位（例如 {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}）時按下 <kbd>Enter</kbd>、
- 指令碼呼叫 {{domxref("HTMLFormElement.requestSubmit()", "form.requestSubmit()")}} 方法

然而，當指令碼直接呼叫 {{domxref("HTMLFormElement.submit()", "form.submit()")}} 方法時，此事件**不會**發送給表單。

> [!NOTE]
> 嘗試提交未通過[驗證](/zh-TW/docs/Learn_web_development/Extensions/Forms/Form_validation)的表單會觸發 {{domxref("HTMLInputElement/invalid_event", "invalid")}} 事件。在此情況下，驗證會阻止表單提交，因此不會有 `submit` 事件。

## 語法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名稱，或設定事件處理器屬性。

```js-nolint
addEventListener("submit", (event) => { })

onsubmit = (event) => { }
```

## 事件類型

一個 {{domxref("SubmitEvent")}}。繼承自 {{domxref("Event")}}。

{{InheritanceDiagram("SubmitEvent")}}

## 事件屬性

_除了下列列出的屬性外，此介面也繼承其父介面 {{domxref("Event")}} 的屬性。_

- {{domxref("SubmitEvent.submitter", "submitter")}} {{ReadOnlyInline}}
  - : 一個 {{domxref("HTMLElement")}} 物件，用來識別被呼叫以觸發表單提交的按鈕或其他元素。

## 範例

本範例使用 {{domxref("EventTarget.addEventListener()")}} 監聽表單提交，並在發生時記錄當下的 {{domxref("Event.timeStamp")}}，接著阻止提交表單的預設行為。

### HTML

```html
<form id="form">
  <label>測試欄位：<input type="text" /></label>
  <br /><br />
  <button type="submit">提交表單</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
const form = document.getElementById("form");
const log = document.getElementById("log");

function logSubmit(event) {
  log.textContent = `表單已提交！時間戳記：${event.timeStamp}`;
  event.preventDefault();
}

form.addEventListener("submit", logSubmit);
```

### 結果

{{EmbedLiveSample("Examples", "", "", "", "", "", "", "allow-forms")}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- HTML {{HtmlElement("form")}} 元素
- 相關事件：{{domxref("HTMLInputElement/invalid_event", "invalid")}}
