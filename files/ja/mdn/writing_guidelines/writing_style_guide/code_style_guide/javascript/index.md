---
title: JavaScript のサンプルコードの作成ガイドライン
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
l10n:
  sourceCommit: f845422a4b52c149e87846242d26b3cdf2705376
---

{{MDNSidebar}}

以下のガイドラインは MDN Web Docs の JavaScript のサンプルコードの書き方について述べたものです。この記事は、可能な限り多くの人が理解できるような簡潔な例を書くためのルールをまとめたものです。

## JavaScript サンプルコードに関する一般的なガイドライン

この節では、　JavaScript　のサンプルコードを書く際に留意すべき一般的なガイドラインを説明します。後の節では、より具体的な詳細について説明します。

### 書式の選択

正しいインデント、ホワイトスペース、行の長さに関する意見は常に論争の的となってきました。このようなトピックに関するディスカッションは、コンテンツを作成したり維持したりすることの妨げになります。

MDN Web Docs では、コードスタイルの一貫性を保つために（そしてトピック外の議論を避けるために）、コード整形ツールとして [Prettier](https://prettier.io/) を使用しています。現在のルールについては [設定ファイル](https://github.com/mdn/content/blob/main/.prettierrc.json) を参照し、 [Prettier のドキュメント](https://prettier.io/docs/en/index.html)を読んでください。

Prettier はすべてのコードを書式化し、スタイルの一貫性を保ちます。とはいえ、従わなければならない追加のルールがいくつかあります。

### 最新の JavaScript 機能の使用

Chrome、Edge、Firefox、Safari といった主要なブラウザーが対応していれば、新しい機能を使用することができます。

## 配列

### 配列の作成

配列の作成には、コンストラクターではなくリテラルを使用してください。

このようにしてください。

```js example-good
const visitedCities = [];
```

このようにしないでください。

```js example-bad
const visitedCities = new Array(length);
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

## 非同期メソッド

非同期コードを書くとパフォーマンスが向上するので、可能な場合は使用しましょう。具体的な方法としては、以下を使用することができます。

- [プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/ja/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/ja/docs/Web/JavaScript/Reference/Operators/await)

どちらの手法も可能な場合は、より単純な `async`/`await` 構文を使用することを推奨します。残念ながら、 ECMAScript モジュールでない限り、最上位のレベルで `await` を使用することはできません。 Node.js で使用する CommonJS モジュールは ES モジュールではありません。もし例があらゆる場所で使用することを意図しているのであれば、最上位の `await` は避けてください。

## コメント

コメントは、良いコード例を書くために非常に重要です。コードの意図を明確にし、開発者がコードを理解するのに役立ちます。特に注意してください。

- コードの目的やロジックが明らかでない場合は、下記の通り、意図をコメントで追加してください。

  ```js example-good
  let total = 0;

  // arr の最初の 4 つの要素の和を計算する
  for (let i = 0; i < 4; i++) {
    total += arr[i];
  }
  ```

  一方で、コードを散文で再記述することは、コメントの使用として適切ではありません。

  ```js example-bad
  let total = 0;

  // 1 から 4 までループ
  for (let i = 0; i < 4; i++) {
    // 値を total に加算
    total += arr[i];
  }
  ```

- コメントも、関数が何を行っているかを記述する明確な名前を持っている場合には必要ありません。次のように書いてください。

  ```js example-good
  closeConnection();
  ```

  次のように書かないでください。

  ```js example-bad
  closeConnection(); // 接続を閉じる
  ```

### 単一行のコメントを使用する

単一行のコメントは `//` でマークされ、ブロックコメントは `/* … */` で囲まれます。

一般的に、コードをコメントを書くには単一の行のコメントを使用します。コメントアウトされたコードを視覚的に認識しやすくするためです。さらに、この慣例により、デバッグ中に `/* … */` を使用してコードの部分をコメントアウトすることができます。

- スラッシュとコメントの間には空白を入れてください。文のように大文字で始めますが、コメントをピリオドで終わらせないでください。

  ```js example-good
  // これはよく書かれた単一行のコメントです
  ```

- 新しいインデントレベルの直後にコメントが始まらない場合は、空行を追加してからコメントを追加してください。そうすることで、コードブロックが作成され、コメントが参照するものが明確になります。また、コメントは参照するコードの前の別個の行に記述してください。次の例で示します。

  ```js example-good
  function checkout(goodsPrice, shipmentPrice, taxes) {
    // 合計金額を計算
    const total = goodsPrice + shipmentPrice + taxes;

    // 新しい段落を作成して文書に追加
    const para = document.createElement("p");
    para.textContent = `合計金額は ${total} です`;
    document.body.appendChild(para);
  }
  ```

### ログの出力

- 本番環境で実行することを意図したコードでは、何らかのデータをログ出力するときにコメントが必要になることはほとんどありません。サンプルコードでは、重要な値を出力するために `console.log()` や `console.error()` などの関数を使用することが よくあります。コードを実行しなくても何が起こるのかを読者に理解してもらうために、関数の _後_ に、出力されるログをコメントとして書くことができます。次のように書いてください。

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket); // ['banana', 'mango', 'orange']
  }
  ```

  次のように書かないでください。

  ```js example-bad
  function exampleFunc(fruitBasket) {
    // Logs: ['banana', 'mango', 'orange']
    console.log(fruitBasket);
  }
  ```

- 行が長くなりすぎる場合は、次のように関数の後にコメントを書いてください。

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['banana', 'mango', 'orange', 'apple', 'pear', 'durian', 'lemon']
  }
  ```

### 複数行のコメント

コメントは通常短い方が良いので、 60 ～ 80 文字で 1 行にまとめるようにしてください。それが可能でない場合は、各行の先頭に `//` を使用してください。

```js example-good
// この例は複数行のコメントです。
// 以下に続く架空の関数には、呼び出す際のいくつかの変わった制限があります。
// 制限 1
// 制限 2
```

`/* … */` を使用しないでください。

```js example-bad
/* この例は複数行のコメントです。
  以下に続く架空の関数には、呼び出す際のいくつかの変わった制限があります。
  制限 1
  制限 2 */
```

### コメントを使用して省略記号を表示

例を短くするために、省略記号 (…) を使用して冗長なコードを省略することは必要です。しかし、開発者はコードに例をコピー＆ペーストすることが多いので、書き手は慎重に行うべきです。

JavaScriptでは、省略記号 (…) はコメントに書くべきです。可能な場合は、このスニペットを再利用する人がどのようなアクションを追加するのかを示してください。

省略記号 (…) にコメントを使用することで、より明示的になり、開発者がサンプルコードをコピー＆ペーストしたときのエラーを防ぐことができます。次のように書いてください。

```js example-good
function exampleFunc() {
  // ここにコードを追加
  // …
}
```

このように省略記号 (…) を使用しないでください。

```js example-bad
function exampleFunc() {
  …
}
```

### 引数のコメントアウト

コードを書くとき、通常は不要な引数を除外します。しかしサンプルコードでは、取り得る引数を使用しなかったことを示したい場合があります。

これを行うには、引数リストに `/* … */` を使用します。これは単一行コメント (`//`) のみを使用するというルールの例外です。

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## 関数

### 関数の命名

関数名には{{Glossary("camel_case", "キャメルケース")}}を使用し、小文字で始めてください。簡潔で、人間が読み取り可能な、適切な意味づけの名前を使用してください。

以下は関数名の正しい例です。

```js example-good
function sayHello() {
  console.log("Hello!");
}
```

このような関数名は使用しないでください。

```js example-bad
function SayHello() {
  console.log("Hello!");
}

function doIt() {
  console.log("Hello!");
}
```

### 関数の宣言

- 可能な限り、関数を定義するには関数式よりも関数宣言を使用してください。

  関数宣言の推奨される方法は次の通りです。

  ```js example-good
  function sum(a, b) {
    return a + b;
  }
  ```

  これは関数を定義する良い方法ではありません。

  ```js example-bad
  let sum = function (a, b) {
    return a + b;
  };
  ```

- 無名関数をコールバック（他のメソッド呼び出しに渡す関数）として用いる場合、 `this` にアクセスする必要がなければ、アロー関数を使用してコードを短くすっきりさせましょう。

  こちらは推奨される方法です。

  ```js example-good
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce((a, b) => a + b);
  ```

  次のように書く代わりです。

  ```js example-bad
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce(function (a, b) {
    return a + b;
  });
  ```

- 識別子に関数を割り当てるためにアロー関数を使用することは避けてください。具体的な例としては、メソッドにアロー関数を使用しないでください。キーワード `function` を用いた関数宣言を使用してください。

  ```js example-good
  function x() {
    // …
  }
  ```

  このようにしないでください。

  ```js example-bad
  const x = () => {
    // …
  };
  ```

- アロー関数を用いる場合は、可能な限り[暗黙の返値](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) （_式本体_ とも呼ばれます）を使用してください。

  ```js example-good
  arr.map((e) => e.id);
  ```

  次のようにしないでください。

  ```js example-bad
  arr.map((e) => {
    return e.id;
  });
  ```

## ループと条件文

### ループの初期化

[ループ](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code)が必要な場合は、利用可能なループ（[`for`](/ja/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/ja/docs/Web/JavaScript/Reference/Statements/while) など）の中から、適切なループを選択してください。

- コレクションの要素をすべて反復処理する場合は、古典的な `for (;;)` ループの使用を避け、`for...of` または `forEach()` を推奨します。配列 `Array` 以外のコレクションを使用している場合は、`for...of` が実際に対応しているか（反復可能な変数であることが要求される）、`forEach()` メソッドが実際に存在しているかを調べる必要があることに注意してください。

  `for...of` を使用してください。

  ```js example-good
  const dogs = ["Rex", "Lassie"];
  for (const dog of dogs) {
    console.log(dog);
  }
  ```

  `forEach()` でも構いません。

  ```js example-good
  const dogs = ["Rex", "Lassie"];
  dogs.forEach((dog) => {
    console.log(dog);
  });
  ```

  `for (;;)` は使用しないでください - インデックスの `i` を追加しなければならないだけでなく、配列の長さも指定しなければなりません。初心者にとってはエラーの可能性があります。

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- `for...of` には `const` キーワードを、他にもループには `let` キーワードを使用して、初期化子を適切に定義してください。省略しないでください。この例は正しいです。

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  次の例は、初期化に関する推奨ガイドラインに従っていません（暗黙的にグローバル変数を作成しており、厳格モードでは失敗します）。

  ```js example-bad
  const cats = ["Athena", "Luna"];
  for (i of cats) {
    console.log(i);
  }
  ```

- 値とインデックスの両方にアクセスする必要がある場合は、 `for (;;)` の代わりに `.forEach()` を使用することができます。次のように書いてください。

  ```js example-good
  const gerbils = ["Zoé", "Chloé"];
  gerbils.forEach((gerbil, i) => {
    console.log(`Gerbil #${i}: ${gerbil}`);
  });
  ```

  次のように書かないでください。

  ```js example-bad
  const gerbils = ["Zoé", "Chloé"];
  for (let i = 0; i < gerbils.length; i++) {
    console.log(`Gerbil #${i}: ${gerbils[i]}`);
  }
  ```

> **警告:** `for...in` を配列や文字列に使用しないでください。

> **メモ:** `for`ループをまったく使用しないことを検討してください。 [`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) （または一部の操作においては [`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String)）使用している場合は、代わりに [`map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)、[`every()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every)、[`findIndex()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)、[`find()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find)、[`includes()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)、その他多数のような、より意味づけされた反復処理メソッドを使用することを検討してください。

### 制御文

`if...else` 制御文には注意すべきケースがあります。もし `if` 文が `return` で終わっている場合は、`else` 文を追加しないでください。

if`文のすぐ後に続けてください。次のように書いてください。

```js example-good
if (test) {
  // test が true の時に何かを行う
  // …
  return;
}

// test が false の時に何かを行う
// …
```

次のように書かないでください。

```js example-bad
if (test) {
  // test が true の時に何かを行う
  // …
  return;
} else {
  // test が false の時に何かを行う
  // …
}
```

### 制御文やループでは中括弧を使用する

`if`、`for`、`while` などの制御フロー文は、コンテンツが単一の文で構成されている場合は中括弧の使用を要求されませんが、常に中括弧を使用してください。次のように書いてください。

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

次のように書かないでください。

```js example-bad
for (const car of storedCars) car.paint("red");
```

これにより、文を追加する際に中括弧を追加し忘れるのを防ぐことができます。

### switch 文

switch 文は少し厄介です。

- 特定のケースでは `return` 文の後に `break` 文を追加しないでください。その代わりに、`return`文を次のように書いてください。

  ```js example-good
  switch (species) {
    case "chicken":
      return farm.shed;
    case "horse":
      return corral.entry;
    default:
      return "";
  }
  ```

  `break` 文を追加しても、到達することはありません。次のように書かないでください。

  ```js example-bad
  switch (species) {
    case "chicken":
      return farm.shed;
      break;
    case "horse":
      return corral.entry;
      break;
    default:
      return "";
  }
  ```

- `default` は最後のケースに使用し、 `break` 文で終わらせないようにしてください。もし別の方法が必要であれば、その理由をコメントで追加してください。

- case 節でローカル変数を宣言するときは、中括弧を使用してスコープを定義する必要があることを覚えておいてください。

  ```js
  switch (fruits) {
    case "Orange": {
      const slice = fruit.slice();
      eat(slice);
      break;
    }
    case "Apple": {
      const core = fruit.extractCore();
      recycle(core);
      break;
    }
  }
  ```

## エラー処理

- もしプログラムの特定の状態により捕捉できないエラーが発生した場合、実行が停止し、例の有用性が低下する可能性があります。したがって、 [`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) ブロックを使用してエラーを捕捉する必要があります。

  ```js example-good
  try {
    console.log(getResult());
  } catch (e) {
    console.error(e);
  }
  ```

- `catch` 文の引数が不要な場合は、省略してください。

  ```js example-good
  try {
    console.log(getResult());
  } catch {
    console.error("An error happened!");
  }
  ```

> [!NOTE]
> 回復可能なエラーだけが捕捉され、処理されるべきであるということを覚えておいてください。回復不可能なエラーはすべてスルーされ、コールスタックにバブルアップされるべきです。

## オブジェクト

### オブジェクトの命名

- クラスを定義する場合は、クラス名に _パスカルケース_ （大文字で始める）を、オブジェクトのプロパティ名とメソッド名に _キャメルケース_ （小文字で始める）を使用してください。

- オブジェクトのインスタンスを定義する場合、リテラルを使用する場合もコンストラクターを使用する場合も、インスタンス名には小文字から始まる _キャメルケース_ を使用します。例えば、次のようになります。

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### オブジェクトの作成

一般的なオブジェクトを作成する場合（クラスが関与しない場合）には、コンストラクターではなくリテラルを使用してください。

このようにしてください。

```js example-good
const object = {};
```

このようにしないでください。

```js example-bad
const object = new Object();
```

### オブジェクトクラス

オブジェクトには、旧来のコンストラクターではなく、 ES クラス構文を使用してください。

例えば、これが推奨される方法です。

```js example-good
class Person {
  constructor(name, age, pronouns) {
    this.name = name;
    this.age = age;
    this.pronouns = pronouns;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
```

継承には `extends` を使用してください。

```js example-good
class Teacher extends Person {
  // …
}
```

### メソッド

メソッドを定義するには、メソッド定義構文を使用してください。

```js example-good
const obj = {
  foo() {
    // …
  },
  bar() {
    // …
  },
};
```

次のようにしないでください。

```js example-bad
const obj = {
  foo: function () {
    // …
  },
  bar: function () {
    // …
  },
};
```

### オブジェクトプロパティ

- [`Object.prototype.hasOwnProperty()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) メソッドは非推奨となり、 [`Object.hasOwn()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) に置き換えられました。
- 可能な限り、プロパティ識別子の重複を避けるために一括指定を使用してください。次のように書いてください。

  ```js example-good
  function createObject(name, age) {
    return { name, age };
  }
  ```

  次のように書かないでください。

  ```js example-bad
  function createObject(name, age) {
    return { name: name, age: age };
  }
  ```

## 演算子

この節では、どの演算子をいつ使用するか、私たちの推奨事項を掲載しています。

### 条件演算子

条件に応じてリテラルを変数に格納するためには、 `if...else` 文の代わりに[条件（三項）演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator)を使用します。このルールは返値を返すときにも適用されます。次のように書いてください。

```js example-good
const x = condition ? 1 : 2;
```

次のように書かないでください。

```js example-bad
let x;
if (condition) {
  x = 1;
} else {
  x = 2;
}
```

条件演算子は、情報をログ出力する文字列を作成するときに便利です。このような例では、通常の `if...else` 文を使用すると、ログ出力するような脇の処理のために長いコードブロックになり、この例の中心点を難読化してしまいます。

### 厳密等価を用いる

[厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)（三重イコール）および不等式演算子を、緩い等価演算子（二重イコール）および不等式演算子よりも推奨します。

厳密等価演算子、不等価演算子はこのように使用します。

```js example-good
name === "Shilpa";
age !== 25;
```

以下のように、等価演算子、不等価演算子を使用しないでください。

```js example-bad
name == "Shilpa";
age != 25;
```

もし `==` や `!=` を使用する必要がある場合、受け入れられる用途は `== null` だけであることを覚えておいてください。 TypeScript は他のすべてのケースで失敗するので、サンプルコードではこれらを使用したくありません。なぜそれが必要なのかを説明するコメントを追加することを検討してください。

### 論理値の評価に短縮形式を使う

論理値の評価には短縮形式を使用してください。 `if (x)` や `if (!x)` を使い、 `if (x === true)` や `if (x === false)` は使わないでください。真値や偽値の種類によって処理する値が異なる場合を除きます。

## 文字列

文字列リテラルは `'A string'` のように単一の引用符で囲むことも、`"A string"` のように二重引用符で囲むこともできます。 Prettier は一貫性を保ちます。

### テンプレートリテラル

文字列に値を挿入する場合は、[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)を使用してください。

- こちらは、テンプレートリテラルを使用した推奨される方法の例です。これらを使用することで、多くの空白がらみのエラーを防ぐことができます。

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  このようにしないでください。

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- テンプレートリテラルを使いすぎないようにしてください。置換がない場合は、代わりに通常の文字列リテラルを使用してください。

## 変数

### 変数の命名

理解しやすいコードのためには、優れた変数名が不可欠です。

- 短い識別子を使用し、一般的でない略語は避けてください。良い変数名は通常 3 文字から 10 文字の長さですが、あくまでヒントです。例えば、 `accelerometer` は文字数のために `acclmtr` と略すよりも説明的です。
- 各変数に明確な意味づけがあるような、実世界に関連した例を使用するようにしてください。 `foo` や `bar` のようなプレースホルダーの名前に戻るのは、例が単純で作為的な場合だけにしてください。
- [ハンガリー記法](https://ja.wikipedia.org/wiki/ハンガリアン記法)は使用しないでください。変数名の接頭辞に型を付けないでください。例えば、`bought = oCar.sBuyer != null` ではなく `bought = car.buyer !== null` と書いたり、`sName = "John Doe"` ではなく `name = "John Doe"` と書いたりします。
- 集合の場合、リスト、配列、キューなどの型を名前に入力することは避けてください。コンテンツ名は複数形で使用します。例えば、車の配列の場合は `carArray` や `carList` ではなく `cars` を使用します。具体的なアプリケーションのコンテキストなしで機能の抽象的な形を表示させたい場合など、例外があるかもしれません。
- プリミティブ値には、小文字から始まる _camelCase_ を使用します。と:`_` は使用しないでください。適切な場合には、簡潔で読みやすく、意味づけされた名前を使用してください。例えば、 `currency_name` ではなく `currencyName` を使用してください。
- 冠詞や所有格を使用することは避けてください。例えば、 `myCar` や `aCar` の代わりに `car` を使用します。実用的なコンテキストがなく、一般的な機能を記述する場合などは例外があるかもしれません。
- 変数名はここに示すように使用してください。

  ```js example-good
  const playerScore = 0;
  const speed = distance / time;
  ```

  このような変数名を使用しないでください。

  ```js example-bad
  const thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;
  const s = d / t;
  ```

> [!NOTE]
> 人間が読める意味のある名前を使わなくても良いのは、ループのイテレーターに `i` や `j` などを使用するような、非常に一般的に認識されている慣習が存在する場合だけです。

### 変数の宣言

変数や定数を宣言するときは、 [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) や [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) キーワードを使用してください。 [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) は使用しないでください。以下の例は、MDN Web Docs で何が推奨され、何が推奨されないかを示しています。

- 変数が再代入されない場合は、 `const` を推奨します。

  ```js example-good
  const name = "Shilpa";
  console.log(name);
  ```

- そうでない場合は `let` を使用してください。

  ```js example-good
  let age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- この例では `const` を使用すべきところを `let` を使用しています。これはこれで動作はしますが、 MDN のサンプルコードでは避けてください。

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

この例では、再代入される変数に `const` を使用しています。再代入されるとエラーが発生します。

```js example-bad
const age = 40;
age++;
console.log("Happy birthday!");
```

- 下記の例では `var` を使用しており、グローバルスコープを汚染しています。

  ```js example-bad
  var age = 40;
  var name = "Shilpa";
  ```

- このように、 1 行に 1 つの変数を宣言します。

  ```js example-good
  let var1;
  let var2;
  let var3 = "Apapou";
  let var4 = var3;
  ```

  1 行で複数の変数を宣言したり、カンマで区切ったり、連鎖宣言を用いたりしないでください。このような変数の宣言は避けてください。

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 は暗黙にグローバル変数として作成され、厳格モードでは失敗する
  ```

### 型変換

暗黙の型変換は避けてください。具体的な例としては、 `+val` による数値の変換や `"" + val` による文字列の変換は避けてください。代わりに `new` を使わずに `Number()` や `String()` を使用してください。次のように書いてください。

```js example-good
class Person {
  #name;
  #birthYear;

  constructor(name, year) {
    this.#name = String(name);
    this.#birthYear = Number(year);
  }
}
```

次のように書かないでください。

```js example-bad
class Person {
  #name;
  #birthYear;

  constructor(name, year) {
    this.#name = "" + name;
    this.#birthYear = +year;
  }
}
```

## 避けるべき Web API

これらの JavaScript 言語の機能に加え、 Web API に関連するいくつかのガイドラインに留意することをお勧めします。

### ブラウザー接頭辞を避ける

主要なブラウザー（Chrome、Edge、Firefox、Safari）がすべて対応している機能については、接頭辞をつけないでください。次のように書いてください。

```js example-good
const context = new AudioContext();
```

接頭辞による複雑さを追加するのは避けましょう。次のように書かないでください。

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

同じルールが CSS 接頭辞にも適用されます。

### 非推奨の API を使用しない

メソッド、プロパティ、インターフェイス全体が非推奨である場合、（そのドキュメント以外では）使用しないでください。代わりに現行の API を使用してください。

避けるべき Web API と、それを置き換えるものの非網羅的なリストを示します。

- `fetch()` を XHR (`XMLHttpRequest`) の代わりに使用してください。
- `AudioWorklet` を `ScriptProcessorNode` の代わりに使用してください。

### 安全で信頼性の高い API を使用する

- 要素に純粋にテキストコンテンツを挿入する場合は、 {{DOMxRef("Element.innerHTML")}} を使用せず、代わりに {{DOMxRef("Node.textContent")}} を使用してください。 `innerHTML` プロパティは、開発者が引数を制御しなければセキュリティ上の問題につながります。私たち開発者がこのプロパティを使用しないようにすればするほど、開発者が私たちのコードをコピー＆ペーストしたときに作成されるセキュリティ上の欠陥は少なくなります。

  下記の例は `textContent` を使用しています。

  ```js example-good
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.textContent = text;
  ```

  `innerHTML` を使用して _生のテキスト_ を DOM ノードに入れないでください。

  ```js example-bad
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.innerHTML = text;
  ```

- `alert()` 関数は信頼できません。 MDN Web Docs で {{HTMLElement("iframe")}} 内にあるライブサンプルでは動作しません。さらに、ウィンドウ全体に対してモーダルになるので、うっとうしいです。静的なコード例では、 `console.log()` または `console.error()` を使用してください。[ライブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Live_samples)では、 `console.log()` と `console.error()` は表示されないので避けてください。専用の UI 要素を使用してください。

### 適切なログ出力メソッドを使用する

- メッセージをログ出力する場合は、 `console.log()` を使用してください。
- エラーをログ出力する場合は、 `console.error()` を使用してください。

## 関連情報

[JavaScript 言語リファレンス](/ja/docs/Web/JavaScript/Reference) - JavaScript のリファレンスページを参照して、簡潔で意味のある良い JavaScript スニペットを調べてください。
