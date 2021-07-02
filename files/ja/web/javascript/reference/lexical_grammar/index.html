---
title: 字句文法
slug: Web/JavaScript/Reference/Lexical_grammar
tags:
  - JavaScript
  - Keyword
  - Lexical Grammar
  - Literal
  - キーワード
  - リテラル
  - 字句文法
translation_of: Web/JavaScript/Reference/Lexical_grammar
---
<div>{{JsSidebar("More")}}</div>

<p>このページでは、 JavaScript の字句文法について説明します。 ECMAScript スクリプトのソーステキストは、左から右へスキャンされ、入力要素、すなわちトークン、制御文字、行末、コメント、{{glossary("whitespace", "ホワイトスペース")}}の並びに変換されます。 ECMAScript も、特定のキーワードとリテラルを定義しており、文を終了するにはセミコロンを自動挿入するためのルールがあります。</p>

<h2 id="Control_characters" name="Control_characters">制御文字</h2>

<p>制御文字は、視覚的表現を有していないものの、テキストの解釈を制御するために使用されます。</p>

<table class="standard-table">
 <caption>Unicode の書式制御文字</caption>
 <thead>
  <tr>
   <th>コードポイント</th>
   <th>名称</th>
   <th>略語</th>
   <th>説明</th>
  </tr>
 </thead>
 <thead>
  <tr>
   <td><code>U+200C</code></td>
   <td>ゼロ幅非接合子</td>
   <td>&lt;ZWNJ&gt;</td>
   <td>特定の言語において、合字に接合されることを防ぐために、文字の間に配置されます。(<a href="https://ja.wikipedia.org/wiki/%E3%82%BC%E3%83%AD%E5%B9%85%E9%9D%9E%E6%8E%A5%E5%90%88%E5%AD%90">Wikipedia</a>).</td>
  </tr>
  <tr>
   <td><code>U+200D</code></td>
   <td>ゼロ幅接合子</td>
   <td>&lt;ZWJ&gt;</td>
   <td>特定の言語において、通常は接合されない文字を、接合した形を使用して文字を表示するために文字間に配置されます。 (<a href="https://ja.wikipedia.org/wiki/%E3%82%BC%E3%83%AD%E5%B9%85%E6%8E%A5%E5%90%88%E5%AD%90">Wikipedia</a>)</td>
  </tr>
  <tr>
   <td><code>U+FEFF</code></td>
   <td>バイトオーダーマーク</td>
   <td>&lt;BOM&gt;</td>
   <td>スクリプトの先頭において、 Unicode を使用することと、そのテキストのバイト順をマークします。 (<a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%83%88%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC%E3%83%9E%E3%83%BC%E3%82%AF">Wikipedia</a>).</td>
  </tr>
 </thead>
</table>

<h2 id="White_space" name="White_space">ホワイトスペース</h2>

<p>{{glossary("whitespace", "ホワイトスペース")}}はソースのテキストの読みやすさを向上させ、トークンを互いに区別します。これらの文字は通常、コードの機能性には不要なものです。 <a href="http://en.wikipedia.org/wiki/Minification_%28programming%29">Minification tools</a> を使用して、転送する必要があるデータの量を削減するためにホワイトスペースを除去することがよく行われます。</p>

<table class="standard-table">
 <caption>ホワイトスペース文字</caption>
 <thead>
  <tr>
   <th>コードポイント</th>
   <th>名称</th>
   <th>略語</th>
   <th>説明</th>
   <th>エスケープシーケンス</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>U+0009</td>
   <td>文字単位のタブ</td>
   <td>&lt;HT&gt;</td>
   <td>水平タブ</td>
   <td>\t</td>
  </tr>
  <tr>
   <td>U+000B</td>
   <td>行単位のタブ</td>
   <td>&lt;VT&gt;</td>
   <td>垂直タブ</td>
   <td>\v</td>
  </tr>
  <tr>
   <td>U+000C</td>
   <td>フォームフィード</td>
   <td>&lt;FF&gt;</td>
   <td>改ページの制御文字 (<a href="http://en.wikipedia.org/wiki/Page_break#Form_feed">Wikipedia</a>).</td>
   <td>\f</td>
  </tr>
  <tr>
   <td>U+0020</td>
   <td>空白</td>
   <td>&lt;SP&gt;</td>
   <td>通常の空白</td>
   <td></td>
  </tr>
  <tr>
   <td>U+00A0</td>
   <td>ノーブレークスペース</td>
   <td>&lt;NBSP&gt;</td>
   <td>通常の空白だが、改行を行ってよい位置ではない</td>
   <td></td>
  </tr>
  <tr>
   <td>Others</td>
   <td>他の Unicode の空白文字</td>
   <td>&lt;USP&gt;</td>
   <td><a href="http://en.wikipedia.org/wiki/Space_%28punctuation%29#Spaces_in_Unicode">Spaces in Unicode on Wikipedia</a></td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Line_terminators" name="Line_terminators">行末文字</h2>

<p>{{glossary("Whitespace", "ホワイトスペース")}}文字に加えて、行末文字もソースのテキストの読みやすさを改善するために使用されます。しかし、行末文字は JavaScript の実行に影響を与える場合があり、禁止されている場所もいくらかあります。行末文字は<a href="#Automatic_semicolon_insertion">自動的なセミコロンの挿入</a>の処理にも影響を与えます。行末文字は<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">正規表現</a>の <strong>\s</strong> クラスに一致します。</p>

<p>以下の Unicode コードポイントのみが ECMAScript では行末文字として扱われ、他の改行文字はホワイトスペースとして扱われます (例えば、次の行、 NEL、 U+0085 はホワイトスペースと見なされます)。</p>

<table class="standard-table">
 <caption>行末文字</caption>
 <thead>
  <tr>
   <th>コードポイント</th>
   <th>名称</th>
   <th>略語</th>
   <th>説明</th>
   <th>エスケープシーケンス</th>
  </tr>
 </thead>
 <thead>
 </thead>
 <tbody>
  <tr>
   <td>U+000A</td>
   <td>ラインフィード</td>
   <td>&lt;LF&gt;</td>
   <td>UNIX システムでの改行文字です。</td>
   <td>\n</td>
  </tr>
  <tr>
   <td>U+000D</td>
   <td>キャリッジリターン</td>
   <td>&lt;CR&gt;</td>
   <td>コモドールと初期の Mac システムでの改行文字です。</td>
   <td>\r</td>
  </tr>
  <tr>
   <td>U+2028</td>
   <td>ラインセパレーター</td>
   <td>&lt;LS&gt;</td>
   <td><a href="http://en.wikipedia.org/wiki/Newline">Wikipedia</a></td>
   <td></td>
  </tr>
  <tr>
   <td>U+2029</td>
   <td>改段落</td>
   <td>&lt;PS&gt;</td>
   <td><a href="http://en.wikipedia.org/wiki/Newline">Wikipedia</a></td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Comments" name="Comments">コメント</h2>

<p>コメントは、ヒント、メモ、提案、警告を JavaScript のコードに追加するために使用されます。これにより、コードがより読みやすく、より理解しやすいものなります。また、コードが実行されないよう無効にするために使用することができます。これは、貴重なデバッグツールになることがあります。</p>

<p>JavaScript には、コード内にコメントを割り当てる方法が 2 つあります。</p>

<p>一番目の方法は <code>//</code> コメントです。つまり、これは同じ行にある、その後のすべてのテキストをコメントにします。例えば、</p>

<pre class="brush: js">function comment() {
  // This is a one line JavaScript comment
  console.log('Hello world!');
}
comment();
</pre>

<p>二番目の方法は <code>/* */</code> スタイルで、もっとずっと柔軟なものです。</p>

<p>例えば、単一行に利用した場合は次のようになります。</p>

<pre class="brush: js">function comment() {
  /* This is a one line JavaScript comment */
  console.log('Hello world!');
}
comment();</pre>

<p>複数行のコメントも下記のように作成することができます。</p>

<pre class="brush: js">function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log('Hello world!');
}
comment();</pre>

<p>必要であれば、行の途中でコメントを使用することもできますが、これはコードが読みにくくなることがあるので注意が必要です。</p>

<pre class="brush: js">function comment(x) {
  console.log('Hello ' + x /* insert the value of x */ + ' !');
}
comment('world');</pre>

<p>また、コードをコメントで囲むことで、コードが実行されないよう無効にすることができます。</p>

<pre class="brush: js">function comment() {
  /* console.log('Hello world!'); */
}
comment();</pre>

<p>この場合、 <code>console.log()</code> の呼び出しはコメント内部にあるので、実行されることはありません。何行分のコードであっても、このようにして無効にすることができます。</p>

<h2 id="Hashbang_comments" name="Hashbang_comments">ハッシュバンコメント</h2>

<p>特殊な三番目のコメントの構文である<strong>ハッシュバンコメント</strong>は、 ECMAScript で標準化の途中にあるものです (<a href="https://github.com/tc39/proposal-hashbang">Hashbang Grammar proposal</a> を参照してください)。</p>

<p>ハッシュバンコメントは、ちょうど単一行コメント (<code>//</code>) のように動作しますが、 <code>#!</code> で始まり、<strong>スクリプトやモジュールの絶対的な開始位置にある場合のみ有効</strong>です。 <code>#!</code> の前にホワイトスペースも許されないことに注意してください。このコメントは <code>#!</code> の後から最初の行の末尾までのすべての文字で構成されます。このコメントは1つだけが許可されます。</p>

<p>ハッシュバンコメントは、スクリプトを実行したい特定の JavaScript インタープリターへのパスを指定します。例えば次のようになります。</p>

<pre class="brush: js">#!/usr/bin/env node

console.log("Hello world");
</pre>

<div class="blockIndicator note">
<p><strong>メモ</strong>: JavaScript のハッシュバンコメントは、ファイルを正しいインタープリターで実行するために使用される <a href="https://en.wikipedia.org/wiki/Shebang_(Unix)">UNIX のシバン</a>を模倣したものです。</p>
</div>

<div class="blockIndicator warning">
<p>ハッシュバンコメントの前に <a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%83%88%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC%E3%83%9E%E3%83%BC%E3%82%AF">BOM</a> があってもブラウザーでは動作しますが、ハッシュバンのあるスクリプトで BOM を使用することは推奨されていません。 BOM は Unix/Linux でスクリプトを実行しようとすると動作しません。したがって、シェルから直接スクリプトを実行したい場合は BOM の付かない UTF-8 を使用してください。</p>
</div>

<p><code>#!</code> の形のコメントは JavaScript インタープリターを指定するためにだけ使用してください。他の用途ではすべて <code>//</code> のコメント (または複数行コメント) を使用してください。</p>

<h2 id="Keywords" name="Keywords">キーワード</h2>

<h3 id="Reserved_keywords_as_of_ECMAScript_2015" name="Reserved_keywords_as_of_ECMAScript_2015">ECMAScript 2015 における予約キーワード</h3>

<ul class="threecolumns">
 <li>{{jsxref("Statements/break", "break")}}</li>
 <li>{{jsxref("Statements/switch", "case")}}</li>
 <li>{{jsxref("Statements/try...catch", "catch")}}</li>
 <li>{{jsxref("Statements/class", "class")}}</li>
 <li>{{jsxref("Statements/const", "const")}}</li>
 <li>{{jsxref("Statements/continue", "continue")}}</li>
 <li>{{jsxref("Statements/debugger", "debugger")}}</li>
 <li>{{jsxref("Statements/default", "default")}}</li>
 <li>{{jsxref("Operators/delete", "delete")}}</li>
 <li>{{jsxref("Statements/do...while", "do")}}</li>
 <li>{{jsxref("Statements/if...else", "else")}}</li>
 <li>{{jsxref("Statements/export", "export")}}</li>
 <li>{{jsxref("Statements/class", "extends")}}</li>
 <li>{{jsxref("Statements/try...catch", "finally")}}</li>
 <li>{{jsxref("Statements/for", "for")}}</li>
 <li>{{jsxref("Statements/function", "function")}}</li>
 <li>{{jsxref("Statements/if...else", "if")}}</li>
 <li>{{jsxref("Statements/import", "import")}}</li>
 <li>{{jsxref("Operators/in", "in")}}</li>
 <li>{{jsxref("Operators/instanceof", "instanceof")}}</li>
 <li>{{jsxref("Operators/new", "new")}}</li>
 <li>{{jsxref("Statements/return", "return")}}</li>
 <li>{{jsxref("Operators/super", "super")}}</li>
 <li>{{jsxref("Statements/switch", "switch")}}</li>
 <li>{{jsxref("Operators/this", "this")}}</li>
 <li>{{jsxref("Statements/throw", "throw")}}</li>
 <li>{{jsxref("Statements/try...catch", "try")}}</li>
 <li>{{jsxref("Operators/typeof", "typeof")}}</li>
 <li>{{jsxref("Statements/var", "var")}}</li>
 <li>{{jsxref("Operators/void", "void")}}</li>
 <li>{{jsxref("Statements/while", "while")}}</li>
 <li>{{jsxref("Statements/with", "with")}}</li>
 <li>{{jsxref("Operators/yield", "yield")}}</li>
</ul>

<h3 id="Future_reserved_keywords" name="Future_reserved_keywords">今後の予約済みキーワード</h3>

<p>以下のものは、 ECMAScript の仕様によって今後のキーワードとして予約されています。これらは現時点では特別な機能を持っていませんが、将来は持つ可能性があるので、識別子として使用することはできません。</p>

<p>以下のものは常に予約されています。</p>

<ul>
 <li><code>enum</code></li>
</ul>

<p>以下のものは、 strict モードで遭遇した場合のみ予約語になります。</p>

<ul class="threecolumns">
 <li><code>implements</code></li>
 <li><code>interface</code></li>
 <li>{{jsxref("Statements/let", "let")}}</li>
 <li><code>package</code></li>
 <li><code>private</code></li>
 <li><code>protected</code></li>
 <li><code>public</code></li>
 <li><code>static</code></li>
</ul>

<p>以下のものは、モジュールコードで遭遇した場合のみ予約語になります。</p>

<ul>
 <li><code>await</code></li>
</ul>

<h4 id="Future_reserved_keywords_in_older_standards" name="Future_reserved_keywords_in_older_standards">旧仕様にあった今後の予約キーワード</h4>

<p>以前の ECMAScript の仕様書 (ECMAScript 1 から 3 まで) では、以下のものが将来のキーワードとして予約されています。</p>

<ul class="threecolumns">
 <li><code>abstract</code></li>
 <li><code>boolean</code></li>
 <li><code>byte</code></li>
 <li><code>char</code></li>
 <li><code>double</code></li>
 <li><code>final</code></li>
 <li><code>float</code></li>
 <li><code>goto</code></li>
 <li><code>int</code></li>
 <li><code>long</code></li>
 <li><code>native</code></li>
 <li><code>short</code></li>
 <li><code>synchronized</code></li>
 <li><code>throws</code></li>
 <li><code>transient</code></li>
 <li><code>volatile</code></li>
</ul>

<p>加えて、 <code>null</code>, <code>true</code>, <code>false</code> の各リテラルは、 ECMAScript では識別子として使用することができません。</p>

<h3 id="Reserved_word_usage" name="Reserved_word_usage">予約語の使用</h3>

<p>予約語は実際には (<em>IdentifierName</em> ではなく) 識別子にのみ適用されます。 <a href="http://es5.github.com/#A.1">es5.github.com/#A.1</a> に記載されているように、これらはすべて<em>IdentifierName</em> であり、<em>ReservedWord</em> を除外しません。</p>

<pre class="brush: js">a.import
a['import']
a = { import: 'test' }.
</pre>

<p>一方、以下のものは<em>Identifier</em> であり、<em>IdentifierName</em> から予約語を除外したものであるからです。識別子は、<em>FunctionDeclaration</em>,<em>FunctionExpression</em>,<em>VariableDeclaration</em> などのために使用されます。 Identifiers は<em>FunctionDeclaration</em>,<em>FunctionExpression</em>,<em>VariableDeclaration</em> などについて使用されます。<em>IdentifierNames</em> は<em>MemberExpression</em>,<em>CallExpression</em> などについて使用されます。</p>

<pre class="brush: js">function import() {} // 違反</pre>

<h2 id="Literals" name="Literals">リテラル</h2>

<h3 id="Null_literal" name="Null_literal">Null リテラル</h3>

<p>詳細については {{jsxref("null")}} をご覧ください。</p>

<pre class="brush: js">null</pre>

<h3 id="Boolean_literal" name="Boolean_literal">真偽値リテラル</h3>

<p>詳細について、 {{jsxref("Boolean")}} をご覧ください。</p>

<pre class="brush: js">true
false</pre>

<h3 id="Numeric_literals" name="Numeric_literals">数値リテラル</h3>

<p>{{jsxref("Number")}} および {{jsxref("BigInt")}} 型が数値リテラルを使用します。</p>

<h4 id="Decimal" name="Decimal">10進数</h4>

<pre class="brush: js">1234567890
42

// 先頭にゼロがあるものを使用する場合は注意してください
0888 // 888 は10進数として解釈されます
0777 // 8進数として解釈され、10進数では 511 です。
</pre>

<p>なお、10進数リテラルはゼロ (<code>0</code>) から始め、他の10進数の数字を続けることができますが、 <code>0</code> に続く数字がすべて8より小さい場合は、その数値が8進数として解釈されることに注意してください。 JavaScript では、この場合に例外が発生しませんので、 {{bug(957513)}} をご覧ください。 {{jsxref("parseInt", "parseInt()")}} についてのページもご覧ください。</p>

<h4 id="Binary" name="Binary">2進数</h4>

<p>2進数の構文は、先頭のゼロに続いて小文字または大文字のラテン文字 "B" を使用します (<code>0b</code> または <code>0B</code>)。この構文は ECMAScript 2015 の新しい構文なので、下記のブラウザー互換性表をご覧ください。 <code>0b</code> の後の数字が 0 または 1 でない場合は、 {{jsxref("SyntaxError")}} が "Missing binary digits after 0b" の内容で発生します。</p>

<pre class="brush: js">var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607</pre>

<h4 id="Octal" name="Octal">8進数</h4>

<p>8進数の構文は、先頭のゼロに続いて小文字または大文字のラテン文字"O" を使用します (<code>0o</code> または <code>0O</code>)。この構文は ECMAScript 2015 の新しい構文なので、下記のブラウザー互換性表をご覧ください。 <code>0o</code> の後の数字が範囲 (01234567) 外の場合、 {{jsxref("SyntaxError")}} が "Missing octal digits after 0o" の内容で発生します。</p>

<pre class="brush: js">var n = 0O755; // 493
var m = 0o644; // 420

// ゼロだけで始めることもできます (上記の10進数についてのメモを参照)
0755
0644
</pre>

<h4 id="Hexadecimal" name="Hexadecimal">16進数</h4>

<p>16進数の構文は、先頭のゼロに続いて小文字または大文字のラテン文字"X" を使用します (<code>0x</code> または <code>0X</code>)。 0x の後の数字が範囲 (0123456789ABCDEF) 外の場合、 {{jsxref("SyntaxError")}} が "Identifier starts immediately after numeric literal" の内容で発生します。</p>

<pre class="brush: js">0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
</pre>

<h4 id="BigInt_literal" name="BigInt_literal">BigInt リテラル</h4>

<p>{{jsxref("BigInt")}} 型は JavaScript のプリミティブな数値であり、自由な精度の整数を表すことができます。 BigInt リテラルは、整数の末尾に <code>n</code> を追加することで作成されます。</p>

<pre class="brush: js">123456789123456789n     (10進数)
0o777777777777n         (8進数)
0x123456789ABCDEFn      ("hex" または16進数)
0b11101001010101010101n (2進数)
</pre>

<p>なお、先頭がゼロだけの8進数は <code>BigInt</code> では動作しません。</p>

<pre class="brush: js example-bad">// 0755n
// SyntaxError: invalid BigInt syntax</pre>

<p>8進数の <code>BigInt</code> 数値では、常にゼロの後に "o" (大文字でも小文字でも) を付けて使用してください。</p>

<pre class="brush: js example-good">0o755n</pre>

<p><code>BigInt</code> についての詳細な情報は、 <a href="/ja/docs/Web/JavaScript/Data_structures#BigInt_type">JavaScript データ構造</a>をご覧ください。</p>

<h4 id="Numeric_separators" name="Numeric_separators">数値の区切り文字</h4>

<p>数値リテラルの可読性を高めるために、アンダースコア (<code>_</code>, <code>U+005F</code>) を区切り文字として使用することができます。</p>

<pre class="brush: js">// 10進数の区切り文字
1_000_000_000_000
1_050.95

// 2進数の区切り文字
0b1010_0001_1000_0101

// 8進数の区切り文字
0o2_2_5_6

// 16進数の区切り文字
0xA0_B0_C0

// BigInt の区切り文字
1_000_000_000_000_000_000_000n
</pre>

<p>なお、以下の制限があります。</p>

<pre class="brush: js example-bad">// 連続して2つ以上のアンダースコアは許可されていません
100__000; // SyntaxError

// 数値リテラルの末尾に置くことは許可されていません
100_; // SyntaxError

// 先頭の 0 の後に使用することはできません
0_1; // SyntaxError
</pre>

<h3 id="Object_literals" name="Object_literals">オブジェクトリテラル</h3>

<p>詳細については、 {{jsxref("Object")}} と<a href="/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer">オブジェクト初期化子</a>をご覧ください。</p>

<pre class="brush: js">var o = { a: 'foo', b: 'bar', c: 42 };

// ES2015 で導入された短縮表記
var a = 'foo', b = 'bar', c = 42;
var o = {a, b, c};

// 以前の表記
var o = { a: a, b: b, c: c };
</pre>

<h3 id="Array_literals" name="Array_literals">配列リテラル</h3>

<p>詳細については {{jsxref("Array")}} をご覧ください。</p>

<pre class="brush: js">[1954, 1974, 1990, 2014]</pre>

<h3 id="String_literals" name="String_literals">文字列リテラル</h3>

<p>文字列リテラルは、単一引用符または二重引用符に囲まれた零個以上の Unicode コードポイントです。 Unicode コードポイントはエスケープシーケンスで表すこともできます。以下の引用符を閉じるコードポイントを除いて、すべてのコードポイントが文字列リテラルに現れることができます。</p>

<ul>
 <li>U+005C \ (バックスラッシュ)</li>
 <li>U+000D &lt;CR&gt;,</li>
 <li>and U+000A &lt;LF&gt;.</li>
</ul>

<p><a href="https://github.com/tc39/proposal-json-superset">proposal to make all JSON text valid ECMA-262</a> より以前は、 U+2028 &lt;LS&gt; および U+2029 &lt;PS&gt; は文字列リテラル内にエスケープせずに現れることができませんでした。</p>

<p>すべてのコードポイントが、エスケープシーケンスの形で現れることができます。文字列リテラルは ECMAScript の文字列値として評価されます。これらの String の値を生成する際に、 Unicode コードポイントは UTF-16 エンコードされます。</p>

<pre class="brush: js">'foo'
"bar"</pre>

<h4 id="Hexadecimal_escape_sequences" name="Hexadecimal_escape_sequences">16進エスケープシーケンス</h4>

<p>16進エスケープシーケンスは <code>\x</code> に続いてちょうど2桁の16進数から成り、 0x0000 から 0x00FF までのコード単位またはコードポイントを表します。</p>

<pre class="brush: js">'\xA9' // "©"
</pre>

<h4 id="Unicode_escape_sequences" name="Unicode_escape_sequences">Unicode エスケープシーケンス</h4>

<p>Unicode エスケープシーケンスは <code>\u</code> に続いてちょうど4桁の16進数から成ります。これで UTF-16 エンコーディングのコード単位を表します。コードポイント U+0000 から U+FFFF までは、コード単位とコードポイントは等しくなります。コードポイント U+10000 から U+10FFFF までは、2つのエスケープシーケンスで2つのコード単位 (サロゲートペア) を表す必要があります。サロゲートペアはコードポイントで区別されます。</p>

<p>See also {{jsxref("String.fromCharCode()")}} and {{jsxref("String.prototype.charCodeAt()")}}.</p>

<pre class="brush: js">'\u00A9' // "©" (U+A9)</pre>

<h4 id="Unicode_コードポイントエスケープ">Unicode コードポイントエスケープ</h4>

<p>Unicode コードポイントエスケープは <code>\u{</code> に続いて16進数のコードポイントが続き、 <code>}</code> が続きます。16進数の値は 0 から 0x10FFFF までの範囲に含まれている必要があります。 U+10000 から U+10FFFF までの範囲のコードポイントを、サロゲートペアとして表す必要はありません。コードポイントエスケープは ECMAScript 2015 (ES6) で JavaScript に追加されました。</p>

<p>{{jsxref("String.fromCodePoint()")}} または {{jsxref("String.prototype.codePointAt()")}} もご覧ください。</p>

<pre class="brush: js">'\u{2F804}' // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
'\uD87E\uDC04'</pre>

<h3 id="Regular_expression_literals" name="Regular_expression_literals">正規表現リテラル</h3>

<p>詳細については {{jsxref("RegExp")}} を参照してください。</p>

<pre class="brush: js">/ab+c/g

// 「空の」正規表現リテラル
// 単一行コメントと区別するために、空のキャプチャしない
// グループが必要です。
/(?:)/</pre>

<h3 id="Template_literals" name="Template_literals">テンプレートリテラル</h3>

<p>詳細について、<a href="/ja/docs/Web/JavaScript/Reference/template_strings">template strings</a> をご覧ください。</p>

<pre class="brush: js">`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag `string text ${expression} string text`</pre>

<h2 id="Automatic_semicolon_insertion" name="Automatic_semicolon_insertion">自動セミコロン挿入</h2>

<p>一部の <a href="/ja/docs/Web/JavaScript/Reference/Statements">JavaScript 文</a>はセミコロンで終わる必要があります。したがって、自動セミコロン挿入 (ASI) の影響を受けます。:</p>

<ul>
 <li>空の文</li>
 <li><code>let</code>, <code>const</code>, 変数定義</li>
 <li><code>import</code>, <code>export</code>, モジュール宣言</li>
 <li>式の文</li>
 <li><code>debugger</code></li>
 <li><code>continue</code>, <code>break</code>, <code>throw</code></li>
 <li><code>return</code></li>
</ul>

<p>ECMAScript 仕様書は、<a href="https://tc39.github.io/ecma262/#sec-rules-of-automatic-semicolon-insertion">セミコロン挿入の3つの規則</a>に言及しています。</p>

<p>1. 文法上許されない位置で<a href="#Line_terminators">行末文字</a>または "}" に遭遇したとき、セミコロンが前に挿入されます。</p>

<pre class="brush: js">{ 1 2 } 3

// 上記の文は、 ASI によって次のように変換されます

{ 1 2 ;} 3;</pre>

<p>2. トークンの入力ストリームの終末が検出され、パーサーが単一の入力ストリームを完全なプログラムとして解釈できない場合、末尾にセミコロンが挿入されます。</p>

<p>ここで <code>++</code> は、変数 <code>b</code> に適用される <a href="/ja/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment">後置演算子</a>としては扱われません。というのも、行末文字が <code>b</code> と<code>++</code> の間に見られるからです。</p>

<pre class="brush: js">a = b
++c

// 上記の文は、 ASI によって次のように変換されます

a = b;
++c;
</pre>

<p>3. 文法上、成果が制限された文の直後に行末文字が来た時、末尾にセミコロンが挿入されます。以下の文が "no LineTerminator here" 規則を持っています。</p>

<ul>
 <li>後置演算子 (<code>++</code> および <code>--</code>)</li>
 <li><code>continue</code></li>
 <li><code>break</code></li>
 <li><code>return</code></li>
 <li><code>yield</code>, <code>yield*</code></li>
 <li><code>module</code></li>
</ul>

<pre class="brush: js">return
a + b

// 上記の文は、 ASI によって次のように変換されます

return;
a + b;
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-ecmascript-language-lexical-grammar', 'Lexical Grammar')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-ecmascript-language-lexical-grammar', 'Lexical Grammar')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>追加: 2進数リテラル と 8進数リテラル、 Unicode コードポイントエスケープ、テンプレート</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-7', 'Lexical Conventions')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2("ES1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.grammar")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/">Jeff Walden: Binary and octal numbers</a></li>
 <li><a href="http://mathiasbynens.be/notes/javascript-escapes">Mathias Bynens: JavaScript character escape sequences</a></li>
 <li>{{jsxref("Boolean")}}</li>
 <li>{{jsxref("Number")}}</li>
 <li>{{jsxref("RegExp")}}</li>
 <li>{{jsxref("String")}}</li>
</ul>
