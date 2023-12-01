---
title: DOMTokenList.replace()
slug: Web/API/DOMTokenList/replace
---

{{APIRef("DOM")}}

{{domxref("DOMTokenList")}}接口的 **`replace()`** 方法可以将列表中一个已存在的 token 替换为一个新 token。如果第一个参数 token 在列表中不存在， `replace()` 立刻返回`false` ，而不会将新 token 字符串添加到列表中。

## 语法

```
tokenList.replace(oldToken, newToken);
```

### 参数

- `oldToken`
  - : {{domxref("DOMString")}}类型，想要替换掉的字符串。
- `newToken`
  - : {{domxref("DOMString")}}类型，表示要将`oldToken`字符串替换成的字符串。

### 返回值

boolean 类型，如果`oldToken`被成功替换，返回 `true` ，否则返回`false`

> **备注：** In older browsers, `replace()` returns void.

## Examples

在下面的例子中，我们使用{{domxref("Element.classList")}}方法，将设置在{{htmlelement("span")}} 元素上的 class 列表检索为`DOMTokenList` 类型。接着我们替换一个字符串，并且将新列表写入到 `<span>` 的内容{{domxref("Node.textContent")}}中。

首先，HTML 代码如下：

```html
<span class="a b c"></span>
```

然后是 JavaScript:

```js
let span = document.querySelector("span");
let classes = span.classList;

let result = classes.replace("c", "z");
console.log(result);

if (result) {
  span.textContent = classes;
} else {
  span.textContent = "token not replaced successfully";
}
```

输出如下：

{{ EmbedLiveSample('Examples', '100%', 60) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
