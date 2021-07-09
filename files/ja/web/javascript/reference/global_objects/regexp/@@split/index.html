---
title: 'RegExp.prototype[@@split]()'
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@split
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@split
---
<div>{{JSRef}}</div>

<p><strong><code>[@@split]()</code></strong> メソッドは、文字列を部分文字列に区切ることによって、 {{jsxref("String")}} オブジェクトを文字列の配列に分割します。</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@split.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>regexp</var>[Symbol.split](<var>str</var>[, <var>limit</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>str</var></code></dt>
 <dd>分割操作の対象。</dd>
 <dt><code><var>limit</var></code> {{optional_inline}}</dt>
 <dd>
 <p>検出される分割数の制限を指定する整数。 <code>[@@split]()</code> メソッドは、 <code>this</code> RegExp パターン (または上記の構文では <code><var>regexp</var></code>) に一致するたびに、分割項目の数が <code><var>limit</var></code> と一致するか、文字列が <code>this</code> パターンを満たなくなるまで、分割を行います。</p>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>要素として部分文字列を含む {{jsxref("Array")}}。</p>

<h2 id="Description" name="Description">解説</h2>

<p>このメソッドは {{jsxref("String.prototype.split()")}} の内部で、 <code>separator</code> 引数が <code>@@split</code> メソッドを持つオブジェクト、たとえば {{jsxref("RegExp")}} オブジェクトだった場合に呼び出されます。たとえば、次の 2 つの例は同じ結果を返します。</p>

<pre class="brush: js notranslate">'a-b-c'.split(/-/);

/-/[Symbol.split]('a-b-c');</pre>

<p>このメソッドは、<code>RegExp</code> のサブクラスで <code>split()</code> の動作をカスタマイズするために存在します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Direct_call" name="Direct_call">直接呼出し</h3>

<p><code>this</code> の扱いと引数の並び順を除いて、このメソッドは {{jsxref("String.prototype.split()")}} とほとんど同じように使用できます。</p>

<pre class="brush: js notranslate">let re = /-/g;
let str = '2016-01-02';
let result = re[Symbol.split](str);
console.log(result);  // ["2016", "01", "02"]
</pre>

<h3 id="Using_split_in_subclasses" name="Using_split_in_subclasses">サブクラスで @@split を使用する</h3>

<p>既定の動作を修正するために、{{jsxref("RegExp")}} のサブクラスで <code>[@@split]()</code> メソッドをオーバーライドできます。</p>

<pre class="brush: js notranslate">class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    let result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map(x =&gt; "(" + x + ")");
  }
}

let re = new MyRegExp('-');
let str = '2016-01-02';
let result = str.split(re); // String.prototype.split calls re[@@split].
console.log(result); // ["(2016)", "(01)", "(02)"]
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
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype-@@split', 'RegExp.prototype[@@split]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.RegExp.@@split")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.split()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
