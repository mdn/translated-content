---
title: 関数 — 再利用可能なコードブロック
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

コーディングにおいて、不可欠な概念が**関数**です。関数を使用することで、特定のタスクをこなすコードを定義し、保持しておいて、いつでも簡単なコマンドで呼び出すことを可能にしてくれます。同じコードを何度も打たなければならないよりとっても簡単です。この記事では関数の書き方や、関数を実行する方法、定義の仕方、スコープ、引数といった関数に関する基礎を学びます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td><a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>および<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS の基礎</a>を理解し、これまでのレッスンで説明した JavaScript を把握していること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>関数の目的。再利用可能なコードブロックを作成し、必要に応じてどこからでも呼び出せるようにすることです。</li>
          <li>JavaScript で関数は至る所で使用されており、一部はブラウザーに組み込まれており、一部はユーザーが定義したものであること。</li>
          <li>関数とメソッドの違い。</li>
          <li>関数の呼び出し。</li>
          <li>無名関数とアロー関数。</li>
          <li>関数の引数を定義し、引数を渡して関数を呼び出すこと。</li>
          <li>グローバルスコープと関数/ブロックスコープ。</li>
          <li>コールバック関数とは何かを理解すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 関数はどこにあるか

JavaScript の中で、関数はあらゆるところに見つかるでしょう。実際、これまでのところすべての場面で関数を使用してきました。これについてはあまり触れてきませんでした。しかし、今こそ明確に関数について話し始め、本当に構文を探索する時期です。

括弧のペアを特徴とする JavaScript の構造を使用するほとんどの場合、そして [for ループ](/ja/docs/Learn_web_development/Core/Scripting/Loops#標準的な_for_ループ)、[while と do...while ループ](/ja/docs/Learn_web_development/Core/Scripting/Loops#while_と_do...while)、または [if...else 文](/ja/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_文)のような一般的な組み込みの言語構造を使用**していない**場合、関数を使用していることになります。

## ブラウザー組み込み関数

このコースの中で、ブラウザーに組み込まれている関数を何度も使用してきました。

例えば、テキスト文字列を操作するとき。

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// replace() 文字列関数は、対象の文字列と元の文字列を
// 受け取り、元の文字列を対象の文字列に置き換えて、
// 新しく形成した文字列を返します。
```

または、配列を操作するとき。

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// join() 関数は配列を受け取り、配列のすべての
// 項目を単一の文字列に結合し、新しい文字列を
// 返します。
```

または、乱数を生成するとき。

```js
const myNumber = Math.random();
// random() 関数は、 0 から 1 までの乱数を生成し、
// その乱数を返します。
```

私たちは関数を使ってきました。

> [!NOTE]
> これらの機能に慣れるために、必要なときにはこういった行をあなたのブラウザーの JavaScript コンソールにいつでも入力してみてください。

JavaScript 言語にはたくさんの組込み関数があるので、いろいろあるあなたのやりたい事を、全部をあなた自身で書かなくてもすみます。実は、あなたが呼び出して起動（走らせたり実行する事の別の言い方）するコードのいくつかは、JavaScript では書けない、ブラウザー組込み関数です — こういった関数の多くは、背後のブラウザーのコードを呼び出していて、これらは JavaScript のようなウェブ言語ではなく、大半が C++ のような低レベルのシステム言語で書かれています。

ブラウザー関数のいくつかは JavaScript 言語のコアに含まれないことを心に留めておいてください。いくつかはブラウザー API の一部として定義されていて、もっと多くの機能を提供すべく既定の言語の上で構築されています（詳しくは[私たちのコースのこの以前の節](/ja/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#実際に何ができるのか)を見てください）。ブラウザー API のもっと詳しい使い方については、後の方のモジュールで見ていく事になるでしょう。

## 関数とメソッド

**関数**のうち、オブジェクトの一部であるものは**メソッド**と呼ばれます。オブジェクトについては、このモジュールの後半で学びます。 ここでは、メソッドと関数について可能な限り混乱を解消したいと思います。ウェブ上で利用できる関連のリソースを見ていくと、どちらの用語にも出会う可能性が高いでしょう。

これまで利用してきた組込み関数は両方です: 関数でありメソッドでもあります。組み込みオブジェクトとそのメソッドと同様に、組み込み関数の一覧を[こちらで](/ja/docs/Web/JavaScript/Reference/Global_Objects)確認できます。

このコースのここまででもたくさんのカスタム関数を見てきました。ブラウザーの内部でではなくあなたのコードの中で定義された関数です。独自の名前の直後にカッコがついてるものを見かけたら、それはカスタム関数を使っているということです。[ループの記事](/ja/docs/Learn_web_development/Core/Scripting/Loops)で出てきた [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) の例（[ソースコード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)はこちら）には、独自に作った `draw()` 関数が含まれていました。次のようなものです。

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

この関数は、{{htmlelement("canvas")}} 要素の中に 100 個のランダムな円を描きます。同じことをやりたい時には、いつでも次のように関数を起動するだけです。

```js
draw();
```

繰り返しのたびに、コードをすべて書き直す必要がなくなります。関数の中には好きなコードを何でも書くことができます。関数の中で他の関数を呼び出すこともできます。例えば上の例では、次のコードで定義されている `random()` 関数を 3 回呼び出しています。

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

ブラウザー組み込みの [`Math.random()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) は 0 から 1 までの間の 10 進数の乱数を作成するだけなので、私たちにはこの関数が必要でした。私たちは 0 から指定した数にわたる乱数が欲しかったのです。

## 関数の呼び出し

もうよくご存知でしょう、でも念のため、定義した後で実際に関数を使うには、関数を走らせ — あるいは呼び出さ — なければなりません。これはコードのどこかに関数の名前、直後にカッコの組を書けばできます。

```js
function myFunction() {
  alert("hello");
}

myFunction();
// 関数を一度呼び出す
```

> [!NOTE]
> この形で関数を作成することは、**関数宣言**とも呼ばれます。関数定義の上で関数を呼び出してもうまく動作するように、常に巻き上げが行われます。

## 関数の引数

関数によっては、呼び出す際に**引数**を指定することが求められるものがあります。これは関数の括弧の中に記載する必要がある値で、関数が正しく動作するために必要な値です。

> [!NOTE]
> 引数はパラメーター、プロパティ、属性などと呼ばれることもあります。

例えば、ブラウザー内蔵の [`Math.random()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 関数は引数を要求しません。呼び出されると、常に 0 から 1 までの間の乱数を返します。

```js
const myNumber = Math.random();
```

しかし、ブラウザー内蔵の文字列の [`replace()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 関数は、主たる文字列で探す部分文字列と、その文字列を置き換える部分文字列の 2 つの引数を必要とします。

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> 複数の引数を指定する必要がある場合は、カンマで区切ります。

### オプション引数

引数によっては、省略可能で指定する必要がないこともあります。指定しない場合、関数は通常何らかの既定の動作をします。例えば、配列の [`join()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 関数の引数はオプションです。

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// 'I love chocolate frogs' を返す

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// 'I,love,chocolate,frogs' を返す
```

結合/区切り文字を指定する引数が指定されなかった場合、既定ではカンマが使用されます。

### デフォルト引数

関数を書いていて、オプション引数に対応したい場合は、引数名の後に `=` をつけ、その後に既定値を続けることで既定値を指定することができます。

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

## 無名関数とアロー関数

ここまでは、このように関数を作成してきました。

```js
function myFunction() {
  alert("hello");
}
```

しかし、名前を持たない関数を作成することもできます。

```js
(function () {
  alert("hello");
});
```

これは名前がないため、**無名関数**と呼ばれます。無名関数は、ある関数が他の関数を引数として受け取ることを想定している場合に多く見られます。この場合、関数の引数はしばしば匿名関数として渡されます。

> [!NOTE]
> この形で関数を作成することは、**関数式**とも呼ばれます。関数宣言とは異なり、関数式は巻き上げが行われません。

### 無名関数の例

例えば、ユーザーがテキストボックスに入力したときに何らかのコードを実行したいとします。これを行うには、テキストボックスの {{domxref("EventTarget/addEventListener", "addEventListener()")}} 関数を呼び出します。この関数は（少なくとも） 2 つの引数が渡されることを期待します。

- 待ち受けするイベントの名前。この場合は {{domxref("Element/keydown_event", "keydown")}} です。
- イベント発生時に実行する関数。

ユーザーがキーを押すと、ブラウザーは指定された関数を呼び出し、ユーザーが押した具体的なキーを含む、このイベントに関する情報を格納した引数を渡します。

```js
function logKey(event) {
  console.log(`"${event.key}" を押しました。`);
}

textBox.addEventListener("keydown", logKey);
```

独立した `logKey()` 関数を定義する代わりに、無名関数を `addEventListener()` に渡すことができます。

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`"${event.key}" を押しました。`);
});
```

### アロー関数

このように無名関数を渡す場合、**アロー関数**という別の形式を使用することができます。 `function(event)` の代わりに `(event) =>` と書きます。

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`"${event.key}" を押しました。`);
});
```

引数を 1 つしか取らない関数の場合、引数を囲む括弧は省略できます。

```js-nolint
textBox.addEventListener("keydown", event => {
  console.log(`"${event.key}" を押しました。`);
});
```

最後に、関数の中身が `return` 文の 1 行だけであれば、中括弧と `return` キーワードを省略して式を暗黙的に返すこともできます。次の例では、 `Array` の {{jsxref("Array.prototype.map()", "map()")}} メソッドを使用して、元の配列のすべての値を倍にしています。

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

`map()` メソッドは配列のそれぞれの要素を順番に受け取り、指定された関数に渡します。そして、その関数が返す値を受け取り、新しい配列に追加します。

例えばこの例では、 `item => item * 2` がアロー関数に相当します。

```js
function doubleItem(item) {
  return item * 2;
}
```

同じ簡潔な構文を使用して `addEventListener` の例を書き換えることができます。

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`"${event.key}" を押しました。`),
);
```

この場合、 `console.log()` の値、 `undefined` が暗黙的にコールバック関数から返されます。

アロー関数を使用することで、コードをより短く、読み取りやすくすることができますので、使用することをお勧めします。詳しくは、 [JavaScript ガイドのアロー関数の節](/ja/docs/Web/JavaScript/Guide/Functions#アロー関数) や、[アロー関数のリファレンスページ](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) を参照してください。

> [!NOTE]
> アロー関数と通常の関数には微妙な違いがあります。それらはこの入門ガイドの範囲外であり、ここで説明したようなケースで違いが生じることはほとんどありません。詳しくは[アロー関数のリファレンスドキュメント](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を参照してください。

### アロー関数のライブサンプル

ここでは、上で説明した "keydown" の例を完全に動作するようにしています。

HTML:

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

JavaScript:

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `"${event.key}" を押しました。`;
});
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

結果です。テキストボックスに入力して出力を見てください。

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## 関数のスコープと競合

{{glossary("scope", "スコープ")}}という言葉について説明しておきましょう。関数を扱う際にはとても大切な概念です。関数を作成するとき、関数の中で定義されている変数や関数は、内部でそれぞれ独自の**スコープ**というものを持ちます。これはそれぞれが独自の小部屋に閉じ込められていて、別の関数の内部から、あるいはこの関数の外部のコードから触れられくなることを意味しています。

すべての関数の外側である最上位を、**グローバルスコープ**と呼びます。グローバルスコープで定義された値はすべて、コードのどこからでもアクセスできます。

JavaScript がこう作られているのにはいくつも理由があります。が、主な理由はセキュリティと組織化のためです。時には変数にコードのどこからでもアクセスされないようにしたい場合もあるでしょう。どこかから呼び込んだ外部スクリプトが、あなたのコードをおかしくして問題を起す場合があるかもしれません。別の場所でたまたま同じ名前の変数を使っていて、衝突していたために。これは悪意をもってわざとやっている場合や、単なる偶然の場合もあります。

例えば、ある HTML ファイルが 2 つの外部 JavaScript ファイルを呼び出しているとして、そのどちらも同じ名前の変数と関数を定義しているとします。

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
const name = "Chris";
function greeting() {
  alert(`${name} さん、こんにちは。当社へようこそ。`);
}
```

```js
// second.js
const name = "Zaptec";
function greeting() {
  alert(`当社は ${name} と呼ばれています。`);
}
```

呼び出したい関数はどちらも `greeting()` と呼ばれていますが、 `first.js` ファイルの `greeting()` 関数にしかアクセスすることができません（2 つ目は無視されます）。さらに、（`second.js`ファイルで）変数 `name` に新しい値を割り当てようとするとエラーになります。既に `const` で宣言されているので、再代入できないからです。

> [!NOTE]
> この例を [GitHub でライブ実行](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) できます（[ソースコード](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)はこちら）。

コードの一部を関数の中に閉じ込めておくことは、このような問題を避けることができ、最善の手法と考えられています。

これは動物園に似ています。ライオン、シマウマ、トラ、ペンギンはそれぞれの檻の中にいて、それぞれの檻の中のものにしか触れられません。関数のスコープと同じことです。もし彼らが他の檻の中に侵入できたら問題が起きることでしょう。良くて、知らない住人に囲まれて気まずい思いをします。寒くて水だらけのペンギンの檻に入ったライオンやトラは酷い気分になるでしょう。最悪の場合、ライオンやトラはペンギンを食べてみようとするかもしれません。

![動物園でそれぞれの生息地に囲まれた 4 匹の動物](mdn-mozilla-zoo.png)

動物園の飼育係はグローバルスコープのようなものです。彼らはすべての檻にアクセスする鍵を持っており、餌を補充したり、病気の動物の世話をしたりします。

### アクティブラーニング: スコープで遊んでみよう

スコープを示すための実際の例を見てみましょう。

1. まず [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html) の例のローカルコピーを作成します。これには `a()` と `b()` という 2 つの関数と、`x`、`y`、`z` の 3 つの変数が含まれます。これらの変数のうち 2 つは関数内で定義され、もう 1 つはグローバルスコープ内で定義されます。また `output()` という 3 番目の関数も含まれています。この関数は単一の引数を取り、ページの段落に出力します。
2. ブラウザーとテキストエディターでサンプルを開きます。
3. ブラウザーの開発者ツールで JavaScript コンソールを開きます。JavaScript コンソールで、次のコマンドを入力します。

   ```js
   output(x);
   ```

   変数 `x` の出力値が画面に表示されるはずです。

4. コンソールに次のように入力してみてください

   ```js
   output(y);
   output(z);
   ```

   どちらも、 "[ReferenceError: y is not defined](/ja/docs/Web/JavaScript/Reference/Errors/Not_defined)" の一行のエラーが返されるはずです。なぜでしょうか？ 関数スコープのため、つまり `y` と `z` は `a()` と `b()` 関数の中でロックされているので、グローバルスコープから呼び出されたときには `output()` はそれらにアクセスできません。

5. しかし、別の関数の中から呼び出されたときはどうでしょうか？ `a()` と `b()` を次のように編集してみてください。

   ```js
   function a() {
     const y = 2;
     output(y);
   }

   function b() {
     const z = 3;
     output(z);
   }
   ```

   コードを保存してブラウザーに再ロードしてから、 JavaScript コンソールから `a()` と `b()` 関数を呼び出してみてください。

   ```js
   a();
   b();
   ```

   ページに `y` と `z` の値の出力が表示されます。 `output()` 関数が他の関数の中、つまり表示される変数が定義されているのと同じスコープでそれぞれ呼び出されているので、これはうまくいきます。 `output()` 自体はグローバルスコープで定義されているので、どこからでも利用できます。

6. 今度は次のようにコードを更新してみてください。

   ```js
   function a() {
     const y = 2;
     output(x);
   }

   function b() {
     const z = 3;
     output(x);
   }
   ```

   保存してもう一度読み込み、 JavaScript コンソールでもう一度試してみてください。

   ```js
   a();
   b();
   ```

   `a()` と `b()` の両方の呼び出しは `x` の値、つまり 1 が出力されます。これは `x` がグローバル変数であり、すべてのコード内どこでも利用可能であるため、`output()` の呼び出しが `x` と同じスコープではなくてもうまく動きます。

7. 最後に、次のようにコードを更新してみてください。

   ```js
   function a() {
     const y = 2;
     output(z);
   }

   function b() {
     const z = 3;
     output(y);
   }
   ```

   保存してもう一度読み込み、 JavaScript コンソールでもう一度試してみてください。

   ```js
   a();
   b();
   ```

   今度は `a()` と `b()` の両方の呼び出しで、迷惑な "[ReferenceError: _variable name_ is not defined](/ja/docs/Web/JavaScript/Reference/Errors/Not_defined)" エラーが返されます。これは `output()` 呼び出しと、出力しようとしている変数が同じ関数のスコープにない、つまりこれらの関数呼び出しからは変数が参照できない状態だからです。

> [!NOTE]
> 同じスコープルールはループ（`for() { }` など）と条件ブロック（`if() { }` など）には適用されません。それらはとてもよく似ていますが、同じものではありません。混乱しないように注意してください。

> [!NOTE]
> [ReferenceError: "x" is not defined](/ja/docs/Web/JavaScript/Reference/Errors/Not_defined) というエラーは、遭遇する最も一般的なエラーの 1 つです。このエラーが発生し、問題の変数が定義されていると確信できる場合は、変数のスコープを確認してください。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: 関数](/ja/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions)を見てください。このテストは次の 2 つの記事でカバーしているスキルを求めていますので、テストの前にそちらを読むほうが良いかもしれません。

## まとめ

この記事では関数の背後にある基本的な概念を探り、次に実用的な方法を習得し、独自のカスタム関数を構築する手順を紹介しました。

## 関連情報

- [関数の詳細ガイド](/ja/docs/Web/JavaScript/Guide/Functions) — ここに含まれていないいくつかの高度な機能について説明します。
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [Using functions to write less code](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>_MDN カリキュラムパートナー_</sup>
  - : An interactive lesson providing a useful functions introduction.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
