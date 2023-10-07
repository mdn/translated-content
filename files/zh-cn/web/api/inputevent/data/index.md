---
title: InputEvent.data
slug: Web/API/InputEvent/data
---

{{SeeCompatTable}}{{APIRef("DOM Events")}}

> **备注：** 请注意，**`data`** 属性在使用键盘输入时会返回输入的字符内容，但在粘贴、拖动时可能会返回 `null`，这取决于浏览器。浏览器也可能把一些数据保存在 {{domxref("InputEvent.dataTransfer")}}，而不是该 **`data`** 属性中。

{{domxref("InputEvent")}} 接口中的只读属性 **`data`** 返回含有插入字符数据的 {{domxref("DOMString")}}。如果更改未插入文本（例如删除字符时），则其可能为空字符串。

## 语法

```
var string = inputEvent.data;
```

### 返回值

一个 {{domxref("DOMString")}}。

## 示例

在下面的简单示例中，我们在 [input](/zh-CN/docs/Web/API/HTMLElement/input_event) 事件上设置了一个事件监听器，以便在对 {{htmlelement("input")}} 元素的内容进行任何更改时（通过键入或粘贴），通过 **`InputEvent.data`** 属性检索添加的文本，并在 `<input>` 下面的段落中报告。

```html
<p>Some text to copy and paste.</p>

<input type="text" />

<p class="result"></p>
```

```js
var editable = document.querySelector("input");
var result = document.querySelector(".result");

editable.addEventListener("input", (e) => {
  result.textContent = "Inputted text: " + e.data;
});
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
