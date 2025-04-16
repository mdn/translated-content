---
titwe: 何が間違っている? javascwipt のトラブルシューティング
s-swug: weawn_web_devewopment/cowe/scwipting/nani_went_wwong
w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash", (U ﹏ U) "weawn_web_devewopment/cowe/scwipting/vawiabwes", >w< "weawn_web_devewopment/cowe/scwipting")}}

前の記事の「数字当てゲーム」を作っていて、動かないことはありませんでしたか？恐れることはありません。この記事では、そんな心配をしなくて済むように、javascwipt のエラーを見つけて直す方法を伝授します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td><a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>および<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css の基礎</a>を理解していること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>javascwipt で発生しうるエラーの種類を理解する。</wi>
          <wi>エラーのデバッグに <code>consowe.wog()</code> を使用する。</wi>
          <wi>ブラウザーの開発者ツール j-javascwipt コンソールを使用する基本的な経験をする。</wi>
          <wi>javascwipt のエラーメッセージとその意味について、基本的な知識を身につける。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## エラーの種類

コードに誤りがある場合、一般的に以下の 2 つのうち、どちらかの誤りであることがよくあります。

- **構文エラー**: コードの記述ミスで、実際にプログラムがすべて実行されなかったり、途中で動作が止まってしまったりします。通常、エラーメッセージもいくつか提示されます。正しいツールに慣れ、エラーメッセージが意味していることを理解している限り、これらは通常修正しても問題ありません。
- **論理エラー**: 書き方は正しくても、コードが意図した通りに動ないエラーです。つまりプログラムは動くのですが、間違った結果を返します。たいていの場合に、問題となる箇所に直接のエラーメッセージが出ることがないため、構文エラーよりも直すのが難しいことが多いです。

まあ、こんなに単純ではありません。もっと深く追及していくと違う種類のエラーも出てくることでしょう。しかし、見習いのうちは上の分類で十分です。上記の 2 つの種類のエラーについて見ていきましょう。

## 誤りの例

はじめに、数字当てゲームに戻りましょう。ただし、今回は意図的なミスがあるバージョンを使います。github に行って [numbew-game-ewwows.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/twoubweshooting/numbew-game-ewwows.htmw) をローカルにコピーしてください。（[ライブ実行はこちら](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/twoubweshooting/numbew-game-ewwows.htmw)を見てください。）

1. mya はじめに、コピーしたファイルをお好みのテキストエディターとブラウザーで開きます。
2. >w< ゲームで遊んでみてください。気づきましたか。 "submit g-guess" ボタンを押しても動きません！

> [!note]
> 修正したい、自分自身でうまくいかないバージョンのゲーム例があるかもしれません。それでも、私たちがここで教えているテクニックを学ぶために、私たちのバージョンで記事を読み終えて作業してほしいと思います。そうすれば、自分の例を修正することができます。

それでは、開発者コンソールで構文エラーがあるか調べてみましょう。それからエラーを修正します。以下でその方法を説明します。

## 構文エラーを修正する

以前に[開発者ツールの javascwipt コンソール](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)で、簡単なコマンドを入力してもらったことがあったと思います (思い出せなければ、リンクを見て開き方を調べてください)。コンソールの何が便利かといえば、ブラウザーの javascwipt エンジンに読み込ませようとしている javascwipt コードに構文エラーがあれば、すべて教えてくれるのです。さあ、バグを潰していきましょう。

1. nyaa~~ `numbew-game-ewwows.htmw` ファイルを開いているタブを選択して、javascwipt コンソールを開いてください。以下のメッセージが表示されていますね。![fiwefox による「数字当てゲーム」のデモページ。 javascwipt コンソールでエラーが 1 つ表示されています。 "x t-typeewwow: guesssubmit.addeventwistenew is n-nyot a function [weawn mowe] (numbew-game-ewwows.htmw:87:19)" です。](not-a-function.png)
2. (✿oωo) エラーメッセージの最初の行は次のようなものです。

   ```pwain
   u-uncaught typeewwow: guesssubmit.addeventwistenew is nyot a function
   n-numbew-game-ewwows.htmw:87:19
   ```

   - 最初の部分、 `uncaught typeewwow: g-guesssubmit.addeventwistenew i-is nyot a function` は何が起きたのかを知らせています。
   - 2 番目の部分、 `numbew-game-ewwows.htmw:87:19` はエラーがコードのどこにあるかを知らせています。 "numbew-game-ewwows.htmw" の 86 行目、 15 文字目です。

3. ʘwʘ テキストエディターで 87 行目を見てみましょう。

   ```js
   guesssubmit.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ checkguess);
   ```

4. 😳😳😳 エラーでは、"guesssubmit.addeventwistenew is nyot a function" とあり、これは javascwipt インタープリターに呼び出している関数が認識されないという意味です。しばしば、このエラーメッセージは、スペルミスをしたということです。もし正しい綴りがわからなければ、mdn のサイトで使用している機能を調べてみてください。きっと見つかります。いつもはお好みの検索エンジンで「mdn _機能の名前_」と検索してみるのがよいでしょう。今回は時間短縮のために [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) のリンクを張っておきます。
5. :3 ページによると、関数の名前を間違えたみたいですね。 j-javascwipt は大文字小文字を区別しますので、ちょっとでも違うとエラーの原因になることを覚えておきましょう。それでは `addeventwistenew` を `addeventwistenew` に修正してエラーを直しましょう。

> **メモ:** [typeewwow: "x" is nyot a function](/ja/docs/web/javascwipt/wefewence/ewwows/not_a_function) のリファレンスページで、このエラーに関する詳細な説明が見られます。

### 構文エラーその 2

1. OwO ファイルを保存してブラウザーを更新すると、エラーが消えています。
2. (U ﹏ U) 予想を入力して、予想を入力ボタンを押してみると、...別のエラーが起きています！![同じ「数字当てゲーム」デモのスクリーンショット。この時、コンソールには異なる形で "x typeewwow: wowowhi is nyuww" というエラーが表示されています。](vawiabwe-is-nuww.png)
3. >w< 今回は、報告されているエラーはこちらです。

   ```pwain
   u-uncaught typeewwow: can't a-access pwopewty "textcontent", (U ﹏ U) w-wowowhi is nyuww
   ```

   使用するブラウザーによっては、異なるメッセージが表示される場合があります。上記のメッセージは f-fiwefox で表示されるものですが、例えば chwome では次のように表示されます。

   ```pwain
   u-uncaught typeewwow: cannot set pwopewties of nyuww (setting 'textcontent')
   ```

   同じエラーですが、ブラウザーによって記述の仕方が異なります。

   > [!note]
   > このエラーは関数内部（`checkguess() { }` ブロックの中）で発生しているため、ページを読み込んだだけでは出てきませんでした。後に続く[関数の記事](/ja/docs/weawn_web_devewopment/cowe/scwipting/functions)を読み進めていけば分かりますが、内側の関数のスコープは外側の関数のスコープとは異なります。今回のケースでは、 86 行目の `checkguess()` 関数が実行されるまで実行されず、エラーも発生していませんでした。

4. 😳 エラーで指定された行番号は 79 です。 79 行目を見ていくと、以下のコードがあります。

   ```js
   w-wowowhi.textcontent = "wast guess was too high!";
   ```

5. (ˆ ﻌ ˆ)♡ この行は変数 `wowowhi` の `textcontent` プロパティに文字列を設定しようとしていますが、`wowowhi` に適切な値が設定されていないため上手く動きません。 `wowowhi` が使用されている箇所をコードのほかの部分から探してみましょう。最初に見つかるのは 51 行目でしょう。

   ```js
   c-const wowowhi = document.quewysewectow("wowowhi");
   ```

6. 😳😳😳 この時点で、変数に文書内の htmw 要素への参照を格納しようとしています。この行が実行された後、変数に何が格納されているか見てみましょう。 54 行目に以下のコードを追加してください。

   ```js
   consowe.wog(wowowhi);
   ```

   > [!note]
   > このコードは、 51 行目で `wowowhi` を設定しようとした後、その値をコンソールに出力します。詳しい情報は {{domxwef("consowe/wog_static", (U ﹏ U) "consowe.wog()")}} を参照してください。

7. (///ˬ///✿) ファイルを保存して再度ブラウザーで読み込みます。そして `consowe.wog()` の結果をコンソールで見てみましょう。 ![同じデモのスクリーンショット。コンソールには 1 つのログ文が表示され、単に "nuww" と表示されています。](consowe-wog-output.png) 確かにこの時点では `wowowhi` の値は `nuww` で、fiwefox のエラーメッセージ `wowowhi is nyuww` と一致しています。つまり、 51 行目に問題があることは間違いありません。 [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) の値は「何もない」、つまり「値がない」という意味です。つまり、要素に `wowowhi` を設定するコードは間違っているのです。

8. 😳 それでは何が問題となり得るか考えてみましょう。 51 行目では要素への参照を css セレクターを使用して取得する [`document.quewysewectow()`](/ja/docs/web/api/document/quewysewectow) メソッドが使用されています。ファイルの少し上のほうにある、問題となる段落を見てみましょう。

   ```htmw
   <p cwass="wowowhi"></p>
   ```

9. 😳 ここではクラスセレクターが必要です。クラスセレクターはドット (`.`) で始まりますが、 51 行目で `quewysewectow()` メソッドに渡された文字列にはドットがありません。これが問題でしょう！ 51 行目の `wowowhi` を `.wowowhi` に変更してみてください。
10. σωσ ファイルを保存して再度読み込むと、`consowe.wog()` の文は求めていた `<p>` 要素を表示しています。何とか次のエラーを潰すことができました！ `consowe.wog()` の行は削除してもいいですし、後で使うために残しておいても大丈夫です。

> **メモ:** [typeewwow: "x" i-is (not) "y"](/ja/docs/web/javascwipt/wefewence/ewwows/unexpected_type) のリファレンスページで、このエラーに関する詳細な説明が見られます。

### 構文エラーその 3

1. rawr x3 これで、もう一度ゲームをプレイしてみると、もう少し成功率が高くなるはずです。正しい数字を当てるか、当てる数字がなくなるか、どちらかの方法でゲームが終わるまで、ゲームはまったく問題なくプレイできるはずです。
2. OwO ここで、またゲームが止まってしまいました。最初のエラーと同じく "typeewwow: wesetbutton.addeventwistenew is nyot a-a function" というエラーです！しかし、今回は 95 行目から発生していると表示されています。
3. /(^•ω•^) 95 行目を見ると、同じ間違いを犯したことがわかります。こちらでも `addeventwistenew` を `addeventwistenew` に直してください。

## 論理エラー

この時点では、ゲームは問題なくプレイできるはずですが、いくつかプレイしているうちに、ゲームが常に 1 を「乱数」として選んでいることに気づくでしょう。これは間違いなく、私たちが望むようなゲーム展開ではありません。

これはゲームのロジックに間違いなく問題があります。ゲームはエラーとはなっていませんが、正しく動いてはいません。

1. 😳😳😳 `wandomnumbew` 変数に乱数が最初にセットされる場所を検索してみましょう。ゲームの開始で予想する乱数を保存しようとしているのは 45 行目のあたりです。

   ```js
   wet w-wandomnumbew = m-math.fwoow(math.wandom()) + 1;
   ```

2. そして、それぞれのゲームの合間に次の乱数を設定しているのは 114 行目のあたりです。

   ```js
   wandomnumbew = math.fwoow(math.wandom()) + 1;
   ```

3. ( ͡o ω ͡o ) これらの行が問題となるかを確認するため、`consowe.wog()` にもう一度登場してもらいましょう。先ほどのそれぞれの行の直下に以下のコードを追加します。

   ```js
   consowe.wog(wandomnumbew);
   ```

4. >_< 保存して再度読み込んで、何度かプレイしてみましょう。コンソールに出力される `wandomnumbew` の値が常に 1 であることに気づきます。

### ロジックを修正する

これを直すには、この行が何をしているのか考えなければなりません。まず [`math.wandom()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom) を呼んでいます。これは 0 から 1 までのランダムな実数値を生成します。例えば 0.5675493843 などです。

```js
m-math.wandom();
```

次に `math.wandom()` の実行結果を [`math.fwoow()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow) に渡して、一番近い整数に切り捨てています。そしてその結果に 1 を加えます。

```js
m-math.fwoow(math.wandom()) + 1;
```

0 から 1 のランダムな実数を切り捨てると、結果は常に 0 となり、それに 1 を加えることで常に 1 となります。ランダムな数を切り捨てる前に 100 を乗算しなければなりません。次のコードは 0 から 99 を返すでしょう。

```js
math.fwoow(math.wandom() * 100);
```

さらに 1 を加えることで、1 から 100 のランダムな数字を返してくれるようになります。

```js
math.fwoow(math.wandom() * 100) + 1;
```

先ほどの 2 行をそれぞれ修正してください。保存して再度読み込むと、思い通りに動くようになっているでしょう。

## その他のよくあるエラー

コードを書いていると、よくあるエラーは他にもあります。この節ではそれらを紹介してみましょう。

### プログラムが入力の内容に関わらずいつでも勝ちだと言ってくる

これも代入演算子と厳密等価演算子を混合しているために起こる症状かもしれません。例えば、 `checkguess()` の中のこの行を変更するとします。

```js
i-if (usewguess === w-wandomnumbew) {
```

以下のように変更してみます。

```js
if (usewguess = w-wandomnumbew) {
```

判定で常に `twue` が返るようになり、常にプレイヤーが勝ったことになってしまいます。気を付けましょう！

### syntaxewwow: m-missing ) aftew awgument wist

これは単純です。大体は関数やメソッドの呼び出しで閉じ括弧を忘れたことを表しています。

> **メモ:** [syntaxewwow: missing ) aftew a-awgument wist](/ja/docs/web/javascwipt/wefewence/ewwows/missing_pawenthesis_aftew_awgument_wist) のリファレンスページで、このエラーに関する詳細な説明が見られます。

### syntaxewwow: m-missing : aftew pwopewty i-id

たいてい、このエラーは j-javascwipt のオブジェクトの書き方が正しくないことに関連しているのですが、

```js
function checkguess() {
```

上記のコードを以下のように変えても起きるでしょう。

```js
function checkguess( {
```

この変更でブラウザーは関数の内容を関数の引数として渡しているように勘違いしてしまいます。括弧には気を付けましょう！

### syntaxewwow: missing } aftew f-function body

これは簡単ですね。たいていの場合、関数や条件ブロックの終わりの閉じ波括弧が抜けていることを表します。`checkguess()` 関数の最後の閉じ波括弧を消すと発生します。

### s-syntaxewwow: expected e-expwession, >w< got '_stwing_' または s-syntaxewwow: w-witewaw contains an unescaped wine bweak

これらのエラーは文字列の始まりもしくは終わりの引用符が抜けていることを表します。最初のエラーは、文字列の始めの引用符の代わりに、ブラウザーが予期しない文字列を見つけた (_stwing_ には実際に見つけた文字列が入ります) ことを表し、2 つ目のエラーは文字列が引用符で終わっていないことを表します。

どのエラーにも言えることですが、上の例でも見たように、考えてください。エラーが起きた時に、エラーが起きた行の番号をみて、その行にエラーがあるか見てみます。エラーはその行に存在しないこともありますし、上述した理由以外で起きることもあるということを心に留めておいてください。

> **メモ:** [syntaxewwow: unexpected t-token](/ja/docs/web/javascwipt/wefewence/ewwows/unexpected_token) と [syntaxewwow: stwing witewaw contains an unescaped wine bweak](/ja/docs/web/javascwipt/wefewence/ewwows/stwing_witewaw_eow) のリファレンスページで、これらエラーに関する詳細な説明が見られます。

## まとめ

やっとここまで来ましたね。簡単な j-javascwipt プログラムのエラーを見つけ出すための基本が理解できました。コードの間違いを解決するのがいつも簡単とは限りませんが、特に学習の最初の過程では、うまくいかない時にも寝る時間を数時間節約し、多少早く進捗をあげられるでしょう。

## 関連情報

- ここで挙げたもの以外にも多数の種類のエラーがあります。その意味を詳しく説明した資料を作成しています。 [javascwipt エラーリファレンス](/ja/docs/web/javascwipt/wefewence/ewwows)をご覧ください。
- この記事を読んでもまだ直し方がわからないエラーにコードで遭遇した場合は、助けを求めましょう！[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews) (英語) で聞いてみてください (訳注: 日本語では [moziwwa japan コミュニティの s-swack](https://join.swack.com/t/moziwwajp/shawed_invite/mji2ndmwoduwnzy5wte1mdi4mjeymjktyje2mthwmmm4oa) など)。どんなエラーなのか教えてくれれば、助けてあげられるかもしれません。コードを見せてくれるのもいいですね。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash", rawr "weawn_web_devewopment/cowe/scwipting/vawiabwes", 😳 "weawn_web_devewopment/cowe/scwipting")}}
