---
title: Event：currentTarget 属性
slug: Web/API/Event/currentTarget
l10n:
  sourceCommit: e2db3e53b257e07b5c469f8af5a68bd0d9db08d7
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

{{domxref("Event")}} 接口的 **`currentTarget`** 只读属性用于标识事件处理器所附加的元素。

这并不总是与触发事件的元素相同，因为事件可能在具有处理器的元素的后代上触发，然后通过事件[冒泡](/zh-CN/docs/Learn_web_development/Core/Scripting/Event_bubbling)到具有处理器的元素。事件的触发元素由 {{domxref("Event.target")}} 给出。

请注意，`currentTarget` 的值仅在事件处理器中可用。在事件处理器外部，它将为 `null`。这意味着，例如，如果在事件处理器内部获得 `Event` 对象的引用然后在事件处理器外部访问其 `currentTarget` 属性，则其值将为 `null`。

## 值

一个 {{domxref("EventTarget")}}，表示当前事件处理器所附加的对象。

## 示例

### currentTarget 与 target 的区别

此示例说明了 `currentTarget` 和 `target` 之间的区别。

#### HTML

页面包含一个包含“子元素” `<div>` 的“父元素” {{htmlelement("div")}}。

```html
<div id="parent">
  点击父元素
  <div id="child">点击子元素</div>
</div>

<button id="reset">重置</button>
<pre id="output"></pre>
```

```css hidden
button,
div,
pre {
  margin: 0.5rem;
}

div {
  padding: 1rem;
  border: 1px solid black;
}
```

#### JavaScript

事件处理器被附加到父元素。它记录 `event.currentTarget` 和 `event.target` 的值。

我们还有一个用于重新加载示例的“重置”按钮。

```js
const output = document.querySelector("#output");
const parent = document.querySelector("#parent");
parent.addEventListener("click", (event) => {
  const currentTarget = event.currentTarget.getAttribute("id");
  const target = event.target.getAttribute("id");
  output.textContent = `当前目标：${currentTarget}\n`;
  output.textContent += `目标：${target}`;
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### 结果

如果你在子 `<div>` 中点击，则 `target` 将标识子元素。如果你在父 `<div>` 中点击，则 `target` 将标识父元素。

在这两种情况下，`currentTarget` 都标识父元素，因为那是处理器附加到的元素。

{{EmbedLiveSample("currentTarget 与 target 的区别", 100, 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [事件冒泡](/zh-CN/docs/Learn_web_development/Core/Scripting/Event_bubbling)
