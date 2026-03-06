---
title: function
slug: Web/JavaScript/Reference/Statements/function
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`function`** 宣言は、新しい関数と指定された名前の{{Glossary("binding", "バインド")}}を作成します。

関数は [`function` 式](/ja/docs/Web/JavaScript/Reference/Operators/function)を使用して定義することもできます。

{{InteractiveExample("JavaScript デモ: function 宣言", "shorter")}}

```js interactive-example
function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));
// 予想される結果: 30
```

## 構文

```js-nolint
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

### 引数

- `name`
  - : 関数の名前です。
- `param` {{optional_inline}}
  - : この関数の公式な引数の名前です。引数の最大数はエンジンによって異なります。引数の構文については、[関数リファレンス](/ja/docs/Web/JavaScript/Guide/Functions#関数の引数)を参照してください。
- `statements` {{optional_inline}}
  - : 関数の本体を構成する文です。

## 解説

関数宣言は {{jsxref("Function")}} オブジェクトを生成します。関数が呼び出されるたびに、最後に実行された {{jsxref("Statements/return", "return")}} 文で指定された値を返します。関数本体の末尾に到達した場合は`undefined`を返します。関数の詳細については、[関数](/ja/docs/Web/JavaScript/Reference/Functions)を参照してください。

`function` 宣言は、{{jsxref("Statements/var", "var")}} と {{jsxref("Statements/let", "let")}} を併せたような動作をします。

- `let` と同様に、厳格モードでは、[関数制限は最も近い包含ブロックのスコープになります](#ブロックレベル関数宣言)。
- `let` と同様に、モジュールの最上位での関数宣言や、厳格モードでのブロック内では、他の宣言で[再宣言](#再宣言)することができません。
- `var` と同様に、スクリプトの最上位での関数宣言は（厳格モードか否かに関わらず）、 {{jsxref("globalThis")}} のプロパティとなります。スクリプトの最上位または関数本体での関数宣言は（厳格モードか否かに関わらず）、別の `function` または `var` によって再宣言される可能性があります。
- 両者と同様に、関数宣言は再割り当て可能ですが、それは避けるべきです。
- どちらとも異なり、関数宣言はその値とともに[巻き上げ](#巻き上げ)られ、そのスコープ内のどこでも呼び出すことができます。

### ブロックレベル関数宣言

> [!WARNING]
> [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)ではない場合、ブロック内での関数宣言は奇妙な動きをします。ブロック内での関数宣言は、厳格モード時のみ行ってください。

関数は条件付きで宣言できます。つまり、関数文を [`if`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) 文の中に入れ子にすることができます。ただし、厳格モードでない場合、実装によって結果に一貫性がありません。

```js
console.log(
  `'foo' の名前はグローバル${
    "foo" in globalThis ? "です" : "ではありません"
  }。 typeof foo は ${typeof foo} です。`,
);
if (false) {
  function foo() {
    return 1;
  }
}

// Chrome では:
// 'foo' の名前はグローバルです。 typeof foo は undefined です。
//
// Firefox では:
// 'foo' の名前はグローバルです。 typeof foo は undefined です。
//
// Safari では:
// 'foo' の名前はグローバルです。 typeof foo は function です。
```

`if` 本体が実際に実行されるかどうかにかかわらず、スコープと巻き上げの効果は変わりません。

```js
console.log(
  `'foo' の名前はグローバル${
    "foo" in globalThis ? "です" : "ではありません"
  }。 typeof foo は ${typeof foo} です。`,
);
if (true) {
  function foo() {
    return 1;
  }
}

// In Chrome:
// 'foo' の名前はグローバルです。 typeof foo は undefined です。
//
// In Firefox:
// 'foo' の名前はグローバルです。 typeof foo は undefined です。
//
// In Safari:
// 'foo' の名前はグローバルです。 typeof foo は function です。
```

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、[ブロック](/ja/docs/Web/JavaScript/Reference/Statements/block)レベルの関数宣言はそのブロックのスコープとなり、そのブロックの先頭に巻き上げられます。

```js
"use strict";

{
  foo(); // "foo" をログ出力
  function foo() {
    console.log("foo");
  }
}

console.log(
  `'foo' の名前はグローバル${
    "foo" in globalThis ? "です" : "ではありません"
  }。 typeof foo は ${typeof foo} です。`,
);
// 'foo' の名前はグローバルではありません。 typeof foo は undefined です。
```

### 巻き上げ

JavaScript の関数宣言は、それを囲む関数やグローバルスコープの先頭に[巻き上げ](/ja/docs/Glossary/Hoisting)られます。関数を宣言する前に使うことができます。

```js
hoisted(); // "foo" とログ出力

function hoisted() {
  console.log("foo");
}
```

[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)は巻き上げられないことに注意してください。

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### 再宣言

`function` 宣言が同じスコープ内で再宣言できるかどうかは、それが含まれているスコープによって決まります。

スクリプトの最上位レベルでは、`function` 宣言は `var` と同様に振る舞い、別の `function` または `var` によって再宣言可能ですが、{{jsxref("Statements/let", "let")}}、{{jsxref("Statements/const", "const")}}、{{jsxref("Statements/class", "class")}} によって再宣言することはできません。

```js-nolint example-bad
function a(b) {}
function a(b, c) {}
console.log(a.length); // 2
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

`function` 宣言が `var` によって再宣言される場合、`var` 宣言の初期化子は、両者の相対的な位置に関係なく、常にその関数の値を上書きします。これは、関数宣言が初期化子の評価より前に巻き上げられるためであり、初期化子は後から実行され、値を上書きするからです。

```js
var a = 1;
function a() {}
console.log(a); // 1
```

関数本体の最上位レベルでは、`function` も `var` と同様に振る舞い、再宣言したり引数と同じ名前を持ったりすることが可能です。

```js
function foo(a) {
  function a() {}
  console.log(typeof a);
}

foo(2); // ログ出力: "function"
```

厳格モードでは、モジュールまたはブロックの最上位レベルにおける `function` 宣言は `let` と同様に動作し、それ以外のいかなる宣言によっても再宣言することはできません。

```js-nolint example-bad
// 現在のソースがモジュールである場合
function foo() {}
function foo() {} // SyntaxError: Identifier 'foo' has already been declared
```

```js-nolint example-bad
"use strict";
{
  function foo() {}
  function foo() {} // SyntaxError: Identifier 'foo' has already been declared
}
```

`catch` ブロック内の `function` 宣言は、厳格モードでなくても、`catch` にバインドされた識別子と同じ名前を持つことはできません。

```js-nolint example-bad
try {
} catch (e) {
  function e() {} // SyntaxError: Identifier 'e' has already been declared
}
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

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Function")}}
- [`function` 式](/ja/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
