---
title: 関数宣言
slug: Web/JavaScript/Reference/Statements/function
---

{{jsSidebar("Statements")}}

**関数宣言** (関数文) は、指定された引数を使用して関数を定義します。

また、 {{jsxref("Function")}} のコンストラクターと{{jsxref("Operators/function", "関数式", "", 1)}}を使用して関数を定義することもできます。

{{EmbedInteractiveExample("pages/js/statement-function.html","shorter")}}

## 構文

```
function name([param[, param,[..., param]]]) {
   [statements]
}
```

- `name`
  - : 関数の名前です。

<!---->

- `param` {{optional_inline}}
  - : 関数に渡す引数の名前です。引数の最大数はエンジンによって異なります。

<!---->

- `statements` {{optional_inline}}
  - : 関数の本体を構成する文です。

## 解説

関数宣言で作成された関数は `Function` オブジェクトであり、`Function` オブジェクトのすべてのプロパティ、メソッド、動作を備えています。関数の詳細については {{jsxref("Function")}} を参照してください。

関数は式を使用して作成することもできます ({{jsxref("Operators/function", "関数式", "", 1)}}を参照)。

既定では、関数は `undefined` を返します。他の値を返すには、関数に返す値を指定する {{jsxref("Statements/return", "return")}} 文が必要です。

### 条件付きで作成される関数

関数は条件付きで宣言できます。つまり、関数文を `if` 文の中に入れ子にすることができますが、結果は実装によって一貫性がないので、このパターンを本番コードでは使用すべきではありません。条件付きの関数の作成には、代わりに関数式を使用してください。

```js
var hoisted = "foo" in this;
console.log(`'foo' name ${hoisted ? "is" : "is not"} hoisted. typeof foo is ${typeof foo}`);
if (false) {
  function foo(){ return 1; }
}

// In Chrome:
// 'foo' name is hoisted. typeof foo is undefined
//
// In Firefox:
// 'foo' name is hoisted. typeof foo is undefined
//
// In Edge:
// 'foo' name is not hoisted. typeof foo is undefined
//
// In Safari:
// 'foo' name is hoisted. typeof foo is function
```

真と評価される条件でも結果はまったく同じです。

```js
var hoisted = "foo" in this;
console.log(`'foo' name ${hoisted ? "is" : "is not"} hoisted. typeof foo is ${typeof foo}`);
if (true) {
  function foo(){ return 1; }
}

// In Chrome:
// 'foo' name is hoisted. typeof foo is undefined
//
// In Firefox:
// 'foo' name is hoisted. typeof foo is undefined
//
// In Edge:
// 'foo' name is not hoisted. typeof foo is undefined
//
// In Safari:
// 'foo' name is hoisted. typeof foo is function
```

### 関数宣言の巻き上げ

JavaScript の関数宣言は、それを囲む関数やグローバルスコープの先頭に巻き上げられ、関数を宣言する前に使うことができます。

```js
hoisted(); // logs "foo"

function hoisted() {
  console.log('foo');
}
```

{{jsxref("Operators/function", "関数式", "", 1)}}は巻き上げられないことに注意してください。

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};
```

## 例

### function の使用

以下のコードは、商品 `a`, `b`, `c` の販売個数が与えられた場合に、販売個数の合計を返す関数を宣言しています。

```js
function calc_sales(units_a, units_b, units_c) {
   return units_a * 79 + units_b * 129 + units_c * 699;
}
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-function-definitions', 'Function definitions')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.function")}}

## 関連情報

- {{jsxref("Function")}}
- {{jsxref("Operators/function", "関数式", "", 1)}}
- {{jsxref("Statements/function*", "function* 文", "", 1)}}
- {{jsxref("Operators/function*", "function* 式", "", 1)}}
- {{jsxref("Functions/Arrow_functions", "アロー関数", "", 1)}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Statements/async_function", "非同期関数", "", 1)}}
- {{jsxref("Operators/async_function", "非同期関数式", "", 1)}}
