---
title: Document 下的 selectionchange 事件
slug: Web/API/Document/selectionchange_event
---

当前 {{domxref("Document")}} 上的 {{domxref("Selection")}} 改变时触发 [Selection API](/zh-CN/docs/Web/API/Selection) 的 **`selectionchange`** 事件。

此事件不可取消，也不会冒泡。

可以通过为 `selectionchange` 添加事件侦听器或使用 `onselectionchange` 事件处理程序来处理该事件。

> **注意:** 此事件与 {{HTMLElement("input")}} 或 {{HTMLElement("textarea")}} 元素中的文本选择更改时触发的 `selectionchange` 事件不太相同。有关详细信息，请参阅 {{domxref("HTMLInputElement.selectionchange_event")}}。

## 语法

在 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 等方法中使用事件名称，或设置事件处理程序属性。

```js
addEventListener('selectionchange', (event) => {});

onselectionchange = (event) => { };
```

## 事件类型

通用[事件](/zh-CN/docs/Web/API/Event)。

## 例子

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

## 参考

- {{domxref("Node/selectstart_event", "selectstart")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("Selection", "Selection")}}
