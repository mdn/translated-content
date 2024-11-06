---
title: ":disabled"
slug: Web/CSS/:disabled
---

{{CSSRef}}

`:disabled` [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)表示任何被禁用的元素。如果一个元素不能被激活（如选择、点击或接受文本输入）或获取焦点，则该元素处于被禁用状态。元素还有一个启用状态，在启用状态下，元素可以被激活或获取焦点。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-disabled.html", "tabbed-standard")}}

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
