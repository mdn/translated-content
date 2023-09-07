---
title: "HTMLElement: beforeinput event"
slug: Web/API/HTMLElement/beforeinput_event
---

{{APIRef}} {{SeeCompatTable}}

DOM 事件 **`beforeinput`** 在{{HTMLElement("input")}}, {{HTMLElement("select")}} 或 {{HTMLElement("textarea")}} 的值即将被修改前触发。这个事件也可以在 {{domxref("HTMLElement.contentEditable", "contenteditable")}} 被设置为 `true` 的元素和打开 {{domxref("Document.designMode", "designMode")}} 后的任何元素上被触发。

In the case of `contenteditable` and `designMode`, the event target is the **editing host**. If these properties apply to multiple elements, the editing host is the nearest ancestor element whose parent isn't editable.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("InputEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>None</td>
    </tr>
    <tr>
      <th>Sync / Async</th>
      <td>Sync</td>
    </tr>
    <tr>
      <th>Composed</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Default Action</th>
      <td>Update the DOM element</td>
    </tr>
  </tbody>
</table>

## 示例

这个例子会在 {{HtmlElement("input")}} 元素的值即将被新的值更新前记录下当前的值。

### HTML

```html
<input placeholder="Enter some text" name="name" />
<p id="values"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("beforeinput", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：[`input`](/zh-CN/docs/Web/API/HTMLElement/input_event)
