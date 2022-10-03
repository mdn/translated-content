---
title: copy
slug: Web/API/Element/copy_event
---

当用户通过浏览器 UI（例如，使用 <kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>C</kbd> 键盘快捷方式或从菜单中选择“复制”）启动复制操作并响应允许的{{domxref("Document.execCommand","document.execCommand('copy')")}}调用时触发`copy`事件。

## 基本信息

- Specification
  - : [Clipboard](https://www.w3.org/TR/clipboard-apis/#the-copy-action)
- Interface
  - : {{domxref("ClipboardEvent")}}
- Bubbles
  - : Yes
- Cancelable
  - : Yes
- Target
  - : {{domxref("Element")}}：获得焦点的元素（如{{domxref("HTMLElement.contentEditable","contentEditable")}}内容能编辑或者可以选中的元素），或{{HTMLElement("body")}}。
- Default Action
  - : 见下文。

调用{{domxref("DataTransfer.setData","setData(format, data)")}}可以修改{{domxref("ClipboardEvent.clipboardData")}}事件的默认行为：

```js
document.addEventListener('copy', function(e){
    e.clipboardData.setData('text/plain', 'Hello, world!');
    e.clipboardData.setData('text/html', '<b>Hello, world!</b>');
    e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
});
```

不能使用{{domxref("DataTransfer.getData", "clipboardData.getData()")}}在事件处理函数中获取剪切板数据。

事件的默认行为与事件的来源和事件处理函数相关：

- [synthetic](/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events) copy 事件没有默认行为，除非：
- 如果默认事件没有取消，就复制到选区（如果有选中内容）到剪切板；
- 如果取消了默认事件，但是调用了`setData()`方法：就复制`clipboardData`的内容到到剪切板；
- 如果取消了默认行为，而且没有调用`setData()`方法，就没有任何行为。

## 属性

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLElement.oncopy")}}
- Related events

  - {{event("cut")}}
  - {{event("paste")}}
