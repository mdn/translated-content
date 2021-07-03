---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - regex
translation_of: Web/JavaScript/Reference/Global_Objects/String/replaceAll
---
<div>{{JSRef}}</div>

<p><strong><code>replaceAll()</code></strong> メソッドは、<code>pattern</code> にマッチしたすべての文字列を <code>replacement</code> で置き換えた新しい文字列を返します。<code>pattern</code> は文字列または {{jsxref("RegExp")}} を指定することができ、<code>replacement</code> は文字列または各マッチに対して呼び出される関数を指定することができます。</p>

<p>元の文字列は変更されません。</p>

<div>{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">const newStr = <var>str</var>.replaceAll(<var>regexp</var>|<var>substr</var>, <var>newSubstr</var>|<var>function</var>)
</pre>

<div class="blockIndicator note">
<p>`<var>regexp</var>`を使用する場合は、グローバル("g")フラグを設定する必要があります。それ以外の場合は、<code>TypeError</code> が投げられます："replaceAll must be called with a global RegExp".</p>
</div>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>regexp</var></code> (pattern)</dt>
<dd>グローバルフラグを持つ {{jsxref("RegExp")}} オブジェクトまたはリテラルです。マッチしたものは <code><var>newSubstr</var></code> または、指定された <code><var>function</var></code> によって返された値に置き換えられます。グローバル("g")フラグのない RegExp は <code>TypeError</code> を投げます："replaceAll must be called with a global RegExp".</dd>

 <dt><code><var>substr</var></code></dt>
 <dd><code><var>newSubstr</var></code> で置き換えられる {{jsxref("String")}} です。これは文字列リテラルとして扱われ、正規表現として解釈されません。</dd>

 <dt><code><var>newSubstr</var></code> (replacement)</dt>
 <dd><code><var>regexp</var></code> または <code><var>substr</var></code> で指定された部分文字列を置き換える {{jsxref("String")}} です。いくつかの特殊な置換パターンがサポートされています。下記の「<a href="#Specifying_a_string_as_a_parameter">引数としての文字列の指定</a>」セクションで説明しています。</dd>

 <dt><code><var>function</var></code> (replacement)</dt>
 <dd>指定された <code><var>regexp</var></code> または <code><var>substr</var></code> のマッチを置き換えるために使用される、新しい部分文字列を生成するために呼び出される関数です。この関数に与えられる引数については、下記の「<a href="#Specifying_a_function_as_a_parameter">引数としての関数の指定</a>」セクションで説明しています。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>パターンにマッチしたすべての文字列を置換文字列で置き換えた新しい文字列です。</p>

<h2 id="Description" name="Description">説明</h2>

<p>このメソッドは、呼び出し元の {{jsxref("String")}} オブジェクトを変更しません。戻り値として新しい文字列を返します。</p>

<h3 id="Specifying_a_string_as_a_parameter" name="Specifying_a_string_as_a_parameter">引数としての文字列の指定</h3>

<p>置換文字列には以下の特殊な置換パターンを含めることができます。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th class="header" scope="col">パターン</th>
   <th class="header" scope="col">挿入</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>$$</code>​ ​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​</td>
   <td><code>"$"</code> を挿入します。</td>
  </tr>
  <tr>
   <td><code>$&amp;</code></td>
   <td>マッチした部分文字列を挿入します。</td>
  </tr>
  <tr>
   <td><code>$`</code></td>
   <td>マッチした部分文字列の直前の文字列の部分を挿入します。</td>
  </tr>
  <tr>
   <td><code>$'</code></td>
   <td>	マッチした部分文字列の直後の文字列の部分を挿入します。</td>
  </tr>
  <tr>
   <td><code>$<var>n</var></code></td>
   <td><code><var>n</var></code> は 100 未満の正の整数です。第一引数が {{jsxref("RegExp")}} オブジェクトだった場合に <code><var>n</var></code> 番目の括弧でキャプチャされた文字列を挿入します。<code>1</code>, <code>2</code>, ... でインデックスされることに注意してください。</td>
  </tr>
 </tbody>
</table>

<h3 id="Specifying_a_function_as_a_parameter" name="Specifying_a_function_as_a_parameter">引数としての関数の指定</h3>

<p>第二引数として関数を指定することができます。このとき、関数はマッチが完了した後に実行されます。関数呼び出しの結果（返り値）は、置換文字列として使われます（<strong>注:</strong> 上記の特殊な置換パターンはこの場合には適用されません）。</p>

<p>第一引数の正規表現がグローバルだと、置換されるべきマッチごとに関数が複数回実行されうることに注意してください。</p>

<p>関数に与えられる引数は次の通りです。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th class="header" scope="col">名前</th>
   <th class="header" scope="col">与えられる値</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>match</code> ​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​ ​ ​</td>
   <td>マッチした部分文字列（上記の <code>$&amp;</code> に対応）です。</td>
  </tr>
  <tr>
   <td><code>p1, p2, ...</code></td>
   <td><code>replace()</code> の第一引数が {{jsxref("RegExp")}} オブジェクトだった場合、<var>n</var> 番目の括弧でキャプチャされたグループの文字列（上記の <code>$1</code>, <code>$2</code>, などに対応）です。例えば <code>/(\a+)(\b+)/</code> が与えられた場合、<code>p1</code> は <code>\a+</code> に対するマッチ、<code>p2</code> は <code>\b+</code> に対するマッチとなります。</td>
  </tr>
  <tr>
   <td><code>offset</code></td>
   <td>マッチした部分文字列の、分析中の文字列全体の中でのオフセットです（例えば、文字列全体が <code>'abcd'</code> で、マッチした部分文字列が <code>'bc'</code> ならば、この引数は <code>1</code> となります）。</td>
  </tr>
  <tr>
   <td><code>string</code></td>
   <td>分析中の文字列全体です。</td>
  </tr>
 </tbody>
</table>

<p>（引数の正確な個数は、第一引数が {{jsxref("RegExp")}} オブジェクトかどうか、そうならばさらに括弧でキャプチャされるサブマッチがいくつ指定されているかに依ります。）</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_replaceAll" name="Using_replaceAll">replaceAll の使用</h3>

<pre class="brush: js notranslate">'aabbcc'.replaceAll('b', '.');
// 'aa..cc'</pre>

<h3 id="Non-global_regex_throws" name="Non-global_regex_throws">グローバルではない正規表現</h3>

<p>正規表現フラグを使用する場合は、グローバルである必要があります。これは機能しません：</p>

<pre class="brush: js; example-bad notranslate">'aabbcc'.replaceAll(/b/, '.');
TypeError: replaceAll must be called with a global RegExp
</pre>

<p>これは機能します：</p>

<pre class="brush: js; example-good notranslate">'aabbcc'.replaceAll(/b/g, '.');
"aa..cc"
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.replaceall', 'String.prototype.replaceAll')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("javascript.builtins.String.replaceAll")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.replace", "String.prototype.replace()")}}</li>
 <li>{{jsxref("String.prototype.match", "String.prototype.match()")}}</li>
 <li>{{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}</li>
</ul>
