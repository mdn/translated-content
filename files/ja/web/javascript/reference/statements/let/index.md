---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: dca6a5a6d2b20cc7529da4746a0c15e99a252579
---

{{jsSidebar("Statements")}}

**`let`** 文はブロックスコープのローカル変数を宣言します。任意で値を代入して初期化できます。

{{EmbedInteractiveExample("pages/js/statement-let.html")}}

## 構文

```js-nolint
let name1;
let name1 = value1;
let name1 = value1, name2 = value2;
let name1, name2 = value2;
let name1 = value1, name2, /* …, */ nameN = valueN;
```

### 引数

- `nameN`
  - : 宣言する変数または複数の変数の名前です。それぞれは JavaScript の正式な識別子である必要があります。
- `valueN` {{optional_inline}}
  - : 宣言される変数ごとに、任意で初期値を JavaScript の正式な式で指定することができます。

[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)構文を変数の宣言に使用することもできます。

```js
let { bar } = foo; // where foo = { bar: 10, baz: 12 };
// これは、値が 10 の 'bar' という名前の変数を作成します。
```

## 解説

`let` を使用することで、それが使用された{{jsxref("statements/block", "ブロック", "", 1)}}の文または式にスコープを限定した変数を宣言することができます。これは {{jsxref("statements/var", "var")}} キーワードのように、変数をブロックスコープに関係なく、グローバルや関数全体のローカルに定義するようなことはありません。他にも {{jsxref("statements/var", "var")}} と `let` の違いは、後者が宣言文に到達した後でしかアクセスできないという点があります（[一時的なデッドゾーン](#一時的なデッドゾーン_tdz)を参照）。このため、`let` 宣言は一般に[巻き上げされない](/ja/docs/Glossary/Hoisting)と見なされています。

{{jsxref("statements/const", "const", "Description")}} と同様に、`let` はグローバル (一番上のスコープ) で宣言されたときに {{domxref("window")}} オブジェクトのプロパティを生成*しません*。

[なぜ "let" という名前が選ばれたのかについての説明](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri)は、リンク先の StackOverflow の解答で解説されています。

`let` 変数の多くの課題は、使用されるスコープの先頭で宣言することで避けることができます（そうすることで、読み取り可能な範囲に影響を与えることがあります）。

`var` とは異なり、`let` は[宣言であり、文ではない](/ja/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations)ものです。つまり、単独の `let` 宣言をブロックの本体として使用することはできません（変数にアクセスする方法がないので、明らかです）。

```js example-bad
if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

## 例

### スコープのルール

`let` で定義された変数は、自身が定義されたブロックと、そこに含まれるサブブロックがスコープになります。この点において `let` のふるまいは `var` にとてもよく似ています。大きな違いは、`var` で定義された変数のスコープはそれを含んでいる関数全体になるということです。

```js
function varTest() {
  var x = 1;
  {
    var x = 2; // 同じ変数です!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // 異なる変数
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

プログラムや関数の最上位においては、`let` は `var` とは異なり、グローバルオブジェクト上にプロパティを生成しません。例を示します。

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### 再宣言

同じ関数やブロックのスコープ内で同じ変数を再宣言すると {{jsxref("SyntaxError")}} が発生します。

```js example-bad
if (x) {
  let foo;
  let foo; // SyntaxError が発生します。
}
```

{{jsxref("Statements/switch", "switch")}} 文には 1 つのブロックしかないため、エラーが発生してしまうかもしれません。

```js example-bad
let x = 1;

switch (x) {
  case 0:
    let foo;
    break;
  case 1:
    let foo; // 再宣言のため TypeError
    break;
}
```

ただし、指摘しておくべき重要な点として、case 節の中で入れ子にしたブロックを使えば、新しいブロックスコープの字句環境を作ることができるため、上記のような再宣言エラーが発生しなくなります。

```js
let x = 1;

switch (x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}
```

Firefox のウェブコンソール（**ツール** > **ウェブ開発者ツール** > **ウェブコンソール**）などの REPL で実験しているときに、同じ名前の `let` 宣言を 2 つの入力で実行すると、同じ再宣言エラーが得られる場合があります。この課題については、[Firefox bug 1580891](https://bugzil.la/1580891)でさらなるディスカッションをご覧ください。Chrome コンソールでは、異なる REPL 入力間で `let` を再宣言することができます。

### 一時的なデッドゾーン (TDZ)

`let` または `const` 変数は、ブロックの始まりからコードが実行されて変数が宣言され初期化される行に到達するまでは、「一時的なデッドゾーン」(TDZ) 内にあると言います。

TDZ の中にいる間は、変数は値で初期化されておらず、何かアクセスしようとすると {{jsxref("ReferenceError")}} が発生することになります。変数は、宣言されたコードの行まで実行されると、値で初期化されます。変数宣言で初期値を指定しなかった場合は、`undefined`という値で初期化されます。

{{jsxref("Statements/var", "var", "var_の巻き上げ")}} で宣言された変数が `undefined` の値で始まるのとは異なり、これらの変数は定義が評価されるまでは初期化されません。以下のコードは、`let` と `var` が宣言された行より前のコードでアクセスされた場合に、異なる結果が得られることを示しています。

```js example-bad
{
  // TDZ starts at beginning of scope
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

コードが書かれた順番（位置）ではなく、実行の順番（時間）に依存するゾーンであるため、「時間的」という言葉が使用されています。例えば、下記のコードは、`let` 変数を使用する関数は変数宣言の前に現れていますが、その関数が TDZ の外で呼び出されているため、動作します。

```js
{
  // TDZ はスコープの先頭から始まる
  const func = () => console.log(letVar); // OK

  // TDZ の中では、letVar にアクセスすると `ReferenceError` が発生する

  let letVar = 3; // TDZ の終わり (letVar)
  func(); // TDZ の外での呼び出し
}
```

#### 一時的なデッドゾーンと typeof

`typeof` 演算子を使用して一時的なデッドゾーン内の変数の型を確認するしようとすると、{{jsxref("ReferenceError")}} が発生します。

```js example-bad
// 'ReferenceError' が発生します
console.log(typeof i);
let i = 10;
```

これは、宣言されていない変数に対して `typeof` を使用した場合、`undefined` の値と見なされるのとは異なります。

```js
// 'undefined' と表示
console.log(typeof undeclaredVariable);
```

#### 一時的なデッドゾーンと字句スコープと組み合わせた例

このブロックの `foo` は一時的なデッドゾーンの中にあります。

```js example-bad
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

外側の `var foo` に値があるため、`if` ブロックは実行されます。
しかし、字句スコープにより、この値はブロックの内部では利用できません。`if`ブロックの内側にある識別子 `foo` は `let foo` になります。
式 `foo + 55` で `ReferenceError` が発生します。これは `let foo` の初期化がまだ完了していない、つまり一時的なデッドゾーンにあるためです。

この現象は、以下のような状況で混乱することがあります。
`let n of n.a` という命令は、すでに for ループのブロックのプライベートスコープ内にあります。
そのため、識別子 `n.a` は、命令自体の最初の部分 (`let n`) にある '`n`' オブジェクトのプロパティ '`a`' として解決されます。その宣言文にはまだ到達・完了していないため、まだ一時的なデッドゾーン内にあるとみなされます。

```js example-bad
function go(n) {
  // n here is defined!
  console.log(n); // { a: [1, 2, 3] }

  for (let n of n.a) {
    //          ^ ReferenceError
    console.log(n);
  }
}

go({ a: [1, 2, 3] });
```

### そのほかの場面

ブロックの中で使えば、`let` の変数のスコープはそのブロックの中に制限されます。スコープが自身の宣言された関数全体になる `var` との違いに注意してください。

```js
var a = 1;
var b = 2;

{
  var a = 11; // スコープはグローバル
  let b = 22; // スコープは if ブロック内

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

しかし、下記の `var` と `let` 宣言の組み合わせは、`var` がブロックの先頭に配置されているため、{{jsxref("SyntaxError")}} になります。これによって、変数が暗黙的に再宣言されるからです。

```js example-bad
let x = 1;

{
  var x = 2; // 再宣言のため SyntaxError
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- [巻き上げ](/ja/docs/Glossary/Hoisting)
- [ES6 In Depth: `let` and `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)
- [Breaking changes in `let` and `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/)
- [You Don't Know JS: Scope & Closures: Chapter 3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md)
- [StackOverflow: What is the Temporal Dead Zone](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850)?
- [StackOverflow: What is the difference between using `let` and `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var)
