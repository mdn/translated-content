---
title: "FileReader: loadend event"
slug: Web/API/FileReader/loadend_event
---

{{APIRef}}

`loadend` 이벤트는 성공여부와 관계없이 파일읽기가 끝나면 실행됩니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">버블링</th>
      <td>해당없음</td>
    </tr>
    <tr>
      <th scope="row">이벤트 취소가능</th>
      <td>해당없음</td>
    </tr>
    <tr>
      <th scope="row">인터페이스</th>
      <td>{{domxref("ProgressEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">이벤트 핸들러 프로퍼티</th>
      <td>{{domxref("FileReader.onloadend")}}</td>
    </tr>
  </tbody>
</table>

## 예제

### Live example

#### HTML

```html
<div class="example">
  <div class="file-select">
    <label for="avatar">Choose a profile picture:</label>
    <input
      type="file"
      id="avatar"
      name="avatar"
      accept="image/png, image/jpeg" />
  </div>

  <img src="" class="preview" height="200" alt="Image preview..." />

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
  margin: 0.2rem;
  padding: 0.2rem;
}

.example {
  display: grid;
  grid-template-areas:
    "select log"
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

.event-log > label {
  display: block;
}

.event-log-contents {
  resize: none;
}
```

#### JS

```js
const fileInput = document.querySelector('input[type="file"]');
const preview = document.querySelector("img.preview");
const eventLog = document.querySelector(".event-log-contents");
const reader = new FileReader();

function handleEvent(event) {
  eventLog.textContent =
    eventLog.textContent + `${event.type}: ${event.loaded} bytes transferred\n`;

  if (event.type === "load") {
    preview.src = reader.result;
  }
}

function addListeners(reader) {
  reader.addEventListener("loadstart", handleEvent);
  reader.addEventListener("load", handleEvent);
  reader.addEventListener("loadend", handleEvent);
  reader.addEventListener("progress", handleEvent);
  reader.addEventListener("error", handleEvent);
  reader.addEventListener("abort", handleEvent);
}

function handleSelected(e) {
  eventLog.textContent = "";
  const selectedFile = fileInput.files[0];
  if (selectedFile) {
    addListeners(reader);
    reader.readAsDataURL(selectedFile);
  }
}

fileInput.addEventListener("change", handleSelected);
```

#### 결과

{{ EmbedLiveSample('Live_example', '100%', '300px') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- Related events: {{domxref("FileReader.loadstart_event", "loadstart")}}, {{domxref("FileReader.load_event", "load")}}, {{domxref("FileReader.progress_event", "progress")}}, {{domxref("FileReader.error_event", "error")}}, {{domxref("FileReader.abort_event", "abort")}}
