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
- {{JSxRef("Global_Objects/isFinite", "isFinite()")}}
- {{JSxRef("Global_Objects/isNaN", "isNaN()")}}
- {{JSxRef("Global_Objects/parseFloat", "parseFloat()")}}
- {{JSxRef("Global_Objects/parseInt", "parseInt()")}}
- {{JSxRef("Global_Objects/decodeURI", "decodeURI()")}}
- {{JSxRef("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{JSxRef("Global_Objects/encodeURI", "encodeURI()")}}
- {{JSxRef("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}

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
- {{JSxRef("Global_Objects/Collator", "Intl.Collator")}}
- {{JSxRef("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{JSxRef("Global_Objects/ListFormat", "Intl.ListFormat")}}
- {{JSxRef("Global_Objects/NumberFormat", "Intl.NumberFormat")}}
- {{JSxRef("Global_Objects/PluralRules", "Intl.PluralRules")}}
- {{JSxRef("Global_Objects/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
- {{JSxRef("Global_Objects/Locale", "Intl.Locale")}}

### WebAssembly

- {{JSxRef("WebAssembly")}}
- {{JSxRef("WebAssembly.Module")}}
- {{JSxRef("WebAssembly.Instance")}}
- {{JSxRef("WebAssembly.Memory")}}
- {{JSxRef("WebAssembly.Table")}}
- {{JSxRef("WebAssembly.CompileError")}}
- {{JSxRef("WebAssembly.LinkError")}}
- {{JSxRef("WebAssembly.RuntimeError")}}

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

### 左手邊運算式

- {{JSxRef("Operators/Property_accessors", "Property accessors", "", 1)}}
- {{JSxRef("Operators/new", "new")}}
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
- {{JSxRef("Operators/super", "super")}}
- {{JSxRef("Operators/Spread_syntax", "...obj")}}

### 遞增與遞減

- {{JSxRef("Operators/Arithmetic_Operators", "A++", "#Increment")}}
- {{JSxRef("Operators/Arithmetic_Operators", "A--", "#Decrement")}}
- {{JSxRef("Operators/Arithmetic_Operators", "++A", "#Increment")}}
- {{JSxRef("Operators/Arithmetic_Operators", "--A", "#Decrement")}}

### 一元運算子

- {{JSxRef("Operators/delete", "delete")}}
- {{JSxRef("Operators/void", "void")}}
- {{JSxRef("Operators/typeof", "typeof")}}
- {{JSxRef("Operators/Arithmetic_Operators", "+", "#Unary_plus")}}
- {{JSxRef("Operators/Arithmetic_Operators", "-", "#Unary_negation")}}
- {{JSxRef("Operators/Bitwise_Operators", "~", "#Bitwise_NOT")}}
- {{JSxRef("Operators/Logical_Operators", "!", "#Logical_NOT")}}

### 算術運算子

- {{JSxRef("Operators/Arithmetic_Operators", "+", "#Addition")}}
- {{JSxRef("Operators/Arithmetic_Operators", "-", "#Subtraction")}}
- {{JSxRef("Operators/Arithmetic_Operators", "/", "#Division")}}
- {{JSxRef("Operators/Arithmetic_Operators", "*", "#Multiplication")}}
- {{JSxRef("Operators/Arithmetic_Operators", "%", "#Remainder")}}
- {{JSxRef("Operators/Arithmetic_Operators", "**", "#Exponentiation")}}

### 關係運算子

- {{JSxRef("Operators/in", "in")}}
- {{JSxRef("Operators/instanceof", "instanceof")}}
- {{JSxRef("Operators/Comparison_Operators", "&lt;", "#Less_than_operator")}}
- {{JSxRef("Operators/Comparison_Operators", "&gt;", "#Greater_than_operator")}}
- {{JSxRef("Operators/Comparison_Operators", "&lt;=", "#Less_than_or_equal_operator")}}
- {{JSxRef("Operators/Comparison_Operators", "&gt;=", "#Greater_than_or_equal_operator")}}

### 相等運算子

- {{JSxRef("Operators/Comparison_Operators", "==", "#Equality")}}
- {{JSxRef("Operators/Comparison_Operators", "!=", "#Inequality")}}
- {{JSxRef("Operators/Comparison_Operators", "===", "#Identity")}}
- {{JSxRef("Operators/Comparison_Operators", "!==", "#Nonidentity")}}

### 位元移位運算子

- {{JSxRef("Operators/Bitwise_Operators", "&lt;&lt;", "#Left_shift")}}
- {{JSxRef("Operators/Bitwise_Operators", "&gt;&gt;", "#Right_shift")}}
- {{JSxRef("Operators/Bitwise_Operators", "&gt;&gt;&gt;", "#Unsigned_right_shift")}}

### 二元位元運算子

- {{JSxRef("Operators/Bitwise_Operators", "&amp;", "#Bitwise_AND")}}
- {{JSxRef("Operators/Bitwise_Operators", "|", "#Bitwise_OR")}}
- {{JSxRef("Operators/Bitwise_Operators", "^", "#Bitwise_XOR")}}

### 二元邏輯運算子

- {{JSxRef("Operators/Logical_Operators", "&amp;&amp;", "#Logical_AND")}}
- {{JSxRef("Operators/Logical_Operators", "||", "#Logical_OR")}}

### 條件(三元)運算子

- {{JSxRef("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}

### 賦值運算子

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
