---
title: 类型
slug: Glossary/Type
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**类型**是一个关于{{glossary("value", "值")}}的，控制它可以存储的数据类型以及数据将遵循的结构的特征。例如，{{Glossary("boolean", "布尔")}}[数据类型](/zh-CN/docs/Web/JavaScript/Data_structures)在任何时间都只能保存 `true` 或 `false` 值中的一个，而{{Glossary("string", "字符串")}}可以保存字符串或字符序列，{{Glossary("Number")}} 可以保存任何类型的数字值，等等。

值的数据类型还会影响到可以在该值上执行的操作。例如，数字类型的值可以与另一个数字相乘，但不能与字符串相乘——即使该字符串*只*包含数字，比如字符串“2”。

类型还为我们提供了关于不同值之间的比较的有用知识。结构化类型之间的比较并不总是一个简单的假设，因为即使之前的数据结构是相同的，也可能在[原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)中存在继承的结构。

如果你不确定一个值的类型，你可以使用 [`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) 运算符。

## 参见

- 维基百科上的[数据类型](https://zh.wikipedia.org/wiki/資料類型)
- [JavaScript 的数据类型](/zh-CN/docs/Web/JavaScript/Data_structures)
- 相关术语：

  - {{Glossary("JavaScript")}}
  - {{Glossary("string", "字符串")}}
  - {{Glossary("Number")}}
  - {{Glossary("BigInt")}}
  - {{Glossary("boolean", "布尔")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - {{Glossary("symbol", "符号")}}
