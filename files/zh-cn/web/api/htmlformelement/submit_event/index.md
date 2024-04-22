---
title: "HTMLFormElement: submit event"
slug: Web/API/HTMLFormElement/submit_event
---

{{APIRef}}

当表单 {{HtmlElement("form")}} 提交的时候触发 `submit` 事件。

<table class="properties">
  <tbody>
    <tr>
      <th>是否冒泡</th>
      <td>是（虽然其通常被看作不冒泡的简单事件）</td>
    </tr>
    <tr>
      <th>是否可取消</th>
      <td>是</td>
    </tr>
    <tr>
      <th>接口</th>
      <td>{{DOMxRef("SubmitEvent")}}</td>
    </tr>
    <tr>
      <th>事件处理器属性</th>
      <td>{{domxref("GlobalEventHandlers.onsubmit")}}</td>
    </tr>
  </tbody>
</table>

注意 `submit` 事件只能作用于 `<form>` 元素本身，不能作用于 {{HtmlElement("button")}} 或者 {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}。但 {{domxref("SubmitEvent")}} 被用于表单提交时，会携带 {{domxref("SubmitEvent.submitter", "submitter")}} 属性，这是触发提交请求时会调用的按钮。

当用户点击提交按钮（{{HtmlElement("button")}} 或 {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}），亦或是在表单里输入时（e.g. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}）按下 <kbd>Enter</kbd> 键，`submit` 事件将会被触发。直接调用 {{domxref("HTMLFormElement.submit()", "form.submit()")}} 方法时，事件不会发送到表单。

> **备注：** 当试图提交一个未通过[验证](/zh-CN/docs/Learn/Forms/Form_validation)的表单时，会触发 {{domxref("HTMLInputElement/invalid_event", "invalid")}} 事件。在这种情况下，表单提交将会被验证机制阻止。因此，`sumbit` 事件也就不存在了。

## 示例

这个示例使用 {{domxref("EventTarget.addEventListener()")}} 去监听表单的提交。并记录当前的 {{domxref("Event.timeStamp")}}，然后阻止提交表单的默认操作。

### HTML

```html
<form id="form">
  <label>Test field: <input type="text" /></label>
  <br /><br />
  <button type="submit">Submit form</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
function logSubmit(event) {
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML {{HtmlElement("form")}} 元素
- 相关事件：{{domxref("HTMLInputElement/invalid_event", "invalid")}}
