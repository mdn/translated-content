---
title: JavaScript 参考
slug: Web/JavaScript/Reference
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jsSidebar}}

JavaScript 参考提供了有关 JavaScript 语言的内容资料库。这里详细描述了整个语言。在编写 JavaScript 代码时，你经常会参考这些页面（因此，标题为“JavaScript 参考”）。

JavaScript 语言旨在用于更加广泛的环境，不论是浏览器、服务端脚本还是其他类似的环境。在大多数情况下，本参考与环境无关，且不针对 web 浏览器环境。

如果你对 JavaScript 不熟悉，请先阅读[指南](/zh-CN/docs/Web/JavaScript/Guide)。一旦你牢牢地掌握了基础知识，就可以使用参考资料，来获取有关各个对象和语言结构的更加详细的知识。

## 内置对象

[JavaScript 标准内置对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)，以及它们的方法和属性。

### 值属性

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### Function 属性

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("isFinite()")}}
- {{jsxref("isNaN()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("escape()")}} {{deprecated_inline}}
- {{jsxref("unescape()")}} {{deprecated_inline}}

### 基本对象

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}

### 错误对象

- {{jsxref("Error")}}
- {{jsxref("AggregateError")}}
- {{jsxref("EvalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}
- {{jsxref("InternalError")}} {{non-standard_inline}}

### 数字和日期

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}

### 文本处理

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### 索引集合

- {{jsxref("Array")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### 键集合类

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### 结构化数据

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("Atomics")}}
- {{jsxref("JSON")}}

### 内存管理

- {{jsxref("WeakRef")}}
- {{jsxref("FinalizationRegistry")}}

### 控制抽象对象

- {{jsxref("Iterator")}}
- {{jsxref("AsyncIterator")}}
- {{jsxref("Promise")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Generator")}}
- {{jsxref("AsyncGenerator")}}
- {{jsxref("AsyncFunction")}}

### 反射

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### 国际化

- {{jsxref("Intl")}}
- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.Segmenter")}}

## 语句

[JavaScript 语句和声明](/zh-CN/docs/Web/JavaScript/Reference/Statements)

### 控制流

- {{jsxref("Statements/return", "return")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Statements/try...catch", "try...catch")}}

### 声明变量

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}

### 函数和类

- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}

### 迭代

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
- {{jsxref("Statements/while", "while")}}

### 其他

- {{jsxref("Statements/Empty", "空语句", "", 1)}}
- {{jsxref("Statements/block", "块语句", "", 1)}}
- {{jsxref("Statements/Expression_statement", "表达式语句", "", 1)}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/label", "标记语句", "", 1)}}
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}

## 表达式和运算符

[JavaScript 表达式和运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators)。

### 主要表达式

- {{jsxref("Operators/this", "this")}}
- [字面量](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#字面量)
- {{jsxref("Array", "[]")}}
- {{jsxref("Operators/Object_initializer", "{}")}}
- {{jsxref("Operators/function", "function")}}
- {{jsxref("Operators/class", "class")}}
- {{jsxref("Operators/function*", "function*")}}
- {{jsxref("Operators/async_function", "async function")}}
- {{jsxref("Operators/async_function*", "async function*")}}
- {{jsxref("RegExp", "/ab+c/i")}}
- {{jsxref("Template_literals", "`string`")}}
- {{jsxref("Operators/Grouping", "( )")}}

### 左值表达式

- {{jsxref("Operators/Property_accessors", "属性访问器", "", 1)}}
- {{jsxref("Operators/Optional_chaining", "?.")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Operators/new%2Etarget", "new.target")}}
- {{jsxref("Operators/import%2Emeta", "import.meta")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Operators/import", "import()")}}

### 自增和自减

- {{jsxref("Operators/Increment", "A++")}}
- {{jsxref("Operators/Decrement", "A--")}}
- {{jsxref("Operators/Increment", "++A")}}
- {{jsxref("Operators/Decrement", "--A")}}

### 一元运算符

- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Operators/Unary_plus", "+")}}
- {{jsxref("Operators/Unary_negation", "-")}}
- {{jsxref("Operators/Bitwise_NOT", "~")}}
- {{jsxref("Operators/Logical_NOT", "!")}}
- {{jsxref("Operators/await", "await")}}

### 算术运算符

- {{jsxref("Operators/Exponentiation", "**")}}
- {{jsxref("Operators/Multiplication", "*")}}
- {{jsxref("Operators/Division", "/")}}
- {{jsxref("Operators/Remainder", "%")}}
- {{jsxref("Operators/Addition", "+")}}（加法）
- {{jsxref("Operators/Subtraction", "-")}}

### 关系运算符

- {{jsxref("Operators/Less_than", "&lt;")}}（小于）
- {{jsxref("Operators/Greater_than", "&gt;")}}（大于）
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/in", "in")}}

### 相等运算符

- {{jsxref("Operators/Equality", "==")}}
- {{jsxref("Operators/Inequality", "!=")}}
- {{jsxref("Operators/Strict_equality", "===")}}
- {{jsxref("Operators/Strict_inequality", "!==")}}

### 位移运算符

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}

### 二进制运算符

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
- {{jsxref("Operators/Bitwise_OR", "|")}}
- {{jsxref("Operators/Bitwise_XOR", "^")}}

### 二元运算符

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
- {{jsxref("Operators/Logical_OR", "||")}}
- {{jsxref("Operators/Nullish_coalescing", "??")}}

### 条件（三元）运算符

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}

### 赋值运算符

- {{jsxref("Operators/Assignment", "=")}}
- {{jsxref("Operators/Multiplication_assignment", "*=")}}
- {{jsxref("Operators/Division_assignment", "/=")}}
- {{jsxref("Operators/Remainder_assignment", "%=")}}
- {{jsxref("Operators/Addition_assignment", "+=")}}
- {{jsxref("Operators/Subtraction_assignment", "-=")}}
- {{jsxref("Operators/Left_shift_assignment", "&lt;&lt;=")}}
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
- [`[a, b] = arr`, `{ a, b } = obj`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Yield 运算符

- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}

### 展开语法

- {{jsxref("Operators/Spread_syntax", "...obj")}}

### 逗号运算符

- {{jsxref("Operators/Comma_operator", ",")}}

## 函数

[JavaScript 函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)。

- {{jsxref("Functions/Arrow_functions", "箭头函数", "", 1)}}
- {{jsxref("Functions/Default_parameters", "默认参数", "", 1)}}
- {{jsxref("Functions/rest_parameters", "剩余参数", "", 1)}}
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Functions/Method_definitions", "方法定义", "", 1)}}
- {{jsxref("Functions/get", "getter", "", 1)}}
- {{jsxref("Functions/set", "setter", "", 1)}}

## 类

[JavaScript 类](/zh-CN/docs/Web/JavaScript/Reference/Classes)。

- {{jsxref("Classes/Constructor", "constructor")}}
- {{jsxref("Classes/extends", "extends")}}
- [私有属性](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_properties)
- [公有类字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{jsxref("Classes/static", "static")}}
- [静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## 附加参考页面

- {{jsxref("Lexical_grammar", "词法语法", "", 1)}}
- [数据类型和数据结构](/zh-CN/docs/Web/JavaScript/Data_structures)
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
- [尾后逗号](/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas)
- [错误参考](/zh-CN/docs/Web/JavaScript/Reference/Errors)
- {{jsxref("Strict_mode", "严格模式", "", 1)}}
- {{jsxref("Deprecated_and_obsolete_features", "废弃特性", "", 1)}}
