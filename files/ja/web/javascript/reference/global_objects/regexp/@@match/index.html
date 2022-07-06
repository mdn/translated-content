---
title: 'RegExp.prototype[@@match]()'
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@match
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expression
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@match
---
<div>{{JSRef}}</div>

<p><strong><code>[@@match]()</code></strong> メソッドは、<em>文字列</em>の<em>正規表現</em>に一致した部分を取得します。</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@match.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>regexp</var>[Symbol.match](<var>str</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>str</var></code></dt>
 <dd>一致の対象となる {{jsxref("String")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>一致した全体の結果と括弧が捕捉した一致箇所の結果を含む {{jsxref("Array")}}。一致するものがなかった場合は、{{jsxref("null")}}。</p>

<h2 id="Description" name="Description">解説</h2>

<p>このメソッドは、{{jsxref("String.prototype.match()")}} で内部的に呼び出されます。</p>

<p>たとえば、次の 2 つの例は同じ結果を返します。</p>

<pre class="brush: js notranslate">'abc'.match(/a/);

/a/[Symbol.match]('abc');</pre>

<p>このメソッドは、<code>RegExp</code> サブクラス内で一致の振る舞いをカスタマイズするために存在しています。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Direct_call" name="Direct_call">直接呼び出し</h3>

<p>このメソッドは、<em>ほとんど</em> {{jsxref("String.prototype.match()")}} と同じ方法で使用することができますが、 <code>this</code> と引数の並び順が異なります。</p>

<pre class="brush: js notranslate">let re = /[0-9]+/g;
let str = '2016-01-02';
let result = re[Symbol.match](str);
console.log(result);  // ["2016", "01", "02"]
</pre>

<h3 id="Using_match_in_subclasses" name="Using_match_in_subclasses">サブクラスで @@match を使用</h3>

<p>{{jsxref("RegExp")}} のサブクラスは、既定の動作を修正するために <code>[@@match]()</code> メソッドをオーバーライドできます。</p>

<pre class="brush: js notranslate">class MyRegExp extends RegExp {
  [Symbol.match](str) {
    let result = RegExp.prototype[Symbol.match].call(this, str);
    if (!result) return null;
    return {
      group(n) {
        return result[n];
      }
    };
  }
}

let re = new MyRegExp('([0-9]+)-([0-9]+)-([0-9]+)');
let str = '2016-01-02';
let result = str.match(re); // String.prototype.match calls re[@@match].
console.log(result.group(1)); // 2016
console.log(result.group(2)); // 01
console.log(result.group(3)); // 02
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
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype-@@match', 'RegExp.prototype[@@match]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.RegExp.@@match")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.match()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
