---
title: 语句和声明
slug: Web/JavaScript/Reference/Statements
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Statements")}}

JavaScript 应用程序是由许多语法正确的语句组成的。单个语句可以跨多行。如果每个语句用分号隔开，那么多个语句可以在一行中出现。本页的内容并不是一个关键字，而是一组关键字。

## 语句和声明（按类别分类）

若需要按字母顺序排列的列表，请参阅左侧边栏。

### 控制流程

- {{jsxref("Statements/return", "return")}}
  - : 指定函数要返回的值。
- {{jsxref("Statements/break", "break")}}
  - : 终止当前的循环，switch 或标签语句，使程序跳到终止的语句之后的语句执行。
- {{jsxref("Statements/continue", "continue")}}
  - : 终止当前或标签循环的当前迭代，直接执行下一个迭代循环。
- {{jsxref("Statements/throw", "throw")}}
  - : 抛出一个用户定义的异常。
- {{jsxref("Statements/if...else", "if...else")}}
  - : 如果指定的条件为真，则执行相匹配的一个语句；若为假，则执行另一个语句。
- {{jsxref("Statements/switch", "switch")}}
  - : 计算表达式，将子句与表达式的值做匹配，执行与该值相关联的语句。
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : 标记一个语句块，并指定语句抛出异常时的错误处理代码。

### 声明变量

- {{jsxref("Statements/var", "var")}}
  - : 声明一个变量，可同时将其初始化为一个值。
- {{jsxref("Statements/let", "let")}}
  - : 声明一个块级作用域的本地变量，可同时将其初始化为一个值。
- {{jsxref("Statements/const", "const")}}
  - : 声明一个只读的命名常量。

### 函数和类

- {{jsxref("Statements/function", "function")}}
  - : 声明一个指定参数的函数。
- {{jsxref("Statements/function*", "function*")}}
  - : 生成器函数使编写[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)更容易。
- {{jsxref("Statements/async_function", "async function")}}
  - : 使用指定的参数声明一个异步函数。
- {{jsxref("Statements/async_function*", "async function*")}}
  - : 异步生成器函数使编写异步[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)更容易。
- {{jsxref("Statements/class", "class")}}
  - : 声明一个类。

### 迭代

- {{jsxref("Statements/do...while", "do...while")}}
  - : 创建一个循环来执行指定语句，直到测试条件的求值为假。先执行语句，再对条件表达式求值，指定语句至少会执行一次。
- {{jsxref("Statements/for", "for")}}
  - : 创建一个由三个可选的表达式（用括号包裹，分号分割）组成的循环，并在循环体中执行语句。
- {{jsxref("Statements/for...in", "for...in")}}
  - : 无序遍历对象的可枚举属性。语句针对每个唯一的属性。
- {{jsxref("Statements/for...of", "for...of")}}
  - : 遍历可迭代对象（包括 {{jsxref("Global_Objects/Array","数组")}}、类数组对象、[迭代器和生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)），对每个不同的属性的值，调用一个自定义的带有要执行的语句的迭代钩子。
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : 遍历异步可迭代对象、类数组对象、[迭代器和生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)，对每个不同的属性的值，调用一个自定义的带有要执行的语句的迭代钩子。
- {{jsxref("Statements/while", "while")}}
  - : 创建一个执行指定语句的循环，直到测试条件的求值为假。先对条件进行求值，再执行语句。

### 其他

- {{jsxref("Statements/Empty", "空语句", "", 1)}}
  - : 空语句，用于不在 JavaScript 语法期望有语句的地方提供语句。
- {{jsxref("Statements/block", "块语句", "", 1)}}
  - : 块语句，用于将零个或多个语句组合在一起。块由一对花括号括起来。
- {{jsxref("Statements/Expression_statement", "表达式语句", "", 1)}}
  - : 表达式语句计算表达式的值并丢弃其结果。它允许表达式产生副作用，例如执行函数或更新变量。
- {{jsxref("Statements/debugger", "debugger")}}
  - : 调用可用的调试功能。如果没有调试功能可用，该语句不生效。
- {{jsxref("Statements/export", "export")}}
  - : 用来导出函数，以便这些函数能够被导入到外部模块或其他脚本中。
- {{jsxref("Statements/import", "import")}}
  - : 用来引入外部的模块或另一个脚本中导出的函数。
- {{jsxref("Statements/label", "label")}}
  - : 提供带标识的语句，与 `break` 或 `continue` 语句一起使用。
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}
  - : 拓展一个语句的作用域。

## 语句和声明的区别

在本节内容中，我们将混合两种结构：[_语句_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Statement)和[_声明_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Declaration)。它们是两套不相关的语法。以下是声明：

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/export", "export")}}（备注：它只能出现在[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)的顶层）
- {{jsxref("Statements/import", "import")}}（备注：它只能出现在[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)的顶层）

[上面列出](#语句和声明（按类别分类）)的除声明之外的其他内容都是语句。

术语“语句”和“声明”在 JavaScript 的正式语法中具有精确的含义，这会影响它们在代码中的位置。例如，在大多数控制流程结构中，其主体只接受语句——如 [`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 的两个分支：

```js-nolint
if (condition)
  statement1;
else
  statement2;
```

如果使用声明而不是语句，则会产生{{jsxref("SyntaxError", "语法错误", "", 1)}}。例如，[`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 声明不是语句，所以不能将其用作 `if` 语句的主体。

```js-nolint example-bad
if (condition)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

另一方面，[`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var) 是一个语句，所以你可以将其单独用作 `if` 主体。

```js-nolint example-good
if (condition)
  var i = 0;
```

你可以将声明看作“{{Glossary("binding", "绑定")}}标识符到值”的过程，而语句则是“执行操作”的过程。`var` 语句的特殊性在于它不遵循正常的词法作用域规则，这可能会产生副作用——例如，创建全局变量、修改已存在的 `var` 定义的变量、定义可在其块之外可见的变量（这是因为 `var` 定义的变量并不是块作用域的）。

在另一个例子中，[标签](/zh-CN/docs/Web/JavaScript/Reference/Statements/label)只能附加到语句上。

```js-nolint example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> [!NOTE]
> 有一种遗留语法允许[函数声明具有标签](/zh-CN/docs/Web/JavaScript/Reference/Statements/label#标记函数声明)，但它只是为了与 web 现实兼容而进行了标准化。

为了解决这个问题，你可以将声明括在大括号中——这使其成为[块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)的一部分。

```js example-good
label: {
  const a = 1;
}

if (condition) {
  let i = 0;
}
```

## 浏览器兼容性

{{Compat}}

## 参见

- [表达式和运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators)
