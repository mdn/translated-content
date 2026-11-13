---
title: function 式
slug: Web/JavaScript/Reference/Operators/function
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`function`** キーワードは、式の中で関数を定義するために使用されます。

[`function` 関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)や[アロー構文](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を用いて関数を定義することもできます。

{{InteractiveExample("JavaScript デモ: function 式", "shorter")}}

```js interactive-example
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// 予想される結果: 12
```

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

> [!NOTE]
> [式文](/ja/docs/Web/JavaScript/Reference/Statements/Expression_statement)はキーワード `function` から始めることができません。 [`function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)との曖昧さをさけるためです。 `function` キーワードは文を受け入れることができない文脈で現れた時だけ式を開始します。

### 引数

- `name` {{optional_inline}}
  - : 関数名。省略可能で、その場合は関数は*無名*になります。 name は関数本体のみのローカルです。
- `paramN` {{optional_inline}}
  - : 関数の正式な引数の名前。引数の構文については、[関数リファレンス](/ja/docs/Web/JavaScript/Guide/Functions#関数の引数)を参照してください。
- `statements` {{optional_inline}}
  - : 関数の本体を構成する文です。

## 解説

`function` 式は [`function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)とよく似ており、ほとんど同じ書式です。 `function` 式と `function` 宣言の主な相違点は、*関数名*です。 `function` 式では、*無名*関数を生成するために、関数名を省略できます。 `function` 式は、定義するとすぐに実行する [IIFE](/ja/docs/Glossary/IIFE) （即時実行関数）として使用できます。詳細については、[関数](/ja/docs/Web/JavaScript/Reference/Functions)の章を参照してください。

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
  factorial: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factorial(3); // 3;2;1;
```

関数式に名前が付けられている場合、関数の [`name`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/name) プロパティには、構文から推測される暗黙の名前 (関数が割り当てられている変数など) ではなく、その名前が設定されます。

宣言とは異なり、関数式の名前は読み取り専用です。

```js
"use strict";

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

[IIFE](/ja/docs/Glossary/IIFE) は、単一の式が要求される場所で、任意の数の文を自分自身で実行（場合によっては値を返す）、一般的なパターンとして使用されています。 IIFE の多くの従来からの用途は、[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)や[ブロックスコープ宣言](/ja/docs/Web/JavaScript/Reference/Statements/let)といった新しい構文機能によって取って代わられています。 IIFE 自体は現在、[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を付けて記述されることが一般的ですが、その考え方は変わりません。一般的に IIFE は、このようになっています。

```js
// 標準的な IIFE
(function () {
  // 文…
})();

// 引数付きの IIFE
(function (a, b) {
  console.log(a + b);
})(1, 2); // 3 を出力

// 変数を初期化するために使用される IIFE
const value = (() => {
  const randomValue = Math.random();
  if (randomValue > 0.5) {
    return "heads";
  }
  return "tails";
})();
```

ここでは、いくつかの用途を例を添えて紹介します。

### スクリプトコードでグローバル名前空間を汚染することを避ける

すべてのスクリプトの最上位のスコープは共有されており、異なるファイルから多数の関数やグローバル変数が導入される可能性があるため、名前の競合を避けるには、グローバル宣言される名前の数を制限することが重要です（これは[モジュール](/ja/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_classic_scripts)では大幅に緩和されますが、それでも一時変数のスコープを制限することは、特にファイルがとても長い場合に有益です）。初期化コードで再利用する必要がない部分がある場合、 IIFE パターンを使用することができます。関数宣言や関数式よりも優れており、コードがここで一度だけ実行されることを保証します。

```js
// スクリプトの最上位（モジュールではない）

var globalVariable = (() => {
  // いくらかの初期化コード
  let firstVariable = something();
  let secondVariable = somethingElse();
  return firstVariable + secondVariable;
})();

// firstVariable と secondVariable は関数本体の外からアクセスできない
```

### モジュールパターン

また、 IIFE を使用してプライベート変数やパブリック変数、メソッドを作成することもできます。モジュールパターンのより高度な活用や、 IIFE のそれ以外にも使用方法については、 Addy Osmani 著『Learning JavaScript Design Patterns』を参照してください。

```js
const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // この変数は非公開
    const doBadThings = () => {
      console.log("お前の金で悪いことをしてやる");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "お金が足りない";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "お前の金で悪いことをしてやる"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "お前の金で悪いことをしてやる"
console.log(secondAccount.withdraw(30)); // "お金が足りない"
console.log(secondAccount.withdraw(20)); // 0
```

### ES6 以前の var をつけた for ループ

ブロックスコープの `let` および `const` 宣言が導入される以前、古いコードでは次の ような IIFE の使用例が見られました。 `var` 文では、指定された関数スコープとグローバルスコープのみが存在します。
たとえば、 Button 0 と Button 1 というテキストを持つ 2 つのボタンを作成し、クリック時にそれぞれ 0 と 1 をアラート表示したいとします。以下のコードは動作しません。

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2
```

クリックすると、Button 0 と Button 1 の両方が 2 を通知します。これは `i` がグローバル変数であり、最後の値が 2 であるためです。ES6 以前では、 IIFE パターンを使用してこの問題を修正することができました。

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = (function (copyOfI) {
    return function () {
      console.log(copyOfI);
    };
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2
```

Button 0 と Button 1 がクリックされると、それぞれ 0 と 1 が通知されます。変数 `i` はグローバルに定義されています。 `let` 文を使用すれば、次のように単純に記述できます。

```js
for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
```

クリックすると、これらのボタンは 0 と 1 を通知します。

### 式の場所での制御フロー文

IIFE により、 `switch` などの言語構文を式内で使用することができます。

```js
someObject.property = (() => {
  switch (someVariable) {
    case 0:
      return "zero";
    case 1:
      return "one";
    default:
      return "unknown";
  }
})();
```

これの手法は、変数を`const`にしたいが、初期化時に`let`や`var`を使用せざるを得ない状況で特に有益です。

```js
let onlyAssignedOnce;
try {
  onlyAssignedOnce = someFunctionThatMightThrow();
} catch (e) {
  onlyAssignedOnce = null;
}
```

IIFE を使用することで、変数を `const` にすることができます。

```js
const onlyAssignedOnce = (() => {
  try {
    return someFunctionThatMightThrow();
  } catch (e) {
    return null;
  }
})();
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
