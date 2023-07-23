---
title: JavaScriptへの最初のダイブ
slug: Learn/JavaScript/First_steps/A_first_splash
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

JavaScript の理論、そしてそれを使ってできることについて学んだところで、完全に実用的なチュートリアルを通じて、JavaScript の基本的な機能についての短期集中コースをお見せします。ここでは、簡単な「数字を当てる」ゲームをステップバイステップで構築します。

| 前提条件: | 基本的なコンピューターの知識および HTML と CSS への理解、JavaScript とは何かを知っている。 |
| --------- | ------------------------------------------------------------------------------------------ |
| 目的:     | 簡単な JavaScript を書いてみて、JavaScript のプログラムを書くために必要な知識を会得する。  |

ここでは、JavaScript (とその他のプログラミング言語) がどのように動くのかという高度なコンセプトを紹介したいので、一度ですべての詳細を理解する必要はありません。詳細については続く記事にてご紹介しますので！

> **メモ:** JavaScript の機能として紹介する、関数や繰り返しなどの機能は、ほとんどが他のプログラミング言語にもあります。書き方は異なりますが、コンセプトは大体同じです。

## プログラマーのように考える

プログラミングで一番難しいのは、書き方を覚えることではなく、現実の問題にどう適用するかということです。プログラマーのように考え始める必要があります — それは一般的に、そのプログラムが何をしなければならないかという説明を見て、それを満たすためにコードのどんな機能を用いるかを考え、さらにそれを組み合わせていかなければなりません。

これには努力・プログラミング文法の経験・練習に加え、少しの想像力が必要です。たくさんコードを書けばもっと慣れていくでしょう。たったの 5 分で「プログラマー脳」を開発することは約束できませんが、このコースを通じてプログラマーのように考えるたくさんの機会を提供したいと思います。

まずはそれを念頭に置いてから、この記事で作るプログラムの実例を見てみましょう。さらにその後、具体的な手順に落とし込む方法について学習しましょう。

## 例: 数字当てゲーム

この記事では、以下に示す簡単なゲームを作る方法を紹介します。

```html hidden
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>数字当てゲーム</title>
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

        .lastResult {
            color: white;
            padding: 3px;
        }
    </style>
</head>

<body>
    <h1>数字当てゲーム</h1>
    <p>1 から 100 までの数字を当ててみて！10 回以内に当てられるでしょうか。選んだ数字が大きいか小さいかを表示します。</p>
    <div class="form"> <label for="guessField">予想を入力してください: </label><input type="text" id="guessField" class="guessField"> <input type="submit" value="予想を入力" class="guessSubmit"> </div>
    <div class="resultParas">
        <p class="guesses"></p>
        <p class="lastResult"></p>
        <p class="lowOrHi"></p>
    </div>
</body>
<script>
    // JavaScript はここから
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');
    const guessSubmit = document.querySelector('.guessSubmit');
    const guessField = document.querySelector('.guessField');
    let guessCount = 1;
    let resetButton;
    function checkGuess() {
      let userGuess = Number(guessField.value);
      if (guessCount === 1) {
        guesses.textContent = '前回の予想: ';
      }

      guesses.textContent += userGuess + ' ';

      if (userGuess === randomNumber) {
        lastResult.textContent = 'おめでとう! 正解です!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if (guessCount === 10) {
        lastResult.textContent = '!!!ゲームオーバー!!!';
        lowOrHi.textContent = '';
        setGameOver();
      } else {
        lastResult.textContent = '間違いです!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
          lowOrHi.textContent='今の予想は小さすぎです!もっと大きな数字です。' ;
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = '今の予想は大きすぎです!もっと小さな数字です。';
        }
      }

      guessCount++;
      guessField.value = '';
    }

    guessSubmit.addEventListener('click', checkGuess);

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Start new game';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
      guessCount = 1;
      const resetParas = document.querySelectorAll('.resultParas p');
      for(let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
      }

      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value = '';
      guessField.focus();
      lastResult.style.backgroundColor = 'white';
      randomNumber = Math.floor(Math.random() * 100) + 1;
    }
</script>

</body>
</html>
```

{{ EmbedLiveSample('Top_hidden_code', '100%', 320, "", "", "hide-codepen-jsfiddle") }}

さあ、ゲームで遊んでみてください。次に進む前にゲームに慣れておきましょう。

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

さあ、先に進みましょう。この手順をどのようにコードにするのか見て、JavaScript の機能を探求していきましょう。

### まず初めに

チュートリアルを開始するにあたり、自分のコンピューターに [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) ファイル ([こちらでデモが見られます](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)) をコピーしてください。テキストエディターとブラウザーの両方でそのファイルを開いてください。すると、簡単な見出しと説明の段落、予想を入力するフォームが見えるでしょう。ただし、そのフォームはまだ何もできません。

コードを入力するのはすべて HTML の一番下にある {{htmlelement("script")}} 要素の中です。

```html
<script>
  // JavaScript をここに書きます
</script>
```

### データを保持する変数を追加する

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

上記のコードはプログラムが使用するデータを保持する変数と定数をセットアップしています。変数とは基本的には値 (数字や文字など) の入れ物です。 `let` (か `var`) キーワードに続いて変数の名前を書くことで、変数を作成します (これらのキーワードの違いは[以降の記事](/ja/docs/Learn/JavaScript/First_steps/Variables#The_difference_between_var_and_let)で見ます) 。定数は変更しない値を保持するのに、 `const` キーワードといっしょに使います。この場合では、定数をユーザーインターフェイスのパーツへの参照を保存するのに使っていて、一部の内部のテキストは変わるかも知れませんが、参照される HTML 要素は同じままです。

等号記号 ( `=` ) に続いて、与えたい値を書いて、変数や定数に値を代入できます。

この例では:

- 最初の変数 ( `randomNumber` ) には数学的なアルゴリズムにより計算された 1 から 100 までのランダムな数字が代入されます。
- 続く 3 つの変数 ( `guesses`、`lastResult`、`lowOrHi` ) には、以下に示す HTML の段落の場所がそれぞれに保持されます。後ほど段落に値を追加するために使用します。 (すべて`<div>` 要素内にあり、後にゲーム再開時にリセットするのにすべてを選択するのに使われるのに注意してください):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- 次の 2 つの定数にはテキスト入力フォームおよび送信ボタンへの参照が保持され、後で予想の送信をコントロールする際に使用されます。

  ```html
  <label for="guessField">予想を入力してください: </label
  ><input type="text" id="guessField" class="guessField" />
  <input type="submit" value="予想を投稿" class="guessSubmit" />
  ```

- 最後の 2 つの変数はプレイヤーが予想した回数を記録するため 1 を (プレイヤーが何回予想したかの回数を追跡します) 、そしてまだ存在していない(あとで追加する)リセットボタンへの参照を保持します。

> **メモ:** 変数や定数についてはこのコースの間に、[次の記事](/ja/docs/user:chrisdavidmills/variables)を始めとして何度も出てきます。

### 関数

次に、以下のコードを先ほどの JavaScript に追加してください。

```js
function checkGuess() {
  alert("ここはプレースホルダです");
}
```

関数は再利用可能なコードのかたまりです。何度も実行することができ、同じコードを書く手間を省けます。これはとても便利です。関数の書き方 (定義の仕方) はいくつかありますが、今回は集中するために、一つの簡単な書き方だけを使用します。ここでは `function` キーワードに続いて関数の名前、括弧 ( `()` )、中括弧 ( `{ }` )が続く書き方で定義しました。中括弧の中に、関数を呼ぶたびに実行されるコードを書きます。

関数を実行したい場合には、関数の名前に続いて括弧を書きます。

それでは試してみましょう。コードを保存してブラウザーを再読み込みしてみてください。[開発者ツールの JavaScript コンソール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)を開いてください。そして次のコードを実行します。

```js
checkGuess();
```

<kbd>Return</kbd>/<kbd>Enter</kbd> を押した後で、"ここはプレースホルダです"という警告が表示されましたね。呼び出すと、いつでも警告が表示される関数を定義することができました。

> **メモ:** 関数についても[このコースの後の方で](/ja/docs/Learn/JavaScript/Building_blocks/Functions)詳しく学びます。

### 演算子

JavaScript で演算子を使用して値の確認をしたり、計算したり、文字を結合したりなど、いろいろなことができます。

コードを保存してブラウザーを再読み込みしてみてください。まだ開いていなければ、[開発者ツールの JavaScript コンソール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)を開いて、表の「例」の列に書いてある通りに入力してみましょう。例を一つ入力したら、その都度 <kbd>Return</kbd>/<kbd>Enter</kbd> キーを押してください。結果が表示されるはずです。

まずは算術演算子の例を見てください。

| 演算子 | 名前 | 例        |
| ------ | ---- | --------- |
| `+`    | 加算 | `6 + 9`   |
| `-`    | 減算 | `20 - 15` |
| `*`    | 乗算 | `3 * 7`   |
| `/`    | 除算 | `10 / 5`  |

また、 `+` 演算子は 2 つの文字を繋げて一つにするときにも使います。(プログラミングでは文字列を*結合*すると言います。) 下の例も試してみてください。

```js
let name = "ビンゴさん";
name;
let hello = "が、こんにちは！と言っています。";
hello;
let greeting = name + hello;
greeting;
```

累算[代入演算子](/ja/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)と呼ばれるもっと短い書き方もあります。すでにある文字列に、さらに文字を追加した結果を返したい場合などに使います。例えば、

```js
name += "が、こんにちは！と言っています。";
```

のように書いたとき、次と同じです:

```js
name = name + "が、こんにちは！と言っています。";
```

true/false テスト（例えば条件内 - [below](#conditionals)参照）を実行しているとき、[比較演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)を使用します。例えば：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">演算子</th>
      <th scope="col">名前</th>
      <th scope="col">例</th>
    </tr>
    <tr>
      <td><code>===</code></td>
      <td>厳密に等しい (全く同じかどうか)</td>
      <td>
        <pre class="brush: js">
5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
2 === '2' // false; number versus string
</pre
        >
      </td>
    </tr>
    <tr>
      <td><code>!==</code></td>
      <td>等しくない (違うかどうか)</td>
      <td>
        <pre class="brush: js">
5 !== 2 + 4 // true
'Chris' !== 'Bob' // true
5 !== 2 + 3 // false
2 !== '2' // true; number versus string
</pre
        >
      </td>
    </tr>
    <tr>
      <td><code>&#x3C;</code></td>
      <td>小なり</td>
      <td>
        <pre class="brush: js">
6 &#x3C; 10 // true
20 &#x3C; 10 // false</pre
        >
      </td>
    </tr>
    <tr>
      <td><code>></code></td>
      <td>大なり</td>
      <td>
        <pre class="brush: js">
6 > 10 // false
20 > 10 // true</pre
        >
      </td>
    </tr>
  </thead>
</table>

### 条件式

先ほどの `checkGuess()` 関数に話を戻します。当然ですが、ただ単にプレースホルダメッセージを出したいわけではありませんよね。この関数にはプレイヤーの予想が正しいかどうかを調べて適切に返事をすることを望みます。

それでは、今の `checkGuess()` 関数を以下のように書き換えてみましょう。

```js
function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "前回の予想: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "おめでとう! 正解です!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!ゲームオーバー!!!";
    setGameOver();
  } else {
    lastResult.textContent = "間違いです!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "今の予想は小さすぎです!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "今の予想は大きすぎです!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
```

たくさん書きましたね！各部分に分割して、それぞれの部分を詳細に見て何をしているか説明しましょう。

- 関数の最初の行 (上のコードの 2 行目) で、`userGuess` という変数を宣言して、現在のテキストフィールドに入力された値をセットしています。そして、組み込みの `Number()` 関数を呼び出して、テキストフィールドに入力された値が間違いなく数値であることも確認しています。
- 次に、初めて条件分岐を伴うコードブロックが出てきます (3 行目～ 5 行目)。条件分岐は、条件の判定結果が真 (true) であるかどうかによって、次に実行するコードが変わります。見た目が少しだけ関数に似ていますが、違うものです。条件分岐の最も単純な書き方は `if` キーワードから始まり、括弧が続き、中括弧が続きます。括弧の中には分岐する条件を書きます。条件が `true` となれば、中括弧の中にあるコードが実行されます。条件が `true` にならなければ、中括弧の次のコードまで移動します。今回の条件は `guessCount` 変数が `1` であるかどうかを判定しています。(つまり、プレイヤーの初回の予想かどうかを判定しているのです。)

  ```js
  guessCount === 1;
  ```

  もしそうなら、`guesses` 段落 ({{htmlelement("p")}}要素) の内容を "`前回の予想:`" に変更します。違うなら、何もしません。

- 6 行目では、`guesses` 段落の最後にスペースを付けて、現在の `userGuess` 変数の値を追加しています。なので、予想が表示されるときにはスペースで区切られて表示されます。
- 次の部分 (8 行目～ 24 行目) には、確認すべきことがいくつかあります。

  - 最初の `if(){ }` は、プレイヤーの予想が、JavaScript のコードの先頭で設定したランダムな数字を格納した `randomNumber` 変数の値と等しいかどうかを調べています。もし等しければ、プレイヤーは正解し勝ちとなるため、祝福のメッセージを素敵な緑色で表示します。さらに、数字の大小を表示する段落をクリアして、後で説明する `setGameOver()` 関数を実行します。
  - 今度は `else if(){ }` という部分で、ひとつ前の条件に続けて条件を書いています。この条件はユーザの最後のターンかどうかを調べています。もし最後の回ならば、プログラムは祝福のメッセージの代わりにゲームオーバーメッセージとする以外は、ひとつ前の部分と同じことをします。
  - このコードに連なる最後のブロック (`else { }`) は、前の二つの条件がどちらも真とならなかった場合にのみ実行されます。(つまり、プレイヤーは間違えてはいるものの、予想回数が残っている場合です。) この場合、プレイヤーに予想が間違っていることを伝え、入力された数字が大きいか小さいかを伝えるため、さらなる条件の確認を行います。

- 最後の 3 行 (26 行目～ 28 行目) は、次の予想の入力を受け取るための準備です。`guessCount` 変数に 1 を加算して、プレイヤーの予想回数を数えます。(`++` はインクリメント演算子で、1 だけインクリメント(増加)します。) そして、入力フォームのテキストフィールドを空にしてからフォーカスを当て、プレイヤーの次の入力に備えます。

### イベント

ここまでで、`checkGuess()` 関数を上手に実装することができました。しかしまだ何も起きません。なぜなら、まだこの関数を呼び出していないからです。出来れば、"予想を入力"のボタンが押されたときに、この関数が呼ばれるようにしたいです。そのためにはイベントを使います。イベントとは、ボタンが押されたり、ページが読み込まれたり、ビデオを再生したりといったブラウザーで起きることで、それに反応してコードを実行させることができます。イベントが発生したことを聞き取る構成が**イベントリスナー**で、発生したイベントに反応して実行されるコードブロックが**イベントハンドラー**です。

`checkGuess()` 関数の下に、以下の一文を加えましょう。

```js
guessSubmit.addEventListener("click", checkGuess);
```

`guessSubmit` ボタンに対して、イベントリスナーを追加しました。これは発生したことを知りたいイベントの種類 (この場合は `click`)と、イベントが発生した場合に実行するコード (この場合は `checkGuess()`) の 2 つの入力値 (*引数*と言います) を取る関数です。({{domxref("EventTarget.addEventListener", "addEventListener()")}}の中では括弧を書く必要はありません。)

保存して再度コードを読み直してください。今度はきっとある程度まで動くはずです。ただし、まだ問題があります。もし正解したり、予想回数の上限に達してしまった場合には、ゲームが止まってしまうでしょう。なぜなら、ゲームが終わった時に実行されるべき関数 `setGameOver()` をまだ定義していないためです。さあ、足りないコードを書いてチュートリアルの機能を完成させましょう。

### ゲームの機能を完成させる

`setGameOver()` 関数をコードの一番下に追加して、中身を見てみましょう。これを JavaScript の一番下に追加します。

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "新しいゲームを始める";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}
```

- 最初の 2 行は入力フォームのテキストフィールドとボタンの `disabled` プロパティを `true` に設定することで、入力できないようにしています。ゲーム終了後にユーザーがさらに予想を入力し、ゲームが予期しない動作をすることを防ぐために必要です。
- さらに次の 3 行では、新しい {{htmlelement("button")}} 要素を生成し、そのラベルに"`新しいゲームを始める`"という文言を設定し、HTML ページに追加しています。
- 最後の行では、上で生成したボタンがクリックされたときに `resetGame()` という関数が実行されるようにイベントリスナーを設定しています。

この関数も定義しなければなりませんね！もう一度、以下のコードを JavaScript のいちばん下に追加してください。

```js
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
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

- `guessCount` に 1 を代入して元に戻します。
- 情報段落のすべてを消去します。
- リセットボタンをページから削除します。
- 入力フォームの要素を使用可能にして、新しい予想が入力できるようにテキストフィールドを空にしてフォーカスを設定します。
- 最終結果を表示している `lastResult` 段落の背景色を消去します。
- 同じ数字以外の数字でゲームができるように、新しいランダムな数字を再度生成します。

**ここまでで (単純ではありますが) 動くゲームの完成です。お疲れ様でした!**

この記事では、あと少し説明しなければならない大事な機能が残っています。既に見ているはずですが気づいたでしょうか。

### ループ (繰り返し)

上のコードでもう少し詳しく説明しなければならないのは、[for](/ja/docs/Web/JavaScript/Reference/Statements/for) ループです。ループはプログラミングにおいてとても重要な概念です。ある条件に達するまで何度も何度もコードを繰り返し実行することができます。

[ブラウザーの開発者ツールの JavaScript コンソール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools) をもう一度開いて次のコードを入力してみましょう。

```js
for (let i = 1; i < 21; i++) {
  console.log(i);
}
```

どうでしょうか。`1` から `20` の数字がコンソールに出力されましたね。これが繰り返しです。`for` ループには 3 つの入力値 (引数) が必要です。

1. **初期値**: 上の例では、`i` を 1 からはじめましたが、どんな数字でもかまいません。さらに言えば、`i` という名前でなくともかまいません。ただし、ループでは短くて覚えやすいため、`i` という変数の名前がよく使われることを覚えておいてください。
2. **条件**: 上の例では `i < 21` をループが継続する条件としました。つまりループは `i` が 21 未満でなくなるまで継続します。`i` が 21 になったらループの実行が終了します。
3. **増分**: 上の例では増分を `i++` と指定しています。つまり「`i` に 1 を足し」ます。ループは `i` が 21 になるまで(それは 2.の継続条件で説明しましたね) 、`i` の取りうる値について、それぞれ一度ずつ実行されます。今回の例では繰り返しのコードが実行される度に `i` の値を{{domxref("Console.log", "console.log()")}}を使用してコンソールに出力しています。

さて、それでは数字当てゲームに登場したループを見てみましょう。`resetGame()` 関数に以下の記述がありますね。

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (let i = 0; i < resetParas.length; i++) {
  resetParas[i].textContent = "";
}
```

このコードは `<div class="resultParas">` に含まれるすべての {{htmlelement("p")}} 要素を {{domxref("Document.querySelectorAll", "querySelectorAll()")}} というメソッドを使用して取得しています。そしてループを使用してその一つ一つの要素の中身を消去しています。

### オブジェクトについて(簡単に)

オブジェクトについて説明する前に、プログラムに対して最後のちょっとした改良を加えてみましょう。JavaScript の書き出しの方にある `let resetButton;` のすぐ下に、以下の行を追記してファイルを保存します。

```js
guessField.focus();
```

この行はページが読み込まれるとすぐ、 {{domxref("HTMLElement.focus", "focus()")}} メソッドを呼び出して、入力フォームの {{htmlelement("input")}} 要素に対して自動的にカーソル (フォーカス) を設定しています。つまり、ページが開いたと同時に、入力フォームを最初にクリックすることなくプレイヤーが予想を入力できるようにしているのです。本当にちょっとしたことですが、ユーザーにゲームで遊ぶためには何をすればよいかの視覚的なヒントを教えてあげることで、使い勝手が向上します。

もう少し詳細に何が起こっているのか分析しましょう。JavaScript では、すべてのものはオブジェクトです。オブジェクトというのは 1 か所に関連する機能をまとめたものです。自分でオブジェクトを作ることもできますが、高度なことなので、このコースの大分後まで出てきません。今は簡単に、これを使うと多くの便利なことができるようになる、ブラウザーに含まれる組み込みオブジェクトについて説明します。

この具体的なケースでは、HTML のテキスト入力フィールドを参照するために、最初に `guessField` 変数を作成しました。以下の行は最上部のあたりの変数定義で見つかります、

```js
const guessField = document.querySelector(".guessField");
```

この参照を得るため、{{domxref("document")}} オブジェクトの{{domxref("document.querySelector", "querySelector()")}} メソッドを使用しています。`querySelector()` はある情報 (必要な要素を選択する [CSS セレクタ](/ja/docs/Learn/CSS/Introduction_to_CSS/Selectors)) を受け取ります。

`guessField` に {{htmlelement("input")}} 要素の参照が得られたので、これでたくさんのプロパティ (基本的にはオブジェクトの内部に保持されている変数のことですが、中には値を変えられないものもあります) とメソッド (基本的にはオブジェクトの内部に保持されている関数のこと) にアクセスできるようになりました。ようやく {{htmlelement("input")}} 要素のメソッドの一つである `focus()` メソッドを使ってテキストフィールドにフォーカスを当てられます。

```js
guessField.focus();
```

入力フォームの要素の参照を含まない変数に対しては、`focus()` は使用できません。例えば、`guesses` 変数には {{htmlelement("p")}} 要素への参照が入っていますし、`guessCount` には数値が入っています。

### ブラウザーのオブジェクトで遊ぼう

少しブラウザーが持っているオブジェクトで遊んでみましょう。

1. まずブラウザーでプログラムを開いてください
2. 次に[開発者ツール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)を開き、JavaScript コンソールのタブが開いたのを確認します
3. `guessField` と入力してみてください。するとコンソールに {{htmlelement("input")}} 要素を含む変数が表示されます。また、気づいたと思いますが、コンソールは実行中の環境にある変数名を含んだオブジェクト名を自動的に補完しました!
4. さらに下のように入力してみてください

   ```js
   guessField.value = "Hello";
   ```

   `value` プロパティは今のテキストフィールドに入力された値を表しています。コマンドを入力したら、テキストフィールドの値が変わりましたね！

5. さらに続けて `guesses` と入力して&#x20;

   <kbd>Return</kbd>

   /

   <kbd>Enter</kbd>

   &#x20;を押します。{{htmlelement("p")}} 要素を含む変数がコンソールに表示されますね。

6. そして次のコードを入力します

   ```js
   guesses.value;
   ```

   コンソールには `undefined` (未定義) という文字が返ってきましたね。`value` というプロパティは {{htmlelement("p")}} 要素にはないためです。

7. パラグラフ内のテキストを変えたい場合には、{{domxref("Node.textContent", "textContent")}} プロパティを使用する必要があります。こうしてみます

   ```js
   guesses.textContent = "Where is my paragraph?";
   ```

8. ちょっと遊んでみましょう。下のコードをひとつづつ入力してみてください。

   ```js
   guesses.style.backgroundColor = "yellow";
   guesses.style.fontSize = "200%";
   guesses.style.padding = "10px";
   guesses.style.boxShadow = "3px 3px 6px black";
   ```

   ページ内に存在するすべての要素は `style` プロパティを持っていて、そのオブジェクトを介して CSS のインラインスタイルで要素に適用されるすべてのプロパティにアクセスすることができます。これを使うことで、JavaScript から動的に要素の CSS のスタイルを設定できるのです。

## ここで一息

これで数字当てゲームができました。最後までついて来れましたね！作ったプログラムを動かしてみてください 。(最後のプログラムは[こちらでも遊べます](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)。) もし作ったプログラムが動かなければ、[ソースコード](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)と見比べてみてください。

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}
