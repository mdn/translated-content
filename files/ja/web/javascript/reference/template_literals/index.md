---
title: テンプレートリテラル (テンプレート文字列)
slug: Web/JavaScript/Reference/Template_literals
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{jsSidebar("More")}}

**テンプレートリテラル**は逆引用符 (`` ` ``) で区切られたリテラルで、[複数行の文字列](#複数行の文字列)、埋め込み式による[文字列の補間](#文字列の補間)、[タグ付きテンプレート](#タグ付きテンプレート)と呼ばれる特殊な構文を許可します。

テンプレートリテラルは非公式に「_テンプレート文字列_」と呼ばれることもあります。[文字列の補間](#文字列の補間)のためにもっともよく使用されるからです。しかし、タグ付けされたテンプレートリテラルが文字列になるとは限りません。カスタムの[タグ関数](#タグ付きテンプレート)と併用することで、テンプレートリテラルのさまざまな部分に対して、任意の操作を実行することができます。

## 構文

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`
```

### 引数

- `string text`
  - : テンプレートリテラルに含まれる文字列テキストです。ほとんどの文字はそのまま使用できますが、[改行](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)やその他の[ホワイトスペース文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#ホワイトスペース)も含まれます。ただし、[タグ関数](#タグ付きテンプレートとエスケープシーケンス)を使用しない限り、無効なエスケープシーケンスは構文エラーの原因となります。
- `expression`
  - : 現在の位置に挿入される式で、その値は文字列に変換されるか、 `tagFunction` に渡されます。
- `tagFunction`
  - : 指定された場合、テンプレート文字列の配列と置換式とともに呼び出され、返値がテンプレートリテラルの値となります。[タグ付きテンプレート](#タグ付きテンプレート)を参照してください。

## 解説

テンプレートリテラルは、二重引用符や単一引用符の代わりに逆引用符文字 (`` ` ``) で囲みます。

テンプレートリテラルは、通常の文字列を持つことができるだけでなく、プレースホルダーと呼ばれる、ドル記号と波括弧で囲まれた `${expression}` という形の埋め込まれた式の部品を含むことができます。文字列とプレースホルダーは、既定の関数またはユーザーが指定した関数に渡されます。既定の関数（ユーザーが関数を指定しない場合）は、プレースホルダーの置換を行う[文字列の補間](#文字列の補間)を実行し、その部分を単一の文字列に結合します。

独自の関数を使用するには、テンプレートリテラルの前に関数名を指定します。その結果は、[**タグ付きテンプレート**](#タグ付きテンプレート)と呼ばれます。この場合、テンプレートリテラルはタグ関数に渡され、そこでテンプレートリテラルの異なる部分に対して任意の操作を実行することができます。

テンプレートリテラル内で逆引用符文字をエスケープするには、逆引用符文字の前にバックスラッシュ (`\`) を置きます。

```js
`\`` === "`"; // true
```

ドル記号も同様にエスケープすることで、補間を防ぐことができます。

```js
`\${1}` === "${1}"; // true
```

### 複数行の文字列

ソースの中に挿入された改行文字は、すべてテンプレートリテラルの一部になります。

通常の文字列を使う場合は、複数行の文字列を得るために次のような構文を使用する必要があります。

```js
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"
```

テンプレートリテラルを使用すれば、同じものを次のように書くことができます。

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

[通常の文字列リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#エスケープシーケンス)と同様に、ソースコードの可読性を高めるために、改行をバックスラッシュ (`\`) でエスケープすることで、単一行の文字列を複数行にわたって記述することができます。

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### 文字列の補間

テンプレートリテラルなしで、式からの出力と文字列を結合したい場合、[結合](/ja/docs/Learn/JavaScript/First_steps/Strings#_を用いた連結)は[加算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition) `+` を使用して行うことになります。

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

特に複数の式がある場合は、読みづらい場合があります。

テンプレートリテラルを使用すると、埋め込み式の置換を行う際に、`${expression}` 形式のプレースホルダーを使用することで、連結演算子を使わずに、コードの可読性を向上させることができます。

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

2 つの構文には軽微な違いがあることに注意してください。 テンプレートリテラルは、[その式を直接文字列に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)しますが、加算ではまずオペランドをプリミティブに変換します。 詳細は、 [`+` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition)のリファレンスページをご覧ください。

### 入れ子のテンプレート

場合によっては、テンプレートを入れ子にすると、構成可能な文字列を得るのにもっとも簡単に（かつ、おそらくより読みやすく）なることがあります。逆引用符で区切られたテンプレートでは、テンプレート内にあるプレイスホルダー `${expression}` の内部で逆引用符を使用することができます。

例えば、テンプレートリテラルがなければ、特定の条件に基づいて特定の値を返したい場合、次のような方法をとることができます。

```js example-bad
let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
    ? " icon-expander"
    : " icon-collapser";
```

入れ子なしのテンプレートリテラルを使用すれば、次のようにすることができます。

```js example-bad
const classes = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;
```

テンプレートリテラルを入れ子で使用すると、次のようにすることができます。

```js example-good
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### タグ付きテンプレート

**タグ付き**テンプレートは、テンプレートリテラルのより高度な形式です。

タグを使用すると、テンプレートリテラルを関数で解析できます。タグ関数の最初の引数には、文字列リテラルの配列を含みます。残りの引数は式に関連付けられます。

タグ関数は、これらの引数に対して何でも望み通りの操作を実行することができ、加工された文字列を返します。（または、以下の例の一つで示しているように、まったく異なるものを返すこともできます。）

タグに使用される関数の名前は、自由に指定できます。

```js
const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp < 100 ? "youngster" : "centenarian";

  // テンプレートリテラルを用いて組み立てた文字列を返すこともできます
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
```

タグは単なる識別子である必要はありません。 16 より大きな[優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#表)を持つ任意の式を使用でき、これには[プロパティアクセス](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)、関数呼び出し、[new 式](/ja/docs/Web/JavaScript/Reference/Operators/new)、さらには別のタグ付きテンプレートリテラルも含まれます。

```js
console.log`Hello`; // [ 'Hello' ]
console.log.bind(1, 2)`Hello`; // 2 [ 'Hello' ]
new Function("console.log(arguments)")`Hello`; // [Arguments] { '0': [ 'Hello' ] }

function recursive(strings, ...values) {
  console.log(strings, values);
  return recursive;
}
recursive`Hello``World`;
// [ 'Hello' ] []
// [ 'World' ] []
```

構文上は技術的に許可されていますが、タグ付けされていないテンプレートリテラルは文字列であり、連結すると {{jsxref("TypeError")}} が発生します。

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

唯一の例外はオプショナルチェーンで、これは構文エラーが発生します。

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

なお、次の 2 つの式は依然として解釈可能です。つまり、[自動セミコロン挿入](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#自動セミコロン挿入)の対象にはなりません。自動セミコロン挿入は、解釈不可能なコードを修正するためにのみセミコロンを挿入します。

```js-nolint example-bad
// Still a syntax error
const a = console?.log
`Hello`
```

タグ関数は文字列を返さなくても構いません。

```js
function template(strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

const t1Closure = template`${0}${1}${0}!`;
// const t1Closure = template(["","","","!"],0,1,0);
t1Closure("Y", "A"); // "YAY!"

const t2Closure = template`${0} ${"foo"}!`;
// const t2Closure = template([""," ","!"],0,"foo");
t2Closure("Hello", { foo: "World" }); // "Hello World!"

const t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
// const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure("foo", { name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
t3Closure({ name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
```

タグ関数の先頭の引数は、文字列の配列です。どのテンプレートリテラルでも、その長さは置換の数（`${…}` の発生回数）に 1 を加えたものと同じであり、したがって常に空ではありません。

タグ付きのテンプレートリテラル式については、そのリテラルが何度評価されても、タグ関数は常にまったく同じリテラル配列を引数として呼び出されます。

```js
const callHistory = [];

function tag(strings, ...values) {
  callHistory.push(strings);
  // Return a freshly made object
  return {};
}

function evaluateLiteral() {
  return tag`Hello, ${"world"}!`;
}

console.log(evaluateLiteral() === evaluateLiteral()); // false。 `tag` が呼び出されるたびに新しいオブジェクトを返す
console.log(callHistory[0] === callHistory[1]); // true。 同じタグ付きリテラルのすべての評価は、同じ文字列配列に格納されます。
```

これにより、タグは第 1 引数の識別子に基づいて結果をキャッシュすることができます。配列値の安定性をさらに保証するために、第 1 引数と [`raw` プロパティ](#加工前の文字列)はどちらも[凍結](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)され、変更することはできません。

### 加工前の文字列

タグ関数に渡される第 1 引数では、特別な `raw` プロパティが利用できます。このプロパティを通して、[エスケープシーケンス](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings)を処理する前の、入力された通りの加工前の文字列を参照することができます。

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
```

加えて、 {{jsxref("String.raw()")}} メソッドがあり、既定のテンプレート関数のように文字列を連結した形で加工前の文字列を生成することができます。

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

リテラルにエスケープシーケンスが含まれていない場合、`String.raw` 関数は "identity" タグのように機能します。 リテラルにタグを付けない場合と同様に常にうまくいく実際の identity タグが必要な場合は、エスケープシーケンスが処理された「加工された」リテラル配列を `String.raw` に渡し、生の文字列であるかのように見せかけるカスタム関数を作成することができます。

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

これは、特定の名前付きリテラルに特別な処理を行う多くのツールにとって有益なものです。

```js
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// 一部のフォーマッターは、このリテラルのコンテンツを HTML として書式化します。
const doc = html`<!doctype html>
  <html lang="en-US">
    <head>
      <title>Hello</title>
    </head>
    <body>
      <h1>Hello world!</h1>
    </body>
  </html>`;
```

### タグ付きテンプレートとエスケープシーケンス

通常のテンプレートリテラルでは、[文字列リテラル内のエスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#エスケープシーケンス)はすべて許可されています。それ以外にも、適切に形成されていないエスケープシーケンスはすべて構文エラーとなります。 これには以下が含まれます。

- `\` に `0` 以外の任意の数字が、または `\0` に数字が続いたもの。例えば `\9` や `\07`（これは [非推奨の構文](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#エスケープシーケンス)です）
- `\x` に 2 桁以下（ないものも含む）の 16 進数が続いたもの。例えば `\xz`
- `\u` に `{` が続かず、 4 桁以下（ないものも含む）の 16 進数が通づいたもの。例えば `\uz`
- `\u{}` で有効な Unicode コードポイントを囲んだもの。ここには 16 進数以外のもの、まてゃあ `10FFFF` 以上の値。例えば `\u{110000}` や `\u{z}`

> **メモ:** `\` に他の文字が続くと、何もエスケープされていないので、無意味かもしれませんが、構文エラーではありません。

しかし、これはタグ付きテンプレートにとっては問題です。「加工済み」リテラルに加えて、生のリテラルにもアクセスできるからです（エスケープシーケンスはそのまま保持されます）。

タグ付きテンプレートでは、任意の文字列コンテンツを埋め込むことができ、エスケープシーケンスは異なる構文に従うことがあります。例えば、`String.raw` を使用して JavaScript で [LaTeX](https://en.wikipedia.org/wiki/LaTeX) のソーステキストを埋め込む場合を考えてみましょう。JavaScript の構文制限に従うことなく、`u` または `x` で始まる LaTeX マクロを使用できるようにしたい場合もあります。そのため、タグ付きテンプレートでは、正しく形成されたエスケープシーケンスの構文制限が解除されます。下記は、[MathJax](https://www.mathjax.org/) を使用して LaTeX を 1 つの要素でレンダリングする例です。

```js
const node = document.getElementById("formula");
MathJax.typesetClear([node]);
// 古い ECMAScript バージョン (ES2016 以前) では、以下のような例外が投げられる
// SyntaxError: malformed Unicode character escape sequence
node.textContent = String.raw`$\underline{u}$`;
MathJax.typesetPromise([node]);
```

しかし、埋め込んで「加工された」結果の中においても、不正なエスケープシーケンスがあれば、それを提示する必要があります。こうした不正なエスケープシーケンスは、「加工された」の配列の中では、{{jsxref("undefined")}} の要素として表示されます。

```js
function log(str) {
  console.log("Cooked:", str[0]);
  console.log("Raw:", str.raw[0]);
}

log`\unicode`;
// Cooked: undefined
// Raw: \unicode
```

このエスケープシーケンスの制約は、**タグ付き**テンプレートのみが除外となります。**タグ付きでない**テンプレートリテラルの場合は、除外対象ではありません。

```js-nolint example-bad
const bad = `bad escape sequence: \unicode`;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [テキスト整形](/ja/docs/Web/JavaScript/Guide/Text_formatting)ガイド
- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
- [ES6 in Depth: Template strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/) (hacks.mozilla.org, 2015)
