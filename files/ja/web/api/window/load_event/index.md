---
title: "Window: load イベント"
slug: Web/API/Window/load_event
---

{{APIRef}}

**`load`** イベントは、ページ全体が、スタイルシートや画像などのすべての依存するリソースを含めて読み込まれたときに発生します。これは {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} が、ページの DOM の読み込みが完了すれば、リソースの読み込みが完了するのを待たずに発生するのと対照的です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
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
        {{domxref("GlobalEventHandlers/onload", "onload")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

ページが完全に読み込まれたときに、メッセージを記録します。

```js
window.addEventListener('load', (event) => {
  console.log('ページが完全に読み込まれました');
});
```

同じですが、 `onload` イベントハンドラープロパティの場合です。

```js
window.onload = (event) => {
  console.log('page is fully loaded');
};
```

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

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.load_event")}}

## 関連情報

- 関連イベント: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}
