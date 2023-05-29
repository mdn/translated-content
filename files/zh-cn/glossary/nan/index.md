---
title: NaN
slug: Glossary/NaN
---

NaN(不是一个数字) 是一种数值表达形式 {{Glossary("Type", "data type")}}这意味一种未定义的值或者不能够被描述的值，尤其浮点型结算的结果。

举例，NaNs 能够描述无穷大，数字除 0 的结果，缺少值，或者平方根为负数（这是虚构的，而浮点数是真实的）。

实际上，如果我在{{glossary("JavaScript")}} 程序中划分两个变量，结果可能是 NaN，它在 JavaScript 中被预定义为“undefined”。于是这个除法可能中断程序。现在，如果这个计算是一个大规模算法的一小部分，那么确定错误实际发生的地方真的很困难。幸运的是，由于结果将是 NaN，我知道我的除数可能会变为 0，我可以设置防止任何此类计算的测试条件，或通知我发生的位置。

## 学习更多

### 通常的知识点

- [NaN](https://zh.wikipedia.org/wiki/NaN) 在维基百科

### 权威的信息

- [NaN in JavaScript](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)
