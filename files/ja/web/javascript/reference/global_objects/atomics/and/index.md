---
title: Atomics.and()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/and
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
  - メソッド
  - 共有メモリ
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/and
---
<div>{{JSRef}}</div>

<p>静的な <code><strong>Atomics</strong></code><strong><code>.and()</code></strong> メソッドは、配列内の指定した位置の値に指定した値でビット単位の AND を計算し、その位置の古い値を返します。これは不可分操作で、修正された値が書き戻されるまで、他の書き込みが起こらないことを保証します。</p>

<div>{{EmbedInteractiveExample("pages/js/atomics-and.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">Atomics.and(<var>typedArray</var>, <var>index</var>, <var>value</var>)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>typedArray</var></code></dt>
 <dd>共有整数型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} の何れかです。</dd>
 <dt><code><var>index</var></code></dt>
 <dd><code><var>typedArray</var></code> でビット単位の AND を計s名する位置です。</dd>
 <dt><code><var>value</var></code></dt>
 <dd>ビット単位の AND を取る数値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定された位置にあった古い値です (<code><var>typedArray</var>[<var>index</var>]</code>)。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<ul>
 <li><code><var>typedArray</var></code> が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。</li>
 <li><code><var>typedArray</var></code> が共有型付き配列型ではない場合、 {{jsxref("TypeError")}} が発生します。</li>
 <li><code><var>index</var></code> が <code><var>typedArray</var></code> の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。</li>
</ul>

<h2 id="Description" name="Description">解説</h2>

<p>ビット単位の AND 操作は、 <code>a</code> と <code>b</code> の両方が 1 であった場合のみ 1 を生成します。 AND 操作の真理値表を示します。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th><code>a</code></th>
   <th><code>b</code></th>
   <th><code>a &amp; b</code></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>0</td>
   <td>0</td>
   <td>0</td>
  </tr>
  <tr>
   <td>0</td>
   <td>1</td>
   <td>0</td>
  </tr>
  <tr>
   <td>1</td>
   <td>0</td>
   <td>0</td>
  </tr>
  <tr>
   <td>1</td>
   <td>1</td>
   <td>1</td>
  </tr>
 </tbody>
</table>

<p>例えば、ビット単位の AND を <code>5 &amp; 1</code> で行うと、結果は <code>0001</code> すなわち10進数で1となります。</p>

<pre>5  0101
1  0001
   ----
1  0001</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_add" name="Using_add">add() の使用</h3>

<pre class="brush: js">const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.and(ta, 0, 1); // returns 0, the old value
Atomics.load(ta, 0);  // 1
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
   <td>{{SpecName('ESDraft', '#sec-atomics.and', 'Atomics.and')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Atomics.and")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Atomics")}}</li>
 <li>{{jsxref("Atomics.or()")}}</li>
 <li>{{jsxref("Atomics.xor()")}}</li>
</ul>
