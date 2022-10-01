---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
---

{{ APIRef("DOM") }}

{{domxref("Element", "元素")}}方法 **`removeAttribute()`** 从指定的元素中删除一个属性。

### 语法

```
element.removeAttribute(attrName);
```

### 参数

- 属性名
  - : {{domxref("DOMString")}}指定要从元素中移除的属性的名称。如果指定的属性不存在，则 removeAttribute() 返回，但不会生成错误。

### 返回值

IE 返回 boolean 类型值，其他返回 undefined

> **备注：** 因为 `removeAttribute()` 不会返回任何有效值，你不能使用链式方法（连续使用方法，例如 `document.body.removeAttribute("first").removeAttribute("second")…`）连续移除多个属性。

## 使用说明

若要彻底移除一个属性的效果，应当使用 `removeAttribute()`，而不是使用 {{domxref("Element.setAttribute", "setAttribute()")}} 将属性值设置为 `null`。对于许多属性，如果仅将其值设为 `null`，这不会造达成和预期一样的效果。

{{ DOMAttributeMethods() }}

## 例子

```js
// Given: <div id="div1" align="left" width="200px">
document.getElementById("div1").removeAttribute("align");
// Now: <div id="div1" width="200px">
```

## 规范

[DOM Level 2 Core: removeAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6D6AC0F9) (introduced in [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute))

## 浏览器兼容性

{{Compat}}
