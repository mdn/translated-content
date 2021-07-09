---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular Expressions
  - String
  - プロトタイプ
  - メソッド
  - 正規表現
translation_of: Web/JavaScript/Reference/Global_Objects/String/split
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>split()</code></strong> メソッドは、 {{jsxref("String")}} を指定した区切り文字列で分割することにより、文字列の配列に分割します。</span></p>

<div>{{EmbedInteractiveExample("pages/js/string-split.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>str</var>.split([<var>separator</var>[, <var>limit</var>]])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>separator</var></code> {{optional_inline}}</dt>
 <dd>
 <p>分割を行うところにある文字列です。文字列または{{jsxref("Global_Objects/RegExp", "正規表現", "", 1)}}を指定することができます。</p>

 <ul>
  <li><code><var>separator</var></code> が複数の文字を含んだ文字列である場合、分割にはその文字列の並び全体が見つかることが必要です。</li>
  <li><code><var>separator</var></code> が省略されたり <code><var>str</var></code> の中に現れなかったりした場合は、返却される配列には文字列全体から成る要素が1つだけ含まれます。</li>
  <li><code><var>separator</var></code> が文字列の先頭または末尾、またはその両方に現れた場合、配列の先頭、末尾、または先頭と末尾の両方が、それぞれ空文字列になります。</li>
  <li><code><var>separator</var></code> が空文字列 (<code>""</code>) の場合、 <code><var>str</var></code> は個々の UTF-16 「文字」の配列になります。</li>
 </ul>

 <div class="blockIndicator warning">
 <p><strong>警告:</strong> 空文字列 (<code>""</code>) を区切り文字列として使用すると、文字列が<em>ユーザーが知覚可能な文字</em> (<a href="https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries">書記素クラスター</a>) に分割されるわけでは<strong>なく</strong>、 Unicode 文字 (コードポイント)、ただし UTF-16 コード単位です。これは<a href="http://unicode.org/faq/utf_bom.html#utf16-2">サロゲートペア</a>を破壊します。 <a href="https://stackoverflow.com/a/34717402">StackOverflow の “How do you get a string to a character array in JavaScript?”</a> を参照してください。</p>
 </div>
 </dd>
 <dt><code>limit</code> {{optional_inline}}</dt>
 <dd>
 <p>非負の整数で、分割する数を制限します。指定された場合、文字列は <code>separator</code> が現れるたびに分割されますが、 <code>limit</code> の数の項目が配列に配置されると停止します。残りのテキストは配列に入りません。</p>

 <ul>
  <li>制限数に達する以前に文字列の末尾に達した場合は、配列の要素が <code>limit</code> よりも少なくなることがあります。</li>
  <li><code>limit</code> が <code>0</code> の場合は、分割は行われません。</li>
 </ul>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>文字列の {{jsxref("Array")}} で、指定された文字列で <code>separator</code> が現れるたびに分割されたものです。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>separator</code> は見つかると文字列から削除され、部分文字列が配列に入って返されます。</p>

<p><code>separator</code> が、キャプチャする括弧を含む正規表現だった場合、 <code>separator</code> が一致するごとに、キャプチャする括弧の結果が (未定義の結果であった場合を含め) 出力配列に追加されます。</p>

<p><code>separator</code> が配列であった場合、その配列が String に変換された上で区切り文字列として使用されます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_split" name="Using_split"><code>split()</code> の使用</h3>

<div id="split_empty_string">
<p>文字列が空の場合、 <code>split()</code> は空の配列ではなく、1つの空文字列を含む配列を返します。文字列と区切り文字列が共に空文字列の場合、空の配列が返ります。</p>

<pre class="brush: js">const myString = ''
const splits = myString.split()

console.log(splits)

// ↪ [""]
</pre>
</div>

<p>以下の例は、指定された区切りを使って、文字列を文字列の配列に分割する関数を定義します。文字列を分割した後、その関数は元の文字列（分割する前）、使用した区切り、配列中の要素の数、そして、個々の配列要素を示すメッセージを表示します。</p>

<pre class="brush: js">function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator)

  console.log('元の文字列: ', stringToSplit)
  console.log('区切り文字列: ' , separator)
  console.log('配列の要素数は', arrayOfStrings.length, '件: ', arrayOfStrings.join(' / '))
}

const tempestString = 'Oh brave new world that has such people in it.'
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'

const space = ' '
const comma = ','

splitString(tempestString, space)
splitString(tempestString)
splitString(monthString, comma)
</pre>

<p>この例は次のような出力結果を生み出します。</p>

<pre>元の文字列: "Oh brave new world that has such people in it."
区切り: " "
配列は 10 要素: Oh / brave / new / world / that / has / such / people / in / it.

元の文字列: "Oh brave new world that has such people in it."
区切り: "undefined"
配列は 1 要素: Oh brave new world that has such people in it.

元の文字列: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
区切り: ","
配列は 12 要素: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec
</pre>

<h3 id="Removing_spaces_from_a_string" name="Removing_spaces_from_a_string">文字列からの空白の削除</h3>

<p>以下の例では、<code>split()</code> は、0 回以上の空白とそれに続くセミコロン、それにさらに続く 0 回以上の空白を探し、それらが見つかったとき、文字列から空白を削除します。<code>nameList</code> は、<code>split()</code> の結果として返された配列です。</p>

<pre class="brush: js">const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

console.log(names)

const re = /\s*(?:;|$)\s*/
const nameList = names.split(re)

console.log(nameList)
</pre>

<p>これは 2 つの行を出力します。1 行目は元の文字列を出力し、2 行目は <code>split</code> メソッドの実行結果の配列を出力します。</p>

<pre>Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
</pre>

<h3 id="Returning_a_limited_number_of_splits" name="Returning_a_limited_number_of_splits">限られた数の分割結果を返す</h3>

<p>以下の例では、<code>split()</code> は 文字列中の 0 回以上の空白を探し、見つかった最初の 3 つの分割結果を返します。</p>

<pre class="brush: js">const myString = 'Hello World. How are you doing?'
const splits = myString.split(' ', 3)

console.log(splits)
</pre>

<p>このスクリプトは以下の例を出力します。</p>

<pre>["Hello", "World.", "How"]
</pre>

<h3 id="Splitting_with_a_RegExp_to_include_parts_of_the_separator_in_the_result" name="Splitting_with_a_RegExp_to_include_parts_of_the_separator_in_the_result"><code>RegExp</code> で分割して結果に区切り文字列の一部を含める</h3>

<p><code>separator</code> がキャプチャの括弧 <code>(</code><code>)</code> を含む正規表現である場合、一致した結果が配列に含まれます。</p>

<pre class="brush: js">const myString = 'Hello 1 word. Sentence number 2.'
const splits = myString.split(/(\d)/)

console.log(splits)
</pre>

<p>このスクリプトは、以下を表示します。</p>

<pre>[ "Hello ", "1", " word. Sentence number ", "2", "." ]
</pre>

<div class="blockIndicator note">
<p><strong>メモ: </strong><code>\d</code> は<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">文字クラス</a>で、0から9の数字に一致します。</p>
</div>

<h3 id="Reversing_a_String_using_split" name="Reversing_a_String_using_split"><code>split()</code> を使った文字列を反転</h3>

<div class="warning">
<p>この手法は文字列を正しく反転できるとは限りません。</p>

<pre class="brush: js">const str = 'asdfghjkl'
const strReverse = str.split('').reverse().join('')
// 'lkjhgfdsa'

// split() が配列を返し、 reverse() および join() が適用できます
</pre>

<p>Unicode 対応の分割を使用している場合でも、文字列に書記素クラスターが含まれていると機能しません (代わりに <a href="https://github.com/mathiasbynens/esrever">esrever</a> などを使ってください)。</p>

<pre class="brush: js">const str = 'résumé'
const strReverse = str.split(/(?:)/u).reverse().join('')
// =&gt; "́emuśer"
</pre>

<p><strong>ボーナス:</strong> {{jsxref("Operators/Comparison_Operators", "===", "#Identity_strict_equality_(===)")}} 演算子を使用すると、元の文字列が回文であるかどうかが判定できます。</p>
</div>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.split', 'String.prototype.split')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.split")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.charAt()")}}</li>
 <li>{{jsxref("String.prototype.indexOf()")}}</li>
 <li>{{jsxref("String.prototype.lastIndexOf()")}}</li>
 <li>{{jsxref("Array.prototype.join()")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">JavaScript での正規表現の使用</a></li>
</ul>
