---
title: "Window: blur event"
slug: Web/API/Window/blur_event
---

{{APIRef}}

当元素失去焦点时，**`blur`**事件将触发。

与 `blur` 相反的是{{domxref("Window/focus_event", "focus")}}。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles（是否支持冒泡）</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable（可撤销）</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface（接口）</th>
      <td>{{DOMxRef("FocusEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property（事件处理程序属性）</th>
      <td>
        {{domxref("GlobalEventHandlers/onblur", "onblur")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Sync / Async（同步/异步）</th>
      <td>Sync</td>
    </tr>
    <tr>
      <th scope="row">Composed</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## 示例

### 在线示例

此示例当文档失去焦点时，更改其外观。它使用{{domxref("EventTarget.addEventListener()","addEventListener()")}} 去监听{{domxref("Window/focus_event", "focus")}}和 `blur` 事件。

#### HTML

```html
<p id="log">Click on this document to give it focus.</p>
```

#### CSS

```css
.paused {
  background: #ddd;
  color: #555;
}
```

#### JavaScript

```js
function pause() {
  document.body.classList.add("paused");
  log.textContent = "FOCUS LOST!";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent =
    "This document has focus. Click outside the document to lose focus.";
}

const log = document.getElementById("log");

window.addEventListener("blur", pause);
window.addEventListener("focus", play);
```

#### 结果

{{EmbedLiveSample("在线示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

{{DOMxRef("document. activeelement")}} 的值在处理时因浏览器而异（[Firefox bug 452307](https://bugzil.la/452307)）：IE10 将其设置为焦点将移动到的元素，而 Firefox 和 Chrome 通常将其设置为文档的 body。

## 参见

- 相关联事件：{{domxref("Window/focus_event", "focus")}}
- Element 目标上的这个事件:{{domxref("Element/blur_event", "blur")}} 事件
