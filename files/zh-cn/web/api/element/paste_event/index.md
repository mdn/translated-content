---
title: Element：paste 事件
slug: Web/API/Element/paste_event
---

{{APIRef}}

当用户通过浏览器的用户界面发起“粘贴”动作时，将触发 **`paste`** 事件。

如果光标处于可编辑的上下文中（例如，在 {{HTMLElement("textarea")}} 或 [`contenteditable`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性设置为 `true` 的元素中），那么默认动作是将剪贴板的内容插入光标位置的文档中。

事件处理器可以通过调用事件 `clipboardData` 属性的 {{domxref("DataTransfer/getData", "getData()")}} 方法来访问剪贴板内容。

要覆盖默认行为（例如插入一些不同的数据或转换剪贴板内容），事件处理程序必须使用 {{domxref("Event/preventDefault", "event.preventDefault()")}} 取消默认动作，然后手动插入其想要的数据。

可以构建和派发一个[合成](/zh-CN/docs/Web/API/Document_Object_Model/Events) `paste` 事件，但这不会影响系统剪贴板或文档内容。

## 语法

在类似于 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名，或设置事件处理器属性。

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
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
const target = document.querySelector("div.target");

target.addEventListener("paste", (event) => {
  event.preventDefault();

  let paste = (event.clipboardData || window.clipboardData).getData("text");
  paste = paste.toUpperCase();
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(paste));
  selection.collapseToEnd();
});
```

#### 结果

{{ EmbedLiveSample('实时示例', '100%', '120px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element/cut_event", "cut")}} 事件
- {{domxref("Element/copy_event", "copy")}} 事件
