---
title: 基本类型
slug: Glossary/Primitive
---

在 {{Glossary("JavaScript")}} 中，**基本类型**（基本数值、基本数据类型）是一种既非{{Glossary("object", "对象")}}也无{{glossary("method","方法")}}或[属性](/zh-CN/docs/Glossary/property/JavaScript)的数据。有 7 种原始数据类型：

- {{Glossary("string")}}
- {{Glossary("number")}}
- {{Glossary("bigint")}}
- {{Glossary("boolean")}}
- {{Glossary("undefined")}}
- {{Glossary("symbol")}}
- {{Glossary("null")}}

多数情况下，基本类型直接代表了最底层的语言实现。

所有基本类型的值都是**不可改变**的。但需要注意的是，基本类型本身和一个赋值为基本类型的变量的区别。变量会被赋予一个新值，而基本类型不能像数组、对象以及函数那样被改变。

基本类型没有方法，但仍然表现得像有方法一样。当在基本类型上访问属性时，JavaScript 自动将值装入包装器对象中，并访问该对象上的属性。例如，`"foo".includes("f")` 隐式创建了一个 [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 包装对象，并在该对象上调用 `String.prototype.includes()`。这种自动装箱行为在 JavaScript 代码中是无法观察到的，但却是各种行为的一个很好的心理模型——例如，为什么“改变”基本类型不起作用（因为 `str.Foo = 1` 不是赋值给 `str` 本身的 `Foo` 属性，而是赋值给了一个临时包装器对象）。

## 参见

- [JavaScript 数据类型和数据结构](/zh-CN/docs/Web/JavaScript/Data_structures)
- [基本类型](https://zh.wikipedia.org/wiki/原始型別)（维基百科）
- [术语表](/zh-CN/docs/Glossary)

  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - {{Glossary("symbol")}}
