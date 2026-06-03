---
title: :disabled
slug: Web/CSS/Reference/Selectors/:disabled
---

`:disabled` [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)表示任何被禁用的元素。如果一个元素不能被激活（如选择、点击或接受文本输入）或获取焦点，则该元素处于被禁用状态。元素还有一个启用状态，在启用状态下，元素可以被激活或获取焦点。

{{InteractiveExample("CSS Demo: :disabled", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

*:disabled {
  background-color: dimgrey;
  color: linen;
  opacity: 1;
}
```

```html interactive-example
<form>
  <label for="name">Name:</label>
  <input id="name" name="name" type="text" />

  <label for="emp">Employed:</label>
  <select id="emp" name="emp" disabled>
    <option>No</option>
    <option>Yes</option>
  </select>

  <label for="empDate">Employment Date:</label>
  <input id="empDate" name="empDate" type="date" disabled />

  <label for="resume">Resume:</label>
  <input id="resume" name="resume" type="file" />
</form>
```

## 语法

```css
:disabled {
  /* ... */
}
```

## 示例

这个例子展示了一个基本的发货表单。通过使用 [JavaScript](/zh-CN/docs/Web/JavaScript) {{domxref("HTMLElement/change_event", "change")}} 事件让用户启用/禁用账单字段。

### HTML

```html
<form action="#">
  <fieldset id="shipping">
    <legend>发货地址</legend>
    <input type="text" placeholder="姓名" />
    <input type="text" placeholder="地址" />
    <input type="text" placeholder="邮政编码" />
  </fieldset>
  <br />
  <fieldset id="billing">
    <legend>账单地址</legend>
    <label for="billing-checkbox">跟发货地址一样：</label>
    <input type="checkbox" id="billing-checkbox" checked />
    <br />
    <input type="text" placeholder="姓名" disabled />
    <input type="text" placeholder="地址" disabled />
    <input type="text" placeholder="邮政编码" disabled />
  </fieldset>
</form>
```

### CSS

```css
input[type="text"]:disabled {
  background: #ccc;
}
```

### JavaScript

```js
// 等待页面加载完毕
document.addEventListener(
  "DOMContentLoaded",
  function () {
    // 将“change”事件监听器附加到复选框
    document.getElementById("billing-checkbox").onchange = toggleBilling;
  },
  false,
);

function toggleBilling() {
  // 选择 billing 文本字段
  var billingItems = document.querySelectorAll('#billing input[type="text"]');

  // 切换 billing 文本字段
  for (var i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
}
```

### 结果

{{EmbedLiveSample('示例', 300, 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref(":enabled") }}
