---
title: FileReader：abort 事件
slug: Web/API/FileReader/abort_event
l10n:
  sourceCommit: 497d322c61511b11e4877a77660f8d7b394a8277
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`abort`** 事件会在读取操作被中止时触发：例如，当程序调用了 {{domxref("FileReader.abort()")}} 方法。

此事件不可取消且不会冒泡。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("abort", (event) => {});

onabort = (event) => {};
```

## 事件类型

{{domxref("ProgressEvent")}}。继承于 {{domxref("Event")}}。

{{InheritanceDiagram("ProgressEvent")}}

## 事件属性

_该属性也继承了其父类 {{domxref("Event")}} 的属性_。

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : 一个布尔标志，表示底层进程要完成的总工作量及已完成的工作量是否可计算。换句话说，它表明进度是否可以衡量。
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : 一个 64 位无符号整数值，表示底层进程已完成的工作量。完成工作的比例可以通过除以 `total` 属性的值来计算。当使用 HTTP 下载资源时，这仅计算 HTTP 消息的主体的大小，并且不包括标头以及其他开销。
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : 一个 64 位无符号整数，表示底层进程正在执行的总工作量。当使用 HTTP 下载资源时，这是 `Content-Length`（消息体的大小），并且不包括标头以及其他开销。

## 示例

### 在线示例

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

  <img src="" class="preview" height="200" alt="图片预览" />

  <div class="event-log">
    <label for="eventLog">事件输出：</label>
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
  eventLog.textContent += `${event.type}：传输了 ${event.loaded} 个字节\n`;

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
```

#### 结果

{{ EmbedLiveSample('在线示例', '100%', '300px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("FileReader.loadstart_event", "loadstart")}}、{{domxref("FileReader.loadend_event", "loadend")}}、{{domxref("FileReader.progress_event", "progress")}}、{{domxref("FileReader.error_event", "error")}}、{{domxref("FileReader.load_event", "load")}}。
