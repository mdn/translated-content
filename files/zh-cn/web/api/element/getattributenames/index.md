---
title: Element.getAttributeNames()
slug: Web/API/Element/getAttributeNames
---

{{APIRef("DOM")}}

`Element.getAttributeNames()` 返回一个{{jsxref("Array")}}，该数组包含指定元素（Element）的所有属性名称，如果该元素不包含任何属性，则返回一个空数组。

将 `getAttributeNames()` 与 {{domxref("Element.getAttribute","getAttribute()")}} 组合使用，是一种有效替代 {{domxref("Element.attributes")}} 的使用方法。

## 语法

```plain
let attributeNames = element.getAttributeNames();
```

## 例子

```js
// 遍历 elements 的元素
for (let name of element.getAttributeNames()) {
  let value = element.getAttribute(name);
  console.log(name, value);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
