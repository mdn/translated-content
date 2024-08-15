---
title: HTMLTitleElement：text 属性
slug: Web/API/HTMLTitleElement/text
l10n:
  sourceCommit: 7cc15fff0f1284ece460597b9717ca20350a1fa9
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLTitleElement")}} 接口的 **`text`** 属性表示文档标题的文本，仅包含文本部分；元素内的标签和其内容被剥离并忽略。

## 值

一个字符串。

## 示例

考虑一下示例：

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>
      你好世界！<span class="highlight">这难道不精彩吗</span>真的吗？
    </title>
  </head>
  <body></body>
</html>
```

```js
const title = document.querySelector("title");
console.log(title.text); // 产生：“你好世界！真的吗？”
```

如你所见，标签 `span` 和其内容被跳过。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
