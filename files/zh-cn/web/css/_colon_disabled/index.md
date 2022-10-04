---
title: ':disabled'
slug: Web/CSS/:disabled
---

{{ CSSRef() }}

`:disabled` CSS [伪类](/zh-CN/CSS/Pseudo-classes)表示任何被禁用的元素。如果一个元素不能被激活（如选择、点击或接受文本输入）或获取焦点，则该元素处于被禁用状态。元素还有一个启用状态（enabled state），在启用状态下，元素可以被激活或获取焦点。

```css
/* Selects any disabled <input> */
input:disabled {
  background: #ccc;
}
```

## 语法

{{csssyntax}}

## 示例

这个例子显示基本的购物表单。通过使用 [JavaScript](/zh-CN/docs/Web/JavaScript) {{event("change")}} 事件让用户启用/禁用付款字段。

### HTML

```html
<form action="#">
  <fieldset id="shipping">
    <legend>Shipping address</legend>
    <input type="text" placeholder="Name">
    <input type="text" placeholder="Address">
    <input type="text" placeholder="Zip Code">
  </fieldset>
  <br>
  <fieldset id="billing">
    <legend>Billing address</legend>
    <label for="billing_is_shipping">Same as shipping address:</label>
    <input type="checkbox" id="billing-checkbox" checked>
    <br>
    <input type="text" placeholder="Name" disabled>
    <input type="text" placeholder="Address" disabled>
    <input type="text" placeholder="Zip Code" disabled>
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
// Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', function () {
  // Attach `change` event listener to checkbox
  document.getElementById('billing-checkbox').onchange = toggleBilling;
}, false);

function toggleBilling() {
  // Select the billing text fields
  var billingItems = document.querySelectorAll('#billing input[type="text"]');

  // Toggle the billing text fields
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

## 相关链接

- {{ Cssxref(":enabled") }}
