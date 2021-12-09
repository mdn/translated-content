---
title: Atomics.store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
tags:
  - Atomics
  - JavaScript
  - メソッド
  - 共有メモリー
  - メソッド
  - 共有メモリ
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/store
---
{{JSRef}}

静的な <strong>Atomics</strong><strong>.store()</strong> メソッドは、指定された値を配列内の指定した位置に格納し、その値を返します。

{{EmbedInteractiveExample("pages/js/atomics-store.html")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

## 構文

<pre class="syntaxbox">Atomics.store(typedArray, index, value)
</pre>

### 引数

- typedArray
 <dd>共有整数型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} の何れかです。</dd>
- index
 <dd>typedArray で value を格納する位置。</dd>
- value
 <dd>格納する値。</dd>

### 返値

格納された値です。

### 例外

- typedArray が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- typedArray が共有型付き配列型ではない場合、 {{jsxref("TypeError")}} が発生します。
- index が typedArray の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

## 例

<h3 id="Using_store" name="Using_store">store() の使用</h3>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-atomics.store', 'Atomics.store')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.builtins.Atomics.store")}}

<h2 id="See_also" name="See_also">関連情報</h2>

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}
