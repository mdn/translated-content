---
title: "XMLHttpRequest: error 事件"
slug: Web/API/XMLHttpRequest/error_event
---

{{APIRef}}

当请求遇到错误时，将触发`error` 事件。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">可冒泡</th>
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
      <th scope="row">事件处理程序属性</th>
      <td>
        {{domxref("XMLHttpRequestEventTarget/onerror", "onerror")}}
      </td>
    </tr>
  </tbody>
</table>

## 示例

### 在线示例

#### HTML

```html
<div class="controls">
  <input
    class="xhr success"
    type="button"
    name="xhr"
    value="Click to start XHR (success)" />
  <input
    class="xhr error"
    type="button"
    name="xhr"
    value="Click to start XHR (error)" />
  <input
    class="xhr abort"
    type="button"
    name="xhr"
    value="Click to start XHR (abort)" />
</div>

<textarea readonly class="event-log"></textarea>
```

```css hidden
.event-log {
  width: 25rem;
  height: 4rem;
  border: 1px solid black;
  margin: 0.5rem;
  padding: 0.2rem;
}

input {
  width: 11rem;
  margin: 0.5rem;
}
```

#### JS

```js
const xhrButtonSuccess = document.querySelector(".xhr.success");
const xhrButtonError = document.querySelector(".xhr.error");
const xhrButtonAbort = document.querySelector(".xhr.abort");
const log = document.querySelector(".event-log");

function handleEvent(e) {
  log.textContent =
    log.textContent + `${e.type}: ${e.loaded} bytes transferred\n`;
}

function addListeners(xhr) {
  xhr.addEventListener("loadstart", handleEvent);
  xhr.addEventListener("load", handleEvent);
  xhr.addEventListener("loadend", handleEvent);
  xhr.addEventListener("progress", handleEvent);
  xhr.addEventListener("error", handleEvent);
  xhr.addEventListener("abort", handleEvent);
}

function runXHR(url) {
  log.textContent = "";

  const xhr = new XMLHttpRequest();
  addListeners(xhr);
  xhr.open("GET", url);
  xhr.send();
  return xhr;
}

xhrButtonSuccess.addEventListener("click", () => {
  runXHR("dgszyjnxcaipwzy.jpg");
});

xhrButtonError.addEventListener("click", () => {
  runXHR("https://somewhere.org/i-dont-exist");
});

xhrButtonAbort.addEventListener("click", () => {
  runXHR("dgszyjnxcaipwzy.jpg").abort();
});
```

#### 结果

{{ EmbedLiveSample('在线示例', '100%', '150px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他

- 相关事件：{{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequest/load_event", "load")}}, {{domxref("XMLHttpRequest/progress_event", "progress")}}, {{domxref("XMLHttpRequest/loadend_event", "loadend")}}, {{domxref("XMLHttpRequest/abort_event", "abort")}}
- [监视进度](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress)
