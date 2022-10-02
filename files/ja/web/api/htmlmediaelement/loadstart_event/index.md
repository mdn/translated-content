---
title: 'HTMLMediaElement: loadstart イベント'
slug: Web/API/HTMLMediaElement/loadstart_event
---

{{APIRef}}

**`loadstart`** イベントは、ブラウザーがリソースの読み込みを開始したときに発生します。

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
        {{domxref("GlobalEventHandlers/onloadstart", "onloadstart")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

### ライブデモ

#### HTML

```html
<div class="example">

    <button type="button">Load video</button>
    <video controls width="250"></video>

    <div class="event-log">
        <label>Event log:</label>
        <textarea readonly class="event-log-contents"></textarea>
    </div>

</div>
```

```css hidden
.event-log-contents {
  width: 18rem;
  height: 5rem;
  border: 1px solid black;
  margin: .2rem;
  padding: .2rem;
}

.example {
  display: grid;
  grid-template-areas:
              "button log"
              "video  log";
}

button {
  grid-area: button;
  width: 10rem;
  margin: .5rem 0;
}

video {
  grid-area: video;
}

.event-log {
  grid-area: log;
}

.event-log>label {
  display: block;
}
```

#### JS

```js
const loadVideo = document.querySelector('button');
const video = document.querySelector('video');
const eventLog = document.querySelector('.event-log-contents');
let source = null;

function handleEvent(event) {
    eventLog.textContent = eventLog.textContent + `${event.type}\n`;
}

video.addEventListener('loadstart', handleEvent);
video.addEventListener('progress', handleEvent);
video.addEventListener('canplay', handleEvent);
video.addEventListener('canplaythrough', handleEvent);

loadVideo.addEventListener('click', () => {

    if (source) {
        document.location.reload();
    } else {
        loadVideo.textContent = "Reset example";
        source = document.createElement('source');
        source.setAttribute('src', 'https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm');
        source.setAttribute('type', 'video/webm');

        video.appendChild(source);
    }
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '200px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
