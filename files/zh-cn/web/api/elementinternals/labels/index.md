---
title: ElementInternals：labels 属性
slug: Web/API/ElementInternals/labels
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

{{domxref("ElementInternals")}} 接口的 **`labels`** 只读属性返回与该元素关联的标签。

## 值

一个包含与此元素关联的所有标签元素的 {{domxref("NodeList")}}。

## 示例

以下示例显示了一个自定义复选框组件，其中有一个与之关联的 {{HTMLElement("label")}} 元素。将 `labels` 的值打印到控制台会返回一个包含表示此标签的条目 {{domxref("NodeList")}}。

```html
<form id="myForm">
  <custom-checkbox id="custom-checkbox"></custom-checkbox>
  <label for="custom-checkbox">加入时事通讯</label>
</form>
```

```js
let element = document.getElementById("custom-checkbox");
console.log(element.internals_.label);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
