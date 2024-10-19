---
title: "HTMLInputElement: valueAsNumber プロパティ"
short-title: valueAsNumber
slug: Web/API/HTMLInputElement/valueAsNumber
l10n:
  sourceCommit: 3a5e079301779c589f35b35620b12a7a73c42fa2
---

{{ APIRef("HTML DOM") }}

**`valueAsNumber`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、{{htmlelement("input")}} 要素の現在の値を数値として表します。数値への変換が不可能な場合は `NaN` として表されます。

このプロパティは、直接設定することもできます。例えば、何らかの条件に基づいて既定値の数値を設定する場合などです。

## 値

要素の値を表す数値、または数値変換が不可能な場合は `NaN`。

## 例

### 数値の受け取り

この例では、{{HTMLElement("input/number", "number")}} 入力フィールドが変更されたときに、現在の値をログ出力します。

#### HTML

{{htmlelement("input")}} と関連づけられた {{htmlelement("label")}}、それと出力用に {{htmlelement("pre")}} コンテナーを設置しています。

```html
<label for="number">1 から 10 までの数値を選んでください:</label>

<input name="number" id="number" min="1" max="10" type="number" />

<pre id="log"></pre>
```

#### JavaScript

`<pre>` 要素の {{domxref("HTMLElement.innerText", "innerText")}} は、{{domxref("HTMLElement/change_event", "change")}} イベントが発行されるたびに `<input>` の現在の値に更新されます。

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("number");

inputElement.addEventListener("change", () => {
  logElement.innerText = `Number: ${inputElement.valueAsNumber}`;
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

{{EmbedLiveSample("Retrieving a number value", "", 100)}}

ウィジェット内の数値を削除すると、結果は `NaN` になります。

### 日付の値を数値として受け取る

この例では、`<input>` の {{HTMLElement("input/datetime-local", "datetime-local")}} 型における `valueAsNumber` プロパティを説明します。

#### HTML

`<input>` の `datetime-local` 型を設置します。

```html
<label for="date">日時を選択してください:</label>

<input name="date" id="date" type="datetime-local" />

<pre id="log"></pre>
```

#### JavaScript

日付または時刻が選択されていない場合、空文字列は `NaN` に変換されます。選択が行われるたびに {{domxref("HTMLElement/change_event", "change")}} イベントが発行され、フォームコントロールの {{DOMXref("HTMLInputElement.value")}} を数値として比較した結果が、`<pre>` の内容に反映されます。

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date");

logElement.innerText = `初期値: ${inputElement.valueAsNumber}`;

inputElement.addEventListener("change", () => {
  const d = new Date(inputElement.valueAsNumber);
  logElement.innerText = `${inputElement.value} は ${inputElement.valueAsNumber} に解決され、\nこれは ${d.toDateString()} の ${d.toTimeString()} を表します。`;
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

{{EmbedLiveSample("Retrieving a date value as a number", "", 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.value")}}
- {{DOMXref("HTMLInputElement.valueAsDate")}}
