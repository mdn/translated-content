---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`let`** 宣言は、再代入可能な、ブロックスコープのローカル変数を宣言します。任意で値を代入して初期化できます。

{{InteractiveExample("JavaScript デモ: let 宣言")}}

```js interactive-example
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // 予想される結果: 2
}

console.log(x);
// 予想される結果: 1
```

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
  - : 宣言する変数または複数の変数の名前です。それぞれは JavaScript の正規の[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)または[構造分解パターン](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)である必要があります。
- `valueN` {{optional_inline}}
  - : 変数の初期値です。任意の正規の式にすることができます。デフォルト値は `undefined` です。

## 解説

`let` で宣言された変数のスコープは、その `let` 宣言を直近の中括弧で囲む、次のいずれかの構文です。

- [ブロック](/ja/docs/Web/JavaScript/Reference/Statements/block) 文
- {{jsxref("Statements/switch", "switch")}} 文
- {{jsxref("Statements/try...catch", "try...catch")}} 文
- [いずれかの `for` 文](/ja/docs/Web/JavaScript/Reference/Statements#反復処理)において、 `let` が文のヘッダーにある場合には、ループの本体
- 関数本体
- [静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

上記のいずれもない場合は、次のようになります。

- モジュールモードで実行中のコードで場合は、現在の[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)
- スクリプトモードで実行中のコードでは、グローバルスコープ

{{jsxref("Statements/var", "var")}} と比較して、`let` 宣言には次のような違いがあります。

- `let` 宣言は関数ではなく、ブロックのスコープになります。
- `let` 宣言は、宣言の場所に到達した後にのみアクセスできます（[一時的なデッドゾーン](#一時的なデッドゾーン_tdz)を参照）。このため、`let` 宣言は一般に[巻き上げされない](/ja/docs/Glossary/Hoisting)と考えられています。
- `let` 宣言は、スクリプトの最上位で宣言された場合に {{jsxref("globalThis")}} のプロパティを作成しません。
- `let` 宣言は、同じスコープ内では他のどの宣言においても[再宣言](#再宣言)できません。
- `let` は[文ではなく宣言](/ja/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations)を始めます。それは、ブロックの本体として単独の `let` 宣言を使用することはできないということです（変数にアクセスする方法がないため、当然です）。

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

なお `let` は、[厳格モードでない](/ja/docs/Web/JavaScript/Reference/Strict_mode)場合、`var` または `function` で宣言する際に識別子名として使用することができますが、予期しない構文場の曖昧さを避けるため、`let` を識別子名として使うのは避けてください。

多くのスタイルガイド（[MDN](/ja/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript#variable_declarations) を含む）では、変数がそのスコープ内で再代入されない場合、`let` よりも {{jsxref("Statements/const", "const")}} を使用することを推奨しています。これにより、変数の型（場合によっては値）が不変であることが明確になります。変更可能な非プリミティブ型には `let` を推奨している場合もあります。

`let` キーワードに続くリストは{{Glossary("binding", "バインド")}}リストと呼ばれ、カンマで区切られます。ここでカンマは[カンマ演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comma_operator)ではなく、`=` 記号は[代入演算子](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)ではありません。後続の変数の初期化子は、リスト内の先行する変数を参照できます。

### 一時的なデッドゾーン (TDZ)

`let`、`const`、`class` で宣言された変数は、ブロックの始まりからコードが実行されて変数が宣言され初期化される行に到達するまでは、「一時的なデッドゾーン」(TDZ) 内にあると言います。

TDZ の中にいる間は、変数は値で初期化されておらず、アクセスしようとすると {{jsxref("ReferenceError")}} が発生します。変数は、宣言されたコードの行まで実行されると、値で初期化されます。変数宣言で初期値を指定しなかった場合は、`undefined` という値で初期化されます。

これは {{jsxref("Statements/var", "var", "var_の巻き上げ")}} で宣言された変数が宣言前にアクセスされた場合に `undefined` の値を返すのとは異なります。以下のコードは、`let` と `var` が宣言された行より前のコードでアクセスされた場合に、異なる結果が得られることを示しています。

```js example-bad
{
  // TDZ はスコープの先頭で始まる
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // TDZ の終了（foo について）
}
```

「一時的」という言葉が使われているのは、このゾーンがコードが書かれた場所（位置）ではなく、実行の順序（時間）に依存するゾーンであるためです。例えば、下記のコードは、`let` 変数を使用する関数は変数宣言の前に現れていますが、その関数が TDZ の外で呼び出されているため、動作します。

```js
{
  // TDZ はスコープの先頭から始まる
  const func = () => console.log(letVar); // OK

  // TDZ の中では、letVar にアクセスすると `ReferenceError` が発生する

  let letVar = 3; // TDZ の終わり（letVar について）
  func(); // TDZ の外での呼び出し
}
```

`typeof` 演算子を使用して一時的なデッドゾーン内の変数の型を確認するしようとすると、{{jsxref("ReferenceError")}} が発生します。

```js example-bad
{
  typeof i; // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}
```

これは、宣言されていない変数に対して `typeof` を使用した場合、`undefined` の値と見なされるのとは異なります。

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> [!NOTE]
> `let` および `const` 宣言は、現在のスクリプトが処理される際にのみ処理されます。1 つの HTML 内でスクリプトモードで実行される 2 つの `<script>` 要素がある場合、1 つ目のスクリプトは、2 つ目スクリプトで宣言された最上位の `let` または `const` 変数に対する TDZ 制限の対象外です。ただし、1 つ目のスクリプトで `let` または `const` 変数を宣言した場合、2 つ目スクリプトで再度宣言すると[再宣言エラー](#再宣言)が発生します。

### 再宣言

`let` 宣言は、（訳注：同じ名前の）他の宣言、例えば `let`, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/import", "import")}} 宣言と同じスコープに置くことはできません。

```js-nolint example-bad
{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}
```

関数本体内の `let` 宣言は、引数と同じ名前を持つことはできません。`catch` ブロック内の `let` 宣言は、`catch` でバインドされた識別子と同じ名前を持つことはできません。

```js-nolint example-bad
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

Firefox のウェブコンソール（**ツール** > **ウェブ開発者ツール** > **ウェブコンソール**）などの REPL で実験しているときに、同じ名前の `let` 宣言を 2 つの入力で実行すると、同じ再宣言エラーが得られる場合があります。この課題については、[Firefox bug 1580891](https://bugzil.la/1580891)でさらなる議論をご覧ください。Chrome コンソールでは、異なる REPL 入力間で `let` を再宣言することができます。

{{jsxref("Statements/switch", "switch")}} 文には 1 つのブロックしかないため、エラーが発生してしまうかもしれません。

```js-nolint example-bad
let x = 1;

switch (x) {
  case 0:
    let foo;
    break;
  case 1:
    let foo; // SyntaxError: Identifier 'foo' has already been declared
    break;
}
```

エラーを避けるためには、それぞれの `case` を新しいブロック文で囲んでください。

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

外側の `var foo` に値があるため、`if` ブロックは実行されます。しかし、字句スコープにより、この値はブロックの内部では利用できません。`if` ブロックの内部にある識別子 `foo` は `let foo` になります。式 `foo + 55` で `ReferenceError` が発生します。これは `let foo` の初期化がまだ完了していない、つまり一時的なデッドゾーンにあるためです。

この現象は、以下のような状況で紛らわしくなることがあります。`let n of n.a` という命令は、すでに `for...of` ループのブロックのプライベートスコープ内にあります。そのため、識別子 `n.a` は、命令自体の最初の部分 (`let n`) にある '`n`' オブジェクトのプロパティ `a` として解決されます。その宣言文にはまだ到達・完了していないため、まだ一時的なデッドゾーン内にあるとみなされます。

```js example-bad
function go(n) {
  // n はここでは定義されていない
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

```js-nolint example-bad
let x = 1;

{
  var x = 2; // 再宣言のため SyntaxError
}
```

### 構造分解による宣言

それぞれの `=` の左側もバインドパターンである可能性があります。このことは、複数の変数を一度に作成することができるということです。

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

詳しい情報は[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- [巻き上げ](/ja/docs/Glossary/Hoisting)
- [ES6 In Depth: `let` and `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/) - hacks.mozilla.org (2015)
- [Breaking changes in `let` and `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/) - blog.mozilla.org (2015)
- [You Don't Know JS: Scope & Closures, Ch.3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md) - Kyle Simpson
- [What is the Temporal Dead Zone?](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850) - Stack Overflow
- [What is the difference between using `let` and `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var) - Stack Overflow
- [Why was the name 'let' chosen for block-scoped variable declarations in JavaScript?](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri) - Stack Overflow
