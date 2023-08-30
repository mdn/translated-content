---
title: Document：readystatechange 事件
slug: Web/API/Document/readystatechange_event
---

{{APIRef}}

当文档的 {{domxref("Document.readyState", "readyState")}} 属性发生改变时，会触发 `readystatechange` 事件。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">是否冒泡</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">是否可取消</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler 属性</th>
      <td><code>onreadystatechange</code></td>
    </tr>
  </tbody>
</table>

## 示例

### 实时演示

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Reload</button>
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

label,
button {
  display: block;
}

#reload {
  height: 2rem;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  window.setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent = log.textContent + "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent = log.textContent + `DOMContentLoaded\n`;
});
```

#### 结果

{{ EmbedLiveSample('实时演示', '100%', '160px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：[`DOMContentLoaded`](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event)、[`load`](/zh-CN/docs/Web/API/Window/load_event)、[`beforeunload`](/zh-CN/docs/Web/API/Window/beforeunload_event)、[`unload`](/zh-CN/docs/Web/API/Window/unload_event)
