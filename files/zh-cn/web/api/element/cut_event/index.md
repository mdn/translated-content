---
title: Element：cut 事件
short-title: cut
slug: Web/API/Element/cut_event
---

{{APIRef}}

当用户通过浏览器的用户界面发起“剪切”动作时，将触发 **`cut`** 事件。

如果用户尝试对不可编辑内容执行剪切操作，则 `cut` 事件仍会触发，但事件对象不包含任何数据。

该事件的默认行为是将当前选中的内容（如有）复制到系统剪贴板，并从当前文档中移除。

事件处理器可以通过调用 {{domxref("ClipboardEvent.clipboardData")}} 属性上的 {{domxref("DataTransfer.setData", "setData(format, data)")}} *修改*剪贴板内容，并通过 {{domxref("Event/preventDefault", "event.preventDefault()")}} 取消默认行为。

但是请注意，取消默认动作也会阻止文档被更新。所以一个事件处理器想要在修改剪贴板时模仿默认动作“剪切”，也必须手动从文档中删除选择。

事件处理器不可以*读取*剪贴板数据。

可以构建和派发一个[合成](/zh-CN/docs/Web/Events/Creating_and_triggering_events) `cut` 事件，但这不会影响系统剪贴板或文档内容。

## 语法

在类似于 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名，或设置事件处理器属性。

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## 事件类型

{{domxref("ClipboardEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("ClipboardEvent")}}

## 示例

### 实时示例

#### HTML

```html
<div class="source" contenteditable="true">从这个盒子剪切文字</div>
<div class="target" contenteditable="true">在这里粘贴</div>
```

```css hidden
div.source,
div.target {
  border: 1px solid gray;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 1rem;
  background-color: #e9eef1;
}
```

#### JavaScript

```js
const source = document.querySelector("div.source");

source.addEventListener("cut", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  selection.deleteFromDocument();
  event.preventDefault();
});
```

#### 结果

{{ EmbedLiveSample('实时示例', '100%', '120px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关联事件：{{domxref("Element/copy_event", "copy")}}、{{domxref("Element/paste_event", "paste")}}
- {{domxref("Document")}} 目标上的这个事件：{{domxref("Document/cut_event", "cut")}}
- {{domxref("Window")}} 目标上的这个事件：{{domxref("Window/cut_event", "cut")}}
