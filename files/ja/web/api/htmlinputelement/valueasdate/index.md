---
title: "HTMLInputElement: valueAsDate プロパティ"
short-title: valueAsDate
slug: Web/API/HTMLInputElement/valueAsDate
l10n:
  sourceCommit: 3a5e079301779c589f35b35620b12a7a73c42fa2
---

{{ APIRef("HTML DOM") }}

**`valueAsDate`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、{{htmlelement("input")}} 要素の現在の値を {{jsxref("Date")}} として表します。変換が不可能な場合は `null` となります。

このプロパティは直接設定することもでき、例えば、何らかの条件に基づく既定の日付を指定する場合などに使用します。指定された値が `null` でも `Date` オブジェクトでもない場合、{{jsxref("TypeError")}} が発生します。指定された値が `null` または[無効な日付](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)である場合、入力値は空文字列に設定されます。

このプロパティは、日付または時刻に基づかない入力フィールドでアクセスされた場合、常に `null` を返します。このような入力でこのプロパティを設定しようとすると、`InvalidStateError` の {{domxref("DOMException")}} が発生します。

## 値

{{jsxref("Date")}} オブジェクトで、変換ができない場合は `null` です。

## 例

### 日付値の受け取り

この例では、`valueAsDate` プロパティを `<input>` の {{HTMLElement("input/week", "week")}} 型に対してアクセスする様子を紹介します。

#### HTML

`<input>` の `week` 型を設置します。

```html
<label for="date">日付を選んでください:</label>

<input name="date" id="date" type="week" />

<pre id="log"></pre>
```

#### JavaScript

日付が選択されていない場合、空の入力フィールドは `null` に解決されます。選択が行われるたびに {{domxref("HTMLElement/change_event", "change")}} イベントが発行され、`<pre>` の内容は、このフォームコントロールの {{DOMXref("HTMLInputElement.value")}} とその値を日付としたものを比較して表示します。

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date");

logElement.innerText = `初期値: ${inputElement.valueAsDate}`;

inputElement.addEventListener("change", () => {
  logElement.innerText = `${inputElement.value} は ${inputElement.valueAsDate} に解決します`;
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  background-color: #ededed;
}
```

#### 結果

{{EmbedLiveSample("Retrieving a date value", "", 100)}}

### Date のメソッドの使用

この例は、{{jsxref("Date")}} のメソッドを `<input>` の {{HTMLElement("input/date", "date")}} 型の `valueAsDate` プロパティに直接適用しています。

#### HTML

`<input>` の `date` 型を設置します。

```html
<label for="date2">日付を選択:</label>

<input name="date2" id="date2" type="date" />

<pre id="log"></pre>
```

#### JavaScript

日付が選択されていない場合、空文字列は `null` に変換されます。選択が行われるたびに、{{domxref("HTMLElement/change_event", "change")}} イベントが発行されます。次に、選択された日付を、`Date` オブジェクトの {{jsxref("Date.prototype.toLocaleDateString()", "toLocaleDateString()")}} メソッドを使用してフォーマットし、ログに記録します。

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date2");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

logElement.innerText = `初期値: ${inputElement.valueAsDate}`;

inputElement.addEventListener("change", () => {
  if (inputElement.valueAsDate !== null) {
    logElement.innerText = `${inputElement.valueAsDate.toLocaleDateString("ja-JP", options)}を選択しました`;
  } else {
    logElement.innerText = `${inputElement.value} は ${inputElement.valueAsDate} に解決します`;
  }
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  background-color: #ededed;
}
```

#### 結果

{{EmbedLiveSample("Using Date methods", "", 100)}}

地域時間帯によっては、日付がずれる場合があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.value")}}
- {{DOMXref("HTMLInputElement.valueAsNumber")}}
