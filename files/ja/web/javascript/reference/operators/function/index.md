---
title: 関数式
slug: Web/JavaScript/Reference/Operators/function
l10n:
  sourceCommit: 8680b4c648f2f2be1a391e3a318dff7c7d50f3f4
---

{{jsSidebar("Operators")}}

**`function`** キーワードは、式の中で関数を定義するために使用されます。

[`function` 関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)や[アロー構文](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を用いて関数を定義することもできます。

{{EmbedInteractiveExample("pages/js/expressions-functionexpression.html", "shorter")}}

## 構文

```js-nolint
function (param0) {
  statements
}
function (param0, param1) {
  statements
}
function (param0, param1, /* …, */ paramN) {
  statements
}

function name(param0) {
  statements
}
function name(param0, param1) {
  statements
}
function name(param0, param1, /* …, */ paramN) {
  statements
}
```

> **メモ:** [式文](/ja/docs/Web/JavaScript/Reference/Statements/Expression_statement)はキーワード `function` から始めることができません。 [`function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)との曖昧さをさけるためです。 `function` キーワードは文を受け入れることができない文脈で現れた時だけ式を開始します。

### 引数

- `name` {{optional_inline}}
  - : 関数名。省略可能で、その場合は関数は*無名*になります。 name は関数本体のみのローカルです。
- `paramN` {{optional_inline}}
  - : 関数の正式な引数の名前。引数の構文については、[関数リファレンス](/ja/docs/Web/JavaScript/Guide/Functions#関数の引数)を参照してください。
- `statements` {{optional_inline}}
  - : 関数の本体を構成する文です。

## 解説

`function` 式は [`function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)とよく似ており、ほとんど同じ書式ですあります。 `function` 式と `function` 宣言の主な相違点は、*関数名*です。 `function` 式では、*無名*関数を生成するために、関数名を省略できます。 `function` 式は、定義するとすぐに実行する [IIFE](/ja/docs/Glossary/IIFE) （即時実行関数）として使用できます。詳細については、[関数](/ja/docs/Web/JavaScript/Reference/Functions)の章を参照してください。

### 関数式の巻き上げ

JavaScript の関数式は、[関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function#巻き上げ)と違って巻き上げられません。定義前に関数式を使用することはできません。

```js
console.log(notHoisted); // undefined
// 変数名は巻き上げが行われますが、定義は行われません。
// そのため undefined になります。
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### 名前付き関数式

関数内でその関数自身を参照する必要がある場合は、名前付き関数式を作成する必要があります。この名前は関数本体（スコープ）に対してローカルです。これにより、再帰呼び出しを行う場合に非推奨の {{jsxref("Functions/arguments/callee", "arguments.callee")}} プロパティを使用せずに済みます。

```js
const math = {
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

関数式に名前が付けられている場合、関数の [`name`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/name) プロパティには、構文から推測される暗黙の名前 (関数が割り当てられている変数など) ではなく、その名前が設定されます。

宣言とは異なり、関数式の名前は読み取り専用です。

```js
function foo() {
  foo = 1;
}
foo();
console.log(foo); // 1
(function foo() {
  foo = 1; // TypeError: Assignment to constant variable.
})();
```

## 例

### 無名関数の作成

次の例では、無名関数を定義してそれを `x` に割り当てます。 関数は引数の 2 乗を返します。

```js
const x = function (y) {
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

```js-nolint
(function () {
  console.log("Code runs!");
})();

// または

!function () {
  console.log("Code runs!");
}();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Function")}}
- {{jsxref("Functions/Arrow_functions", "アロー関数", "", 1)}}
