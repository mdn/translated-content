---
title: 'RegExp.prototype[@@matchAll]()'
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
  - メソッド
  - 正規表現
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll
---
<div>{{JSRef}}</div>

<p><strong><code>[@@matchAll]</code></strong> メソッドは、文字列に対する正規表現で一致するすべてのものを返します。</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@matchall.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>regexp</var>[Symbol.matchAll](<var>str</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>str</var></code></dt>
 <dd>一致の対象となる {{jsxref("String")}} です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><a href="/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators">イテレーター</a>です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>このメソッドは内部的に {{jsxref("String.prototype.matchAll()")}} を呼び出します。例えば、以下の2つの例は同じ結果を返します。</p>

<pre class="brush: js notranslate">'abc'.matchAll(/a/);

/a/[Symbol.matchAll]('abc');</pre>

<p>このメソッドは <code>matchAll()</code> の動作を {{jsxref('RegExp')}} のサブクラスの中でカスタマイズするために存在します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Direct_call" name="Direct_call">直接呼び出し</h3>

<p>このメソッドは {{jsxref("String.prototype.matchAll()")}}, とほぼ同様に使用することができますが、 <code>this</code> の値と引数の順序が違う点が異なります。</p>

<pre class="brush: js notranslate">let re = /[0-9]+/g;
let str = '2016-01-02';
let result = re[Symbol.matchAll](str);

console.log(Array.from(result, x =&gt; x[0]));
// ["2016", "01", "02"]
</pre>

<h3 id="Using_matchAll_in_subclasses" name="Using_matchAll_in_subclasses">サブクラスでの @@matchAll の使用</h3>

<p>{{jsxref("RegExp")}} のサブクラスは <code>[@@matchAll]()</code> メソッドを上書きして既定の動作を変更することができます。</p>

<p>例えば、 {{jsxref("Array")}} を<a href="/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators">イテレーター</a>の代わりに返すことができます。</p>

<pre class="brush: js notranslate">class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    } else {
      return Array.from(result);
    }
  }
}

const re = new MyRegExp('([0-9]+)-([0-9]+)-([0-9]+)', 'g');
const str = '2016-01-02|2019-03-07';
const result = str.matchAll(re);
console.log(result[0]); // [ "2016-01-02", "2016", "01", "02" ]
console.log(result[1]); // [ "2019-03-07", "2019", "03", "07" ]
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
   <td>{{SpecName('ESDraft', '#sec-regexp-prototype-matchall', 'RegExp.prototype[@@matchAll]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.RegExp.@@matchAll")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{JSxRef("String.prototype.matchAll()")}}</li>
 <li>{{JSxRef("Symbol.matchAll")}}</li>
</ul>
