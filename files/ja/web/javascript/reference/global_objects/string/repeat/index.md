---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/repeat
---
<div>{{JSRef}}</div>

<p><strong><code>repeat()</code></strong> メソッドは、呼び出し元の文字列を指定した数だけコピーして結合した新しい文字列を構築して返します。</p>

<div>{{EmbedInteractiveExample("pages/js/string-repeat.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>str</var>.repeat(<var>count</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>count</var></code></dt>
 <dd><code>0</code> から{{jsxref("Global_Objects/Number/POSITIVE_INFINITY", "正の無限大")}}までの間の整数で、文字列を繰り返す数を示します。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた文字列の指定した回数分のコピーを含む新しい文字列です。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<ul>
 <li>{{jsxref("Errors/Negative_repetition_count", "RangeError")}}: 繰り返し数は非負数でなければなりません。</li>
 <li>{{jsxref("Errors/Resulting_string_too_large", "RangeError")}}: 繰り返し数は無限大よりも小さく、文字列の最大長を超えないようにしなければなりません。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_repeat" name="Using_repeat">repeat() の使用</h3>

<pre class="brush: js notranslate">'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (小数は丸められ、整数の結果が返されます)
'abc'.repeat(1/0)   // RangeError

({ toString: () =&gt; 'abc', repeat: String.prototype.repeat }).repeat(2)
// 'abcabc' (repeat() は汎用メソッドです)
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>このメソッドは ECMAScript 2015 仕様で追加されたため、まだすべての JavaScript の実装で使用できるわけではありません。しかし、次のスニペットで <code>String.prototype.repeat()</code> を代替することができます。</p>

<pre class="notranslate">if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null)
      throw new TypeError('can\'t convert ' + this + ' to object');

    var str = '' + this;
    // To convert string to integer.
    count = +count;
    // Check NaN
    if (count != count)
      count = 0;

    if (count &lt; 0)
      throw new RangeError('repeat count must be non-negative');

    if (count == Infinity)
      throw new RangeError('repeat count must be less than infinity');

    count = Math.floor(count);
    if (str.length == 0 || count == 0)
      return '';

    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 &lt;&lt; 28 chars or longer, so:
    if (str.length * count &gt;= 1 &lt;&lt; 28)
      throw new RangeError('repeat count must not overflow maximum string size');

    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
       str += str;
       count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  }
}
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
   <td>{{SpecName('ESDraft', '#sec-string.prototype.repeat', 'String.prototype.repeat')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.repeat")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.concat()")}}</li>
</ul>
