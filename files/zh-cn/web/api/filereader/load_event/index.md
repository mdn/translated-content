---
title: "FileReader: load event"
slug: Web/API/FileReader/load_event
---

{{APIRef}}

当文件成功读取时，执行`load` 事件

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">是否冒泡</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">是否能中断退出</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">调用接口</th>
      <td>{{domxref("ProgressEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">事件处理属性</th>
      <td>{{domxref("FileReader.onload")}}</td>
    </tr>
  </tbody>
</table>

## 例子

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

#### 结果

{{ EmbedLiveSample('Live_example', '100%', '300px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参阅

- Related events: {{domxref("FileReader.loadstart_event")}}, {{domxref("FileReader.loadend_event")}}, {{domxref("FileReader.progress_event")}}, {{domxref("FileReader.error_event")}}, {{domxref("FileReader.abort_event")}}
