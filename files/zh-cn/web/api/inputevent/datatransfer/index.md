---
title: InputEvent.dataTransfer
slug: Web/API/InputEvent/dataTransfer
---

{{SeeCompatTable}}{{APIRef("DOM Events")}}

{{domxref("InputEvent")}} 接口中的只读属性 **`dataTransfer`** 返回一个 {{domxref("DataTransfer")}} 对象，该对象包含有关要添加到可编辑内容，或从可编辑内容中删除的富文本或纯文本数据的信息。

## 语法

```plain
var dataTransfer = inputEvent.dataTransfer
```

### 返回值

一个 {{domxref("DataTransfer")}} 对象。

## 示例

在下面的简单示例中，我们在 [input](/zh-CN/docs/Web/API/HTMLElement/input_event) 事件上设置了一个事件监听器，以便在将任何内容粘贴到 {{htmlelement("p")}} 元素时，通过 [`InputEvent.dataTransfer.getData()`](/zh-CN/docs/Web/API/DataTransfer/getData) 方法检索其 HTML 源代码，并在输入框下面的段落中报告。

尝试复制并粘贴提供的部分内容以查看效果。注意，部分浏览器对其支持不佳。

```html
<p><span style="font-weight: bold; color: blue">Whoa, bold blue text!</span></p>
<p>
  <span style="font-weight: italic; color: red"
    >Exciting: italic red text!</span
  >
</p>
<p>Boring normal text ;-(</p>

<hr />

<p contenteditable="true">
  Go on, try pasting some content into this editable paragraph and see what
  happens!
</p>

<p class="result"></p>
```

```js
var editable = document.querySelector("p[contenteditable]");
var result = document.querySelector(".result");
var dataTransferObj;

editable.addEventListener("input", (e) => {
  result.textContent = e.dataTransfer.getData("text/html");
});
```

{{EmbedLiveSample('示例', '100%', 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
