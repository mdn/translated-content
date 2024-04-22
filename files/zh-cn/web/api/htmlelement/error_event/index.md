---
title: error
slug: Web/API/HTMLElement/error_event
---

{{APIRef}}

当一个资源加载失败或无法使用时，会在{{domxref("Element")}}对象上触发`error`事件。例如当脚本执行错误、或图片无法找到或图片无效时。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles（支持冒泡）</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable（可撤销）</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface（接口）</th>
      <td>{{domxref("Event")}} 或{{domxref("UIEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property（事件处理程序属性）</th>
      <td>
        {{domxref("GlobalEventHandlers/onerror", "onerror")}}
      </td>
    </tr>
  </tbody>
</table>

如果事件对象是从用户界面元素生成的，则它是一个{{domxref("UIEvent")}}实例;反之，它是一个{{domxref("Event")}}实例。

## 示例

### 在线示例

#### HTML

```html
<div class="controls">
  <button id="img-error" type="button">生成图像 error</button>
  <img class="bad-img" />
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

button {
  height: 2rem;
  margin: 0.5rem;
}

img {
  width: 0;
  height: 0;
}
```

#### JS

```js
const log = document.querySelector(".event-log-contents");

const badImg = document.querySelector(".bad-img");
badImg.addEventListener("error", (event) => {
  log.textContent = log.textContent + `${event.type}: Loading image\n`;
  console.log(event);
});

const imgError = document.querySelector("#img-error");
imgError.addEventListener("click", () => {
  badImg.setAttribute("src", "i-dont-exist");
});
```

#### 结果

{{ EmbedLiveSample('在线示例', '100%', '150px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- This event on `Window` targets: {{domxref("Window/error_event", "error")}} event
