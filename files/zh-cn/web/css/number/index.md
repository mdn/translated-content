---
title: <number>
slug: Web/CSS/number
---

{{CSSRef}}

## 语法

`<number>` [CSS](/zh-CN/docs/Web/CSS) 数据类型代表一个数字，可为整数或小数。它的语法扩展了 {{cssxref("&lt;integer&gt;")}} 的数据值。要表示一个小数则加上小数部分——“."后跟一或多为十进制数字——到任何 {{cssxref("&lt;integer&gt;")}} 数据值。像 {{cssxref("&lt;integer&gt;")}} 数据类型一样，\<number> 没有任何单位，并不是一个 CSS 尺寸。

## 插值

`<number>` CSS 数据类型的值可以被插值，用于动画。这种情况下，它们的插值是浮点实数。插值的速度取决于动画的 [timing function](/zh-CN/docs/CSS/timing-function)。

## 示例

合法值示例：

```plain
12          A raw <integer> is also a <number>
4.01        正非整 <数字>
-456.8      负非整 <数字>
0.0         零
+0.0        带正号的零
-0.0        带负号的零 (尽管奇怪，但合法)
.60         点前的数字可以省略
10e3        科学计数法
-3.4e-2     科学计数法最复杂的情况
```

非法值示例：

```plain
12.         点后需有数字
+-12.2      只能有一个符号
12.1.1      只能有一个点
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS Reference](/zh-CN/docs/CSS/CSS_Reference) index
