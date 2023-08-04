---
title: HTMLElement.click()
slug: Web/API/HTMLElement/click
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.click()`** 方法可以用来模拟鼠标左键单击一个元素。

当在支持 `click()` 方法的元素上使用该方法（例如
{{HTMLElement("input")}}) ，将会产生该元素的一个点击事件。这个事件会冒泡上升到文档树（或事件链）中更高的元素，并触发它们的点击事件。

## 语法

```js-nolint
click()
```

## 示例

当鼠标移动过复选框时模拟一个点击事件：

### HTML

```html
<form>
  <input
    type="checkbox"
    id="myCheck"
    onmouseover="myFunction()"
    onclick="alert('click event occurred')" />
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

- 有关的事件处理

  - {{domxref("GlobalEventHandlers.onclick")}}
  - {{domxref("GlobalEventHandlers.ondblclick")}}
  - {{domxref("GlobalEventHandlers.onauxclick")}}
