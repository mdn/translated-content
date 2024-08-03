---
title: 不可变
slug: Glossary/Immutable
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

对于一个不可变的值，如果不创建一个全新的值替换它，它的内容是无法更改的。

在 {{glossary("JavaScript")}} 中，{{Glossary("primitive", "原始值")}}是不可变的——一旦创建了原始值，它就不能被改变，尽管持有它的变量可以被重新分配另一个值。相比之下，{{Glossary("Object","对象")}}和{{Glossary("Array","数组")}}默认是可变的——它们的属性和元素可以在不重新分配新值的情况下更改。

由于以下几个原因，使用不可变的对象可能是有益的：

- 提高性能（不计划将来更改对象）
- 为了减少内存使用（进行{{glossary("object reference","对象引用")}}，而不是克隆整个对象）
- 线程安全（多个线程可以引用同一对象，而不会相互干扰）
- 降低开发人员的精神负担（对象的状态不会改变，其行为始终是一致的）

注意，你可以很容易证明可变性：只要对象提供一种方式来更改其属性，它就是可变的。另一方面，如果没有语言语义来保护它，就很难证明*不可变性*——这是一个开发人员约定俗成的问题。例如，{{jsxref("Object.freeze()")}} 是一种语言层面的方法，用于使对象在 JavaScript 中不可变。

## 参见

- 在维基百科中的[不可变对象](https://zh.wikipedia.org/wiki/不可變物件)
- {{glossary("Mutable", "可变")}}
