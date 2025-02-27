---
title: 表达式和运算符
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Operators")}}

该章节说明了 JavaScript 语言所有的运算符、表达式和关键字。

## 表达式和运算符分类

要查看按字母顺序排列的列表，请参阅左边的侧边栏。

### 主要表达式

JavaScript 中的基本关键字和常用表达式。这些表达式具有最高的优先级（高于[运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)）。

- {{jsxref("Operators/this", "this")}}
  - : `this` 关键字指向执行上下文的特殊属性。
- [字面量](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#字面量)
  - : 基本的 `null`、布尔、数字和字符串字面量。
- {{jsxref("Array", "[]")}}
  - : 数组初始化或字面量语法。
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : 对象初始化或字面量语法。
- {{jsxref("Operators/function", "function")}}
  - : `function` 关键字定义了函数表达式。
- {{jsxref("Operators/class", "class")}}
  - : `class` 关键字定义了类表达式。
- {{jsxref("Operators/function*", "function*")}}
  - : `function*` 关键字定义了一个生成器函数表达式。
- {{jsxref("Operators/async_function", "async function")}}
  - : `async function` 定义一个异步函数表达式。
- {{jsxref("Operators/async_function*", "async function*")}}
  - : `async function*` 定义了一个异步生成器函数表达式。
- {{jsxref("RegExp", "/ab+c/i")}}
  - : 正则表达式字面量语法。
- {{jsxref("Template_literals", "`string`")}}
  - : 模版字面量语法。
- {{jsxref("Operators/Grouping", "( )")}}
  - : 分组运算符。

### 左表达式

左边的值是赋值的目标。

- {{jsxref("Operators/Property_accessors", "属性访问符", "", 1)}}
  - : 成员运算符用于访问对象的属性或方法（`object.property` 和 `object["property"]`）。
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : 如果引用是[空值](/zh-CN/docs/Glossary/Nullish)（[`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 或 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)），可选链运算符将返回 `undefined` 而不是导致错误。
- {{jsxref("Operators/new", "new")}}
  - : `new` 运算符创建了构造函数实例。
- {{jsxref("Operators/new%2Etarget", "new.target")}}
  - : 在构造函数中，`new.target` 指向 {{jsxref("Operators/new", "new")}} 调用的构造函数。
- {{jsxref("Operators/import%2Emeta", "import.meta")}}
  - : 向 JavaScript 模块暴露特定上下文的元数据属性的对象。
- {{jsxref("Operators/super", "super")}}
  - : `super` 关键字调用父类的构造函数或用于访问父类对象的属性。
- {{jsxref("Operators/import", "import()")}}
  - : `import()` 语法允许将模块异步且动态地加载到可能为非模块环境的上下文中。

### 自增和自减

前置或后置自增运算符和前置或后置自减运算符。

- {{jsxref("Operators/Increment", "A++")}}
  - : 后置自增运算符。
- {{jsxref("Operators/Decrement", "A--")}}
  - : 后置自减运算符。
- {{jsxref("Operators/Increment", "++A")}}
  - : 前置自增运算符。
- {{jsxref("Operators/Decrement", "--A")}}
  - : 前置自减运算符。

### 一元运算符

一元运算符只有一个操作数。

- {{jsxref("Operators/delete", "delete")}}
  - : `delete` 运算符用来删除对象的属性。
- {{jsxref("Operators/void", "void")}}
  - : `void` 运算符执行表达式并丢弃其返回值。
- {{jsxref("Operators/typeof", "typeof")}}
  - : `typeof` 运算符用来判断给定对象的类型。
- {{jsxref("Operators/Unary_plus", "+")}}
  - : 一元加运算符将操作数转换为 Number 类型。
- {{jsxref("Operators/Unary_negation", "-")}}
  - : 一元减运算符将操作数转换为 Number 类型并取反。
- {{jsxref("Operators/Bitwise_NOT", "~")}}
  - : 按位非运算符。
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : 逻辑非运算符。
- {{jsxref("Operators/await", "await")}}
  - : 暂停或恢复执行异步函数，并等待 promise 的兑现或拒绝。

### 算术运算符

算术运算符以二个数值（字面量或变量）作为操作数，并返回单个数值。

- {{jsxref("Operators/Exponentiation", "**")}}
  - : 求幂运算符。
- {{jsxref("Operators/Multiplication", "*")}}
  - : 乘法运算符。
- {{jsxref("Operators/Division", "/")}}
  - : 除法运算符。
- {{jsxref("Operators/Remainder", "%")}}
  - : 取模运算符。
- {{jsxref("Operators/Addition", "+")}}（加）
  - : 加法运算符。
- {{jsxref("Operators/Subtraction", "-")}}
  - : 减法运算符。

### 关系运算符

比较运算符比较两个操作数并返回基于比较结果的布尔值。

- {{jsxref("Operators/Less_than", "&lt;")}}（小于）
  - : 小于运算符。
- {{jsxref("Operators/Greater_than", "&gt;")}}（大于）
  - : 大于运算符。
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : 小于等于运算符。
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : 大于等于运算符。
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : `instanceof` 运算符判断一个对象是否是另一个对象的实例。
- {{jsxref("Operators/in", "in")}}
  - : `in` 运算符用来判断对象是否拥有给定属性。

> **备注：** `=>` 不是运算符，而是[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)的表示符。

### 相等运算符

相等运算符的求值结果始终是布尔类型（基于比较是否为 true）。

- {{jsxref("Operators/Equality", "==")}}
  - : 相等运算符。
- {{jsxref("Operators/Inequality", "!=")}}
  - : 不等运算符。
- {{jsxref("Operators/Strict_equality", "===")}}
  - : 严格相等运算符。
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : 严格不相等运算符。

### 位移运算符

对操作数的所有二进制位进行移动操作。

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : 按位左移运算符。
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : 按位右移运算符。
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : 按位无符号右移运算符。

### 二进制位运算符

二进制运算符将它们的操作数作为 32 个二进制位（0 或 1）的集合，并返回标准的 JavaScript 数值。

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : 按位与（AND）。
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : 按位或（OR）。
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : 按位异或（XOR）。

### 二元逻辑运算符

逻辑运算符实现布尔（逻辑）值运算，并具有[短路](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence#短路)行为。

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : 逻辑与（AND）。
- {{jsxref("Operators/Logical_OR", "||")}}
  - : 逻辑或（OR）。
- {{jsxref("Operators/Nullish_coalescing", "??")}}
  - : 空值合并运算符。

### 条件（三元）运算符

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : 条件运算符返回两个值中符合条件逻辑值的那个值。

### 赋值运算符

赋值运算符将右边的操作数的值赋给左边的操作数。

- {{jsxref("Operators/Assignment", "=")}}
  - : 赋值运算符。
- {{jsxref("Operators/Multiplication_assignment", "*=")}}
  - : 赋值乘积。
- {{jsxref("Operators/Division_assignment", "/=")}}
  - : 赋值商。
- {{jsxref("Operators/Remainder_assignment", "%=")}}
  - : 赋值求余。
- {{jsxref("Operators/Addition_assignment", "+=")}}
  - : 赋值求和。
- {{jsxref("Operators/Subtraction_assignment", "-=")}}
  - : 赋值求差。
- {{jsxref("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : 左位移。
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : 右位移。
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : 无符号右位移。
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : 赋值与（AND）。
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
  - : 赋值按位异或（XOR）。
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
  - : 赋值或（OR）。
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
  - : 求幂赋值。
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : 逻辑和赋值运算符。
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
  - : 逻辑或赋值运算符。
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
  - : 逻辑空赋值运算符。
- [`[a, b] = arr`、`{ a, b } = obj`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - : 解构赋值允许你使用类似于数组或对象字面量的语法将数组或对象的属性赋值给变量。

### Yield 运算符

- {{jsxref("Operators/yield", "yield")}}
  - : 暂停和恢复生成器函数。
- {{jsxref("Operators/yield*", "yield*")}}
  - : 委派给另外一个生成器函数或可迭代对象。

### 展开语法

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : 展开语法允许在需要零个或多个参数（对于函数调用）或者元素（对于数组字面量）的地方展开可迭代对象（例如，数组或字符串）。而在对象字面量中，展开语法枚举对象的属性，并将其键值对添加到正在创建的对象中。

### 逗号运算符

- {{jsxref("Operators/Comma_operator", ",")}}
  - : 逗号运算符允许在单个语句中对多个表达式进行求值，并返回最后一个表达式的结果。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
