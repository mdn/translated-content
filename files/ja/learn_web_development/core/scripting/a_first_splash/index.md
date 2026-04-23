---
title: JavaScript の最初の一歩
short-title: JavaScript の一歩
slug: Learn_web_development/Core/Scripting/A_first_splash
l10n:
  sourceCommit: 4fa9407fe174a12ecdc50b680560b16021300bc1
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

JavaScript の基礎知識とその活用方法について学んだところで、これで実践的なチュートリアルを追ってみましょう。簡単な JavaScript プログラムを作成する方法を具体的に見ていきましょう。ここでは、単純な「数値当てゲーム」を段階を追って作成していきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td><a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>および<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS の基礎</a>を理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>プログラマーのように考えられるようになること。</li>
          <li>JavaScript で書くことがどんなものかという体験。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> [Write your first JavaScript variable](https://scrimba.com/learn-javascript-c0v/~04?via=mdn), Scrimba<sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#外部リンクと埋め込み)</sup> を始めましょう。JavaScript の基礎を学べる、有益なインタラクティブなレッスンを提供しています。

ここでは実に明確な目標を設定したいと思います。この記事の終わりまでに JavaScript を習得することや、あなたに依頼するコードをすべて理解することは期待されていません。その代わりに、 JavaScript の機能がどのように連携して動作するのか、 JavaScript を書くことがどのような感じなのか、そのイメージをつかんでもらいたいと思います。この後の記事で、ここで示した機能をすべてさらに詳しく説明しますので、すぐに理解できなくても心配しないでください。

> [!NOTE]
> JavaScript の機能として紹介する、関数や繰り返しなどの機能は、ほとんどが他のプログラミング言語にもあります。書き方は異なりますが、概念は大体同じです。

## 「数当てゲーム」の例の紹介

この記事では、以下に示す簡単なゲームを作る方法を紹介します。

```html-nolint hidden live-sample___guess-the-number
<h1>数当てゲーム</h1>

<p>
  指定された 1 から 100 までの間のランダムな数値を選びました。10 回以内でその数値を当てられるか試してみてください。答えが「大きすぎる」か「小さすぎる」かは、その都度お知らせします。
</p>

<div class="form">
  <label for="guessField">予想を入力: </label>
  <input
    type="number"
    min="1"
    max="100"
    required
    id="guessField"
    class="guessField" />
  <input type="submit" value="予想を送信" class="guessSubmit" />
</div>

<div class="resultParas">
  <p class="guesses"></p>
  <p class="lastResult"></p>
  <p class="lowOrHi"></p>
</div>
```

```css hidden live-sample___guess-the-number
html {
  font-family: sans-serif;
}

body {
  width: 50%;
  max-width: 800px;
  min-width: 480px;
  margin: 0 auto;
}

.form input[type="number"] {
  width: 200px;
}

.lastResult {
  color: white;
  padding: 3px;
}
```

```js hidden live-sample___guess-the-number
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "前回の予想: ";
  }

  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "おめでとう！正解です！";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "はずれ！";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "予想が小さすぎます！";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "予想が大きすぎます！";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "新しいゲーム";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

{{EmbedLiveSample("guess-the-number", "100%", 300)}}

さあ、ゲームで遊んでみてください。次に進む前にゲームに慣れておきましょう。

## プログラマーのように考える

プログラミングで一番難しいのは、書き方を覚えることではなく、現実の問題にどう適用するかということです。プログラマーのように考え始める必要があります。それは一般的に、そのプログラムが何をしなければならないかという説明を見て、それを満たすためにコードのどんな機能を用いるかを考え、さらにそれを組み合わせていかなければなりません。

これには努力、プログラミング構文の経験、練習に加え、多少の想像力が必要です。たくさんコードを書けばもっと慣れていくでしょう。たったの 5 分で「プログラマー脳」を開発することは約束できませんが、このコースを通じてプログラマーのように考えるたくさんの機会を提供したいと思います。

## 初期設計要件

上司から、次のように作るゲームの概要を聞いたところを想像してみてください。

> 数字を予想する単純なゲームを作って欲しい。ランダムな 1 から 100 の数字を決めて、プレイヤーに 10 回以内に当ててもらうゲームだ。プレイヤーには予想する都度、正解か間違いかを表示する。もしプレイヤーが間違っていれば、プレイヤーが予想した数字に応じて、大きすぎるか小さすぎるかを表示する。また、プレイヤーの前回の予想がどうだったかも表示する。ゲームはプレイヤーの予想が正しかった場合、もしくは回数の上限に達した場合に終了する。ゲームが終了したら、プレイヤーはもう一度プレイ開始できるようにする。

できるだけプログラマーのように考えると、この概要から最初に行うべきことは、簡潔な実行可能な単位に分割することです。

1. 1 から 100 までの数字をランダムに一つ生成する。
2. プレイヤーの予想した回数を記録する。最初は 1 回から。
3. プレイヤーが数字が何かを予想する方法を用意する。
4. 予想が入力されたら、プレイヤーが以前の予想を見られるように、どこかに記録する。
5. 入力された数字が正しいかどうかを調べる。
6. 入力された数字が正しい場合...
   1. 正解したお祝いのメッセージを表示する。
   2. プレイヤーが次の予想を出来ないようにする。(ゲームがおかしくならないように)
   3. プレイヤーが次のゲームを始められるようなコントロールを表示する。

7. プレイヤーの予想が間違いで、予想回数の上限にはまだ達していない場合...
   1. プレイヤーが間違っていることを表示する。
   2. 次の予想を入力できるようにする。
   3. 予想回数に 1 を加算する。

8. プレイヤーの予想が間違いで、予想回数の上限に達した場合...
   1. プレイヤーにゲームオーバーであることを伝える。
   2. プレイヤーが次の予想を出来ないようにする。(ゲームがおかしくならないように)
   3. プレイヤーが次のゲームを始められるようなコントロールを表示する。

9. ゲームがもう一度始まったら、画面とロジックが完全にリセットされるようにして、1.に戻る。

さあ、先に進みましょう。この手順をどのようにコードにするのか見て、 JavaScript の機能を探求していきましょう。

## 初期設定

このチュートリアルを始めるにあたり、お使いのコードエディターで、以下のコードを新しい HTML ファイルにローカルにコピーしてください。

```html-nolint
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />

    <title>数当てゲーム</title>

    <style>
      html {
        font-family: sans-serif;
      }

      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }

      .form input[type="number"] {
        width: 200px;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>数当てゲーム</h1>

    <p>
      指定された 1 から 100 までの間のランダムな数値を選びました。10 回以内でその数値を当てられるか試してみてください。答えが「大きすぎる」か「小さすぎる」かは、その都度お知らせします。
    </p>

    <div class="form">
      <label for="guessField">予想を入力: </label>
      <input
        type="number"
        min="1"
        max="100"
        required
        id="guessField"
        class="guessField" />
      <input type="submit" value="予想を送信" class="guessSubmit" />
    </div>

    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>

    <script>
      // JavaScript をここに書きます
    </script>
  </body>
</html>
```

エディターでファイルを開いたままにし、ウェブブラウザーでも同時に開いてみてください。現時点では、単純な見出し、説明文、そして予想を入力するフォームが表示されますが、このフォームはまだ何らかの機能がありません。

HTML の末尾にある {{htmlelement("script")}} 要素の中に、すべての JavaScript コードを追加します。

```html
<script>
  // JavaScript をここに書きます
</script>
```

### データを格納する変数を追加する

始めましょう。まず、{{htmlelement("script")}} 要素の中に以下の内容を書いてみてください。

```js
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
```

上記の部分のコードは、プログラムが使用するデータを格納する変数（と定数）をセットアップしています。

変数とは基本的には値（数字やテキストの文字列など）の名前です。 `let` キーワードに続いて変数の名前を書くことで、変数を作成します。

定数も値に名前を付けるために使用しますが、変数とは異なり、一度設定した値を変更することはできません。この用途では、ユーザーインターフェイスの部品への参照を格納するために定数を使用しています。これらの要素の中のテキストは変わるかもしれませんが、それぞれの定数は常に初期化されたのと同じ HTML 要素を参照しています。定数を作成するには、キーワード `const` の後に定数の名前を続けます。

変数や定数に値を割り当てるには、等号 (`=`) に続けて与えたい値を指定します。

この例では次のことが行われます。

- 最初の変数 (`randomNumber`) には、数学的なアルゴリズムにより計算された 1 から 100 までのランダムな数字が代入されます。
- 最初の 3 つの定数は、それぞれ HTML の結果の段落への参照を格納するために作られており、後のコードで段落に値を挿入するために使用されます（これらは `<div>` 要素の中にあることに注意してください。この要素は、後でゲームを再開するときに、 3 つすべてを選択してリセットするために使用します）。

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- 次の 2 つの定数は、テキスト入力フォームおよび送信ボタンへの参照を保持し、後で予想の送信を制御する際に使用されます。

  ```html
  <label for="guessField">予想を入力: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="予想を送信" class="guessSubmit" />
  ```

- 最後の 2 つの変数は、プレイヤーが予想した回数を記録するため 1 を（プレイヤーが何回予想したかの回数を追跡します）、そしてまだ存在していない（あとで追加する）リセットボタンへの参照を保持します。

### 関数

次に、以下のコードを先ほどの JavaScript に追加してください。

```js
function checkGuess() {
  console.log("これはプレイスホルダーです");
}
```

関数は再利用可能なコードのかたまりです。何度も実行することができ、同じコードを何度も何度も書く手間が省けます。関数を定義する方法はいくつかありますが、これでひとまず、1 つの単純な方法に焦点を当てます。ここでは、`function` キーワードに続いて関数の名前、そのあとに括弧を書いて関数を定義します。そのあと、中括弧 ( `{ }` ) を続けます。中括弧の中には、その関数を呼び出すたびに実行したいすべてのコードを記述します。

関数を実行したい場合には、関数の名前に続いて括弧を書きます。

それでは試してみましょう。コードを保存してブラウザーを再読み込みしてみてください。[開発者ツールの JavaScript コンソール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)を開いてください。そして次のコードを実行します。

```js
checkGuess();
```

<kbd>Return</kbd>/<kbd>Enter</kbd> を押した後で、`これはプレイスホルダーです` という警告が表示されましたね。呼び出すと、いつでも警告が表示される関数を定義することができました。

## テキスト文字列

文字列はテキストを表すのに使用します。文字列変数はすでに見てきました。以下のコードでは `"これはプレイスホルダーです"` が文字列です。

```js
function checkGuess() {
  console.log("これはプレイスホルダーです");
}
```

文字列は二重引用符 (`"`) または一重引用符 (`'`) を用いて宣言することができますが、単一の文字列宣言の先頭と末尾には同じ形式を使用する必要があります: `"I am a placeholder `" と書くことはできません。

バックスティック(`` ` ``)を用いて文字列を宣言することもできます。このように宣言された文字列は「テンプレートリテラル」と呼ばれ、いくつかの特別なプロパティがあります。具体的な性質として、文字列の中に他にも変数や発生した式を埋め込むことができます。

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

これは文字列を連結する仕組みを提供します。

## 条件文

**条件文**を使用すると、特定の条件が真か偽かによって、コードを選択的に実行することができます。見た目は関数に少し似ていますが、仕組みは異なります。例に追加して、条件文について詳しく見ていきましょう。

`checkGuess()` 関数が単にプレースホルダーメッセージを表示するだけでは不十分だと言えます。プレイヤーの予想が正しいかどうかを調べ、それに応じて適切に対応することが求められます。

それでは、今の `checkGuess()` 関数を以下のように書き換えてみましょう。

```js
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "前回の予想:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "おめでとう！正解です！";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "はずれ！";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "予想が小さすぎます！";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "予想が大きすぎます！";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
```

たくさん書きましたね！各部分に分割して、それぞれの部分を詳細に見て何をしているか説明しましょう。

- 関数の最初の行で、`userGuess` という定数を宣言して、現在のテキストフィールドに入力された値を設定しています。そして、組み込みの `Number()` 関数を呼び出して、テキストフィールドに入力された値が間違いなく数値であることも確認しています。
- 次に、初めて条件分岐を伴うコードブロックが出てきます。条件分岐の最も単純な書き方は `if` キーワードから始まり、括弧が続き、中括弧が続きます。括弧の中には分岐する条件を書きます。条件が `true` となれば、中括弧の中にあるコードが実行されます。条件が `true` にならなければ、中括弧の次のコードまで移動します。この場合、`guessCount` 変数が `1` であるかどうか（つまり、これがプレイヤーの最初の入力かどうか）を検査します。

  ```js
  guessCount === 1;
  ```

  もしそうなら、予想の段落のテキストの内容を `前回の予想:` に変更します。違うなら、何もしません。

- 次に、テンプレートリテラルを使用して、現在の `userGuess` 変数の値を空白と共に `guesses` の段落の末尾に追加しています。
- 次の部分には、確認すべきことがいくつかあります。
  - 最初の `if (){ }` は、プレイヤーの予想が、JavaScript のコードの先頭で設定したランダムな数字を格納した `randomNumber` 変数の値と等しいかどうかを調べています。もし等しければ、プレイヤーは正解し勝ちとなるため、祝福のメッセージを素敵な緑色で表示します。さらに、数字の大小を表示する段落をクリアして、後で説明する `setGameOver()` 関数を実行します。
  - 今度は `else if (){ }` という部分で、ひとつ前の条件に続けて条件を書いています。この条件はユーザーの最後のターンかどうかを調べています。もし最後の回ならば、プログラムは祝福のメッセージの代わりにゲームオーバーメッセージとする以外は、ひとつ前の部分と同じことをします。
  - このコードに連なる最後のブロック (`else { }`) は、前の 2 つの条件がどちらも真とならなかった場合にのみ実行されます（プレイヤーは間違えてはいるものの、予想回数が残っている場合です）。この場合、プレイヤーに予想が間違っていることを伝え、その後、予想が正解より大きかったか小さかったかを調べるために別の条件テストを行い、さらにメッセージを表示して、大きかったか小さかったかをプレイヤーに伝えます。

- 最後の 3 行は、次の予想の入力を受け取るための準備です。`guessCount` 変数に 1 を加算して、プレイヤーの予想回数を数えます。(`++` はインクリメント演算子で、1 だけインクリメント(増加)します。) そして、入力フォームのテキストフィールドを空にしてからフォーカスを当て、プレイヤーの次の入力に備えます。

### イベント

ここまでで、`checkGuess()` 関数を上手に実装することができました。しかしまだ何も起きません。なぜなら、まだこの関数を呼び出していないからです。出来れば、"予想を入力"のボタンが押されたときに、この関数が呼ばれるようにしたいです。そのためにはイベントを使います。イベントとは、ボタンが押されたり、ページが読み込まれたり、ビデオを再生したりといったブラウザーで起きることで、それに反応してコードを実行させることができます。**イベントリスナー**は特定のイベントを監視し、イベントが発生したことに応答して実行される**イベントハンドラー関数**を呼び出します。

`checkGuess()` 関数の下に、以下の一文を加えましょう。

```js
guessSubmit.addEventListener("click", checkGuess);
```

ここでは、`guessSubmit` ボタンにイベントリスナーを追加しています。これは 2 つの入力値（引数と呼ばれる）を受け取るメソッドです。1 つはリスナーが待ち受けするイベントの型（この場合は `click`）を文字列で指定し、もう 1 つはイベントが発生した際に実行したい関数（この場合は `checkGuess()`）を指定します。{{domxref("EventTarget.addEventListener", "addEventListener()")}} 内で記述する際は、括弧を指定する必要がない点に注意してください。

保存して再度コードを読み直してください。今度はきっとある程度まで動くはずです。ただし、まだ問題があります。もし正解したり、予想回数の上限に達してしまった場合には、ゲームが止まってしまうでしょう。なぜなら、ゲームが終わった時に実行されるべき関数 `setGameOver()` をまだ定義していないためです。さあ、足りないコードを書いてチュートリアルの機能を完成させましょう。

## ゲームの機能の仕上げ

`setGameOver()` 関数をコードの一番下に追加して、中身を見てみましょう。これを JavaScript の一番下に追加します。

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "新しいゲーム";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
```

- 最初の 2 行は入力フォームのテキストフィールドとボタンの `disabled` プロパティを `true` に設定することで、入力できないようにしています。ゲーム終了後にユーザーがさらに予想を入力し、ゲームが予期しない動作をすることを防ぐために必要です。
- さらに次の 3 行では、新しい {{htmlelement("button")}} 要素を生成し、そのラベルに"`新しいゲーム`"という文言を設定し、HTML ページに追加しています。
- 最後の行では、上で生成したボタンがクリックされたときに `resetGame()` という関数が実行されるようにイベントリスナーを設定しています。

`resetGame()` も定義する必要があります。もう一度、以下のコードを JavaScript のいちばん下に追加してください。

```js
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

ちょっと長めのこのコードブロックは、プレイヤーが次のゲームができるように、ゲームを起動したときの状態に完全にリセットします。

具体的には、次のようにします。

- `guessCount` に 1 を設定しなおします。
- 情報の段落のテキストをすべて空にします。 `<div class="resultParas"></div>` 内のすべての段落を選択し、それぞれをループして `textContent` を `""` （空文字列）に設定します。
- リセットボタンをページから削除します。
- 入力フォームの要素を再び使用可能にして、新しい予想が入力できるようにテキストフィールドを空にしてフォーカスを設定します。
- 最終結果を表示している `lastResult` 段落の背景色を消去します。
- 同じ数字以外の数字でゲームができるように、新しいランダムな数字を再度生成します。

**ここまでで基本的に動くゲームの完成です。お疲れ様でした!**

この記事では、あと少し説明しなければならない大事な機能が残っています。既に見ているはずですが気づいたでしょうか。

## ループ（繰り返し）

以前、**ループ**というプログラミングにおいてとても重要な概念について言及しました。これは、ある条件に達するまで何度も何度もコードを繰り返し実行することができます。

これがどういうことか、基本的な例で見てみましょう。[ブラウザーの開発者ツールの JavaScript コンソール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)をもう一度開き、次のコードを張り付けて、 <kbd>Enter</kbd>/<kbd>Return</kbd> を押しましょう。

```js
const fruits = ["りんご", "バナナ", "さくらんぼ"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

どうなりましたか。 `'りんご', 'バナナ', 'さくらんぼ'` という文字列がコンソールに出力されましたね。

これはループのためです。 `const fruits = ['りんご', 'バナナ', 'さくらんぼ'];` の行は、値（この場合は文字列）の集合である配列を作成します。

それから [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用して、配列のそれぞれのアイテムを取得し、それに対して JavaScript を実行します。 `for (const fruit of fruits)`という行は次のような意味です。

1. `fruits`の最初の値を取得し、それを`fruit`という名前の変数に格納する。
2. `{}` の中括弧で囲まれたコードを実行する（この場合、`fruit` の値がコンソールにログ出力される）。
3. 次の配列の値を `fruit` に格納し、`fruits` 配列の末尾に達するまで、手順 2 を繰り返す。

さて、それでは数当てゲームに登場したループを見てみましょう。`resetGame()` 関数に以下の記述がありますね。

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

このコードは `<div class="resultParas">` に含まれるすべての段落を、 {{domxref("Document.querySelectorAll", "querySelectorAll()")}} メソッドを使用して取得しています。そしてループを使用してその一つ一つの要素の中身を消去しています。

たとえ `resetPara` が定数であっても、`textContent` のような内部プロパティは変更できることに注意してください。

## まとめ

これで数当てゲームができました。最後までついて来れましたね！作ったプログラムを動かしてみてください。[最終版はここで遊べます](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)。）もし作ったプログラムが動かなければ、[ソースコード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)と見比べてみてください。

次のレッスンも役立つかもしれません。そのレッスンでは、 JavaScript コードを記述する際に何が問題となるかを説明し、その過程で「数字当てゲーム」を参照しています。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
