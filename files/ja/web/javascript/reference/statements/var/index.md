---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`var`** 文は関数スコープまたはグローバルスコープの変数を宣言し、任意でそれをある値に初期化します。

{{InteractiveExample("JavaScript デモ: var 文")}}

```js interactive-example
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // 予想される結果: 2
}

console.log(x);
// 予想される結果: 2
```

## 構文

```js-nolint
var name1;
var name1 = value1;
var name1 = value1, name2 = value2;
var name1, name2 = value2;
var name1 = value1, name2, /* …, */ nameN = valueN;
```

- `nameN`
  - : 宣言する変数の名前。それぞれの名前が有効な JavaScript [識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)または[構造分解結合パターン](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)でなければなりません。
- `valueN` {{optional_inline}}
  - : その変数の初期値です。有効な式なら何でも取ることができます。デフォルト値は `undefined` です。

## 解説

`var` で宣言された変数のスコープは、`var` 文を最も近く含む次の中括弧で囲まれた構文のいずれかです。

- 関数本体
- [政敵初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

または上記のいずれも適用されない場合、

- 現在の[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)（モジュールモードで実行中のコードの場合）
- コードを実行し合ているグローバルスコープ（スクリプトモードの場合）

```js
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (関数 `bar` が `x` を閉じる)
    console.log(y); // 2 (`y` はスコープ内)
  }
  bar();
  console.log(x); // 1 (`x` はスコープ内)
  console.log(y); // ReferenceError, `y` は `bar` のスコープ
}

foo();
```

重要な点として、その他のブロック構造（[ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)、{{jsxref("Statements/try...catch", "try...catch")}}、{{jsxref("Statements/switch", "switch")}}、[`for` 文のいずれか](/ja/docs/Web/JavaScript/Reference/Statements#反復処理)のヘッダーなど）は `var` 用のスコープを作成せず、そのようなブロック内で `var` を使って宣言された変数は、ブロックの外側でも参照可能です。

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

スクリプト内で、`var` を使用して宣言された変数は、グローバルオブジェクトの構成不可能なプロパティとして追加されます。これは、プロパティ記述子を変更することができず、{{jsxref("Operators/delete", "delete")}} を使用して削除することができないことを意味します。JavaScript には自動メモリー管理機能があるため、グローバル変数に `delete` 演算子を使えるようにしても意味がありません。

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

NodeJS の [CommonJS](https://wiki.commonjs.org/wiki/CommonJS) モジュールとネイティブの [ECMAScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)のどちらも、最上位の変数宣言はそのモジュールのスコープとなるので、グローバルオブジェクトのプロパティとしては追加されません。

`var` キーワードに続くリストは{{Glossary("binding", "バインディング")}}リストと呼ばれ、カンマで区切られます。ここでカンマは[カンマ演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comma_operator) ではなく、`=` 記号も[代入演算子](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)ではありません。後続の変数の初期化子は、リスト内の先行する変数を参照し、初期化された値を取得できます。

### 巻き上げ

`var` 宣言は、スクリプト内のどこで発生しても、スクリプト内のコードが実行される前に処理されます。コード内のどこで変数を宣言しても、その変数は先頭に宣言されたものと同等です。これは同時に、変数が宣言される前に使用されているように見えることを意味します。この動作は[巻き上げ](/ja/docs/Glossary/Hoisting)と呼ばれます。これは、変数宣言が関数、静的初期化ブロック、スクリプトソースなどの先頭に移動されたように見えるためです。

> [!NOTE]
> `var` 宣言は現在のスクリプトの先頭までしか巻き上げられません。1 つの HTML 内に 2 つの `<script>` 要素がある場合、2 つ目のスクリプトが処理・実行される前に、最初のスクリプトは2 つ目のスクリプトで宣言された変数にアクセスできません。

```js
bla = 2;
var bla;
```

次のように見なされます。

```js
var bla;
bla = 2;
```

そのため、変数は常にそのスコープの先頭（グローバルコードの先頭および関数コードの先頭）で宣言することを推奨します。これにより、どの変数が現在の関数にスコープされているかが明確になります。

巻き上げられるのは変数のみであり、初期化は巻き上げられません。初期化は代入文に到達したときにのみ行われます。それまでは変数は `undefined` （ただし宣言された状態）のままになります。

```js
function doSomething() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}
```

これは、暗黙的には次のように解釈されます。

```js
function doSomething() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

### 再宣言

`var` を使用して変数宣言を重複しても、厳格モードであってもエラーは発生せず、宣言に初期化子が含まれていない限り、変数の値は失われません。

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

`var` 宣言は `function` 宣言と同時に、同じスコープ内に置くことも可能です。この場合、`var` 宣言の初期化子は、両者の相対的な位置に関係なく、常に関数の値を上書きします。これは、関数宣言が初期化子の評価より先に巻き上げられるためであり、初期化子が後から実行されることで値を上書きするからです。

```js
var a = 1;
function a() {}
console.log(a); // 1
```

`var` 宣言は {{jsxref("Statements/let", "let")}}、{{jsxref("Statements/const", "const")}}、{{jsxref("Statements/class", "class")}}、{{jsxref("Statements/import", "import")}} 宣言とは同じスコープに置くことができません。

```js-nolint example-bad
var a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

`var` 宣言はブロックスコープではないため、次の場合にも適用されます。

```js-nolint example-bad
let a = 1;
{
  var a = 1; // SyntaxError: Identifier 'a' has already been declared
}
```

次の場合には適用されません。ここで `let` は `var` の子スコープにあり、同じスコープではないからです。

```js example-good
var a = 1;
{
  let a = 2;
}
```

関数本体内の `var` 宣言は、引数と同じ名前を持つことができます。

```js
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1
```

`catch` ブロック内の `var` 宣言は、`catch` に結びつけられた識別子と同じ名前を持つことができます。ただし、`catch` の結びつけが単純な識別子であり、構造分解パターンでない場合に限ります。これは[非推奨の構文](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#文)であり、頼るべきではなりません。この場合、宣言は `catch` ブロックの外側に巻き上げられますが、`catch` ブロック内で代入された値は外部からは参照できません。

```js-nolint example-bad
try {
  throw new Error();
} catch (e) {
  var e = 2; // Works
}
console.log(e); // undefined
```

## 例

### 2 つの変数を宣言して初期化

```js
var a = 0,
  b = 0;
```

### 2 つの変数に 1 つの文字列を代入

```js
var a = "A";
var b = a;
```

これは、以下と等価です。

```js-nolint
var a, b = a = "A";
```

順番に注意してください。

```js
var x = y,
  y = "A";
console.log(x, y); // undefined A
```

ここではコードを実行する前に `x` と `y` が宣言され、そのあとに代入を行います。"`x = y`" を実行したとき、`y` が存在しますので `ReferenceError` は発生せず、値は `undefined` になります。よって、`x` に undefined 値が代入されます。そして、`y` に値 'A' が代入されます。

### 複数の変数を初期化

`var x = y = 1` 構文には注意が必要です。`y` は実際には変数として宣言されていないため、`y = 1` は[修飾されていない識別子への代入](/ja/docs/Web/JavaScript/Reference/Operators/Assignment#修飾されていない識別子への代入)となり、厳格モードでない場合はグローバル変数が生成されます。

```js-nolint
var x = 0;
function f() {
  var x = y = 1; // x はローカルで宣言されます。y はグローバルです。
}
f();

console.log(x, y); // 0 1

// 厳格モードではない場合:
// x は想定どおり、グローバル側の変数です。
// しかし、y は関数の外部に漏れ出ています。
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
  var y = 2; // y を関数 a のスコープ内で宣言し、値 2 を代入

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

### 構造分解での宣言

それぞれの `=` の左側もバインディングパターンとすることができます。これにより、複数の変数を一度に作成することができます。

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
var [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

詳しくは[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
