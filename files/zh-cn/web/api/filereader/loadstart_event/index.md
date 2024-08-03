---
title: FileReader：loadstart 事件
slug: Web/API/FileReader/loadstart_event
l10n:
  sourceCommit: e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("FileReader")}} 接口的 **`loadstart`** 事件在文件读取操作开始时触发。

此事件不可取消且不会冒泡。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("loadstart", (event) => {});

onloadstart = (event) => {};
```

## 事件类型

{{domxref("ProgressEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("ProgressEvent")}}

## 事件属性

_还继承其父级 {{domxref("Event")}} 的属性。_

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : 一个布尔标志，指示底层进程要完成的总工作量以及已完成的工作量是否可计算。换句话说，它表明进展是否可衡量。
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : 一个 64 位无符号整数值，指示底层进程已执行的工作量。完成工作的比率可以通过将 `total` 除以该属性的值来计算。使用 HTTP 下载资源时，仅计算 HTTP 消息的正文，不包括标头和其他开销。
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : 一个 64 位无符号整数，表示底层进程正在执行的工作总量。使用 HTTP 下载资源时，这是 `Content-Length`（消息正文的大小），不包括标头和其他开销。

## 示例

### 实时示例

#### HTML

```html
<div class="example">
  <div class="file-select">
    <label for="avatar">选择个人资料图片：</label>
    <input
      type="file"
      id="avatar"
      name="avatar"
      accept="image/png, image/jpeg" />
  </div>

  <img src="" class="preview" height="200" alt="图片预览" />

  <div class="event-log">
    <label for="eventLog">事件日志：</label>
    <textarea readonly class="event-log-contents" id="eventLog"></textarea>
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
  resize: none;
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
```

#### JavaScript

```js
const fileInput = document.querySelector('input[type="file"]');
const preview = document.querySelector("img.preview");
const eventLog = document.querySelector(".event-log-contents");
const reader = new FileReader();

function handleEvent(event) {
  eventLog.textContent += `${event.type}：传输了 ${event.loaded} 字节\n`;

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

{{ EmbedLiveSample('实时示例', '100%', '300px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("FileReader.loadend_event", "loadend")}}、{{domxref("FileReader.load_event", "load")}}、{{domxref("FileReader.progress_event", "progress")}}、{{domxref("FileReader.error_event", "error")}}、{{domxref("FileReader.abort_event", "abort")}}
