---
title: DOMTokenList：contains() 方法
slug: Web/API/DOMTokenList/contains
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

{{domxref("DOMTokenList")}} 接口的 **`contains()`** 方法会返回布尔值——如果底层列表中包含给定的标记，则返回 `true`，否则返回 `false`。

## 语法

```js-nolint
contains(token)
```

### 参数

- `token`
  - : 表示你想要检查是否存在于列表中的标记的字符串。

### 返回值

布尔值，如果调用的列表中包含 `token`，则为 `true`，否则为 `false`。

## 示例

在下面的示例中，我们通过 {{domxref("Element.classList")}} 获取设置在 {{htmlelement("span")}} 元素上的 `DOMTokenList` 类型的类列表。然后我们检查列表中是否存在 `"c"` ，并将结果写入 `<span>` 的 {{domxref("Node.textContent")}}。

首先是 HTML：

```html
<span class="a b c"></span>
```

然后是 JavaScript：

```js
const span = document.querySelector("span");
span.textContent = span.classList.contains("c")
  ? "classList 中包含“c”"
  : "classList 中不包含“c”";
```

输出结果如下：

{{ EmbedLiveSample('示例', '100%', 60) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
