---
title: MediaSource.addSourceBuffer()
slug: Web/API/MediaSource/addSourceBuffer
tags:
  - API
  - Audio
  - MSE
  - Media
  - Media Source Extensions
  - MediaSource
  - Method
  - Reference
  - Video
  - addSourceBuffer
translation_of: Web/API/MediaSource/addSourceBuffer
---
<div>{{APIRef("Media Source Extensions")}}</div>

<p><span class="seoSummary">{{domxref("MediaSource")}} インターフェイスの <strong><code>addSourceBuffer()</code></strong> メソッドは、指定された {{Glossary("MIME type","MIME タイプ")}}の新しい {{domxref("SourceBuffer")}} を作成し、<code>MediaSource</code> の {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} リストに追加します。 新しい <code>SourceBuffer</code> も返されます。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>sourceBuffer</em> = <em>mediaSource</em>.addSourceBuffer(<em>mimeType</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>mimeType</code></dt>
 <dd>{{domxref("MediaSource")}} に作成して追加する {{domxref("SourceBuffer")}} の MIME タイプを指定する {{domxref("DOMString")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>作成され、メディアソースに追加された新しいソースバッファを表す {{domxref("SourceBuffer")}} オブジェクト。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt><code>InvalidAccessError</code></dt>
 <dd><code>mimeType</code> に指定された値は、有効な MIME タイプではなく空の文字列です。</dd>
 <dt><code>InvalidStateError</code></dt>
 <dd>{{domxref("MediaSource")}} の {{domxref("MediaSource.readyState", "readyState")}} は <code>"open"</code> でありません。</dd>
 <dt><code>NotSupportedError</code></dt>
 <dd>指定された <code>mimeType</code> は{{Glossary("user agent","ユーザーエージェント")}}でサポートされていないか、メディアソースの {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} リストに既に含まれている他の {{domxref("SourceBuffer")}} オブジェクトの MIME タイプと互換性がありません。</dd>
 <dt><code>QuotaExceededError</code></dt>
 <dd>ユーザーエージェントはこれ以上 <code>SourceBuffer</code> オブジェクトを処理できないか、指定された <code>mimeType</code> を使用して新しい <code>SourceBuffer</code> を作成すると、<a href="https://w3c.github.io/media-source/#sourcebuffer-configuration">SourceBuffer の構成がサポートされなくなります</a>。</dd>
</dl>

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
   <td>{{SpecName('Media Source Extensions', '#idl-def-mediasource-addsourcebuffer(domstring)', 'addSourceBuffer()')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.MediaSource.addSourceBuffer")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("SourceBuffer")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>
