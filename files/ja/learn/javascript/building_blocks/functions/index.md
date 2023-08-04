---
title: 関数 — 再利用可能なコードブロック
slug: Learn/JavaScript/Building_blocks/Functions
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}

コーディングにおいて、不可欠なコンセプトが**関数**です。関数を使用することで、特定のタスクをこなすコードを定義し、保持しておいて、いつでも簡単なコマンドで呼び出すことを可能にしてくれます。同じコードを何度も打たなければならないよりとっても簡単です。この記事では関数の書き方や、関数を実行する方法、定義の仕方、スコープ、引数といった関数に関する基礎を学びます。

| 前提知識: | 基本的なコンピューターの知識、HTML と CSS への理解、[JavaScript の第一歩](/ja/docs/Learn/JavaScript/First_steps)。 |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| 目的:     | JavaScript の関数についての基礎を理解する。                                                                        |

## 関数はどこにありますか？

JavaScript の中で、関数はあらゆるところに見つかるでしょう。実際、これまでのところすべての場面で関数を使用してきました。これについてはあまり触れてきませんでした。しかし、今こそ明確に関数について話し始め、本当に構文を探索する時期です。

一対のかっこ — `()` — の機能である JavaScript の構造を使用するほとんどの場合、そして [for ループ](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code#The_standard_for_loop)、[while と do ... while ループ](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while)、または [if..else 文](/ja/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements)のような一般的な組み込みの言語構造を使用**していない**場合、あなたは関数を使用していることになります。

## ブラウザー組み込み関数

このコースではブラウザーに組込まれた関数をたくさん使ってきました。毎回テキスト文字列を操作したときには、こんな風に:

```js
let myText = "I am a string";
let newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

あるいは毎回配列を操作したときには:

```js
let myArray = ["I", "love", "chocolate", "frogs"];
let madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

また毎回乱数を作成したときには:

```js
let myNumber = Math.random();
// the random() function generates a random
// number between 0 and 1, and returns that
// number
```

...関数を使っていたのです!

> **メモ:** これらの機能に慣れるために、必要なときにはこういった行をあなたのブラウザーの JavaScript コンソールにいつでも入力してみてください。

JavaScript 言語にはたくさんの組込み関数があるので、いろいろあるあなたのやりたい事を、全部をあなた自身で書かなくてもすみます。実は、あなたが呼び出して起動(走らせたり実行する事の別の言い方)するコードのいくつかは、JavaScript では書けない、ブラウザー組込み関数です — こういった関数の多くは背後のブラウザーのコードを呼び出していて、これらは JavaScript のようなウェブ言語ではなく、大半が C++のような低レベルのシステム言語で書かれています。

ブラウザー関数のいくつかは JavaScript 言語の核に含まれない事を心に留めておいてください — いくつかはブラウザー API の一部として定義されていて、もっと多くの機能を提供すべくデフォルトの言語の上で構築されています(詳しくは[私たちのコースのこの以前のセクション](/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript#So_what_can_it_really_do)を見てください)。ブラウザー API のもっと詳しい使い方については、後の方のモジュールで見ていく事になるでしょう。

## 関数とメソッド

オブジェクトの**メソッド**の一部を、プログラマーは**関数**として呼び出します。構成された JavaScript オブジェクト内部の働きについては、まだ知る必要はありません — この後のモジュールで、オブジェクト内部の働きや自分でオブジェクトを作る方法について教える段階になってから覚えれば大丈夫です。今のところは、ウェブのあちこちにある関連したリソースを見ていると、メソッドと関数が混在している事があるとわかってもらいたいだけです。

これまで利用してきた組込み関数は両方です: 関数でありメソッドでもあります。組み込みオブジェクトとそのメソッドと同様に、組み込み関数の一覧を[こちらで](/ja/docs/Web/JavaScript/Reference/Global_Objects)確認できます。

このコースのここまででもたくさんのカスタム関数を見てきました — ブラウザーの内部でではなくあなたのコードの中で定義された関数です。独自の名前の直後にカッコがついてるものを見かけたら、それはカスタム関数を使っているという事です。[繰返しの記事](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code)で出てきた [random-canvas-circles.html](http://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) の例([ソースコード](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/random-canvas-circles.html)はこちら)では、独自に作った `draw()` 関数が含まれていました。こんなやつです:

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

この関数は、{{htmlelement("canvas")}} 要素の内にランダムな円を 100 描きます。同じ事をやりたい時には、いつでもこんな具合に関数を起動するだけです

```js
draw();
```

繰り返しをする毎に何度も同じコードを書き上げるのではなく。関数にはあなたが書きたいどんなコードでも含められます — 関数の中から他の関数を呼ぶことだってできます。例に挙げた上の関数では、`random()`関数を 3 回呼んでいて、random 関数は以下のコードで定義されています:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

ブラウザー組込みの [Math.random()](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) は 0 から 1 までの間の 10 進数の乱数を作成するだけなので、私たちにはこの関数が必要でした。私たちは 0 から指定した数にわたる乱数が欲しかったのです。

## 関数の呼び出し

もうよくご存知でしょう、でも念のため … 定義した後で実際に関数を使うには、関数を走らせ — あるいは起動し — なければなりません。これはコードのどこかに関数の名前、直後にカッコの組を書けばできます。

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

## 匿名関数

ちょっと違う形式で定義されて起動される関数を見かける事があるでしょう。ここまでは関数をこのように作ってきました:

```js
function myFunction() {
  alert("hello");
}
```

でも名前のない関数を作る事もできます:

```js
function() {
  alert('hello');
}
```

これは**匿名関数**と呼ばれます — 名前がないんです! それだけでは何もしません。匿名関数はよくイベントハンドラで使われていて、例えば以下では関連づけられたボタンがクリックされるたび、関数の中のコードが走ります:

```js
const myButton = document.querySelector("button");

myButton.onclick = function () {
  alert("hello");
};
```

上の例では、ページの中に選択してクリックするための{{htmlelement("button")}}要素が存在しなければならないでしょう。あなたはこのような例をここまでのコースで見てきましたし、ここから先の記事でもっと学習し、使い方を見ていく事になります。

匿名関数を変数の値として代入する事もできます:

```js
const myGreeting = function () {
  alert("hello");
};
```

この関数は次のように起動できます:

```js
myGreeting();
```

関数に名前をつけたような効果があります。また関数を複数の変数の値として代入する事もできます:

```js
let anotherGreeting = myGreeting;
```

結果、この関数はどちらの方法でも起動できます

```js
myGreeting();
anotherGreeting();
```

ですがこれは混乱するだけなので、やらないように! 関数を作成するときはこの形式でやった方が良いです:

```js
function myGreeting() {
  alert("hello");
}
```

匿名関数は主にイベント発火 — ボタンがクリックされたとか — のレスポンスとして、一連のコードを走らせるだけのような場合に、イベントハンドラとして使われます。くりかえしですが、こんな具合です:

```js
myButton.onclick = function () {
  alert("hello");
  // I can put as much code
  // inside here as I want
};
```

## 関数の引数

関数には実行する時に**引数**が必要なものがあります — 関数のカッコとカッコの間に書かなければならない値で、関数が正しい仕事をするのに必要とされます。

> **メモ:** 引数は、パラメーター、プロパティ、アトリビュート（属性）などと呼ばれる場合もあります。

例えばブラウザー組込み関数 [Math.random()](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) は引数を必要としません。呼ばれるといつも 0 から 1 までの乱数を返します:

```js
let myNumber = Math.random();
```

ですがブラウザー組込みの文字列関数 [replace()](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace) は二つの引数が必要です — 主文字列から探すべき部分文字列と、部分文字列を置換する文字列です:

```js
let myText = "I am a string";
let newString = myText.replace("string", "sausage");
```

> **メモ:** 複数の引数を指定するときは、カンマで区切って書きます

引数には省略可能 — 書かなくても良い — なものもある事に触れておくべきでしょう。省略された場合、関数はだいたいデフォルトに規定された動作を行ないます。例えば、配列の [join()](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 関数のパラメータは省略可能です:

```js
let myArray = ["I", "love", "chocolate", "frogs"];
let madeAString = myArray.join(" ");
// returns 'I love chocolate frogs'
let madeAString = myArray.join();
// returns 'I,love,chocolate,frogs'
```

もし結合/区切り文字を指定する引数が省略された場合、デフォルトとしてカンマが使われます。

## 関数のスコープと競合

{{glossary("スコープ")}}という言葉について説明しておきましょう — 関数を扱う際にはとても大切な概念です。関数を作成するとき、関数の中で定義されている変数や関数は、内部でそれぞれ独自の**スコープ**というものを持ちます。これはそれぞれが独自の小部屋に閉じ込められていて、別の関数の内部から、あるいはこの関数の外部のコードから触れられくなる事を意味しています。

あなたのすべての関数の外側、一番の外側を、**グローバルスコープ**と呼びます。グローバルスコープで定義された値はすべて、コードのどこからでもアクセスできます。

JavaScript がこう作られているのにはいくつも理由があります — が、主な理由はセキュリティと組織化のためです。時には変数にコードのどこからでもアクセスされないようにしたい場合もあるでしょう — どこかから呼び込んだ外部スクリプトが、あなたのコードをおかしくして問題を起す場合があるかもしれません。別の場所でたまたま同じ名前の変数を使っていて、衝突していたために。これは悪意をもってわざとやっている場合や、単なる偶然の場合もあります。

そうですね、例えばある HTML ファイルが二つの外部 JavaScript ファイルを呼び出しているとして、そのどちらも同じ名前の変数と関数を定義しているとします:

```html
<!-- Excerpt from my HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>
```

```js
// first.js
let name = "Chris";
function greeting() {
  alert("Hello " + name + ": welcome to our company.");
}
```

```js
// second.js
let name = "Zaptec";
function greeting() {
  alert("Our company is called " + name + ".");
}
```

あなたが呼び出したいのはどっちも `greeting()`関数ですが、あなたには `first.js` ファイルの `greeting()` 関数しかアクセスできません(2 つ目は無視されます)。加えて、`second.js` ファイルで `let` キーワードで `name` 変数に 2 度目の定義をしようとするとエラーになります。

> **メモ:** この例を [GitHub でライブ実行](http://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) できます([ソースコード](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/functions)はこちら).

あなたのコードの部品を関数の中に隔離するとこのような問題を避けられるので、これが一番良いやりかたと考えられています。

これは動物園みたいなものです。ライオン、シマウマ、トラ、ペンギンはそれぞれの檻の中にいて、それぞれの檻の中のものにしか触れられません — 関数のスコープと同じ事です。もし彼等が他の檻の中に侵入できたら問題が起きることでしょう。良くて、知らない住人に囲まれて気まずい思いをする — 寒くて水だらけのペンギンの檻に入ったライオンやトラは酷い気分になるでしょう。最悪の場合、ライオンやトラはペンギンを食べてみようとするかも!

![](MDN-mozilla-zoo.png)

動物園の管理人はグローバルスコープみたいなものです — 管理人はすべての檻の鍵を持っていて、エサを補充し、動物にうんざりし、などなど。

### アクティブラーニング: スコープで遊んでみよう

スコープを示すための実際の例を見てみましょう。

1. まず [function-scope.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-scope.html) の例のローカルコピーを作成します。これには `a()` と `b()` という 2 つの関数と、`x`、`y`、`z` の 3 つの変数が含まれます。これらの変数のうち 2 つは関数内で定義され、もう 1 つはグローバルスコープ内で定義されます。また `output()` という 3 番目の関数も含まれています。この関数は単一のパラメータを取り、ページの段落に出力します
2. ブラウザーとテキストエディターでサンプルを開きます
3. ブラウザーの開発者ツールで JavaScript コンソールを開きます。JavaScript コンソールで、次のコマンドを入力します。

   ```js
   output(x);
   ```

   変数 x の出力値が画面に表示されるはずです。

4. コンソールに次のように入力してみてください

   ```js
   output(y);
   output(z);
   ```

   どちらも、"[ReferenceError: y is not defined](/ja/docs/Web/JavaScript/Reference/Errors/Not_defined)"の一行のエラーが返されるはずです。なぜでしょうか？ 関数スコープのため、つまり `y` と `z` は `a()` と `b()` 関数の中でロックされているので、global スコープから呼び出されたときには `output()` はそれらにアクセスできません。

5. しかし、別の関数の中から呼び出されたときはどうでしょうか？ `a()` と `b()` を次のように編集してみてください：

   ```js
   function a() {
     let y = 2;
     output(y);
   }

   function b() {
     let z = 3;
     output(z);
   }
   ```

   コードを保存してブラウザーに再ロードしてから、JavaScript コンソールから `a()` と `b()` 関数を呼び出してみてください。

   ```js
   a();
   b();
   ```

   ページに `y` と `z` の値の出力が表示されます。`output()` 関数が他の関数の中、つまり表示される変数が定義されているのと同じスコープでそれぞれ呼び出されているので、これはうまくいきます。`output()` 自体はグローバルスコープで定義されているので、どこからでも利用できます。

6. 今度は次のようにコードを更新してみてください：

   ```js
   function a() {
     let y = 2;
     output(x);
   }

   function b() {
     let z = 3;
     output(x);
   }
   ```

   保存してもう一度読み込み、JavaScript コンソールでもう一度試してみてください：

   ```js
   a();
   b();
   ```

   `a()` と `b()` の両方の呼び出しは `x` の値、つまり 1 が出力されます。これは `x` がグローバル変数であり、すべてのコード内どこでも利用可能であるため、`output()` の呼び出しが `x` と同じスコープではなくてもうまく動きます。

7. 最後に、次のようにコードを更新してみてください：

   ```js
   function a() {
     let y = 2;
     output(z);
   }

   function b() {
     let z = 3;
     output(y);
   }
   ```

   保存してもう一度読み込み、JavaScript コンソールでもう一度試してみてください：

   ```js
   a();
   b();
   ```

   今度は `a()` と `b()` の両方の呼び出しで、迷惑な "[ReferenceError: _variable name_ is not defined](/ja/docs/Web/JavaScript/Reference/Errors/Not_defined)" エラーが返されます — これは `output()` 呼び出しと、出力しようとしている変数が同じ関数のスコープにない、つまりこれらの関数呼び出しからは変数が参照できない状態だからです。

> **メモ:** 同じスコープルールはループ (`for() { ... }` など) と条件ブロック (`if() { ... }`など) には適用されません。それらは非常によく似ていますが、同じものではありません。混乱しないように注意してください。

> **メモ:** [ReferenceError: "x" is not defined](/ja/docs/Web/JavaScript/Reference/Errors/Not_defined) というエラーは、あなたが遭遇する最も一般的なエラーの 1 つです。このエラーが発生し、問題の変数が定義されていると確信できる場合は、変数のスコープを確認してください。

### 関数の中の関数

別の関数内であっても、どこからでも関数を呼び出すことができます。これは、コードをきれいにする方法としてよく使われます。大きな複雑な関数がある場合は、いくつかのサブ関数に分解すれば分かります。

```js
function myBigFunction() {
  let myValue;

  subFunction1();
  subFunction2();
  subFunction3();
}

function subFunction1() {
  console.log(myValue);
}

function subFunction2() {
  console.log(myValue);
}

function subFunction3() {
  console.log(myValue);
}
```

関数内で使用されている値が適切にスコープ内にあることを確認してください。上記の例では `ReferenceError: myValue is not defined` というエラーが発生します。`myValue`変数は関数呼び出しと同じスコープで定義されていますが、関数定義内では定義されていないためです。従って実際のコードは関数が呼び出されたときに実行されます。これを動くようにするには、次のように関数に値を渡す必要があります。

```js
function myBigFunction() {
  let myValue = 1;

  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}
```

## スキルをテストしよう!

この記事の最後に来ましたが、最も大事な情報を覚えていますか？次に移る前に、この情報を保持しているか検証するテストがあります — [Test your skills: Functions](/ja/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions) を見てください。このテストは次の 2 つの記事でカバーしているスキルを求めていますので、テストの前にそちらを読むほうが良いかもしれません。

## まとめ

この記事では関数の背後にある基本的な概念を探り、次に実用的な方法を習得し、独自のカスタム関数を構築する手順を紹介しました。

## 関連情報

- [関数の詳細ガイド](/ja/docs/Web/JavaScript/Guide/Functions) — ここに含まれていないいくつかの高度な機能について説明します。
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters), [アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) — 高度な概念リファレンス

<!---->

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}
