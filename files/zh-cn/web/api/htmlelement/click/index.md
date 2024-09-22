---
title: HTMLElement：click() 方法
slug: Web/API/HTMLElement/click
l10n:
  sourceCommit: bf0b6c9ae5845fdfca1398541ed26d9946db2495
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.click()`** 方法模拟鼠标单击元素。当在某个元素上调用时，会触发元素的 {{domxref("Element/click_event", "click")}} 事件（除非该元素设置了 [`disabled`](/zh-CN/docs/Web/HTML/Attributes/disabled) 属性）。

## 语法

```js-nolint
click()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

当鼠标移动过复选框时模拟鼠标点击事件：

### HTML

```html
<form>
  <input
    type="checkbox"
    id="myCheck"
    onmouseover="myFunction()"
    onclick="alert('发生点击事件')" />
</form>
```

### JavaScript

```js
// 当鼠标滑过（mouse-over）执行 myFunction
function myFunction() {
  document.getElementById("myCheck").click();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 有关的事件处理器

  - {{domxref("Element.click_event", "Element.onclick")}}
  - {{domxref("Element.dblclick_event", "Element.ondblclick")}}
  - {{domxref("Element.auxclick_event", "Element.onauxclick")}}
