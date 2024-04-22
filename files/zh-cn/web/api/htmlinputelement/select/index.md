---
title: HTMLInputElement.select()
slug: Web/API/HTMLInputElement/select
---

{{ APIRef("HTML DOM") }}

**`HTMLInputElement.select()`** 方法选中一个 {{HTMLElement("textarea")}} 元素或者一个带有 text 字段的 {{HTMLElement("input")}} 元素里的所有内容。

## 语法

```plain
element.select()
```

## 示例

点击这个例子的按钮以选中所有在`<input>`元素中的文字

HTML

```html
<input type="text" id="text-box" size="20" value="Hello world!" />
<button onclick="selectText()">Select text</button>
```

JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.select();
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 注意

调用 `element.select()` 并不一定会使得该 input 元素被 focused，所以它经常和 {{domxref("HTMLElement.focus()")}} 一起使用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{ HTMLElement("input") }}
- {{ HTMLElement("textarea") }}
- {{ domxref("HTMLInputElement") }}
- {{ domxref("HTMLInputElement.setSelectionRange") }}
