---
title: WritableStreamDefaultController.error()
slug: Web/API/WritableStreamDefaultController/error
tags:
  - API
  - Error
  - Experimental
  - Method
  - Reference
  - Streams
  - WritableStreamDefaultController
translation_of: Web/API/WritableStreamDefaultController/error
---
<div>{{SeeCompatTable}}{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("WritableStreamDefaultController")}} インターフェイスの <strong><code>error()</code></strong> メソッドにより、関連するストリームとの今後のやり取りがエラーになります。</span></p>

<p>通常、基になるシンクのメソッドの1つから拒否された promise を返すだけで十分なため、このメソッドはほとんど使用されません。 ただし、基になるシンクとのやり取りの通常のライフサイクル外のイベントに応答して、ストリームを突然シャットダウンする場合に役立ちます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>writableStreamDefaultController</em>.error(<em>e</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>e</dt>
 <dd>今後のやり取りを失敗させたいエラーを表す {{domxref("DOMString")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code>。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd>エラーにしようとしているストリームは {{domxref("WritableStream")}} ではありません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">const</span> writableStream <span class="operator token">=</span> <span class="keyword token">new</span> <span class="class-name token">WritableStream</span><span class="punctuation token">(</span><span class="punctuation token">{</span>
  <span class="function token">start</span><span class="punctuation token">(</span>controller<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">// コントローラーで何かをする</span>

    <span class="comment token">// 必要に応じてストリームをエラーにする</span>
    controller<span class="punctuation token">.</span><span class="function token">error</span><span class="punctuation token">(</span><span class="string token">'My error is broken'</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="function token">write</span><span class="punctuation token">(</span>chunk<span class="punctuation token">,</span> controller<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="function token">close</span><span class="punctuation token">(</span>controller<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="function token">abort</span><span class="punctuation token">(</span>err<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#ws-default-controller-error","error()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.WritableStreamDefaultController.error")}}</p>
