---
title: "Document: readystatechange イベント"
short-title: readystatechange
slug: Web/API/Document/readystatechange_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

**`readystatechange`** event は、文書の {{domxref("Document.readyState", "readyState")}} 属性が変化したときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラーのプロパティを設定するかしてください。

```js
addEventListener("readystatechange", (event) => {});

onreadystatechange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### ライブデモ

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">再読み込み</button>
</div>

<div class="event-log">
  <label for="eventLog">イベントログ:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

#### CSS

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
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

#reload {
  height: 2rem;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent = `${log.textContent}load\n`;
});

document.addEventListener("readystatechange", (event) => {
  log.textContent = `${log.textContent}readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent = `${log.textContent}DOMContentLoaded\n`;
});
```

#### 結果

{{ EmbedLiveSample('ライブデモ', '100%', '160px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`DOMContentLoaded`](/ja/docs/Web/API/Document/DOMContentLoaded_event), [`load`](/ja/docs/Web/API/Window/load_event), [`beforeunload`](/ja/docs/Web/API/Window/beforeunload_event), [`unload`](/ja/docs/Web/API/Window/unload_event)
