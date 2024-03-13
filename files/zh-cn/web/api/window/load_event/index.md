---
title: Window：load 事件
slug: Web/API/Window/load_event
---

{{APIRef}}

**`load`** 事件在整个页面及所有依赖资源如样式表和图片都已完成加载时触发。它与 {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 不同，后者只要页面 DOM 加载完成就触发，无需等待依赖资源的加载。

该事件不可取消，也不会冒泡。

> **备注：** _所有以 `load` 命名的事件都不会传递到 `Window` 上_，即使 `bubbles` 初始化为 `true`。要在 `window` 上捕获 `load` 事件，相关的 `load` 事件必须直接绑定到 `window` 上。

> **备注：** 当主文档加载完成时，`load` 事件将在 `window` 上触发，但其有两个被修改的属性：`target` 为 `document`，以及 `path` 为 `undefined`。这是由遗留的一致性问题导致的。

## 语法

在如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("load", (event) => {});

onload = (event) => {};
```

## 事件类型

一个通用的 {{domxref("Event")}}。

## 示例

当页面完全加载后在控制台打印一段信息：

```js
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});
```

也可以使用 `onload` 事件处理器属性实现：

```js
window.onload = (event) => {
  console.log("page is fully loaded");
};
```

### 交互示例

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Reload</button>
</div>

<div class="event-log">
  <label for="eventLog">Event log:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
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
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += `DOMContentLoaded\n`;
});
```

#### 结果

{{ EmbedLiveSample('交互示例', '100%', '160px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Document [readyState](/zh-CN/docs/Web/API/Document/readyState) API
- 相关事件
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Window/beforeunload_event", "beforeunload")}}
  - {{domxref("Window/unload_event", "unload")}}
