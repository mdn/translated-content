---
title: Atomics.wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
tags:
  - Atomics
  - JavaScript
  - メソッド
  - 共有メモリー
  - メソッド
  - 共有メモリ
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/wait
---
{{JSRef}}

<strong>Atomics</strong><strong>.wait()</strong> は静的なメソッドで、 {{jsxref("Int32Array")}} 中の指定された位置に指定された値が保存されているかどうかを検証し、検証できるまでスリープ、もしくはタイムアウトします。返値は "ok", "not-equal", "timed-out" のいずれかです。

<div class="note">
<strong>注:</strong> この操作は共有された {{jsxref("Int32Array")}} に対してのみ可能で、またメインスレッドでは実行できません。
</div>

## 構文

<pre class="syntaxbox">Atomics.wait(typedArray, index, value[, timeout])
</pre>

### 引数

- typedArray
 <dd>共有された {{jsxref("Int32Array")}}。</dd>
- index
 <dd>待つ対象となる typedArray の中の位置。</dd>
- value
 <dd>期待される値。</dd>
- timeout {{optional_inline}}
 <dd>ミリ秒で表した待ち時間。時間が指定されなかった場合は {{jsxref("Infinity")}}。</dd>

### 返値

{{jsxref("String")}} で、 "ok", "not-equal", or "timed-out" のいずれか。

### 例外

- typedArray が共有された {{jsxref("Int32Array")}} でない場合、 {{jsxref("TypeError")}} が発生します。
- index が typedArray の範囲を超えている場合は {{jsxref("RangeError")}} が発生します。

## 例

<h3 id="Using_wait" name="Using_wait">wait() の使用</h3>

次のような共有 Int32Array があったとします。

<pre class="brush: js">const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
</pre>

読み手のスレッドはスリープし、 0 番目の値が 0 であることを期待して待ちます。これが成立している間、処理は進みません。しかし、書き手のスレッドが新しい値を格納した場合、書き手のスレッドによって通知され、新しい値 (123) が返ります。

<pre class="brush: js">Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123</pre>

書き手のスレッドは新しい値を格納し、待っているスレッドに書き込みが完了したことを知らせます。

<pre class="brush: js">console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-atomics.wait', 'Atomics.wait')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.builtins.Atomics.wait")}}

<h2 id="See_also" name="See_also">関連情報</h2>

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.notify()")}}
