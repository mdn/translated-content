---
title: JavaScript の最初の一歩
slug: Learn_web_development/Core/Scripting/A_first_splash
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

JavaScript の理論や何ができるかを学んだところで、実践的なチュートリアルをガイドすることで、単純な JavaScript プログラムを作成するプロセスがどのようなものなのかを解説します。ここでは単純な「数当てゲーム」を手順を追って作っていきます。

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

ここでは実に明確な目標を設定したいと思います。この記事の終わりまでに JavaScript を習得することや、あなたに依頼するコードをすべて理解することは期待されていません。その代わりに、 JavaScript の機能がどのように連携して動作するのか、 JavaScript を書くことがどのような感じなのか、そのイメージをつかんでもらいたいと思います。この後の記事で、ここで示した機能をすべてさらに詳しく説明しますので、すぐに理解できなくても心配しないでください。

> [!NOTE]
> JavaScript の機能として紹介する、関数や繰り返しなどの機能は、ほとんどが他のプログラミング言語にもあります。書き方は異なりますが、概念は大体同じです。

## プログラマーのように考える

プログラミングで一番難しいのは、書き方を覚えることではなく、現実の問題にどう適用するかということです。プログラマーのように考え始める必要があります。それは一般的に、そのプログラムが何をしなければならないかという説明を見て、それを満たすためにコードのどんな機能を用いるかを考え、さらにそれを組み合わせていかなければなりません。

これには努力、プログラミング構文の経験、練習に加え、多少の想像力が必要です。たくさんコードを書けばもっと慣れていくでしょう。たったの 5 分で「プログラマー脳」を開発することは約束できませんが、このコースを通じてプログラマーのように考えるたくさんの機会を提供したいと思います。

まずはそれを念頭に置いてから、この記事で作るプログラムの実例を見てみましょう。さらにその後、具体的な手順に落とし込む方法について学習しましょう。

## 例: 数当てゲーム

この記事では、以下に示す簡単なゲームを作る方法を紹介します。

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game", 900, 300)}}

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

さあ、先に進みましょう。この手順をどのようにコードにするのか見て、 JavaScript の機能を探求していきましょう。

### 初期設定

チュートリアルを開始するにあたり、自分のコンピューターに [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) ファイル（[こちらでデモが見られます](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)）をコピーしてください。テキストエディターとブラウザーの両方でそのファイルを開いてください。すると、簡単な見出しと説明の段落、予想を入力するフォームが見えるでしょう。ただし、そのフォームはまだ何もできません。

コードを入力するのはすべて HTML の一番下にある {{htmlelement("script")}} 要素の中です。

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

上記の部分のコードは、プログラムが使用するデータを格納する変数と定数をセットアップしています。

変数とは基本的には値（数字やテキストの文字列など）の名前です。 `let` キーワードに続いて変数の名前を書くことで、変数を作成します。

定数も値に名前を付けるために使用しますが、変数とは異なり、一度設定した値を変更することはできません。この用途では、ユーザーインターフェイスの部品への参照を格納するために定数を使用しています。これらの要素の中のテキストは変わるかもしれませんが、それぞれの定数は常に初期化されたのと同じ HTML 要素を参照しています。定数を作成するには、キーワード `const` の後に定数の名前を続けます。

変数や定数に値を割り当てるには、等号 (`=`) に続けて与えたい値を指定します。

この例では次のことが行われます。

- 最初の変数 (`randomNumber`) には、数学的なアルゴリズムにより計算された 1 から 100 までのランダムな数字が代入されます。
- 最初の 3 つの定数は、それぞれ HTML の結果の段落への参照を格納するために作られており、後のコードで段落に値を挿入するために使用されます（それらは `<div>` 要素の中にあることに注意してください。この要素は、後でゲームを再開するときに、 3 つすべてを選択してリセットするために使用します）。

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- 次の 2 つの定数にはテキスト入力フォームおよび送信ボタンへの参照が保持され、後で予想の送信をコントロールする際に使用されます。

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- 最後の 2 つの変数は、プレイヤーが予想した回数を記録するため 1 を（プレイヤーが何回予想したかの回数を追跡します）、そしてまだ存在していない（あとで追加する）リセットボタンへの参照を保持します。

> [!NOTE]
> 変数や定数についてはこのコースの間、[必要な情報を保管する — 変数](/ja/docs/Learn_web_development/Core/Scripting/Variables)を始めとして何度も出てきます。

### 関数

次に、以下のコードを先ほどの JavaScript に追加してください。

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

関数は再利用可能なコードのかたまりです。何度も実行することができ、同じコードを書く手間を省けます。これはとても便利です。関数の書き方 (定義の仕方) はいくつかありますが、今回は集中するために、一つの簡単な書き方だけを使用します。ここでは `function` キーワードに続いて関数の名前、括弧 ( `()` )、中括弧 ( `{ }` )が続く書き方で定義しました。中括弧の中に、関数を呼ぶたびに実行されるコードを書きます。

関数を実行したい場合には、関数の名前に続いて括弧を書きます。

それでは試してみましょう。コードを保存してブラウザーを再読み込みしてみてください。[開発者ツールの JavaScript コンソール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)を開いてください。そして次のコードを実行します。

```js
checkGuess();
```

<kbd>Return</kbd>/<kbd>Enter</kbd> を押した後で、 "I am a placeholder" という警告が表示されましたね。呼び出すと、いつでも警告が表示される関数を定義することができました。

> [!NOTE]
> 関数については後の記事、[関数 — 再利用可能なコードブロック](/ja/docs/Learn_web_development/Core/Scripting/Functions)で詳しく学びます。

### 演算子

JavaScript で演算子を使用して値の確認をしたり、計算したり、文字を結合したりなど、いろいろなことができます。

コードを保存してブラウザーを再読み込みしてみてください。まだ開いていなければ、[開発者ツールの JavaScript コンソール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)を開いて、表の「例」の列に書いてある通りに入力してみましょう。例を一つ入力したら、その都度 <kbd>Return</kbd>/<kbd>Enter</kbd> キーを押してください。結果が表示されるはずです。

まずは算術演算子の例を見てください。

| 演算子 | 名前 | 例        |
| ------ | ---- | --------- |
| `+`    | 加算 | `6 + 9`   |
| `-`    | 減算 | `20 - 15` |
| `*`    | 乗算 | `3 * 7`   |
| `/`    | 除算 | `10 / 5`  |

[複合代入演算子](/ja/docs/Web/JavaScript/Reference/Operators#代入演算子)と呼ばれるもっと短い書き方もあります。すでにある文字列に、さらに文字を追加した結果を返したい場合などに使います。例えば、

```js
let number1 = 1;
number1 += 2;
```

これは次のものと同等です。

```js
let number2 = 1;
number2 = number2 + 2;
```

true/false テスト（例えば条件内 - [下記](#条件式)参照）を実行しているとき、[比較演算子](/ja/docs/Web/JavaScript/Reference/Operators)を使用します。例えば、

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

### テキスト文字列

文字列はテキストを表すのに使用します。文字列変数はすでに見てきました。以下のコードでは `"I am a placeholder"` が文字列です。

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

文字列は二重引用符 (`"`) または一重引用符 (`'`) を用いて宣言することができますが、単一の文字列宣言の先頭と末尾には同じ形式を使用する必要があります: `"I am a placeholder `" と書くことはできません。

バックスティック(`` ` ``)を用いて文字列を宣言することもできます。このように宣言された文字列は「テンプレートリテラル」と呼ばれ、いくつかの特別なプロパティがあります。具体的な性質として、文字列の中に他にも変数や発生した式を埋め込むことができます。

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

これは文字列を連結する仕組みを提供します。

### 条件式

先ほどの `checkGuess()` 関数に話を戻します。当然ですが、ただ単にプレースホルダメッセージを出したいわけではありませんよね。この関数にはプレイヤーの予想が正しいかどうかを調べて適切に返事をすることを望みます。

それでは、今の `checkGuess()` 関数を以下のように書き換えてみましょう。

```js
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
```

たくさん書きましたね！各部分に分割して、それぞれの部分を詳細に見て何をしているか説明しましょう。

- 関数の最初の行（上のコードの 2 行目）で、`userGuess` という変数を宣言して、現在のテキストフィールドに入力された値をセットしています。そして、組み込みの `Number()` 関数を呼び出して、テキストフィールドに入力された値が間違いなく数値であることも確認しています。この変数は変更しないので、 `const` を使用して宣言します。
- 次に、初めて条件分岐を伴うコードブロックが出てきます。条件分岐は、条件の判定結果が真 (true) であるかどうかによって、次に実行するコードが変わります。見た目が少しだけ関数に似ていますが、違うものです。条件分岐の最も単純な書き方は `if` キーワードから始まり、括弧が続き、中括弧が続きます。括弧の中には分岐する条件を書きます。条件が `true` となれば、中括弧の中にあるコードが実行されます。条件が `true` にならなければ、中括弧の次のコードまで移動します。今回の条件は `guessCount` 変数が `1` であるかどうかを判定しています。（つまり、プレイヤーの初回の予想かどうかを判定しているのです。）

  ```js
  guessCount === 1;
  ```

  もしそうなら、guesses の段落のテキストの内容を `Previous guesses:` に変更します。違うなら、何もしません。

- 次に、テンプレートリテラルを使用して、現在の `userGuess` 変数の値を空白と共に `guesses` の段落の末尾に追加しています。
- 次の部分には、確認すべきことがいくつかあります。

  - 最初の `if (){ }` は、プレイヤーの予想が、JavaScript のコードの先頭で設定したランダムな数字を格納した `randomNumber` 変数の値と等しいかどうかを調べています。もし等しければ、プレイヤーは正解し勝ちとなるため、祝福のメッセージを素敵な緑色で表示します。さらに、数字の大小を表示する段落をクリアして、後で説明する `setGameOver()` 関数を実行します。
  - 今度は `else if (){ }` という部分で、ひとつ前の条件に続けて条件を書いています。この条件はユーザーの最後のターンかどうかを調べています。もし最後の回ならば、プログラムは祝福のメッセージの代わりにゲームオーバーメッセージとする以外は、ひとつ前の部分と同じことをします。
  - このコードに連なる最後のブロック (`else { }`) は、前の二つの条件がどちらも真とならなかった場合にのみ実行されます（つまり、プレイヤーは間違えてはいるものの、予想回数が残っている場合です）。この場合、プレイヤーに予想が間違っていることを伝え、その後、予想が正解より高かったか低かったかを調べるために別の条件テストを行い、さらにメッセージを表示して、高かったか低かったかをプレイヤーに伝えます。

- 最後の 3 行は、次の予想の入力を受け取るための準備です。`guessCount` 変数に 1 を加算して、プレイヤーの予想回数を数えます。(`++` はインクリメント演算子で、1 だけインクリメント(増加)します。) そして、入力フォームのテキストフィールドを空にしてからフォーカスを当て、プレイヤーの次の入力に備えます。

### イベント

ここまでで、`checkGuess()` 関数を上手に実装することができました。しかしまだ何も起きません。なぜなら、まだこの関数を呼び出していないからです。出来れば、"予想を入力"のボタンが押されたときに、この関数が呼ばれるようにしたいです。そのためにはイベントを使います。イベントとは、ボタンが押されたり、ページが読み込まれたり、ビデオを再生したりといったブラウザーで起きることで、それに反応してコードを実行させることができます。**イベントリスナー**は特定のイベントを監視し、イベントが発生したことに応答して実行するコードブロックである**イベントハンドラー**を呼び出します。

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
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
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

- `guessCount` に 1 を代入して元に戻します。
- 情報の段落のテキストをすべて空にします。 `<div class="resultParas"></div>` 内のすべての段落を選択し、それぞれをループして `textContent` を `''` （空文字列）に設定します。
- リセットボタンをページから削除します。
- 入力フォームの要素を使用可能にして、新しい予想が入力できるようにテキストフィールドを空にしてフォーカスを設定します。
- 最終結果を表示している `lastResult` 段落の背景色を消去します。
- 同じ数字以外の数字でゲームができるように、新しいランダムな数字を再度生成します。

**ここまでで (単純ではありますが) 動くゲームの完成です。お疲れ様でした!**

この記事では、あと少し説明しなければならない大事な機能が残っています。既に見ているはずですが気づいたでしょうか。

### ループ（繰り返し）

上のコードでもう少し詳しく説明しなければならないのは、 [for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループです。ループはプログラミングにおいてとても重要な概念です。ある条件に達するまで何度も何度もコードを繰り返し実行することができます。

[ブラウザーの開発者ツールの JavaScript コンソール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) をもう一度開いて次のコードを入力してみましょう。

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

どうなりましたか。 `'apples', 'bananas', 'cherries'` の文字列がコンソールに出力されましたね。

これはループのためです。 `const fruits = ['apples', 'bananas', 'cherries'];` の行は配列を作成します。このモジュールの後半で、[配列の完全ガイド](/ja/docs/Learn_web_development/Core/Scripting/Arrays)を読み終えてから作業しますが、とりあえず、配列は項目（この場合は文字列）の集合です。

`for...of` ループは配列でそれぞれの項目を取得し、それに対して JavaScript を実行する方法を提供します。 `for (const fruit of fruits)`という行は次のような意味です。

1. `fruits` の最初の項目を取得する。
2. その項目を変数 `fruit` に設定し、中括弧 `{}` の間のコードを実行する。
3. `fruits` の中の次の項目を取得し、`fruits` の末尾に達するまで 2 を繰り返す。

この場合、中括弧の中のコードは `fruit` をコンソールに書き出しています。

さて、それでは数当てゲームに登場したループを見てみましょう。`resetGame()` 関数に以下の記述がありますね。

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

このコードは `<div class="resultParas">` に含まれるすべての段落を、 {{domxref("Document.querySelectorAll", "querySelectorAll()")}} メソッドを使用して取得しています。そしてループを使用してその一つ一つの要素の中身を消去しています。

たとえ `resetPara` が定数であっても、`textContent` のような内部プロパティは変更できることに注意してください。

### オブジェクトについての簡単な説明

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

この参照を得るため、{{domxref("document")}} オブジェクトの{{domxref("document.querySelector", "querySelector()")}} メソッドを使用しています。`querySelector()` はある情報 (必要な要素を選択する [CSS セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)) を受け取ります。

`guessField` に {{htmlelement("input")}} 要素の参照が得られたので、これでたくさんのプロパティ（基本的にはオブジェクトの内部に保持されている変数のことですが、中には値を変えられないものもあります）とメソッド（基本的にはオブジェクトの内部に保持されている関数のこと）にアクセスできるようになりました。ようやく input 要素のメソッドの一つである `focus()` メソッドを使ってテキストフィールドにフォーカスを当てられます。

```js
guessField.focus();
```

入力フォームの要素の参照を含まない変数に対しては、`focus()` は使用できません。例えば、`guesses` 変数には {{htmlelement("p")}} 要素への参照が入っていますし、`guessCount` には数値が入っています。

### ブラウザーのオブジェクトで遊ぼう

少しブラウザーが持っているオブジェクトで遊んでみましょう。

1. まずブラウザーでプログラムを開いてください
2. 次に[開発者ツール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)を開き、 JavaScript コンソールのタブが開いたのを確認します
3. `guessField` と入力してみてください。するとコンソールに {{htmlelement("input")}} 要素を含む変数が表示されます。また、気づいたと思いますが、コンソールは実行中の環境にある変数名を含んだオブジェクト名を自動的に補完しました!
4. さらに下のように入力してみてください。

   ```js
   guessField.value = 2;
   ```

   `value` プロパティは今のテキストフィールドに入力された値を表しています。コマンドを入力したら、テキストフィールドの値が変わりましたね！

5. さらに続けて `guesses` と入力して <kbd>Enter</kbd> （またはキーボードによっては <kbd>Return</kbd>）を押してみてください。コンソールには {{htmlelement("p")}} 要素を含む変数が表示されますね。
6. そして次のコードを入力します。

   ```js
   guesses.value;
   ```

   コンソールには `undefined` という文字が返ってきましたね。段落には `value` プロパティがないからです。

7. 段落内のテキストを変えたい場合には、 {{domxref("Node.textContent", "textContent")}} プロパティを使用する必要があります。次のようにしてみてください。

   ```js
   guesses.textContent = "Where is my paragraph?";
   ```

8. ちょっと遊んでみましょう。下のコードを一つずつ入力してみてください。

   ```js
   guesses.style.backgroundColor = "yellow";
   guesses.style.fontSize = "200%";
   guesses.style.padding = "10px";
   guesses.style.boxShadow = "3px 3px 6px black";
   ```

   ページ内に存在するすべての要素は `style` プロパティを持っていて、そのオブジェクトを介して CSS のインラインスタイルで要素に適用されるすべてのプロパティにアクセスすることができます。これを使うことで、JavaScript から動的に要素の CSS のスタイルを設定できるのです。

## まとめ

これで数当てゲームができました。最後までついて来れましたね！作ったプログラムを動かしてみてください 。（最後のプログラムは[こちらでも遊べます](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)。）もし作ったプログラムが動かなければ、[ソースコード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)と見比べてみてください。

次のレッスンも役立つかもしれません。そのレッスンでは、 JavaScript コードを記述する際に何が問題となるかを説明し、その過程で「数字当てゲーム」を参照しています。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
