---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - imul
translation_of: Web/JavaScript/Reference/Global_Objects/Math/imul
---
<div>{{JSRef}}</div>

<p><strong><code>Math.imul()</code></strong> 関数は、2つの引数で C 言語風の32ビット乗算を行った結果を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/math-imul.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力してくださる場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>product</var> = Math.imul(<var>a</var>, <var>b</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>a</var></code></dt>
 <dd>第一の数値。</dd>
 <dt><code><var>b</var></code></dt>
 <dd>第二の数値。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた引数で C 言語風の32ビット乗算を行った結果です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>Math.imul()</code> で C 言語と同様のの意味を持った32ビット乗算を行うことができます。この機能は <a href="http://en.wikipedia.org/wiki/Emscripten">Emscripten</a> などのプロジェクトに有効です。</p>

<p><code>imul()</code> は <code>Math</code> の静的メソッドなので、常に <code>Math.imul()</code> として使用し、自分で <code>Math</code> オブジェクトを生成してそのメソッドとして使用しないでください。 (<code>Math</code> にはコンストラクターがありません)。</p>

<p>通常の JavaScript の浮動小数点数を imul で使用すると、性能が低下します。これは、乗算のために浮動小数点から整数に変換し、乗算された整数を浮動小数点に変換するというコストのかかる作業があるからです。 imul が存在する理由は、 (今のところ) たった1つの状況では imul の方が高速だからです。それは AsmJS です。 AsmJS は JIST オプティマイザーが JavaScript で内部整数をより簡単に実装できるようにします。内部的に整数として格納されている2つの数値を imul で乗算すること (これは AsmJS でのみ可能です) は、 Math.imul が現在のブラウザーで性能を発揮する可能性がある唯一の潜在的な状況です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.imul" name="Using_Math.imul">Math.imul() の使用</h3>

<pre class="brush: js notranslate">Math.imul(2, 4);          // 8
Math.imul(-1, 8);         // -8
Math.imul(-2, -2);        // 4
Math.imul(0xffffffff, 5); // -5
Math.imul(0xfffffffe, 5); // -10
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>これは次の関数でエミュレートすることができます。</p>

<pre class="brush: js notranslate">if (!Math.imul) Math.imul = function(a, b) {
  var aHi = (a &gt;&gt;&gt; 16) &amp; 0xffff;
  var aLo = a &amp; 0xffff;
  var bHi = (b &gt;&gt;&gt; 16) &amp; 0xffff;
  var bLo = b &amp; 0xffff;
  // the shift by 0 fixes the sign on the high part
  // the final |0 converts the unsigned value into a signed value
  return ((aLo * bLo) + (((aHi * bLo + aLo * bHi) &lt;&lt; 16) &gt;&gt;&gt; 0) | 0);
};</pre>

<p>しかし、このポリフィルが使われるであろうブラウザーは、 JavaScript の内部整数型で最適化されておらず、すべての数値に浮動小数点を使用している可能性が高いため、次の関数の方が性能が高くなります。</p>

<pre class="brush: js notranslate">if (!Math.imul) Math.imul = function(opA, opB) {
  opB |= 0; // ensure that opB is an integer. opA will automatically be coerced.
  // floating points give us 53 bits of precision to work with plus 1 sign bit
  // automatically handled for our convienence:
  // 1. 0x003fffff /*opA &amp; 0x000fffff*/ * 0x7fffffff /*opB*/ = 0x1fffff7fc00001
  //    0x1fffff7fc00001 &lt; Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
  var result = (opA &amp; 0x003fffff) * opB;
  // 2. We can remove an integer coersion from the statement above because:
  //    0x1fffff7fc00001 + 0xffc00000 = 0x1fffffff800001
  //    0x1fffffff800001 &lt; Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
  if (opA &amp; 0xffc00000 /*!== 0*/) result += (opA &amp; 0xffc00000) * opB |0;
  return result |0;
};</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.imul', 'Math.imul')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.imul")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://en.wikipedia.org/wiki/Emscripten">Emscripten</a></li>
</ul>
