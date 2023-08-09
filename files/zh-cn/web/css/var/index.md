---
title: var()
slug: Web/CSS/var
---

{{CSSRef}}

**`var()`** [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-cn/docs/Web/CSS/CSS_Functions)可以插入一个[自定义属性](/zh-CN/docs/Web/CSS/--*)（有时也被称为“CSS 变量”）的值，用来代替非自定义属性中值的任何部分。

{{EmbedInteractiveExample("pages/css/var.html")}}

`var()` 函数不能作为属性名、选择器或者其他除了属性值之外的值。（这样做通常会产生无效的语法或者一个没有关联到变量的值。）

## 语法

函数的第一个参数是要替换的自定义属性的名称。函数的第二个参数是可选的，用作回退值。如果第一个参数引用的自定义属性无效，则该函数将使用第二个值。

{{csssyntax}}

> **备注：** 自定义属性的回退值允许使用逗号。例如，`var(--foo, red, blue)` 将 `red, blue` 同时指定为回退值；即是说任何在第一个逗号之后到函数结尾前的值都会被考虑为回退值。

### 值

- `<custom-property-name>` 自定义属性名
  - : 在实际应用中它被定义为以两个破折号开始的任何有效标识符。自定义属性仅供作者和用户使用; CSS 将永远不会给他们超出这里表达的意义。
- `<declaration-value>` 声明值（回退值）
  - : 回退值被用来在自定义属性值无效的情况下保证函数有值。回退值可以包含任何字符，但是部分有特殊含义的字符除外，例如换行符、不匹配的右括号（如 `)`、`]` 或 `}`）、感叹号以及顶层分号（不被任何非 `var()` 的括号包裹的分号，例如 `var(--bg-color, --bs;color)` 是不合法的，而 `var(--bg-color, --value(bs;color))` 是合法的）。

## 示例

### 在 :root 上使用自定义属性

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
/* 回退值 */

/* 在 component 的样式中：*/
.component .header {
  /* header-color 没有被设置，将使用回退值 blue */
  color: var(--header-color, blue);
}

.component .text {
  color: var(--text-color, black);
}

/* In the larger application's style: */
.component {
  --text-color: #080;
}
```

### 使用自定义属性作为回退值

```css
:root {
  --backup-bg-color: teal;
}

body {
  /* main-bg-color 没有被设置，将使用回退值 backup-bg-color。如果 backup-bg-color 没有被设置，将使用回退值 white。 */
  color: var(--main-bg-color, var(--backup-bg-color, white));
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("env","env(…)")}}——由 user‑agent 控制的只读环境变量。
- [使用 CSS 自定义属性](/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)
