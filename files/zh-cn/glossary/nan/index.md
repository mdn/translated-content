---
title: NaN
slug: Glossary/NaN
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

NaN（不是一个数字）是一种数值{{Glossary("Type", "数据类型")}}，指代一种未定义的值或者不能够被描述的值，尤其浮点型结算的结果。

举例，NaN 能够描述无穷大，数字除 0 的结果，缺少值，或者平方根为负数（虚数，而浮点数应是实数）。

实际上，如果在 {{glossary("JavaScript")}} 程序中将两个变量相除，结果可能是 NaN，一个在 JavaScript 中被预定义为“undefined”的值。于是这个除法可能中断程序。现在，如果这个计算是一个大规模算法的一小部分，那么确定错误实际发生的地方真的很困难。幸运的是，由于结果将是 NaN，并且也知道除数可能会是 0，我们可以设置防止任何此类计算的测试条件，或告知我们发生的位置。

## 参见

- 维基百科上的 [NaN](https://zh.wikipedia.org/wiki/NaN)
- [JavaScript 中的 NaN](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)
