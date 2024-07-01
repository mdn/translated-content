---
title: DOMTokenList.item()
slug: Web/API/DOMTokenList/item
---

{{APIRef("DOM")}}

{{domxref("DOMTokenList")}}接口的 **`item()`** 方法返回一个在列表中的索引的项。

## 语法

```plain
tokenList.item(index)
```

### 参数

- `index`
  - : {{domxref("DOMString")}} 类型，一个表示要返回的项的索引。

### 返回值

{{domxref("DOMString")}}类型，一个表示要返回的项。如果数字大于或等于列表的`length`，则返回`null`。

## 示例

在下面的列子中，我们通过{{domxref("Element.classList")}}方法从{{htmlelement("span")}}元素中获取`DOMTokenList`对象。然后使用`item(tokenList.length - 1)`检索列表中的最后的一个项，并将其写入\<span>元素的 {{domxref("Node.textContent")}}。

首先，HTML：

```html
<span class="a b c"></span>
```

然后，JavaScript：

```js
let span = document.querySelector("span");
let classes = span.classList;
let item = classes.item(classes.length - 1);
span.textContent = item;
```

输出结果如下：

{{ EmbedLiveSample('示例', '100%', 60) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
