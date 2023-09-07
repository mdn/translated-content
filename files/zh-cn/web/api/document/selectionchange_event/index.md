---
title: Document：selectionchange 事件
slug: Web/API/Document/selectionchange_event
---

[Selection API](/zh-CN/docs/Web/API/Selection) 的 **`selectionchange`** 事件在当前 {{domxref("Document")}} 的 {{domxref("Selection")}} 改变时触发。

此事件不可取消，也不会冒泡。

可以通过为 `selectionchange` 添加事件监听器或使用 `onselectionchange` 事件处理器来处理该事件。

> **备注：** 此事件与 {{HTMLElement("input")}} 或 {{HTMLElement("textarea")}} 元素中的文本选择更改时触发的 `selectionchange` 事件不太相同。有关详细信息，请参阅 {{domxref("HTMLInputElement.selectionchange_event")}}。

## 语法

在 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("selectionchange", (event) => {});

onselectionchange = (event) => {};
```

## 事件类型

通用[事件](/zh-CN/docs/Web/API/Event)。

## 示例

```js
// addEventListener 版本
document.addEventListener("selectionchange", () => {
  console.log(document.getSelection());
});

// onselectionchange 版本
document.onselectionchange = () => {
  console.log(document.getSelection());
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node/selectstart_event", "selectstart")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("Selection", "Selection")}}
