---
title: function 宣言
slug: Web/JavaScript/Reference/Statements/function
l10n:
  sourceCommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jsSidebar("Statements")}}

**`function`** 宣言は、指定された引数を使用して関数を定義します。

また、 {{jsxref("Function")}} のコンストラクターと{{jsxref("Operators/function", "関数式", "", 1)}}を使用して関数を定義することもできます。

{{EmbedInteractiveExample("pages/js/statement-function.html","shorter")}}

## 構文

```js-nolint
function name(param0) {
  statements
}
function name(param0, param1) {
  statements
}
function name(param0, param1, /* … ,*/ paramN) {
  statements
}
```

- `name`
  - : 関数の名前です。
- `param` {{optional_inline}}
  - : 関数に渡す引数の名前です。引数の最大数はエンジンによって異なります。
- `statements` {{optional_inline}}
  - : 関数の本体を構成する文です。

## 解説

関数宣言で作成された関数は `Function` オブジェクトであり、`Function` オブジェクトのすべてのプロパティ、メソッド、動作を備えています。関数の詳細については {{jsxref("Function")}} を参照してください。

関数は式を使用して作成することもできます ({{jsxref("Operators/function", "関数式", "", 1)}}を参照)。

既定では、関数は `undefined` を返します。他の値を返すには、関数に返す値を指定する {{jsxref("Statements/return", "return")}} 文が必要です。

### 条件付きで作成される関数

> **警告:** [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)ではない場合、ブロック内での関数宣言は奇妙な動きをします。ブロック内での関数宣言は、厳格モード時のみ行ってください。

関数は条件付きで宣言できます。つまり、関数文を [`if`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) 文の中に入れ子にすることができますが、結果は実装によって一貫性がないので、このパターンを本番コードでは使用すべきではありません。条件付きの関数の作成には、代わりに関数式を使用してください。

```js
console.log(
  `'foo' name ${
    "foo" in globalThis ? "is" : "is not"
  } global. typeof foo is ${typeof foo}`,
);
if (false) {
  function foo() {
    return 1;
  }
}

// In Chrome:
// 'foo' の名前はグローバル。typeof foo は undefined
//
// In Firefox:
// 'foo' の名前はグローバル。typeof foo は undefined
//
// In Safari:
// 'foo' の名前はグローバル。typeof foo は function
```

`if` 本体が実際に実行されるかどうかにかかわらず、スコープと巻き上げの効果は変わりません。

```js
console.log(
  `'foo' name ${
    "foo" in globalThis ? "is" : "is not"
  } global. typeof foo is ${typeof foo}`,
);
if (true) {
  function foo() {
    return 1;
  }
}

// In Chrome:
// 'foo' の名前はグローバル。typeof foo は undefined
//
// In Firefox:
// 'foo' の名前はグローバル。typeof foo は undefined
//
// In Safari:
// 'foo' の名前はグローバル。typeof foo は function
```

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、[ブロック](/ja/docs/Web/JavaScript/Reference/Statements/block)レベルの関数宣言はそのブロックのスコープとなり、そのブロックの先頭に巻き上げられます。

```js
"use strict";

{
  foo(); // Logs "foo"
  function foo() {
    console.log("foo");
  }
}

console.log(
  `'foo' name ${
    "foo" in globalThis ? "is" : "is not"
  } global. typeof foo is ${typeof foo}`,
);
// 'foo' name is not global. typeof foo is undefined
```

### 関数宣言の巻き上げ

JavaScript の関数宣言は、それを囲む関数やグローバルスコープの先頭に[巻き上げられ](/ja/docs/Glossary/Hoisting)、関数を宣言する前に使うことができます。

```js
hoisted(); // "foo" とログ出力

function hoisted() {
  console.log("foo");
}
```

{{jsxref("Operators/function", "関数式", "", 1)}}は巻き上げられないことに注意してください。

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

## 例

### function の使用

以下のコードは、3 つの商品の販売個数が指定されたときに、売上の合計額を返す関数を宣言しています。

```js
function calcSales(unitsA, unitsB, unitsC) {
  return unitsA * 79 + unitsB * 129 + unitsC * 699;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Function")}}
- {{jsxref("Operators/function", "関数式", "", 1)}}
- {{jsxref("Statements/function*", "function* 文", "", 1)}}
- {{jsxref("Operators/function*", "function* 式", "", 1)}}
- {{jsxref("Functions/Arrow_functions", "アロー関数", "", 1)}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Statements/async_function", "非同期関数", "", 1)}}
- {{jsxref("Operators/async_function", "非同期関数式", "", 1)}}
