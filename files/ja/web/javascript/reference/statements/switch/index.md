---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
tags:
  - JavaScript
  - Language feature
  - Reference
  - Statement
  - Web
  - 文
  - 言語機能
translation_of: Web/JavaScript/Reference/Statements/switch
---
<div>{{jsSidebar("Statements")}}</div>

<p><span class="seoSummary"><strong><code>switch</code> 文</strong>は<a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators">式</a>を評価し、その式の値が <code>case</code> 節と一致した場合は、その <code>case</code> に関連付けられた<a href="/ja/docs/Web/JavaScript/Reference/Statements">文</a>を実行し、一致した <code>case</code> の後にある文も同様に実行します。</span></p>

<div>{{EmbedInteractiveExample("pages/js/statement-switch.html", "taller")}}</div>

<p class="hidden">このインタラクティブなサンプルのソースは GitHub リポジトリに保存されています。インタラクティブなサンプルプロジェクトに貢献したい場合は <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンして、プルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">switch (<var>expression</var>) {
  case <var>value1</var>:
    // 式の結果が value1 に一致する場合に実行する文
    [break;]
  case <var>value2</var>:
    // 式の結果が value2 に一致する場合に実行する文
    [break;]
  ...
  case <var>valueN</var>:
    // 式の結果が valueN に一致する場合に実行する文
    [break;]
  [default:
    // 式の値に一致するものが存在しない場合に実行する文
    [break;]]
}</pre>

<dl>
 <dt><code><var>expression</var></code></dt>
 <dd>結果が各 <code>case</code> 節と一致するか調べる式。</dd>
 <dt><code>case <var>valueN</var></code> {{optional_inline}}</dt>
 <dd><code><var>expression</var></code> との照合に使用される <code>case</code> 節。 <code><var>expression</var></code> が特定の <code><var>valueN</var></code> と一致する場合、 <code>case</code> 節の中の処理は、 <code>switch</code> 文の末尾または <code>break</code> のいずれかに達するまで実行されます。</dd>
 <dt><code>default</code> {{optional_inline}}</dt>
 <dd><code>default</code> 節。 <code><var>expression</var></code> の値が <code>case</code> 節のいずれとも一致しない場合、この節が実行されます。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p><code>switch</code> 文はまず始めに式を評価します。次に、式が入力式の結果と評価される値が等しい最初の <code>case</code> 節を (<a href="/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">厳密等価演算子</a> <code>===</code> を使用して) 探し、その節に制御を移して、関連する処理を実行します。 (複数の <code>case</code> 節の値が指定された値と一致する場合、 <code>case</code> 節が互いに等しくなくても、最初に一致した <code>case</code> 節が選択されます。)</p>

<p>一致する <code>case</code> 節が見つからない場合、プログラムは省略可能な <code>default</code> 節を探し、見つかればその節に制御を移し、関連する文を実行します。<code>default</code> 節が見つからない場合、プログラムは <code>switch</code> の終了に続く文で実行を続けます。慣習では、<code>default</code> 節は最後の節ですが、そうである必要はありません。</p>

<p>省略可能な <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/break" title="JavaScript/Reference/Statements/break">break</a></code> 文は、各 <code>case</code> 節のラベルに関連付けられれており、一致した文を一回実行した後で <code>switch</code> を抜け出し、 <code>switch</code> に続く文から実行を継続することを保証します。もし <code>break</code> が省略されたら、プログラムは <code>switch</code> 文の中の次の文から実行を継続します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_switch" name="Using_switch"><code>switch</code> の使用</h3>

<p>次の例では、 <code>expr</code> が <code>Bananas</code> と評価された場合、プログラムは <code>case 'Bananas'</code> で値に一致し、関連付けられた文を実行します。 <code>break</code> と遭遇したとき、プログラムは <code>switch</code> から抜け出し、 <code>switch</code> に続く文を実行します。 <code>break</code> が省略された場合は、 <code>case 'Cherries'</code> に対する文も実行されます。</p>

<pre class="brush: js">switch (expr) {
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
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");
</pre>

<h3 id="What_happens_if_I_forgot_a_break" name="What_happens_if_I_forgot_a_break"><code>break</code> を置かないとどうなるか</h3>

<p><code>break</code> を置かなかった場合、スクリプトは基準を満たす <code>case</code> から実行され、その後の <code>case</code> も条件に合うかに関係なく実行されます。</p>

<p>こちらの例をご覧ください。</p>

<pre class="brush: js">var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo は 0 であり、基準を満たすためでこのブロックを実行する
    console.log(0);
    // メモ: ここに break を置くのを忘れている
  case 1: // 'case 0:' に break 文がないため、この case も実行される
    console.log(1);
    break; // この break に当たるため、'case 2:' には続かない
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}</pre>

<h3 id="Can_I_put_a_default_between_cases" name="Can_I_put_a_default_between_cases">case の間に <code>default</code> を置くことはできるか</h3>

<p>はい、できます！ 一致するものが見つからない場合、 JavaScript は <code>default</code> に戻ります。</p>

<pre class="brush: js">var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // この break に当たれば 'default:' に継続されることはない
  default:
    console.log('default')
    // 落下
  case 1:
    console.log('1');
}
</pre>

<p>他のすべての <code>case</code> の前に <code>default</code> を設定した場合にも機能します。</p>

<h3 id="Methods_for_multi-criteria_case" name="Methods_for_multi-criteria_case">複数基準の <code>case</code> の使用法</h3>

<p>この技法の出典はこちらです:</p>

<p><a href="http://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript">Switch statement multiple cases in JavaScript (Stack Overflow)</a></p>

<h4 id="Multi-case_single_operation" name="Multi-case_single_operation">複数の <code>case</code> とひとつの操作の対応付け</h4>

<p>この方法は、 <code>case</code> 節の配下に <code>break</code> がない場合に、次の <code>case</code> も基準を満たすかに関係なく実行されるという事実を活用します。 (<a href="What_happens_if_I_forgot_a_break"><code>break</code> を置かないとどうなるか</a>の節をご覧ください。)</p>

<p>これは連続した <code>case</code> 文でひとつの操作を行う例であり、4つの異なる値でまったく同じ操作を行います。</p>

<pre class="brush: js">var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
}</pre>

<h4 id="Multi-case_chained_operations" name="Multi-case_chained_operations">複数の <code>case</code> と一連の操作</h4>

<p>これは一連の <code>case</code> 節と複数の操作の例であり、与えられた整数によって、異なる出力を行います。ここから実行されるのが <code>case</code> 節を置いた順であり、数値の順とは限らないことが分かります。 JavaScript では、これらの <code>case</code> 文の中に文字列の定義を混入することもできます。</p>

<pre class="brush: js">var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}</pre>

<p>この例の出力は以下のとおりです:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">値</th>
   <th scope="col">出力するテキスト</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>foo</code> が <code>NaN</code> であるか、 <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>0</code> のいずれでもない</td>
   <td>Please pick a number from 0 to 5!</td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td>Output: So What Is Your Name?</td>
  </tr>
  <tr>
   <td><code>1</code></td>
   <td>Output: What Is Your Name?</td>
  </tr>
  <tr>
   <td><code>2</code></td>
   <td>Output: Your Name?</td>
  </tr>
  <tr>
   <td><code>3</code></td>
   <td>Output: Name?</td>
  </tr>
  <tr>
   <td><code>4</code></td>
   <td>Output: ?</td>
  </tr>
  <tr>
   <td><code>5</code></td>
   <td>Output: !</td>
  </tr>
 </tbody>
</table>

<h3 id="Block-scope_variables_within_switch_statements" name="Block-scope_variables_within_switch_statements"><code>switch</code> 文の中のブロックスコープの変数</h3>

<p>ECMAScript 2015 (ES6) に対応している最近のブラウザーでは、 {{jsxref("Statements/let", "let")}} および {{jsxref("Statements/const", "const")}} 文を使用してブロックスコープを持つ変数を宣言したい場合があるでしょう。</p>

<p>この例を見てみてください。</p>

<pre class="brush: js">const action = 'say_hello';
switch (action) {
  case 'say_hello':
    let message = 'hello';
    console.log(message);
    break;
  case 'say_hi':
    let message = 'hi';
    console.log(message);
    break;
  default:
    console.log('Empty action received.');
    break;
}</pre>

<p>この例では、おそらく予想していなかった <code>Uncaught SyntaxError: Identifier 'message' has already been declared</code> エラーを出力します。</p>

<p>これは、最初の <code>let message = 'hello';</code> と次の let 文 <code>let message = 'hi';</code> が競合しているためで、それぞれ別々な case 節である <code>case 'say_hello':</code> と <code>case 'say_hi':</code> に含まれていても発生します。つまるところ、これは両方の <code>let</code> 文が同じブロックスコープ内で同じ変数名の宣言を重複して行ったと解釈されます。</p>

<p>これは、 <code>case</code> 節を中括弧で囲むことで簡単に修正することができます。</p>

<pre class="brush: js">const action = 'say_hello';
switch (action) {
  case 'say_hello': <strong>{ // 中括弧を追加</strong>
    let message = 'hello';
    console.log(message);
    break;
  <strong>} // 中括弧を追加</strong>
  case 'say_hi': <strong>{ // 中括弧を追加</strong>
    let message = 'hi';
    console.log(message);
    break;
  <strong>} // 中括弧を追加</strong>
  default: <strong>{ // 中括弧を追加</strong>
    console.log('Empty action received.');
    break;
  <strong>} // 中括弧を追加</strong>
}</pre>

<p>このコードは仕様通り <code>hello</code> をコンソールに出力し、エラーは全く発生しません。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-switch-statement', 'switch statement')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.statements.switch")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/if...else", "if...else")}}</li>
</ul>
