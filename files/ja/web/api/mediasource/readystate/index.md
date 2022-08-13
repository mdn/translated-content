---
title: MediaSource.readyState
slug: Web/API/MediaSource/readyState
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - MediaSource
  - Property
  - Reference
  - Video
  - readyState
translation_of: Web/API/MediaSource/readyState
---
<div>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}</div>

<p><span class="seoSummary">{{domxref("MediaSource")}} インターフェイスの <strong><code>readyState</code></strong> 読み取り専用プロパティは、現在の <code>MediaSource</code> の状態を表す列挙を返します。</span> 3つの可能な値は次のとおりです。</p>

<ul>
 <li><code>closed</code>: ソースは現在メディア要素にアタッチされていません。</li>
 <li><code>open</code>: ソースはメディア要素にアタッチされ、{{domxref("SourceBuffer")}} オブジェクトを受信する準備ができています。</li>
 <li><code>ended</code>: ソースはメディア要素にアタッチされていますが、{{domxref("MediaSource.endOfStream()")}} の呼び出しを介してストリームが終了しています。</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>myReadyState</em> = <em>mediaSource</em>.readyState;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("DOMString")}}。</p>

<h2 id="Example" name="Example">例</h2>

<p>次のスニペットは、Nick Desaulniers によって書かれた簡単な例からのものです（<a href="http://nickdesaulniers.github.io/netfix/demo/bufferAll.html">ライブで完全なデモを見る</a>か、<a href="https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html">ソースをダウンロード</a>してさらに調査してください）。</p>

<pre class="brush: js  language-js"><code class="language-js"><span class="keyword token">if</span> <span class="punctuation token">(</span><span class="string token">'MediaSource'</span> <span class="keyword token">in</span> window <span class="operator token">&amp;&amp;</span> MediaSource<span class="punctuation token">.</span><span class="function token">isTypeSupported<span class="punctuation token">(</span></span>mimeCodec<span class="punctuation token">)</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">var</span> mediaSource <span class="operator token">=</span> <span class="keyword token">new</span> <span class="class-name token">MediaSource</span><span class="punctuation token">;</span>
 <span class="comment token"> //console.log(mediaSource.readyState); // closed
</span>  video<span class="punctuation token">.</span>src <span class="operator token">=</span> URL<span class="punctuation token">.</span><span class="function token">createObjectURL<span class="punctuation token">(</span></span>mediaSource<span class="punctuation token">)</span><span class="punctuation token">;</span>
  mediaSource<span class="punctuation token">.</span><span class="function token">addEventListener<span class="punctuation token">(</span></span><span class="string token">'sourceopen'</span><span class="punctuation token">,</span> sourceOpen<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span> <span class="keyword token">else</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">error<span class="punctuation token">(</span></span><span class="string token">'サポートされていない MIME タイプまたはコーデック: '</span><span class="punctuation token">,</span> mimeCodec<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">function</span> sourceOpen <span class="punctuation token">(</span>_<span class="punctuation token">)</span> <span class="punctuation token">{</span>
 <span class="comment token"> //console.log(this.readyState); // open
</span>  <span class="keyword token">var</span> mediaSource <span class="operator token">=</span> <span class="keyword token">this</span><span class="punctuation token">;</span>
  <span class="keyword token">var</span> sourceBuffer <span class="operator token">=</span> mediaSource<span class="punctuation token">.</span><span class="function token">addSourceBuffer<span class="punctuation token">(</span></span>mimeCodec<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="function token">fetchAB<span class="punctuation token">(</span></span>assetURL<span class="punctuation token">,</span> <span class="keyword token">function</span> <span class="punctuation token">(</span>buf<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    sourceBuffer<span class="punctuation token">.</span><span class="function token">addEventListener<span class="punctuation token">(</span></span><span class="string token">'updateend'</span><span class="punctuation token">,</span> <span class="keyword token">function</span> <span class="punctuation token">(</span>_<span class="punctuation token">)</span> <span class="punctuation token">{</span>
      mediaSource<span class="punctuation token">.</span><span class="function token">endOfStream<span class="punctuation token">(</span></span><span class="punctuation token">)</span><span class="punctuation token">;</span>
      video<span class="punctuation token">.</span><span class="function token">play<span class="punctuation token">(</span></span><span class="punctuation token">)</span><span class="punctuation token">;</span>
     <span class="comment token"> //console.log(mediaSource.readyState); // ended
</span>    <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    sourceBuffer<span class="punctuation token">.</span><span class="function token">appendBuffer<span class="punctuation token">(</span></span>buf<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span><span class="punctuation token">;</span></code></pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Media Source Extensions', '#idl-def-mediasource-readystate', 'readyState')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.MediaSource.readyState")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("SourceBuffer")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>
