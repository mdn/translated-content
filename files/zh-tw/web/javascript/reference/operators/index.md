---
title: 運算式與運算子
slug: Web/JavaScript/Reference/Operators
---

本章節記錄了所有 JavaScript 運算式、運算子以及關鍵字。

## 運算式與運算子分類

以字母排列的清單請參考左側的側邊欄。

### 主要運算式

在 JavaScript 中基本的關鍵字與一般的運算式。

- {{jsxref("Operators/this", "this")}}
  - : `this` 關鍵字可以參考執行函數的所在位置。
- {{jsxref("Operators/function", "function")}}
  - : `function` 關鍵字可以定義一個函數運算式。
- {{jsxref("Operators/class", "class")}}
  - : `class` 關鍵字可以定義一個類別運算式。
- {{jsxref("Operators/function*", "function*")}}
  - : `function*` 關鍵字可以定義一個 Generator 函數運算式
- {{jsxref("Operators/yield", "yield")}}
  - : 暫停與繼續一個產生器 (Generator) 函數。
- {{jsxref("Operators/yield*", "yield*")}}
  - : 轉交另一個產生器 (Generator) 函數或可迭代 (Iterable) 的物件。
- {{experimental_inline}} {{jsxref("Operators/async_function", "async function*")}}
  - : `async` 函數可以定義一個非同步函數運算式。
- {{experimental_inline}} {{jsxref("Operators/await", "await")}}
  - : 暫停與繼續一個非同步函數並等候承諾的結果/拒絕。
- {{jsxref("Global_Objects/Array", "[]")}}
  - : 陣列初始化/書寫格式。
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : 物件初始化/書寫格式。
- {{jsxref("Global_Objects/RegExp", "/ab+c/i")}}
  - : 正規表示法書寫格式。
- {{jsxref("Operators/Grouping", "( )")}}
  - : 分組運算子。

### 左手邊運算式

左側值為賦值的目標。

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : 成員運算子可存取物件的屬性或方法
    (`object.property` and `object["property"]`)。
- {{jsxref("Operators/new", "new")}}
  - : `new` 運算子可以建立一個建構子 (Constructor) 的實例。
- [new.target](/zh-TW/docs/Web/JavaScript/Reference/Operators/new.target)
  - : 在建構子中 `new.target` 可以參考被 {{jsxref("Operators/new", "new")}} 呼叫的建構子 (Constructor) 。
- {{jsxref("Operators/super", "super")}}
  - : `super` 關鍵字可以呼叫父建構子 (Constructor) 。
- {{jsxref("Operators/Spread_operator", "...obj")}}
  - : The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

### 遞增與遞減

字尾/字首遞增與字尾/字首遞減運算子。

- {{jsxref("Operators/Arithmetic_Operators", "A++", "#Increment")}}
  - : 字尾遞增運算子。
- {{jsxref("Operators/Arithmetic_Operators", "A--", "#Decrement")}}
  - : 字尾遞減運算子。
- {{jsxref("Operators/Arithmetic_Operators", "++A", "#Increment")}}
  - : 字首遞增運算子。
- {{jsxref("Operators/Arithmetic_Operators", "--A", "#Decrement")}}
  - : 字首遞減運算子。

### 一元運算子

一元運算是指只需要使用一個運算元的運算。

- {{jsxref("Operators/delete", "delete")}}
  - : `delete` 運算子可刪除物件中的屬性。
- {{jsxref("Operators/void", "void")}}
  - : `void` 運算子可放棄一個運算式的回傳值。
- {{jsxref("Operators/typeof", "typeof")}}
  - : `typeof` 運算子可以判斷一個指定物件的型態。
- {{jsxref("Operators/Arithmetic_Operators", "+", "#Unary_plus")}}
  - : 一元正運算子可以轉換其運算元成為數值 (Number) 型態。
- {{jsxref("Operators/Arithmetic_Operators", "-", "#Unary_negation")}}
  - : 一元負運算子可以轉換其運算元成為數值 (Number) 型態並轉為負值。
- {{jsxref("Operators/Bitwise_Operators", "~", "#Bitwise_NOT")}}
  - : 元位 NOT 運算子。
- {{jsxref("Operators/Logical_Operators", "!", "#Logical_NOT")}}
  - : 邏輯 NOT 運算子。

### 算術運算子

算術運算子會要用到數值 (不論是字面值或者變數) 做為運算元，並且會回傳單一數值結果。

- {{jsxref("Operators/Arithmetic_Operators", "+", "#Addition")}}
  - : 加法運算子。
- {{jsxref("Operators/Arithmetic_Operators", "-", "#Subtraction")}}
  - : 減法運算子。
- {{jsxref("Operators/Arithmetic_Operators", "/", "#Division")}}
  - : 除法運算子。
- {{jsxref("Operators/Arithmetic_Operators", "*", "#Multiplication")}}
  - : 乘法運算子。
- {{jsxref("Operators/Arithmetic_Operators", "%", "#Remainder")}}
  - : 餘數運算子。
- {{jsxref("Operators/Arithmetic_Operators", "**", "#Exponentiation")}}
  - : 指數運算子。

### 關係運算子

比較運算子會比較其運算元並根據比較的結果是否成立回傳一個 `Boolean` 值的結果。

- {{jsxref("Operators/in", "in")}}
  - : `in` 運算子會判斷一個物件是否有指定的屬性。
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : `instanceof` 運算子會判斷一個物件是否為另一個物件的實例。
- {{jsxref("Operators/Comparison_Operators", "&lt;", "#Less_than_operator")}}
  - : 小於運算子。
- {{jsxref("Operators/Comparison_Operators", "&gt;", "#Greater_than_operator")}}
  - : 大於運算子。
- {{jsxref("Operators/Comparison_Operators", "&lt;=", "#Less_than_or_equal_operator")}}
  - : 小於等於運算子。
- {{jsxref("Operators/Comparison_Operators", "&gt;=", "#Greater_than_or_equal_operator")}}
  - : 大於等於運算子。

> [!NOTE]
> => is not an operator, but the notation for [Arrow functions](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### 相等運算子

執行相對運算子後的結果為比較結果是否成立的 `Boolean` 值。

- {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}}
  - : 相等運算子。
- {{jsxref("Operators/Comparison_Operators", "!=", "#Inequality")}}
  - : 不相等運算子。
- {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}
  - : 恆等運算子。
- {{jsxref("Operators/Comparison_Operators", "!==", "#Nonidentity")}}
  - : 不恆等運算子。

### 位元移位運算子

用來位移運算元所有位元的運算。

- {{jsxref("Operators/Bitwise_Operators", "&lt;&lt;", "#Left_shift")}}
  - : 左移位元運算子。
- {{jsxref("Operators/Bitwise_Operators", "&gt;&gt;", "#Right_shift")}}
  - : 右移位元運算子。
- {{jsxref("Operators/Bitwise_Operators", "&gt;&gt;&gt;", "#Unsigned_right_shift")}}
  - : 右移無號位元運算子。

### 二元位元運算子

位元運算子將其運算元當做是 32 位元 (32 個零與一) 的數值處理並回傳標準 JavaScript 數值。

- {{jsxref("Operators/Bitwise_Operators", "&amp;", "#Bitwise_AND")}}
  - : 位元 AND。
- {{jsxref("Operators/Bitwise_Operators", "|", "#Bitwise_OR")}}
  - : 位元 OR。
- {{jsxref("Operators/Bitwise_Operators", "^", "#Bitwise_XOR")}}
  - : 位元 XOR。

### 二元邏輯運算子

邏輯運算子一般用在處理布林 (邏輯) 值，它們存在的地方會回傳一個布林 (Boolean) 值。

- {{jsxref("Operators/Logical_Operators", "&amp;&amp;", "#Logical_AND")}}
  - : 邏輯 AND。
- {{jsxref("Operators/Logical_Operators", "||", "#Logical_OR")}}
  - : 邏輯 OR。

### 條件 (三元) 運算子

- {{jsxref("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}
  - : 條件運算子會根據條件的邏輯值判斷並回傳其中一個值。

### 賦值運算子

賦值運算子會根據其右側運算元的數值處理後賦值給其左側的運算元。

- {{jsxref("Operators/Assignment_Operators", "=", "#Assignment")}}
  - : 賦值運算子。
- {{jsxref("Operators/Assignment_Operators", "*=", "#Multiplication_assignment")}}
  - : 乘法賦值。
- {{jsxref("Operators/Assignment_Operators", "/=", "#Division_assignment")}}
  - : 除法賦值。
- {{jsxref("Operators/Assignment_Operators", "%=", "#Remainder_assignment")}}
  - : 餘數賦值。
- {{jsxref("Operators/Assignment_Operators", "+=", "#Addition_assignment")}}
  - : 加法賦值。
- {{jsxref("Operators/Assignment_Operators", "-=", "#Subtraction_assignment")}}
  - : 減法賦值。
- {{jsxref("Operators/Assignment_Operators", "&lt;&lt;=", "#Left_shift_assignment")}}
  - : 左移賦值。
- {{jsxref("Operators/Assignment_Operators", "&gt;&gt;=", "#Right_shift_assignment")}}
  - : 右移賦值。
- {{jsxref("Operators/Assignment_Operators", "&gt;&gt;&gt;=", "#Unsigned_right_shift_assignment")}}
  - : 無號右移賦值。
- {{jsxref("Operators/Assignment_Operators", "&amp;=", "#Bitwise_AND_assignment")}}
  - : 位元 AND 賦值。
- {{jsxref("Operators/Assignment_Operators", "^=", "#Bitwise_XOR_assignment")}}
  - : 位元 XOR 賦值。
- {{jsxref("Operators/Assignment_Operators", "|=", "#Bitwise_OR_assignment")}}
  - : 位元 OR 賦值。
- {{jsxref("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
  {{jsxref("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}
  - : 解構讓你可使用如陣列或物件書寫格式來賦值給陣列或物件的屬性。

### 逗號運算子

- {{jsxref("Operators/Comma_Operator", ",")}}
  - : 逗號運算子允許在一個敘述句中執行多個運算式並回傳最後一個運算式的結果。

### 非標準功能

- {{non-standard_inline}} {{jsxref("Operators/Legacy_generator_function", "Legacy generator function", "", 1)}}
  - : The `function` keyword can be used to define a legacy generator function inside an expression. To make the function a legacy generator, the function body should contains at least one {{jsxref("Operators/yield", "yield")}} expression.
- {{non-standard_inline}} {{jsxref("Operators/Expression_closures", "Expression closures", "", 1)}}
  - : The expression closure syntax is a shorthand for writing simple function.
- {{non-standard_inline}} {{jsxref("Operators/Array_comprehensions", "[for (x of y) x]")}}
  - : Array comprehensions.
- {{non-standard_inline}} {{jsxref("Operators/Generator_comprehensions", "(for (x of y) y)")}}
  - : Generator comprehensions.

## 技術規格

{{Specifications}}

## 相關文獻

- [Operator precedence](/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
