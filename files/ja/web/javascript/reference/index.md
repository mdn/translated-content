---
title: JavaScript リファレンス
slug: Web/JavaScript/Reference
l10n:
  sourceCommit: b8e4922dacc3ce43e239f7984b61493568e93f59
---

{{JsSidebar}}

JavaScript リファレンスは、 JavaScript 言語に関する事実の保管庫として機能します。言語全体がここで詳細に記述されています。 JavaScript のコードを書いていると、これらのページをよく参照することになります（だから「JavaScript リファレンス」という題名なのです）。

JavaScript 言語は、ブラウザーやサーバーサイドのスクリプトなど、何か大きな環境の中で使用されることを想定しています。ほとんどの場合、このリファレンスは環境に依存しないようにしており、ウェブブラウザー環境のみを対象としている訳ではありません。

もし JavaScript が初めてであれば、[ガイド](/ja/docs/Web/JavaScript/Guide)から始めてください。基本的なことをしっかりと把握したら、個々のオブジェクトや言語構成について、このリファレンスを使用して、より詳細な情報を取得することができます。

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
- {{JSxRef("Global_Objects/escape", "escape()")}} {{Deprecated_Inline}}
- {{JSxRef("Global_Objects/unescape", "unescape()")}} {{Deprecated_Inline}}

### 基本オブジェクト

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### エラーオブジェクト

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}
- {{JSxRef("InternalError")}} {{Non-Standard_Inline}}

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
- {{JSxRef("FinalizationRegistry")}}

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
- {{JSxRef("Global_Objects/Intl/Segmenter", "Intl.Segmenter")}}

## 文

[JavaScript の文と宣言](/ja/docs/Web/JavaScript/Reference/Statements)

### 制御フロー

- {{jsxref("Statements/return", "return")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Statements/try...catch", "try...catch")}}

### 宣言

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}

### 関数とクラス

- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}

### 反復処理

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
- {{jsxref("Statements/while", "while")}}

### その他

- {{jsxref("Statements/Empty", "空文", "", 1)}}
- {{jsxref("Statements/block", "ブロック", "", 1)}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/label", "ラベル", "", 1)}}
- {{jsxref("Statements/with", "with")}} {{Deprecated_Inline}}

## 式と演算子

[JavaScript の式と演算子](/ja/docs/Web/JavaScript/Reference/Operators)

### 主要な式

- {{JSxRef("Operators/this", "this")}}
- [リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#リテラル)
- {{JSxRef("Global_Objects/Array", "[]")}}
- {{JSxRef("Operators/Object_initializer", "{}")}}
- {{JSxRef("Operators/function", "function")}}
- {{JSxRef("Operators/class", "class")}}
- {{JSxRef("Operators/function*", "function*")}}
- {{JSxRef("Operators/async_function", "async function")}}
- {{JSxRef("Operators/async_function*", "async function*")}}
- {{JSxRef("Global_Objects/RegExp", "/ab+c/i")}}
- {{JSxRef("Template_literals", "`string`")}}
- {{JSxRef("Operators/Grouping", "( )")}}

### 左辺式

- {{JSxRef("Operators/Property_accessors", "プロパティアクセサー", "", 1)}}
- {{JSxRef("Operators/Optional_chaining", "?.")}}
- {{JSxRef("Operators/new", "new")}}
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
- {{JSxRef("Operators/import%2Emeta", "import.meta")}}
- {{JSxRef("Operators/super", "super")}}
- {{JSxRef("Operators/import", "import()")}}

### インクリメントとデクリメント

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
- {{JSxRef("Operators/await", "await")}}

### 算術演算子

- {{JSxRef("Operators/Exponentiation", "**")}}
- {{JSxRef("Operators/Multiplication", "*")}}
- {{JSxRef("Operators/Division", "/")}}
- {{JSxRef("Operators/Remainder", "%")}}
- {{JSxRef("Operators/Addition", "+")}} (プラス)
- {{JSxRef("Operators/Subtraction", "-")}}

### 関係演算子

- {{JSxRef("Operators/Less_than", "&lt;")}} (小なり)
- {{JSxRef("Operators/Greater_than", "&gt;")}} (大なり)
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}
- {{JSxRef("Operators/instanceof", "instanceof")}}
- {{JSxRef("Operators/in", "in")}}

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
- {{JSxRef("Operators/Nullish_coalescing", "??")}}

### 条件 (三項) 演算子

- {{JSxRef("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}

### 代入演算子

- {{JSxRef("Operators/Assignment", "=")}}
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
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
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
- {{JSxRef("Operators/Nullish_coalescing_assignment", "??=")}}
- [`[a, b] = arr`, `{ a, b } = obj`](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### yield 演算子

- {{JSxRef("Operators/yield", "yield")}}
- {{JSxRef("Operators/yield*", "yield*")}}

### スプレッド構文

- {{JSxRef("Operators/Spread_syntax", "...obj")}}

### カンマ演算子

- {{JSxRef("Operators/Comma_Operator", ",")}}

## 関数

[JavaScript の関数](/ja/docs/Web/JavaScript/Reference/Functions)

- {{JSXRef("Functions/Arrow_functions", "アロー関数", "", 1)}}
- {{JSxRef("Functions/Default_parameters", "デフォルト引数", "", 1)}}
- {{JSxRef("Functions/rest_parameters", "残余引数", "", 1)}}
- {{JSxRef("Functions/arguments", "arguments")}}
- {{JSxRef("Functions/Method_definitions", "メソッド定義", "", 1)}}
- {{JSxRef("Functions/get", "ゲッター", "", 1)}}
- {{JSxRef("Functions/set", "セッター", "", 1)}}

## クラス

[JavaScript のクラス](/ja/docs/Web/JavaScript/Reference/Classes)

- {{JSxRef("Classes/Constructor", "constructor")}}
- {{JSxRef("Classes/extends", "extends")}}
- [プライベートクラス機能](/ja/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [パブリッククラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{JSxRef("Classes/static", "static")}}
- [静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## 追加のリファレンスページ

- {{JSxRef("Lexical_grammar", "字句文法", "", 1)}}
- [データ型とデータ構造](/ja/docs/Web/JavaScript/Data_structures)
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- [末尾のカンマ](/ja/docs/Web/JavaScript/Reference/Trailing_commas)
- [エラー](/ja/docs/Web/JavaScript/Reference/Errors)
- {{JSxRef("Strict_mode", "厳格モード", "", 1)}}
- {{JSxRef("Deprecated_and_obsolete_features", "非推奨の機能", "", 1)}}
