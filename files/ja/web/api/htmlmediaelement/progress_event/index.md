---
title: 'HTMLMediaElement: progress イベント'
slug: Web/API/HTMLMediaElement/progress_event
---

{{APIRef}}

**`progress`** イベントは、ブラウザーがリソースを読み込むときに定期的に発生します。

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
      <td><code>onprogress</code></td>
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

#### JavaScript

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
        source.setAttribute('src', 'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4');
        source.setAttribute('type', 'video/mp4');

        video.appendChild(source);
    }
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '250px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
