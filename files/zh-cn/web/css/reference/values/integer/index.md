---
title: <integer>
slug: Web/CSS/Reference/Values/integer
l10n:
  sourceCommit: b4862a953a358b2f08a181e3a4051433cfa86ca0
---

**`<integer>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)是一种特殊的 {{cssxref("number")}} 类型，它表示一个整数。整数可用于许多 CSS 属性和描述符，例如 {{cssxref("column-count")}}、{{cssxref("counter-increment")}}、{{cssxref("grid-column")}}、{{cssxref("grid-row")}}、{{cssxref("z-index")}} 属性和 {{cssxref("@counter-style/range", "range")}} 描述符。

## 语法

`<integer>` 数据类型由一个或多个十进制数字（0 至 9 包括在内）组成，可选择在数字前添加一个 `+` 或 `-` 符号。整数没有相关联的单位。

> [!NOTE]
> 有效的 `<integer>` 值没有正式的范围，规范也没有指定范围。

## 插值

当使用动画时，{{Glossary("interpolation", "插值法")}}会使用离散的整数步来计算 `<integer>` 数据类型的值。计算方法与实数、浮点数相同；离散值使用 [floor 函数](https://zh.wikipedia.org/wiki/取整函数)获取。插值的速度由与动画关联的[缓动函数](/zh-CN/docs/Web/CSS/Reference/Values/easing-function)决定。

## 示例

### 有效的 integer 值

```plain example-good
12          正整数（没有前导 + 号）
+123        正整数（包含前导 + 号）
-456        负整数
0           零
+0          有前导 + 号的零
-0          有前导 - 号的零
```

### 无效的 integer 值

```plain example-bad
12.0        这是 <number> 值，而不是 <integer> 值，即使它代表了一个整数。
12.         不允许使用小数点。
+---12      只允许一个前导 +/-。
ten         不允许使用字母。
_5          不允许使用特殊字符。
\35         不允许使用转义 Unicode 字符，即使它们是整数（此处为 5）。
\4E94       不允许使用非阿拉伯数字，即使已转义（此处为日语的 5，五）。
3e4         不允许使用科学计数法。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("&lt;number&gt;")}}
