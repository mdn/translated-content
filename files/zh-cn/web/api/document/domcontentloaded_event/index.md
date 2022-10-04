---
title: 'Document: DOMContentLoaded 事件'
slug: Web/API/Document/DOMContentLoaded_event
---

{{APIRef}}

当纯 HTML 被完全加载以及解析时，**`DOMContentLoaded` **事件会被触发，而不必等待样式表，图片或者子框架完成加载。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">冒泡阶段</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">可撤销性</th>
      <td>Yes (尽管它被指定为一个简单事件时是不可撤销的)</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">事件句柄属性</th>
      <td>None</td>
    </tr>
  </tbody>
</table>

一个易混用但不同的事件是，[`load`](/zh-CN/docs/Web/API/Window/load_event),这个事件仅仅应该在探测到整个页面完全加载完成时被使用。一个常见的错误就是在该使用`DOMContentLoaded`的地方使用了`load` 。

JavaScript 的同步模式会导致 DOM 解析暂停。如果你想在用户请求页面时，首先尽可能先解析 DOM，此时你可以使用[JavaScript 异步模式](/zh-CN/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)，并且[优化样式表的加载](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery)。在通常模式的加载过程中，样式表的加载会与 DOM 解析并行，从而迟缓主要 HTML 文档的加载。

## 例子

### 基本用法

```js
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed'); // 译者注："DOM 完全加载以及解析"
});
```

### 延迟 DOMContentLoaded

```html
<script>
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });

for( let i = 0; i < 1000000000; i++)
{} // 这段同步脚本将会延迟 DOM 解析，
   // 所以 DOMContentLoaded 事件将会延迟执行。
</script>
```

### 检查加载是否已经完成

在你的脚本有机会运行前，`DOMContentLoaded`可能就已经被触发。所以你在决定添加一个事件监听器前最好先检查一下。

```js
function doSomething() {
  console.info('DOM loaded');
}

if (document.readyState === 'loading') {  // 此时加载尚未完成
  document.addEventListener('DOMContentLoaded', doSomething);
} else {  // 此时`DOMContentLoaded` 已经被触发
  doSomething();
}
```

### 实例

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

#### 结果展示

{{ EmbedLiveSample('实例', '100%', '160px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- 有关事件：[`load`](/zh-CN/docs/Web/API/Window/load_event), [`readystatechange`](/zh-CN/docs/Web/API/Document/readystatechange_event), [`beforeunload`](/zh-CN/docs/Web/API/Window/beforeunload_event), [`unload`](/zh-CN/docs/Web/API/Window/unload_event)
- [`Window`](/zh-CN/docs/Web/API/Window) 对象中的此事件：[`DOMContentLoaded`](/zh-CN/docs/Web/API/Window/DOMContentLoaded_event)
