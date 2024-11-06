---
title: document.readyState
slug: Web/API/Document/readyState
---

{{APIRef("DOM")}}

**`Document.readyState`** 属性描述了{{ domxref("document") }} 的加载状态。

当该属性值发生变化时，会在 {{domxref("document")}} 对象上触发 [`readystatechange`](/zh-CN/docs/Web/API/Document/readystatechange_event) 事件。

## 值

一个文档的 **`readyState`** 可以是以下之一：

- `loading`（正在加载）
  - : {{ domxref("document") }} 仍在加载。
- `interactive`（可交互）
  - : 文档已被解析，**正在加载**状态结束，但是诸如图像，样式表和框架之类的子资源仍在加载。
- `complete`（完成）
  - : 文档和所有子资源已完成加载。表示 [`load`](/zh-CN/docs/Web/API/Window/load_event) 状态的事件即将被触发。

## 示例

### 不同的准备状态

```js
switch (document.readyState) {
  case "loading":
    // 表示文档还在加载中，即处于“正在加载”状态。
    break;
  case "interactive":
    // 文档已经结束了“正在加载”状态，DOM 元素可以被访问。
    // 但是像图像，样式表和框架等资源依然还在加载。
    var span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // 页面所有内容都已被完全加载。
    let CSS_rule = document.styleSheets[0].cssRules[0].cssText;
    console.log(`The first CSS rule is: ${CSS_rule}`);
    break;
}
```

### 模拟 DOMContentLoaded 事件的 readystatechange

```js
// 模拟 DOMContentLoaded/ jquery ready
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    initApplication();
  }
};
```

### 模拟 load 事件的 readystatechange

```js
// 模拟 load 事件
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    initApplication();
  }
};
```

### 在 DOMContentLoaded 之前使用 readystatechange 作为事件处理程序以插入或修改 DOM

```plain
document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    initLoader();
  }
  else if (event.target.readyState === 'complete') {
    initApp();
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Window/load_event", "load")}}
