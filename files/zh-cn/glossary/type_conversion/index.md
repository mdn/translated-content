---
title: 类型转换
slug: Glossary/Type_Conversion
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

类型转换（Type conversion 或 typecasting）是指将数据由一种类型变换为另一种类型。在编译器（对于编译语言）或运行时（像 {{glossary("JavaScript")}} 等脚本语言）自动转换数据类型时，会发生*隐式转换*。你也可以在源码中*显式*要求进行转换。

例如，给定表达式 `"foo" + 1`，那么 {{glossary("Number")}} `1` 会被隐式转换成{{glossary("String", "字符串")}}并且表达式返回 `"foo1"`。给定指令 `Number("0x11")`，字符串 `"x11"` 显式转换为数字 `17`。

## 参见

- 维基百科上的[类型转换](https://zh.wikipedia.org/wiki/类型转换)
- 相关术语：

  - {{Glossary("Type", "类型")}}
  - {{Glossary("Type coercion", "强制类型转换")}}
