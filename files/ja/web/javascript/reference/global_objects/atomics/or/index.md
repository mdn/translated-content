---
title: Atomics.or()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/or
tags:
  - Atomics
  - JavaScript
  - メソッド
  - 共有メモリー
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/or
---
{{JSRef}}

静的な <strong>Atomics</strong><strong>.or()</strong> メソッドは、配列内の指定した位置の値に指定した値でビット単位の OR を計算し、その位置にあった古い値を返します。これは不可分操作で、修正された値が書き戻されるまで、他の書き込みが起こらないことを保証します。

{{EmbedInteractiveExample("pages/js/atomics-or.html")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

## 構文

<pre class="syntaxbox notranslate">Atomics.and(typedArray, index, value)
</pre>

### 引数

- typedArray
 <dd>整数の型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, {{jsxref("BigUint64Array")}} の何れかです。</dd>
- index
 <dd>typedArray でビット単位の OR を計算する位置です。</dd>
- value
 <dd>ビット単位の OR を取る数値です。</dd>

### 返値

指定された位置にあった古い値です (typedArray[index])。

### 例外

- typedArray が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- index が typedArray の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

<h2 id="Description" name="Description">解説</h2>

ビット単位の OR 操作は、 a と b のどちらかが 1 であった場合に 1 を生成します。 OR 操作の真理値表を示します。

<table class="standard-table">
 <thead>
  <tr>
   <th>a</th>
   <th>b</th>
   <th>a | b</th>
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
   <td>1</td>
  </tr>
  <tr>
   <td>1</td>
   <td>0</td>
   <td>1</td>
  </tr>
  <tr>
   <td>1</td>
   <td>1</td>
   <td>1</td>
  </tr>
 </tbody>
</table>

例えば、ビット単位の OR を 5 | 1 で行うと、結果は 0101 すなわち10進数で5となります。

<pre class="notranslate">5  0101
1  0001
   ----
5  0101
</pre>

## 例

<h3 id="Using_or" name="Using_or">or の使用</h3>

<pre class="brush: js notranslate">const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 2;

Atomics.or(ta, 0, 1); // returns 2, the old value
Atomics.load(ta, 0);  // 3</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-atomics.or', 'Atomics.or')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.builtins.Atomics.or")}}

<h2 id="See_also" name="See_also">関連情報</h2>

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.xor()")}}
