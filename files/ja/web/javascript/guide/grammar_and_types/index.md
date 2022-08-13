---
title: 文法とデータ型
slug: Web/JavaScript/Guide/Grammar_and_types
tags:
  - Guide
  - JavaScript
  - 'l10n:priority'
translation_of: Web/JavaScript/Guide/Grammar_and_types
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}</div>

<p class="summary">この節では JavaScript の基本文法、変数宣言、データ型、リテラルについて説明します。</p>

<h2 id="Basics" name="Basics">基本</h2>

<p>JavaScript は Java, C, C++ から構文の多くを取り入れていますが、Awk, Perl, Python からも影響を受けています。</p>

<p>また、JavaScript は<strong>大文字と小文字を区別</strong>し、また <strong>Unicode</strong> 文字セットを使用しています。例えば、Früh という単語 (ドイツ語で "early" という意味) を変数名として使用することができます。</p>

<pre class="brush: js notranslate">let Früh = "foobar"</pre>

<p>ただし、JavaScript は大文字と小文字を区別するので、<code>früh</code> という変数は <code>Früh</code> と同じではありません。</p>

<p>JavaScript では、命令は{{Glossary("Statement", "文")}} (statement) と呼ばれ、セミコロン (;) によって区切られています。</p>

<p>文が単独の行で書かれている場合、文の後にセミコロンは必要ではありません。しかし、行の中に複数の文が必要な場合は、セミコロンで区切る<em>必要</em>があります。</p>

<div class="blockIndicator note">
<p>ECMAScript も文末に自動的にセミコロンを挿入する規則があります (<a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion">ASI</a>)。(詳しくは、JavaScript の <a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar">字句文法</a>についての詳細なリファレンスを参照してください。)</p>
</div>

<p>必須ではないとしても、文の後に常にセミコロンを記述することをお勧めします。これによって、コード中にバグが発生する機会を減らすことができます。</p>

<p>JavaScript のソーステキストは左から右にスキャンされ、<em>トークン</em>、<em>制御文字</em>、<em>改行文字</em>、<em>コメント</em>、{{glossary("whitespace", "ホワイトスペース")}}等の入力要素の並びに変換されます。(空白、タブ、改行はホワイトスペースとみなされます。)</p>

<h2 id="Comments" name="Comments">コメント</h2>

<p><strong>コメント</strong>の構文は C++ やその他の多くの言語と一緒です。</p>

<pre class="brush: js notranslate">// 一行のコメント

/* もっと長い、
   複数行からなるコメント
 */

/* ただし、/* 入れ子のコメントは */ できず、SyntaxError となります */
</pre>

<p>コメントはホワイトスペースのように扱われ、スクリプトの実行から除外されます。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: 一部の JavaScript ファイルの先頭で、<code>#!/usr/bin/env node</code> のような第三の種類のコメントを見かけることもあるかもしれません。</p>

<p>これは<strong>ハッシュバンコメント</strong>構文と呼ばれ、スクリプトの実行に使用したい特定の JavaScript エンジンへのパスを指定するのに使用される特殊なコメントです。詳しくは<a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Hashbang_comments">ハッシュバンコメント</a>を参照してください。</p>
</div>

<h2 id="Declarations" name="Declarations">宣言</h2>

<p>JavaScript には変数を宣言する方法が 3種類あります。</p>

<dl>
 <dt>{{jsxref("Statements/var", "var")}}</dt>
 <dd>変数を宣言し、ある値に初期化することもできる。</dd>
 <dt>{{jsxref("Statements/let", "let")}}</dt>
 <dd>ブロックスコープのローカル変数を宣言し、ある値に初期化することもできる。</dd>
 <dt>{{jsxref("Statements/const", "const")}}</dt>
 <dd>ブロックスコープで読み取り専用の名前付き定数を宣言する。</dd>
</dl>

<h3 id="Variables" name="Variables">変数</h3>

<p>変数はアプリケーションで値を表す記号的な名前として使用します。変数の名前は{{Glossary("Identifier", "識別子")}}とも呼ばれ、一定のルールに従わなくてはなりません。</p>

<p>JavaScript の識別子は必ず文字、アンダースコア (<code>_</code>)、あるいはドル記号 (<code>$</code>) から始まらなくてはなりません。続く文字には数字 (<code>0</code>–<code>9</code>) も使用できます。</p>

<p>JavaScript は大文字・小文字を区別するため、使用できる文字には "<code>A</code>" から "<code>Z</code>" (大文字) に加えて "<code>a</code>" から "<code>z</code>" (小文字) も含まれます。</p>

<p><code>å</code> や <code>ü</code> などの ISO 8859-1 や Unicode 文字 (詳しくは<a href="https://mathiasbynens.be/notes/javascript-identifiers-es6">このブログ記事</a>を参照) も識別子に使用することができます。<a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals">Unicode エスケープシーケンス</a>も識別子に使用することができます。</p>

<p><code>Number_hits</code> 、<code>temp99</code> 、<code>_name</code> などは、正しい名前の一例です。</p>

<h3 id="Declaring_variables" name="Declaring_variables">変数の宣言</h3>

<p>変数を宣言する方法は 2通りあります。</p>

<ul>
 <li>キーワード {{jsxref("Statements/var", "var")}} を使う (例 <code>var x = 42</code>)。この構文は、<em>実行コンテキスト</em>によって、<strong>ローカル変数</strong>と<strong>グローバル変数</strong>の両方の宣言に使用できます。</li>
 <li>{{jsxref("Statements/const", "const")}} または {{jsxref("Statements/let", "let")}} キーワードを使う。例えば、<code>let y = 13</code>。この構文はブロックスコープのローカル変数を宣言することができます。(以下にある<a href="#Variable_scope">変数のスコープ</a>をご覧ください。)</li>
</ul>

<p><a href="/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">分割代入</a>構文を使用して、<a href="/ja/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals">オブジェクトリテラル</a>から値を展開する変数を宣言することができます。例えば、<code>let { bar } = foo</code> とします。これは <code>bar</code> という名前の変数を作成し、オブジェクト <code>foo</code> の同名キーから対応する値を代入します。</p>

<p>また、<code>x = 42</code> のように、単純に値を変数に代入することもできます。この形は、<strong><a href="/ja/docs/Web/JavaScript/Reference/Statements/var#Description">未宣言のグローバル</a></strong>変数を生成します。strict モードの JavaScript では警告が発生します。未宣言のグローバル変数は、よく予期しない動作を引き起こします。したがって、宣言されていないグローバル変数を使用することはお勧めしません。</p>

<h3 id="Evaluating_variables" name="Evaluating_variables">変数の評価</h3>

<p><code>var</code> または <code>let</code> 文を使用して初期値なしで宣言された変数は、{{jsxref("undefined")}} の値をとります。</p>

<p>未宣言の変数にアクセスしようとすると、{{jsxref("ReferenceError")}} 例外が発生します。</p>

<pre class="brush: js notranslate">var a;
console.log('変数 a の値は ' + a); // 変数 a の値は undefined

console.log('変数 b の値は ' + b); // 変数 b の値は undefined
var b;
// これは後述の「変数の巻き上げ」を読むまでは謎かもしれません

console.log('変数 c の値は ' + c); // キャッチされない ReferenceError: c が定義されていない

let x;
console.log('変数 x の値は ' + x); // 変数 x の値は undefined

console.log('変数 y の値は ' + y); // キャッチされない ReferenceError: y が定義されていない
let y; </pre>

<p><code>undefined</code> を使うと変数に値が入っているかは確認できます。以下のコードでは変数 <code>input</code> に値が代入されておらず、<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/if...else">if</a></code> 文は <code>true</code> と評価されます。</p>

<pre class="brush: js notranslate">var input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}
</pre>

<p><code>undefined</code> は真偽値のコンテキストで使用されると <code>false</code> としてふるまいます。例えば以下のコードでは、<code>myArray</code> の要素が <code>undefined</code> であるために関数 <code>myFunction</code> が実行されます。</p>

<pre class="brush: js notranslate">var myArray = [];
if (!myArray[0]) myFunction();
</pre>

<p><code>undefined</code> は数値のコンテキストで使用されると <code>NaN</code> に変換されます。</p>

<pre class="brush: js notranslate">var a;
a + 2;  // NaN と評価される</pre>

<p>{{jsxref("null")}} を評価する際、数値のコンテキストでは null 値は <code>0</code> としてふるまいます。また真偽値のコンテキストでは <code>false</code> としてふるまいます。例えば、</p>

<pre class="brush: js notranslate">var n = null;
console.log(n * 32); // log 0 をコンソールに出力
</pre>

<h3 id="Variable_scope" name="Variable_scope">変数のスコープ</h3>

<p>変数を関数の外側で宣言すると、その変数はその文書のどのコードからも使用できるようになるため、<em>グローバル</em> (大域) 変数と呼ばれます。変数を関数の内部で宣言すると、その変数はその関数の中でしか使用できないため、<em>ローカル</em> (局所) 変数と呼ばれます。</p>

<p>ECMAScript 2015 より前の JavaScript には<a href="/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Block_statement">ブロック文</a>のスコープがありません。正確に言えば、ブロック内で宣言した変数はブロックを内包している<em>関数 (あるいはグローバルスコープ)</em> に対して局所化されます。</p>

<p>例えば、以下のコードでは <code>5</code> が出力されます。これは、<code>x</code> のスコープがグローバルコンテキスト (または以下のコードが関数の中であれば関数) だからです。<code>x</code> のスコープは中間の <code>if</code> 文のブロックに限定されません。</p>

<pre class="brush: js notranslate">if (true) {
  var x = 5;
}
console.log(x);  // x は 5
</pre>

<p>このふるまいは、<code>let</code> (ECMAScript 2015 で導入) を使うことで変わります。</p>

<pre class="brush: js notranslate">if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y が定義されていない
</pre>

<h3 id="Variable_hoisting" name="Variable_hoisting">変数の巻き上げ</h3>

<p>もうひとつ、JavaScript の変数にまつわる独特な点として、例外を発生させることなく後に宣言した変数を参照できる点が挙げられます。</p>

<p>この考え方は<strong>巻き上げ</strong>として知られています。JavaScript の変数は、ある意味「巻き上げられ」、関数や文の先頭まで持ち上げられます。しかし、巻き上げられた変数は <code>undefined</code> 値を返します。そのため、変数を使用したり参照した後に宣言や初期化を行うと、<code>undefined</code> が返されたままになります。</p>

<pre class="brush: js notranslate">/**
 * 例 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * 例 2
 */
// undefined 値が返される
var myvar = 'my value';

(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();
</pre>

<p>上記の例は以下と同様に解釈されます。</p>

<pre class="brush: js notranslate">/**
 * 例 1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * 例 2
 */
var myvar = 'my value';

(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = 'local value';
})();
</pre>

<p>巻き上げがあるため、関数内にあるすべての <code>var</code> 文は関数内で可能な限り先頭に近い位置に置くべきです。これはコードの明確さを高める最善の方法です。</p>

<p>ECMAScript 2015 では、<code>let</code> および <code>const</code> は<strong>巻き上げが行われますが、初期化されません</strong>。ブロック内の変数宣言前に変数を参照すると、変数はブロックの先頭から宣言が処理されるまでの間、「一時的なデッドゾーン」にあるため、{{jsxref("ReferenceError")}} になります。</p>

<pre class="brush: js notranslate">console.log(x); // ReferenceError
let x = 3;</pre>

<h3 id="Function_hoisting" name="Function_hoisting">関数の巻き上げ</h3>

<p>関数の場合、関数<em>宣言</em>のみが巻き上げられますが、関数<em>式</em>は巻き上げられ<em>ません</em>。</p>

<pre class="brush: js notranslate">/* 関数宣言 */

foo(); // "bar"

function foo() {
  console.log('bar');
}


/* 関数式 */

baz(); // TypeError: baz は関数ではない

var baz = function() {
  console.log('bar2');
};
</pre>

<h3 id="Global_variables" name="Global_variables">グローバル変数</h3>

<p>グローバル変数は、実際には<em>グローバルオブジェクト</em>のプロパティです。</p>

<p>ウェブページでのグローバルオブジェクトは {{domxref("window")}} になります、そのため <code>window.<var>変数名</var></code> という構文を用いてグローバル変数の設定やアクセスができます。</p>

<p>したがって、あるウィンドウやフレームで宣言したグローバル変数は、そのウィンドウやフレームの名前を指定することで別の <code>window</code> や <code>frame</code> からアクセスできます。例えば <code>phoneNumber</code> 変数を文書内で宣言すると、<code>iframe</code> から <code>parent.phoneNumber</code> としてその変数を参照できます。</p>

<h3 id="Constants" name="Constants">定数</h3>

<p>{{jsxref("Statements/const", "const")}} キーワードを用いて、読み取り専用の名前付き定数を作成できます。</p>

<p>定数の識別子の構文は、変数の識別子の構文と同じです。識別子は文字、アンダースコア、ドル記号 (<code>$</code>) から始めなくてはならず、アルファベット、数値、アンダースコアを含めることができます。</p>

<pre class="brush: js notranslate">const PI = 3.14;
</pre>

<p>定数は代入によって値を変えたり、スクリプト実行中に再宣言したりすることはできません。定数はある値に初期化しなければなりません。</p>

<p>定数のスコープルールは、<code>let</code> によるブロックスコープ変数と同じです。<code>const</code> キーワードを省略すると、その識別子は変数を表すとみなされます。</p>

<p>以下の例のように、同一スコープ内で関数や変数と同じ名前の定数を宣言することはできません。</p>

<pre class="brush: js notranslate">// THIS WILL CAUSE AN ERROR
function f() {};
const f = 5;

// この場合もエラーが発生
function f() {
  const g = 5;
  var g;

  // ここには文が来る
}
</pre>

<p>しかし、定数が代入されたオブジェクトのプロパティは保護されず、以下の文は問題なく実行できます。</p>

<pre class="brush: js notranslate">const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';</pre>

<p>また、配列の中身は保護されませんので、以下の文は問題なく実行できます。</p>

<pre class="brush: js notranslate">const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
</pre>

<h2 id="Data_structures_and_types" name="Data_structures_and_types">データ構造とデータ型</h2>

<h3 id="Data_types" name="Data_types">データ型</h3>

<p>最新の ECMAScript 標準では、以下の 8 つのデータ型が定義されています。</p>

<ul>
 <li>{{Glossary("Primitive", "プリミティブ型")}}のデータ型が 7 つあります。
  <ul>
   <li>{{Glossary("Boolean")}} (真偽値)。<code>true</code> または <code>false</code>。</li>
   <li>{{Glossary("null")}}。null 値を意味する特殊なキーワードです。(JavaScript は大文字・小文字を区別するため、<code>null</code> は <code>Null</code> や <code>NULL</code> などと同じではありません。)</li>
   <li>{{Glossary("undefined")}} (未定義)。値が未定義の最上位プロパティです。</li>
   <li>{{Glossary("Number")}} (数値)。整数または浮動小数点数。例えば <code>42</code> や <code>3.14159</code> など。</li>
   <li>{{Glossary("BigInt")}} (長整数)。精度が自由な整数値。例えば <code>9007199254740992n</code> など。</li>
   <li>{{Glossary("String")}} (文字列)。テキストの値を表す連続した文字。"Howdy" など。</li>
   <li>{{Glossary("Symbol")}} (シンボル) (ECMAScript 2015 の新機能)。インスタンスが固有で不変となるデータ型。</li>
  </ul>
 </li>
 <li>そして {{Glossary("Object")}} (オブジェクト)。</li>
</ul>

<p>このようにデータ型の種類は比較的少ないですが、アプリケーションで便利な関数を実行することができます。整数と実数の間に明確な違いはありません。{{jsxref("Object", "オブジェクト","","true")}}と{{jsxref("Function", "関数","","true")}}も言語において基本的な要素です。オブジェクトは値を収める名前付きコンテナとして、関数はスクリプトを実行可能にする手続きとして考えることができます。</p>

<h3 id="Data_type_conversion" name="Data_type_conversion">データ型の変換</h3>

<p>JavaScript は<em>動的型付け</em>言語です。そのため変数宣言時にデータ型を指定する必要がなく、またスクリプト実行時に必要に応じてデータ型が自動的に変換されます。</p>

<p>例えば以下のように変数を定義したとします。</p>

<pre class="brush: js notranslate">var answer = 42;
</pre>

<p>その後、同じ変数に文字列を代入できます。</p>

<pre class="brush: js notranslate">answer = 'Thanks for all the fish...';
</pre>

<p>JavaScript は動的型付け方式であるため、この代入を行ってもにエラーメッセージは表示されません。</p>

<h3 id="Numbers_and_the_operator" name="Numbers_and_the_operator">数値と '+' 演算子</h3>

<p>数値と文字列を <code>+</code> 演算子で結合する式では、JavaScript は数値を文字列に変換します。以下の式を見てみましょう。</p>

<pre class="brush: js notranslate">x = '答えは ' + 42 // "答えは 42"
y = 42 + ' が答え' // "42 が答え"
</pre>

<p>それ以外の演算子がある式では、JavaScript は数値を文字列に変換<em>しません</em>。例えば以下のようになります。</p>

<pre class="brush: js notranslate">'37' - 7 // 30
'37' + 7 // "377"
</pre>

<h3 id="Converting_strings_to_numbers" name="Converting_strings_to_numbers">文字列から数値への変換</h3>

<p>数値を表す値が文字列として記憶されている場合、それを変換するメソッドがあります。</p>

<ul>
 <li id="parseInt()_and_parseFloat()">{{jsxref("parseInt", "parseInt()")}}</li>
 <li>{{jsxref("parseFloat", "parseFloat()")}}</li>
</ul>

<p><code>parseInt</code> は整数のみを返すので、小数は切り捨てられます。</p>

<div class="blockIndicator note">
<p>さらに、<code>parseInt</code> を使う最も良い方法は、常に基数を引数に含めるようにすることです。基数の引数は使用されている<em>基数</em>法を指定するのに使われます。</p>
</div>

<pre class="brush: js notranslate">parseInt('101', 2) // 5</pre>

<p>文字列から数値を取り出す代替手段は、<code>+</code> (単項プラス) 演算子を使う方法です。</p>

<pre class="brush: js notranslate">'1.1' + '1.1' // '1.11.1'
(+'1.1') + (+'1.1') // 2.2
// 注: 括弧は明確さのために追加したもので、必須ではありません</pre>

<h2 id="Literals" name="Literals">リテラル</h2>

<p>JavaScript では値の表現に<em>リテラル</em>を使います。これらは固定値であり変数ではなく、スクリプト中に直接<em>記述</em>します。本章では、以下のリテラルについて説明します :</p>

<ul>
 <li><a href="#Array_literals">配列リテラル</a></li>
 <li><a href="#Boolean_literals">真偽値リテラル</a></li>
 <li><a href="#Floating-point_literals">浮動小数点リテラル</a></li>
 <li><a href="#Numeric_literals">数値リテラル</a></li>
 <li><a href="#Object_literals">オブジェクトリテラル</a></li>
 <li><a href="#RegExp_literals">正規表現リテラル</a></li>
 <li><a href="#String_literals">文字列リテラル</a></li>
</ul>

<h3 id="Array_literals" name="Array_literals">配列リテラル</h3>

<p>配列リテラルとは、0 個以上の式のリストであり、各々の式は配列の要素を表し、角括弧 (<code>[]</code>) で括られているもののことです。配列リテラルを用いて配列を作成すると、指定された値が要素として初期化され、また配列の長さ (<code>length</code>) は指定された引数の個数に設定されます。</p>

<p>以下の例では 3 つの要素を持ち、配列 <code>coffees</code> を長さ (<code>length</code>) 3 で作成します。</p>

<pre class="brush: js notranslate">let coffees = ['French Roast', 'Colombian', 'Kona'];
</pre>

<div class="note">
<p><strong>注:</strong> 配列リテラルは<em>オブジェクト初期化子</em>の一種です。<a href="/ja/docs/Web/JavaScript/Guide/Working_with_Objects#Using_object_initializers">オブジェクト初期化子の使用</a>を参照してください。</p>
</div>

<p>トップレベルのスクリプト内でリテラルを用いて配列を作成した場合、JavaScript は配列リテラルを含む式を評価するたびに配列を解釈します。さらに関数内で使用されたリテラルは、関数が呼び出されるたびに生成されます。</p>

<div class="blockIndicator note">
<p>配列リテラルは <code>Array</code> オブジェクトでもあります。<code>Array</code> オブジェクトの詳細は {{jsxref("Array")}} と<a href="/ja/docs/Web/JavaScript/Guide/Indexed_collections">インデックス付きコレクション</a>をご覧ください。</p>
</div>

<h4 id="Extra_commas_in_array_literals" name="Extra_commas_in_array_literals">配列リテラルでの余分なカンマ</h4>

<p>配列リテラルですべての要素を指定する必要はありません。立て続けに 2 つのカンマを置くと、配列は未指定の要素を <code>undefined</code> の値で埋めます。次の例では <code>fish</code> という配列を作成します。</p>

<pre class="brush: js notranslate">let fish = ['Lion', , 'Angel'];
</pre>

<p>この配列は、値を持つ要素を 2 つと空の要素を 1 つ持っています。</p>

<ul>
 <li><code>fish[0]</code> は "Lion"</li>
 <li><code>fish[1]</code> は <code>undefined</code></li>
 <li><code>fish[2]</code> は "Angel"</li>
</ul>

<p>要素のリストの最後にカンマを付けた場合、そのカンマは無視されます。</p>

<p>次の例では、配列の長さ (<code>length</code>) は 3 です。<code>myList[3]</code> は存在しません。リスト内の他のカンマはすべて、新しい要素を示します。</p>

<div class="note">
<p><strong>注:</strong> 末尾にカンマを置くと古いブラウザーでエラーになる場合があるので、取り除くのが最善です。</p>
</div>

<pre class="brush: js notranslate">let myList = ['home', , 'school', ];
</pre>

<p>次の例では、配列の長さ (<code>length</code>) は 4 になります。<code>myList[0]</code> と <code>myList[2]</code> が抜けています。</p>

<pre class="brush: js notranslate">let myList = [ ,'home', , 'school'];
</pre>

<p>次の例では、配列の長さ (<code>length</code>) は 4 です。<code>myList[1]</code> と <code>myList[3]</code> が抜けています。最後のカンマのみが無視されます。</p>

<pre class="brush: js notranslate">let myList = ['home', , 'school', , ];
</pre>

<p>余分なカンマの動作を理解することは、言語としての JavaScript を理解するために重要です。</p>

<p>しかし、コードを記述する際に欠落している要素を明示的に <code>undefined</code> するようにしてください。そうすれば、コードの明確さや保守性が高まります。</p>

<h3 id="Boolean_literals" name="Boolean_literals">真偽値リテラル</h3>

<p>真偽値型は 2 つのリテラル値、<code>true</code> と <code>false</code> があります。</p>

<div class="blockIndicator note">
<p><strong>忠告:</strong> プリミティブ型の真偽値である <code>true</code> や <code>false</code> と、{{jsxref("Boolean")}} オブジェクトの <code>true</code> や <code>false</code> という値とを混同してはいけません。</p>

<p>Boolean オブジェクトは、プリミティブな真偽値型のラッパーです。詳細は {{jsxref("Boolean")}} を参照してください。</p>
</div>

<h3 id="Numeric_literals" name="Numeric_literals">数値リテラル</h3>

<p>{{jsxref("Number")}} および {{jsxref("BigInt")}} 型は、10進数、16進数、8進数、2進数で書くことができます。</p>

<ul>
 <li><em>10進数</em>の数値リテラルは、先頭が <code>0</code> (ゼロ) ではない一連の数字で構成されます。</li>
 <li>先頭に <code>0</code> (ゼロ) である数値リテラル、または先頭の <code>0o</code> (または <code>0O</code>) は <em>8進数</em>であることを示します。8進数の数値には、<code>0</code> から <code>7</code> の数字のみが使用できます。</li>
 <li>先頭の <code>0x</code> (または <code>0X</code>) は、<em>16進数</em>であることを意味します。16進数の数値は数字 (<code>0</code> から <code>9</code>) と <code>a</code> から <code>f</code> および <code>A</code> から <code>F</code> のアルファベットで構成されます。(大文字・小文字の違いは値には影響しません。たとえば <code>0xa</code> = <code>0xA</code> = <code>10</code> で <code>0xf</code> = <code>0xF</code> = <code>15</code> です。)</li>
 <li>
  <p>先頭の <code>0b</code> (または <code>0B</code>) は、<em>2進数</em>であることを表します。2進数の数値は <code>0</code> と <code>1</code> の数字のみで構成されます。</p>
 </li>
</ul>

<p>数値リテラルの例は以下のようになります。</p>

<pre class="eval notranslate">0, 117, -345, 123456789123456789n             (10進数)
015, 0001, -0o77, 0o777777777777n             (8進数)
0x1123, 0x00111, -0xF1A7, 0x123456789ABCDEFn  (16進数)
0b11, 0b0011, -0b11, 0b11101001010101010101n  (2進数)
</pre>

<p>詳しい情報は、<a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_literals">字句構文リファレンスの数値リテラル</a>をご覧ください。</p>

<h3 id="Floating-point_literals" name="Floating-point_literals">浮動小数点リテラル</h3>

<p>浮動小数点リテラルは、以下の部分で構成されます。</p>

<ul>
 <li>符号 (先行する "<code>+</code>" または "<code>-</code>") つきの 10進数の整数部</li>
 <li>小数点 ("<code>.</code>")</li>
 <li>小数部 (他の 10進数)</li>
 <li>指数部</li>
</ul>

<p>指数部は、"<code>e</code>" または "<code>E</code>" の後に、符号 ( "<code>+</code>" or "<code>-</code>") を先行させることできる整数が続く形になります。浮動小数点数リテラルは少なくとも 1 つの数字と、小数点もしくは "<code>e</code>" (または "<code>E</code>") が必要です。</p>

<p>より簡潔に書けば、次の形式になります。</p>

<pre class="eval notranslate">[(+|-)][digits].[digits][(E|e)[(+|-)]digits]
</pre>

<p>例えば以下の通りです。</p>

<pre class="eval notranslate">3.1415926
-.123456789
-3.1E+12
.1e-23
</pre>

<h3 id="Object_literals" name="Object_literals">オブジェクトリテラル</h3>

<p>オブジェクトリテラルとは、プロパティ名とそれに関連付けられたオブジェクトの値との 0 個以上の組が波括弧 (<code>{}</code>) で囲まれたもので作られたリストです。</p>

<div class="blockIndicator warning">
<p><strong>オブジェクトリテラルを文の先頭で使わないようにしてください。</strong> <code>{</code> がブロックの始まりと解釈されるため、エラーや予期せぬ動作を引き起こすことになります。</p>
</div>

<p>以下にオブジェクトリテラルの例を示します。<code>car</code> オブジェクトの最初の要素には <code>myCar</code> プロパティが定義され、新規文字列 "<code>Saturn</code>" が割り当てられています。2番目の要素、<code>getCar</code> プロパティには関数 <code>(carTypes("Honda"));</code> によって呼び出された結果が即座に割り当てられます。3番目の要素、<code>special</code> プロパティには既存の変数 (<code>sales</code>) が使われています。</p>

<pre class="brush: js notranslate">var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota
</pre>

<p>さらに、数値リテラルや文字列リテラルをプロパティ名に使用したり、オブジェクトを別のオブジェクトの入れ子にすることができます。以下の例では、これらの機能を使用しています。</p>

<pre class="brush: js notranslate">var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
</pre>

<p>オブジェクトのプロパティには空の文字列を含むあらゆる文字列が使えます。もしプロパティ名が JavaScript で有効な{{Glossary("Identifier", "識別子")}}か数値でなければ、引用符で囲む必要があります。</p>

<p>有効でない識別子によるプロパティ名にはドット演算子 (<code>.</code>) を使ってアクセスできませんが、配列のような表記法 ("<code>[]</code>") でアクセス、設定ができます。</p>

<pre class="brush: js notranslate">var unusualPropertyNames = {
  '': '空文字列',
  '!': 'バン！'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string が発生
console.log(unusualPropertyNames['']);  // 空文字列
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token ! が発生
console.log(unusualPropertyNames['!']); // バン！</pre>

<h4 id="Enhanced_Object_literals" name="Enhanced_Object_literals">拡張オブジェクトリテラル</h4>

<p>ES2015 では、オブジェクトリテラルは構築時のプロトタイプの設定に対応するよう拡張され、<code>foo: foo</code> 形式の短縮表記の値割り当て、メソッドの定義、<code>super</code> の呼び出し、式によるプロパティ名の計算ができるようになりました。</p>

<p>同時に、オブジェクトリテラルとクラス定義が近くなり、オブジェクトベースの設計でも同じ利便性の一部から利益を得ることができます。</p>

<pre class="brush: js notranslate">var obj = {
    // __proto__
    __proto__: theProtoObj,
    // 短い ‘handler: handler’ の形式
    handler,
    // メソッド
    toString() {
     // super の呼び出し
     return 'd ' + super.toString();
    },
    // 計算による (動的な) プロパティ名
    [ 'prop_' + (() =&gt; 42)() ]: 42
};
</pre>

<h3 id="RegExp_literals" name="RegExp_literals">正規表現リテラル</h3>

<p>正規表現リテラル (<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">後で</a>詳しく定義) は、スラッシュで囲まれたパターンです。以下は正規表現リテラルの例です。</p>

<pre class="brush: js notranslate">var re = /ab+c/;</pre>

<h3 id="String_literals" name="String_literals">文字列リテラル</h3>

<p>文字列リテラルとは、0文字以上の文字を二重引用符 (<code>"</code>) または単一引用符 (<code>'</code>) で括ったものです。文字列は同じ種類の引用符で括らなければなりません (つまり、どちらも単一引用符にするか、またはどちらも二重引用符にするかです)。</p>

<p>以下が文字列リテラルの例です。</p>

<pre class="brush: js notranslate">'foo'
"bar"
'1234'
'one line \n another line'
"John's cat"
</pre>

<p>文字列リテラルを持つ値は、{{jsxref("String")}} オブジェクトのあらゆるメソッドを呼び出すことができます。JavaScript は自動的に文字列リテラルを一時的な String オブジェクトに変換し、メソッドを呼び出して、その後一時的に作られた String オブジェクトを破棄します。<code>String.length</code> プロパティを文字列リテラルで用いることもできます。</p>

<pre class="brush: js notranslate">// ホワイトスペースを含む文字列の文字の数を出力する。
console.log("John's cat".length)  // この場合は 10 が出力される。
</pre>

<p>ECMAScript 2015 では、<em>テンプレートリテラル</em>も利用することができます。テンプレートリテラルは、二重引用符や単一引用符の代わりに逆引用符 (<code>`</code>) (<a class="external external-icon" href="https://en.wikipedia.org/wiki/Grave_accent" rel="noopener">grave accent</a>) で囲まれたものです。</p>

<p>テンプレート文字列は文字列の構築に糖衣構文を利用することができます。これは Perl や Python などの文字列補完機能に似ています。</p>

<p>また、文字列の構築をカスタマイズして、インジェクション攻撃を防いだり文字列コンテンツのより高水準のデータ構造を構築したりするためにタグを追加することができます。</p>

<pre class="brush: js notranslate">// 基本的な文字列リテラルの作成
`In JavaScript '\n' is a line-feed.`

// 複数行の文字列
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`

// 文字列補完
var name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}?`

// 置換や構築を解釈するために使用される HTTP リクエストの接頭辞を構築
POST`http://foo.org/bar?a=${a}&amp;b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);</pre>

<p>特に <code>String</code> オブジェクトを使う必要がない場合は、文字列リテラルを使うようにしてください。詳細は {{jsxref("String")}} をご覧ください。</p>

<h4 id="Using_special_characters_in_strings" name="Using_special_characters_in_strings">文字列での特殊文字の使用</h4>

<p>文字列では、通常の文字に加えて特殊文字も使用できます。次の例をご覧ください。</p>

<pre class="brush: js notranslate">'one line \n another line'
</pre>

<p>ここで、JavaScript の文字列で使用できる特殊文字の表を示します。</p>

<table class="standard-table">
 <caption>表: JavaScript の特殊文字</caption>
 <thead>
  <tr>
   <th scope="col">文字</th>
   <th scope="col">意味</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>\0</code></td>
   <td>ヌル文字</td>
  </tr>
  <tr>
   <td><code>\b</code></td>
   <td>バックスペース</td>
  </tr>
  <tr>
   <td><code>\f</code></td>
   <td>改ページ</td>
  </tr>
  <tr>
   <td><code>\n</code></td>
   <td>改行</td>
  </tr>
  <tr>
   <td><code>\r</code></td>
   <td>復帰</td>
  </tr>
  <tr>
   <td><code>\t</code></td>
   <td>タブ</td>
  </tr>
  <tr>
   <td><code>\v</code></td>
   <td>垂直タブ</td>
  </tr>
  <tr>
   <td><code>\'</code></td>
   <td>アポストロフィまたは単一引用符</td>
  </tr>
  <tr>
   <td><code>\"</code></td>
   <td>二重引用符</td>
  </tr>
  <tr>
   <td><code>\\</code></td>
   <td>バックスラッシュ (\)</td>
  </tr>
  <tr>
   <td><code>\<em>XXX</em></code></td>
   <td><code>0</code> から <code>377</code> までの 3桁の 8進数 <em>XXX</em> で指定された、Latin-1 エンコーディングの文字。<br>
    例えば、<code>\251</code> は著作権記号を示します。</td>
  </tr>
  <tr>
  </tr>
  <tr>
   <td><code>\x<em>XX</em></code></td>
   <td>
    <p><code>00</code> から <code>FF</code> までの 2桁の 16進数 <em>XX</em> で指定された、Latin-1 エンコーディングの文字。<br>
     例えば、<code>\xA9</code> は著作権記号を示します。</p>
   </td>
  </tr>
  <tr>
  </tr>
  <tr>
   <td><code>\u<em>XXXX</em></code></td>
   <td>4桁の 16 進数 <em>XXXX</em> で指定された Unicode 文字。<br>
    例えば、<code>\u00A9</code> は著作権記号を示します。<a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals">Unicode エスケープシーケンス</a>をご覧ください。</td>
  </tr>
  <tr>
   <td><code>\u<em>{XXXXX}</em></code></td>
   <td>Unicode コードポイントエスケープです。<br>
    例えば <code>\u{2F804}</code> は単純な Unicode エスケープである <code>\uD87E\uDC04</code> と同じです。</td>
  </tr>
 </tbody>
</table>

<h4 id="Escaping_characters" name="Escaping_characters">文字のエスケープ</h4>

<p>上記の表に掲載されていない文字は直前にバックスラッシュをつけても無視されますが、こうした使い方は非推奨であり使用を避けるべきです。</p>

<p>バックスラッシュを直前につけることで、引用符を文字列に含めることができます。これは引用符の<em>エスケープ</em>と呼ばれます。例えば以下のようにします。</p>

<pre class="brush: js notranslate">var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
</pre>

<p>この結果は次のようになります。</p>

<pre class="eval notranslate">He read "The Cremation of Sam McGee" by R.W. Service.
</pre>

<p>文字列にバックスラッシュそのものを含めるには、バックスラッシュのエスケープが必要です。例えば、文字列に <code>c:\temp</code> というファイルパスを代入するには、以下のようにします。</p>

<pre class="brush: js notranslate">var home = 'c:\\temp';
</pre>

<p>改行の直前にバックスラッシュを置くことで、改行をエスケープすることもできます。バックスラッシュと改行の両方が、文字列の値から取り除かれます。</p>

<pre class="brush: js notranslate">var str = 'this string \
is broken \
across multiple \
lines.'
console.log(str);   // この文字列は複数行にわたって分解されます。
</pre>

<p>JavaScript には「ヒアドキュメント」構文はありませんが、各行の末尾に改行のエスケープ表記とエスケープした改行を置くことで似たことができます。</p>

<pre class="brush: js notranslate">var poem =
'Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.'
</pre>

<p>ECMAScript 2015 では<a href="/ja/docs/Web/JavaScript/Reference/template_strings"><strong>テンプレートリテラル</strong></a>と呼ばれる新しい種類のリテラルが導入されました。これによって複数行の文字列を含む多数の新機能が利用できるようになりました。</p>

<pre class="brush: js notranslate" dir="rtl">var poem =
`Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.` </pre>

<h2 id="More_information" name="More_information">関連情報</h2>

<p>本章では宣言とデータ型についての基本文法に重点を置いています。JavaScript の言語構成についてより詳しく知りたければ、当ガイドの以下に挙げた章をご覧ください。</p>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling">制御フローとエラー処理</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Loops_and_iteration">ループと反復処理</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Functions">関数</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators">式と演算子</a></li>
</ul>

<p>次章では、制御フローの構造とエラー処理について見ていきます。</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}</p>
