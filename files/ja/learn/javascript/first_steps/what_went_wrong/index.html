---
title: 何が間違っている? JavaScript のトラブルシューティング
slug: Learn/JavaScript/First_steps/What_went_wrong
tags:
  - Article
  - Beginner
  - CodingScripting
  - Debugging
  - Developer Tools
  - Error
  - JavaScript
  - Learn
  - Tutorial
  - console.log
  - l10n:priority
translation_of: Learn/JavaScript/First_steps/What_went_wrong
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}</div>

<p class="summary">前の記事の「数字当てゲーム」を作っていて、動かないことはありませんでしたか？恐れることはありません。この記事では、そんな心配をしなくて済むように、JavaScript のエラーを見つけて直す方法を伝授します。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件:</th>
   <td>基本的なコンピューターリテラシー、HTML および CSS の基本的な理解、JavaScript についての理解。</td>
  </tr>
  <tr>
   <th scope="row">目的:</th>
   <td>コード内のシンプルな問題を修正し始める能力と自信を得る。</td>
  </tr>
 </tbody>
</table>

<h2 id="Types_of_error">エラーの種類</h2>

<p>コードに誤りがある場合、一般的に以下の 2 つのうち、どちらかの誤りであることがよくあります。</p>

<ul>
 <li><strong>構文エラー</strong>: プログラムが全く動かなかったり、途中で止まったりするような記述エラーで、通常はエラーメッセージが出力されます。正しいツールに慣れて、エラーメッセージの内容がわかるのなら、さほど無理なく修正が可能です。</li>
 <li><strong>論理エラー</strong>: 書き方は正しくても、コードが意図した通りに動ないエラーです。つまりプログラムは動くのですが、間違った結果を返します。たいていの場合に、問題となる箇所に直接のエラーメッセージが出ることがないため、構文エラーよりも直すのが難しいことが多いです。</li>
</ul>

<p>まあ、こんなに単純ではありません。もっと深く追及していくと違う種類のエラーも出てくることでしょう。しかし、見習いのうちは上の分類で十分です。上記の 2 つの種類のエラーについて見ていきましょう。</p>

<h2 id="An_erroneous_example">誤りの例</h2>

<p>始めるにあたり、数字当て (今回は当たらない) ゲームに戻りましょう。わざとエラーになるバージョンを見ていきます。Github に行って <a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html">number-game-errors.html</a> をローカルにコピーしてください (<a href="https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html">ライブ実行はこちら</a>を見てください)。</p>

<ol>
 <li>始めるには、コピーしたファイルをお好みのテキストエディターとブラウザーで開きます。</li>
 <li>ゲームで遊んでみてください。気づきましたか。"予想を入力" ボタンを押しても動きません！</li>
</ol>

<div class="note">
<p><strong>注</strong>: もしかしたら、あなたにも直したいと思っているバージョンがあるかもしれませんね。ですが、まずはこちらで用意したバージョンを直してみてください。そうすれば、ここで教えるテクニックが身につきます。それから、あなた自身のプログラムに戻って直してみてください。</p>
</div>

<p>それでは、開発者コンソールで構文エラーがあるか調べてみましょう。それからエラーを修正します。どうやって修正すればいいかは今から教えます。</p>

<h2 id="Fixing_syntax_errors">構文エラーを修正する</h2>

<p>以前に<a href="/ja/docs/Learn/Common_questions/What_are_browser_developer_tools">開発者ツールの JavaScript コンソール</a>で、簡単なコマンドを入力してもらったことがあったと思います (思い出せなければ、リンクを見て開き方を調べてください)。コンソールの何が便利かといえば、ブラウザーの JavaScript エンジンに読み込ませようとしている JavaScript コードに構文エラーがあれば、すべて教えてくれるのです。さあ、バグを潰していきましょう。</p>

<ol>
 <li><code>number-game-errors.html</code> ファイルを開いているタブを選択して、JavaScript コンソールを開いてください。以下のメッセージが表示されていますね。<img alt="" src="not-a-function.png" style="display: block; margin: 0 auto;"></li>
 <li>これは分かりやすいエラーです。ブラウザーからもいくつか情報が出ています (上のスクリーンショットは FireFox のものですが、他のブラウザーでも同様の情報が表示されるでしょう)。左から順に説明します。
  <ul>
   <li>赤色の 「x」 ボタンはエラーがあることを示しています。</li>
   <li>「TypeError: guessSubmit.addeventListener is not a function」というエラーメッセージが、何が問題かを示しています。</li>
   <li>「Learn More」 のリンクがエラー内容についてもっと詳細に説明する MDN のページを指しています。</li>
   <li>JavaScript のファイルの名前が出ています。このリンクをクリックすると、開発者ツールのデバッガータブで問題のあるファイルが開きます。ハイライトされているエラーの箇所が見えるでしょう。</li>
   <li>エラーがある行の行番号と、最初の文字が始まる番号が出ています。上の例では 86 行目の 3 文字目です。</li>
  </ul>
 </li>
 <li>テキストエディターで 86 行目を見てみましょう。
  <pre class="brush: js">guessSubmit.addeventListener('click', checkGuess);</pre>
 </li>
 <li>エラーでは、"guessSubmit.addeventListener is not a function" とあり、これは JavaScript インタープリターに呼び出している関数が認識されないという意味です。しばしば、このエラーメッセージは、スペルミスをしたということです。もし正しい綴りがわからなければ、MDN のサイトで使用している機能を調べてみてください。きっと見つかります。いつもはお好みの検索エンジンで「mdn <em>機能の名前</em>」と検索してみるのがよいでしょう。今回は代わりに <code><a href="/ja/docs/Web/API/EventTarget/addEventListener">addEventListener()</a></code> のリンクを張っておきます。</li>
 <li>ページによると、関数の名前を間違えたみたいですね！JavaScript は大文字・小文字を区別しますので、ちょっとでも違うとエラーの原因になることを覚えておきましょう。それでは <code>addeventListener</code> を <code>addEventListener</code> に修正してエラーを直しましょう。</li>
</ol>

<div class="note">
<p><strong>注</strong>: <a href="/ja/docs/Web/JavaScript/Reference/Errors/Not_a_function">TypeError: "x" is not a function</a> のリファレンスページで、このエラーに関する詳細な説明が見られます。</p>
</div>

<h3 id="Syntax_errors_round_two">構文エラーその 2</h3>

<ol>
 <li>ファイルを保存してブラウザーを更新すると、エラーが消えています。</li>
 <li>予想を入力して、予想を入力ボタンを押してみると、...別のエラーが起きています！<img alt="" src="variable-is-null.png" style="display: block; margin: 0 auto;"></li>
 <li>今回のエラーを見ると、 78 行目で"TypeError: lowOrHi is null"が起きています。
  <div class="note"><strong>注</strong>: <code><a href="/ja/docs/Glossary/Null">Null</a></code> は「何もない」ことや「値がない」ことを表す特別な値です。つまり <code>lowOrHi</code> が宣言されて初期化されているけれど、意味のある値ではない — つまり型も値もないということです。</div>

  <div class="note"><strong>注</strong>: このエラーは関数内部 (<code>checkGuess() { ... }</code> ブロックの中) で発生したため、ページを読み込んだだけでは出てきませんでした。後に続く<a href="/ja/docs/Learn/JavaScript/Building_blocks/Functions">関数の記事</a>を読み進めていけば分かりますが、内側の関数のスコープは外側の関数のスコープとは異なります。今回のケースでは、 86 行目の <code>checkGuess()</code> 関数が実行されるまで実行されず、エラーも発生していませんでした。</div>
 </li>
 <li>78 行目を見てください。以下のコードが書かれています。
  <pre class="brush: js">lowOrHi.textContent = '今の予想は大きすぎです!';</pre>
 </li>
 <li>この行は <code>lowOrHi</code> 定数の <code>textContent</code> プロパティに文字列を設定しようとしていますが、<code>lowOrHi</code> 定数に適切な値が設定されていないため上手く動きません。<code>lowOrHi</code> が使用されている箇所をコードのほかの部分から探してみましょう。最初に見つかるのは 48 行目でしょう。
  <pre class="brush: js">const lowOrHi = document.querySelector('lowOrHi');</pre>
 </li>
 <li>ここでは、HTML の要素を参照する変数を作ろうとしています。この行の後ろで、値が <code>null</code> になっているか確認するため以下のコードを直後の 49 行目に追加します。
  <pre class="brush: js">console.log(lowOrHi);</pre>

  <div class="note">
  <p><strong>注</strong>: <code><a href="/ja/docs/Web/API/Console/log">console.log()</a></code> は値をコンソールに出力する、デバッグするときにとても便利な関数です。これで 48行目で <code>lowOrHi</code> にセットしたはずの値がコンソールに出力されるでしょう。</p>
  </div>
 </li>
 <li>ファイルを保存して再度ブラウザーで読み込みます。そして <code>console.log()</code> の結果をコンソールで見てみましょう。 <img alt="" src="console-log-output.png" style="display: block; margin: 0 auto;">わかりましたね。<code>lowOrHi</code> の値は <code>null</code> でした。これで問題が 48 行目にあることがわかりました。</li>
 <li>それでは何が問題となり得るか考えてみましょう。 48 行目では要素への参照を CSS セレクターを使用して取得する <code><a href="/ja/docs/Web/API/Document/querySelector">document.querySelector()</a></code> メソッドが使用されています。ファイルの少し上のほうにある、問題となる{{htmlelement("p")}} 要素を見てみましょう。
  <pre class="brush: js">&lt;p class="lowOrHi"&gt;&lt;/p&gt;</pre>
 </li>
 <li>ここではクラスセレクターが必要です。クラスセレクターはドット (<code>.</code>) で始まりますが、 48 行目で <code>querySelector()</code> メソッドに渡された文字列にはドットがありません。これが問題でしょう！ 48 行目の <code>lowOrHi</code> を <code>.lowOrHi</code> に変更してみてください。</li>
 <li>ファイルを保存して再度読み込むと、<code>console.log()</code> の文は求めていた <code>&lt;p&gt;</code> 要素を表示しています。何とか次のエラーを潰すことができました！<code>console.log()</code> の行は削除してもいいですし、後で使うために残しておいても大丈夫です。</li>
</ol>

<div class="note">
<p><strong>注</strong>: <a href="/ja/docs/Web/JavaScript/Reference/Errors/Unexpected_type">TypeError: "x" is (not) "y"</a>  のリファレンスページで、このエラーに関する詳細な説明が見られます。</p>
</div>

<h3 id="Syntax_errors_round_three">構文エラーその 3</h3>

<ol>
 <li>さて、もう一度ゲームをプレイしてみましょう。ゲームは問題なく動いているようです。正解するか、残りの予想回数がなくなって、ゲームが終わるまでは...。</li>
 <li>ここで、またゲームが止まってしまいました。最初のエラーと同じく "TypeError: resetButton.addeventListener is not a function" というエラーです！しかし、今回は 94 行目から発生していると表示されています。</li>
 <li>94 行目を見ると、同じ間違いを犯したことがわかります。もう一度 <code>addeventListener</code> を <code>.addEventListener</code> に直してください。</li>
</ol>

<h2 id="A_logic_error">論理エラー</h2>

<p>今回はゲームは上手く動いているようです。しかし、何度か動かしていると、予想すべき「ランダムな」数字が常に 1 であることに気づくでしょう。これはあまりやりたくないゲームですね！</p>

<p>これはゲームのロジックに間違いなく問題があります。ゲームはエラーとはなっていませんが、正しく動いてはいません。</p>

<ol>
 <li><code>randomNumber</code> 変数にランダムな数値が最初にセットされる場所を検索してみましょう。ゲームの開始で推測するランダムな数字を保存しようとしているのは 44行目のあたりです。

  <pre class="brush: js">let randomNumber = Math.floor(Math.random()) + 1;</pre>
 </li>
 <li>そして、それぞれのゲームの合間に次のランダムな数字を設定しているのは 113 行目のあたりです。
  <pre class="brush: js">randomNumber = Math.floor(Math.random()) + 1;</pre>
 </li>
 <li>これらの行が問題となるかを確認するため、<code>console.log()</code> にもう一度登場してもらいましょう。先ほどのそれぞれの行の直下に以下のコードを追加します。
  <pre class="brush: js">console.log(randomNumber);</pre>
 </li>
 <li>保存して再度読み込んで、何度かプレイしてみましょう。コンソールに出力される <code>randomNumber</code> の値が常に 1 であることに気づきます。</li>
</ol>

<h3 id="Working_through_the_logic">ロジックを修正する</h3>

<p>これを直すには、この行が何をしているのか考えなければなりません。まず <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random">Math.random()</a></code> を呼んでいます。これは 0 から 1 までのランダムな実数値を生成します。例えば 0.5675493843 などです。</p>

<pre class="brush: js">Math.random()</pre>

<p>次に <code>Math.random()</code> の実行結果を <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor">Math.floor()</a></code> に渡して、一番近い整数に切り捨てています。そしてその結果に 1 を加えます。</p>

<pre class="brush: js">Math.floor(Math.random()) + 1</pre>

<p>0 から 1 のランダムな実数を切り捨てると、結果は常に 0 となり、それに 1 を加えることで常に 1 となります。ランダムな数を切り捨てる前に 100 を乗算しなければなりません。次のコードは 0 から 99 を返すでしょう。</p>

<pre class="brush: js">Math.floor(Math.random()*100);</pre>

<p>さらに 1 を加えることで、1 から 100 のランダムな数字を返してくれるようになります。</p>

<pre class="brush: js">Math.floor(Math.random()*100) + 1;</pre>

<p>先ほどの 2 行をそれぞれ修正してください。保存して再度読み込むと、思い通りに動くようになっているでしょう！</p>

<h2 id="Other_common_errors">その他のよくあるエラー</h2>

<p>コードを書いていると、よくあるエラーは他にもあります。このセクションではそれらを紹介してみましょう。</p>

<h3 id="SyntaxError_missing_before_statement">SyntaxError: missing ; before statement</h3>

<p>たいてい、このエラーはコード行のどこかの末尾にセミコロン (;) がないことを意味しています。しかし、時にはもっと難解なこともあります。例えば <code>checkGuess()</code> 関数内のこの行を、</p>

<pre class="brush: js">let userGuess = Number(guessField.value);</pre>

<p>以下のように変更してみます。</p>

<pre class="brush: js">let userGuess === Number(guessField.value);</pre>

<p>そうすると、このエラーが吐かれます。違うことをやろうとしているように見えるのでしょう。値を変数に設定する代入演算子 (<code>=</code>) と、等値演算子 (<code>===</code>) を、これはある値が別の値と同じかどうかを判定して <code>true</code> または <code>false</code> を返しますが、間違わないようにしてください。</p>

<div class="note">
<p><strong>注</strong>: <a href="/ja/docs/Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement">SyntaxError: missing ; before statement</a>  のリファレンスページで、このエラーに関する詳細な説明が見られます。</p>
</div>

<h3 id="The_program_always_says_youve_won_regardless_of_the_guess_you_enter">プログラムが入力の内容に関わらずいつでも勝ちだと言ってくる</h3>

<p>これは代入と比較を混同している別の症状でしょう。たとえば、<code>checkGuess()</code> 関数内の、この行を</p>

<pre class="brush: js">if (userGuess === randomNumber) {</pre>

<p>以下のように変更してみます。</p>

<pre class="brush: js">if (userGuess = randomNumber) {</pre>

<p>判定で常に <code>true</code> が返るようになり、常にプレイヤーが勝ったことになってしまいます。気を付けましょう！</p>

<h3 id="SyntaxError_missing_after_argument_list">SyntaxError: missing ) after argument list</h3>

<p>これは単純です。大体は関数やメソッドの呼び出しで閉じ括弧を忘れたことを表しています。</p>

<div class="note">
<p><strong>注</strong>: <a href="/ja/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list">SyntaxError: missing ) after argument list</a> のリファレンスページで、このエラーに関する詳細な説明が見られます。</p>
</div>

<h3 id="SyntaxError_missing_after_property_id">SyntaxError: missing : after property id</h3>

<p>たいてい、このエラーは JavaScript のオブジェクトの書き方が正しくないことに関連しているのですが、</p>

<pre class="brush: js">function checkGuess() {</pre>

<p>上記のコードを以下のように変えても起きるでしょう。</p>

<pre class="brush: js">function checkGuess( {</pre>

<p>この変更でブラウザーは関数の内容を関数の引数として渡しているように勘違いしてしまいます。括弧には気を付けましょう！</p>

<h3 id="SyntaxError_missing_after_function_body">SyntaxError: missing } after function body</h3>

<p>これは簡単ですね。たいていの場合、関数や条件ブロックの終わりの閉じ波括弧が抜けていることを表します。<code>checkGuess()</code> 関数の最後の閉じ波括弧を消すと発生します。</p>

<h3 id="SyntaxError_expected_expression_got_string_or_SyntaxError_unterminated_string_literal">SyntaxError: expected expression, got '<em>string</em>' または SyntaxError: unterminated string literal</h3>

<p>これらのエラーは文字列の始まりもしくは終わりの引用符が抜けていることを表します。最初のエラーは、文字列の始めの引用符の代わりに、ブラウザーが予期しない文字列を見つけた (string には実際に見つけた文字列が入ります) ことを表し、2 つ目のエラーは文字列が引用符で終わっていないことを表します。</p>

<p>どのエラーにも言えることですが、上の例でも見たように、考えてください。エラーが起きた時に、エラーが起きた行の番号をみて、その行にエラーがあるか見てみます。エラーはその行に存在しないこともありますし、上述した理由以外で起きることもあるということを心に留めておいてください。</p>

<div class="note">
<p><strong>注</strong>: <a href="/ja/docs/Web/JavaScript/Reference/Errors/Unexpected_token">SyntaxError: Unexpected token</a> と <a href="/ja/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal">SyntaxError: unterminated string literal</a> のリファレンスページで、これらエラーに関する詳細な説明が見られます。</p>
</div>

<h2 id="Summary">まとめ</h2>

<p>やっとここまで来ましたね。簡単な JavaScript プログラムのエラーを見つけ出すための基本が理解できました。コードの間違いを解決するのがいつも簡単とは限りませんが、特に学習の最初の過程では、うまくいかない時にも寝る時間を数時間節約し、多少早く進捗をあげられるでしょう。</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>ここで挙げたもの以外にも多数の種類のエラーがあります。その意味を詳しく説明した資料を作成しています。 <a href="/ja/docs/Web/JavaScript/Reference/Errors">JavaScript エラーリファレンス</a>をご覧ください。</li>
 <li>この記事を読んでもまだ直し方がわからないエラーにコードで遭遇した場合は、助けを求めましょう！ <a href="https://discourse.mozilla.org/c/mdn/learn">MDN Discourse フォーラムの Learning カテゴリー</a> (英語) や <a href="https://chat.mozilla.org/#/room/#mdn:mozilla.org">MDN Web Docs room</a> (英語) などで聞いてください (訳注: 日本語では <a href="https://join.slack.com/t/mozillajp/shared_invite/MjI2NDMwODUwNzY5LTE1MDI4MjEyMjktYjE2MThlMmM4OA">Mozilla Japan コミュニティの Slack</a> など)。どんなエラーなのか教えてくれれば、助けてあげられるかもしれません。コードを見せてくれるのもいいですね。</li>
</ul>

<p>{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}</p>

<h2 id="In_this_module">このモジュール内</h2>

<ul>
 <li><a href="/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript">JavaScript って何?</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/First_steps/A_first_splash">JavaScript への最初のダイブ</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/First_steps/What_went_wrong">何が間違っている? JavaScript のトラブルシューティング</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/First_steps/Variables">必要な情報を保存する — 変数</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/First_steps/Math">JavaScript での数学入門 — 数値と演算子について</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/First_steps/Strings">テキストを扱う — JavaScript での文字列</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/First_steps/Useful_string_methods">便利な文字列メソッド</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/First_steps/Arrays">配列</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/First_steps/Silly_story_generator">評価: バカ話ジェネレーター</a></li>
</ul>
