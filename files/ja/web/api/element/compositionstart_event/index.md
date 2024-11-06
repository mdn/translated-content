---
title: "Element: compositionstart イベント"
short-title: compositionstart
slug: Web/API/Element/compositionstart_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

**`compositionstart`** イベントは、 {{glossary("input method editor", "IME")}} などのテキスト変換システムが新しい変換セッションを開始した時に発生します。

例えば、このイベントはユーザーが[ピン音](https://ja.wikipedia.org/wiki/ピン音) IME を使用して漢字の入力を開始した後に発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("compositionstart", (event) => {});

oncompositionstart = (event) => {};
```

## イベント型

{{domxref("CompositionEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("CompositionEvent")}}

## イベントプロパティ

_親である {{domxref("UIEvent")}} および {{domxref("Event")}} から継承したプロパティもあります_。

- {{domxref("CompositionEvent.data")}} {{ReadOnlyInline}}
  - : イベントを発生させたインプットメソッドによって生成された文字を返します。これは `CompositionEvent` オブジェクトを生成したイベントの種類によって異なります。
- {{domxref("CompositionEvent.locale")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 現在の入力メソッドのロケール（例えば、変換が IME に関連付けられている場合はキーボードレイアウトのロケール）を返します。

## 例

```js
const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener("compositionstart", (event) => {
  console.log(`generated characters were: ${event.data}`);
});
```

### 実行例

#### HTML

```html
<div class="control">
  <label for="example">
    最初にテキストボックスを選択して、IME を開いてください。
    <ul>
      <li>macOS では <kbd>option</kbd> + <kbd>`</kbd></li>
      <li>Windows では <kbd>windows</kbd> + <kbd>.</kbd></li>
    </ul>
  </label>
  <input type="text" id="example" name="example" />
</div>

<div class="event-log">
  <label for="eventLog">イベントログ:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="25"
    id="eventLog"></textarea>
  <button class="clear-log">Clear</button>
</div>
```

```css hidden
body {
  padding: 0.2rem;
  display: grid;
  grid-template-areas: "control log";
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

label,
button {
  display: block;
}

input[type="text"] {
  margin: 0.5rem 0;
}

kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

#### JavaScript

```js
const inputElement = document.querySelector('input[type="text"]');
const log = document.querySelector(".event-log-contents");
const clearLog = document.querySelector(".clear-log");

clearLog.addEventListener("click", () => {
  log.textContent = "";
});

function handleEvent(event) {
  log.textContent += `${event.type}: ${event.data}\n`;
}

inputElement.addEventListener("compositionstart", handleEvent);
inputElement.addEventListener("compositionupdate", handleEvent);
inputElement.addEventListener("compositionend", handleEvent);
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '180px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Element/compositionend_event", "compositionend")}}, {{domxref("Element/compositionupdate_event", "compositionupdate")}}。
