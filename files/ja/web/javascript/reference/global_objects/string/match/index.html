---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular Expressions
  - String
  - メソッド
  - 正規表現
translation_of: Web/JavaScript/Reference/Global_Objects/String/match
---
<div>{{JSRef}}</div>

<p><strong><code>match()</code></strong> メソッドは、<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">正規表現</a>に対する<em>文字列</em>のマッチングの結果を受け取ります。</p>

<div>{{EmbedInteractiveExample("pages/js/string-match.html", "shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>str</var>.match(<var>regexp</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>regexp</var></code></dt>
 <dd>正規表現オブジェクトです。</dd>
 <dd><code><var>regexp</var></code> が <code>RegExp</code> ではないオブジェクトであった場合、 {{jsxref("RegExp")}} への暗黙的な変換が <code>new RegExp(<var>regexp</var>)</code> を使用して行われます。</dd>
 <dd>一切引数を与えずに <code>match()</code> メソッドを使った場合、空の文字列 1 つを持つ {{jsxref("Array")}}、 <code>[""]</code> が得られます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>グローバル (<code>g</code>) フラグの有無によって内容が変わる {{jsxref("Array")}} を返します。一致するものが見つからなかった場合は {{jsxref("null")}} を返します。</p>

<ul>
 <li><code>g</code> フラグがあった場合は、正規表現全体に一致したすべての結果を返しますが、キャプチャグループは返しません。</li>
 <li><code>g</code> フラグがなかった場合、最初に完全に一致したものと、それに関するキャプチャグループを返します。この場合、返される要素には下記の追加のプロパティが存在します。</li>
</ul>

<h4 id="Additional_properties" name="Additional_properties">追加のプロパティ</h4>

<p>上記の説明にある通り、結果は追加のプロパティを含むことがあります。</p>

<dl>
 <dt><code>groups</code></dt>
 <dd>名前付きキャプチャグループのオブジェクトで、キーは名前、値はキャプチャグループ、または名前付きキャプチャグループが定義されていない場合は {{jsxref("undefined")}} です。詳細は<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">グループと範囲</a>を見てください。</dd>
 <dt><code>index</code></dt>
 <dd>結果が見つかった検索のインデックスです。</dd>
 <dt><code>input</code></dt>
 <dd>検索された文字列のコピーです。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>正規表現が <code>g</code> フラグを含んでいない場合、 <code>str.match()</code> は {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} と同じ結果を返します。</p>

<h3 id="Other_methods" name="Other_methods">その他のメソッド</h3>

<ul>
 <li>ある文字列が正規表現 {{jsxref("RegExp")}} に一致するかどうかを知る必要がある場合は、 {{jsxref("RegExp.prototype.test()", "RegExp.test()")}} を使用してください。</li>
 <li>一番最初に一致したものだけが欲しい場合、代わりに {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} を使ったほうが良いかもしれません。</li>
 <li>キャプチャグループを取得する場合でグローバルフラグが設定されていた場合は、 {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} を使用してください。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_match" name="Using_match">match() の使用</h3>

<p>以下の例において、 <code>match()</code> は '<code>Chapter</code>' とそれに続く 1 桁以上の数字、それに続く 0 回以上の小数点と数字を見つけるために使われています。</p>

<p>正規表現が <code>i</code> フラグを含んでいるので、大文字と小文字の違いは無視されます。</p>

<pre class="brush: js">let str = 'For more information, see Chapter 3.4.5.1';
let re = /see (chapter \d+(\.\d)*)/i;
let found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.</pre>

<h3 id="Using_global_and_ignore_case_flags_with_match" name="Using_global_and_ignore_case_flags_with_match">match() での g と i フラグの使用</h3>

<p>以下の例は、 g と i フラグを <code>match()</code> で使用した実例です。 <code>A</code> から <code>E</code> までと、 <code>a</code> から <code>e</code> までのすべての文字が返され、それぞれが配列の個々の要素に入ります。</p>

<pre class="brush: js">let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let regexp = /[A-E]/gi;
let matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
</pre>

<div class="blockIndicator note">
<p><strong>メモ:</strong> {{jsxref("String.prototype.matchAll()")}} と<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_Searching_With_Flags">フラグを用いた高度な検索</a>も参照してください。</p>
</div>

<h3 id="Using_named_capturing_groups" name="Using_named_capturing_groups">名前付きキャプチャグループの使用</h3>

<p>名前付きキャプチャグループに対応しているブラウザーでは、次のコードは "<code>fox</code>" または "<code>cat</code>" を "<code>animal</code>" という名前のグループに入れます。</p>

<pre class="brush: js">let paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

let capturingRegex = /(?&lt;animal&gt;fox|cat) jumps over/;
found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
</pre>

<h3 id="Using_match_with_no_parameter" name="Using_match()_with_no_parameter">引数なしの match() の使用</h3>

<pre class="brush: js">let str = "Nothing will come of nothing.";

str.match();   // returns [""]</pre>

<h3 id="A_non-RegExp_object_as_the_parameter" name="A_non-RegExp_object_as_the_parameter">RegExp ではないオブジェクトを引数にする</h3>

<p>引数 <code><var>regexp</var></code> が文字列または数値である場合、暗黙に <code>new RegExp(<var>regexp</var>)</code> を使用して {{jsxref("RegExp")}} に変換されます。</p>

<p>正の符号がついた正の数であった場合、 <code>RegExp()</code> は正の符号を無視します。</p>

<pre class="brush: js">let str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
str1.match("number");   // "number" is a string. returns ["number"]
str1.match(NaN);        // the type of NaN is the number. returns ["NaN"]
str1.match(Infinity);   // the type of Infinity is the number. returns ["Infinity"]
str1.match(+Infinity);  // returns ["Infinity"]
str1.match(-Infinity);  // returns ["-Infinity"]
str2.match(65);         // returns ["65"]
str2.match(+65);        // A number with a positive sign. returns ["65"]
str3.match(null);       // returns ["null"]</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.match', 'String.prototype.match')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="Basic_support_for_match" name="Basic_support_for_match"><code>match()</code> の基本対応</h3>

<p>{{Compat("javascript.builtins.String.match")}}</p>

<h3 id="Support_for_named_capture_groups" name="Support_for_named_capture_groups">名前付きキャプチャグループの対応</h3>

<p>{{Compat("javascript.builtins.RegExp.named_capture_groups")}}</p>

<h2 id="Firefox-specific_notes" name="Firefox-specific_notes">Firefox 特有のメモ</h2>

<ul>
 <li>標準外の第二引数 <code>flags</code> が Firefox のみで <code><var>str</var>.match(<var>regexp, flags</var>)</code> のように使用できました。 Firefox 49 以降では削除されています。</li>
 <li>Firefox 27 において、このメソッドは ECMAScript 仕様書に合うように調整されました。 <code>match()</code> がグローバルの正規表現で呼び出された場合、 {{jsxref("RegExp.lastIndex")}} プロパティは (もしあれば) <code>0</code> にリセットされるようになりました (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=501739">bug 501739</a>)。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.matchAll()")}}</li>
 <li>{{jsxref("RegExp")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
