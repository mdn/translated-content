---
title: 语句和声明
slug: Web/JavaScript/Reference/Statements
---

{{jsSidebar("Statements")}}

JavaScript 应用程序是由许多语法正确的语句组成的。单个语句可以跨多行。如果每个语句用分号隔开，那么多个语句可以在一行中出现。本页的内容并不是一个关键字，而是一组关键字。

## 语句和声明（按类别分类）

若需要按字母顺序排列的列表，请参阅左侧边栏。

### 控制流程

- {{jsxref("Statements/block", "Block")}}
  - : 一个块语句可以用来管理零个或多个语句。该区块是由一对大括号分隔。
- {{jsxref("Statements/break", "break")}}
  - : 终止当前的循环，switch 或 label 语句，使程序跳到下一个语句执行。
- {{jsxref("Statements/continue", "continue")}}
  - : 终止执行当前或标签循环的语句，直接执行下一个迭代循环。
- {{jsxref("Statements/Empty", "Empty")}}
  - : 空语句用来表示没有语句的情况，尽管 JavaScript 语法期望有语句提供。
- {{jsxref("Statements/if...else", "if...else")}}
  - : 如果指定的条件是 true，则执行相匹配的一个语句，若为 false，则执行另一个语句。
- {{jsxref("Statements/switch", "switch")}}
  - : 计算表达式，将子句于表达式的值做匹配，执行与该值相关联的语句。
- {{jsxref("Statements/throw", "throw")}}
  - : 抛出一个用户定义的异常。
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : 标记一个语句块，并指定一个应该抛出异常的反馈。（Marks a block of statements to try, and specifies a response, should an exception be thrown.）

### 声明

- {{jsxref("Statements/var", "var")}}
  - : 声明一个变量，可同时将其初始化为一个值。
- {{jsxref("Statements/let", "let")}}
  - : 声明一个块级本地变量，可同时将其初始化为一个值。
- {{jsxref("Statements/const", "const")}}
  - : 声明一个只读的命名常量。

### 函数和类

- {{jsxref("Statements/function", "function")}}
  - : 声明一个指定参数的函数。
- {{jsxref("Statements/function*", "function*")}}
  - : 生成器函数使[迭代器](/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol)更容易使用。
- {{jsxref("Statements/async_function", "async function")}}
  - : 使用指定的参数声明一个异步函数。
- {{jsxref("Statements/return", "return")}}
  - : 指定函数的返回值。
- {{jsxref("Statements/class", "class")}}
  - : 声明一个类。

### 迭代器

- {{jsxref("Statements/do...while", "do...while")}}
  - : 创建一个循环来执行语句，直到该语句条件表达式的值为 false。先执行语句，再执行条件表达式，该语句至少会执行一次。
- {{jsxref("Statements/for", "for")}}
  - : 创建一个由 3 个可选的表达式组成的循环，该循环用括号包裹，分号分割，并在循环体中执行语句。
- {{jsxref("Statements/for...in", "for...in")}}
  - : 无序遍历对象的可枚举属性。语句针对每个唯一的属性。
- {{jsxref("Statements/for...of", "for...of")}}
  - : 遍历可迭代的对象（包括 {{jsxref("Global_Objects/Array","数组")}}、类数组对象、[迭代器和生成器](/zh-CN/docs/JavaScript/Guide/Iterators_and_Generators))，对每个不同属性的属性，调用一个自定义的有执行语句的迭代钩子。
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : 在异步可迭代对象、类数组对象、[迭代器和生成器](/zh-CN/docs/JavaScript/Guide/Iterators_and_Generators)上迭代，调用自定义迭代钩子，其中包含要为每个不同属性的值执行的语句。
- {{jsxref("Statements/while", "while")}}
  - : 创建一个循环语句，循环会一直持续到该语句条件表达式的值为 false。先执行条件表达式，然后执行语句。

### 其他

- {{jsxref("Statements/debugger", "debugger")}}
  - : 调用可用的调试功能。如果没有调试功能可用，该语句不生效。
- {{jsxref("Statements/export", "export")}}
  - : 用来导出函数，以便这些函数能够被导入到外部模块或其他脚本中。
- {{jsxref("Statements/import", "import")}}
  - : 用来引入外部的模块或另一个 script 中导出的函数。
- [`import.meta`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import.meta)
  - : 向 JavaScript 模块公开上下文特定的元数据的元属性。
- {{jsxref("Statements/label", "label")}}
  - : 带标识的语句，与 `break` 或 `continue` 语句一起使用。
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}
  - : 拓展一个语句的作用域。

## 浏览器兼容性

{{Compat}}

## 参见

- [表达式和操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators)
