---
title: JavaScript リファレンス
slug: Web/JavaScript/Reference
tags:
  - Code
  - ECMAScript
  - ECMAScript6
  - ES6
  - JS
  - JavaScript
  - Landing page
  - Reference
  - es
  - l10n:priority
  - programming
translation_of: Web/JavaScript/Reference
---
{{JsSidebar}}

MDN のこの JavaScript の章は、JavaScript 言語についての情報倉庫となっています。詳しくは[このリファレンスについて](/ja/docs/Web/JavaScript/Reference/About)を読んでください。

## 組み込みオブジェクト

[JavaScript の標準組み込みオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects)と、そのメソッドやプロパティです。

### 値プロパティ

- {{JSxRef("globalThis")}}
- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}

### 関数プロパティ

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("Global_Objects/isFinite", "isFinite()")}}
- {{JSxRef("Global_Objects/isNaN", "isNaN()")}}
- {{JSxRef("Global_Objects/parseFloat", "parseFloat()")}}
- {{JSxRef("Global_Objects/parseInt", "parseInt()")}}
- {{JSxRef("Global_Objects/decodeURI", "decodeURI()")}}
- {{JSxRef("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{JSxRef("Global_Objects/encodeURI", "encodeURI()")}}
- {{JSxRef("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}

### 基本オブジェクト

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### エラーオブジェクト

- {{JSxRef("Error")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}
- {{JSxRef("AggregateError")}}

### 数値と日付

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}

### テキスト処理

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

### 添字付きコレクション

- {{JSxRef("Array")}}
- {{JSxRef("Int8Array")}}
- {{JSxRef("Uint8Array")}}
- {{JSxRef("Uint8ClampedArray")}}
- {{JSxRef("Int16Array")}}
- {{JSxRef("Uint16Array")}}
- {{JSxRef("Int32Array")}}
- {{JSxRef("Uint32Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}
- {{JSxRef("Float32Array")}}
- {{JSxRef("Float64Array")}}

### キー付きコレクション

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### 構造化データ

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("DataView")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("JSON")}}

### メモリー管理

- {{JSxRef("WeakRef")}}
- {{JsxRef("FinalizationRegistry")}}

### 制御の抽象化

- {{JSxRef("Promise")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncGeneratorFunction")}}
- {{JSxRef("Generator")}}
- {{JSxRef("AsyncGenerator")}}
- {{JSxRef("AsyncFunction")}}

### リフレクション

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### 国際化

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

## 文

[JavaScript の文と宣言](/ja/docs/Web/JavaScript/Reference/Statements)

### 制御フロー

- {{jsxref("Statements/block", "ブロック", "", 1)}}
- {{jsxref("Statements/Empty", "空文", "", 1)}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}

### 宣言

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}

### 関数とクラス

- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Statements/class", "class")}}

### 反復処理

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/for_each...in", "for each...in")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
- {{jsxref("Statements/while", "while")}}

### その他

- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/label", "label")}}
- {{jsxref("Statements/with", "with")}}

## 式と演算子

[JavaScript の式と演算子](/ja/docs/Web/JavaScript/Reference/Operators)

### 主要な式

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

### 左辺式

- {{JSxRef("Operators/Property_accessors", "プロパティアクセサー", "", 1)}}
- {{JSxRef("Operators/Optional_chaining", "<code>?.</code> (オプショナルチェイニング)", "", 1)}}
- {{JSxRef("Operators/new", "new")}}
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
- {{JSxRef("Statements/import%2Emeta", "import.meta")}}
- {{JSxRef("Operators/super", "super")}}
- {{JSxRef("Operators/Spread_syntax", "...obj")}}

### インクリメント &amp; デクリメント

- {{JSxRef("Operators/Increment", "A++")}}
- {{JSxRef("Operators/Decrement", "A--")}}
- {{JSxRef("Operators/Increment", "++A")}}
- {{JSxRef("Operators/Decrement", "--A")}}

### 単項演算子

- {{JSxRef("Operators/delete", "delete")}}
- {{JSxRef("Operators/void", "void")}}
- {{JSxRef("Operators/typeof", "typeof")}}
- {{JSxRef("Operators/Unary_plus", "+")}}
- {{JSxRef("Operators/Unary_negation", "-")}}
- {{JSxRef("Operators/Bitwise_NOT", "~")}}
- {{JSxRef("Operators/Logical_NOT", "!")}}

### 算術演算子

- {{JSxRef("Operators/Addition", "+")}}
- {{JSxRef("Operators/Subtraction", "-")}}
- {{JSxRef("Operators/Division", "/")}}
- {{JSxRef("Operators/Multiplication", "*")}}
- {{JSxRef("Operators/Remainder", "%")}}
- {{JSxRef("Operators/Exponentiation", "**")}}

### 関係演算子

- {{JSxRef("Operators/in", "in")}}
- {{JSxRef("Operators/instanceof", "instanceof")}}
- {{JSxRef("Operators/Less_than", "&lt;")}}
- {{JSxRef("Operators/Greater_than", "&gt;")}}
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}

### 等価演算子

- {{JSxRef("Operators/Equality", "==")}}
- {{JSxRef("Operators/Inequality", "!=")}}
- {{JSxRef("Operators/Strict_equality", "===")}}
- {{JSxRef("Operators/Strict_inequality", "!==")}}

### ビットシフト演算子

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}

### バイナリービット演算子

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}}
- {{JSxRef("Operators/Bitwise_OR", "|")}}
- {{JSxRef("Operators/Bitwise_XOR", "^")}}

### バイナリー論理演算子

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
- {{JSxRef("Operators/Logical_OR", "||")}}
- {{JSxRef("Operators/Nullish_coalescing_operator", "??")}}

### 条件 (三項) 演算子

- {{JSxRef("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}

### 代入演算子

- {{JSxRef("Operators/Assignment", "=")}}
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
- {{JSxRef("Operators/Division_assignment", "/=")}}
- {{JSxRef("Operators/Remainder_assignment", "%=")}}
- {{JSxRef("Operators/Addition_assignment", "+=")}}
- {{JSxRef("Operators/Subtraction_assignment", "-=")}}
- {{JSxRef("Operators/Left_shift_assignment", "&lt;&lt;=")}}
- {{JSxRef("Operators/Right_shift_assignment", "&gt;&gt;=")}}
- {{JSxRef("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
- {{JSxRef("Operators/Bitwise_AND_assignment", "&amp;=")}}
- {{JSxRef("Operators/Bitwise_XOR_assignment", "^=")}}
- {{JSxRef("Operators/Bitwise_OR_assignment", "|=")}}
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
- {{JSxRef("Operators/Logical_nullish_assignment", "??=")}}
- {{JSxRef("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
- {{JSxRef("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}

### カンマ演算子

- {{JSxRef("Operators/Comma_Operator", ",")}}

## 関数

この節では、 [JavaScript の関数](/ja/docs/Web/JavaScript/Reference/Functions)を使用してアプリケーションを開発する方法を説明します。

- [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments)
- [アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## 追加のリファレンスページ

- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
- [データ型とデータ構造](/ja/docs/Web/JavaScript/Data_structures)
- [Strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
- [非推奨の機能](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
