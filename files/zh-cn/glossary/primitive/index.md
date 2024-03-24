---
title: 原始值
slug: Glossary/Primitive
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

在 {{Glossary("JavaScript")}} 中，**原始值**（原始数据类型）是一种既非{{Glossary("object", "对象")}}也无{{glossary("method","方法")}}或[属性](/zh-CN/docs/Glossary/Property/JavaScript)的数据。有 7 种原始数据类型：

- {{Glossary("string")}}
- {{Glossary("number")}}
- {{Glossary("bigint")}}
- {{Glossary("boolean")}}
- {{Glossary("undefined")}}
- [symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- {{Glossary("null")}}

多数情况下，原始值直接代表了最底层的语言实现。

所有原始值都是*不可变*的，即它们的值不能被修改。重要的是不要将原始值本身与分配了原始值的变量混淆。变量可能会被重新赋予一个新值，但存在的值不能像数组、对象以及函数那样被修改。语言不提供改变原始值的工具方法。

基本类型没有方法，但仍然表现得像有方法一样。当在原始值上访问属性时，JavaScript *自动*将值*装入*包装对象中，并访问该对象上的属性。例如，`"foo".includes("f")` 隐式创建了一个 [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 包装对象，并在该对象上调用 `String.prototype.includes()`。这种自动装箱行为在 JavaScript 代码中是无法观察到的，但却是各种行为的一个很好的心理模型——例如，为什么“修改”原始值不起作用（因为 `str.foo = 1` 不是赋值给 `str` 本身的 `foo` 属性，而是赋值给了一个临时包装对象）。

## 参见

- [JavaScript 数据类型](/zh-CN/docs/Web/JavaScript/Data_structures)
- [原始数据类型](https://zh.wikipedia.org/wiki/原始型別)（维基百科）
- [术语表](/zh-CN/docs/Glossary)

  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - [symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
