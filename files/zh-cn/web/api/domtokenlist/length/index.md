---
title: DOMTokenList.length
slug: Web/API/DOMTokenList/length
---

{{APIRef("DOM")}}

**`length`**是 **`DOMTokenList`** 接口的一个只读属性，以整数来表示，代表着当前对象中值的个数。

## 语法

```plain
tokenList.length;
```

### 数值

一个整数。

## 示例

在示范例子里我们编写了一个 span 元素，使用{{domxref("Element.classList")}}去检索元素{{htmlelement("span")}}拥有的类，放回一个实时的`DOMTokenList`集合，然后把该集合中的数值个数写进 `<span>`的 {{domxref("Node.textContent")}} 属性中。

HTML 代码：

```html
<span class="a b c"></span>
```

JavaScript 代码：

```js
var span = document.querySelector("span");
var classes = span.classList;
var length = classes.length;

span.textContent = "classList length = " + length;
```

运行得出的结果如下：

{{ EmbedLiveSample('示例', '100%', 60) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
