---
title: 'Document: readystatechange イベント'
slug: Web/API/Document/readystatechange_event
tags:
  - Event
  - Reference
  - XMLHttpRequest
  - interactive
translation_of: Web/API/Document/readystatechange_event
---
{{APIRef}}

**`readystatechange`** event は、文書の {{domxref("Document.readyState", "readyState")}} 属性が変化したときに発生します。

| バブリング                   | なし                         |
| ---------------------------- | ---------------------------- |
| キャンセル                   | 不可                         |
| インターフェイス             | {{domxref("Event")}} |
| イベントハンドラープロパティ | `onreadystatechange`         |

## 例

### ライブデモ

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Reload</button>
</div>

<div class="event-log">
  <label>Event log:</label>
  <textarea readonly class="event-log-contents" rows="8" cols="30"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control  log";
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

label, button {
  display: block;
}

#reload {
  height: 2rem;
}
```

#### JS

```js
const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      window.location.reload(true);
  }, 200);
});

window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) => {
    log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) => {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '160px') }}

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName("HTML WHATWG", "indices.html#event-readystatechange", "readystatechange")}} | {{Spec2("HTML WHATWG")}} |      |

## ブラウザーの互換性

{{Compat("api.Document.readystatechange_event")}}

## 関連情報

- 関連イベント: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Window/load_event", "load")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}
