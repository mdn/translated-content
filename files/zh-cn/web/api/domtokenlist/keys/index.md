---
title: DOMTokenList.keys()
slug: Web/API/DOMTokenList/keys
---

{{APIRef("DOM")}}

{{domxref("DOMTokenList")}} **的** **`keys()`** 方法返回一个{{jsxref("Iteration_protocols",'iterator')}}, 可以用来遍历这个对象中的所有的键，键的类型是`无符号整型`。

## 语法

```plain
tokenList.keys();
```

### 参数

无。

### 返回值

返回一个 {{jsxref("Iteration_protocols","iterator")}}.

## 示例

在下面的例子中，我们获取了一个使用 {{domxref("Element.classList")}}属性获取了一个 `DOMTokenList` ，在这里它表示了这个 {{htmlelement("span")}} 元素的所有 class 属性值的键（索引）。然后我们使用了它的 `keys()`方法获取了一个 iterator，最后再使用 [for ... of](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环来对所有键（这里是索引）进行遍历，将遍历的每一个结果都写到这个 `<span>` 标签内（使用{{domxref("Node.textContent")}}属性）显示。

首先，例子使用的 HTML 代码为：

```html
<span class="a b c"></span>
```

这是 JavaScript 代码：

```js
var span = document.querySelector("span");
var classes = span.classList;
var iterator = classes.keys();

for (var value of iterator) {
  span.textContent += value + " ++ ";
}
```

输出为：

{{ EmbedLiveSample('示例', '100%', 60) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
