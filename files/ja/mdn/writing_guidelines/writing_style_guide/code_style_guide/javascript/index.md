---
title: JavaScript のコード例を整形するためのガイドライン
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
---

{{MDNSidebar}}

以下のガイドラインは、 MDN Web Docs における JavaScript のコード例の書き方について述べています。これは、できるだけ多くの人に理解されるような簡潔な例を書くためのシンプルなリストです。もし、もっと詳しく説明したものが欲しければ、 [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript) をお勧めします。これは、私たちのガイドラインと概ね互換性があります。

## JavaScript コード例に関する一般的なガイドライン

### 構文のスタイル

- JavaScript では展開した構文を使用しており、 JS の各行は改行され、ブロックの開始中括弧はその関連文と同じ行に、終了中括弧は新しい行に配置しています。これは読みやすさを向上させ、また MDN Web Docs での一貫性を保つためです。

  次のようにしてください。

  ```js example-good
  function myFunc() {
    console.log("Hello!");
  }
  ```

  次のようにしないでください。

  ```js example-bad
  function myFunc() {
    console.log("Hello!");
  }
  ```

- すべての文はセミコロン (";") で終わらせてください。私たちは、JavaScript では技術的にオプションであるにもかかわらず、すべてのコードサンプルでセミコロンを必須としていますが、これは、各文の終わりをより明確に、より正確に示すコードにつながると考えるからです。
- JavaScript では、 構文上で単一引用符が必要な場合は、すべて単一引用符を使用してください。

### スペース

- 制御文のキーワード、関数、ループのキーワードとその開始括弧の間には、スペースを入れてください（例: `if () { ... }` and `for (...) { ... }`）。
- このような場合、前項で記述したように、開始括弧と開始中括弧の間にスペースを入れてください。
- 演算子とオペランド、引数などの間にはスペースを入れてください。例えば、次のような場合はスペースを入れた方が読みやすくなります。

  ```js example-good
  if (dayOfWeek === 7 && weather === "sunny") {
    goOnTrip("beach", "car", ["ice cream", "bucket and spade", "beach towel"]);
  }
  ```

こちらの方が読みにくくなります。

```js example-bad
if (dayOfWeek === 7 && weather === "sunny") {
  goOnTrip("beach", "car", ["ice cream", "bucket and spade", "beach towel"]);
}
```

- 開閉括弧の前後にスペースを入れないでください。例: `( myVar )` ではなく、`(myVar)` を使用してください。

### JavaScript のコメント

自己文書化されていないコードをコメントする場合は、 JS 形式のコメントを使用してください。

```js example-good
// これは、JavaScript 形式のコメントです
```

コメントは、参照するコードの前に別個の行で記述してください。

```js example-good
function myFunc() {
  // ブラウザーの JS コンソールに文字列 'Hello' を出力する
  console.log("Hello");
  // 新しい段落を作成し、その中に中身を入れて、 <body> に追加します。
  let para = document.createElement("p");
  para.textContent = "My new paragraph";
  document.body.appendChild(para);
}
```

### 最新の JavaScript 機能

MDN Web Docs のコード例では、最近のよく対応されている JavaScript の機能（[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)、[プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)、[`async`](/ja/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/ja/docs/Web/JavaScript/Reference/Operators/await)、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)/[`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)、[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)、[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)など）を使用してもかまいません。私たちは、このガイドラインの多くの場所で使用しています。なぜなら、ウェブ業界は一般的に、このような機能が十分に理解できるところまで来ていると考えているからです。そして、まだ使用していない人たちのために、彼らのスキルを進化させる手助けをする役割を果たしたいと思っています。

## 配列

### 配列の作成

配列の作成には、コンストラクターではなくリテラルを使用してください。

このようにしてください。

```js example-good
let myArray = [];
```

このようにしないでください。

```js example-bad
let myArray = new Array(length);
```

### 項目の追加

配列に項目を追加する場合は、直接代入ではなく、 [`push()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push) を使用してください。次のような配列があったとします。

```js
const pets = [];
```

次のようにしてください。

```js example-good
pets.push("cat");
```

次のようにしないでください。

```js example-bad
pets[pets.length] = "cat";
```

## 条件文

### ループ

[ループ](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code)が必要な場合は、利用可能なループ（[`for`](/ja/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/ja/docs/Web/JavaScript/Reference/Statements/while) など）の中から、自由に適切なループを選択してください。

- ループキーワードとその開始括弧の間には、スペースを入れてください。
- 括弧と開始中括弧の間には、スペースを入れてください。
- `for`/`for...of` ループを使用する場合は、初期化子を `let` キーワードで適切に定義してください。

  ```js example-good
  let cats = ["Athena", "Luna"];
  for (let i of cats) {
    console.log(i);
  }
  ```

  以下の例は、スペースや初期化に関する推奨ガイドラインに従ったものではありません。

  ```js example-bad
  let cats = ["Athena", "Luna"];
  for (i of cats) {
    console.log(i);
  }
  ```

### switch 文

switch 文はこのように整形してください。

```js example-good
let expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // 期待される出力: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}`);
}
```

## 制御文

- 制御文のキーワードとその開始括弧の間には、スペースを入れてください。
- 括弧と開始の中括弧の間にはスペースを入れてください。

制御文はこのようにきちんとスペースを空けて書いてください。

```js example-good
if (iceCream) {
  alert("Woo hoo!");
}
```

以下の例は、スペースのガイドラインに従ったものではありません。

```js-nolint example-bad
if (iceCream){
  alert('Woo hoo!');
}
```

## エラー処理

もしプログラムの特定の状態により捕捉できないエラーが発生した場合、実行が停止し、例の有用性が低下する可能性があります。したがって、 [`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) ブロックを使用してエラーを捕捉する必要があります。

```js example-good
try {
  console.log(results);
} catch (e) {
  console.error(e);
}
```

## 関数

### 関数の命名

関数名には lowerCamelCasing を使用し、必要に応じて簡潔で人間が読める意味のある名前を使用してください。

このようにしてください。

```js example-good
function sayHello() {
  alert("Hello!");
}
```

このようにしないでください。

```js example-bad
function SayHello() {
  alert("Hello!");
}

function notVeryObviousName() {
  alert("Hello!");
}
```

### 関数の宣言

- 関数名とその開始括弧の間にはスペースを入れないでください。
- 括弧と中括弧の間にはスペースを入れてください。
- 可能であれば、 `function` 宣言を使用して、関数式に関数を定義してください。

  このようにしてください。

  ```js example-good
  function sum(a, b) {
    return a + b;
  }
  ```

  このようにしないでください。

  ```js example-bad
  let sum = function (a, b) {
    return a + b;
  };
  ```

- 関数を引数として必要とするメソッドの内部で無名関数を使用する場合、コードを短くすっきりさせるためにアロー関数を使用することは（必須ではありませんが）許容されます。

  次のようにする代わりに、

  ```js example-good
  const array1 = [1, 2, 3, 4];
  let sum = array1.reduce((a, b) => a + b);
  ```

  このように書くこともできます。

  ```js example-good
  const array1 = [1, 2, 3, 4];
  let sum = array1.reduce(function (a, b) {
    return a + b;
  });
  ```

## オブジェクト

### オブジェクトの命名

オブジェクトクラスを定義する場合、クラス名には UpperCamelCasing （PascalCasing とも呼ばれる）を使用し、オブジェクトのプロパティとメソッド名には lowerCamelCasing を使用してください。

オブジェクトのインスタンスを定義する場合（リテラルまたはコンストラクター経由）、インスタンス名には lowerCamelCase を使用します。

```js example-good
let hanSolo = new Person("Han Solo", 25, "male");

let hanSolo = {
  name: "Han Solo",
  age: 25,
  gender: "male",
};
```

### オブジェクトの作成

一般的なオブジェクトを作成する場合（クラスが関与しない場合）には、コンストラクターではなくリテラルを使用してください。

このようにしてください。

```js example-good
let myObject = {};
```

このようにしないでください。

```js example-bad
let myObject = new Object();
```

### オブジェクトクラス

オブジェクトには、旧来のコンストラクターではなく、 ES クラス構文を使用してください。

例えば、これが推奨される方法です。

```js example-good
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
```

継承には `extends` を使用してください。

```js example-good
class Teacher extends Person {
  ...
}
```

## 演算子

### 条件演算子

[条件（または三項）演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)は、以下のように単一の行にまとめて記述してください。

```js example-good
let status = age >= 18 ? "adult" : "minor";
```

コードが読みにくくなるので、以下のように条件演算子を入れ子にしないでください。

```js-nolint example-bad
let status = (age >= 18)
  ? 'adult'
  : 'minor';
```

### 厳密等価を用いる

等価・不等価演算子よりも、常に[「厳密」等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)・不等価演算子を使用してください。

厳密等価演算子、不等価演算子はこのように使用します。

```js example-good
name === "Chris";
age !== 25;
```

以下のように、等価演算子、不等価演算子を使用しないでください。

```js example-bad
name == "Chris";
age != 25;
```

### 論理値の評価に短縮形式を使う

論理値の評価には短縮形式を使用してください。 `x` や `!x` を使い、 `x === true` や `x === false` は使わないでください。

## 文字列

### テンプレートリテラルを使う

文字列に値を挿入する場合は、[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)を使用してください。

これは、テンプレートリテラルを使用する際の推奨される方法の一例です。

```js example-good
let myName = "Chris";
console.log(`Hi! I'm ${myName}!`);
```

このようにしないでください。

```js example-bad
let myName = "Chris";
console.log("Hi! I'm" + myName + "!");
```

### ノードのテキストコンテンツ

DOM ノードに文字列を挿入する場合、 {{DOMxRef("Node.textContent")}} を {{DOMxRef("Element.innerHTML")}} の代わりに使用してください。 `textContent` は `innerHTML` よりもずっと効率的で、エラーの可能性も低くなります。

以下の例は、 `textContent` の使い方を示したものです。

```js example-good
let text = "Hello to all you good people";
const para = document.createElement("p");
para.textContent = text;
```

文字列を DOM ノードに挿入するのに `innerHTML` は使用しないでください。

```js example-bad
let text = "Hello to all you good people";
const para = document.createElement("p");
para.innerHTML = text;
```

## 変数

### 変数の命名

変数名には lowerCamelCasing （訳注: 小文字で始め、各単語の先頭を大文字にした形）を使用し、必要に応じて簡潔で人間が読みやすい、意味のある名前を使用してください。

変数名はこちらに示したように使用してください。

```js example-good
let playerScore = 0;

let speed = distance / time;
```

このような変数名を使用しないでください。

```js example-bad
let thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;

let s = d / t;
```

> **メモ:** 人間が読める意味のある名前を使わなくても良いのは、ループのイテレーターに `i` や `j` などを使用するような、非常に一般的に認識されている慣習が存在する場合だけです。

### 変数の宣言

変数や定数を宣言するときは、 [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) や [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) キーワードを使用してください。 [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) は使用しないでください。以下の例は、MDN Web Docs で何が推奨され、何が推奨されないかを示しています。

- 変数が再代入されない場合は、 `const` を推奨します。

  ```js example-good
  const myName = "Chris";
  console.log(myName);
  ```

- そうでない場合は `let` を使用してください。

  ```js example-good
  let myAge = "40";
  myAge++;
  console.log("Happy birthday!");
  ```

- この例では `const` を使用すべきところを `let` を使用しています。これはこれで動作はしますが、 MDN のコード例では避けてください。

  ```js example-bad
  let myName = "Chris";
  console.log(myName);
  ```

この例では、再代入される変数に const を使用しています。再代入されるとエラーが発生します。

```js example-bad
const myAge = "40";
myAge++;
console.log("Happy birthday!");
```

この例では `var` を使用していますが、MDN のコード例では、本当に必要な場合以外は避けるべきです。

```js example-bad
var myAge = "40";
var myName = "Chris";
```

## 関連情報

私たちの [JavaScript 言語リファレンス](/ja/docs/Web/JavaScript/Reference) のページのトップに、簡潔で意味のある良い JavaScript のスニペットがあります。参照していくつか見つけてください。私たちのインタラクティブな例 (およびその他の例) は、おおむね上記のガイドラインに沿って書かれていますが、ほとんどはガイドラインが新しく書かれる前に書かれたものなので、ところどころ違っている可能性があることを認識しておいてください。

- API の例については、以下のものを見てみてください。
  - [`fetch()` の例](/ja/docs/Web/API/fetch#例)
  - [`fillRect()` の例](/ja/docs/Web/API/CanvasRenderingContext2D/fillRect#例) （Canvas 2D の例は、古いスタイルの `var` をまだ使用していますが、概ね良好です）。
  - [Payment Request API の `show()`](/ja/docs/Web/API/PaymentRequest/show) （{{DOMxRef("PaymentRequest")}} の例は、全般的にかなり良いものです）。
  - [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) （HTML、CSS、JavaScript の一般的な良い実践と、スニペットを使用する方法の良いデモと、他の場所での完全な例へのリンク）。
  - [メディア能力 API の使用](/ja/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API) （ガイドでコードスニペットを使用するための、より一般的な良い実践）。
