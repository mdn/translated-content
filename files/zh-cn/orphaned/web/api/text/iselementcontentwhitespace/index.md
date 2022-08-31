---
title: Text.isElementContentWhitespace
slug: orphaned/Web/API/Text/isElementContentWhitespace
original_slug: Web/API/Text/isElementContentWhitespace
---
{{ ApiRef() }}

返回一个布尔值,表明该文本节点的内容是否全部是由空白符组成的.

> **警告：** 该属性已经在 DOM level 4 中被废弃, 在一些新版本的浏览器(Gecko 10.0 )中已经被删除.

### 语法

```js
b = textnode.isElementContentWhitespace;
```

### 例子

下例中 ,我们创建了一个内容为空白符和文字组成的文本节点.该节点的 isElementContentWhitespace 属性为 false.

```js
var tn = document.createTextNode("Hello world");
tn.isElementContentWhitespace; /* 返回false */
```

下例中 ,我们创建了一个内容全部为空白符的文本节点.该节点的 isElementContentWhitespace 属性为 true.

```js
var ws = document.createTextNode("  \t \r\n   ")
ws.isElementContentWhitespace; /* 返回true */
```

### 规范

[DOM Level 3 Core: Text.isElementContentWhitespace](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Text3-isElementContentWhitespace)

### 相关链接

- [`Text`](/zh-CN/DOM/Text)
