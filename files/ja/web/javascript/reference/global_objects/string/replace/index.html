---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
tags:
- Expressions
- JavaScript
- Method
- Prototype
- Reference
- Regular
- String
translation_of: Web/JavaScript/Reference/Global_Objects/String/replace
browser-compat: javascript.builtins.String.replace
---
<div>{{JSRef}}</div>

<p><strong><code>replace()</code></strong> メソッドは、<code>pattern</code> に一致する文字列の一部またはすべてを <code>replacement</code> で置き換えた新しい文字列を返します。 <code>pattern</code> は文字列または {{jsxref("RegExp")}}、<code>replacement</code> は文字列または各一致で呼び出される関数です。<code>pattern</code> が文字列の場合、最初に一致した箇所のみを置き換えます。</p>

<p>元の文字列は変更されません。</p>

<div>{{EmbedInteractiveExample("pages/js/string-replace.html")}}</div>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">
replace(regexp, newSubstr)
replace(regexp, replacerFunction)

replace(substr, newSubstr)
replace(substr, replacerFunction)
</pre>

<h3 id="Parameters">引数</h3>

<dl>
  <dt><code><var>regexp</var></code> (pattern)</dt>
  <dd>{{jsxref("RegExp")}} オブジェクト、またはリテラルです。一致すると、第 2 引数の <code><var>newSubstr</var></code> または <code><var>replacerFunction</var></code> の返値と置き換えられます。</dd>
 <dt><code><var>substr</var></code></dt>
 <dd><code><var>newSubstr</var></code> に置き換えられる {{jsxref("String")}} です。これは逐次的な文字列として扱われ、正規表現としては解釈されません。最初に出てきたものだけが置き換えられます。</dd>
  <dt><code><var>newSubstr</var></code> (replacement)</dt>
  <dd><code><var>regexp</var></code> や <code><var>substr</var></code> 引数で指定される部分文字列を置換する {{jsxref("String")}} です。数々の特別な置換パターンがサポートされます。下記の「<a href="#specifying_a_string_as_a_parameter">引数としての文字列の指定</a>」の節を見てください。</dd>
  <dt><code><var>replacerFunction</var></code> (replacement)</dt>
  <dd>新しい部分文字列を生成するために実行される関数で、<code><var>regexp</var></code> や <code><var>substr</var></code> で一致したものを置き換えるのに使われます。この関数に渡される引数は下記の「<a href="#specifying_a_function_as_a_parameter">引数としての関数の指定</a>」で述べられています。</dd>
</dl>

<h3 id="Return_value">返値</h3>

<p>パターンに一致した部分文字列の一部またはすべてを置換文字列で置き換えた新しい文字列です。</p>

<h2 id="Description">解説</h2>

<p>このメソッドは、それを呼び出した {{jsxref("String")}} オブジェクトを変化させません。返値として新しい文字列を返します。</p>

<p>グローバルな検索と置換を動作させるためには、正規表現に <code>g</code> フラグを含める必要があります。</p>

<h3 id="Specifying_a_string_as_a_parameter">引数としての文字列の指定</h3>

<p>置換文字列には以下の特殊な置換パターンを入れることができます。</p>

<table class="standard-table">
  <head>
    <tr>
      <th class="header" scope="col">パターン</th>
      <th class="header" scope="col">挿入</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>$$</code></td>
      <td><code>"$"</code> を挿入します。</td>
    </tr>
    <tr>
      <td><code>$&amp;</code></td>
      <td>一致した部分文字列を挿入します。</td>
    </tr>
    <tr>
      <td><code>$`</code></td>
      <td>一致した部分文字列の直前の文字列の部分を挿入します。</td>
    </tr>
    <tr>
      <td><code>$'</code></td>
      <td>一致した部分文字列の直後の文字列の部分を挿入します。</td>
    </tr>
    <tr>
      <td><code>$<var>n</var></code></td>
      <td><code><var>n</var></code> は 100 未満の正の整数です。第一引数が {{jsxref("RegExp")}} オブジェクトだった場合に <code><var>n</var></code> 番目の括弧でキャプチャされた文字列を挿入します。なお、 <code>1</code> から始まることに注意してください。 <code>n</code> 番目のグループが存在しない場合 (例えば、グループ 3 の場合)、リテラル (例えば <code>$3</code>) として置換されます。</td>
    </tr>
    <tr>
      <td><code>$&lt;Name&gt;</code></td>
      <td>ここで、 <code>Name</code> はキャプチャするグループ名です。グループが一致に含まれていなかったり、正規表現に含まれていなかったり、正規表現ではなく文字列が <code>replace</code> の第一引数として渡された場合は、リテラル (例えば  <code>$&lt;Name&gt;</code>) に解決されます。名前付きキャプチャグループに対応しているブラウザーのバージョンでのみ利用可能です。</td>
    </tr>
  </tbody>
</table>

<h3 id="Specifying_a_function_as_a_parameter">引数としての関数の指定</h3>

<p>第二引数として関数を指定することができます。このとき、関数は一致が完了された後に実行されます。関数呼び出しの結果 (返値) は、置換文字列として使われます (<strong>注:</strong> 上記の特殊な置換パターンはこの場合には適用<em>されません</em>)。</p>

<p>第一引数の正規表現がグローバルだと、置換されるべき一致ごとに関数が複数回実行されうることに注意してください。</p>

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
      <td><code>match</code></td>
      <td>一致した部分文字列 (上記の <code>$&amp;</code> に対応) です。</td>
    </tr>
    <tr>
      <td><code>p1, p2, ...</code></td>
      <td><code>replace()</code> の第一引数が {{jsxref("RegExp")}} オブジェクトだった場合、<var>n</var> 番目の括弧でキャプチャされたグループの文字列 (上記の <code>$1</code>, <code>$2</code>, などに対応) です。例えば <code>/(\a+)(\b+)/</code> が与えられた場合、<code>p1</code> は <code>\a+</code> に対する一致、<code>p2</code> は <code>\b+</code> に対する一致となります。</td>
    </tr>
    <tr>
      <td><code>offset</code></td>
      <td>一致した部分文字列の、分析中の文字列全体の中でのオフセットです（例えば、文字列全体が <code>'abcd'</code> で、一致した部分文字列が <code>'bc'</code> ならば、この引数は 1 となります）。</td>
    </tr>
    <tr>
      <td><code>string</code></td>
      <td>分析中の文字列全体です。</td>
    </tr>
    <tr>
      <td><code>groups</code></td>
      <td>名前付きキャプチャグループに対応しているブラウザーのバージョンでは、使用されるグループ名をキーとし、一致した部分を値とするオブジェクトになります (一致しない場合は <code>undefined</code>)。</td>
    </tr>
  </tbody>
</table>

<p>（引数の正確な個数は、第一引数が {{jsxref("RegExp")}} オブジェクトかどうか、そうならばさらに括弧でキャプチャされるサブ一致がいくつ指定されているかによります。）</p>

<p>以下の例は <code>newString</code> に <code>'abc - 12345 - #$*%'</code> をセットします。</p>

<pre class="brush: js">function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%
</pre>

<h2 id="Examples">例</h2>

<h3 id="Defining_the_regular_expression_in_replace">replace() で正規表現を利用する</h3>

<p>以下の例では、 <code>replace()</code> メソッドで正規表現を利用しています。</p>

<pre class="brush: js">let str = 'Twas the night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
</pre>

<p>これは <code>'Twas the night before Christmas...'</code> と出力します。</p>

<div class="notecard note">
  <p><strong>注:</strong> 正規表現についてのその他の例は<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">このガイド</a>を参照してください。</p>
</div>

<h3 id="Using_global_and_ignore_with_replace">大文字小文字を区別しないフラグとグローバルフラグの使用</h3>

<p>グローバルな置換は、正規表現でのみ行うことができます。次の例では、正規表現に<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2">グローバルフラグと大文字小文字の区別をしないフラグ</a>が含まれているため、 <code>replace()</code> は文字列中の <code>'apples'</code> の各出現箇所を <code>'oranges'</code> に置き換えることができます。</p>

<pre class="brush: js">let re = /apples/gi;
let str = 'Apples are round, and apples are juicy.';
let newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.
</pre>

<p>この出力は 'oranges are round, and oranges are juicy' となります。</p>

<h3 id="Switching_words_in_a_string">文字列内の単語の交換</h3>

<p>次のスクリプトでは、文字列内の単語を交換します。テキストを置き換えるために、このスクリプトは<a
    href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">キャプチャリンググループ</a>と置換パターン <code>$1</code> および <code>$2</code> を使用しています。</p>

<pre class="brush: js">let re = /(\w+)\s(\w+)/;
let str = 'John Smith';
let newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John
</pre>

<p>この出力は 'Smith, John' となります。</p>

<h3 id="Using_an_inline_function_that_modifies_the_matched_characters">一致した文字を修正するインライン関数の使用</h3>

<p>次の例では、文字列内に出現する大文字のすべては小文字に変換され、ハイフンが一致した位置の直前に挿入されます。ここで重要なことは、追加の操作は、一致したアイテムが置換されて戻される前に必要とされるということです。</p>

<p>置換する関数は一致した断片をその関数の引数として適用します。そして、その引数を大文字小文字変形し、返値の直前にハイフンを連結します。</p>

<pre class="brush: js">function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset &gt; 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
</pre>

<p><code>styleHyphenFormat('borderTop')</code>を入力すると <code>'border-top'</code> を返します。</p>

<p>最終的な置換が行われる前に、一致の<em>結果</em>をさらに変換したいので、関数を使用する必要があります。これにより、 {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} メソッドの前に一致の評価が行われます。関数を使わず一致を使ってこれを行おうとした場合、 {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} は何の効果もないでしょう。</p>

<pre class="brush: js example-bad">let newString = propertyName.replace(/[A-Z]/g, '-' + '$&amp;'.toLowerCase());  // 動作しないでしょう</pre>

<p>これは、<code>'$&amp;'.toLowerCase()</code> は、まずその文字がパターンとして使用される前に (<code>'$&amp;'</code> という結果である ) 文字列リテラルとして評価されるだろうからです。</p>

<h3 id="Replacing_a_Fahrenheit_degree_with_its_Celsius_equivalent">華氏温度を同等の摂氏温度と置き換える</h3>

<p>以下の例は、ある華氏温度をそれと同等の摂氏温度と置き換えます。その華氏温度は <code>"F"</code> で終わる数でなければなりません。この関数は <code>"C"</code> で終わる摂氏を返します。例えば、入力される数が <code>"212F"</code> である場合、その関数は <code>"100C"</code> を返します。入力される数が <code>"0F"</code> であった場合、その関数は <code>"-17.77777777777778C"</code> を返します。</p>

<p>その正規表現 <code>test</code> は、任意の数が <code>F</code> で終わっているかチェックします。華氏温度の数は、関数の 第二引数 <code>p1</code> を通して、その関数にアクセスできます。その関数は文字列内で渡された華氏温度をベースとした摂氏の数を <code>f2c()</code> にセットします。それから、<code>f2c()</code> は、摂氏の数を返します。この関数は Perl の <code>s///e</code> フラグと似ています。</p>

<pre class="brush: js">function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5/9) + 'C';
  }
  let s = String(x);
  let test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{jsxref("String.prototype.replaceAll", "String.prototype.replaceAll()")}}</li>
  <li>{{jsxref("String.prototype.match", "String.prototype.match()")}}</li>
  <li>{{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}</li>
  <li>{{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}</li>
</ul>
