---
title: Function.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
tags:
  - Deprecated
  - Function
  - JavaScript
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Function/caller
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p><strong><code><var>function</var>.caller</code></strong> プロパティは、指定した関数の呼び出し元の関数を返します。厳格モード、非同期関数、ジェネレーター関数の呼び出し元については <code>null</code> を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p>関数 <code>f</code> が最上位のコードで呼び出された場合、 <code>f.caller</code> の値は {{jsxref("null")}} に、それ以外の場合の値は <code>f</code> を呼び出した関数になります。厳格モード、非同期関数、ジェネレーター関数の呼び出し元についても <code>null</code> を返します。</p>

<p>このプロパティは、廃止された {{jsxref("Functions/arguments", "arguments")}} オブジェクトの {{jsxref("Functions/arguments/caller", "arguments.caller")}} プロパティを置き換えます。</p>

<p>特殊プロパティである <code>__caller__</code> は呼び出し元の activation オブジェクトを返し、スタックの再現に利用できましたが、セキュリティ上の理由により削除されました。</p>

<h3 id="Notes" name="Notes">注</h3>

<p>再帰呼び出しの場合、このプロパティを用いてコールスタックを再現することはできません。以下について考えてみましょう。</p>

<pre class="brush: js notranslate">function f(n) { g(n - 1); }
function g(n) { if (n &gt; 0) { f(n); } else { stop(); } }
f(2);
</pre>

<p><code>stop()</code> が呼び出された時点のコールスタックは以下のようになるでしょう。</p>

<pre class="brush: js notranslate">f(2) -&gt; g(1) -&gt; f(1) -&gt; g(0) -&gt; stop()
</pre>

<p>以下は真になります。</p>

<pre class="brush: js notranslate">stop.caller === g &amp;&amp; f.caller === g &amp;&amp; g.caller === f
</pre>

<p>従って、<code>stop()</code> 関数のスタックトレースを以下のようにして取得するとします。</p>

<pre class="brush: js notranslate">var f = stop;
var stack = 'Stack trace:';
while (f) {
  stack += '\n' + f.name;
  f = f.caller;
}
</pre>

<p>これは無限ループになります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Checking_the_value_of_a_functions_caller_property" name="Checking_the_value_of_a_functions_caller_property">関数の caller プロパティの値を確認する</h3>

<p>以下のコードは、関数の <code>caller</code> プロパティの値を確認します。</p>

<pre class="brush: js notranslate">function myFunc() {
  if (myFunc.caller == null) {
    return 'The function was called from the top!';
  } else {
    return 'This function\'s caller was ' + myFunc.caller;
  }
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>いずれの標準仕様でも定義されていません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Function.caller")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Function.name", "Function.name")}}</li>
 <li>{{jsxref("Functions/arguments", "arguments")}}</li>
</ul>
