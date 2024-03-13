---
title: "Window: focus event"
slug: Web/API/Window/focus_event
---

{{APIRef}}

当元素获得焦点时， **`focus`** 事件就会触发。

与 `focus` 相反的事件是 {{domxref("Window/blur_event", "blur")}}

<table class="properties">
  <tbody>
    <tr></tr>
    <tr>
      <th>Bubbles（支持冒泡）</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Cancelable（可撤销）</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface（接口）</th>
      <td>{{DOMxRef("FocusEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property（事件处理程序属性）</th>
      <td>
        {{domxref("GlobalEventHandlers/onfocus", "onfocus")}}
      </td>
    </tr>
    <tr>
      <th>Sync / Async（同步/异步）</th>
      <td>Sync</td>
    </tr>
    <tr>
      <th>Composed（可组成）</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## 示例

### 在线示例

本示例在失去焦点时更改文档的外观。它使用 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} 监听 `focus` 和 {{domxref("Window/blur_event", "blur")}} 事件。

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

## 参考

- 相关联事件： {{domxref("Window/blur_event", "blur")}}
- `Element` 目标上的这个事件：{{domxref("Element/focus_event", "focus")}} 事件
