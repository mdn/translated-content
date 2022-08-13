---
title: WritableStreamDefaultWriter.desiredSize
slug: Web/API/WritableStreamDefaultWriter/desiredSize
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Streams
  - WritableStreamDefaultWriter
  - desiredSize
translation_of: Web/API/WritableStreamDefaultWriter/desiredSize
---
<div>{{SeeCompatTable}}{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("WritableStreamDefaultWriter")}} インターフェイスの <strong><code>desiredSize</code></strong> 読み取り専用プロパティは、ストリームの内部キューを埋めるために必要な希望サイズを返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var><code>var <em>desiredSize</em> = </code>writableStreamDefaultWriter</var>.desiredSize;</pre>

<h3 id="Value" name="Value">値</h3>

<p>整数。 キューがいっぱいになった場合、これは負になる可能性があることに注意してください。</p>

<p>値は、（エラーが発生したか、中止がキューに入れられたために）ストリームに正常に書き込むことができない場合、<code>null</code> になり、ストリームが閉じられると <code>0</code> になります。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd>ライターのロックが解除されています。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">const</span> writableStream <span class="operator token">=</span> <span class="keyword token">new</span> <span class="class-name token">WritableStream</span><span class="punctuation token">(</span><span class="punctuation token">{</span>
  <span class="function token">write</span><span class="punctuation token">(</span>chunk<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="function token">close</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="function token">abort</span><span class="punctuation token">(</span>err<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span><span class="punctuation token">,</span> queuingStrategy<span class="punctuation token">)</span><span class="punctuation token">;</span>

<span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.

</span></code><code class="language-js"><span class="punctuation token">const writer = writableStream.getWriter();

...</span></code><code class="language-js">

<span class="comment token">// ストリームの希望サイズを返します</span>
let size = writer<span class="punctuation token">.</span>desiredSize;</code></pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#default-writer-desired-size","desiredSize")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.WritableStreamDefaultWriter.desiredSize")}}</p>
