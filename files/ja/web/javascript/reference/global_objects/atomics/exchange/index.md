---
title: Atomics.exchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/exchange
tags:
  - Atomics
  - JavaScript
  - メソッド
  - 共有メモリー
  - メソッド
  - 共有メモリ
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/exchange
---
{{JSRef}}

静的な <strong>Atomics</strong><strong>.exchange()</strong> メソッドは、指定された値を配列内の指定した位置に格納し、その値を返します。これは不可分操作で、古い値を読み取ってから新しい値を書き込むまでの間に他の物が書き込まないことを保証します。

{{EmbedInteractiveExample("pages/js/atomics-exchange.html")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

## 構文

<pre class="syntaxbox">Atomics.exchange(typedArray, index, value)
</pre>

### 引数

- typedArray
 <dd>共有整数型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} の何れかです。</dd>
- index
 <dd>typedArray で value と交換する位置です。</dd>
- value
 <dd>交換する数値です。</dd>

### 返値

指定された位置にあった古い値です (typedArray[index])。

### 例外

- typedArray が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- typedArray が共有型付き配列型ではない場合、 {{jsxref("TypeError")}} が発生します。
- index が typedArray の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

## 例

<h3 id="Using_exchange" name="Using_exchange">exchange() の使用</h3>

<pre class="brush: js">const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.exchange(ta, 0, 12); // returns 0, the old value
Atomics.load(ta, 0); // 12</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-atomics.exchange', 'Atomics.exchange')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.builtins.Atomics.exchange")}}

<h2 id="See_also" name="See_also">関連情報</h2>

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.compareExchange()")}}
