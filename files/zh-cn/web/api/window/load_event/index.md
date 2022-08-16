---
title: load
slug: Web/API/Window/load_event
---
{{APIRef}}

当整个页面及所有依赖资源如样式表和图片都已完成加载时，将触发`load`事件。

它与{{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}不同，后者只要页面 DOM 加载完成就触发，无需等待依赖资源的加载。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">是否冒泡</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">能否取消</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/onload", "onload")}}
      </td>
    </tr>
  </tbody>
</table>

## 用法

当页面及资源完全加载后在控制台打印一段信息：

```js
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});
```

也可以使用`onload`实现：

```js
window.onload = (event) => {
  console.log('page is fully loaded');
};
```

## 示例

### HTML

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

### JS

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

{{ EmbedLiveSample('Live_example', '100%', '160px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.Window.load_event")}}

## 参阅

- 相关事件: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}
