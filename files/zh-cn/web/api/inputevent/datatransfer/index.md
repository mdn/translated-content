---
title: InputEvent：dataTransfer 属性
slug: Web/API/InputEvent/dataTransfer
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{APIRef("UI Events")}}

{{domxref("InputEvent")}} 接口中的只读属性 **`dataTransfer`** 返回一个 {{domxref("DataTransfer")}} 对象，该对象包含有关要添加到可编辑内容，或从可编辑内容中删除的富文本或纯文本数据的信息。

## 值

一个 {{domxref("DataTransfer")}} 对象。

## 示例

在下面的简单示例中，我们在 [input](/zh-CN/docs/Web/API/Element/input_event) 事件上设置了一个事件监听器，以便在将任何内容粘贴到可编辑的 {{htmlelement("p")}} 元素时，通过 [`InputEvent.dataTransfer.getData()`](/zh-CN/docs/Web/API/DataTransfer/getData) 方法获取其 HTML 源代码，并将其报告在输入框下面的段落中。

尝试复制并粘贴提供的部分内容以查看效果。

```html
<p><span style="font-weight: bold; color: blue">哇，粗体的蓝色文本！</span></p>
<p>
  <span style="font-weight: italic; color: red">令人兴奋的斜体红色文本！</span>
</p>
<p>令人厌倦的普通文本</p>

<hr />

<p contenteditable="true">
  继续，尝试将一些内容粘贴到这个可编辑的段落中，看看会发生什么！
</p>

<p class="result"></p>
```

```js
const editable = document.querySelector("p[contenteditable]");
const result = document.querySelector(".result");

editable.addEventListener("input", (e) => {
  result.textContent = e.dataTransfer.getData("text/html");
});
```

{{EmbedLiveSample('示例', '100%', 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
