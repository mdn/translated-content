---
title: DOMTokenList.toggle()
slug: Web/API/DOMTokenList/toggle
---

{{APIRef("DOM")}}

{{domxref("DOMTokenList")}} 接口的 **`toggle()`** 方法从列表中删除一个给定的标记并返回 `false`。如果标记不存在，则添加并且函数返回 `true`。

## 语法

```js
toggle(token);
toggle(token, force);
```

### 参数

- `token`
  - : 一个字符串，表示你想要 toggle 的标记。
- `force` {{optional_inline}}
  - : 如果包含该值，设置后会将方法变成单向操作。如果设置为 `false`，*仅*会删除标记列表中匹配的给定标记，且不会再度添加。如果设置为 `true`，*仅*在标记列表中添加给定标记，且不会再度删除。

### 返回值

一个布尔值，`true` 或者 `false`，表示在调用 toggle 后，标记是否存在于列表中。

## 示例

### 在点击后 toggle class

以下示例我们使用 {{domxref("Element.classList")}} 检索 {{htmlelement("span")}} 元素的 class 集合列表（其返回值为 `DOMTokenList`）。然后我们替换集合中的一个标记，并将集合写入 `<span>` 的 {{domxref("Node.textContent")}}

这是 HTML：

```html
<span class="a b">classList is 'a b'</span>
```

现在是 JavaScript：

```js
const span = document.querySelector("span");
const classes = span.classList;

span.addEventListener("click", () => {
  const result = classes.toggle("c");

  if (result) {
    span.textContent = `'c' added; classList is now "${classes}".`;
  } else {
    span.textContent = `'c' removed; classList is now "${classes}".`;
  }
});
```

输出如下所示，并且每次点击文本时都会发生变化：

{{ EmbedLiveSample('在点击后 toggle class', '100%', 60) }}

### 设置 force 参数

第二个参数可以用于决定是否包含 class 属性。这个例子仅在浏览器窗口宽度超过 1000 像素时才会包含‘c’属性。

```js
span.classList.toggle("c", window.innerWidth > 1000);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
