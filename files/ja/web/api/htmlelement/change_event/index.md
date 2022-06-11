---
title: 'HTMLElement: change イベント'
slug: Web/API/HTMLElement/change_event
tags:
  - Change
  - イベント
  - HTML
  - HTML DOM
  - HTMLElement
  - リファレンス
  - Web
translation_of: Web/API/HTMLElement/change_event
---
{{APIRef}}

`change` イベントは {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} 要素において、ユーザーによる要素の値の変更が確定したときに発行されます。 {{domxref("HTMLElement/input_event", "input")}} イベントとは異なり、 `change` イベントは要素の値 (`value`) が変更されるたびに発生するとは限りません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/onchange", "onchange")}}
      </td>
    </tr>
  </tbody>
</table>

変更される要素の種類やユーザーが要素を操作する方法によって、 `change` イベントは異なる時点で発行されます。

- `{{HTMLElement('input/checkbox', '&lt;input type="checkbox"&gt;')}}` 要素が（クリックやキーボードを使用して）チェックされたり解除されたりした場合
- `{{HTMLElement('input/radio', '&lt;input type="radio"&gt;')}}` 要素がチェックされた場合（ただし解除された場合は発行されない）
- ユーザが明示的に変更を確定したとき（たとえば、 {{HTMLElement("select")}} のドロップダウンの値をマウスクリックで選択した場合、 `{{HTMLElement('input/date', '&lt;input type="date"&gt;')}}` の日付ピッカーで日付を選択した場合、 `{{HTMLElement('input/file', '&lt;input type="file"&gt;')}}` のファイル選択ダイアログでファイルを選択した場合など）。
- 要素の値が変更されたが、確定しないうちに要素がフォーカスを失ったとき（たとえば、 {{HTMLElement("textarea")}} または `{{HTMLElement('input/text', '&lt;input type="text"&gt;')}}` の値を編集した後に、要素がフォーカスを失った場合）。

HTML 仕様書には、 [`change` イベントを発生させる `<input>` 型](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply)の一覧があります。

## 例

### \<select> 要素

#### HTML

```html
<label>アイスクリームの味を選択してください。
  <select class="ice-cream" name="ice-cream">
    <option value="">1 つ選択してください …</option>
    <option value="chocolate">チョコレート</option>
    <option value="sardine">イワシ</option>
    <option value="vanilla">バニラ</option>
  </select>
</label>

<div class="result"></div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "select result";
}

select {
  grid-area: select;
}

.result {
  grid-area: result;
}
```

#### JavaScript

```js
const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `${event.target.value}が好きですね`;
});
```

#### 結果

{{ EmbedLiveSample('select_element', '100%', '75px') }}

### テキスト入力要素

`<input type="text">` など一部の要素では、コントロールがフォーカスを失うまで `change` イベントが発生しません。以下のフィールドに何かを入力してから、他の部分をクリックするとイベントが発行されます。

#### HTML

```html
<input placeholder="何かテキストを入力" name="name"/>
<p id="log"></p>
```

#### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

<h4 id="Result_2" name="Result_2">結果</h4>

{{ EmbedLiveSample('Text_input_element', '100%', '90px') }}

## 仕様書

{{Specifications("api.GlobalEventHandlers.onchange")}}

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers.onchange")}}

すべてのブラウザーにおいて、特定の操作で `change` イベントが発生するかどうかが同じであるとは限りません。例えば、 Gecko では {{HTMLElement("select")}} 要素をキーボードで操作すると、 `change` イベントは Enter を押すか `<select>` からフォーカスが離れるまで発生しませんでした（{{bug("126379")}} を参照）。ただし、 Firefox 63 (Quantum) からは、すべての主要なブラウザーと同じ動作になりました。
