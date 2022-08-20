---
title: ReadableStream.locked
slug: Web/API/ReadableStream/locked
tags:
  - API
  - Property
  - ReadableStream
  - Reference
  - Streams
  - locked
translation_of: Web/API/ReadableStream/locked
---
<div>{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("ReadableStream")}} インターフェイスの <strong><code>locked</code></strong> 読み取り専用プロパティは、読み取り可能なストリームが<a href="https://streams.spec.whatwg.org/#lock" id="ref-for-locked-to-a-reader②">リーダーにロックされている</a>かどうかを返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var><code>var <em>locked</em> = </code>readableStream</var>.locked;</pre>

<h3 id="Value" name="Value">値</h3>

<p>読み取り可能なストリームがロックされているかどうかを示す {{jsxref("Boolean")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">const stream = new ReadableStream({
  ...
});

const reader = stream.getReader();

stream.locked
// ストリームがリーダーにロックされているため、true を返すべきです</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#rs-locked","locked")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ReadableStream.locked")}}</p>
