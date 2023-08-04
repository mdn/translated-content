---
title: テンプレートリテラル (テンプレート文字列)
slug: Web/JavaScript/Reference/Template_literals
---

{{JsSidebar("More")}}

テンプレートリテラルはバッククォート (`` ` ``) で区切られたリテラルで、*substitution*と呼ばれる埋め込み式が利用できます。

タグなし*テンプレートリテラルは文字列となるため、文字列の補間に便利です（エスケープされていない改行が許されるため、複数行の文字列も可能です）。
タグつき*テンプレートリテラルは、リテラルから任意のテキストセグメントの配列と、任意の置換の値を引数として関数（_タグ関数_）を呼び出します。これは、 [DSL](https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E5%9B%BA%E6%9C%89%E8%A8%80%E8%AA%9E) に便利です。

テンプレートリテラルは非公式に「_テンプレート文字列_」と呼ばれることもありますが、文字列リテラルではないので、文字列リテラルが使えるところならばどこでも使えるわけではありません。また、タグ付けされたテンプレートリテラルが文字列になるとは限りません。何を作成するかはタグ関数次第です（もし何か作成するのであれば）。

## 構文

```js
// タグなし。これらは文字列を生成します。
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

// タグを付けると、関数 "example" を最初の引数にテンプレート、
// 後続の引数に置換値を指定して呼び出します。
example`string text ${expression} string text`;
```

## 解説

テンプレートリテラルは、ダブルクォートやシングルクォートの代わりにバッククォート文字 (`` ` ``) （[グレーブアクセント](https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%AC%E3%82%A4%E3%83%B4%E3%83%BB%E3%82%A2%E3%82%AF%E3%82%BB%E3%83%B3%E3%83%88)）で囲みます。

テンプレートリテラルにはプレースホルダーを含めることができます。プレースホルダーはドル記号と波括弧 (`${expression}`) で示されます。プレースホルダー内の式とバッククォート文字 (`` ` ``) の間にあるテキストが関数に渡されます。

既定の関数は、単に各部を連結して 1 つの文字列とするだけです。テンプレートリテラルの前に式（ここでは `tag`）がある場合、これは**タグ付きテンプレート**と呼ばれます。この場合、タグ式（通常は関数）はテンプレートリテラルとともに呼び出され、出力する前にそれを操作することができます。

テンプレートリテラル内でバッククォート文字をエスケープするには、バッククォート文字の前にバックスラッシュ (`\`) を置きます。

```js
`\`` === "`"; // --> true
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

### 式の挿入

通常の文字列に式を埋め込むには、以下のような構文を使用していると思います。

```js
let a = 5;
let b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

テンプレートリテラルを使用すると、糖衣構文を使用して、このようにもっと読みやすく表記することができます。

```js
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

### 入れ子のテンプレート

場合によっては、テンプレートを入れ子にすると、構成可能な文字列を得るのにもっとも簡単に（かつ、おそらくより読みやすく）なることがあります。バッククォートをつけたテンプレートでは、テンプレート内にあるプレイスホルダー `${ }` の内部でバッククォートを使用することができます。

例えば、条件式が `true` の場合、このテンプレートリテラルを `return` します。

ES5 の場合:

```js
let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
  ? " icon-expander"
  : " icon-collapser";
```

ES2015 で入れ子なしのテンプレートリテラルの場合:

```js
const classes = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;
```

ES2015 で入れ子にしたテンプレートリテラルの場合:

```js
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
let person = "Mike";
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 99) {
    ageStr = "centenarian";
  } else {
    ageStr = "youngster";
  }

  // テンプレートリテラルを用いて組み立てた文字列を返すこともできます
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
```

タグ関数は文字列を返さなくても構いません。

```js
function template(strings, ...keys) {
  return function (...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function (key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

let t1Closure = template`${0}${1}${0}!`;
//let t1Closure = template(["","","","!"],0,1,0);
t1Closure("Y", "A"); // "YAY!"

let t2Closure = template`${0} ${"foo"}!`;
//let t2Closure = template([""," ","!"],0,"foo");
t2Closure("Hello", { foo: "World" }); // "Hello World!"

let t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
//let t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure("foo", { name: "MDN", age: 30 }); //"I'm MDN. I'm almost 30 years old."
t3Closure({ name: "MDN", age: 30 }); //"I'm MDN. I'm almost 30 years old."
```

### 加工前の文字列

タグ関数に渡される第 1 引数では、特別な `raw` プロパティが利用できます。このプロパティを通して、[エスケープシーケンス](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings)を処理する前の、入力された通りの加工前の文字列を参照することができます。

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
```

加えて、 {{jsxref("String.raw()")}} メソッドがあり、既定のテンプレート関数のように文字列を連結した形で加工前の文字列を生成することができます。

```js
let str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

### タグ付きテンプレートとエスケープシーケンス

#### ES2016 での動作

ECMAScript 2016 時点では、タグ付きテンプレートの以下のエスケープシーケンスには、次のようなルールが適用されます。

- Unicode のエスケープシーケンスは "`\u`" で始まること。例: `\u00A9`
- Unicode のコードポイントのエスケープは "`\u{}`" で示すこと。例: `\u{2F804}`
- 16 進数のエスケープは "`\x`" で始まること。例: `\xA9`
- 8 進数のリテラルのエスケープは "`\0o`" で始まり、その後数字が続くこと。例: `\0o251`

このルールのもとでは、下に示す例のようなタグ付きテンプレートが問題となります。なぜなら、 ECMAScript の文法に従ってこのテキストを解釈しようとすると、パーサーは Unicode の有効のエスケープシーケンスを探そうとするも、不正な構文が検出されてしまうからです。

```js
latex`\unicode`;
// 古い ECMAScript バージョン (ES2016 以前) では、以下のような例外が投げられる
// SyntaxError: malformed Unicode character escape sequence
```

#### ES2018 revision での不正なエスケープシーケンス

タグ付きテンプレートでは、他のエスケープシーケンスが一般的な言語 ([DSL](https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E5%9B%BA%E6%9C%89%E8%A8%80%E8%AA%9E)、[LaTeX](https://ja.wikipedia.org/wiki/LaTeX) など) の埋め込みも許容する必要があります。 ECMAScript のプロポーザル [Template Literal Revision](https://tc39.github.io/proposal-template-literal-revision/) (Stage 4, to be integrated in the ECMAScript 2018 standard) では、タグ付きテンプレートから、ECMAScript のエスケープシーケンスについての構文的な制約が除外されています。

しかし、埋め込んで「加工された」結果の中においても、不正なエスケープシーケンスがあれば、それを提示する必要があります。こうした不正なエスケープシーケンスは、「加工された」の配列の中では、{{jsxref("undefined")}} の要素として表示されます。

```js
function latex(str) {
  return { cooked: str[0], raw: str.raw[0] };
}

latex`\unicode`;

// { cooked: undefined, raw: "\\unicode" }
```

このエスケープシーケンスの制約は、**タグ付き**テンプレートのみが除外となります。**タグ付きでない**テンプレートリテラルの場合は、除外対象ではありません:

```js example-bad
let bad = `bad escape sequence: \unicode`;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Template-like strings in ES3 compatible syntax](https://gist.github.com/WebReflection/8f227532143e63649804)
- ["ES6 in Depth: Template strings" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)
