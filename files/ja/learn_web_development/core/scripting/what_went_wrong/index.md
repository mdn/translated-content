---
title: 何が間違っている? JavaScript のトラブルシューティング
slug: Learn_web_development/Core/Scripting/What_went_wrong
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}

前の記事の「数字当てゲーム」を作っていて、動かないことはありませんでしたか？恐れることはありません。この記事では、そんな心配をしなくて済むように、JavaScript のエラーを見つけて直す方法を伝授します。

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
          <li>JavaScript で発生しうるエラーの種類を理解する。</li>
          <li>エラーのデバッグに <code>console.log()</code> を使用する。</li>
          <li>ブラウザーの開発者ツール JavaScript コンソールを使用する基本的な経験をする。</li>
          <li>JavaScript のエラーメッセージとその意味について、基本的な知識を身につける。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## エラーの種類

コードに誤りがある場合、一般的に以下の 2 つのうち、どちらかの誤りであることがよくあります。

- **構文エラー**: コードの記述ミスで、実際にプログラムがすべて実行されなかったり、途中で動作が止まってしまったりします。通常、エラーメッセージもいくつか提示されます。正しいツールに慣れ、エラーメッセージが意味していることを理解している限り、これらは通常修正しても問題ありません。
- **論理エラー**: 書き方は正しくても、コードが意図した通りに動ないエラーです。つまりプログラムは動くのですが、間違った結果を返します。たいていの場合に、問題となる箇所に直接のエラーメッセージが出ることがないため、構文エラーよりも直すのが難しいことが多いです。

まあ、こんなに単純ではありません。もっと深く追及していくと違う種類のエラーも出てくることでしょう。しかし、見習いのうちは上の分類で十分です。上記の 2 つの種類のエラーについて見ていきましょう。

## 誤りの例

はじめに、数字当てゲームに戻りましょう。ただし、今回は意図的なミスがあるバージョンを使います。GitHub に行って [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) をローカルにコピーしてください。（[ライブ実行はこちら](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)を見てください。）

1. はじめに、コピーしたファイルをお好みのテキストエディターとブラウザーで開きます。
2. ゲームで遊んでみてください。気づきましたか。 "Submit guess" ボタンを押しても動きません！

> [!NOTE]
> 修正したい、自分自身でうまくいかないバージョンのゲーム例があるかもしれません。それでも、私たちがここで教えているテクニックを学ぶために、私たちのバージョンで記事を読み終えて作業してほしいと思います。そうすれば、自分の例を修正することができます。

それでは、開発者コンソールで構文エラーがあるか調べてみましょう。それからエラーを修正します。以下でその方法を説明します。

## 構文エラーを修正する

以前に[開発者ツールの JavaScript コンソール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)で、簡単なコマンドを入力してもらったことがあったと思います (思い出せなければ、リンクを見て開き方を調べてください)。コンソールの何が便利かといえば、ブラウザーの JavaScript エンジンに読み込ませようとしている JavaScript コードに構文エラーがあれば、すべて教えてくれるのです。さあ、バグを潰していきましょう。

1. `number-game-errors.html` ファイルを開いているタブを選択して、JavaScript コンソールを開いてください。以下のメッセージが表示されていますね。![Firefox による「数字当てゲーム」のデモページ。 JavaScript コンソールでエラーが 1 つ表示されています。 "X TypeError: guessSubmit.addeventListener is not a function [Learn More] (number-game-errors.html:87:19)" です。](not-a-function.png)
2. エラーメッセージの最初の行は次のようなものです。

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:87:19
   ```

   - 最初の部分、 `Uncaught TypeError: guessSubmit.addeventListener is not a function` は何が起きたのかを知らせています。
   - 2 番目の部分、 `number-game-errors.html:87:19` はエラーがコードのどこにあるかを知らせています。 "number-game-errors.html" の 86 行目、 15 文字目です。

3. テキストエディターで 87 行目を見てみましょう。

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. エラーでは、"guessSubmit.addeventListener is not a function" とあり、これは JavaScript インタープリターに呼び出している関数が認識されないという意味です。しばしば、このエラーメッセージは、スペルミスをしたということです。もし正しい綴りがわからなければ、MDN のサイトで使用している機能を調べてみてください。きっと見つかります。いつもはお好みの検索エンジンで「mdn _機能の名前_」と検索してみるのがよいでしょう。今回は時間短縮のために [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) のリンクを張っておきます。
5. ページによると、関数の名前を間違えたみたいですね。 JavaScript は大文字小文字を区別しますので、ちょっとでも違うとエラーの原因になることを覚えておきましょう。それでは `addeventListener` を `addEventListener` に修正してエラーを直しましょう。

> **メモ:** [TypeError: "x" is not a function](/ja/docs/Web/JavaScript/Reference/Errors/Not_a_function) のリファレンスページで、このエラーに関する詳細な説明が見られます。

### 構文エラーその 2

1. ファイルを保存してブラウザーを更新すると、エラーが消えています。
2. 予想を入力して、予想を入力ボタンを押してみると、...別のエラーが起きています！![同じ「数字当てゲーム」デモのスクリーンショット。この時、コンソールには異なる形で "X TypeError: lowOrHi is null" というエラーが表示されています。](variable-is-null.png)
3. 今回は、報告されているエラーはこちらです。

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   使用するブラウザーによっては、異なるメッセージが表示される場合があります。上記のメッセージは Firefox で表示されるものですが、例えば Chrome では次のように表示されます。

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   同じエラーですが、ブラウザーによって記述の仕方が異なります。

   > [!NOTE]
   > このエラーは関数内部（`checkGuess() { }` ブロックの中）で発生しているため、ページを読み込んだだけでは出てきませんでした。後に続く[関数の記事](/ja/docs/Learn_web_development/Core/Scripting/Functions)を読み進めていけば分かりますが、内側の関数のスコープは外側の関数のスコープとは異なります。今回のケースでは、 86 行目の `checkGuess()` 関数が実行されるまで実行されず、エラーも発生していませんでした。

4. エラーで指定された行番号は 79 です。 79 行目を見ていくと、以下のコードがあります。

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. この行は変数 `lowOrHi` の `textContent` プロパティに文字列を設定しようとしていますが、`lowOrHi` に適切な値が設定されていないため上手く動きません。 `lowOrHi` が使用されている箇所をコードのほかの部分から探してみましょう。最初に見つかるのは 51 行目でしょう。

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. この時点で、変数に文書内の HTML 要素への参照を格納しようとしています。この行が実行された後、変数に何が格納されているか見てみましょう。 54 行目に以下のコードを追加してください。

   ```js
   console.log(lowOrHi);
   ```

   > [!NOTE]
   > このコードは、 51 行目で `lowOrHi` を設定しようとした後、その値をコンソールに出力します。詳しい情報は {{domxref("console/log_static", "console.log()")}} を参照してください。

7. ファイルを保存して再度ブラウザーで読み込みます。そして `console.log()` の結果をコンソールで見てみましょう。 ![同じデモのスクリーンショット。コンソールには 1 つのログ文が表示され、単に "null" と表示されています。](console-log-output.png) 確かにこの時点では `lowOrHi` の値は `null` で、Firefox のエラーメッセージ `lowOrHi is null` と一致しています。つまり、 51 行目に問題があることは間違いありません。 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) の値は「何もない」、つまり「値がない」という意味です。つまり、要素に `lowOrHi` を設定するコードは間違っているのです。

8. それでは何が問題となり得るか考えてみましょう。 51 行目では要素への参照を CSS セレクターを使用して取得する [`document.querySelector()`](/ja/docs/Web/API/Document/querySelector) メソッドが使用されています。ファイルの少し上のほうにある、問題となる段落を見てみましょう。

   ```html
   <p class="lowOrHi"></p>
   ```

9. ここではクラスセレクターが必要です。クラスセレクターはドット (`.`) で始まりますが、 51 行目で `querySelector()` メソッドに渡された文字列にはドットがありません。これが問題でしょう！ 51 行目の `lowOrHi` を `.lowOrHi` に変更してみてください。
10. ファイルを保存して再度読み込むと、`console.log()` の文は求めていた `<p>` 要素を表示しています。何とか次のエラーを潰すことができました！ `console.log()` の行は削除してもいいですし、後で使うために残しておいても大丈夫です。

> **メモ:** [TypeError: "x" is (not) "y"](/ja/docs/Web/JavaScript/Reference/Errors/Unexpected_type) のリファレンスページで、このエラーに関する詳細な説明が見られます。

### 構文エラーその 3

1. これで、もう一度ゲームをプレイしてみると、もう少し成功率が高くなるはずです。正しい数字を当てるか、当てる数字がなくなるか、どちらかの方法でゲームが終わるまで、ゲームはまったく問題なくプレイできるはずです。
2. ここで、またゲームが止まってしまいました。最初のエラーと同じく "TypeError: resetButton.addeventListener is not a function" というエラーです！しかし、今回は 95 行目から発生していると表示されています。
3. 95 行目を見ると、同じ間違いを犯したことがわかります。こちらでも `addeventListener` を `addEventListener` に直してください。

## 論理エラー

この時点では、ゲームは問題なくプレイできるはずですが、いくつかプレイしているうちに、ゲームが常に 1 を「乱数」として選んでいることに気づくでしょう。これは間違いなく、私たちが望むようなゲーム展開ではありません。

これはゲームのロジックに間違いなく問題があります。ゲームはエラーとはなっていませんが、正しく動いてはいません。

1. `randomNumber` 変数に乱数が最初にセットされる場所を検索してみましょう。ゲームの開始で予想する乱数を保存しようとしているのは 45 行目のあたりです。

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. そして、それぞれのゲームの合間に次の乱数を設定しているのは 114 行目のあたりです。

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

先ほどの 2 行をそれぞれ修正してください。保存して再度読み込むと、思い通りに動くようになっているでしょう。

## その他のよくあるエラー

コードを書いていると、よくあるエラーは他にもあります。この節ではそれらを紹介してみましょう。

### プログラムが入力の内容に関わらずいつでも勝ちだと言ってくる

これも代入演算子と厳密等価演算子を混合しているために起こる症状かもしれません。例えば、 `checkGuess()` の中のこの行を変更するとします。

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

### SyntaxError: expected expression, got '_string_' または SyntaxError: literal contains an unescaped line break

これらのエラーは文字列の始まりもしくは終わりの引用符が抜けていることを表します。最初のエラーは、文字列の始めの引用符の代わりに、ブラウザーが予期しない文字列を見つけた (_string_ には実際に見つけた文字列が入ります) ことを表し、2 つ目のエラーは文字列が引用符で終わっていないことを表します。

どのエラーにも言えることですが、上の例でも見たように、考えてください。エラーが起きた時に、エラーが起きた行の番号をみて、その行にエラーがあるか見てみます。エラーはその行に存在しないこともありますし、上述した理由以外で起きることもあるということを心に留めておいてください。

> **メモ:** [SyntaxError: Unexpected token](/ja/docs/Web/JavaScript/Reference/Errors/Unexpected_token) と [SyntaxError: string literal contains an unescaped line break](/ja/docs/Web/JavaScript/Reference/Errors/String_literal_EOL) のリファレンスページで、これらエラーに関する詳細な説明が見られます。

## まとめ

やっとここまで来ましたね。簡単な JavaScript プログラムのエラーを見つけ出すための基本が理解できました。コードの間違いを解決するのがいつも簡単とは限りませんが、特に学習の最初の過程では、うまくいかない時にも寝る時間を数時間節約し、多少早く進捗をあげられるでしょう。

## 関連情報

- ここで挙げたもの以外にも多数の種類のエラーがあります。その意味を詳しく説明した資料を作成しています。 [JavaScript エラーリファレンス](/ja/docs/Web/JavaScript/Reference/Errors)をご覧ください。
- この記事を読んでもまだ直し方がわからないエラーにコードで遭遇した場合は、助けを求めましょう！[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels) (英語) で聞いてみてください (訳注: 日本語では [Mozilla Japan コミュニティの Slack](https://join.slack.com/t/mozillajp/shared_invite/MjI2NDMwODUwNzY5LTE1MDI4MjEyMjktYjE2MThlMmM4OA) など)。どんなエラーなのか教えてくれれば、助けてあげられるかもしれません。コードを見せてくれるのもいいですね。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}
