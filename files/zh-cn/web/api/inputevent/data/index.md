---
title: InputEvent：data 属性
slug: Web/API/InputEvent/data
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{APIRef("UI Events")}}

{{domxref("InputEvent")}} 接口中的只读属性 **`data`** 返回插入字符的字符串。如果更改未插入文本（例如删除字符时），则其可能为空字符串。

## 值

一个字符串。

## 示例

在下面的简单示例中，我们在 [input](/zh-CN/docs/Web/API/Element/input_event) 事件上设置了一个事件监听器，任何对 {{htmlelement("input")}} 元素的文本更改都会被 `InputEvent.data` 获取，使用 [`Node.textContent`](/zh-CN/docs/Web/API/Node/textContent) 属性将其插入到段落中。

```html
<p>Some text to copy and paste.</p>

<input type="text" />

<p class="result"></p>
```

```js
const editable = document.querySelector("input");
const result = document.querySelector(".result");

editable.addEventListener("input", (e) => {
  result.textContent = `输入的文字：${e.data}`;
});
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
