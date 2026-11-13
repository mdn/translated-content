---
title: 对象
slug: Glossary/Object
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

在 JavaScript 中，对象可以看作是属性的集合。使用[对象字面量语法](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#对象字面量)，可以初始化一组有限的属性，然后可以添加和删除属性。属性值可以是任何类型的值，包括其他对象，这使得构建复杂的数据结构成为可能。属性通过*键*值来标识。*键*值可以是{{Glossary("String", "字符串值")}}或 [Symbol 值](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。

对象属性有两种类型：[*数据*属性](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#数据属性)和[*访问器*属性](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#访问器属性)。

> [!NOTE]
> 重要的是要认识到这是访问器*属性*，而不是访问器*方法*。我们可以通过将函数作为值来赋予 JavaScript 对象类*一样*的访问器，但这并不能让对象成为类。

## 参见

- [JavaScript 数据类型和数据结构](/zh-CN/docs/Web/JavaScript/Guide/Data_structures)一文中对 [JavaScript 对象的详细解释](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#object)
- [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)中的 {{jsxref("Object")}}
