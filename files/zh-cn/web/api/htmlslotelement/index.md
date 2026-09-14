---
title: HTMLSlotElement
slug: Web/API/HTMLSlotElement
l10n:
  sourceCommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{APIRef('Web Components')}}

[影子 DOM API](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM) 的 **`HTMLSlotElement`** 接口用于访问 HTML {{HTMLElement("slot")}} 元素的名称和分配的节点。

{{InheritanceDiagram}}

## 实例属性

_还继承了其父接口 {{domxref("HTMLElement")}} 的属性。_

- {{domxref('HTMLSlotElement.name')}}
  - : 用于获取和设置插槽的名称的字符串。

## 实例方法

_还继承了其父接口 {{domxref("HTMLElement")}} 的方法。_

- {{domxref('HTMLSlotElement.assign()')}}
  - : 将此插槽的手动分配节点设置为给定的节点。
- {{domxref('HTMLSlotElement.assignedNodes()')}}
  - : 返回分配给该插槽的节点序列。如果 `flatten` 选项设置为 `true`，则返回分配给该插槽的节点序列，以及分配给该插槽的任何后代插槽的节点序列。如果未找到已分配的节点，则返回插槽的回退内容。
- {{domxref('HTMLSlotElement.assignedElements()')}}
  - : 返回分配给该插槽的元素序列（且不包括其他节点）。如果 `flatten` 选项设置为 `true`，则返回分配给该插槽的元素序列，以及分配给该插槽所有后代插槽的元素序列。如果未找到分配的元素，则返回插槽的回退内容。

## 事件

_还继承了其父接口 {{domxref("HTMLElement")}} 的事件。_

使用 {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} 或通过将事件监听器赋值给该接口的 `oneventname` 属性来监听这些事件。

- {{domxref('HTMLSlotElement.slotchange_event', 'slotchange')}}
  - : 当插槽中包含的节点发生变化时，在 `HTMLSlotElement` 实例（[`<slot>`](/zh-CN/docs/Web/HTML/Reference/Elements/slot) 元素）上触发此事件。

## 示例

以下代码片段来自我们的 [slotchange 示例](https://github.com/mdn/web-components-examples/tree/main/slotchange)（[也可以在线查看](https://mdn.github.io/web-components-examples/slotchange/)）。

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `插槽“${slots[1].name}”中的元素已更改为“${nodes[0].outerHTML}”。`,
  );
});
```

在这里，我们获取所有插槽的引用，然后为模板中的第二个插槽添加一个 slotchange 事件监听器——这个插槽在示例中不断更改其内容。

每次插入到插槽中的元素发生变化时，我们会在控制台记录一条报告，指出哪个插槽发生了变化，以及插槽内的新节点是什么。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
