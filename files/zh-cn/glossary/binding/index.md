---
title: 绑定
slug: Glossary/Binding
l10n:
  sourceCommit: 1f7c54fce7dc72e99e3d22ece8958db1290a7062
---

在编程中，**绑定**（binding）是指将{{glossary("identifier", "标识符")}}与值相关联的过程。并非所有绑定都是{{glossary("variable", "变量")}}——例如函数中的{{glossary("parameter", "参数")}}以及 {{jsxref("Statements/try...catch", "catch (e)")}} 块中创建的绑定在严格意义上并非“变量”。此外，一些绑定是由语言隐式创建的——例如：JavaScript 中的 {{jsxref("Operators/this", "this")}} 和 [`new.target`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target)。

绑定如果可以重新赋值，则是{{glossary("mutable", "可变的")}}；否则为{{glossary("immutable", "不可变的")}}。这*并不意味着*所持有的值是不可变的。

绑定通常与{{glossary("scope", "作用域")}}相关联。一些语言允许在同一个作用域内重新创建绑定（也称为重新声明），而另一些语言则不允许；在 JavaScript 中，绑定是否可以重新声明取决于用于创建绑定的构造过程。

## 参见

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/class", "class")}}
