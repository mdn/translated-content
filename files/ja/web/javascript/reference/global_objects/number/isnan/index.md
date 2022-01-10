---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - Number
  - isNaN
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isNaN
---
<div>{{JSRef}}</div>

<p><strong><code>Number.isNaN()</code></strong> メソッドは、渡された値が {{jsxref("NaN")}} であり、かつその型が {{jsxref("Number")}} であるかどうかを判断します。元となるグローバルの {{jsxref("isNaN", "isNaN()")}} よりも堅牢な版です。</p>

<div>{{EmbedInteractiveExample("pages/js/number-isnan.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Number.isNaN(<var>value</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>{{jsxref("NaN")}} かどうかテストされる値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた値が {{jsxref("NaN")}} であり、かつその型が {{jsxref("Number")}} である場合は <strong>true</strong>、それ以外の場合は <strong>false</strong> です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} と {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}} の等価演算子ではどちらも、 {{jsxref("Global_Objects/NaN", "NaN")}} が {{jsxref("Global_Objects/NaN", "NaN")}} <em>である</em>かどうかを検査すると <code>false</code> と評価されてしまうため、 <code>Number.isNaN()</code> 関数が必要となります。この状況は、 JavaScript においてあり得る他のすべての値の比較と異なります。</p>

<p>グローバルの {{jsxref("Global_Objects/isNaN", "isNaN()")}} 関数とは異なり、 <code>Number.isNaN()</code> は強制的に引数が数値に変換される問題の影響をうけません。これは、通常 {{jsxref("NaN")}} に変換されるが実際には {{jsxref("NaN")}} ではない値が、安全に渡されることを意味します。つまりこの関数は、数値型であり、かつ {{jsxref("NaN")}} である値が渡されたときのみ、 <code>true</code> を返すということです。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_isNaN" name="Using_isNaN">isNaN の使用</h3>

<pre class="brush: js notranslate">Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0);      // true

// たとえば、以下の値を isNaN() グローバル関数に渡すと true が返される
Number.isNaN('NaN');      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN('blabla');   // false

// 以下はすべて false を返す
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>以下の例が動作するのは、 NaN が JavaScript で唯一、自分自身と比較して等しくない値だからです。</p>

<pre class="brush: js notranslate">Number.isNaN = Number.isNaN || function isNaN(input) {
    return typeof input === 'number' &amp;&amp; input !== input;
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
   <td>{{SpecName('ESDraft', '#sec-number.isnan', 'Number.isnan')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("javascript.builtins.Number.isNaN")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number")}}</li>
 <li>{{jsxref("isNaN", "isNaN()")}}</li>
</ul>
