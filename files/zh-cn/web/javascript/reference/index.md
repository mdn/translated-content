---
title: JavaScript 参考
slug: Web/JavaScript/Reference
---

{{JsSidebar}}在 MDN 的 JavaScript 分区中，这一部分被作为 Javascript 的资料库。阅读[关于该参考](/zh-CN/docs/Web/JavaScript/Reference/About)以了解更多。

## 内置

{{JSxRef("Global_Objects", "JavaScript 标准内置对象")}}, 以及他们的方法和属性。

### 值属性

- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}
- {{JSxRef("globalThis")}}

### Function 属性

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("Global_Objects/isFinite", "isFinite()")}}
- {{JSxRef("Global_Objects/isNaN", "isNaN()")}}
- {{JSxRef("Global_Objects/parseFloat", "parseFloat()")}}
- {{JSxRef("Global_Objects/parseInt", "parseInt()")}}
- {{JSxRef("Global_Objects/decodeURI", "decodeURI()")}}
- {{JSxRef("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{JSxRef("Global_Objects/encodeURI", "encodeURI()")}}
- {{JSxRef("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}

### 基本对象

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### 错误对象

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("InternalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}

### Numbers & dates

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}

### 文本处理

- {{JSxRef("String")}} {{JSxRef("RegExp")}}

### 索引集合类

- {{JSxRef("Array")}}
- {{JSxRef("Int8Array")}}
- {{JSxRef("Uint8Array")}}
- {{JSxRef("Uint8ClampedArray")}}
- {{JSxRef("Int16Array")}}
- {{JSxRef("Uint16Array")}}
- {{JSxRef("Int32Array")}}
- {{JSxRef("Uint32Array")}}
- {{JSxRef("Float32Array")}}
- {{JSxRef("Float64Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}

### Keyed collections

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### 结构化数据

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("DataView")}}
- {{JSxRef("JSON")}}

### 控制抽象化

- {{JSxRef("Promise")}}
- {{JSxRef("Generator")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncFunction")}}

### 反射

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### 国际化

- {{JSxRef("Intl")}}
- {{JSxRef("Global_Objects/Intl/Collator", "Intl.Collator")}}
- {{JSxRef("Global_Objects/Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{JSxRef("Global_Objects/Intl/DisplayNames", "Intl.DisplayNames")}}
- {{JSxRef("Global_Objects/Intl/ListFormat", "Intl.ListFormat")}}
- {{JSxRef("Global_Objects/Intl/Locale", "Intl.Locale")}}
- {{JSxRef("Global_Objects/Intl/NumberFormat", "Intl.NumberFormat")}}
- {{JSxRef("Global_Objects/Intl/PluralRules", "Intl.PluralRules")}}
- {{JSxRef("Global_Objects/Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}

### WebAssembly

- {{JSxRef("WebAssembly")}}
- {{JSxRef("WebAssembly.Module")}}
- {{JSxRef("WebAssembly.Instance")}}
- {{JSxRef("WebAssembly.Memory")}}
- {{JSxRef("WebAssembly.Table")}}
- {{JSxRef("WebAssembly.CompileError")}}
- {{JSxRef("WebAssembly.LinkError")}}
- {{JSxRef("WebAssembly.RuntimeError")}}

## 语句

{{JSxRef("Statements", "语句和声明")}}

### 控制流

- {{jsxref("Statements/block", "Block")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/Empty", "Empty")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}

### 声明

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}

### 函数和类

- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Statements/class", "class")}}

### 迭代

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/for_each...in", "for each...in")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
- {{jsxref("Statements/while", "while")}}

### 其他

- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/label", "label")}}
- {{jsxref("Statements/with", "with")}}

## 表达式和运算符

{{JSxRef("Operators", "表达式和运算符")}}.

### Primary expressions

- {{JSxRef("Operators/this", "this")}}
- {{JSxRef("Operators/function", "function")}}
- {{JSxRef("Operators/class", "class")}}
- {{JSxRef("Operators/function*", "function*")}}
- {{JSxRef("Operators/yield", "yield")}}
- {{JSxRef("Operators/yield*", "yield*")}}
- {{JSxRef("Operators/async_function", "async function")}}
- {{JSxRef("Operators/await", "await")}}
- {{JSxRef("Global_Objects/Array", "[]")}}
- {{JSxRef("Operators/Object_initializer", "{}")}}
- {{JSxRef("Global_Objects/RegExp", "/ab+c/i")}}
- {{JSxRef("Operators/Grouping", "( )")}}
- {{JSxRef("null")}}

### Left-hand-side expressions

- {{JSxRef("Operators/Property_accessors", "Property accessors", "", 1)}}
- {{JSxRef("Operators/new", "new")}}
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
- {{JSxRef("Operators/super", "super")}}
- {{JSxRef("Operators/Spread_syntax", "...obj")}}

### Increment & decrement

- {{JSxRef("Operators/Arithmetic_Operators", "A++", "#Increment")}}
- {{JSxRef("Operators/Arithmetic_Operators", "A--", "#Decrement")}}
- {{JSxRef("Operators/Arithmetic_Operators", "++A", "#Increment")}}
- {{JSxRef("Operators/Arithmetic_Operators", "--A", "#Decrement")}}

### 一元运算符

- {{JSxRef("Operators/delete", "delete")}}
- {{JSxRef("Operators/void", "void")}}
- {{JSxRef("Operators/typeof", "typeof")}}
- {{JSxRef("Operators/Arithmetic_Operators", "+", "#Unary_plus")}}
- {{JSxRef("Operators/Arithmetic_Operators", "-", "#Unary_negation")}}
- {{JSxRef("Operators/Bitwise_Operators", "~", "#Bitwise_NOT")}}
- {{JSxRef("Operators/Logical_Operators", "!", "#Logical_NOT")}}

### 算术运算符

- {{JSxRef("Operators/Arithmetic_Operators", "+", "#Addition")}}
- {{JSxRef("Operators/Arithmetic_Operators", "-", "#Subtraction")}}
- {{JSxRef("Operators/Arithmetic_Operators", "/", "#Division")}}
- {{JSxRef("Operators/Arithmetic_Operators", "*", "#Multiplication")}}
- {{JSxRef("Operators/Arithmetic_Operators", "%", "#Remainder")}}
- {{JSxRef("Operators/Arithmetic_Operators", "**", "#Exponentiation")}}

### 关系运算符

- {{JSxRef("Operators/in", "in")}}
- {{JSxRef("Operators/instanceof", "instanceof")}}
- {{JSxRef("Operators/Comparison_Operators", "&lt;", "#Less_than_operator")}}
- {{JSxRef("Operators/Comparison_Operators", "&gt;", "#Greater_than_operator")}}
- {{JSxRef("Operators/Comparison_Operators", "&lt;=", "#Less_than_or_equal_operator")}}
- {{JSxRef("Operators/Comparison_Operators", "&gt;=", "#Greater_than_or_equal_operator")}}

### 相等运算符

- {{JSxRef("Operators/Comparison_Operators", "==", "#Equality")}}
- {{JSxRef("Operators/Comparison_Operators", "!=", "#Inequality")}}
- {{JSxRef("Operators/Comparison_Operators", "===", "#Identity")}}
- {{JSxRef("Operators/Comparison_Operators", "!==", "#Nonidentity")}}

### 位移运算符

- {{JSxRef("Operators/Bitwise_Operators", "&lt;&lt;", "#Left_shift")}}
- {{JSxRef("Operators/Bitwise_Operators", "&gt;&gt;", "#Right_shift")}}
- {{JSxRef("Operators/Bitwise_Operators", "&gt;&gt;&gt;", "#Unsigned_right_shift")}}

### 位运算

- {{JSxRef("Operators/Bitwise_Operators", "&amp;", "#Bitwise_AND")}}
- {{JSxRef("Operators/Bitwise_Operators", "|", "#Bitwise_OR")}}
- {{JSxRef("Operators/Bitwise_Operators", "^", "#Bitwise_XOR")}}

### 逻辑运算

- {{JSxRef("Operators/Logical_Operators", "&amp;&amp;", "#Logical_AND")}}
- {{JSxRef("Operators/Logical_Operators", "||", "#Logical_OR")}}

### 条件运算符

- {{JSxRef("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}

### 赋值操作符

- {{JSxRef("Operators/Assignment_Operators", "=", "#Assignment")}}
- {{JSxRef("Operators/Assignment_Operators", "*=", "#Multiplication_assignment")}}
- {{JSxRef("Operators/Assignment_Operators", "/=", "#Division_assignment")}}
- {{JSxRef("Operators/Assignment_Operators", "%=", "#Remainder_assignment")}}
- {{JSxRef("Operators/Assignment_Operators", "+=", "#Addition_assignment")}}
- {{JSxRef("Operators/Assignment_Operators", "-=", "#Subtraction_assignment")}}
- {{JSxRef("Operators/Assignment_Operators", "&lt;&lt;=", "#Left_shift_assignment")}}
- {{JSxRef("Operators/Assignment_Operators", "&gt;&gt;=", "#Right_shift_assignment")}}
- {{JSxRef("Operators/Assignment_Operators", "&gt;&gt;&gt;=", "#Unsigned_right_shift_assignment")}}
- {{JSxRef("Operators/Assignment_Operators", "&amp;=", "#Bitwise_AND_assignment")}}
- {{JSxRef("Operators/Assignment_Operators", "^=", "#Bitwise_XOR_assignment")}}
- {{JSxRef("Operators/Assignment_Operators", "|=", "#Bitwise_OR_assignment")}}
- {{JSxRef("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
- {{JSxRef("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}

## 函数

本章介绍如何使用 [JavaScript 函数](/zh-CN/docs/Web/JavaScript/Reference/Functions) 来开发应用程序。

- [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)
- [箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## 附加参考页面

- [词法文法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)
- [数据类型和数据结构](/zh-CN/docs/Web/JavaScript/Data_structures)
- [严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
- [过时的特性](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
