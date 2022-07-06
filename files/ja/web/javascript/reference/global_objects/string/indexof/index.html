---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/String/indexOf
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>indexOf()</code></strong> メソッドは、呼び出す {{jsxref("String")}} オブジェクト中で、 <code>fromIndex</code> から検索を始め、指定された値が最初に現れたインデックスを返します。値が見つからない場合は <code>-1</code> を返します。</span></p>

<div>{{EmbedInteractiveExample("pages/js/string-indexof.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div class="note"><strong>メモ:</strong> 配列メソッドについては {{jsxref("Array.prototype.indexOf()")}} を参照してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>str</var>.indexOf(<var>searchValue [</var>, <var>fromIndex]</var>)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>searchValue</var></code></dt>
 <dd>
 <p>検索する値を表す文字列です。</p>

 <p>文字列が明示的に提供されなかった場合は、 <a href="https://tc39.github.io/ecma262/#sec-tostring"><var>searchValue</var> は "<code>undefined</code>" となり</a>、この値が <code><var>str</var></code> の中から検索されます。</p>

 <p>ですから、例えば <code>'undefined'.indexOf()</code> は <code>undefined</code> が <code>undefined</code> という文字列の中の <code>0</code> の位置に見つかるため、 <code>0</code> を返します。しかし、 <code>'undefine'.indexOf()</code> は <code>undefined</code> が <code>undefine</code> という文字列の中で見つからないため、 <code>-1</code> を返します。</p>
 </dd>
 <dt><var><code>fromIndex</code></var> {{optional_inline}}</dt>
 <dd>
 <p>整数値で、検索を始める位置を表します。既定値は <code>0</code> です。</p>

 <p><var><code>fromIndex</code></var> の値が <code>0</code> より小さい場合や <code><var>str</var>.length</code> より大きい場合は、それぞれ <code>0</code> の位置、 <code><var>str</var>.length</code> の位置から検索を始めます。</p>

 <p>例えば、 <code>'hello world'.indexOf('o', -5)</code> は、 <code>0</code> の位置から検索を始め、 <code>o</code> が <code>4</code> の位置にあるので <code>4</code> を返します。一方、 <code>'hello world'.indexOf('o', 11)</code> (および <code>fromIndex</code> の値が <code>11</code> よりも大きな場合) は、 <code>11</code> が文字列の末尾よりも<em>後</em>の位置であるため、 <code>-1</code> を返します。</p>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code><var>searchValue</var></code> が初めて出現した位置です。見つからなかった場合は、 <strong>-1</strong> になります。</p>

<p><code><var>searchValue</var></code> が空文字列であった場合は奇妙な結果になります。 <code><var>fromIndex</var></code> の値がなかった場合や、 <code><var>fromIndex</var></code> の値が文字列の <code>length</code> よりも小さかった場合は、返値は <code><var>fromIndex</var></code> と同じになります。</p>

<pre class="brush: js">'hello world'.indexOf('') // 0 を返す
'hello world'.indexOf('', 0) // 0 を返す
'hello world'.indexOf('', 3) // 3 を返す
'hello world'.indexOf('', 8) // 8 を返す</pre>

<p>しかし、 <code><var>fromIndex</var></code> の値が文字列の <code>length</code> 以上であった場合、返値は文字列の <code>length</code> になります。</p>

<pre class="brush: js">'hello world'.indexOf('', 11) // 11 を返す
'hello world'.indexOf('', 13) // 11 を返す
'hello world'.indexOf('', 22) // 11 を返す</pre>

<p>前者の例では、 JS は指定された位置の直後に空文字列を見つけているようです。後者の例では、 JS は検索される文字列の末尾で空文字列を見つけているようです。</p>

<h2 id="Description" name="Description">解説</h2>

<p>文字列における文字は左から右にインデックス化されます。一番最初の文字の位置は <code>0</code> で、 <code><var>stringName</var></code> として呼び出された文字列における一番最後の文字は <code><var>stringName</var>.length - 1</code> です。</p>

<pre class="brush:js">'Blue Whale'.indexOf('Blue')      // 0 を返します
'Blue Whale'.indexOf('Blute')     // -1 を返します
'Blue Whale'.indexOf('Whale', 0)  // 5 を返します
'Blue Whale'.indexOf('Whale', 5)  // 5 を返します
'Blue Whale'.indexOf('Whale', 7)  // -1 を返します
'Blue Whale'.indexOf('')          // 0 を返します
'Blue Whale'.indexOf('', 9)       // 9 を返します
'Blue Whale'.indexOf('', 10)      // 10 を返します
'Blue Whale'.indexOf('', 11)      // 10 を返します
</pre>

<p><code>indexOf()</code> メソッドは大文字と小文字を区別します。例えば、以下の式は <code>-1</code> を返します。</p>

<pre class="brush: js">'Blue Whale'.indexOf('blue')  // -1 を返します
</pre>

<h3 id="Checking_occurrences" name="Checking_occurrences">出現のチェック</h3>

<p><code>0</code> は <code>true</code> と評価されず、 <code>-1</code> は <code>false</code> と評価されないことに注意してください。そのため、特定の文字列がほかの文字列に含まれているかをチェックする正確な方法は次のようになります。</p>

<pre class="brush: js">'Blue Whale'.indexOf('Blue') !== -1  // true
'Blue Whale'.indexOf('Bloe') !== -1  // false
~('Blue Whale'.indexOf('Bloe')) // 0, which is falsy
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_indexOf" name="Using_indexOf"><code>indexOf()</code> を使う</h3>

<p>以下の例は、<code>"Brave new world"</code> という文字列において、与えられた値の位置を求めるために、<code>indexOf()</code> を使用しています。</p>

<pre class="brush: js">const str = 'Brave new world'

console.log('Index of first w from start is ' + str.indexOf('w'))   // 8 を表示
console.log('Index of "new" from start is ' + str.indexOf('new'))   // 6 を表示
</pre>

<h3 id="indexOf_and_case-sensitivity" name="indexOf_and_case-sensitivity"><code>indexOf()</code> と 大文字と小文字の区別</h3>

<p>以下の例は 2 つの文字列の変数を定義しています。</p>

<p>それらの変数は、2 番目の文字列が大文字を含んでいることを除けば、同じ文字列を含んでいます。1 番目の {{domxref("console.log()")}} メソッドは <code>19</code> を表示します。しかし、 <code>indexOf()</code> メソッドは大文字と小文字を区別するので、 "<code>cheddar</code>" という文字列は <code>myCapString</code> では見つけられません。ですから、 <code>console.log()</code> メソッドは <code>-1</code> を表示します。</p>

<pre class="brush: js">const myString    = 'brie, pepper jack, cheddar'
const myCapString = 'Brie, Pepper Jack, Cheddar'

console.log('myString.indexOf("cheddar") is ' + myString.indexOf('cheddar'))
// 19 を表示します
console.log('myCapString.indexOf("cheddar") is ' + myCapString.indexOf('cheddar'))
// -1 を表示します
</pre>

<h3 id="Using_indexOf_to_count_occurrences_of_a_letter_in_a_string" name="Using_indexOf_to_count_occurrences_of_a_letter_in_a_string"><code>indexOf()</code> を使って文字列中である文字が現れる回数を数える</h3>

<p>以下の例は、 <code>count</code> に、 <code>str</code> という文字列中で <code>e</code> という文字が出現する回数を設定します。</p>

<pre class="brush: js">const str = 'To be, or not to be, that is the question.'
let count = 0
let position = str.indexOf('e')

while (position !== -1) {
  count++
  position = str.indexOf('e', position + 1)
}

console.log(count)  // 4 を表示
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.indexof', 'String.prototype.indexOf')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.indexOf")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.charAt()")}}</li>
 <li>{{jsxref("String.prototype.lastIndexOf()")}}</li>
 <li>{{jsxref("String.prototype.includes()")}}</li>
 <li>{{jsxref("String.prototype.split()")}}</li>
 <li>{{jsxref("Array.prototype.indexOf()")}}</li>
</ul>
