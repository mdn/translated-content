---
title: ブロック
slug: Web/JavaScript/Reference/Statements/block
l10n:
  sourceCommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jsSidebar("Statements")}}

**ブロック文** は 0 個以上の文をグループ化するのに使われます。ブロックは中括弧（「波括弧」）の組で区切られ、0 個以上の文または宣言のリストを含みます。

{{InteractiveExample("JavaScript デモ: Statement - Block", "taller")}}

```js interactive-example
var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
// Expected output: 2

console.log(y);
// Expected output: 1
```

## 構文

```js-nolint
{
  StatementList
}
```

- `StatementList`
  - : ブロック文の中でグループ化される文や宣言です。

## 解説

ブロック文は、他の言語ではよく**複合文**と呼ばれます。これは複数の文を JavaScript からみて 1 つの文にまとめるために使用します。ブロック内に複数の文をまとめることは、JavaScript では、特に {{jsxref("Statements/if...else", "if...else")}} and {{jsxref("Statements/for", "for")}} などのフロー制御文との関連で良く行われることです。反対の動作は[空文](/ja/docs/Web/JavaScript/Reference/Statements/Empty)を使用することで実現でき、これは 1 つの文が必要な場所に文を置かずにおくことができます。

さらに、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)、[`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)、[`class`](/ja/docs/Web/JavaScript/Reference/Statements/class) などのブロックスコープ宣言と組み合わせることで、[IIFE](/ja/docs/Glossary/IIFE) のように、一時変数がグローバル名前空間を汚染するのを防ぐことができます。

### 非厳格モード時の var または関数定義のブロックスコープの規則

非厳格モードでは、`var` の宣言や、[関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)で作成された変数は、ブロックスコープを**持ちません**。ブロック内で導入された変数は、それを含んでいる関数またはスクリプトがスコープとなり、変数を設定した効果は、そのブロック自体を超えて持続します。言い換えれば、ブロック文はスコープを作成しません。例えば、

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 2
```

これが 2 を出力するのは、ブロックの中の `var x` 文がブロックより前と同じスコープを持つからです。

非厳格モードでは、ブロック内の関数定義は奇妙な動きをします。使用しないでください。

### 厳格モード時の let、const、関数宣言のブロックスコープの規則

対照的に、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)、[`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)、[`class`](/ja/docs/Web/JavaScript/Reference/Statements/class) で宣言された識別子は、ブロックスコープを持ちます。

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 1
```

この `x = 2` は、それが定義されたブロックのスコープに制限されています。

同じことが `const` にも言えます。

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // 1 が出力され、SyntaxError は発生しない...
```

ブロックスコープを持つ `const c = 2` は、ブロック内で固有に宣言することができるため、`SyntaxError: Identifier 'c' has already been declared` を発生させ*ない*ことに注意してください。

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、ブロック内の関数宣言はそのブロックのスコープを持ち、巻き上げられます。

```js
"use strict";

{
  foo(); // "foo" と出力
  function foo() {
    console.log("foo");
  }
}

foo(); // ReferenceError: foo is not defined
```

## 例

### for ループの本体としてブロック文を使用する

[`for`](/ja/docs/Web/JavaScript/Reference/Statements/for) ループは本体として単一の文を受け入れます。

```js
for (let i = 0; i < 10; i++) console.log(i);
```

ループ本体で複数の文を使用したい場合は、1 つのブロック文にまとめることができます。

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(i ** 2);
}
```

### ブロック文を使用したデータのカプセル化

`let` と `const` の宣言は、それを含むブロックのスコープになります。これにより、データを関数で包むことなく、グローバルスコープから隠すことができます。

```js
let sector;
{
  // これらの変数はこのブロックのスコープであり、
  // ブロックの後でアクセスすることはできません。
  const angle = Math.PI / 3;
  const radius = 10;
  sector = {
    radius,
    angle,
    area: (angle / 2) * radius ** 2,
    perimeter: 2 * radius + angle * radius,
  };
}
console.log(sector);
// {
//   radius: 10,
//   angle: 1.0471975511965976,
//   area: 52.35987755982988,
//   perimeter: 30.471975511965976
// }
console.log(typeof radius); // "undefined"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/let", "let")}}
