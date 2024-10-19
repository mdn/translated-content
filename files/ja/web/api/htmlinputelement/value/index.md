---
title: "HTMLInputElement: value プロパティ"
short-title: value
slug: Web/API/HTMLInputElement/value
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{ APIRef("HTML DOM") }}

**`value`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、この {{htmlelement("input")}} 要素の現在の値を文字列で表します。

このプロパティは、直接設定することもできます。例えば、何らかの条件に基づいて既定値を指定する場合などです。

## 値

この {{htmlelement("input")}} 要素の値を含む文字列、または入力要素に値が設定されていない場合は空文字列です。

## 例

### text 型の input の値を受け取る

この例では、ユーザーが入力フィールドにデータを入力すると、ログに現在の値を表示します。

#### HTML

{{htmlelement("input")}} と関連づけられた {{htmlelement("label")}}、それと出力用に {{htmlelement("pre")}} コンテナーを設置しています。

```html
<label for="givenname">あなたの名前:</label>

<input name="given-name" id="given-name" />

<pre id="log"></pre>
```

#### JavaScript

`<pre>` 要素の {{domxref("HTMLElement.innerText", "innerText")}} は、{{domxref("Element/keyup_event", "keyup")}} イベントが発行されるたびに `<input>` の現在の値に更新されます。

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("given-name");

inputElement.addEventListener("keyup", () => {
  logElement.innerText = `名前: ${inputElement.value}`;
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

{{EmbedLiveSample("Retrieving a text input's value", "", 100)}}

### 色の値を受け取る

この例では、`<input>` の {{HTMLElement("input/color", "color")}} の `value` プロパティを示します。

#### HTML

`<input>` の `color` 型を設置します。

```html
<label for="color">色を選んでください:</label>

<input name="color" id="color" type="color" />

<pre id="log"></pre>
```

#### JavaScript

`<pre>` 要素の {{domxref("HTMLElement.innerText", "innerText")}} は、既定の色値 (`#000000`) で更新され、 {{domxref("HTMLElement/change_event", "change")}} イベントが発行されるたびに更新されます。

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("color");

logElement.innerText = `Color: ${inputElement.value}`;

inputElement.addEventListener("change", () => {
  logElement.innerText = `Color: ${inputElement.value}`;
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

{{EmbedLiveSample("Retrieving a color value", "", 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.valueAsDate")}}
- {{DOMXref("HTMLInputElement.valueAsNumber")}}
