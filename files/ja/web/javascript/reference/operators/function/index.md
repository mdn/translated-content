---
title: 関数式
slug: Web/JavaScript/Reference/Operators/function
---

{{jsSidebar("Operators")}}

**`function`** キーワードは、式の中で関数を定義するために使用されます。

{{jsxref("Function/Function", "Function")}} コンストラクターや{{jsxref("Statements/function", "関数宣言", "", 1)}}を用いて関数を定義することもできます。

{{EmbedInteractiveExample("pages/js/expressions-functionexpression.html", "shorter")}}

## 構文

この式は文の先頭に置くことができません。

```js
function [name]([param1[, param2[, ..., paramN]]]) {
  statements
}
```

ES2015 からは{{jsxref("Functions/Arrow_functions", "アロー関数", "", 1)}}も使えます。

### 引数

- `name` {{optional_inline}}
  - : 関数名。省略可能で、その場合は関数は*無名*になります。 name は関数本体のみのローカルです。
- `paramN` {{optional_inline}}
  - : 関数に渡される引数の名前です。
- `statements` {{optional_inline}}
  - : 関数の本体を構成する文です。

## 解説

関数式は関数宣言とよく似ており、ほとんど同じ書式でもあります (詳しくは {{jsxref("Statements/function", "function")}} 文を参照してください)。関数式と関数宣言の主な相違点は、*関数名*です。関数式では、*無名*関数を生成するために、関数名を省略できます。関数式は、定義するとすぐに実行する **IIFE** (即時実行関数)として使用できます。詳細については、{{jsxref("Functions", "関数", "", 1)}}の章を参照してください。

### 関数式の巻き上げ

JavaScript の関数式は、{{jsxref("Statements/function", "関数宣言", "#Function_declaration_hoisting", 1)}}と違って巻き上げられません。定義前に関数式を使用することはできません。

```js
console.log(notHoisted); // undefined
// 変数名は巻き上げが行われますが、定義は行われません。そのため undefined になります。
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### 名前付き関数式

関数内でその関数自身を参照する必要がある場合は、名前付き関数式を作成する必要があります。**この名前は関数本体 (スコープ) に対してローカルです**。これにより標準外の {{jsxref("Functions/arguments/callee", "arguments.callee")}} プロパティの使用も避けられます。

```js
let math = {
  factit: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factit(3); //3;2;1;
```

関数式が代入された変数は `name` プロパティを持ちます。別の変数に代入しても name は変わりません。関数名が省略された場合、(暗黙的な名前が) 変数名になります。関数名が存在したら、それが関数名になります (明示的な名前)。これは{{jsxref("Functions/Arrow_functions", "アロー関数", "", 1)}}にもあてはまります (アロー関数は名前がないので変数名を暗黙的な名前として与えます)。

```js
var foo = function () {};
foo.name; // "foo"

var foo2 = foo;
foo2.name; // "foo"

var bar = function baz() {};
bar.name; // "baz"

console.log(foo === foo2); // true
console.log(typeof baz); // undefined
console.log(bar === baz); // false (errors because baz == undefined)
```

## 例

### 無名関数の作成

次の例では、無名関数を定義してそれを `x` に割り当てます。 関数は引数の 2 乗を返します。

```js
var x = function (y) {
  return y * y;
};
```

### 関数をコールバックとして使用

{{Glossary("Callback_function", "コールバック")}}としてより頻繁に使われます。

```js
button.addEventListener("click", function (event) {
  console.log("button is clicked!");
});
```

### 即時実行関数式 (IIFE) の使用

無名の関数が生成され、呼び出されます。

```js
(function () {
  console.log("Code runs!");
})();

// または

!(function () {
  console.log("Code runs!");
})();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Functions/Arrow_functions", "アロー関数", "", 1)}}
- {{jsxref("Functions", "関数", "", 1)}}
- {{jsxref("Function")}}
- {{jsxref("Statements/function", "function")}} 文
- {{jsxref("Statements/function*", "function*")}} 文
- {{jsxref("Operators/function*", "function*")}} 式
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Statements/async_function", "非同期関数", "", 1)}}
- {{jsxref("Operators/async_function", "非同期関数式", "", 1)}}
