---
title: JavaScript 參考文件
slug: Web/JavaScript/Reference
---

在 MDN 的 JavaScript 分區中，這一部分被作爲 Javascript 的資料庫。閱讀[關於該參考](/zh-TW/docs/Web/JavaScript/Reference)以了解更多。

## 全域物件

本章節記錄了所有 [JavaScript 標準內建物件](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects) 以及其方法與屬性。

### 數值屬性

- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}
- {{JSxRef("globalThis")}}

### 函數屬性

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("isFinite()")}}
- {{JSxRef("isNaN()")}}
- {{JSxRef("parseFloat()")}}
- {{JSxRef("parseInt()")}}
- {{JSxRef("decodeURI()")}}
- {{JSxRef("decodeURIComponent()")}}
- {{JSxRef("encodeURI()")}}
- {{JSxRef("encodeURIComponent()")}}

### 基礎物件

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### Error

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("InternalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}

### 數字與日期

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}

### 文字處理

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

### 具索引的集合

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

### 具鍵值的集合

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### 結構化資料

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("DataView")}}
- {{JSxRef("JSON")}}

### 控制抽象化物件

- {{JSxRef("Promise")}}
- {{JSxRef("Generator")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncFunction")}}

### Reflection

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### 國際化

- {{JSxRef("Intl")}}
- {{JSxRef("Intl/Collator", "Intl.Collator")}}
- {{JSxRef("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{JSxRef("Intl/ListFormat", "Intl.ListFormat")}}
- {{JSxRef("Intl/NumberFormat", "Intl.NumberFormat")}}
- {{JSxRef("Intl/PluralRules", "Intl.PluralRules")}}
- {{JSxRef("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
- {{JSxRef("Intl/Locale", "Intl.Locale")}}

### WebAssembly

- [`WebAssembly`](/zh-TW/docs/WebAssembly/Reference/JavaScript_interface)
- [`WebAssembly.Module`](/zh-TW/docs/WebAssembly/Reference/JavaScript_interface/Module)
- [`WebAssembly.Instance`](/zh-TW/docs/WebAssembly/Reference/JavaScript_interface/Instance)
- [`WebAssembly.Memory`](/zh-TW/docs/WebAssembly/Reference/JavaScript_interface/Memory)
- [`WebAssembly.Table`](/zh-TW/docs/WebAssembly/Reference/JavaScript_interface/Table)
- [`WebAssembly.CompileError`](/zh-TW/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
- [`WebAssembly.LinkError`](/zh-TW/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
- [`WebAssembly.RuntimeError`](/zh-TW/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)

## 敘述句

本章節記錄了所有 [JavaScript 敘述句與宣告](/zh-TW/docs/Web/JavaScript/Reference/Statements)。

### 流程控制

- {{jsxref("Statements/block", "Block")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/Empty", "Empty")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}

### 宣告

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}

### 函數與類別

- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Statements/class", "class")}}

### 迭代

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
- {{jsxref("Statements/while", "while")}}

### Other

- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/label", "label")}}
- {{jsxref("Statements/with", "with")}}

## 表示法與運算子

本章節記錄了所有 [JavaScript 表示法與運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators)。

### 主要運算式

- {{JSxRef("this")}}
- {{JSxRef("Operators/function", "function")}}
- {{JSxRef("Operators/class", "class")}}
- {{JSxRef("Operators/function*", "function*")}}
- {{JSxRef("Operators/yield", "yield")}}
- {{JSxRef("Operators/yield*", "yield*")}}
- {{JSxRef("Operators/async_function", "async function")}}
- {{JSxRef("Operators/await", "await")}}
- {{JSxRef("Array", "[]")}}
- {{JSxRef("Operators/Object_initializer", "{}")}}
- {{JSxRef("RegExp", "/ab+c/i")}}
- {{JSxRef("Operators/Grouping", "( )")}}
- {{JSxRef("Operators/null", "null")}}

### 左手邊運算式

- {{JSxRef("Operators/Property_accessors", "Property accessors", "", 1)}}
- {{JSxRef("new")}}
- {{JSxRef("Operators/new.target", "new.target")}}
- {{JSxRef("Operators/super", "super")}}
- {{JSxRef("Operators/Spread_syntax", "...obj")}}

### 遞增與遞減

- {{JSxRef("Operators", "A++", "#Increment")}}
- {{JSxRef("Operators", "A--", "#Decrement")}}
- {{JSxRef("Operators", "++A", "#Increment")}}
- {{JSxRef("Operators", "--A", "#Decrement")}}

### 一元運算子

- {{JSxRef("delete")}}
- {{JSxRef("Operators/void", "void")}}
- {{JSxRef("Operators/typeof", "typeof")}}
- {{JSxRef("Operators", "+", "#Unary_plus")}}
- {{JSxRef("Operators", "-", "#Unary_negation")}}
- {{JSxRef("Operators", "~", "#Bitwise_NOT")}}
- {{JSxRef("Operators", "!", "#Logical_NOT")}}

### 算術運算子

- {{JSxRef("Operators", "+", "#Addition")}}
- {{JSxRef("Operators", "-", "#Subtraction")}}
- {{JSxRef("Operators", "/", "#Division")}}
- {{JSxRef("Operators", "*", "#Multiplication")}}
- {{JSxRef("Operators", "%", "#Remainder")}}
- {{JSxRef("Operators", "**", "#Exponentiation")}}

### 關係運算子

- {{JSxRef("Operators/in", "in")}}
- {{JSxRef("Operators/instanceof", "instanceof")}}
- {{JSxRef("Operators", "&lt;", "#Less_than_operator")}}
- {{JSxRef("Operators", "&gt;", "#Greater_than_operator")}}
- {{JSxRef("Operators", "&lt;=", "#Less_than_or_equal_operator")}}
- {{JSxRef("Operators", "&gt;=", "#Greater_than_or_equal_operator")}}

### 相等運算子

- {{JSxRef("Operators", "==", "#Equality")}}
- {{JSxRef("Operators", "!=", "#Inequality")}}
- {{JSxRef("Operators", "===", "#Identity")}}
- {{JSxRef("Operators", "!==", "#Nonidentity")}}

### 位元移位運算子

- {{JSxRef("Operators", "&lt;&lt;", "#Left_shift")}}
- {{JSxRef("Operators", "&gt;&gt;", "#Right_shift")}}
- {{JSxRef("Operators", "&gt;&gt;&gt;", "#Unsigned_right_shift")}}

### 二元位元運算子

- {{JSxRef("Operators", "&amp;", "#Bitwise_AND")}}
- {{JSxRef("Operators", "|", "#Bitwise_OR")}}
- {{JSxRef("Operators", "^", "#Bitwise_XOR")}}

### 二元邏輯運算子

- {{JSxRef("Operators", "&amp;&amp;", "#Logical_AND")}}
- {{JSxRef("Operators", "||", "#Logical_OR")}}

### 條件(三元)運算子

- {{JSxRef("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}

### 賦值運算子

- {{JSxRef("Operators", "=", "#Assignment")}}
- {{JSxRef("Operators", "*=", "#Multiplication_assignment")}}
- {{JSxRef("Operators", "/=", "#Division_assignment")}}
- {{JSxRef("Operators", "%=", "#Remainder_assignment")}}
- {{JSxRef("Operators", "+=", "#Addition_assignment")}}
- {{JSxRef("Operators", "-=", "#Subtraction_assignment")}}
- {{JSxRef("Operators", "&lt;&lt;=", "#Left_shift_assignment")}}
- {{JSxRef("Operators", "&gt;&gt;=", "#Right_shift_assignment")}}
- {{JSxRef("Operators", "&gt;&gt;&gt;=", "#Unsigned_right_shift_assignment")}}
- {{JSxRef("Operators", "&amp;=", "#Bitwise_AND_assignment")}}
- {{JSxRef("Operators", "^=", "#Bitwise_XOR_assignment")}}
- {{JSxRef("Operators", "|=", "#Bitwise_OR_assignment")}}
- {{JSxRef("Operators/Destructuring", "[a, b] = [1, 2]")}}
- {{JSxRef("Operators/Destructuring", "{a, b} = {a:1, b:2}")}}

## 函數

本章節說明如何使用 [JavaScript 函數](/zh-TW/docs/Web/JavaScript/Reference/Functions) 來開發你的應用程式。

- [`arguments`](/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments)
- [Arrow functions](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](/zh-TW/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameters](/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## 其他參考頁面

- [Lexical grammar](/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Data types and data structures](/zh-TW/docs/Web/JavaScript/Guide/Data_structures)
- [Strict mode](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode)
- [Deprecated features](/zh-TW/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
