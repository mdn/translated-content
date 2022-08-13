---
title: MediaSource.endOfStream()
slug: Web/API/MediaSource/endOfStream
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - MediaSource
  - Method
  - Reference
  - Video
  - endOfStream
translation_of: Web/API/MediaSource/endOfStream
---
<div>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}</div>

<p><span class="seoSummary">{{domxref("MediaSource")}} インターフェイスの <strong><code>endOfStream()</code></strong> メソッドは、ストリームの終わりを通知します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>mediaSource</em>.endOfStream(<em>endOfStreamError</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>endOfStreamError {{optional_inline}}</dt>
 <dd>ストリームの終わりに達したときにスローするエラーを表す {{domxref("DOMString")}}。 可能な値は次のとおりです。
 <ul>
  <li><code>network</code>: 再生を終了し、ネットワークエラーが発生したことを通知します。 これを使用して、メディアストリームに関連するカスタムエラーハンドラを作成できます。 例えば、他のネットワーク要求とは別に、メディアチャンク要求を処理する関数があるとします。 メディアチャンクに対して <a href="/ja/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a> 呼び出しを行い、<code>onabort</code> または <code>onerror</code> がトリガーされた場合、<code>endOfStream('network')</code> を呼び出し、UI に説明的なメッセージを表示し、ネットワーク要求をすぐに再試行するか、ネットワークが（何らかのポーリングを介して）復旧するまで待機できます。</li>
  <li><code>decode</code>: 再生を終了し、デコードエラーが発生したことを通知します。 これは、メディアデータの取得中に解析エラーが発生したことを示すために使用できます。 データが破損しているか、ブラウザーがデコード方法を知らないコーデックを使用してエンコードされている可能性があります。</li>
 </ul>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{jsxref('undefined')}}</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>{{domxref("MediaSource.readyState")}} が <code>open</code> と等しくないか、{{domxref("MediaSource.sourceBuffers")}} の {{domxref("SourceBuffer")}} オブジェクトの1つ以上が更新されています（つまり、{{domxref("SourceBuffer.updating")}} プロパティが <code>true</code> です）</td>
  </tr>
 </tbody>
</table>

<h2 id="Example" name="Example">例</h2>

<p>次のスニペットは、Nick Desaulniers によって書かれた簡単な例からのものです（<a href="http://nickdesaulniers.github.io/netfix/demo/bufferAll.html">ライブで完全なデモを見る</a>か、<a href="https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html">ソースをダウンロード</a>してさらに調査してください）。</p>

<pre class="brush: js  language-js">var assetURL = 'frag_bunny.mp4';
// Blink はコーデックに関して特定する必要がある
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

<code class="language-js"><span class="keyword token">if</span> <span class="punctuation token">(</span><span class="string token">'MediaSource'</span> <span class="keyword token">in</span> window <span class="operator token">&amp;&amp;</span> MediaSource<span class="punctuation token">.</span><span class="function token">isTypeSupported<span class="punctuation token">(</span></span>mimeCodec<span class="punctuation token">)</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
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
   <td>{{SpecName('Media Source Extensions', '#idl-def-mediasource-endofstream(optional-endofstreamerror)', 'endOfStream()')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.MediaSource.endOfStream")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("SourceBuffer")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>
