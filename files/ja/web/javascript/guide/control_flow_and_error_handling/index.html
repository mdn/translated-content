---
title: 制御フローとエラー処理
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
tags:
  - Beginner
  - Decision making
  - Error Handling
  - Flow control
  - Guide
  - JavaScript
  - Logic
  - control
  - 'l10n:priority'
  - statements
translation_of: Web/JavaScript/Guide/Control_flow_and_error_handling
---
<p class="summary">{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}</p>

<p class="summary">JavaScript は、特に制御フロー文についてはコンパクトな文のセットに対応しており、アプリケーションに多様な対話的機能を組み込むために利用することができます。この節ではこれらの文の概要を説明します。</p>

<p><a href="/ja/docs/Web/JavaScript/Reference/Statements">JavaScript リファレンス</a>には、この章で紹介する文についての完全な詳細が載っています。また、JavaScript のコードではセミコロン (<code>;</code>) 文字で文を区切ります。</p>

<p>あらゆる JavaScript の式は、文でもあります。式に関する詳細については<a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators">式と演算子</a>を参照ください。</p>

<h2 id="Block_statement" name="Block_statement">ブロック文</h2>

<p>最も基本的な文は<dfn>ブロック文</dfn>で、文のグループ化に使います。ブロックは、一組の波括弧で区切られます。</p>

<pre class="syntaxbox notranslate">{
  <var>statement_1</var>;
  <var>statement_2</var>;
  ⋮
  <var>statement_n</var>;
}
</pre>

<h3 id="Example" name="Example">例</h3>

<p>ブロック文は一般に制御フロー文 (<code>if</code>, <code>for</code>, <code>while</code>) で用いられます。</p>

<pre class="brush: js notranslate">while (x &lt; 10) {
  x++;
}
</pre>

<p>ここでは <code>{ x++; }</code> がブロック文となります。</p>

<div class="blockIndicator note">
<p><strong>重要</strong>: ECMAScript 2015 (6<sup>th</sup> edition) より前の JavaScript にはブロックスコープが<strong>ありません</strong>。古い JavaScript では、ブロック内で導入された変数のスコープは、そのブロックがある関数やスクリプトになり、それらの変数を設定した影響は、そのブロックを越えて持続します。つまり、<em>ブロック文はスコープを定義しない</em>ということです。</p>

<p>「単独の」ブロックも正しい構文ですが、C や Java のブロックで提供されるものとは異なる結果をもたらします。例えば、</p>

<pre class="brush: js notranslate">var x = 1;
{
  var x = 2;
}
console.log(x); // 2 を出力
</pre>

<p>ここで <code>2</code> が出力されるのは、ブロック内の <code>var x</code> 文がブロックの前の <code>var x</code> 文と同じスコープ内にあるためです。(C や Java では、同様のコードで <code>1</code> が出力されます。)</p>

<p><strong>ECMAScript 2015 から</strong>は、<code>let</code> 文や <code>const</code> による変数宣言はブロックスコープとなります。詳しくは {{jsxref("Statements/let", "let")}} 文や {{jsxref("Statements/const", "const")}} のリファレンスページをご覧ください。</p>
</div>

<h2 id="Conditional_statements" name="Conditional_statements">条件文</h2>

<p>条件文は、指定した条件が true の場合に実行する命令の集まりです。JavaScript は <code>if...else</code> と <code>switch</code> の 2 つの条件文に対応しています。</p>

<h3 id="if...else_statement" name="if...else_statement"><code>if...else</code> 文</h3>

<p><code>if</code> を使用すると、論理条件が <code>true</code> の場合に文を実行することができます。任意の <code>else</code> 節を使用すると、条件が <code>false</code> の場合にも文を実行することができます。</p>

<p><code>if</code> 文は次のように使用します。</p>

<pre class="syntaxbox notranslate">if (<var>condition</var>) {
  <var>statement_1</var>;
} else {
  <var>statement_2</var>;
}</pre>

<p>条件は、<code>true</code> または <code>false</code> と評価される任意の式にすることができます。（<code>true</code> と <code>false</code> の評価の説明については、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description">Boolean</a> を参照してください。）</p>

<p>条件が <code>true</code> と評価された場合、<code><var>statement_1</var></code> が実行されます。そうでなければ、<code><var>statement_2</var></code> が実行されます。<code><var>statement_1</var></code> と <code><var>statement_2</var></code> は、入れ子になった <code>if</code> 文も含めて、任意の文にすることができます。</p>

<p>以下のように、<code>else if</code> を使用した文を組み合わせて、複数の条件を順番にテストすることもできます。</p>

<pre class="syntaxbox notranslate">if (<var>condition_1</var>) {
  <var>statement_1</var>;
} else if (<var>condition_2</var>) {
  <var>statement_2</var>;
} else if (<var>condition_n</var>) {
  <var>statement_n</var>;
} else {
  <var>statement_last</var>;
}
</pre>

<p>複数の条件がある場合、<code>true</code> と評価された最初の論理条件のみが実行されます。複数の文を実行するには、ブロックステートメント (<code>{ … }</code>) 内にグループ化します。</p>

<h4 id="Best_practice" name="Best_practice">ベストプラクティス</h4>

<p>一般的に、常にブロック文を使用するのが優れた方法です。<em>特に</em> <code>if</code> 文を入れ子にしたコードで有効です。</p>

<pre class="syntaxbox notranslate">if (<var>condition</var>) {
  <var>statement_1_runs_if_condition_is_true</var>;
  <var>statement_2_runs_if_condition_is_true</var>;
} else {
  <var>statement_3_runs_if_condition_is_false</var>;
  <var>statement_4_runs_if_condition_is_false</var>;
}
</pre>

<p>条件式内で単純な代入を行わないでください。コードを一見した際に、代入を等値条件と見間違えるおそれがあるためです。</p>

<p>例えば、このようにはコードを<em>書かない</em>でください。</p>

<pre class="example-bad brush: js notranslate">// "x == y" と読み間違えるおそれがある。
if (x = y) {
  /* ここに文が来る */
}
</pre>

<p>条件式で代入を行う必要がある場合、一般的な方法は次のように、代入式をさらに丸括弧でくくることです。</p>

<pre class="example-good brush: js notranslate">if ((x = y)) {
  /* ここに文が来る */
}
</pre>

<h4 id="Falsy_values" name="Falsy_values">false と評価される値</h4>

<p>以下の値は <code>false</code> と評価されます (また、{{Glossary("Falsy")}} な値と呼ばれています)。</p>

<ul>
 <li><code>false</code></li>
 <li><code>undefined</code></li>
 <li><code>null</code></li>
 <li><code>0</code></li>
 <li><code>NaN</code></li>
 <li>空の文字列 (<code>""</code>)</li>
</ul>

<p>上記以外の—オブジェクトを含む—すべての値は、条件文に渡されると <code>true</code> と評価されます。</p>

<div class="blockIndicator note">
<p><strong>注意:</strong> プリミティブな真偽値の <code>true</code> と <code>false</code> を、{{jsxref("Boolean")}} オブジェクトの true や false という値と混同しないでください。</p>

<p>例:</p>

<pre class="brush: js notranslate">var b = new Boolean(false);
if (b)         // この条件は true に評価される
if (b == true) // この条件は false に評価される
</pre>
</div>

<h4 id="Example_2" name="Example_2">例</h4>

<p>次の例で、関数 <code>checkData</code> は <code>Text</code> オブジェクトに含まれている文字数が 3 である場合に <code>true</code> を返し、そうでない場合はアラートを表示して <code>false</code> を返します。</p>

<pre class="brush: js notranslate">function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
        'Enter exactly three characters. ' +
        `${document.form1.threeChar.value} is not valid.`);
    return false;
  }
}
</pre>

<h3 id="switch_statement" name="switch_statement"><code>switch</code> 文</h3>

<p><code>switch</code> 文を使うと、プログラムは式を評価し、その式の値を <code>case</code> ラベルと照合します。一致すると、プログラムはそのラベルに関連付けられた文を実行します。</p>

<p><code>switch</code> 文は次のようになります。</p>

<pre class="syntaxbox notranslate">switch (<var>expression</var>) {
  case <var>label_1</var>:
    <var>statements_1</var>
    [break;]
  case <var>label_2</var>:
    <var>statements_2</var>
    [break;]
    …
  default:
    <var>statements_def</var>
    [break;]
}
</pre>

<p>JavaScript は上記の switch 文を次のように評価します。</p>

<ul>
 <li>プログラムは最初に、式の値に一致するラベルを持つ <code>case</code> 節を探し、関連付けられた文を実行します。</li>
 <li>一致するラベルがない場合、プログラムはオプションの <code>default</code> 節を探します。
  <ul>
   <li>存在する場合は <code>default</code> 節に制御を移し、関連付けられた文を実行します。</li>
   <li><code>default</code> 節が見つからない場合、プログラムは <code>switch</code> 文の末尾の後に続く文から実行を再開します。</li>
   <li>(慣例により、<code>default</code> 節は最後の節に置きますが、そうしなければいけないわけではありません。)</li>
  </ul>
 </li>
</ul>

<h4 id="break_statements" name="break_statements">break 文</h4>

<p>オプションの <code>break</code> 文は、それぞれの <code>case</code> 節と関連付けられ、該当する文が実行されるとプログラムが <code>switch</code> から抜け出し、<code>switch</code> の次の文から実行が継続されることを保証します。<code>break</code> が省略されると、プログラムは <code>switch</code> 文の内部の実行を続けます (そして、次の <code>case</code> を順番に評価します)。</p>

<h4 id="Example_3" name="Example_3">例</h4>

<p>次の例では、<code><var>fruittype</var></code> が '<code>Bananas</code>' と評価された場合、case '<code>Bananas</code>' に一致して、それに関連付けら <span class="seoSummary">cv</span> れた文を実行します。<code>break</code> 文に出くわすとプログラムは <code>switch</code> から抜けて、<code>switch</code> の後に続く文を実行します。<code>break</code> を省略すると、<code>case 'Cherries'</code> の文も実行されます。</p>

<pre class="brush: js notranslate">switch (<var>fruittype</var>) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
   console.log(`Sorry, we are out of ${fruittype}.`);
}
console.log("Is there anything else you'd like?");</pre>

<h2 id="Exception_handling_statements" name="Exception_handling_statements">例外処理文</h2>

<p><code>throw</code> 文を使用して例外を発生させ、<code>try...catch</code> 文を使用して例外を処理することができます。</p>

<ul>
 <li><a href="#throw_statement"><code>throw</code> 文</a></li>
 <li><a href="#try...catch_statement"><code>try...catch</code> 文</a></li>
</ul>

<h3 id="Exception_types" name="Exception_types">例外の型</h3>

<p>JavaScript では、ほぼどのようなオブジェクトでも例外として投げることができます。とはいえ、必ずしも投げられるオブジェクトすべてが同等に作られているわけではありません。数値や文字列をエラーとして投げる方法がよく用いられますが、こうした用途のために特別に作られた例外データ型を使用した方がより効率的な場合もあります。</p>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects#Fundamental_objects">ECMAScript 例外</a></li>
 <li>{{domxref("DOMException")}} と {{domxref("DOMError")}}</li>
</ul>

<h3 id="throw_statement" name="throw_statement"><code>throw</code> 文</h3>

<p><code>throw</code> 文は、例外を投げるために使用します。例外を投げるには、投げたい値を含む式を指定してください。</p>

<pre class="syntaxbox notranslate">throw <var>expression</var>;
</pre>

<p>特定の型の式だけではなく、あらゆる式を投げることができます。下記のコードでは、さまざまな型の例外を投げています。</p>

<pre class="brush: js notranslate">throw 'Error2';   // 文字列型
throw 42;         // 数値型
throw true;       // 論理型
throw {toString: function() { return "これはオブジェクトです！"; } };
</pre>

<div class="note">
<p><strong>メモ:</strong> 例外を投げる際にオブジェクトを指定することができます。そして、<code>catch</code> ブロックでそのオブジェクトのプロパティを参照することができます。</p>
</div>

<pre class="brush: js notranslate">// UserException というオブジェクト型を作成
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

// 文字列として使用されるとき（例 : エラーコンソール上）に
// 例外を整形する
UserException.prototype.toString = function() {
  return `${this.name}: "${this.message}"`;
}

// UserException のインスタンスを作成し、それを投げる
throw new UserException('Value too high');</pre>

<h3 id="try...catch_statement" name="try...catch_statement"><code>try...catch</code> 文</h3>

<p><code>try...catch</code> 文はテストしたい文のブロックを指定し、さらに投げられる例外に対する 1 つ以上の対処方法を指定します。例外が投げられると、<code>try...catch</code> 文がそれを受け取ります。</p>

<p><code>try...catch</code> 文は 1 つの <code>try</code> ブロックと 0 個以上の <code>catch</code> ブロックで構成されます。<code>try</code> ブロックは 1 つ以上の文を含み、<code>catch</code> ブロックは <code>try</code> ブロックで例外が投げられた場合の処理を指定する文が含まれます。</p>

<p>要するに、成功した場合に実行したい <code>try</code> ブロックと、失敗した場合に制御を移行させたい <code>catch</code> ブロックで構成されています。<code>try</code> ブロック内（もしくは <code>try</code> ブロック内から呼び出された関数内）のいずれかの文が例外を投げると、制御は<em>すぐに</em> <code>catch</code> ブロックに移ります。<code>try</code> ブロックで例外が投げられなかった場合、<code>catch</code> ブロックはスキップされます。<code>finally</code> ブロックは <code>try</code> および <code>catch</code> ブロックを実行した後に実行しますが、<code>try...catch</code> 文の後に続く文より先に実行されます。</p>

<p>次の例では <code>try...catch</code> 文を使用しています。この例では渡された値に基づいて、配列から月の名前を取り出す関数を実行します。値に対応する月の数字 (<code>1</code>–<code>12</code>) が無い場合は <code>"InvalidMonthNo"</code> という値を持つ例外が投げられ、<code>catch</code> ブロックの中の文は <code><var>monthName</var></code> という変数に <code>'unknown'</code> という値をセットします。</p>

<pre class="brush: js notranslate">function getMonthName(mo) {
  mo = mo - 1; // 月の数字を配列のインデックスに合わせる (1 = Jan, 12 = Dec)
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; // throw キーワードが使われている
  }
}

try { // 実行を試みる文
  monthName = getMonthName(myMonth); // この関数が例外を投げる場合がある
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // 例外オブジェクトをエラーハンドラーに渡す
}
</pre>

<h4 id="The_catch_Block" name="The_catch_Block"><code>catch</code> ブロック</h4>

<p><code>catch</code> ブロックを用いることで、<code>try</code> ブロックで生じうるすべての例外を扱うことができます。</p>

<pre class="syntaxbox notranslate">catch (<var>catchID</var>) {
  <var>statements</var>
}
</pre>

<p><code>catch</code> ブロックには、<code>throw</code> 文で指定される値を保持しておく識別子 (上記の構文における <code><var>catchID</var></code>) を指定します。投げられた例外についての情報を得るのに、この識別子を使います。</p>

<p>JavaScript は <code>catch</code> ブロックに入るときにこの識別子を作成します。識別子は <code>catch</code> ブロックの区間だけ存続します。つまり、<code>catch</code> ブロックの実行が終わると、その識別子はもう使えなくなります。</p>

<p>例えば、次のコードは例外を投げます。例外が生じると、制御が <code>catch</code> ブロックに移ります。</p>

<pre class="brush: js notranslate">try {
  throw 'myException'; // 例外を生成
}
catch (err) {
  // ここには例外を扱う文が入る
  logMyErrors(err);    // 例外オブジェクトをエラーハンドラに渡す
}
</pre>

<div class="blockIndicator note">
<p><strong>ベストプラクティス:</strong> <code>catch</code> ブロック内でコンソールにエラーをログ出力する場合は、<code>console.log()</code> よりも <code>console.error()</code> がデバッグ目的では推奨されています。これはメッセージをエラーとして書式化し、ページによって生成されたエラーメッセージの一覧に追加します。</p>
</div>

<h4 id="The_finally_block" name="The_finally_block"><code>finally</code> ブロック</h4>

<p><code>finally</code> ブロックは、<code>try</code> および <code>catch</code> ブロックの実行<em>後</em>に実行される文が入ります。また、<code>finally</code> ブロックの中のコードは <code>try…catch…finally</code> に続く分が実行される<em>前</em>に実行されます。</p>

<p>また、<code>finally</code> ブロックは例外が発生する<em>かどうかにかかわらず</em>実行されるということに注意することも大切です。また、例外が発生したら、<code>finally</code> ブロック内の文は発生した例外が <code>catch</code> ブロックで処理されなくても実行されます。</p>

<p><code>finally</code> ブロックを使用することで、例外発生時に適切にスクリプトを停止させることができます。例えば、スクリプトで使用していたリソースを解放しなければならない場合などです。</p>

<p>次の例ではファイルを開き、そのファイルを使用する文を実行します (サーバー側 JavaScript ではファイルにアクセスできます)。ファイルを開いている間に発生すると、スクリプトが停止する前に <code>finally</code> ブロックでそのファイルを閉じます。ここで <code>finally</code> を使用することで、エラーが発生した場合であってもファイルが開かれたままにならないことを<em>保証</em>します。</p>

<pre class="brush: js notranslate">openMyFile();
try {
  writeMyFile(theData); // ここでエラーが投げられる可能性がある
} catch(e) {
  handleError(e); // エラーを受け取り、それを処理する
} finally {
  closeMyFile(); // 常にリソースが閉じられる
}
</pre>

<p><code>finally</code> ブロックが値を返す場合、その値は <code>try</code> および <code>catch</code> ブロックの <code>return</code> 文にかかわらず <code>try…catch…finally</code> 全体が生成する返値になります。</p>

<pre class="brush: js notranslate">function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true;    // この返値は、finally ブロックが
                    // 完了するまで保留となる
    console.log(2); // ここまで到達しない
  } finally {
    console.log(3);
    return false;   // 直前の "return" が上書きされる
    console.log(4); // ここまで到達しない
  }
  // ここで "return false" が実行される
  console.log(5);   // ここまで到達しない
}
console.log(f()); // 0, 1, 3, false
</pre>

<p><code>finally</code> ブロックによる返値の上書きは、<code>catch</code> ブロック内で発生した、または再発生した例外にも適用されます。</p>

<pre class="brush: js notranslate">function f() {
  try {
    throw 'bogus';
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // この throw 文は finally ブロックが
             // 完了するまで保留になる
  } finally {
    return false; // 直前の "throw" が上書きされる
  }
  // ここで "return false" が実行される
}

try {
  console.log(f());
} catch(e) {
  // ここには到達しない
  // f() を実行した際、`finally` ブロックが false を返し、
  // 上記の `catch` の中にある `throw` を上書する
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
// false</pre>

<h4 id="Nesting_try...catch_Statements" name="Nesting_try...catch_Statements">try...catch 文の入れ子</h4>

<p>1 つ以上の <code>try...catch</code> 文を入れ子にすることができます。</p>

<p>内側の <code>try...catch</code> 文に <code>catch</code> ブロックが<em>ない</em>場合は次のようになります。</p>

<ol>
 <li><code>finally</code> ブロックを含む必要があります。そして、</li>
 <li>囲んでいる <code>try...catch</code> 文の <code>catch</code> ブロックがエラーの照合先としてチェックされます。</li>
</ol>

<p>詳しくは、<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/try...catch">try...catch</a></code> の中の <a href="/ja/docs/Web/JavaScript/Reference/Statements/try...catch#Nested_try-blocks">nested try-blocks</a> を参照してください。</p>

<h3 id="Utilizing_Error_objects" name="Utilizing_Error_objects">Error オブジェクトの活用</h3>

<p>エラーの種類に応じて、<code>name</code> や <code>message</code> プロパティを使ってより詳細なメッセージが得られるようにすることができます。</p>

<p><code>name</code> は <code>Error</code> のクラス全般 (例えば <code>DOMException</code> や <code>Error</code>) を表し、一方 <code>message</code> は通常、エラーオブジェクトを文字列に変換したものより簡潔なメッセージを表します。</p>

<p>独自の例外を発生させて、これらのプロパティを有効に活用したい場合 (<code>catch</code> ブロックで独自の例外とシステムの例外とを区別したくない場合など)、<code>Error</code> コンストラクターが使えます。</p>

<p>例えば、次のようにします。</p>

<pre class="brush: js notranslate">function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
⋮
try {
  doSomethingErrorProne();
} catch (e) {               // `console.error()` を実際に使ってログを出力してみます
  console.error(e.name);    // 'Error' をログ出力
  console.error(e.message); // 'The message'、または JavaScript のエラーメッセージをログ出力
}

</pre>

<p>{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}</p>
