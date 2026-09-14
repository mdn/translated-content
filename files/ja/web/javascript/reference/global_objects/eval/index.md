---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

> [!WARNING]
> 文字列から JavaScript を実行することは、非常に大きなセキュリティリスクを伴います。`eval()` を使用すると、悪意のある者が任意のコードを実行することがあまりにも簡単になります。下記の [eval() を使わないでください!](#eval_を使わないでください!)を参照してください。

**`eval()`** 関数は、文字列として表現された JavaScript コードを評価します。ソースはスクリプトとして解釈されます。

{{InteractiveExample("JavaScript デモ: eval()")}}

```js interactive-example
console.log(eval("2 + 2"));
// 予想される結果: 4

console.log(eval(new String("2 + 2")));
// 予想される結果: 2 + 2

console.log(eval("2 + 2") === eval("4"));
// 予想される結果: true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// 予想される結果: false
```

## 構文

```js-nolint
eval(script)
```

### 引数

- `script`
  - : JavaScript の式、文、または一連の文を表す文字列です。式には、既存オブジェクトの変数およびプロパティを含められます。これはスクリプトとして解釈されますので、 [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) 宣言（モジュールの中に存在しうる）は許可されていません。

### 返値

与えられたコードの評価結果の値を返します。評価結果が空の場合は、{{jsxref("undefined")}} を返します。もし `script` が文字列プリミティブでなければ、 `eval()` は引数を変更せずに返します。

### 例外

コードを評価している間に発生するあらゆる例外が発生します。もし `script` がスクリプトとして解釈できなかった場合は {{jsxref("SyntaxError")}} になります。

## 解説

`eval()` はグローバルオブジェクトの関数プロパティです。

`eval()` 関数の引数は文字列です。
ソース文字列をスクリプト本体として評価します。つまり、文と式の両方が使用可能です。コードの完了値を返します。式の場合は、式が評価された値です。多くの文や宣言も同様に完了値を持ちますが、その結果は意外なものになることがあります（例えば、代入の完了値は代入された値ですが、 [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) の完了値は undefined です）。そのため、文の完了値には頼らないことをお勧めします。

厳格モードでは、 `eval` という名前の変数を宣言したり、 `eval` に代入したりすることは {{jsxref("SyntaxError")}} になります。

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

`eval()` の引数が文字列でない場合、`eval()` は引数を変更せずに返します。次の例では、プリミティブの代わりに `String` オブジェクトを渡すと、 `eval()` は文字列を評価するのではなく、 `String` オブジェクトを返します。

```js
eval(new String("2 + 2")); // "2 + 2" を含む String オブジェクトを返す
eval("2 + 2"); // 4 を返す
```

一般的な方法でこの課題をうまく回避するには、`eval()` に渡す前に、自分で[引数を文字列に変換する](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)ことができます。

```js
const expression = new String("2 + 2");
eval(String(expression)); // 4 を返します
```

### 直接または間接 eval

`eval()` の呼び出しには、直接 eval と間接 eval の 2 つのモードがあります。直接 eval は、その名前が示すとおり、グローバルな `eval` 関数を `eval(...)` で直接呼び出すことを指します。それ以外のすべては、エイリアス変数経由、メンバーアクセスやその他の式経由、またはオプショナルチェーン [`?.`](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining) 演算子を使用して呼び出すことも含めて、間接的なものです。

```js
// 直接呼び出し
eval("x + y");

// eval を返すためにカンマ演算子を使用する間接呼び出し
(0, eval)("x + y");

// オプショナルチェーンによる間接呼び出し
eval?.("x + y");

// eval を格納し返すために変数を使用する間接呼び出し
const myEval = eval;
myEval("x + y");

// メンバーアクセスによる間接呼び出し
const obj = { eval };
obj.eval("x + y");
```

間接 eval は、コードが別個の `<script>` タグの中で評価されるように見ることができます。これはつまり次のような意味です。

- 間接 eval はローカルスコープではなくグローバルスコープで動作し、評価されるコードは呼び出されるスコープ内のローカル変数にアクセスすることはありません。

  ```js
  function test() {
    const x = 2;
    const y = 4;
    // 直接呼び出し、ローカルスコープを使用
    console.log(eval("x + y")); // 結果は 6
    // 間接呼び出し、グローバルスコープを使用
    console.log(eval?.("x + y")); // x がグローバルスコープで定義されていないため、例外が発生
  }
  ```

- 間接的な `eval` は周囲のコンテキストの厳格さを継承せず、ソース文字列自体に `"use strict"` ディレクティブがある場合にのみ [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) になります。

  ```js
  function nonStrictContext() {
    eval?.(`with (Math) console.log(PI);`);
  }
  function strictContext() {
    "use strict";
    eval?.(`with (Math) console.log(PI);`);
  }
  function strictContextStrictEval() {
    "use strict";
    eval?.(`"use strict"; with (Math) console.log(PI);`);
  }
  nonStrictContext(); // Logs 3.141592653589793
  strictContext(); // Logs 3.141592653589793
  strictContextStrictEval(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  ```

  一方、直接 eval は、呼び出すコンテキストの厳格さを継承します。

  ```js
  function nonStrictContext() {
    eval(`with (Math) console.log(PI);`);
  }
  function strictContext() {
    "use strict";
    eval(`with (Math) console.log(PI);`);
  }
  function strictContextStrictEval() {
    "use strict";
    eval(`"use strict"; with (Math) console.log(PI);`);
  }
  nonStrictContext(); // Logs 3.141592653589793
  strictContext(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  strictContextStrictEval(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  ```

- もしソース文字列が厳格モードで解釈されていない場合、 `var` で宣言された変数と [関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function) は周囲のスコープに入ってしまいます。厳格モードのコンテキストでの直接 eval であった場合、または `eval` のソース文字列自体が厳格モードであった場合、 `var` と関数宣言は周囲のスコープに「漏れる」ことはありません。

  ```js
  // コンテキストもソース文字列も厳格モードではないため、 var は周囲のスコープで変数を作成します。
  eval("var a = 1;");
  console.log(a); // 1
  // コンテキストは厳格ではありませんが、 eval のソースは厳格なので、 b は評価されたスクリプトにスコープされます。
  eval("'use strict'; var b = 1;");
  console.log(b); // ReferenceError: b is not defined

  function strictContext() {
    "use strict";
    // コンテキストは厳格ですが、これは間接的なもので、文字列は厳格ではありません。
    eval?.("var c = 1;");
    // 厳密なコンテキストでのディレクティブ eval なので、 d はスコープされます。
    eval("var d = 1;");
  }
  strictContext();
  console.log(c); // 1
  console.log(d); // ReferenceError: d is not defined
  ```

  評価される文字列内の [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) および [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) 宣言は、常にそのスクリプトにスコープされます。

- ディレクティブ eval は追加のコンテキスト式にアクセスすることができます。例えば、関数の本体で [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) を使用することができます。

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

## 直接 eval() を使わないでください!

直接 `eval()` はいくつもの問題を引き起こします。

- `eval()` は呼び出し元の権限で渡されたコードを実行します。悪意のある第三者に影響を受ける可能性のある文字列で `eval()` を実行すると、そのウェブページや拡張機能の権限において、ユーザーのマシン上で悪意のあるコードを実行してしまう可能性があります。さらに重要なことに、サードパーティのコードが `eval()` が（直接 eval であれば）呼び出されたスコープを見ることができるため、攻撃者がローカル変数を読み取ったり変更したりすることができてしまいます。
- 現代の JavaScript では多くの構造が JS エンジンによって最適化されているため、`eval()` は他の方法よりも低速です。
- 現代の JavaScript インタープリターは JavaScript を機械語に変換します。これは、変数の名前の概念がすべて消滅することを意味します。したがって、`eval()` を使用すると、ブラウザーは長い高価な変数名検索を実行して、変数が機械語のどこに存在しているかを把握し、その値を設定します。さらに、`eval()` が変数の型の変更など、その変数に新しい変数をもたらす可能性もあり、生成されたすべての機械語を再評価して補正させられる可能性があります。
- スコープが `eval()` によって推移的に依存されている場合、ミニファイヤーはミニ化をあきらめます。そうしないと `eval()` は実行時に正しい変数を読み込むことができないからです。

`eval()` や関連のメソッドを使用することで、最適化したり、完全に避けることができる用途はたくさんあります。

#### 間接 eval() の使用

このコードを考えてみてください。

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

間接 eval を使用して厳格モードを強制するだけで、コードはずっと良くなります。

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

上記の 2 つのコードスニペットは同じように動作するように見えるかもしれませんが、そうではありません。前者は直接的 eval を使用しているので、複数の問題が発生します。

- より多くの範囲を検査するため、非常に時間がかかります。評価される文字列中の `c: new Map()` に注目してください。間接的 eval のバージョンでは、オブジェクトはグローバルスコープで評価されるので、インタープリターは `Map` が `Map` という名前のローカル変数ではなく、グローバルな `Map()` コンストラクターを参照しているとみなされます。しかし、直接的 eval を使用するコードでは、インタープリターはこれを想定することができません。例えば、次の例では、評価された文字列の `Map` は `window.Map()` を参照しません。

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  したがって、この `eval()` バージョンでは、ブラウザーは高価なルックアップ呼び出しを行い、`Map()` というローカル変数があるかどうかを確認します。

- 厳格モードを使用していない場合、 `eval()` ソース内の `var` 宣言は周囲のスコープの変数になります。これは、文字列が外部入力から取得された場合、特に同じ名前の既存の変数がある場合に、デバッグしにくい課題につながります。
- 直接的 eval は、周囲のスコープのバインディングを読み込んだり、変更したりすることができます。
- 直接的 `eval` を使用する場合、特に eval ソースが厳格モードであることを証明できない場合、 `eval()` ソースはその周囲のスコープ内の任意の変数名に依存することができるため、エンジン（およびビルドツール）はインライン化に関連するすべての最適化を無効にしなければなりません。

しかし、間接的な `eval()` を使用すると、評価されたソースが読み込む既存のグローバル変数以外の追加のバインディングを渡すことができません。評価されるソースがアクセスすべき追加の変数を指定する必要がある場合は、コンストラクター `Function()` を使用することを検討してください。

#### Function() コンストラクターの使用

[`Function()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) コンストラクターは、上記の間接的 eval の例ととてもよく似ています。グローバルスコープで渡された JavaScript ソースを、ローカルバインディングを読み込んだり変更したりすることなく評価するので、エンジンは直接 `eval()` を実行するよりも多くの最適化を実行することができます。

`eval()` と `Function()`の異なる点は、`Function()`に渡された文字列はスクリプトとしてではなく、関数本体として解釈できるということです。例えば、関数本体の最上位では `return` 文を使用することができますが、スクリプトの中では使用できません。

`Function()` コンストラクターは、変数を引数として渡して eval ソース内でローカルバインディングを作成したい場合に有益です。

```js
function add(a, b) {
  return a + b;
}
function runCodeWithAddFunction(obj) {
  return Function("add", `"use strict";return (${obj});`)(add);
}
console.log(runCodeWithAddFunction("add(5, 7)")); // 12
```

`eval()` と `Function()` はどちらも暗黙的に任意のコードを評価するので、厳格な [CSP](/ja/docs/Web/HTTP/Guides/CSP) 設定では禁止されています。また、一般的な用途では `eval()` や `Function()` に代わる、より安全な（そして、より高速な）方法が他にもあります。

#### ブラケットアクセサーの使用

プロパティ名からプロパティ自体への変換を行うために `eval()` を使用しないでください。アクセスされるオブジェクトのプロパティがコードが実行されるまでわからない場合の例を考えてみましょう。これは `eval()` で行うことができます。

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

ただし、ここで `eval()` は必要ありません。実際、この使い方はお勧めできません。なぜなら `propName` が有効な識別子でないと構文エラーになるからです。さらに、 `getPropName` が制御する関数でない場合、任意のコードを実行してしまう可能性があります。代わりに[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)を使用したほうが、より速くて安全です。

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // "a" または "b" が返される
const result = obj[propName]; // obj[ "a" ] は obj.a と同じ
```

このメソッドを使用して子孫プロパティにアクセスすることもできます。`eval()` を使うと以下のようになります。

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // "a.b.c" などを返す

const result = eval(`obj.${propPath}`); // 0
```

ここで `eval()` を回避するには、プロパティのパスを分割し、様々なプロパティをループすることで行うことができます。

```js
function getDescendantProp(obj, desc) {
  const arr = desc.split(".");
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // "a.b.c" などを返す
const result = getDescendantProp(obj, propPath);
```

プロパティの設定も同様に行うことができます。

```js
function setDescendantProp(obj, desc, value) {
  const arr = desc.split(".");
  while (arr.length > 1) {
    obj = obj[arr.shift()];
  }
  return (obj[arr[0]] = value);
}

const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // "a.b.c" などを返す
const result = setDescendantProp(obj, propPath, 1); // obj.a.b.c は 1 になる
```

しかし、制約のない入力でブラケットアクセッサを使用することも安全ではありません。[オブジェクトインジェクション攻撃](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md)を許す可能性もあります。

#### コールバックの使用

JavaScript [第一級関数](/ja/docs/Glossary/First-class_Function)を備えており、関数を他の API の引数としたり、変数やオブジェクトのプロパティに保存したりすることができます。多くの DOM API はこれを考慮して作られているので、次のように書くことができます（また、書くべきです）。

```js
// setTimeout(" ... ", 1000) を使う代わりに
setTimeout(() => {
  // …
}, 1000);

// elt.setAttribute("onclick", "…") を使う代わりに
elt.addEventListener("click", () => {
  // …
});
```

文字列を連結せずにパラメーター化した関数を作成する方法としては、[クロージャ](/ja/docs/Web/JavaScript/Guide/Closures)を使う方法も便利です。

### JSON の使用

`eval()` の呼び出しに使おうとしている文字列がコードではなくデータ（例えば `"[1, 2, 3]"` で配列を表す）を含むものであれば、{{Glossary("JSON")}} に切り替えることを検討してください。これは JavaScript のサブセットを使用することで、文字列でデータを表現することができます。

JSON の構文は JavaScript の構文に比べて制限があり、多くの有効な JavaScript リテラルが JSON としては解釈されないことに注意してください。例えば、最後にカンマを付けることは JSON では許されておらず、オブジェクトリテラル内のプロパティ名（キー）は引用符で囲む必要があります。後で JSON として解析される文字列を生成するには、JSON シリアライザーを使うようにしてください。

任意のコードではなく、注意深く制約されたデータを渡すことは、一般的によい考えです。例えば、ウェブページの内容を取得できるよう設計された拡張であれば、JavaScript コードの代わりに [XPath](/ja/docs/Web/XML/XPath) を使って取得ルールを定義できます。

## 例

### eval() の使用

次のコードでは、`eval()` を含むどちらの文も 42 を返します。最初のコードは文字列 `"x + y + 1"` を評価します。2 番目のコードは文字列 `"42"` を評価します。

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### 評価される最後の式について

`eval()` は最後に評価された式の値を返します。 `if` については、評価された最後の式または文になります。

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

次の例では `eval()` を使用して文字列 `str` を評価しています。この文字列は、`x` が 5 であれば `z` に 42 という値を割り当てる、そうでなければ `z` に 0 を代入するという JavaScript の文で構成されています。 2 つ目の文が実行されると、 `eval()` はこれらの文を発生させ、文の集合も評価して `z` に代入された値を返します。

```js
const x = 5;
const str = `if (x === 5) {
  console.log("z is 42");
  z = 42;
} else {
  z = 0;
}`;

console.log("z is ", eval(str)); // z is 42  z is 42
```

複数の値を割り当てる場合は、最後の値を返します。

```js
let x = 5;
const str = `if (x === 5) {
  console.log("z is 42");
  z = 42;
  x = 420;
} else {
  z = 0;
}`;

console.log("x is", eval(str)); // z is 42  x is 420
```

### 関数定義の文字列の `eval` には先頭と末尾に "(" と ")" が必要

```js
// 関数宣言
const fctStr1 = "function a() {}";
// 関数宣言
const fctStr2 = "(function b() {})";
const fct1 = eval(fctStr1); // undefined を返しますが、グローバル関数として `a` が使えるようになる
const fct2 = eval(fctStr2); // 関数 `b` を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: コンテンツスクリプトでの eval の使用](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
