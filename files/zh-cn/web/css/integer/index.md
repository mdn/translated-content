---
title: 整型
slug: Web/CSS/integer
---

{{CSSRef}}

The **`<integer>`** [CSS](/zh-CN/docs/Web/CSS) [data type](/zh-CN/docs/Web/CSS/CSS_Types) is a special type of {{cssxref("number")}} that represents a whole number, whether positive or negative. Integers can be used in numerous CSS properties, such as {{cssxref("column-count")}}, {{cssxref("counter-increment")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, and {{cssxref("z-index")}}.
The **`<integer>`** css 数据类型是一种特殊的\<number>类型，它表示一个整数，无论是正数还是负数。整数可以用于许多 css 属性，例如{{cssxref("column-count")}}, {{cssxref("counter-increment")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, and {{cssxref("z-index")}}.

## 语法

The `<integer>` data type consists of one or several decimal digits, 0 through 9 inclusive, optionally preceded by a single `+` or `-` sign. There is no unit associated with integers.
\<integer>数据类型由一个或多个十进制数字组成，包括 0 到 9，可以选择前面加一个 + 或-号。没有与整数关联的单位。

> **备注：** There is no official range of valid `<integer>` values. Opera 12.1 supports values up to 215-1, IE up to 220-1, and other browsers even higher. During the CSS3 Values cycle there was a lot of discussion about setting a minimum range to support: the latest decision, [in April 2012 during the LC phase](http://lists.w3.org/Archives/Public/www-style/2012Apr/0633.html), was \[-227-1; 227-1], but other values like 224-1 and 230-1 [were also proposed](http://lists.w3.org/Archives/Public/www-style/2012Apr/0530.html). However, the latest spec doesn't specify a range anymore.
> 注意：没有有效的\<integer>值的正式范围。Opera12.1 支持高达 215-1 的值，IE 高达 220-1 的值，其他浏览器支持更高的值。在 CSS3 值周期中，有很多关于设置最小支持范围的讨论：2012 年 4 月在 LC 阶段的最新决定是 \[-227-1; 227-1],，但也提出了 224-1 and 230 等其他值。但是，最新的规范不再指定范围。

## Interpolation

When animated, values of the `<integer>` data type are interpolated using discrete, whole steps. The calculation is done as if they were real, floating-point numbers; the discrete value is obtained using the [floor function](http://en.wikipedia.org/wiki/Floor_function). The speed of the interpolation is determined by the [timing function](/zh-CN/docs/Web/CSS/single-transition-timing-function) associated with the animation.
设置动画时，\<integer>数据类型的值将使用离散的完整步骤进行插值。计算过程就像是实数，浮点数一样；离散值是使用 floor 函数得到的。插值的速度由与动画相关联的定时函数确定。

## 示例

### 合法整型

```
12          Positive integer (without a leading + sign)
+123        Positive integer (with a leading + sign)
-456        Negative integer
0           Zero
+0          Zero, with a leading +
-0          Zero, with a leading -
```

### 非法整型

```plain example-bad
12.0        This is a <number>, not an <integer>, though it represents an integer.
12.         Decimal points are not allowed.
+---12      Only one leading +/- is allowed.
ten         Letters are not allowed.
_5          Special characters are not allowed.
\35         Escaped Unicode characters are not allowed, even if they are an integer (here: 5).
\4E94       Non-arabic numerals are not allowed, even when escaped (here: the Japanese 5, 五).
3e4         Scientific notation is not allowed.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{cssxref("&lt;number&gt;")}}
