---
title: DOMTokenList：value 属性
slug: Web/API/DOMTokenList/value
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

{{domxref("DOMTokenList")}} 接口的 **`value`** 属性是一个{{Glossary("stringifier", "字符串化器")}}，将标记（token）列表的值序列化为字符串返回，或是清除并指定列表的值。

## 值

一个表示序列化后的列表内容的字符串。每一项用一个空格分隔。

## 示例

在以下示例中，我们将使用 {{domxref("Element.classList")}} 去获取 {{htmlelement("span")}} 元素的类（class）列表值（即 `DOMTokenList`），然后将该值写入 `<span>` 的 {{domxref("Node.textContent")}}。

首先，HTML 代码如下：

```html
<span class="a b c"></span>
```

JavaScript 代码如下：

```js
const span = document.querySelector("span");
const classes = span.classList;
span.textContent = classes.value;
```

输出看起来像这样：

{{ EmbedLiveSample('示例', '100%', 60) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
