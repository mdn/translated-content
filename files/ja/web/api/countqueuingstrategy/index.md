---
title: CountQueuingStrategy
slug: Web/API/CountQueuingStrategy
tags:
  - API
  - CountQueuingStrategy
  - Experimental
  - Interface
  - Reference
  - Streams
translation_of: Web/API/CountQueuingStrategy
---
<p>{{SeeCompatTable}}{{APIRef("Streams")}}</p>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Streams_API">Streams API</a> の <strong><code>CountQueuingStrategy</code></strong> インターフェイスは、ストリームの構築時に使用できる組み込みのチャンクカウントキューイング戦略を提供します。</span></p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}}</dt>
 <dd>新しい <code>CountQueuingStrategy</code> オブジェクトのインスタンスを作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p>なし。</p>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("CountQueuingStrategy.size()")}}</dt>
 <dd><code>1</code> を返します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">const</span> queueingStrategy <span class="operator token">=</span> <span class="keyword token">new</span> <span class="class-name token">CountQueuingStrategy</span><span class="punctuation token">(</span><span class="punctuation token">{</span> highWaterMark<span class="punctuation token">:</span> <span class="number token">1</span> <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>

<span class="keyword token">const</span> writableStream <span class="operator token">=</span> <span class="keyword token">new</span> <span class="class-name token">WritableStream</span><span class="punctuation token">(</span><span class="punctuation token">{</span>
  <span class="comment token">// シンクの実装</span>
  <span class="function token">write</span><span class="punctuation token">(</span>chunk<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="punctuation token">...</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="function token">close</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    ...
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="function token">abort</span><span class="punctuation token">(</span>err<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">"Sink error:"</span><span class="punctuation token">,</span> err<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span><span class="punctuation token">,</span> queueingStrategy<span class="punctuation token">)</span><span class="punctuation token">;

var size = queueingStrategy.size()</span></code>;
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Streams','#cqs-class','CountQueuingStrategy')}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.CountQueuingStrategy")}}</p>
</div>
