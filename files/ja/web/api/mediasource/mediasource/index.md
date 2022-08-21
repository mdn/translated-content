---
title: MediaSource.MediaSource()
slug: Web/API/MediaSource/MediaSource
tags:
  - API
  - Audio
  - Constructor
  - Experimental
  - MSE
  - Media Source Extensions
  - MediaSource
  - Reference
  - Video
translation_of: Web/API/MediaSource/MediaSource
---
<div>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}</div>

<p>{{domxref("MediaSource")}} インターフェイスの <strong><code>MediaSource()</code></strong> コンストラクタは、ソースバッファが関連付けられていない新しい <code>MediaSource</code> オブジェクトを構築して返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>mediaSource</em> = new MediaSource();</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h2 id="Example" name="Example">例</h2>

<p>次のスニペットは、Nick Desaulniers によって書かれた簡単な例から抜粋したものです（<a href="http://nickdesaulniers.github.io/netfix/demo/bufferAll.html">ライブで完全なデモを見る</a>か、<a href="https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html">ソースをダウンロード</a>してさらに調査してください）。</p>

<pre class="brush: js">var video = document.querySelector('video');

var assetURL = 'frag_bunny.mp4';
// Blink はコーデックに関して特定する必要がある
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ('MediaSource' in window &amp;&amp; MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource;
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.error('サポートされていない MIME タイプまたはコーデック: ', mimeCodec);
}

...
</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.MediaSource.MediaSource")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("SourceBuffer")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>
