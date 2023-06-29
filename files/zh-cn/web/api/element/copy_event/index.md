---
title: Element：copy 事件
short-title: copy
slug: Web/API/Element/copy_event
---

{{APIRef}}

当用户通过浏览器的用户界面发起复制动作时，将触发 **`copy`** 事件。

该事件的默认行为是将当前选中的内容（如有）复制到系统剪贴板。

事件处理器可以通过调用 {{domxref("ClipboardEvent.clipboardData")}} 属性上的 {{domxref("DataTransfer.setData", "setData(format, data)")}} *修改*剪贴板内容，并通过 {{domxref("Event/preventDefault", "event.preventDefault()")}} 取消默认行为。

然而，事件处理器不可以*读取*剪贴板数据。

可以构建和派发一个[合成](/zh-CN/docs/Web/Events/Creating_and_triggering_events) `copy` 事件，但这不会影响系统剪贴板。

## 语法

在类似于 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名，或设置事件处理器属性。

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## 事件类型

{{domxref("ClipboardEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("ClipboardEvent")}}

## 示例

### 实时示例

#### HTML

```html
<div class="source" contenteditable="true">从这个盒子复制文字</div>
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

source.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
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

- 相关联事件：{{domxref("Element/cut_event", "cut")}}、{{domxref("Element/paste_event", "paste")}}
- {{domxref("Document")}} 目标上的这个事件：{{domxref("Document/copy_event", "copy")}}
- {{domxref("Window")}} 目标上的这个事件：{{domxref("Window/copy_event", "copy")}}
