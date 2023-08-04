---
title: "Window: error event"
slug: Web/API/Window/error_event
---

{{APIRef}}

当资源加载失败或无法使用时，会在{{domxref("Window")}}对象触发`error`事件。例如：script 执行时报错。

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
      <td>{{domxref("Event")}} or {{domxref("UIEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property（事件处理程序属性）</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/API/GlobalEventHandlers/onerror"
            >onerror</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

如果它是由用户界面元素生成的，或者是由事件实例生成的，那么此事件是{{domxref("UIEvent")}}实例。

## 示例

### 在线示例

#### HTML

```html
<div class="controls">
  <button id="script-error" type="button">Generate script error</button>
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

window.addEventListener("error", (event) => {
  log.textContent = log.textContent + `${event.type}: ${event.message}\n`;
  console.log(event);
});

const scriptError = document.querySelector("#script-error");
scriptError.addEventListener("click", () => {
  const badCode = "const s;";
  eval(badCode);
});
```

#### 结果

{{ EmbedLiveSample('在线示例', '100%', '150px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关事件

- This event on `Element` targets: [`error`](/zh-CN/docs/Web/API/Element/error_event) event
