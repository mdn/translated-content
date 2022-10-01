---
title: 'Document: readystatechange 事件'
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

label, button {
  display: block;
}

#reload {
  height: 2rem;
}
```

#### JS

```js
const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      window.location.reload(true);
  }, 200);
});

window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) => {
    log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) => {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
});
```

#### 结果

{{ EmbedLiveSample('实时演示', '100%', '160px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

IE 浏览器是一直支持 `readystatechange` 事件的，可作为 [DOMContentLoaded](</zh-CN/docs/Mozilla_event_reference/DOMContentLoaded_(event)>) 事件的替代方法（参见[Browser compatibility](/zh-CN/docs/Mozilla_event_reference/DOMContentLoaded_%28event%29#Browser_compatibility)的注释 \[2]）。

## 参见

- {{event("DOMContentLoaded")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
