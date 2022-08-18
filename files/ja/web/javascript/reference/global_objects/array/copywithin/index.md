---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---
<div>{{JSRef}}</div>

<p><code><strong>copyWithin()</strong></code> メソッドは、サイズを変更せずに、配列の一部を同じ配列内の別の場所にシャローコピーして返します。</p>

<div>{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code><var>arr</var>.copyWithin(<var>target[</var>, <var>start</var>[, <var>end</var>]])</code></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>シーケンスのコピー先となる、0 から始まるインデックスです。負の場合、<code>target</code> は最後から数えられます。</dd>
 <dd><code>target</code> が <code>arr.length</code> 以上の場合、何もコピーされません。 <code>target</code> が <code>start</code> より後に配置されている場合、コピーされたシーケンスは <code>arr.length</code> に合うように切り詰められます。</dd>
 <dt><code>start</code> {{optional_inline}}</dt>
 <dd>要素のコピー元の始まりを表す、0 から始まるインデックスです。負の場合、 <code>start</code> は最後から数えられます。</dd>
 <dd><code>start</code> が省略された場合、<code>copyWithin</code> は最初の要素からコピーします（つまり、初期値は 0 です）。</dd>
 <dt><code>end</code> {{optional_inline}}</dt>
 <dd>要素のコピー元の末尾を表す、0 から始まるインデックスです。 <code>copyWithin</code> のコピーは <code>end</code> を含みません。負の場合、 <code>end</code> は最後から数えられます。</dd>
 <dd><code>end</code> が省略された場合、 <code>copyWithin</code> は最後までコピーします（つまり、初期値は <code>arr.length</code> です）。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>変更された配列です。</p>

<h2 id="Description" name="Description">説明</h2>

<p><code>copyWithin</code> メソッドは C 言語や C++ 言語の <code>memmove</code> のような動きをし、{{jsxref("Array")}} のデータをシフトさせる高いパフォーマンスのメソッドです。これは特に {{jsxref("TypedArray/copyWithin", "TypedArray")}} の同名メソッドに当てはまります。シーケンスはコピーされ貼り付けられる処理が一命令で行われます。コピー＆ペースト領域が重なっている場合でも、ペーストされたシーケンスはコピーされた値を持ちます。</p>

<p><code>copyWithin</code> 関数は、ジェネリック関数として動作します。<code>this</code> 値が {{jsxref("Array")}} オブジェクトである必要はありません。</p>

<p><code>copyWithin</code> は<em>可変メソッド</em>であり、<code>this</code> オブジェクト自身を変更し、コピーではなく、オブジェクト自身を返します。</p>



<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<pre class="brush: js notranslate">if (!Array.prototype.copyWithin) {
　 Object.defineProperty(Array.prototype, 'copyWithin', {
　 　 value: function(target, start/*, end*/) {
　　    // Steps 1-2.
   　　 if (this == null) {
　　      throw new TypeError('this is null or not defined');
   　　 }

    　　var O = Object(this);

　　    // Steps 3-5.
　　    var len = O.length &gt;&gt;&gt; 0;

　　    // Steps 6-8.
   　　 var relativeTarget = target &gt;&gt; 0;

　　    var to = relativeTarget &lt; 0 ?
   　　   Math.max(len + relativeTarget, 0) :
      　　Math.min(relativeTarget, len);

　　    // Steps 9-11.
   　　 var relativeStart = start &gt;&gt; 0;

　　    var from = relativeStart &lt; 0 ?
   　　   Math.max(len + relativeStart, 0) :
      　　Math.min(relativeStart, len);

　　    // Steps 12-14.
   　　 var end = arguments[2];
   　　 var relativeEnd = end === undefined ? len : end &gt;&gt; 0;

　　    var final = relativeEnd &lt; 0 ?
   　　   Math.max(len + relativeEnd, 0) :
      　　Math.min(relativeEnd, len);

　　    // Step 15.
   　　 var count = Math.min(final - from, len - to);

　　    // Steps 16-17.
   　　 var direction = 1;

　　    if (from &lt; to &amp;&amp; to &lt; (from + count)) {
   　　   direction = -1;
　    　　from += count - 1;
  　　    to += count - 1;
  　　  }

　　    // Step 18.
   　　 while (count &gt; 0) {
      　　if (from in O) {
        　　O[to] = O[from];
　　      } else {
   　　     delete O[to];
      　　}

　　      from += direction;
   　　   to += direction;
      　　count--;
　　    }

   　　 // Step 19.
　　    return O;
　　  },
　 　 configurable: true,
　  　writable: true
　 });
}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="copyWithin_の使用">copyWithin の使用</h3>

<pre class="brush: js notranslate">[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, -2, -1);
// [4, 2, 3, 4, 5]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
</pre>


<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.copywithin', 'Array.prototype.copyWithin')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("javascript.builtins.Array.copyWithin")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
</ul>
