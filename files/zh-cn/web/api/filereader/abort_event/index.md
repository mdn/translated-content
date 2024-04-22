---
title: "FileReader: 中止事件 (abort)"
slug: Web/API/FileReader/abort_event
---

{{APIRef}}

在中止读取时会触发 `abort` 事件：例如程序调用{{domxref("FileReader.abort()")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">可取消</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("ProgressEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">事件处理属性</th>
      <td>{{domxref("FileReader.onabort")}}</td>
    </tr>
  </tbody>
</table>

## 示例

### 实例

#### HTML

```html
<div class="example">
  <div class="file-select">
    <label for="avatar">选择你的头像：</label>
    <input
      type="file"
      id="avatar"
      name="avatar"
      accept="image/png, image/jpeg" />
  </div>

  <img src="" class="preview" height="200" alt="图像预览..." />

  <div class="event-log">
    <label>事件日志：</label>
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
  reader.abort();
}

fileInput.addEventListener("change", handleSelected);
返回返回发的;
```

#### 结果

{{ EmbedLiveSample('实例', '100%', '300px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("FileReader.loadstart_event", "loadstart")}}, {{domxref("FileReader.loadend_event", "loadend")}}, {{domxref("FileReader.progress_event", "progress")}}, {{domxref("FileReader.error_event", "error")}}, {{domxref("FileReader.load_event", "load")}}.
