---
title: "HTMLInputElement: invalid event"
slug: Web/API/HTMLInputElement/invalid_event
---

{{APIRef}}

若一个可提交元素在检查有效性时，不符合对它的约束条件，则会触发 **`invalid`** 事件。

<table class="properties">
  <tbody>
    <tr>
      <th>冒泡</th>
      <td>否</td>
    </tr>
    <tr>
      <th>可取消</th>
      <td>是</td>
    </tr>
    <tr>
      <th>接口</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th>事件处理程序属性</th>
      <td>{{domxref("GlobalEventHandlers.oninvalid")}}</td>
    </tr>
  </tbody>
</table>

这个事件可用于展示提交表单时所出现的问题的概览。当表单提交时，若任一表单控件无效，则会触发 `invalid` 事件。对可提交元素有效性的检查是在提交父元素 {{HtmlElement("form")}} 之前或调用父元素 `<form>` 或元素自己的 [`checkValidity()`](/zh-CN/docs/Learn/Forms#constraint_validation_api) 方法之后。

这个事件不会在 [`blur`](/zh-CN/docs/Web/API/Element/blur_event) 事件中触发。

## 示例

如果表单提交时有无效值，检查可提交元素时发现了错误，则 `invalid` 事件会在那个无效元素上触发。在这个例子中，当输入无效值触发 `invalid` 事件时，这个无效值被记录下来。

### HTML

```html
<form action="#">
  <ul>
    <li>
      <label
        >Enter an integer between 1 and 10:
        <input type="number" min="1" max="10" required
      /></label>
    </li>
    <li><input type="submit" value="submit" /></li>
  </ul>
</form>
<p id="log"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("invalid", logValue);

function logValue(e) {
  log.textContent += e.target.value;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML {{HtmlElement("form")}} 元素
- 相关事件：[`submit`](/zh-CN/docs/Web/API/HTMLFormElement/submit_event)
- [CSS `:invalid` 伪类](/zh-CN/docs/Web/CSS/:invalid)
