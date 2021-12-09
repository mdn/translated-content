---
title: Atomics.notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
tags:
- Atomics
- JavaScript
- メソッド
- 共有メモリー
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/notify
original_slug: Web/JavaScript/Reference/Global_Objects/Atomics/wake
---
{{JSRef}}

静的メソッドである <strong>Atomics</strong><strong>.notify()</strong> は、待ち行列で休眠状態にあるいくつかのエージェントに通知します。

<div class="note">
<p><strong>注:</strong> この操作は共有された {{jsxref("Int32Array")}} に対してのみ許可されています。<br>
共有されていない ArrayBuffer オブジェクトでは 0 を返します。</code></p>
</div>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">Atomics.notify(typedArray, index, count)
</pre>

<h3 id="Parameters">引数</h3>

 - typedArray
  <dd>共有された {{jsxref("Int32Array")}}。</dd>
 - index
  <dd>起動する対象となる typedArray 中の位置。</dd>
 - count
  <dd>起動するエージェントの数。既定値は {{jsxref("Infinity", "+Infinity")}} です。</dd>

<h3 id="Return_value">返値</h3>

 - 起動したエージェントの数を返します。
  <li>共有されていない {{jsxref("ArrayBuffer")}} オブジェクトが使用された場合は、 0
 を返します。</li>

<h3 id="Exceptions">例外</h3>

- typedArray が {{jsxref("Int32Array")}} でない場合、{{jsxref("TypeError")}} が送出される。
- index が typedArray の範囲を超えている場合 {{jsxref("RangeError")}} が送出される。

<h2 id="Examples">例</h2>

<h3 id="Using_notify">notify の使用</h3>

共有された Int32Array を用意します：

<pre class="brush: js">const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
</pre>

読み手のスレッドは、0 番目の値が 0 であることを期待してスリープします。それが満たされている間は処理が進みません。しかし、書き手のスレッドが新しい値をストアした場合、読み手のスレッドは読み手のスレッドによって起こされ、新しい値 (123) を取得します。

<pre class="brush: js">Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123</pre>

書き手のスレッドは新しい値を格納し、待機中のスレッドに通知を行います。

<pre class="brush: js">console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">仕様書</th>
    </tr>
    <tr>
      <td>{{SpecName('ESDraft', '#sec-atomics.notify', 'Atomics.notify')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.builtins.Atomics.notify")}}

<h2 id="See_also">関連情報</h2>

 - {{jsxref("Atomics")}}
 - {{jsxref("Atomics.wait()")}}
