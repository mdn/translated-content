---
title: input
slug: Web/API/HTMLElement/input_event
---

{{APIRef}}

当一个 {{HTMLElement("input")}}, {{HTMLElement("select")}}, 或 {{HTMLElement("textarea")}} 元素的 `value` 被修改时，会触发 **`input`** 事件。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{DOMxRef("InputEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("GlobalEventHandlers.oninput")}}</td>
    </tr>
  </tbody>
</table>

**`input`** 事件也适用于启用了 {{domxref("HTMLElement.contentEditable", "contenteditable")}} 的元素，以及开启了 {{domxref("Document.designMode", "designMode")}} 的任意元素。在`contenteditable` 和 `designMode` 的情况下，事件的 target 为当前正在编辑的宿主。如果这些属性应用于多个元素上，当前正在编辑的宿主为最近的父节点不可编辑的祖先元素。

对于 `type=checkbox` 或 `type=radio` 的 `input` 元素，每当用户切换控件（通过触摸、鼠标或键盘）时（[HTML5 规范](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2)），`input` 事件都应该触发。然而，历史事实并非如此。请检查兼容性，或使用 [`change`](/zh-CN/docs/Web/API/HTMLElement/change_event) 事件代替这些类型的元素。

> **备注：** 每当元素的 `value` 改变，`input` 事件都会被触发。这与 {{domxref("HTMLInputElement.change_event", "change")}} 事件不同。change 事件仅当 value 被提交时触发，如按回车键，从一个 options 列表中选择一个值等。

## 示例

每当用户修改 {{HtmlElement("input")}} 元素的 value 时，这个示例会记录 value。

### HTML

```html
<input placeholder="Enter some text" name="name" />
<p id="values"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.srcElement.value;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 属性

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

\[1] 在 Gecko 12.0 之前，用户在输入法中输入时，或者 dead keys were used on Mac OS X 时，Gecko 不触发 input 事件。

\[2] IE 9 在用户删除输入的文字时不触发 input 事件 (例如，按 Backspace 或者删除键，或者“剪切”文字).

\[3] Opera 在用户把文字拖进输入框时，不触发 input 事件。

\[4] 事件 target 是光标所在的最内侧的元素。

## 参见

- [`keydown`](/zh-CN/docs/Web/API/Element/keydown_event)
- [`keyup`](/zh-CN/docs/Web/API/Element/keyup_event)
- [`keypress`](/zh-CN/docs/Web/API/Element/keypress_event)
- [`input`](/zh-CN/docs/Web/API/HTMLElement/input_event)
- {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}
- {{domxref("HTMLElement/change_event", "change")}}
- {{domxref("HTMLInputElement/invalid_event", "invalid")}}

此外，还有一个类似的 [`change`](/zh-CN/docs/Web/Reference/Events/change) 事件。change 触发的频率低于 `input` - 它只会在用户提交更改时触发。
