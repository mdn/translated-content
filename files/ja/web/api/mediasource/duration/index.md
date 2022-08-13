---
title: MediaSource.duration
slug: Web/API/MediaSource/duration
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
  - duration
translation_of: Web/API/MediaSource/duration
---
<div>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}</div>

<p><span class="seoSummary">{{domxref("MediaSource")}} インターフェイスの <strong><code>duration</code></strong> プロパティは、現在表示されているメディアの期間（長さ）を取得および設定します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>mediaSource</em>.duration = 5.5; // 5.5 seconds

var <em>myDuration</em> = <em>mediaSource</em>.duration;</pre>

<h3 id="Value" name="Value">値</h3>

<p>double 型。 秒単位の値が必要です。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p>このプロパティに新しい値を設定すると、次の例外がスローされる場合があります。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>InvalidAccessError</code></td>
   <td>負、または <code>NaN</code> の期間値を設定しようとした。</td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>{{domxref("MediaSource.readyState")}} が <code>open</code> と等しくないか、{{domxref("MediaSource.sourceBuffers")}} の {{domxref("SourceBuffer")}} オブジェクトの1つ以上が更新されています（つまり、{{domxref("SourceBuffer.updating")}} プロパティが <code>true</code> です）。</td>
  </tr>
 </tbody>
</table>

<h2 id="Example" name="Example">例</h2>

<p>次のスニペットは、Nick Desaulniers によって書かれた簡単な例に基づいています（<a href="http://nickdesaulniers.github.io/netfix/demo/bufferAll.html">ライブで完全なデモを見る</a>か、<a href="https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html">ソースをダウンロード</a>してさらに調査してください）。</p>

<pre class="brush: js  language-js"><code class="language-js"><span class="keyword token">function</span> sourceOpen <span class="punctuation token">(</span>_<span class="punctuation token">)</span> <span class="punctuation token">{</span>
 <span class="comment token"> //console.log(this.readyState); // open
</span>  <span class="keyword token">var</span> mediaSource <span class="operator token">=</span> <span class="keyword token">this</span><span class="punctuation token">;</span>
  <span class="keyword token">var</span> sourceBuffer <span class="operator token">=</span> mediaSource<span class="punctuation token">.</span><span class="function token">addSourceBuffer<span class="punctuation token">(</span></span>mimeCodec<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="function token">fetchAB<span class="punctuation token">(</span></span>assetURL<span class="punctuation token">,</span> <span class="keyword token">function</span> <span class="punctuation token">(</span>buf<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    sourceBuffer<span class="punctuation token">.</span><span class="function token">addEventListener<span class="punctuation token">(</span></span><span class="string token">'updateend'</span><span class="punctuation token">,</span> <span class="keyword token">function</span> <span class="punctuation token">(</span>_<span class="punctuation token">)</span> <span class="punctuation token">{</span>
      mediaSource<span class="punctuation token">.</span><span class="function token">endOfStream<span class="punctuation token">(</span></span><span class="punctuation token">)</span><span class="punctuation token">;
      mediaSource.duration = 120;</span>
      video<span class="punctuation token">.</span><span class="function token">play<span class="punctuation token">(</span></span><span class="punctuation token">)</span><span class="punctuation token">;</span>
     <span class="comment token"> //console.log(mediaSource.readyState); // ended
</span>    <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    sourceBuffer<span class="punctuation token">.</span><span class="function token">appendBuffer<span class="punctuation token">(</span></span>buf<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span><span class="punctuation token">;

...</span></code></pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Media Source Extensions', '#idl-def-mediasource-duration', 'duration')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.MediaSource.duration")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("SourceBuffer")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>
