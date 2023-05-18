---
title: 'Element: error イベント'
slug: Web/API/HTMLElement/error_event
original_slug: Web/API/Element/error_event
---

{{APIRef}}

`error` イベントは、リソースの読み取りに失敗したり、使用できなかったりした場合に {{domxref("Element")}} オブジェクトに発生します。例えば、スクリプトの実行エラーがあったり、画像が見つからないか無効であった場合などです。

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
  <button id="img-error" type="button">Generate image error</button>
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

const badImg = document.querySelector('.bad-img');
badImg.addEventListener('error', (event) => {
    log.textContent = log.textContent + `${event.type}: Loading image\n`;
    console.log(event)
});

const imgError = document.querySelector('#img-error');
imgError.addEventListener('click', () => {
    badImg.setAttribute('src', 'i-dont-exist');
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Window` を対象としたこのイベント: {{domxref("Window/error_event", "error")}} イベント
