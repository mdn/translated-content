---
title: 代入演算子 (=)
slug: Web/JavaScript/Reference/Operators/Assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**代入 (`=`)** 演算子は、変数またはプロパティに値を代入するために使用されます。代入式自体の値は、代入された値になります。これにより、複数の変数に 1 つの値を代入するために、複数の代入を連鎖させることができます。

{{InteractiveExample("JavaScript デモ: 代入演算子 (=)")}}

```js interactive-example
let x = 2;
const y = 3;

console.log(x);
// 予想される結果: 2

console.log((x = y + 1)); // 3 + 1
// 予想される結果: 4

console.log((x = x * y)); // 4 * 3
// 予想される結果: 12
```

## 構文

```js-nolint
x = y
```

### 引数

- `x`
  - : 有効な代入対象であり、[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)または[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)などです。[構造分解パターン](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)も使用できます。
- `y`
  - : `x` に代入する値を指定する式です。

### 返値

`y` の値です。

### 例外

- {{jsxref("ReferenceError")}}
  - : 厳格モードで、スコープ内で宣言されていない識別子に代入した場合に発生します。
- {{jsxref("TypeError")}}
  - : 厳格モードで、[変更不可能なプロパティ](/ja/docs/Web/JavaScript/Reference/Strict_mode#オブジェクトプロパティへの代入の失敗)に代入した場合に発生します。

## 解説

代入演算子は、以下のような他の場所で、構文の区切り文字として使用される等号 (`=`) とは完全に異なります。

- [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var)、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)、[`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) 宣言の初期化子
- [構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring#既定値)の既定値
- [デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [クラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)の初期化子

これらの場所はすべて、`=` の右側に代入式を受け入れます。したがって、複数の等号が連なっている場合は、次のように指定します。

```js-nolint
const x = y = 5;
```

これは次のものと同等です。

```js
const x = (y = 5);
```

これは、 `y` は既存の変数である必要があり、 `x` は新しく宣言された `const` 変数であることを意味しています。 `y` には値 `5` が代入され、 `x` は `y = 5` の式（この値も `5`）の値で初期化されます。 `y` が既存の変数でない場合、[厳格モードでない場合](/ja/docs/Web/JavaScript/Reference/Strict_mode)はグローバル変数 `y` が暗黙的に作成されます。厳格モードでは、 {{jsxref("ReferenceError")}} が発生します。同じ宣言内で 2 つの変数を宣言するには、次のようにします。

```js
const x = 5,
  y = 5;
```

## 例

### 基本的な代入と連鎖

```js
let x = 5;
let y = 10;
let z = 25;

x = y; // x is 10
x = y = z; // x, y and z are all 25
```

### 代入式の値

代入式自体は右辺値として評価されるため、値のログ出力と変数への代入を同時に行うことができます。

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### 修飾されていない識別子への代入

グローバルオブジェクトは、スコープチェーンの最上位に位置します。名前を値に解決しようとすると、スコープチェーンが検索されます。つまり、グローバルオブジェクトのプロパティは、`globalThis.`、`window.`、`global.` で名前を修飾しなくても、すべてのスコープから簡単に参照できるということです。

グローバルオブジェクトに `String` プロパティ (`Object.hasOwn(globalThis, "String")`) があるため、次のコードを使用することができます。

```js
function foo() {
  String("s"); // `String` 関数はグローバルで利用可能
}
```

したがって、最終的にはグローバルオブジェクトが、修飾されていない識別子が検索されます。`globalThis.String` と入力する必要はありません。修飾されていない `String` と入力するだけで済みます。この機能の概念の一貫性を高めるため、修飾されていない識別子への代入は、スコープチェーンに同じ名前の変数が宣言されていない場合、グローバルオブジェクトにその名前のプロパティを作成することを想定します（`globalThis.` は省略されます）。

```js
foo = "f"; // 厳格モードでない場合は、グローバルオブジェクトに `foo` という名前付きのプロパティを作成すると想定します。
Object.hasOwn(globalThis, "foo"); // true
```

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables)では、厳格モードで修飾されていない識別子に代入すると、グローバルオブジェクトにプロパティが誤って作成されるのを避けるため、 `ReferenceError` が発生します。

なお、上記のことは、よく誤解されていることとは逆に、JavaScript には暗黙の変数や未宣言の変数はないことを意味します。 JavaScript は、グローバルオブジェクトとグローバルスコープを統合し、プロパティの作成時にグローバルオブジェクトの修飾子を省略できるようにしているだけです。

### 構造分解を伴う代入

左辺は代入パターンにすることもできます。これにより、複数の変数に一度に代入することができます。

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let a = "",
  b = "",
  c = "";
[, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

詳しくは、[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Assignment operators in the JS guide](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)
