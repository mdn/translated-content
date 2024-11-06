---
title: DOMTokenList.contains()
slug: Web/API/DOMTokenList/contains
---

{{APIRef("DOM")}}

{{domxref("DOMTokenList")}}接口的 **`contains()`** 方法返回 {{domxref("Boolean")}} 类型。若传入的参数 `token` 包含在列表中时则返回`true`，否则返回 `false`。

## 语法

```plain
tokenList.contains(token);
```

### 参数

- `token`
  - : {{domxref("DOMString")}}类型，用于判断是否存在于列表中的标记。

### 返回值

{{domxref("Boolean")}}类型，当`token`包含在列表中时返回`true`，否则返回`false`。

## 示例

在下面的列子中，我们通过{{domxref("Element.classList")}}方法从 {{htmlelement("span")}} 元素中获取`DOMTokenList` 对象。然后测试验证`"c"` 是否包含在列表中，结果输出到 `<span>`标签的内容 {{domxref("Node.textContent")}}。

HTML:

```html
<span class="a b c"></span>
```

JavaScript:

```js
let span = document.querySelector("span");
let classes = span.classList;
let result = classes.contains("c");
if (result) {
  span.textContent = "The classList contains 'c'";
} else {
  span.textContent = "The classList does not contain 'c'";
}
```

结果如下：

{{ EmbedLiveSample('示例', '100%', 60) }}

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}
