---
title: "Window: error イベント"
slug: Web/API/Window/error_event
---

{{APIRef}}

`error` イベントは、リソースの読み取りに失敗したり、使用できなかったりした場合 — 例えば、スクリプトに実行エラーがあった場合に {{domxref("Window")}} オブジェクトに発生します。

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
      <td>{{domxref("Event")}} または {{domxref("UIEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/onerror", "onerror")}}
      </td>
    </tr>
  </tbody>
</table>

イベントオブジェクトは、ユーザーインターフェイス要素から生成された場合は {{domxref("UIEvent")}} のインスタンスとなり、それ以外の場合は {{domxref("Event")}} となります。

## 例

### ライブデモ

#### HTML

```html
<div class="controls">
  <button id="script-error" type="button">Generate script error</button>
  <img class="bad-img" />
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

button {
  height: 2rem;
  margin: .5rem;
}

img {
  width: 0;
  height: 0;
}
```

#### JS

```js
const log = document.querySelector('.event-log-contents');

window.addEventListener('error', (event) => {
    log.textContent = log.textContent + `${event.type}: ${event.message}\n`;
    console.log(event)
});

const scriptError = document.querySelector('#script-error');
scriptError.addEventListener('click', () => {
    const badCode = 'const s;';
    eval(badCode);
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.error_event")}}

## 関連情報

- `Window` を対象としたこのイベント: {{domxref("Window/error_event", "error")}} イベント
