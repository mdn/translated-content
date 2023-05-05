---
title: DOMTokenList.remove()
slug: Web/API/DOMTokenList/remove
---

{{APIRef("DOM")}}

**`remove()`** 方法从 {{domxref("DOMTokenList")}} 中移除指定标记。

## 语法

```plain
tokenList.remove(token1[, token2[, ...]]);
```

### 参数列表

- token*N*...
  - : 表示要从列表中移除的一个 {{domxref("DOMString")}}。如果列表中不存在该字符串，不会出错也没有任何变化。

### 返回值

`undefined`

## 示例

在下面的示例中，我们使用 {{domxref("Element.classList")}} 检索 {{htmlelement("span")}} 元素上设置的 class 列表作为 DOMTokenList。然后从列表中删除一个标记，并将该列表写入`<span>`的 {{domxref("Node.textContent")}} 中。

### HTML

```html
<span class="a b c"></span>
```

### JavaScript

```js
var span = document.querySelector("span");
var classes = span.classList;
classes.remove("c");
span.textContent = classes;
```

输出如下：

{{ EmbedLiveSample('示例', '100%', 60) }}

要一次删除多个 class，可以提供多个标记。书写顺序不必与它们在列表中出现的顺序匹配：

```js
let span = document.getElementsByTagName("span")[0],
  classes = span.classList;

classes.remove("c", "b");
span.textContent = classes;
```

## 描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}
