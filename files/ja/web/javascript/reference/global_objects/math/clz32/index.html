---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/clz32
---
<div>{{JSRef}}</div>

<p><strong><code>Math.clz32()</code></strong> 関数は、引数として与えられた数値の 32 ビットバイナリ表現での先頭の 0 の個数を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/math-clz32.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Math.clz32(<var>x</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>x</var></code></dt>
 <dd>数値。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた数値の32ビットバイナリ表現での先頭の 0 の個数。</p>

<h2 id="Description" name="Description">解説</h2>

<p>"<code>clz32</code>" は <strong>CountLeadingZeroes32</strong> の省略形です。</p>

<p><code><var>x</var></code> が数値でない場合、まず数値に変換され、32ビット符号なし整数値に変換されます。</p>

<p>変換された 32 ビット符号なし整数値が <code>0</code> の場合、すべてのビットが <code>0</code> であるため、<code>32</code> を返します。</p>

<p>この関数は <a href="/ja/docs/Emscripten">Emscripten</a> のような JS にコンパイルするシステムに対して特に役に立ちます。</p>

<h3 id="Count_Leading_Ones_and_beyond" name="Count_Leading_Ones_and_beyond">先頭の1を数える</h3>

<p>現在のところ、 "Count Leading Ones" を表す <code>Math.clon</code> はありません ("clo" ではなく "clon" と名付けられています、なぜなら "clo" と "clz" は特に英語を話さない人にとっては似すぎているからです)。しかし、 <code>clon</code> 関数は、数値のビットを逆数にして、その結果を <code>Math.clz32</code> に渡すことで簡単に作ることができます。 1 の逆数は 0 であり、その逆も同様です。このように、ビットを逆数にすると、測定された 0 の量が (<code>Math.clz32</code> からの) 逆数になり、 <code>Math.clz32</code> はゼロの数を数えるのではなく、1 の数を数えるようになります。</p>

<p>以下の32ビットワード値を想定してみます。</p>

<pre class="brush: js notranslate">var a = 32776;   // 00000000000000001000000000001000 (16 leading zeros)
Math.clz32(a);   // 16

var b = ~32776;  // 11111111111111110111111111110111 (32776 inversed, 0 leading zeros)
Math.clz32(b);   // 0 (this is equal to how many leading one's there are in a)</pre>

<p>この論理を使用すると、 <code>clon</code> 関数は次のように作成することができます。</p>

<pre class="brush: js notranslate">var clz = Math.clz32;
function clon(integer){
    return clz(~integer);
}
</pre>

<p>さらに、この技術を拡張して、以下に示すようなジャンプレスの「Count Trailing Zeros」と「Count Trailing Ones」関数を作成することができます。以下の <code>ctrz</code> 関数は、すべての上位ビットを最も低いビットで埋め、そのビットを否定して上位のセットビットをすべて消去するので、clz が使用できます。</p>

<pre class="brush: js notranslate">var clz = Math.clz32;
function ctrz(integer){ // count trailing zeros
    // 1. fill in all the higher bits after the first one
    integer |= integer &lt;&lt; 16;
    integer |= integer &lt;&lt; 8;
    integer |= integer &lt;&lt; 4;
    integer |= integer &lt;&lt; 2;
    integer |= integer &lt;&lt; 1;
    // 2. Now, inversing the bits reveals the lowest bits
    return 32 - clz(~integer) |0; // `|0` ensures integer coercion
}
function ctron(integer){ // count trailing ones
    // No shift-filling-in-with-ones operator is available in
    // JavaScript, so the below code is the fastest
    return ctrz(~integer);
    /* Alternate implementation for demonstrational purposes:
       // 1. erase all the higher bits after the first zero
       integer &amp;= (integer &lt;&lt; 16) | 0xffff;
       integer &amp;= (integer &lt;&lt; 8 ) | 0x00ff;
       integer &amp;= (integer &lt;&lt; 4 ) | 0x000f;
       integer &amp;= (integer &lt;&lt; 2 ) | 0x0003;
       integer &amp;= (integer &lt;&lt; 1 ) | 0x0001;
       // 2. Now, inversing the bits reveals the lowest zeros
       return 32 - clon(~integer) |0;
    */
}
</pre>

<p>これらのヘルパー関数を ASM.JS モジュールに入れます。そして、そうすれば、真のパフォーマンスの傑作ができあがります。このような状況は、まさに ASM.JS のために設計されたものです。</p>

<pre class="brush: js notranslate">var countTrailsMethods = (function(stdlib, foreign, heap) {
    "use asm";
    var clz = stdlib.Math.clz32;
    function ctrz(integer) { // count trailing zeros
        integer = integer | 0; // coerce to an integer
        // 1. fill in all the higher bits after the first one
        // ASMjs for some reason does not allow ^=,&amp;=, or |=
        integer = integer | (integer &lt;&lt; 16);
        integer = integer | (integer &lt;&lt; 8);
        integer = integer | (integer &lt;&lt; 4);
        integer = integer | (integer &lt;&lt; 2);
        integer = integer | (integer &lt;&lt; 1);
        // 2. Now, inversing the bits reveals the lowest bits
        return 32 - clz(~integer) |0;
    }
    function ctron(integer) { // count trailing ones
        integer = integer | 0; // coerce to an integer
        return ctrz(~integer) |0;
    }
    // unfourtunately, ASM.JS demands slow crummy objects:
    return {a: ctrz, b: ctron};
})(window, null, null);
var ctrz = countTrailsMethods.a;
var ctron = countTrailsMethods.b;</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.clz32" name="Using_Math.clz32">Math.clz32() の使用</h3>

<pre class="brush: js notranslate">Math.clz32(1);           // 31
Math.clz32(1000);        // 22
Math.clz32();            // 32

var stuff = [NaN, Infinity, -Infinity, 0, -0, false, null, undefined, 'foo', {}, []];
stuff.every(n =&gt; Math.clz32(n) == 32);  // true

Math.clz32(true);        // 31
Math.clz32(3.5);         // 30</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>以下のポリフィルが最も効果的です。</p>

<pre class="brush: js notranslate">if (!Math.clz32) Math.clz32 = (function(log, LN2){
  return function(x) {
    // Let n be ToUint32(x).
    // Let p be the number of leading zero bits in
    // the 32-bit binary representation of n.
    // Return p.
    var asUint = x &gt;&gt;&gt; 0;
    if (asUint === 0) {
      return 32;
    }
    return 31 - (log(asUint) / LN2 | 0) |0; // the "| 0" acts like math.floor
  };
})(Math.log, Math.LN2);
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
   <td>{{SpecName('ESDraft', '#sec-math.clz32', 'Math.clz32')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.clz32")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Math")}}</li>
 <li>{{jsxref("Math.imul")}}</li>
</ul>
