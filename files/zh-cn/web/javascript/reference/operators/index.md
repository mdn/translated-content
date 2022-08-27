---
title: 表达式和运算符
slug: Web/JavaScript/Reference/Operators
---
{{jsSidebar("Operators")}}
该章节说明了 JavaScript 语言所有的运算符，表达式和关键字。

## 表达式和运算符分类

左侧工具栏是按字母表排序的列表。

### 主要表达式

JavaScript 中基本关键字和常用表达式。

- {{jsxref("Operators/this", "this")}}
  - : `this` 关键字指向函数的执行上下文。
- {{jsxref("Operators/function", "function")}}
  - : `function` 关键字定义了函数表达式。
- {{jsxref("Operators/class", "class")}}
  - : `class` 关键字定义了类表达式。
- {{jsxref("Operators/function*", "function*")}}
  - : `function*` 关键字定义了一个 generator 函数表达式。
- {{jsxref("Operators/yield", "yield")}}
  - : 暂停和恢复 generator 函数。
- {{jsxref("Operators/yield*", "yield*")}}
  - : 委派给另外一个 generator 函数或可迭代的对象。
- {{jsxref("Operators/async_function", "async function")}}
  - : `async function` 定义一个异步函数表达式。
- {{jsxref("Operators/await", "await")}}
  - : 暂停或恢复执行异步函数，并等待 promise 的 resolve/reject 回调。
- {{jsxref("Global_Objects/Array", "[]")}}
  - : 数组初始化/字面量语法。
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : 对象初始化/字面量语法。
- {{jsxref("Global_Objects/RegExp", "/ab+c/i")}}
  - : 正则表达式字面量语法。
- {{jsxref("Operators/Grouping", "( )")}}
  - : 分组操作符。

### 左表达式

左边的值是赋值的目标。

- {{jsxref("Operators/Property_accessors", "属性访问符", "", 1)}}
  - : 成员运算符提供了对对象的属性或方法的访问。
    (`object.property` 和 `object["property"]`).
- {{jsxref("Operators/new", "new")}}
  - : `new` 运算符创建了构造函数实例。
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
  - : 在构造器中，`new.target` 指向{{jsxref("Operators/new", "new")}}调用的构造器。
- {{jsxref("Operators/super", "super")}}
  - : `super` 关键字调用父类的构造器。
- {{jsxref("Operators/Spread_operator", "...obj")}}
  - : 展开运算符可以将一个可迭代的对象在函数调用的位置展开成为多个参数，或者在数组字面量中展开成多个数组元素。

### 自增和自减

前置/后置自增运算符和前置/后置自减运算符。

- {{jsxref("Operators/Arithmetic_Operators", "A++", "#Increment")}}
  - : 后置自增运算符。
- {{jsxref("Operators/Arithmetic_Operators", "A--", "#Decrement")}}
  - : 后置自减运算符。
- {{jsxref("Operators/Arithmetic_Operators", "++A", "#Increment")}}
  - : 前置自增运算符。
- {{jsxref("Operators/Arithmetic_Operators", "--A", "#Decrement")}}
  - : 前置自减运算符。

### 一元运算符

一元运算符只有一个操作数。

- {{jsxref("Operators/delete", "delete")}}
  - : `delete` 运算符用来删除对象的属性。
- {{jsxref("Operators/void", "void")}}
  - : `void` 运算符表示表达式放弃返回值。
- {{jsxref("Operators/typeof", "typeof")}}
  - : `typeof` 运算符用来判断给定对象的类型。
- {{jsxref("Operators/Arithmetic_Operators", "+", "#Unary_plus")}}
  - : 一元加运算符将操作转换为 Number 类型。
- {{jsxref("Operators/Arithmetic_Operators", "-", "#Unary_negation")}}
  - : 一元减运算符将操作转换为 Number 类型并取反。
- {{jsxref("Operators/Bitwise_Operators", "~", "#Bitwise_NOT")}}
  - : 按位非运算符。
- {{jsxref("Operators/Logical_Operators", "!", "#Logical_NOT")}}
  - : 逻辑非运算符。

### 算术运算符

算术运算符以二个数值（字面量或变量）作为操作数，并返回单个数值。

- {{jsxref("Operators/Arithmetic_Operators", "+", "#Addition")}}
  - : 加法运算符。
- {{jsxref("Operators/Arithmetic_Operators", "-", "#Subtraction")}}
  - : 减法运算符。
- {{jsxref("Operators/Arithmetic_Operators", "/", "#Division")}}
  - : 除法运算符。
- {{jsxref("Operators/Arithmetic_Operators", "*", "#Multiplication")}}
  - : 乘法运算符。
- {{jsxref("Operators/Arithmetic_Operators", "%", "#Remainder")}}
  - : 取模运算符。

### 关系运算符

比较运算符比较二个操作数并返回基于比较结果的`Boolean`值。

- {{jsxref("Operators/in", "in")}}
  - : `in 运算符用来判断对象是否拥有给定属性。`.
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : `instanceof` 运算符判断一个对象是否是另一个对象的实例。
- {{jsxref("Operators/Comparison_Operators", "&lt;", "#Less_than_operator")}}
  - : 小于运算符。
- {{jsxref("Operators/Comparison_Operators", "&gt;", "#Greater_than_operator")}}
  - : 大于运算符。
- {{jsxref("Operators/Comparison_Operators", "&lt;=", "#Less_than_or_equal_operator")}}
  - : 小于等于运算符。
- {{jsxref("Operators/Comparison_Operators", "&gt;=", "#Greater_than_or_equal_operator")}}
  - : 大于等于运算符。

> **备注：** 不是运算符，而是{{jsxref("Functions/Arrow_functions", "箭头函数")}}的表示符。

### 相等运算符

如果相等，操作符返回的是布尔类型的 true，否则是 false。

- {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}}
  - : 相等 运算符。
- {{jsxref("Operators/Comparison_Operators", "!=", "#Inequality")}}
  - : 不等 运算符。
- {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}
  - : 全等 运算符。
- {{jsxref("Operators/Comparison_Operators", "!==", "#Nonidentity")}}
  - : 非全等 运算符。

### 位移运算符

在二进制的基础上对数字进行移动操作

- {{jsxref("Operators/Bitwise_Operators", "&lt;&lt;", "#Left_shift")}}
  - : 按位左移运算符。
- {{jsxref("Operators/Bitwise_Operators", "&gt;&gt;", "#Right_shift")}}
  - : 按位右移运算符。
- {{jsxref("Operators/Bitwise_Operators", "&gt;&gt;&gt;", "#Unsigned_right_shift")}}
  - : 按位无符号右移运算符。

### 二进制位运算符

二进制运算符将它们的操作数作为 32 个二进制位（0 或 1）的集合，并返回标准的 JavaScript 数值。

- {{jsxref("Operators/Bitwise_Operators", "&amp;", "#Bitwise_AND")}}
  - : 二进制位与（AND）。
- {{jsxref("Operators/Bitwise_Operators", "|", "#Bitwise_OR")}}
  - : 二进制位或（OR）。
- {{jsxref("Operators/Bitwise_Operators", "^", "#Bitwise_XOR")}}
  - : 二进制位异或（XOR）。

### 二元逻辑运算符

逻辑运算符典型的用法是用于布尔 (逻辑) 值运算，它们返回布尔值。

- {{jsxref("Operators/Logical_Operators", "&amp;&amp;", "#Logical_AND")}}
  - : 逻辑与。
- {{jsxref("Operators/Logical_Operators", "||", "#Logical_OR")}}
  - : 逻辑或。
- {{JSxRef("Operators/Nullish_coalescing_operator", "??")}}
  - : 空值合并运算符，如果 ?? 前面是 null 或 undefined，取后面的默认值

### 条件（三元）运算符

- {{jsxref("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}
  - : 条件元素运算符把两个结果中其中一个符合运算逻辑的值返回。

### 赋值运算符

赋值元素符会将右边的操作数的值分配给左边的操作数，并将其值修改为右边操作数相等的值。

- {{jsxref("Operators/Assignment_Operators", "=", "#Assignment")}}
  - : 赋值运算符。
- {{jsxref("Operators/Assignment_Operators", "*=", "#Multiplication_assignment")}}
  - : 赋值乘积。
- {{jsxref("Operators/Assignment_Operators", "/=", "#Division_assignment")}}
  - : 赋值商。
- {{jsxref("Operators/Assignment_Operators", "%=", "#Remainder_assignment")}}
  - : 赋值求余。
- {{jsxref("Operators/Assignment_Operators", "+=", "#Addition_assignment")}}
  - : 赋值求和。
- {{jsxref("Operators/Assignment_Operators", "-=", "#Subtraction_assignment")}}
  - : 赋值求差。
- {{jsxref("Operators/Assignment_Operators", "&lt;&lt;=", "#Left_shift_assignment")}}
  - : 左位移。
- {{jsxref("Operators/Assignment_Operators", "&gt;&gt;=", "#Right_shift_assignment")}}
  - : 右位移。
- {{jsxref("Operators/Assignment_Operators", "&gt;&gt;&gt;=", "#Unsigned_right_shift_assignment")}}
  - : 无符号右位移。
- {{jsxref("Operators/Assignment_Operators", "&amp;=", "#Bitwise_AND_assignment")}}
  - : 赋值与。
- {{jsxref("Operators/Assignment_Operators", "^=", "#Bitwise_XOR_assignment")}}
  - : 赋值按位异或。
- {{jsxref("Operators/Assignment_Operators", "|=", "#Bitwise_OR_assignment")}}
  - : 赋值或。
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : 逻辑和赋值运算符。
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
  - : 逻辑或赋值运算符。
- {{JSxRef("Operators/Logical_nullish_assignment", "??=")}}
  - : 逻辑空赋值运算符。
- {{jsxref("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
  {{jsxref("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}
  - : 解构赋值允许你分配数组或者对象变量的属性通过使用规定的语法，其看起来和数组和对象字面量很相似。
- 逗号操作符 {{jsxref("Operators/Comma_Operator", ",")}}
  - : 逗号操作符允许在一个判断状态中有多个表达式去进行运算并且最后返回最后一个表达式的值。
- 非标准化特性 {{JSxRef("Operators/Expression_closures", "Expression closures", "", 1)}} {{non-standard_inline}}{{Deprecated_Inline}}
  - : 闭包表达式语法是一个缩写简单的函数。
- {{JSxRef("Operators/Legacy_generator_function", "Legacy generator function", "", 1)}} {{non-standard_inline}}{{Deprecated_Inline}}
  - : function 关键字能用来定义表达式内部未执行完的 function 的余下功能。 为了能执行 function 内部余下的代码，这个 function 的内部至少包含一个{{jsxref("Operators/yield", "yield")}} 表达式。
- {{JSxRef("Operators/Array_comprehensions", "[for (x of y) x]")}} {{non-standard_inline}}{{Deprecated_Inline}}
  - : 数组解析
- {{JSxRef("Operators/Generator_comprehensions", "(for (x of y) y)")}} {{non-standard_inline}}{{Deprecated_Inline}}
  - : 生成器解析

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [运算符优先级](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
