---
title: DOMTokenList：add() 方法
short-title: add()
slug: Web/API/DOMTokenList/add
l10n:
  sourceCommit: bd4e8bce64f6e5d3d07ddf8c1cbb5aaffe060d0c
---

{{APIRef("DOM")}}

{{domxref("DOMTokenList")}} 接口的 **`add()`** 方法用于将指定的标记添加到列表中，已存在的标记会被自动忽略。

## 语法

```js-nolint
add(token1)
add(token1, token2)
add(token1, token2, /* …, */ tokenN)
```

### 参数

- `tokenN`
  - : 表示要添加到 `DOMTokenList` 中的一个或多个标记的字符串。

### 返回值

无。

### 异常

- `SyntaxError` {{domxref("DOMException")}}
  - : 当任意参数为空字符串时抛出。
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 当标记中包含 ASCII 空白字符时抛出。

## 示例

在以下示例中，我们使用 {{domxref("Element.classList")}} 获取设置在 {{htmlelement("span")}} 元素上的类列表（即一个 `DOMTokenList`）。随后，我们向该列表中添加一个新的标记，并将更新后的列表写入 `<span>` 元素的 {{domxref("Node.textContent")}} 中。

首先是 HTML：

```html
<span class="a b c"></span>
```

接着是 JavaScript：

```js
const span = document.querySelector("span");
const classes = span.classList;
classes.add("d");
span.textContent = classes;
```

输出结果如下所示：

{{ EmbedLiveSample('示例', '100%', 60) }}

你也可以一次性添加多个标记：

```js
span.classList.add("d", "e", "f");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
