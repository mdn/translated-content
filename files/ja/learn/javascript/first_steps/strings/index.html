---
title: テキストを扱う — JavaScript での文字列
slug: Learn/JavaScript/First_steps/Strings
tags:
  - Article
  - Beginner
  - CodingScripting
  - Guide
  - JavaScript
  - Join
  - Quotes
  - concatenation
  - 'l10n:priority'
  - strings
translation_of: Learn/JavaScript/First_steps/Strings
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}</div>

<p class="summary">プログラミングでは文字の羅列を文字列と呼びますが、次はこれを学習しましょう。この記事では、JavaScript でよく使われる、文字列を作ったり、引用符をエスケープしたり、文字列を結合したりといった、文字列について本当に知っておくべきことだけを見てみましょう。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件:</th>
   <td>基本的なコンピュータの知識および HTML と CSS への理解、JavaScript とは何かを知っている。</td>
  </tr>
  <tr>
   <th scope="row">目的:</th>
   <td>JavaScript の文字列操作に慣れる。</td>
  </tr>
 </tbody>
</table>

<h2 id="The_power_of_words" name="The_power_of_words">言葉の力</h2>

<p>言葉はコミュニケーションの大部分を担う、人類にとって、とても大切なものです。Web は情報の共有やコミュニケーションができるように設計された大規模な文字ベースの媒体ですので、そこで使用される言葉を操作できると便利です。{{glossary("HTML")}} は意味付けされ、構造化されたテキストを提供し、{{glossary("CSS")}} がきれいに体裁を整える事を可能にし、そして JavaScript には、挨拶用の文章を生成したり、適切なラベルを表示したり、言葉を並べ替えたりといった、文字列を操作するたくさんの機能が含まれています。</p>

<p>今までこのコースでお見せしたプログラムのほとんどが、何らかの文字列操作を含んでいましたね。</p>

<h2 id="Strings_—_the_basics" name="Strings_—_the_basics">文字列 — 基本</h2>

<p>文字列は一見すると数値と同じように見えますが、少し深く見ていくと、違いに気づくことでしょう。まずは慣らすために基本的なコードを<a href="/ja/docs/Learn/Common_questions/What_are_browser_developer_tools">ブラウザの開発者ツール</a>に入力してみましょう。</p>

<h3 id="Creating_a_string" name="Creating_a_string">文字列を作る</h3>

<ol>
 <li>初めに、次の行を入力してみましょう。
  <pre class="brush: js notranslate">let string = '革命はテレビでは放送されない。';
string;</pre>
  数値のところでやったのと同じように、変数を宣言して、値を入れて初期化しています。そして値を返しています。ただ違うのは、文字列が引用符で囲まれて書かれていることです。</li>
 <li>もし引用符で囲わななかったり、どちらか一方を書き忘れたりすると、エラーになります。
  <pre class="brush: js example-bad notranslate">let badString = これはテストです;
let badString = 'これはテストです;
let badString = これはテストです';</pre>
  これらの行は動きません。なぜなら引用符で文字を囲わなければ、変数名や、プロパティ名や、予約語などと解釈されてしまうためです。もしブラウザが引用符を見つけられないと、エラーとなります (たとえば "missing ; before statement" [文の前に、セミコロンが見つかりません] のようなエラーです)。2行目の例のように、ブラウザが引用符を見つけても、文字列の終わりが示されていなければ、これもエラーとなります ("unterminated string literal" [文字列リテラルの終わりがありません] というエラーです)。このようなエラーがプログラムで起きたら、全ての文字列について、引用符の付け忘れがないかを確認してください。</li>
 <li>続くコードは先ほど変数を <code>string</code> という名前で宣言していれば、動くでしょう。試してみましょう。
  <pre class="brush: js notranslate">let badString = string;
badString;</pre>
  <code>badString</code> という変数に <code>string</code> という変数の値が設定されたことでしょう。</li>
</ol>

<h3 id="Single_quotes_vs._double_quotes" name="Single_quotes_vs._double_quotes">シングルクォーテーション vs. ダブルクォーテーション</h3>

<ol>
 <li>JavaScript では、文字列を囲む引用符として、シングルクォーテーションとダブルクォーテーションを使用することができます。以下のどちらの例も正しく動きます。
  <pre class="brush: js notranslate">let sgl = 'シングルクォーテーション';
let dbl = "ダブルクォーテーション";
sgl;
dbl;</pre>
 </li>
 <li>どちらを使ってもほとんど違いはありません。どちらを使うかは好みの問題ですが、どちらを使うかは統一するべきでしょう。両方を同時に使うと混乱してしまいます、特に同じ文字列に二種類の引用符を使ってしまうときなど！次の行はエラーです。
  <pre class="brush: js example-bad notranslate">let badQuotes = 'なんということだ！";</pre>
 </li>
 <li>ブラウザは上の文字列が閉じていないと認識します。なぜなら、文字列を囲うのに使用していない引用符はその文字列の中に含めることができるからです。たとえば次の例は問題ありません。
  <pre class="brush: js notranslate">let sglDbl = 'Would you eat a "fish supper"?';
let dblSgl = "I'm feeling blue.";
sglDbl;
dblSgl;</pre>
 </li>
 <li>ただし、文字列の中に、囲んでいるのと同じ種類の引用符を含めることはできません。以下の例は文字列の終わりがわからないので、ブラウザを混乱させてしまいます。
  <pre class="brush: js example-bad notranslate">let bigmouth = 'I've got no right to take my place...';</pre>
  それでは同じ種類の引用符を含めるにはどのようにすればよいでしょうか。</li>
</ol>

<h3 id="Escaping_characters_in_a_string" name="Escaping_characters_in_a_string">文字列をエスケープする</h3>

<p>先ほどのコード行を直すには、問題となっている引用符をエスケープする必要があります。文字のエスケープとは、その文字が、コードではなく、文字列の一部であるとブラウザに認識させる書き方です。JavaScript ではバックスラッシュ ( \ [環境によっては円マーク (￥)]) を文字の前におくことでエスケープすることができます。</p>

<pre class="brush: js notranslate">let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;</pre>

<p>これでうまく動きます。 同じ方法で他の文字をエスケープする (例えば <code>\"</code>) ことができ、それ以外にも特別なコードがあります。詳細は<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation">エスケープ記法</a>を見てください。</p>

<h2 id="Concatenating_strings" name="Concatenating_strings">文字列を連結する</h2>

<ol>
 <li>コンカチする (concatenate) という単語は「結合する」ことを表すプログラミングの用語です。JavaScript で文字列を結合するにはプラス (+) 演算子を使用します。数値の加算をするのに使用した演算子ですが、今回は違う動作をします。下の例をコンソールに入力してみてください。
  <pre class="brush: js notranslate">let one = 'こんにちは、';
let two = 'ご機嫌いかがでしょう？';
let joined = one + two;
joined;</pre>
  この例の実行結果は <code>joined</code> という変数に格納され、値は "こんにちは、ご機嫌いかがでしょう？" となります。</li>
 <li>今の例は 2 つの文字列だけを結合しましたが、<code>+</code> 演算子が変数と変数の間にあれば、いくつでも結合することができます。例えば、次の例を試しましょう。
  <pre class="brush: js notranslate">let multiple = one + one + one + one + two;
multiple;</pre>
 </li>
 <li>変数のほかに、実際の文字列と混ぜて使うこともできます。
  <pre class="brush: js notranslate">let response = one + '私は元気です。' + two;
response;</pre>
 </li>
</ol>

<div class="note">
<p><strong>注</strong>: コード中に、シングルクォーテーションおよびダブルクォーテーションで囲われた、実際の文字列を書いたときそれは<strong>文字列リテラル</strong>と呼ばれます。</p>
</div>

<h3 id="Concatenation_in_context" name="Concatenation_in_context">様々な結合</h3>

<p>実際に文字列が結合されている場面を見てみましょう。これはこのコースの最初の方からの例です。</p>

<pre class="brush: html notranslate">&lt;button&gt;押してみて！&lt;/button&gt;</pre>

<pre class="brush: js notranslate">let button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('あなたの名前は？');
  alert('こんにちは、' + name + 'さん。初めまして！');
}</pre>

<p>{{ EmbedLiveSample('Concatenation_in_context', '100%', 50, "", "", "hide-codepen-jsfiddle") }}</p>

<p>4行目でユーザに答えてもらうため、{{domxref("Window.prompt()", "Window.prompt()")}}関数を使用して、テキストを入力できるポップアップダイアログを表示し、ユーザによって入力された文字列を <code>name</code> 変数に格納しています。そして、5行目で{{domxref("Window.alert()", "Window.alert()")}}関数を使用し、2 つの文字列リテラルと <code>name</code> 変数を結合して別のポップアップに文字列を作り上げています。</p>

<h3 id="Numbers_vs._strings" name="Numbers_vs._strings">数値 vs. 文字列</h3>

<ol>
 <li>それでは文字列と数値を足したら (もしくは結合したら) 何が起きるでしょうか。コンソールに入力してみましょう。
  <pre class="brush: js notranslate">'フロント' + 242;
</pre>
  エラーが起きると予想したかもしれませんが、普通に動きます。文字列を数値として表すのには意味がありませんが、数値を文字で表すのはわかりますね。つまりブラウザはどうやら、数値を文字列に変換し、2 つの文字列としてから結合しているようです。</li>
 <li>数字同士でやっても同じです。数字を引用符で囲むと文字列になります。次の行を実行してみてください。(<code>typeof</code>演算子で変数が文字列なのか数値なのか調べています。)
  <pre class="brush: js notranslate">let myDate = '19' + '67';
typeof myDate;</pre>
 </li>
 <li>もし、数値を文字列に変換したかったり、文字列を数値に変換したかったりする場合には、次の 2 つの生成方法を見てください。
  <ul>
   <li>{{jsxref("Number")}}オブジェクトは渡されたものすべてを数値に変換します。次の例を実行してみましょう。
    <pre class="brush: js notranslate">let myString = '123';
let myNum = Number(myString);
typeof myNum;</pre>
   </li>
   <li>反対に全ての数値は <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString">toString()</a></code> という文字列に変換するメソッドを持っています。
    <pre class="brush: js notranslate">let myNum = 123;
let myString = myNum.toString();
typeof myString;</pre>
   </li>
  </ul>
  この生成方法は状況によってはとても便利です。例えば、ユーザがフォームのテキストフィールドに数字を入力した場合、入力された値は文字列です。しかし、その数字を使って計算したい場合、数値にしなければなりません。そんな時は <code>Number()</code> に任せましょう。これは実際に<a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L54">数字当てゲームの 54行目</a>で使用した方法です。</li>
</ol>

<h2 id="テンプレートリテラル">テンプレートリテラル</h2>

<p>遭遇する可能性のある別のタイプの文字列構文は、<strong>テンプレートリテラル</strong>（テンプレート文字列と呼ばれることもあります）です。 これは、より柔軟で読みやすい文字列を提供する新しい構文です。</p>

<div class="blockIndicator note">
<p>注: 以下の例をブラウザの JavaScript コンソールに入力して、どのような結果が得られるかを確認してください。</p>
</div>

<p>標準の文字列リテラルをテンプレートリテラルに変換するには、引用符 (<code>' '</code> または <code>" "</code>) をバッククォート文字 (<code>` `</code>) に置き換える必要があります。</p>

<p>簡単な例。</p>

<pre class="brush: js notranslate">let song = 'Fight the Youth';</pre>

<p>テンプレートリテラルに変換します。</p>

<pre class="brush: js notranslate">song = `Fight the Youth`;</pre>

<p>文字列を連結したり、文字列内に式の結果を含めたりする場合、従来の文字列で書くのは面倒です。</p>

<pre class="brush: js notranslate">let score = 9;
let highestScore = 10;
let output = 'I like the song "' + song + '". I gave it a score of ' + (score/highestScore * 100) + '%.';</pre>

<p>テンプレートリテラルはこれを非常に簡単に行えます。</p>

<pre class="brush: js notranslate">output = `I like the song "${ song }". I gave it a score of ${ score/highestScore * 100 }%.`;</pre>

<p>複数の文のピースを繋げる必要はありません。文章全体を1組のバッククォートで囲むだけです。文字列内に変数または式を含める場合は、プレースホルダーと呼ばれる <code>${ }</code> 構造内に含めます。</p>

<p>テンプレートリテラル内に複雑な式を含めることもできます。</p>

<pre class="brush: js notranslate">let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round((examScore/examHighestScore*100)) }%). ${ examScore &gt;= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;</pre>

<ul>
 <li>最初の2つのプレースホルダーは非常に単純で、変数を参照する単純な文字列のみが含まれています。</li>
 <li>3つ目は、パーセンテージの結果を計算し、それを最も近い整数に丸めます。</li>
 <li>4つ目は、三項演算子を使用してスコアが特定の値を超えているかどうかを確認し、結果に応じて合格または不合格のメッセージを出力します。</li>
</ul>

<p>従来の文字列リテラルで複数の行に分割する場合は、改行文字 <code>\n</code> を含める必要がありました。</p>

<pre class="brush: js notranslate">output = 'I like the song "' + song + '".\nI gave it a score of ' + (score/highestScore * 100) + '%.';</pre>

<p>テンプレートリテラルはソースコードの改行をそのまま再現するため、改行文字は不要になります。 以下は同じ結果を得ます。</p>

<pre class="brush: js notranslate">output = `I like the song "${ song }".
I gave it a score of ${ score/highestScore * 100 }%.`;</pre>

<p>できるだけ早くテンプレートリテラルの使用に慣れることをお勧めします。 これらは最新のブラウザで十分にサポートされており、サポートが不足しているのは Internet Explorer だけです。私たちの例の多くはまだ標準の文字列リテラルを使用していますが、今後さらに多くのテンプレートリテラルを含める予定です。</p>

<p>高度な機能の例と詳細については、<a href="/ja/docs/Web/JavaScript/Reference/Template_literals">テンプレートリテラル</a>のリファレンスページを参照してください。</p>

<h2 id="あなたのスキルをテストしてください！">あなたのスキルをテストしてください！</h2>

<p>この記事の最後に到達しましたが、最も重要な情報を覚えていますか？ 先に進む前に、この情報を記憶していることを確認するためのいくつかの<a href="/ja/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings">テスト</a>を見つけることができます。これには次の記事の知識も必要なので、最初にそれを読むことをお勧めします。</p>

<h2 id="Conclusion" name="Conclusion">結論</h2>

<p>ここまでが JavaScript での文字列の基礎になります。次の記事では、JavaScript で使える文字列操作の組み込み関数と、それを使って思い通りの形に文字列を変換する方法を、その基礎の上に建てていきましょう。</p>

<p>{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}</p>

<h2 id="In_this_module" name="In_this_module">このモジュール内</h2>

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
