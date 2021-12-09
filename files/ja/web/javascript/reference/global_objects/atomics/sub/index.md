---
title: Atomics.sub()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/sub
tags:
  - Atomics
  - JavaScript
  - メソッド
  - 共有メモリー
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/sub
---
{{JSRef}}

静的な <strong>Atomics.sub()</strong> メソッドは、配列内の指定した位置の値から減算して、その場所にあった古い値を返します。この atomic 操作は、修正された値が書き戻されるまで、ほかの書き込みが発生しないことを保証します。

{{EmbedInteractiveExample("pages/js/atomics-sub.html")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

## 構文

<pre class="syntaxbox notranslate">Atomics.sub(typedArray, index, value)
</pre>

### 引数

- typedArray
 <dd>整数の型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, {{jsxref("BigUint64Array")}} のいずれかです。</dd>
- index
 <dd>typedArray で value を減算する位置です。</dd>
- value
 <dd>減算する数値です。</dd>

### 返値

指定された位置にあった古い値です (typedArray[index])。

### 例外

- typedArray が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- index が typedArray の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

## 例

<h3 id="Using_sub" name="Using_sub">sub の使用</h3>

<pre class="brush: js notranslate">const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 48;

Atomics.sub(ta, 0, 12); // returns 48, the old value
Atomics.load(ta, 0); // 36
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
   <td>{{SpecName('ESDraft', '#sec-atomics.sub', 'Atomics.sub')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.builtins.Atomics.sub")}}

<h2 id="See_also" name="See_also">関連情報</h2>

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.add()")}}
