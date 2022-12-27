---
title: var()
slug: Web/CSS/var
original_slug: Web/CSS/var()
---

{{CSSRef}}

## 概述

**`var()`**函数可以代替元素中任何属性中的值的任何部分。**`var()`**函数不能作为属性名、选择器或者其他除了属性值之外的值。（这样做通常会产生无效的语法或者一个没有关联到变量的值。）

## 语法

方法的第一个参数是要替换的自定义属性的名称。函数的可选第二个参数用作回退值。如果第一个参数引用的自定义属性无效，则该函数将使用第二个值。

{{csssyntax}}

> **备注：** 自定义属性的回退值允许使用逗号。例如， `var(--foo, red, blue)` 将`red, blue`同时指定为回退值；即是说任何在第一个逗号之后到函数结尾前的值都会被考虑为回退值。

### 值

- \<custom-property-name> 自定义属性名
  - : 在实际应用中它被定义为以两个破折号开始的任何有效标识符。自定义属性仅供作者和用户使用; CSS 将永远不会给他们超出这里表达的意义。
- \<declaration-value> 声明值（后备值）
  - : 回退值被用来在自定义属性值无效的情况下保证函数有值。回退值可以包含任何字符，但是部分有特殊含义的字符除外，例如换行符、不匹配的右括号（如 `)`、`]`或 `}`）、感叹号以及顶层分号（不被任何非`var()`的括号包裹的分号，例如`var(--bg-color, --bs;color)`是不合法的，而`var(--bg-color, --value(bs;color))`是合法的）。

## 示例

### 在 :root 上定义，然后使用它

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

### 当第一个值未定义，回退值生效

```css
/* 后备值 */

/* 在父元素样式中定义一个值 */
.component {
  --text-color: #080; /* header-color 并没有被设定 */
}

/* 在 component 的样式中使用它： */
.component .text {
  color: var(--text-color, black); /* 此处 color 正常取值 --text-color */
}
.component .header {
  color: var(--header-color, blue); /* 此处 color 被回退到 blue */
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请参见

- {{cssxref("env","env(…)")}} – read‑only environment variables controlled by the user‑agent.
- [Using CSS variables](/zh-CN/docs/Web/CSS/Using_CSS_variables)
