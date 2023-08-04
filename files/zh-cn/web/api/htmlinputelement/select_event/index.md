---
title: select
slug: Web/API/HTMLInputElement/select_event
---

{{APIRef}}

**`select`** 选择某些文本时会触发事件。

该事件不适用于所有语言的所有元素。例如，在 HTML，`select`事件只能在表单{{HtmlElement('input/text', '&lt;input type="text"&gt;')}}和 {{HtmlElement("textarea")}}元素上触发。

## General info

<table class="properties">
  <thead></thead>
  <tbody>
    <tr>
      <th>Interface</th>
      <td>
        {{domxref("UIEvent")}} if generated from a user interface,
        {{domxref("Event")}} otherwise
      </td>
    </tr>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Target</th>
      <td>{{domxref("Element")}}</td>
    </tr>
    <tr>
      <th>Default Action</th>
      <td>None</td>
    </tr>
  </tbody>
</table>

## 属性

| Property                        | Type                                             | Description                                                                                   |
| ------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | [`EventTarget`](/zh-CN/docs/Web/API/EventTarget) | The event target (the topmost target in the DOM tree).                                        |
| `type` {{readonlyInline}}       | [`DOMString`](/zh-CN/docs/Web/API/DOMString)     | The type of event.                                                                            |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | Whether the event normally bubbles or not.                                                    |
| `cancelable` {{readonlyInline}} | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | Whether the event is cancellable or not.                                                      |
| `view` {{readonlyInline}}       | [`WindowProxy`](/zh-CN/docs/Web/API/WindowProxy) | [`document.defaultView`](/zh-CN/docs/Web/API/Document/defaultView) (`window` of the document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                 | 0.                                                                                            |

## 示例

### HTML

```html
<input value="Try selecting some text in this element." />
<p id="log"></p>
```

### JavaScript

```js
function logSelection(event) {
  const log = document.getElementById("log");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd,
  );
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector("input");
input.addEventListener("select", logSelection);
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 参见

- {{domxref("GlobalEventHandlers.onselect")}}
