---
title: let
slug: Web/JavaScript/Reference/Statements/let
---

{{jsSidebar("Statements")}}

**`let`** 文はブロックスコープのローカル変数を宣言します。任意で値を代入して初期化できます。

{{EmbedInteractiveExample("pages/js/statement-let.html")}}

## 構文

```
let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN];
```

### 引数

- `var1`, `var2`, …, `varN`
  - : 宣言する変数または複数の変数の名前です。それぞれは JavaScript の正式な識別子である必要があります。
- `value1`, `value2`, …, `valueN` {{optional_inline}}
  - : 宣言される変数ごとに、任意で初期値を JavaScript の正式な式で指定することができます。

[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)構文は、変数の宣言にも使用できます。

```
let { bar } = foo; // where foo = { bar:10, baz:12 };
/* これは、値が 10 の 'bar' という名前の変数を作成します。*/
```

## 解説

**`let`** を使用することで、それが使用された{{jsxref("statements/block", "ブロック", "", 1)}}、文または式にスコープを限定した変数を宣言することができます。これは {{jsxref("statements/var", "var")}} キーワードのように、変数をブロックスコープに関係なく、グローバルや関数全体のローカルに定義するようなことはありません。他にも、{{jsxref("statements/var", "var")}} と `let` は、後者は[パーサーが評価したときのみ](#Temporal_dead_zone)値の初期化が行われる点が異なります。(下記参照)

{{jsxref("statements/const", "const", "Description")}} と同様に、`let` はグローバル (一番上のスコープ) で宣言されたときに {{domxref("window")}} オブジェクトのプロパティを生成*しません*。

なぜ "**let**" という名前が選ばれたのかについては、[こちら](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri) で解説されています。

## 例

### スコープのルール

**`let`** で定義された変数は、自身が定義されたブロックと、そこに含まれるサブブロックがスコープになります。この点において **`let`** のふるまいは **`var`** にとてもよく似ています。大きな違いは、**`var`** で定義された変数のスコープはそれを含んでいる関数全体になるということです。

```js
function varTest() {
  var x = 1;
  {
    var x = 2;  // 同じ変数です!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // 異なる変数
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

プログラムや関数の最上位においては、**`let`** は **`var`** とは異なり、グローバルオブジェクト上にプロパティを生成しません。

```js
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### プライベートメンバーの模倣

{{Glossary("Constructor", "コンストラクター")}}の処理の中で **`let`** を使用すれば、[クロージャ](/ja/docs/Web/JavaScript/Closures)を使用することなくプライベートメンバーを結び付けることができます。

```js
var Thing;

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

ローカル変数をクロージャで閉じた場合と同様に、`var` を使ってプライバシーパターンを作成できますが、上の例のようなブロックスコープではなく、関数スコープ（通常はモジュールパターンの IIFE）が必要です。

### 再宣言

同じ関数やブロックのスコープ内で同じ変数を再宣言すると {{jsxref("SyntaxError")}} が発生します。

```js example-bad
if (x) {
  let foo;
  let foo; // SyntaxError が発生します。
}
```

{{jsxref("Statements/switch", "switch")}} 文には 1 つのブロックしかないため、エラーを発生させてしまうかもしれません。

```js example-bad
let x = 1;
switch(x) {
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

switch(x) {
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

### 一時的なデッドゾーン

{{jsxref("Statements/var", "var", "var_hoisting")}} で宣言された変数が `undefined` の値で始まるのとは異なり、`let` の変数は定義が評価されるまで初期化されません。変数を宣言より前で参照すると {{jsxref("ReferenceError")}} が発生します。変数はブロックの先頭から初期化が行われるまで、「一時的なデッドゾーン」にあるのです。

```js example-bad
function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}
```

### 一時的なデッドゾーンと `typeof`

単純に宣言されていない変数や `undefined` の値を持つ変数とは異なり、`typeof` 演算子を使用して一時的なデッドゾーン内の変数の型を確認するしようとすると、{{jsxref("ReferenceError")}} が発生します。

```js example-bad
// 'undefined' を表示
console.log(typeof undeclaredVariable);

// 'ReferenceError' が発生します
console.log(typeof i);
let i = 10;
```

### 一時的なデッドゾーンとレキシカルスコープと組み合わせた例

字句スコープのため、式 `(foo + 55)` の中にある識別子 `foo` は `if` ブロックの `foo` と評価され、その上にある変数 `foo` (`33` の値を持つ) とは評価されません。

同じ行では、`if` ブロックの `foo` が字句環境よりすでに生成されていますが、初期化に達していない (完了していない) 状態です (その分自身の一部であるため)。

このブロックの `foo` は一時的なデッドゾーンの中にあります。

```js example-bad
function test(){
   var foo = 33;
   if(foo) {
      let foo = (foo + 55); // ReferenceError
   }
}
test();
```

この現象は、以下のような状況で混乱を催すかもしれません。`let n of n.a` という命令は、すでに for ループブロックの私的スコープの中になります。そのため、識別子 `n.a` は命令自身 (`let n`) の最初の部分にある '`n`' オブジェクトのプロパティ '`a`' として解決されます。

その宣言文にはまだ到達・完了していないため、まだ一時的なデッドゾーン内にあるとみなされます。

```js example-bad
function go(n) {
  // n here is defined!
  console.log(n); // Object {a: [1,2,3]}

  for (let n of n.a) { // ReferenceError
    console.log(n);
  }
}

go({a: [1, 2, 3]});
```

### そのほかの場面

ブロックの中で使えば、**`let`** の変数のスコープはそのブロックの中に制限されます。スコープが自身の宣言された関数全体になる **`var`** との違いに注意してください。

```js
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // スコープはグローバル
  let b = 22; // スコープは if ブロック内

  console.log(a);  // 11
  console.log(b);  // 22
}

console.log(a); // 11
console.log(b); // 2
```

しかし、下記の **`var`** と **`let`** 宣言の組み合わせは、**`var`** がブロックの先頭に配置されているため、{{jsxref("SyntaxError")}} になります。これによって、変数が暗黙的に再宣言されるからです。

```js example-bad
let x = 1;

{
  var x = 2; // 再宣言のため SyntaxError
}
```

## 仕様

| 仕様                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-let-and-const-declarations', 'Let and Const Declarations')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.let")}}

## 関連情報

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- [ES6 In Depth: `let` and `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)
- [Breaking changes in `let` and `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/)
- [You Don't Know JS: Scope & Closures: Chapter 3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md)
- [StackOverflow: What is the Temporal Dead Zone](https://stackoverflow.com/a/33198850/1125029)?
- [StackOverflow: What is the difference between using `let` and `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable)
