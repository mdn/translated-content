---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: 568f6f7fa0b5ccef3981758fde4e233e4aa10c09
---

{{jsSidebar("Statements")}}

**`var`** 文は関数スコープまたはグローバルスコープの変数を宣言し、任意でそれをある値に初期化します。

{{EmbedInteractiveExample("pages/js/statement-var.html")}}

## 構文

```js-nolint
var name1;
var name1 = value1;
var name1 = value1, name2 = value2;
var name1, name2 = value2;
var name1 = value1, name2, /* …, */ nameN = valueN;
```

- `nameN`
  - : 変数名です。正規の識別子です。
- `valueN` {{optional_inline}}
  - : その変数の初期値です。有効な式なら何でも取ることができます。既定値は `undefined` です。

あるいは、[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)を使用して変数を宣言することもできます。

```js
var { bar } = foo; // where foo = { bar:10, baz:12 };
/* これは、値が 10 の 'bar' という名前の変数を作成します。 */
```

## 解説

`var` 宣言は、現れる場所に関係なく、コードを実行する前に処理されます。これは{{Glossary("Hoisting", "巻き上げ")}}と呼ばれており、後述します。

`var` で宣言された変数のスコープは、その現在の*実行コンテキストとそのクロージャ*であり、その中で宣言された関数、あるいは関数の外で宣言された変数の場合はグローバルになります。`var` を使用して変数を重複して宣言しても、厳格モードであってもエラーは発生せず、別の代入が実行されない限り、変数の値は失われません。

```js
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError, `y` は `bar` のスコープ
}

foo();
```

`var` を使用して宣言された変数は、コードが実行されるよりも前に生成され、これは巻き上げと呼ばれています。これらの変数の初期値は `undefined` です。

```js
console.log(x); // undefined（注: ReferenceError ではない）
console.log("still going..."); // still going...
var x = 1;
console.log(x); // 1
console.log("still going..."); // still going...
```

グローバルコンテキストにおいては、`var` を使用して宣言された変数は、グローバルオブジェクトの構成不可能なプロパティとして追加されます。これは、プロパティ記述子を変更することができず、{{JSxRef("Operators/delete", "delete")}} を使用して削除することができないことを意味します。対応する名前は[グローバル環境レコード](https://www.ecma-international.org/ecma-262/10.0/index.html#sec-global-environment-records) （グローバル字句環境の一部の形）内部の `[[VarNames]]` スロットにも追加されます。`[[VarNames]]` 内の名前のリストにより、ランタイムがグローバル変数とグローバルオブジェクトの直接のプロパティを区別することができます。

グローバル変数用のグローバルオブジェクトに作成されたプロパティは、グローバルオブジェクトの直接のプロパティではなく、識別子を変数として扱うことになるため、構成不可に設定されています。 JavaScript には自動メモリー管理機能があるため、グローバル変数に `delete` 演算子を使えるようにしても意味がありません。

```js example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // 厳格モードでは TypeError。それ以外の場合は暗黙に失敗します。
delete x; // 厳格モードでは SyntaxError。それ以外の場合は暗黙に失敗します。
```

なお、 NodeJS の [CommonJS](https://www.commonjs.org/) モジュールとネイティブの [ECMAScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)のどちらも、最上位の変数宣言はそのモジュールのスコープとなるので、グローバルオブジェクトのプロパティとしては追加されません。

### 無修飾の識別子の代入

グローバルオブジェクトは、スコープチェインの最上位に位置します。名前を値に解決しようとすると、スコープチェインが検索されます。これは、グローバルオブジェクトのプロパティをすべてのスコープから、 `globalThis.` や `window.` や `global.` などの修飾名なしで便利に見ることができることを意味します。

グローバルオブジェクトは `String` プロパティを持っているので（`Object.hasOwn(globalThis, 'String')`）、以下のコードを使用することができます。

```js
function foo() {
  String("s"); // `String` 関数が暗黙に見える
}
```

つまり、グローバルオブジェクトは最終的に修飾されていない識別子を検索することになります。`globalThis.String` と記述する必要はなく、修飾されていない `String` と記述すればよいのです。厳格モードでない場合は、スコープチェインで宣言されている同名の変数がない場合は、グローバルオブジェクト上にその名前のプロパティを作成しようとしていると仮定して、非修飾識別子に代入することになります。

```js
foo = "f"; // 厳格モードでない場合は、`foo` という名前のプロパティを作成しようとしていると見なす
Object.hasOwn(globalThis, "foo"); // true
```

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、修飾されていない識別子への代入しようとすると、`ReferenceError` が発生し、グローバルオブジェクトに意図せずプロパティが生成されることを防ぎます。

上記の意味合いは、一般的に誤解されていますが、JavaScript には暗黙の変数や宣言されていない変数をは存在せず、単にそのように見える構文を持っているだけだということに注意してください。

### var の巻き上げ

`var` の宣言はコードを実行する前に処理されますので、変数はコード内のどこで宣言しても、コードの先頭で宣言したものと等価になります。また、変数を宣言する前に変数を使用することもできます。この動作は、変数の宣言が関数やグローバルのコードの先頭に移動したように見えるため、[巻き上げ](/ja/docs/Glossary/Hoisting)と呼ばれます。

```js
bla = 2;
var bla;
```

次のように見なされます。

```js
var bla;
bla = 2;
```

このため、変数は常にスコープ（グローバルのコードまたは関数のコード）の先頭で宣言することをお勧めします。そうすればどの変数が関数スコープ（ローカル）であるか、あるいはスコープチェインによって解決されたものかが明確になります。

ここで重要なのは、変数の定義のみが巻き上げられ、初期化は巻き上げられないことです。初期化は代入文に到達したときにのみ行われます。それまでは変数は `undefined` （ただし宣言された状態）のままになります。

```js
function do_something() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}
```

これは、暗黙的には次のように解釈されます。

```js
function do_something() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

## 例

### 2 つの変数を宣言して初期化する

```js
var a = 0,
  b = 0;
```

### 2 つの変数に 1 つの文字列を代入する

```js
var a = "A";
var b = a;
```

これは、以下と等価です。

```js-nolint
var a, b = a = 'A';
```

順番に注意してください。

```js
var x = y,
  y = "A";
console.log(x + y); // undefinedA
```

ここではコードを実行する前に `x` と `y` が宣言され、そのあとに代入を行います。"`x = y`" を実行したとき、`y` が存在しますので `ReferenceError` は発生せず、値は `undefined` になります。よって、`x` に undefined 値が代入されます。そして、`y` に値 'A' が代入されます。その結果、1 行目の後は `x === undefined && y === 'A'` となり、最終結果に至ります。

### 複数の変数を初期化する

```js-nolint
var x = 0;
function f() {
  var x = y = 1; // x はローカルで宣言されます。y は違います!
}
f();

console.log(x, y); // 0 1

// 厳格モードではない場合:
// x は想定どおり、グローバル側の変数です。
// しかし、y は関数の外部に漏れ出ています!
```

上記と同じ例を厳格モードで実行した場合は、次のようになります。

```js-nolint
"use strict";

var x = 0;
function f() {
  var x = y = 1; // 厳格モードでは ReferenceError が発生します。
}
f();

console.log(x, y);
```

### 暗黙のグローバル変数と関数スコープの外部

暗黙的にグローバルに現れた変数は、関数スコープの外部で参照することができます。

```js
var x = 0; // x はファイルスコープで宣言して、値 0 を代入

console.log(typeof z); // z はまだ存在していないため、 "undefined" になる

function a() {
  // a を呼び出すと、
  var y = 2; // y を関数 a のスコープで宣言して、値 2 を代入

  console.log(x, y); // 0 2

  function b() {
    x = 3; // ファイルスコープにある x に 3 を代入
    y = 4; // 外側の y に 4 を代入
    z = 5; // 新たなグローバル変数 z を生成して、値 5 を代入
    // （厳格モードでは ReferenceError が発生）
  }

  b(); // グローバル変数として z を生成
  console.log(x, y, z); // 3 4 5
}

a(); // b も呼び出す
console.log(x, z); // 3 5
console.log(typeof y); // y は関数 a のローカル変数であるため "undefined" になる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
