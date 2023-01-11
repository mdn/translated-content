---
title: Type conversion（类型转换）
slug: Glossary/Type_Conversion
---

类型转换/变换（Type conversion/typecasting）是指将数据由一种类型变换为另一种类型。在编译器（对于编译语言）或运行时（像 {{glossary("JavaScript")}} 等脚本语言）自动转换数据类型时，会发生*隐式转换*。你也可以在源码中明确要求进行转换。

For example, given the expression `"foo" + 1`, the {{glossary("Number")}} `1` is implicitly converted into a {{glossary("String")}} and the expression returns `"foo1"`. Given the instruction `Number("0x11")`, the string `"0x11"` is explicitly converted to the number `17`.

例如，给定表达式 `"foo" + 1`，那么{{glossary("Number", "数字")}} `1` 会被隐式转换成{{glossary("String", "字符串")}}并且表达式返回 `"foo1"`。给定指令 `Number("0x11")`，字符串 `"x11"` 显式转换为数字 17。

## 参见

- [类型转换](https://zh.wikipedia.org/wiki/类型转换)
- [术语](/zh-CN/docs/Glossary)

  - {{Glossary("Type", "类型")}}
  - {{Glossary("Type coercion", "强制类型转换")}}
