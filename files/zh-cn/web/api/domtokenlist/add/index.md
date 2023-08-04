---
title: DOMTokenList.add()
slug: Web/API/DOMTokenList/add
---

{{APIRef("DOM")}}

{{domxref("DOMTokenList")}} 接口的 **`add()`** 方法将给定的标记添加到列表中。

## 语法

```plain
tokenList.add(token1[, token2[, ...tokenN]]);
```

### 参数

- token*N*
  - : 一个 {{domxref("DOMString")}}，表示你要添加到列表里的标记。

### 返回值

`undefined`

## 示例

在下面的例子中，我们使用 {{domxref("Element.classList")}} 将 {{htmlelement("span")}} 元素上设置的类列表检索为 `DOMTokenList`。然后，我们将新标记添加到列表中，并将列表写入 `<span>` 元素的{{domxref("Node.textContent")}}。

HTML:

```html
<span class="a b c"></span>
```

JavaScript:

```js
var span = document.querySelector("span");
var classes = span.classList;
classes.add("d");
span.textContent = classes;
```

结果如下：

{{ EmbedLiveSample('示例', '100%', 60) }}

你也可以添加多个标记：

```js
span.classList.add("d", "e", "f");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
