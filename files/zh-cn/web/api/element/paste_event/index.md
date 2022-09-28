---
title: 'Element: paste 事件'
slug: Web/API/Element/paste_event
---

{{APIRef}}

当用户在浏览器用户界面发起“粘贴”操作时，会触发 **`paste`** 事件。

```
冒泡                 是

可取消               是

接口                 {{domxref("ClipboardEvent")}}

事件处理属性          {{domxref("HTMLElement/onpaste", "onpaste")}}
```

如果光标位于可编辑的上下文中（例如，在 {{HTMLElement("textarea")}} 或者 [`contenteditable`](/zh-CN/docs/Web/HTML/Global_attributes/contenteditable) 属性设置为 `true 的元素`），则默认操作是将剪贴板的内容插入光标所在位置的文档中。

事件处理程序可以通过调用事件的 `clipboardData` 属性上的 {{domxref("DataTransfer/getData", "getData()")}}访问剪贴板内容。

要覆盖默认行为（例如，插入一些不同的数据或转换剪贴板的内容），事件处理程序必须使用 {{domxref("Event/preventDefault", "event.preventDefault()")}}，取消默认操作，然后手动插入想要的数据。

可以构造和分派[合成的](/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events)`paste`事件，但这不会影响文档内容。

## 举例

### Live example

#### HTML

```html
<div class="source" contenteditable="true">Try copying text from this box...</div>
<div class="target" contenteditable="true">...and pasting it into this one</div>
```

#### CSS

```css
div.source, div.target {
    border: 1px solid gray;
    margin: .5rem;
    padding: .5rem;
    height: 1rem;
    background-color: #e9eef1;
}
```

#### JS

```js
const target = document.querySelector('div.target');

target.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    paste = paste.toUpperCase();

    const selection = window.getSelection();
    if (!selection.rangeCount) return false;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(paste));

    event.preventDefault();
});
```

#### Result

{{EmbedLiveSample('Live_example', '100%', '100px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- Related events: {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/paste_event", "paste")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/paste_event", "paste")}}
