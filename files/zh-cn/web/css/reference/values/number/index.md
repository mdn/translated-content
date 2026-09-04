---
title: <number>
slug: Web/CSS/Reference/Values/number
l10n:
  sourceCommit: f3d234ca192782b7993276924bf64870612bcc1a
---

[CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types) **`<number>`** 表示整数或者是带有小数部分的数字，或者是以十进制指数的科学记数法。

## 语法

`<number>` 的语法扩展了 {{CSSxRef("&lt;integer&gt;")}} 的语法。分数值由一个点 `.` 后跟一个或多个十进制数字表示，并且可以附加到整数上。数值没有关联单位。`<number>` 也可以以字母 `e` 或 `E` 结尾，并紧跟一个整数，用来表示科学记数法中的十进制指数。数值本身不带任何单位。

与整数相同，数值的第一个字符前可以紧跟 - 或 +，用来表示该数值是正数还是负数。

## 插值

当被动画化时，`<number>` CSS 数据类型的值会作为实数、浮点数进行插值计算。插值的速度由与动画相关的[缓动函数](/zh-CN/docs/Web/CSS/Reference/Values/easing-function)来决定。

## 示例

### 有效数字

```plain example-good
12          原始的 <integer> 也是 <number>。
4.01        正分数
-456.8      负分数
0.0         零
+0.0        带 + 号的零
-0.0        带 - 号的零
.60         不带零的小数
10e3        科学计数法
-3.4e-2     复杂的科学记数法
```

### 无效数字

```plain example-bad
12.         小数点后必须至少跟随一位数字。
+-12.2      只允许有一个前置的正负号 + 或 -。
12.1.1      只允许存在一个小数点。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("integer")}}
- {{CSSxRef("ratio")}}
- [CSS 值和单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units)模块
