---
title: 何が間違っている? JavaScript のトラブルシューティング
slug: Learn/JavaScript/First_steps/What_went_wrong
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}

前の記事の「数字当てゲーム」を作っていて、動かないことはありませんでしたか？恐れることはありません。この記事では、そんな心配をしなくて済むように、JavaScript のエラーを見つけて直す方法を伝授します。

| 前提条件: | 基本的なコンピューターリテラシー、HTML および CSS の基本的な理解、JavaScript についての理解。 |
| --------- | --------------------------------------------------------------------------------------------- |
| 目的:     | コード内のシンプルな問題を修正し始める能力と自信を得る。                                      |

## エラーの種類

コードに誤りがある場合、一般的に以下の 2 つのうち、どちらかの誤りであることがよくあります。

- **構文エラー**: プログラムが全く動かなかったり、途中で止まったりするような記述エラーで、通常はエラーメッセージが出力されます。正しいツールに慣れて、エラーメッセージの内容がわかるのなら、さほど無理なく修正が可能です。
- **論理エラー**: 書き方は正しくても、コードが意図した通りに動ないエラーです。つまりプログラムは動くのですが、間違った結果を返します。たいていの場合に、問題となる箇所に直接のエラーメッセージが出ることがないため、構文エラーよりも直すのが難しいことが多いです。

まあ、こんなに単純ではありません。もっと深く追及していくと違う種類のエラーも出てくることでしょう。しかし、見習いのうちは上の分類で十分です。上記の 2 つの種類のエラーについて見ていきましょう。

## 誤りの例

始めるにあたり、数字当て (今回は当たらない) ゲームに戻りましょう。わざとエラーになるバージョンを見ていきます。Github に行って [number-game-errors.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) をローカルにコピーしてください ([ライブ実行はこちら](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)を見てください)。

1. 始めるには、コピーしたファイルをお好みのテキストエディターとブラウザーで開きます。
2. ゲームで遊んでみてください。気づきましたか。"予想を入力" ボタンを押しても動きません！

> **メモ:** もしかしたら、あなたにも直したいと思っているバージョンがあるかもしれませんね。ですが、まずはこちらで用意したバージョンを直してみてください。そうすれば、ここで教えるテクニックが身につきます。それから、あなた自身のプログラムに戻って直してみてください。

それでは、開発者コンソールで構文エラーがあるか調べてみましょう。それからエラーを修正します。どうやって修正すればいいかは今から教えます。

## 構文エラーを修正する

以前に[開発者ツールの JavaScript コンソール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)で、簡単なコマンドを入力してもらったことがあったと思います (思い出せなければ、リンクを見て開き方を調べてください)。コンソールの何が便利かといえば、ブラウザーの JavaScript エンジンに読み込ませようとしている JavaScript コードに構文エラーがあれば、すべて教えてくれるのです。さあ、バグを潰していきましょう。

1. `number-game-errors.html` ファイルを開いているタブを選択して、JavaScript コンソールを開いてください。以下のメッセージが表示されていますね。![](not-a-function.png)
2. これは分かりやすいエラーです。ブラウザーからもいくつか情報が出ています (上のスクリーンショットは FireFox のものですが、他のブラウザーでも同様の情報が表示されるでしょう)。左から順に説明します。

   - 赤色の 「x」 ボタンはエラーがあることを示しています。
   - 「TypeError: guessSubmit.addeventListener is not a function」というエラーメッセージが、何が問題かを示しています。
   - 「Learn More」 のリンクがエラー内容についてもっと詳細に説明する MDN のページを指しています。
   - JavaScript のファイルの名前が出ています。このリンクをクリックすると、開発者ツールのデバッガータブで問題のあるファイルが開きます。ハイライトされているエラーの箇所が見えるでしょう。
   - エラーがある行の行番号と、最初の文字が始まる番号が出ています。上の例では 86 行目の 3 文字目です。

3. テキストエディターで 86 行目を見てみましょう。

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. エラーでは、"guessSubmit.addeventListener is not a function" とあり、これは JavaScript インタープリターに呼び出している関数が認識されないという意味です。しばしば、このエラーメッセージは、スペルミスをしたということです。もし正しい綴りがわからなければ、MDN のサイトで使用している機能を調べてみてください。きっと見つかります。いつもはお好みの検索エンジンで「mdn _機能の名前_」と検索してみるのがよいでしょう。今回は代わりに [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) のリンクを張っておきます。
5. ページによると、関数の名前を間違えたみたいですね！JavaScript は大文字・小文字を区別しますので、ちょっとでも違うとエラーの原因になることを覚えておきましょう。それでは `addeventListener` を `addEventListener` に修正してエラーを直しましょう。

> **メモ:** [TypeError: "x" is not a function](/ja/docs/Web/JavaScript/Reference/Errors/Not_a_function) のリファレンスページで、このエラーに関する詳細な説明が見られます。

### 構文エラーその 2

1. ファイルを保存してブラウザーを更新すると、エラーが消えています。
2. 予想を入力して、予想を入力ボタンを押してみると、...別のエラーが起きています！![](variable-is-null.png)
3. 今回のエラーを見ると、 78 行目で"TypeError: lowOrHi is null"が起きています。

   > **メモ:** [`Null`](/ja/docs/Glossary/Null) は「何もない」ことや「値がない」ことを表す特別な値です。つまり `lowOrHi` が宣言されて初期化されているけれど、意味のある値ではない — つまり型も値もないということです。

   > **メモ:** このエラーは関数内部 (`checkGuess() { ... }` ブロックの中) で発生したため、ページを読み込んだだけでは出てきませんでした。後に続く[関数の記事](/ja/docs/Learn/JavaScript/Building_blocks/Functions)を読み進めていけば分かりますが、内側の関数のスコープは外側の関数のスコープとは異なります。今回のケースでは、 86 行目の `checkGuess()` 関数が実行されるまで実行されず、エラーも発生していませんでした。

4. 78 行目を見てください。以下のコードが書かれています。

   ```js
   lowOrHi.textContent = "今の予想は大きすぎです!";
   ```

5. この行は `lowOrHi` 定数の `textContent` プロパティに文字列を設定しようとしていますが、`lowOrHi` 定数に適切な値が設定されていないため上手く動きません。`lowOrHi` が使用されている箇所をコードのほかの部分から探してみましょう。最初に見つかるのは 48 行目でしょう。

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. ここでは、HTML の要素を参照する変数を作ろうとしています。この行の後ろで、値が `null` になっているか確認するため以下のコードを直後の 49 行目に追加します。

   ```js
   console.log(lowOrHi);
   ```

   > **メモ:** [`console.log()`](/ja/docs/Web/API/Console/log) は値をコンソールに出力する、デバッグするときにとても便利な関数です。これで 48 行目で `lowOrHi` にセットしたはずの値がコンソールに出力されるでしょう。

7. ファイルを保存して再度ブラウザーで読み込みます。そして `console.log()` の結果をコンソールで見てみましょう。 ![](console-log-output.png)わかりましたね。`lowOrHi` の値は `null` でした。これで問題が 48 行目にあることがわかりました。
8. それでは何が問題となり得るか考えてみましょう。 48 行目では要素への参照を CSS セレクターを使用して取得する [`document.querySelector()`](/ja/docs/Web/API/Document/querySelector) メソッドが使用されています。ファイルの少し上のほうにある、問題となる{{htmlelement("p")}} 要素を見てみましょう。

   ```js
   <p class="lowOrHi"></p>
   ```

9. ここではクラスセレクターが必要です。クラスセレクターはドット (`.`) で始まりますが、 48 行目で `querySelector()` メソッドに渡された文字列にはドットがありません。これが問題でしょう！ 48 行目の `lowOrHi` を `.lowOrHi` に変更してみてください。
10. ファイルを保存して再度読み込むと、`console.log()` の文は求めていた `<p>` 要素を表示しています。何とか次のエラーを潰すことができました！`console.log()` の行は削除してもいいですし、後で使うために残しておいても大丈夫です。

> **メモ:** [TypeError: "x" is (not) "y"](/ja/docs/Web/JavaScript/Reference/Errors/Unexpected_type) のリファレンスページで、このエラーに関する詳細な説明が見られます。

### 構文エラーその 3

1. さて、もう一度ゲームをプレイしてみましょう。ゲームは問題なく動いているようです。正解するか、残りの予想回数がなくなって、ゲームが終わるまでは...。
2. ここで、またゲームが止まってしまいました。最初のエラーと同じく "TypeError: resetButton.addeventListener is not a function" というエラーです！しかし、今回は 94 行目から発生していると表示されています。
3. 94 行目を見ると、同じ間違いを犯したことがわかります。もう一度 `addeventListener` を `.addEventListener` に直してください。

## 論理エラー

今回はゲームは上手く動いているようです。しかし、何度か動かしていると、予想すべき「ランダムな」数字が常に 1 であることに気づくでしょう。これはあまりやりたくないゲームですね！

これはゲームのロジックに間違いなく問題があります。ゲームはエラーとはなっていませんが、正しく動いてはいません。

1. `randomNumber` 変数にランダムな数値が最初にセットされる場所を検索してみましょう。ゲームの開始で推測するランダムな数字を保存しようとしているのは 44 行目のあたりです。

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. そして、それぞれのゲームの合間に次のランダムな数字を設定しているのは 113 行目のあたりです。

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. これらの行が問題となるかを確認するため、`console.log()` にもう一度登場してもらいましょう。先ほどのそれぞれの行の直下に以下のコードを追加します。

   ```js
   console.log(randomNumber);
   ```

4. 保存して再度読み込んで、何度かプレイしてみましょう。コンソールに出力される `randomNumber` の値が常に 1 であることに気づきます。

### ロジックを修正する

これを直すには、この行が何をしているのか考えなければなりません。まず [`Math.random()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) を呼んでいます。これは 0 から 1 までのランダムな実数値を生成します。例えば 0.5675493843 などです。

```js
Math.random();
```

次に `Math.random()` の実行結果を [`Math.floor()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) に渡して、一番近い整数に切り捨てています。そしてその結果に 1 を加えます。

```js
Math.floor(Math.random()) + 1;
```

0 から 1 のランダムな実数を切り捨てると、結果は常に 0 となり、それに 1 を加えることで常に 1 となります。ランダムな数を切り捨てる前に 100 を乗算しなければなりません。次のコードは 0 から 99 を返すでしょう。

```js
Math.floor(Math.random() * 100);
```

さらに 1 を加えることで、1 から 100 のランダムな数字を返してくれるようになります。

```js
Math.floor(Math.random() * 100) + 1;
```

先ほどの 2 行をそれぞれ修正してください。保存して再度読み込むと、思い通りに動くようになっているでしょう！

## その他のよくあるエラー

コードを書いていると、よくあるエラーは他にもあります。このセクションではそれらを紹介してみましょう。

### SyntaxError: missing ; before statement

たいてい、このエラーはコード行のどこかの末尾にセミコロン (;) がないことを意味しています。しかし、時にはもっと難解なこともあります。例えば `checkGuess()` 関数内のこの行を、

```js
let userGuess = Number(guessField.value);
```

以下のように変更してみます。

```js
let userGuess === Number(guessField.value);
```

そうすると、このエラーが吐かれます。違うことをやろうとしているように見えるのでしょう。値を変数に設定する代入演算子 (`=`) と、等値演算子 (`===`) を、これはある値が別の値と同じかどうかを判定して `true` または `false` を返しますが、間違わないようにしてください。

> **メモ:** [SyntaxError: missing ; before statement](/ja/docs/Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement) のリファレンスページで、このエラーに関する詳細な説明が見られます。

### プログラムが入力の内容に関わらずいつでも勝ちだと言ってくる

これは代入と比較を混同している別の症状でしょう。たとえば、`checkGuess()` 関数内の、この行を

```js
if (userGuess === randomNumber) {
```

以下のように変更してみます。

```js
if (userGuess = randomNumber) {
```

判定で常に `true` が返るようになり、常にプレイヤーが勝ったことになってしまいます。気を付けましょう！

### SyntaxError: missing ) after argument list

これは単純です。大体は関数やメソッドの呼び出しで閉じ括弧を忘れたことを表しています。

> **メモ:** [SyntaxError: missing ) after argument list](/ja/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) のリファレンスページで、このエラーに関する詳細な説明が見られます。

### SyntaxError: missing : after property id

たいてい、このエラーは JavaScript のオブジェクトの書き方が正しくないことに関連しているのですが、

```js
function checkGuess() {
```

上記のコードを以下のように変えても起きるでしょう。

```js
function checkGuess( {
```

この変更でブラウザーは関数の内容を関数の引数として渡しているように勘違いしてしまいます。括弧には気を付けましょう！

### SyntaxError: missing } after function body

これは簡単ですね。たいていの場合、関数や条件ブロックの終わりの閉じ波括弧が抜けていることを表します。`checkGuess()` 関数の最後の閉じ波括弧を消すと発生します。

### SyntaxError: expected expression, got '_string_' または SyntaxError: unterminated string literal

これらのエラーは文字列の始まりもしくは終わりの引用符が抜けていることを表します。最初のエラーは、文字列の始めの引用符の代わりに、ブラウザーが予期しない文字列を見つけた (string には実際に見つけた文字列が入ります) ことを表し、2 つ目のエラーは文字列が引用符で終わっていないことを表します。

どのエラーにも言えることですが、上の例でも見たように、考えてください。エラーが起きた時に、エラーが起きた行の番号をみて、その行にエラーがあるか見てみます。エラーはその行に存在しないこともありますし、上述した理由以外で起きることもあるということを心に留めておいてください。

> **メモ:** [SyntaxError: Unexpected token](/ja/docs/Web/JavaScript/Reference/Errors/Unexpected_token) と [SyntaxError: unterminated string literal](/ja/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal) のリファレンスページで、これらエラーに関する詳細な説明が見られます。

## まとめ

やっとここまで来ましたね。簡単な JavaScript プログラムのエラーを見つけ出すための基本が理解できました。コードの間違いを解決するのがいつも簡単とは限りませんが、特に学習の最初の過程では、うまくいかない時にも寝る時間を数時間節約し、多少早く進捗をあげられるでしょう。

## 関連情報

- ここで挙げたもの以外にも多数の種類のエラーがあります。その意味を詳しく説明した資料を作成しています。 [JavaScript エラーリファレンス](/ja/docs/Web/JavaScript/Reference/Errors)をご覧ください。
- この記事を読んでもまだ直し方がわからないエラーにコードで遭遇した場合は、助けを求めましょう！ [MDN Discourse フォーラムの Learning カテゴリー](https://discourse.mozilla.org/c/mdn/learn) (英語) や [MDN Web Docs room](https://chat.mozilla.org/#/room/#mdn:mozilla.org) (英語) などで聞いてください (訳注: 日本語では [Mozilla Japan コミュニティの Slack](https://join.slack.com/t/mozillajp/shared_invite/MjI2NDMwODUwNzY5LTE1MDI4MjEyMjktYjE2MThlMmM4OA) など)。どんなエラーなのか教えてくれれば、助けてあげられるかもしれません。コードを見せてくれるのもいいですね。

{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}
