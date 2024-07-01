---
title: 式と演算子
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{JSSidebar("Operators")}}

この節では、JavaScript 言語のすべての演算子、式、キーワードについて記述しています。

## 式と演算子（カテゴリー別）

アルファベット順の一覧は左側のサイドバーをご覧ください。

### 基本式

JavaScript での基本的なキーワードと一般的な式です。これらの式は最も高い優先順位を持ちます（[演算子](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)よりも高い）。

- {{JSxRef("Operators/this", "this")}}
  - : `this` キーワードは関数の実行コンテキストを示す特別なプロパティです。
- [リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#リテラル)
  - : 基本的な `null`、論理値、数値、文字列のリテラルです。
- {{JSxRef("Global_Objects/Array", "[]")}}
  - : 配列初期化子またはリテラル構文です。
- {{JSxRef("Operators/Object_initializer", "{}")}}
  - : オブジェクト初期化子またはリテラル構文です。
- {{JSxRef("Operators/function", "function")}}
  - : `function` キーワードは関数式を定義します。
- {{JSxRef("Operators/class", "class")}}
  - : `class` キーワードはクラス式を定義します。
- {{JSxRef("Operators/function*", "function*")}}
  - : `function*` キーワードはジェネレーター関数式を定義します。
- {{JSxRef("Operators/async_function", "async function")}}
  - : `async function` は非同期関数式を定義します。
- {{JSxRef("Operators/async_function*", "async function*")}}
  - : `async function*` キーワードは非同期ジェネレーター関数式を定義します。
- {{JSxRef("Global_Objects/RegExp", "/ab+c/i")}}
  - : 正規表現リテラル構文です。
- {{JSxRef("Template_literals", "`string`")}}
  - : テンプレートリテラル構文です。
- {{JSxRef("Operators/Grouping", "( )")}}
  - : グループ化演算子です。

### 左辺式

左辺値は、代入の対象になります。

- {{JSxRef("Operators/Property_accessors", "プロパティアクセサー", "", 1)}}
  - : プロパティアクセス演算子はオブジェクトのプロパティやメソッドへのアクセス (`object.property` や `object["property"]`) を提供します。
- {{JSxRef("Operators/Optional_chaining", "?.")}}
  - : オプショナルチェーン演算子は、参照が [nullish](/ja/docs/Glossary/Nullish)（[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) または [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined)）であった場合にエラーを発生させる代わりに `undefined` を返します。
- {{JSxRef("Operators/new", "new")}}
  - : `new` 演算子はコンストラクターのインスタンスを作成します。
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
  - : コンストラクター内で `new.target` を使うことで、{{JSxRef("Operators/new", "new")}} によって呼び出されるコンストラクターを参照できます。
- {{JSxRef("Operators/import%2Emeta", "import.meta")}}
  - : コンテキストに依存したメタデータを JavaScript モジュールへ公開するオブジェクトです。
- {{JSxRef("Operators/super", "super")}}
  - : `super`キーワードは親オブジェクトのコンストラクタを呼び出したり、親オブジェクトのプロパティにアクセスしたりすることができます。
- {{JSxRef("Operators/import", "import()")}}
  - : `import()` 構文を使うと、モジュールを非同期かつ動的に、潜在的にモジュールでない環境に読み込むことができます。

### インクリメントとデクリメント

後置/前置のインクリメント演算子と後置/前置のデクリメント演算子です。

- {{JSxRef("Operators/Increment", "A++")}}
  - : 後置型インクリメント演算子。
- {{JSxRef("Operators/Decrement", "A--")}}
  - : 後置型デクリメント演算子。
- {{JSxRef("Operators/Increment", "++A")}}
  - : 前置型インクリメント演算子。
- {{JSxRef("Operators/Decrement", "--A")}}
  - : 前置型デクリメント演算子。

### 単項演算子

単項演算は、単一のオペランドによる演算です。

- {{JSxRef("Operators/delete", "delete")}}
  - : `delete` 演算子は、オブジェクトからプロパティを削除します。
- {{JSxRef("Operators/void", "void")}}
  - : `void` 演算子は、式の返値を破棄します。
- {{JSxRef("Operators/typeof", "typeof")}}
  - : `typeof` 演算子は、与えられたオブジェクトの型を判別します。
- {{JSxRef("Operators/Unary_plus", "+")}}
  - : 単項正値演算子は、そのオペランドを数値型に変換します。
- {{JSxRef("Operators/Unary_negation", "-")}}
  - : 単項負値演算子は、そのオペランドを数値型に変換して正負を反転します。
- {{JSxRef("Operators/Bitwise_NOT", "~")}}
  - : ビット否定演算子です。
- {{JSxRef("Operators/Logical_NOT", "!")}}
  - : 論理否定演算子です。
- {{JSxRef("Operators/await", "await")}}
  - : 非同期関数式の停止/再開と、プロミスの履行/拒否を待ちます。

### 算術演算子

算術演算子は、数値（リテラルまたは値）をオペランドとして取り、1 個の数値を返します。

- {{JSxRef("Operators/Exponentiation", "**")}}
  - : べき乗演算子です。
- {{JSxRef("Operators/Multiplication", "*")}}
  - : 乗算演算子です。
- {{JSxRef("Operators/Division", "/")}}
  - : 除算演算子です。
- {{JSxRef("Operators/Remainder", "%")}}
  - : 剰余演算子です。
- {{JSxRef("Operators/Addition", "+")}} （プラス）
  - : 加算演算子です。
- {{JSxRef("Operators/Subtraction", "-")}}
  - : 減算演算子です。

### 関係演算子

比較演算子はオペランド同士を比較し、その比較結果が真かどうかに基づいて論理値を返します。

- {{JSxRef("Operators/Less_than", "&lt;")}} (Less than)
  - : 小なり演算子です。
- {{JSxRef("Operators/Greater_than", "&gt;")}} (Greater than)
  - : 大なり演算子です。
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
  - : 小なりイコール演算子です。
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}
  - : 大なりイコール演算子です。
- {{JSxRef("Operators/instanceof", "instanceof")}}
  - : `instanceof` 演算子は、オブジェクトが別のオブジェクトのインスタンスかどうかを判別します。
- {{JSxRef("Operators/in", "in")}}
  - : `in` 演算子は、与えられたプロパティをオブジェクトが持っているかどうかを判別します。

> **メモ:** `=>` は演算子ではなく、[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)のための記法です。

### 等値演算子

等値演算子の評価結果は常に、比較が真かどうかに基づいて論理型の値になります。

- {{JSxRef("Operators/Equality", "==")}}
  - : 等値演算子です。
- {{JSxRef("Operators/Inequality", "!=")}}
  - : 不等値演算子です。
- {{JSxRef("Operators/Strict_equality", "===")}}
  - : 同値演算子です。
- {{JSxRef("Operators/Strict_inequality", "!==")}}
  - : 非同値演算子です。

### ビットシフト演算子

オペランドのすべてのビットをシフト演算します。

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
  - : ビット左シフト演算子です。
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
  - : ビット右シフト演算子です。
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : ビット符号なし右シフト演算子です。

### バイナリービット演算子

ビット演算子は、そのオペランドを 32 ビット（0 と 1）の並びとして扱い、標準の JavaScript 数値を返します。

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}}
  - : ビット論理積 (AND) です。
- {{JSxRef("Operators/Bitwise_OR", "|")}}
  - : ビット論理和 (OR) です。
- {{JSxRef("Operators/Bitwise_XOR", "^")}}
  - : ビット排他的論理和 (XOR) です。

### バイナリー論理演算子

論理演算子は論理値（ブール値）において実装され、[短絡評価](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#短絡評価)があります。

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
  - : 論理積 (AND) です。
- {{JSxRef("Operators/Logical_OR", "||")}}
  - : 論理和 (OR) です。
- {{JSxRef("Operators/Nullish_coalescing", "??")}}
  - : Null 合体演算子です。

### 条件（三項）演算子

- {{JSxRef("Operators/Conditional_operator", "(条件 ? 真の場合 : 負の場合)")}}
  - : この条件演算子は、条件の論理値を基に、2 つの値のいずれか一方を返します。

### 代入演算子

代入演算子は、右辺のオペランドに基づいて、値を左辺のオペランドに代入します。

- {{JSxRef("Operators/Assignment", "=")}}
  - : 代入演算子です。
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
  - : 乗算値を代入します。
- {{JSxRef("Operators/Division_assignment", "/=")}}
  - : 除算値を代入します。
- {{JSxRef("Operators/Remainder_assignment", "%=")}}
  - : 剰余値を代入します。
- {{JSxRef("Operators/Addition_assignment", "+=")}}
  - : 加算値を代入します。
- {{JSxRef("Operators/Subtraction_assignment", "-=")}}
  - : 減算値を代入します。
- {{JSxRef("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : 左シフトした値を代入します。
- {{JSxRef("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : 右シフトした値を代入します。
- {{JSxRef("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : 符号なしの右シフトした値を代入します。
- {{JSxRef("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : ビット論理積 (AND) の値を代入します。
- {{JSxRef("Operators/Bitwise_XOR_assignment", "^=")}}
  - : ビット排他的論理和 (XOR) の値を代入します。
- {{JSxRef("Operators/Bitwise_OR_assignment", "|=")}}
  - : ビット論理和 (OR) の値を代入します。
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
  - : べき乗値を代入します。
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : 論理積代入です。
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
  - : 論理和代入です。
- {{JSxRef("Operators/Nullish_coalescing_assignment", "??=")}}
  - : 論理 Null 合体代入です。
- [`[a, b] = arr`, `{ a, b } = obj`](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - : 分割代入は、配列やオブジェクトのプロパティを、配列やオブジェクトリテラルに似た構文を使用して変数に代入します。

### yield 演算子

- {{JSxRef("Operators/yield", "yield")}}
  - : ジェネレーター関数の一時停止と再開を行います。
- {{JSxRef("Operators/yield*", "yield*")}}
  - : 別のジェネレーター関数または反復可能オブジェクトを代行します。

### スプレッド構文

- {{JSxRef("Operators/Spread_syntax", "...obj")}}
  - : スプレッド構文を使用すると、配列や文字列などの反復可能オブジェクトを、 0 個以上の引数（関数呼び出しの場合）や要素（配列リテラルの場合）が予想される配置で展開することができます。オブジェクトリテラルでは、スプレッド構文はオブジェクトのプロパティを列挙し、作成するオブジェクトにキーと値のペアを追加します。

### カンマ演算子

- {{JSxRef("Operators/Comma_operator", ",")}}
  - : カンマ演算子は、複数の式を単一の文で評価し、最後の式の結果を返すことができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
