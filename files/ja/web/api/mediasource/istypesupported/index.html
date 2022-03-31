---
title: MediaSource.isTypeSupported()
slug: Web/API/MediaSource/isTypeSupported
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - MediaSource
  - Method
  - Reference
  - Static
  - Static Method
  - Video
  - isTypeSupported
translation_of: Web/API/MediaSource/isTypeSupported
---
<div>{{APIRef("Media Source Extensions")}}</div>

<p><span class="seoSummary"><strong><code>MediaSource.isTypeSupported()</code></strong> 静的メソッドは、指定された MIME タイプが現在の{{Glossary("user agent","ユーザーエージェント")}}によってサポートされる<em>可能性が高い</em>場合に <code>true</code> となる {{jsxref("Boolean")}} 値を返します。</span> つまり、その MIME タイプの {{domxref("SourceBuffer")}} オブジェクトを正常に作成できる場合です。 返された値が <code>false</code> の場合、ユーザーエージェントは、指定された形式のメディアにアクセス<em>できない</em>と確信しています。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>isItSupported</em> = <em>mediaSource</em>.isTypeSupported(<em>mimeType</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>mimeType</code></dt>
 <dd>現在のブラウザーでのサポートをテストする MIME メディアタイプ。 これには、ファイル内で使用されるコーデックに関する追加の詳細を提供する <code>codecs</code> パラメーターが含まれる場合があります。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>指定されたタイプのメディアを<em>おそらく</em>再生できるとブラウザーが感じる場合に <code>true</code> になる {{jsxref("Boolean")}}。 ただし、これは保証<em>ではなく</em>、メディアが正しく再生されない可能性に備えてコードを準備する必要があります。 ただし、値 <code>false</code> は、指定されたタイプのメディアが再生<em>されない</em>ことを保証します。</p>

<p>メディアファイルで動作するすべての Web API は、メディアタイプを使用できるかどうかを判断するときに、「いいえ/多分/おそらく」アプローチ（または、この場合は「いいえまたはおそらく」）を使用します。 これは、メディアファイルが複雑で難解な構造であるため、実際にメディアのコンテンツを使用するまでは、微妙なバリエーションが多すぎて絶対に確実ではないためです。</p>

<h2 id="Example" name="Example">例</h2>

<p>次のスニペットは、Nick Desaulniers によって書かれた例からのものです（<a href="http://nickdesaulniers.github.io/netfix/demo/bufferAll.html">ライブで完全なデモを見る</a>か、<a href="https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html">ソースをダウンロード</a>してさらに調査してください）。</p>

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
   <td>{{SpecName('Media Source Extensions', '#idl-def-mediasource-istypesupported(domstring)', 'isTypeSupported()')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.MediaSource.isTypeSupported")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Media_Source_Extensions_API">Media Source Extensions API</a></li>
 <li><a href="/ja/docs/Web/Media/Formats">ウェブ上のメディアタイプとフォーマットのガイド</a></li>
 <li><a href="/ja/docs/Web/Media/Formats/codecs_parameter">一般的なメディアタイプにおける "codecs" パラメーター</a></li>
 <li>{{domxref("SourceBuffer")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>
