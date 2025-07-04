---
title: JavaScript リファレンス
slug: Web/JavaScript/Reference
l10n:
  sourceCommit: 21e2b8f4b57964e00899bf81d9457d04e1f1009d
---

{{jsSidebar}}

JavaScript リファレンスは、 JavaScript 言語に関する事実の保管庫として機能します。言語全体がここで詳細に記述されています。 JavaScript のコードを書いていると、これらのページをよく参照することになります（だから「JavaScript リファレンス」という題名なのです）。

JavaScript 言語は、ブラウザーやサーバーサイドのスクリプトなど、何か大きな環境の中で使用されることを想定しています。ほとんどの場合、このリファレンスは環境に依存しないようにしており、ウェブブラウザー環境のみを対象としている訳ではありません。

もし JavaScript が初めてであれば、[ガイド](/ja/docs/Web/JavaScript/Guide)から始めてください。基本的なことをしっかりと把握したら、個々のオブジェクトや言語構成について、このリファレンスを使用して、より詳細な情報を取得することができます。

## 組み込みオブジェクト

[JavaScript の標準組み込みオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects)と、そのメソッドやプロパティです。

### 値プロパティ

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### 関数プロパティ

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

### 基本オブジェクト

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}

### エラーオブジェクト

- {{jsxref("Error")}}
- {{jsxref("AggregateError")}}
- {{jsxref("EvalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}
- {{jsxref("InternalError")}} {{non-standard_inline}}

### 数値と日付

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}
- {{jsxref("Temporal")}}

### テキスト処理

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### 添字付きコレクション

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
- {{jsxref("Float16Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### キー付きコレクション

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### 構造化データ

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("Atomics")}}
- {{jsxref("JSON")}}

### メモリー管理

- {{jsxref("WeakRef")}}
- {{jsxref("FinalizationRegistry")}}

### 制御の抽象化

- {{jsxref("Iterator")}}
- {{jsxref("AsyncIterator")}}
- {{jsxref("Promise")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Generator")}}
- {{jsxref("AsyncGenerator")}}
- {{jsxref("AsyncFunction")}}

### リフレクション

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### 国際化

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
- {{jsxref("Statements/Expression_statement", "式文", "", 1)}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/label", "ラベル", "", 1)}}
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}

## 式と演算子

[JavaScript の式と演算子](/ja/docs/Web/JavaScript/Reference/Operators)

### 主要な式

- {{jsxref("Operators/this", "this")}}
- [リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#リテラル)
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

### 左辺式

- {{jsxref("Operators/Property_accessors", "プロパティアクセサー", "", 1)}}
- {{jsxref("Operators/Optional_chaining", "?.")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Operators/new.target", "new.target")}}
- {{jsxref("Operators/import.meta", "import.meta")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Operators/import", "import()")}}

### インクリメントとデクリメント

- {{jsxref("Operators/Increment", "A++")}}
- {{jsxref("Operators/Decrement", "A--")}}
- {{jsxref("Operators/Increment", "++A")}}
- {{jsxref("Operators/Decrement", "--A")}}

### 単項演算子

- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Operators/Unary_plus", "+")}}
- {{jsxref("Operators/Unary_negation", "-")}}
- {{jsxref("Operators/Bitwise_NOT", "~")}}
- {{jsxref("Operators/Logical_NOT", "!")}}
- {{jsxref("Operators/await", "await")}}

### 算術演算子

- {{jsxref("Operators/Exponentiation", "**")}}
- {{jsxref("Operators/Multiplication", "*")}}
- {{jsxref("Operators/Division", "/")}}
- {{jsxref("Operators/Remainder", "%")}}
- {{jsxref("Operators/Addition", "+")}} (プラス)
- {{jsxref("Operators/Subtraction", "-")}}

### 関係演算子

- {{jsxref("Operators/Less_than", "&lt;")}} (小なり)
- {{jsxref("Operators/Greater_than", "&gt;")}} (大なり)
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/in", "in")}}

### 等価演算子

- {{jsxref("Operators/Equality", "==")}}
- {{jsxref("Operators/Inequality", "!=")}}
- {{jsxref("Operators/Strict_equality", "===")}}
- {{jsxref("Operators/Strict_inequality", "!==")}}

### ビットシフト演算子

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}

### バイナリービット演算子

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
- {{jsxref("Operators/Bitwise_OR", "|")}}
- {{jsxref("Operators/Bitwise_XOR", "^")}}

### バイナリー論理演算子

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
- {{jsxref("Operators/Logical_OR", "||")}}
- {{jsxref("Operators/Nullish_coalescing", "??")}}

### 条件 (三項) 演算子

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}

### 代入演算子

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
- [`[a, b] = arr`, `{ a, b } = obj`](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)

### yield 演算子

- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}

### スプレッド構文

- {{jsxref("Operators/Spread_syntax", "...obj")}}

### カンマ演算子

- {{jsxref("Operators/Comma_operator", ",")}}

## 関数

[JavaScript の関数](/ja/docs/Web/JavaScript/Reference/Functions)

- {{jsxref("Functions/Arrow_functions", "アロー関数", "", 1)}}
- {{jsxref("Functions/Default_parameters", "デフォルト引数", "", 1)}}
- {{jsxref("Functions/rest_parameters", "残余引数", "", 1)}}
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Functions/Method_definitions", "メソッド定義", "", 1)}}
- {{jsxref("Functions/get", "ゲッター", "", 1)}}
- {{jsxref("Functions/set", "セッター", "", 1)}}

## クラス

[JavaScript のクラス](/ja/docs/Web/JavaScript/Reference/Classes)

- {{jsxref("Classes/Constructor", "constructor")}}
- {{jsxref("Classes/extends", "extends")}}
- [プライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)
- [パブリッククラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{jsxref("Classes/static", "static")}}
- [静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## 正規表現

[JavaScript の正規表現です。](/ja/docs/Web/JavaScript/Reference/Regular_expressions)

- [後方参照: `\1`, `\2`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [キャプチャグループ: `(...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [文字クラス: `[...]`, `[^...]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [文字クラスエスケープ: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [文字エスケープ: `\n`, `\u{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [論理和: `|`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [入力境界アサーション: `^`, `$`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [リテラル文字: `a`, `b`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [先読みアサーション: `(?=...)`, `(?!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [後読みアサーション: `(?<=...)`, `(?<!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [修飾子: `(?ims-ims:...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
- [名前付き後方参照: `\k<name>`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [名前付きキャプチャグループ: `(?<name>...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [非キャプチャグループ: `(?:...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [数量詞: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [Unicode 文字クラスエスケープ: `\p{...}`, `\P{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [ワイルドカード: `.`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
- [単語境界アサーション: `\b`, `\B`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)

## 追加のリファレンスページ

- [JavaScript 技術概要](/ja/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)
- [実行モデル](/ja/docs/Web/JavaScript/Reference/Execution_model)
- {{jsxref("Lexical_grammar", "字句文法", "", 1)}}
- [データ型とデータ構造](/ja/docs/Web/JavaScript/Guide/Data_structures)
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- [末尾のカンマ](/ja/docs/Web/JavaScript/Reference/Trailing_commas)
- [エラー](/ja/docs/Web/JavaScript/Reference/Errors)
- {{jsxref("Strict_mode", "厳格モード", "", 1)}}
- {{jsxref("Deprecated_and_obsolete_features", "非推奨の機能", "", 1)}}
