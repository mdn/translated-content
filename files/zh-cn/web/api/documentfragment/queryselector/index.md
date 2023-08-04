---
title: DocumentFragment.querySelector()
slug: Web/API/DocumentFragment/querySelector
---

{{ApiRef("DOM")}}

**`DocumentFragment.querySelector()`** 方法返回第一个在 {{domxref("DocumentFragment")}} 中的、符合选择器的元素。其使用深度优先，前序遍历规则遍历文档中的节点。如果没有匹配结果，返回 `null` 。

如果选择器中指定了 ID 而这个 ID 在当前文档（document）被错误地使用了多次，则返回第一个匹配的元素。

如果选择器无效，将抛出一个带有 `SYNTAX_ERR` 值的 {{domxref("DOMException")}} 异常。

## 语法

```plain
element = documentfragment.querySelector(selectors);
```

### 参数

- _selectors_
  - : 为一个 {{domxref("DOMString")}}，其包含一个或多个 CSS 选择器，多个选择器用逗号隔开。

## 例子

### 基本示例

在该示例中，将返回第一个位于 {{domxref("DocumentFragment")}} 的带有 "`myclass`" 类的元素。

```js
var el = documentfragment.querySelector(".myclass");
```

### CSS 语法和方法的参数问题

传递给 `querySelector` 的字符串参数遵循 CSS 语法。如果 ID 或选择器不符合 CSS 语法 (比如使用了半角分号和空格)，必须使用双反斜杠对字符做转义。

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  document.querySelector("#foo\bar"); // 啥也不匹配
  document.querySelector("#foo\\\\bar"); // 第一个 DIV
  document.querySelector("#foo:bar"); // 啥也不匹配
  document.querySelector("#foo\\:bar"); // 第二个 DIV
</script>
```

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("DocumentFragment")}} 接口
