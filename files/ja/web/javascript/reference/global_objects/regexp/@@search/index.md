---
title: 'RegExp.prototype[@@search]()'
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@search
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expression
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@search
---
<div>{{JSRef}}</div>

<p><strong><code>[@@search]()</code></strong> メソッドは、<code>this</code> 正規表現と文字列の間で一致させるための検索を実行します。</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@search.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>regexp</var>[Symbol.search](<var>str</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>str</var></code></dt>
 <dd>検索対象の {{jsxref("String")}} です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<dl>
 <dt>integer</dt>
 <dd>成功した場合、<code>[@@search]()</code> は文字列内で正規表現に最初に一致したインデックスを返します。そうではない場合、-1 を返します。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>このメソッドは、 {{jsxref("String.prototype.search()")}} の内部で呼び出されます。たとえば、次の 2 つの例は同じ結果を返します。</p>

<pre class="brush: js notranslate">'abc'.search(/a/);

/a/[Symbol.search]('abc');</pre>

<p>このメソッドは、<code>RegExp</code> サブクラスで検索動作をカスタマイズするために存在しています。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Direct_call" name="Direct_call">直接呼出し</h3>

<p>このメソッドは、<code>this</code> と引数順が異なることを除いて {{jsxref("String.prototype.search()")}} とほぼ同じ方法で使用できます。</p>

<pre class="brush: js notranslate">var re = /-/g;
var str = '2016-01-02';
var result = re[Symbol.search](str);
console.log(result);  // 4
</pre>

<h3 id="Using_search_in_subclasses" name="Using_search_in_subclasses">サブクラスでの @@search の使用</h3>

<p>{{jsxref("RegExp")}} のサブクラスは、動作を修正するために <code>[@@search]()</code> メソッドをオーバーライドできます。</p>

<pre class="brush: js notranslate">class MyRegExp extends RegExp {
  constructor(str) {
    super(str)
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

var re = new MyRegExp('a+b');
var str = 'ab a+b';
var result = str.search(re); // String.prototype.search は再定義した [@@search] を呼び出す。
console.log(result); // 3
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
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype-@@search', 'RegExp.prototype[@@search]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.RegExp.@@search")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.search()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
