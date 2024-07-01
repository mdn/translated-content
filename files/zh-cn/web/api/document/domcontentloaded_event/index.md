---
title: Document：DOMContentLoaded 事件
short-title: DOMContentLoaded
slug: Web/API/Document/DOMContentLoaded_event
---

{{APIRef}}

当 HTML 文档完全解析，且所有延迟脚本（[`<script defer src="…">`](/zh-CN/docs/Web/HTML/Element/script#defer) 和 [`<script type="module">`](/zh-CN/docs/Web/HTML/Element/script#module)）下载和执行完毕后，会触发 **`DOMContentLoaded`** 事件。它不会等待图片、子框架和异步脚本等其他内容完成加载。

`DOMContentLoaded` 不会等待样式表加载，但延迟脚本*会*等待样式表，而且 `DOMContentLoaded` 事件排在延迟脚本之后。此外，非延迟或异步的脚本（如 `<script>`）将等待已解析的样式表加载。

另一个事件——{{domxref("Window/load_event", "load")}}——只能用于检测完全加载的页面。有一个常见的错误就是在 `DOMContentLoaded` 事件更合适时使用了 `load` 事件。

这个事件不可取消。

## 语法

在类似于 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("DOMContentLoaded", (event) => {});

onDOMContentLoaded = (event) => {};
```

## 事件类型

通用 {{domxref("Event")}}。

## 示例

### 基本用法

```js
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM 完全加载和解析");
});
```

### 延迟 DOMContentLoaded

```html
<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM 完全加载和解析");
  });

  for (let i = 0; i < 1_000_000_000; i++);
  // 这段同步脚本将会延迟 DOM 解析，
  // 所以 DOMContentLoaded 事件将会延迟执行。
</script>
```

### 检查加载是否已经完成

在你的脚本有机会运行前，`DOMContentLoaded` 可能就已经被触发。所以你在决定添加一个事件监听器前最好先检查一下。

```js
function doSomething() {
  console.info("DOM 加载了");
}

if (document.readyState === "loading") {
  // 此时加载尚未完成
  document.addEventListener("DOMContentLoaded", doSomething);
} else {
  // `DOMContentLoaded` 已经被触发
  doSomething();
}
```

> **备注：** 这里不存在竞争条件——文档不可能在 `if` 检查和 `addEventListener()` 调用之间被加载。JavaScript 采用的是运行到完成语义，这意味着如果文档在事件循环的某个特定时间点正在加载，那么在下一个循环之前它是不可能被加载的，而在下一个循环中，`doSomething` 处理程序已经附加并将被触发。

### 运行实例

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">重新加载</button>
</div>

<div class="event-log">
  <label for="eventLog">事件日志：</label>
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
  log.textContent += "DOMContentLoaded\n";
});
```

#### 结果

{{ EmbedLiveSample('运行实例', '100%', '160px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("Window/load_event", "load")}}、{{domxref("Document/readystatechange_event", "readystatechange")}}、{{domxref("Window/beforeunload_event", "beforeunload")}}、{{domxref("Window/unload_event", "unload")}}
