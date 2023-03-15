---
title: 表达式和运算符
slug: Web/JavaScript/Reference/Operators
---

{{JSSidebar("Operators")}}

该章节说明了 JavaScript 语言所有的运算符，表达式和关键字。

## 表达式和运算符分类

要查看按字母顺序排列的列表，请参阅左边的侧边栏。

### 主要表达式

JavaScript 中的基本关键字和常用表达式。

- {{JSxRef("Operators/this", "this")}}
  - : `this` 关键字指向函数的执行上下文。
- {{JSxRef("Operators/function", "function")}}
  - : `function` 关键字定义了函数表达式。
- {{JSxRef("Operators/class", "class")}}
  - : `class` 关键字定义了类表达式。
- {{JSxRef("Operators/function*", "function*")}}
  - : `function*` 关键字定义了一个 generator 函数表达式。
- {{JSxRef("Operators/yield", "yield")}}
  - : 暂停和恢复 generator 函数。
- {{JSxRef("Operators/yield*", "yield*")}}
  - : 委派给另外一个 generator 函数或可迭代的对象。
- {{JSxRef("Operators/async_function", "async function")}}
  - : `async function` 定义一个异步函数表达式。
- {{JSxRef("Operators/await", "await")}}
  - : 暂停或恢复执行异步函数，并等待 promise 的 resolve/reject 回调。
- {{JSxRef("Operators/async_function*", "async function*")}}
  - : `async function*` 定义了一个异步生成器函数表达式。
- {{JSxRef("Global_Objects/Array", "[]")}}
  - : 数组初始化/字面量语法。
- {{JSxRef("Operators/Object_initializer", "{}")}}
  - : 对象初始化/字面量语法。
- {{JSxRef("Global_Objects/RegExp", "/ab+c/i")}}
  - : 正则表达式字面量语法。
- {{JSxRef("Operators/Grouping", "( )")}}
  - : 分组操作符。

### 左表达式

左边的值是赋值的目标。

- {{JSxRef("Operators/Property_accessors", "属性访问符", "", 1)}}
  - : 成员运算符提供了对对象的属性或方法的访问（`object.property` 和 `object["property"]`）。
- {{JSxRef("Operators/new", "new")}}
  - : `new` 运算符创建了构造函数实例。
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
  - : 在构造器中，`new.target` 指向 {{JSxRef("Operators/new", "new")}} 调用的构造器。
- {{JSxRef("Operators/import%2Emeta", "import.meta")}}
  - : 向 JavaScript 模块暴露特定上下文的元数据属性的对象。
- {{JSxRef("Operators/super", "super")}}
  - : `super` 关键字调用父类的构造器。
- {{JSxRef("Operators/Spread_operator", "...obj")}}
  - : 展开运算符允许在需要多个参数（用于函数调用）或多个元素（用于数组字面量）的地方展开表达式。

### 自增和自减

前置/后置自增运算符和前置/后置自减运算符。

- {{JSxRef("Operators/Increment", "A++")}}
  - : 后置自增运算符。
- {{JSxRef("Operators/Decrement", "A--")}}
  - : 后置自减运算符。
- {{JSxRef("Operators/Increment", "++A")}}
  - : 前置自增运算符。
- {{JSxRef("Operators/Decrement", "--A")}}
  - : 前置自减运算符。

### 一元运算符

一元运算符只有一个操作数。

- {{JSxRef("Operators/delete", "delete")}}
  - : `delete` 运算符用来删除对象的属性。
- {{JSxRef("Operators/void", "void")}}
  - : `void` 运算符表示表达式放弃返回值。
- {{JSxRef("Operators/typeof", "typeof")}}
  - : `typeof` 运算符用来判断给定对象的类型。
- {{JSxRef("Operators/Unary_plus", "+")}}
  - : 一元加运算符将操作转换为 Number 类型。
- {{JSxRef("Operators/Unary_negation", "-")}}
  - : 一元减运算符将操作转换为 Number 类型并取反。
- {{JSxRef("Operators/Bitwise_NOT", "~")}}
  - : 按位非运算符。
- {{JSxRef("Operators/Logical_NOT", "!")}}
  - : 逻辑非运算符。

### 算术运算符

算术运算符以二个数值（字面量或变量）作为操作数，并返回单个数值。

- {{JSxRef("Operators/Addition", "+")}}（加）
  - : 加法运算符。
- {{JSxRef("Operators/Subtraction", "-")}}
  - : 减法运算符。
- {{JSxRef("Operators/Division", "/")}}
  - : 除法运算符。
- {{JSxRef("Operators/Multiplication", "*")}}
  - : 乘法运算符。
- {{JSxRef("Operators/Remainder", "%")}}
  - : 取模运算符。
- {{JSxRef("Operators/Exponentiation", "**")}}
  - : 求幂运算符。

### 关系运算符

比较运算符比较两个操作数并返回基于比较结果的布尔值。

- {{JSxRef("Operators/in", "in")}}
  - : `in` 运算符用来判断对象是否拥有给定属性。
- {{JSxRef("Operators/instanceof", "instanceof")}}
  - : `instanceof` 运算符判断一个对象是否是另一个对象的实例。
- {{JSxRef("Operators/Less_than", "&lt;")}}（小于）
  - : 小于运算符。
- {{JSxRef("Operators/Greater_than", "&gt;")}}（大于）
  - : 大于运算符。
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
  - : 小于等于运算符。
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}
  - : 大于等于运算符。

> **备注：** `=>` 不是运算符，而是{{JSxRef("Functions/Arrow_functions", "箭头函数")}}的表示符。

### 相等运算符

如果相等，操作符返回的是布尔类型的 true，否则是 false。

- {{JSxRef("Operators/Equality", "==")}}
  - : 相等运算符。
- {{JSxRef("Operators/Inequality", "!=")}}
  - : 不等运算符。
- {{JSxRef("Operators/Strict_equality", "===")}}
  - : 全等运算符。
- {{JSxRef("Operators/Strict_inequality", "!==")}}
  - : 非全等运算符。

### 位移运算符

在二进制的基础上对数字进行移动操作

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
  - : 按位左移运算符。
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
  - : 按位右移运算符。
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : 按位无符号右移运算符。

### 二进制位运算符

二进制运算符将它们的操作数作为 32 个二进制位（0 或 1）的集合，并返回标准的 JavaScript 数值。

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}}
  - : 按位与（AND）。
- {{JSxRef("Operators/Bitwise_OR", "|")}}
  - : 按位或（OR）。
- {{JSxRef("Operators/Bitwise_XOR", "^")}}
  - : 位异或（XOR）。

### 二元逻辑运算符

逻辑运算符典型的用法是用于布尔（逻辑）值运算，它们返回布尔值。

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
  - : 逻辑与。
- {{JSxRef("Operators/Logical_OR", "||")}}
  - : 逻辑或。
- {{JSxRef("Operators/Nullish_coalescing_operator", "??")}}
  - : 空值合并运算符，如果 ?? 前面是 null 或 undefined，取后面的默认值。

### 可选链运算符

- {{JSxRef("Operators/Optional_chaining", "?.")}}
  - 如果引用是[空值](/zh-CN/docs/Glossary/nullish)（[`null`](/zh-CN/docs/Web/JavaScript/reference/Operators/null) 或 [`undefined`](/zh-CN/docs/Web/JavaScript/reference/Global_Objects/undefined)），可选链运算符将返回 `undefined` 而不是导致错误。

### 条件（三元）运算符

- {{JSxRef("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}
  - : 条件元素运算符把两个结果中其中一个符合运算逻辑的值返回。

### 赋值运算符

赋值元素符会将右边的操作数的值分配给左边的操作数，并将其值修改为右边操作数相等的值。

- {{JSxRef("Operators/Assignment", "=")}}
  - : 赋值运算符。
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
  - : 赋值乘积。
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
  - : 求幂赋值。
- {{JSxRef("Operators/Division_assignment", "/=")}}
  - : 赋值商。
- {{JSxRef("Operators/Remainder_assignment", "%=")}}
  - : 赋值求余。
- {{JSxRef("Operators/Addition_assignment", "+=")}}
  - : 赋值求和。
- {{JSxRef("Operators/Subtraction_assignment", "-=")}}
  - : 赋值求差。
- {{JSxRef("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : 左位移。
- {{JSxRef("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : 右位移。
- {{JSxRef("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : 无符号右位移。
- {{JSxRef("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : 赋值与。
- {{JSxRef("Operators/Bitwise_XOR_assignment", "^=")}}
  - : 赋值按位异或。
- {{JSxRef("Operators/Bitwise_OR_assignment", "|=")}}
  - : 赋值或。
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : 逻辑和赋值运算符。
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
  - : 逻辑或赋值运算符。
- {{JSxRef("Operators/Logical_nullish_assignment", "??=")}}
  - : 逻辑空赋值运算符。
- [`[a, b] = arr`, `{ a, b } = obj`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - : 解构赋值允许您使用类似于数组或对象字面量的语法将数组或对象的属性赋值给变量。

### 逗号运算符

- 逗号操作符 {{JSxRef("Operators/Comma_Operator", ",")}}
  - : 逗号操作符允许在一个判断状态中有多个表达式去进行运算并且最后返回最后一个表达式的值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
