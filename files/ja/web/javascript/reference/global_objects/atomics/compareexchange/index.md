---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
tags:
  - Atomics
  - JavaScript
  - メソッド
  - 共有メモリー
  - メソッド
  - 共有メモリ
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
---
{{JSRef}}

静的な <strong>Atomics</strong><strong>.compareExchange()</strong> メソッドは、指定された値を配列内の指定した位置に格納し、その値を返します。

{{EmbedInteractiveExample("pages/js/atomics-compareexchange.html")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

## 構文

<pre class="syntaxbox">Atomics.compareExchange(typedArray, index, value)
</pre>

### 引数

- typedArray
 <dd>共有整数型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} の何れかです。</dd>
- index
 <dd>typedArray で value と交換する位置です。</dd>
- expectedValue
 <dd>等価性をチェックする値です。</dd>
- replacementValue
 <dd>交換する数値です。</dd>

### 返値

指定された位置にあった古い値です (typedArray[index])。

### 例外

- typedArray が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- typedArray が共有型付き配列型ではない場合、 {{jsxref("TypeError")}} が発生します。
- index が typedArray の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

## 例

<h3 id="Using_compareExchange" name="Using_compareExchange">compareExchange() の使用</h3>

<pre class="brush: js">const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // returns 7, the old value
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
   <td>{{SpecName('ESDraft', '#sec-atomics.compareexchange', 'Atomics.compareExchange')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.builtins.Atomics.compareExchange")}}

<h2 id="See_also" name="See_also">関連情報</h2>

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
