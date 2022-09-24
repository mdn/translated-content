---
title: <string>
slug: Web/CSS/string
---

{{CSSRef}}在 CSS 中，**`<string>`** 是用来表示一串字符的数据类型，它被用在众多 CSS 属性中，例如{{cssxref("content")}}、{{cssxref("font-family")}}、和{{cssxref("quotes")}}。

## 使用规则

**`<string>`** 数据类型是由包含在英文双引号（**`"`**）或英文单引号（**'**）中的任意数量的 Unicode 字符组成。

大多数字符都可以写成字面量的形式，并且所有字符都可以写成以反斜线（**`\`**）开头的十六进制 Unicode 码点的形式。比如说：**`\22`**表示一个双引号，**`\27`**表示一个单引号，**`\A9`**表示版权声明符号（**`©`**）。

需要注意的是，在使用某些特殊字符时需要在前面加上反斜线来转义，包括但不限于在双引号字符串中使用双引号字符，在单引号字符串中使用单引号字符，以及反斜线字符，比如 **`\\`** 表示一个反斜线字符。

当你想换行的时候，必须使用像 **`\A`** 或者 **`\00000A`** 这样的换行符。不过在你的代码中，可以通过在每行末尾增加一个反斜线（**`\`**）的方式来创建一个多行的字符串。

> **备注：** CSS **`<string>`** 中不能使用像 **`&nbsp;`** 或者 **`&#8212;`** 这样的实体。

## 例子

```
/* Simple strings */
"This string is demarkated by double quotes."
'This string is demarkated by single quotes.'

/* Character escaping */
"This is a string with \" an escaped double quote."
"This string also has \22 an escaped double quote."
'This is a string with \' an escaped single quote.'
'This string also has \27 an escaped single quote.'
"This is a string with \\ an escaped backslash."

/* New line in a string */
"This string has a \Aline break in it."

/* String spanning two lines of code (these two strings will have identical output) */
"A really long \
awesome string"
"A really long awesome string"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
