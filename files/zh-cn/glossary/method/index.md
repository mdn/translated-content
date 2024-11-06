---
title: 方法
slug: Glossary/Method
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**方法**是一种作为{{glossary("object","对象")}}的{{glossary("property","属性")}}的{{glossary("function","函数")}}。方法有两种类型：*实例方法*是由对象实例执行的内置任务，而[_静态方法_](/zh-CN/docs/Glossary/Static_method)是直接在对象构造函数上调用的任务。

> [!NOTE]
> 在 JavaScript 中，函数本身也是对象，因此，在这个上下文中，方法实际上是对函数的{{glossary("object reference","对象引用")}}。

当说 `F` 是 `O` 的一个*方法*时，通常意味着 `F` 将 `O` 作为其 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 绑定。没有根据它们的 `this` 值具有不同行为的函数属性（或者根本没有动态 `this` 绑定的函数——比如[绑定函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)和[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)）可能不被普遍认为是方法。

## 参见

- 维基百科上的[方法](<https://zh.wikipedia.org/wiki/方法_(電腦科學)>)
- [在 JavaScript 中定义方法](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)（传统语法与新的简写语法的比较）
- [JavaScript 内置方法列表](/zh-CN/docs/Web/JavaScript/Reference)
- [MDN Web 文档术语表](/zh-CN/docs/Glossary)

  - {{Glossary("function", "函数")}}
  - {{Glossary("object", "对象")}}
  - {{Glossary("property", "属性")}}
  - {{Glossary("static method", "静态方法")}}
