---
title: 'RegExp.prototype[@@replace]()'
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@replace
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expression
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@replace
---
<div>{{JSRef}}</div>

<p><strong><code>[@@replace]()</code></strong> メソッドは文字列内の <code>this</code> パターンの一部または、すべての一致箇所を <code>replacement</code> で置き換え、置換結果を新しい文字列として返します。 <code>replacement</code> は文字列にするか、関数にしてすべての一致箇所ごとに呼び出されるようにすることができます。</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@replace.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>regexp</var>[Symbol.replace](<var>str<var>, <var>newSubStr</var>|<var>function</var>)</var></var></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>str</var></code></dt>
 <dd>置換の対象となる {{jsxref("String")}} です。</dd>
 <dt><code><var>newSubStr</var></code> (置換内容)</dt>
 <dd>部分文字列を置き換える {{jsxref("String")}} です。特殊な置換パターンの数値に対応しています。 {{jsxref("String.prototype.replace()")}} ページの{{jsxref("String.prototype.replace", "引数としての文字列の指定", "#Specifying_a_string_as_a_parameter", 1)}}の節を参照してください。</dd>
 <dt><code><var>function</var></code> (置換内容)</dt>
 <dd>新しい部分文字列を生成するために呼び出される関数。この関数に提供される引数については、{{jsxref("String.prototype.replace()")}} ページの{{jsxref("String.prototype.replace", "引数としての関数の指定", "#Specifying_a_function_as_a_parameter", 1)}}の節を見てください。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>一部またはすべてのパターンの一致箇所が置換内容によって置き換えられた新しい文字列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>このメソッドは {{jsxref("String.prototype.replace()")}} の中で、 <code>pattern</code> 引数が {{jsxref("RegExp")}} オブジェクトであった場合に内部的に呼び出されます。たとえば、次の 2 つの例は同じ結果を返します。</p>

<pre class="brush: js notranslate">'abc'.replace(/a/, 'A');

/a/[Symbol.replace]('abc', 'A');</pre>

<p>このメソッドは、 <code>RegExp</code> サブクラスの置換動作をカスタマイズするために存在しています。</p>

<p>{{jsxref("String.prototype.replace()")}} は <code>pattern</code> 引数が {{jsxref("RegExp")}} オブジェクトでは<strong>ない</strong>場合、このメソッドの呼び出しや {{jsxref("RegExp")}} オブジェクトの生成を行いません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Direct_call" name="Direct_call">直接呼出し</h3>

<p><code>this</code> と引数の順序が異なる点を除いて、このメソッドは {{jsxref("String.prototype.replace()")}} とほどんど同じ使い方ができます。</p>

<pre class="brush: js notranslate">var re = /-/g;
var str = '2016-01-01';
var newstr = re[Symbol.replace](str, '.');
console.log(newstr);  // 2016.01.01
</pre>

<h3 id="Using_replace_in_subclasses" name="Using_replace_in_subclasses">サブクラスでの @@replace の使用</h3>

<p>既定の動作を修正するために、{{jsxref("RegExp")}} のサブクラスで <code>[@@replace]()</code> メソッドをオーバーライドできます。</p>

<pre class="brush: js notranslate">class MyRegExp extends RegExp {
  constructor(pattern, flags, count) {
    super(pattern, flags);
    this.count = count;
  }
  [Symbol.replace](str, replacement) {
    // Perform @@replace |count| times.
    var result = str;
    for (var i = 0; i &lt; this.count; i++) {
      result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
    }
    return result;
  }
}

var re = new MyRegExp('\\d', '', 3);
var str = '01234567';
var newstr = str.replace(re, '#'); // String.prototype.replace calls re[@@replace].
console.log(newstr); // ###34567</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype-@@replace', 'RegExp.prototype[@@replace]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.RegExp.@@replace")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.replace()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
