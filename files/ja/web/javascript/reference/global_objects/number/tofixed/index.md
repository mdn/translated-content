---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
tags:
  - JavaScript
  - メソッド
  - Number
  - Prototype
  - リファレンス
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toFixed
---
<div>{{JSRef}}</div>

<p><strong><code>toFixed()</code></strong> メソッドは、数を固定小数点表記を用いて整形します。</p>

<div>{{EmbedInteractiveExample("pages/js/number-tofixed.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>numObj</var>.toFixed([<var>digits</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>digits</var></code> {{optional_inline}}</dt>
 <dd>小数点の後に現れる桁の数です。これは <code>0</code> 以上 <code>20</code> 以下の値、実装によっては、さらに広い値の範囲をサポートしているかもしれません。この引数が省略されると、それは <code>0</code> として扱われます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた数値を固定小数点表記を用いて表した文字列です。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>{{jsxref("RangeError")}}</dt>
 <dd><code><var>digits</var></code> が小さすぎたり大きすぎたりした場合。 <code>0</code> 以上 <code>100</code> 以下の値では {{jsxref("RangeError")}} が発生しません。実装によっては、より大きな値や小さな値に対応しているかもしれません。</dd>
 <dt>{{jsxref("TypeError")}}</dt>
 <dd>このメソッドが {{jsxref( "Number")}} ではないオブジェクト上で実行された場合。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p><strong><code>toFixed()</code></strong> は <code><var>numObj</var></code> の文字列表記を、指数表記を使用せず、小数点以下を正確に <code><var>digits</var></code> 桁として返します。必要に応じて数値は丸められ、小数部は指定された長さになるよう必要に応じて 0 で埋められます。 <code><var>numObj</var></code> の絶対値が <code>1e+21</code> 以上の場合は、このメソッドは単純に {{jsxref("Number.prototype.toString()")}} を呼び出し、指数表記での文字列を返します。</p>

<div class="warning">
<p><strong>警告:</strong> 浮動小数点数は、二進数で正確にすべての十進数値を表すことができるわけではありません。これは予想外の結果を導くことがあり、例えば <code>0.1 + 0.2 === 0.3</code> は <code>false</code> を返します。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_toFixed" name="Using_toFixed">toFixed の使用</h3>

<pre class="brush: js notranslate">let numObj = 12345.6789

numObj.toFixed()       // '12346' を返す : 四捨五入され小数部がなくなる
numObj.toFixed(1)      // '12345.7' を返す : 四捨五入
numObj.toFixed(6)      // '12345.678900'を返す : 0 を追加する
(1.23e+20).toFixed(2)  // '123000000000000000000.00' を返す
(1.23e-10).toFixed(2)  // '0.00' を返す
2.34.toFixed(1)        // '2.3' を返す
2.35.toFixed(1)        // '2.4' を返す。切り上げ。
2.55.toFixed(1)        // '2.5' を返す。切り捨て。上記警告を参照。
-2.34.toFixed(1)       // -2.3 を返す (演算子の優先順位上、マイナスの数値リテラルは文字列を返さない)
(-2.34).toFixed(1)     // '-2.3'
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
   <td>{{SpecName('ESDraft', '#sec-number.prototype.tofixed', 'Number.prototype.toFixed')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.toFixed")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number.prototype.toExponential()")}}</li>
 <li>{{jsxref("Number.prototype.toPrecision()")}}</li>
 <li>{{jsxref("Number.prototype.toString()")}}</li>
</ul>
