---
title: 'Element: compositionupdate イベント'
slug: Web/API/Element/compositionupdate_event
---

{{APIRef}}

**`compositionupdate`** イベントは、 {{glossary("input method editor", "IME")}} などのテキスト変換システムによって制御されているテキスト変換セッションに新しい文字が入力されたときに発生します。

例えば、このイベントは、ユーザーが[ピン音](https://ja.wikipedia.org/wiki/ピン音) IME を使用して漢字の入力をしている最中に発生します。

<table class="properties">
  <tbody>
    <tr>
      <th>バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th>キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th>インターフェイス</th>
      <td>{{domxref("CompositionEvent")}}</td>
    </tr>
    <tr>
      <th>イベントハンドラープロパティ</th>
      <td>なし</td>
    </tr>
  </tbody>
</table>

## 例

```js
const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener('compositionupdate', (event) => {
  console.log(`generated characters were: ${event.data}`);
});
```

### 実行例

#### HTML

```html
<div class="control">
  <label for="name">On macOS, click in the textbox below,<br> then type <kbd>option</kbd> + <kbd>`</kbd>, then <kbd>a</kbd>:</label>
  <input type="text" id="example" name="example">
</div>

<div class="event-log">
  <label>Event log:</label>
  <textarea readonly class="event-log-contents" rows="8" cols="25"></textarea>
  <button class="clear-log">Clear</button>
</div>
```

```css hidden
body {
  padding: .2rem;
  display: grid;
  grid-template-areas: "control  log";
}

.control {
  grid-area: control;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label, button {
  display: block;
}

input[type="text"] {
  margin: .5rem 0;
}

kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

#### JS

```js
const inputElement = document.querySelector('input[type="text"]');
const log = document.querySelector('.event-log-contents');
const clearLog = document.querySelector('.clear-log');

clearLog.addEventListener('click', () => {
    log.textContent = '';
});

function handleEvent(event) {
    log.textContent = log.textContent + `${event.type}: ${event.data}\n`;
}

inputElement.addEventListener('compositionstart', handleEvent);
inputElement.addEventListener('compositionupdate', handleEvent);
inputElement.addEventListener('compositionend', handleEvent);
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '180px') }}

## 仕様書

| 仕様書                                                                       | 状態                         |
| ---------------------------------------------------------------------------- | ---------------------------- |
| {{SpecName('UI Events', '#event-type-compositionupdate')}} | {{Spec2('UI Events')}} |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Element/compositionstart_event", "compositionstart")}}, {{domxref("Element/compositionend_event", "compositionend")}}。
