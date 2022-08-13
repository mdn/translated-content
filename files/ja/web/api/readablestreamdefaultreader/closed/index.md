---
title: ReadableStreamDefaultReader.closed
slug: Web/API/ReadableStreamDefaultReader/closed
tags:
  - API
  - Property
  - ReadableStreamDefaultReader
  - Reference
  - Streams
  - closed
translation_of: Web/API/ReadableStreamDefaultReader/closed
---
<div>{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("ReadableStreamDefaultReader")}} インターフェイスの <strong><code>closed</code></strong> 読み取り専用プロパティは、ストリームが閉じられた場合、またはリーダーのロックが解除された場合に満たし、ストリームがエラーの場合に拒否する promise を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var><code>var <em>closed</em> = </code>readableStreamDefaultReader</var>.closed;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{jsxref("Promise")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>このスニペットでは、以前に作成したリーダーに問い合わせて、ストリームが閉じられているかどうかを確認します。 閉じられると、promise が満たされ、メッセージをコンソールに記録します。</p>

<pre class="brush: js">reader.closed.then(() =&gt; {
  console.log('reader closed');
})</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#default-reader-closed","closed")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ReadableStreamDefaultReader.closed")}}</p>
