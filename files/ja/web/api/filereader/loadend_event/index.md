---
title: 'FileReader: loadend イベント'
slug: Web/API/FileReader/loadend_event
---

{{APIRef}}

`loadend` イベントは、ファイル読み込みが、成功したかどうかにかかわらず完了したときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("ProgressEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("FileReader.onloadend")}}</td>
    </tr>
  </tbody>
</table>

## 例

### ライブデモ

#### HTML

```html
<div class="example">

    <div class="file-select">
        <label for="avatar">Choose a profile picture:</label>
        <input type="file"
               id="avatar" name="avatar"
               accept="image/png, image/jpeg">
    </div>

    <img src="" class="preview" height="200" alt="Image preview...">

    <div class="event-log">
        <label>Event log:</label>
        <textarea readonly class="event-log-contents"></textarea>
    </div>

  </div>
```

```css hidden
img.preview {
  margin: 1rem 0;
}

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
              "select  log"
              "preview log";
}

.file-select {
  grid-area: select;
}

.preview {
  grid-area: preview;
}

.event-log {
  grid-area: log;
}

.event-log>label {
  display: block;
}

.event-log-contents {
  resize: none;
}
```

#### JS

```js
const fileInput = document.querySelector('input[type="file"]');
const preview = document.querySelector('img.preview');
const eventLog = document.querySelector('.event-log-contents');
const reader = new FileReader();

function handleEvent(event) {
    eventLog.textContent = eventLog.textContent + `${event.type}: ${event.loaded} bytes transferred\n`;

    if (event.type === "load") {
        preview.src = reader.result;
    }
}

function addListeners(reader) {
    reader.addEventListener('loadstart', handleEvent);
    reader.addEventListener('load', handleEvent);
    reader.addEventListener('loadend', handleEvent);
    reader.addEventListener('progress', handleEvent);
    reader.addEventListener('error', handleEvent);
    reader.addEventListener('abort', handleEvent);
}

function handleSelected(e) {
    eventLog.textContent = '';
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        addListeners(reader);
        reader.readAsDataURL(selectedFile);
    }
}

fileInput.addEventListener('change', handleSelected);
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '300px') }}

## 仕様書

| 仕様書                                                       | 状態                         |
| ------------------------------------------------------------ | ---------------------------- |
| {{SpecName('File API', '#dfn-loadend-event')}} | {{Spec2('File API')}} |

## ブラウザーの対応

{{Compat("api.FileReader.loadend_event")}}

## 関連情報

- 関連イベント: {{domxref("FileReader.load_event", "load")}}, {{domxref("FileReader.loadend_event", "loadend")}}, {{domxref("FileReader.progress_event", "progress")}}, {{domxref("FileReader.error_event", "error")}}, {{domxref("FileReader.abort_event", "abort")}}
