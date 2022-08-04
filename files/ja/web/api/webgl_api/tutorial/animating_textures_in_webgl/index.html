---
title: WebGL でのテクスチャのアニメーティング
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
tags:
  - Media
  - Tutorial
  - Video
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
---
<p>{{WebGLSidebar("Tutorial") }} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}</p>

<p>今回のデモンストレーションでは、前回の例で用いた静的なテクスチャを Ogg ビデオファイルのフレームに置き換えます。実はこれを行うのはとても簡単ですが、見ていて楽しいです。さっそく始めましょう。なお同様のコードを、どんな種類のデータ ({{HTMLElement("canvas")}} など) をテクスチャのソースとして用いる場合でも使用することができます。</p>

<h2 id="Getting_access_to_the_video" name="Getting_access_to_the_video">ビデオにアクセスする</h2>

<p>始めに、ビデオフレームを取り出すのに使う {{HTMLElement("video")}} 要素を作成する HTML を追加します:</p>

<pre class="brush: html">&lt;video id="video"&gt;
  HTML5 &lt;code&gt;&amp;lt;video&amp;gt;&lt;/code&gt; 要素をサポートしていません。
&lt;/video&gt;
</pre>

<p>これは単純に、ビデオファイル "Firefox.ogv" を再生する要素を作成します。この video 要素が表示されないようにするため、以下の CSS を使用します:</p>

<pre class="brush: css">video {
  display: none;
}
</pre>

<p>続いて、JavaScript のコードに注意を向けます。まずは <code>start()</code> 関数に、<code>video</code> 要素への参照を取得するコードを追加します:</p>

<pre class="brush: js">videoElement = document.getElementById("video");
</pre>

<p>次に、インターバル駆動による <code>drawScene()</code> の呼び出しを設定しているコードを以下のコードに置き換えます:</p>

<pre class="brush: js">videoElement.addEventListener("canplaythrough", startVideo, true);
videoElement.addEventListener("ended", videoDone, true);
</pre>

<p>最後に、ビデオの読み込みを始めるために <code>src</code> 属性を設定します。FIXME (bjacob): ここで <code>preload="auto"</code> も必要です。そうしなければ、Firefox で <code>canplaythrough</code> が発生しません。Chrome では、<code>preload="auto"</code> の有無に関わらずビデオを読み込みます。</p>

<pre class="brush: js">video.preload = "auto";
videoElement.src = "Firefox.ogv";</pre>

<p>これには、ビデオの再生が中断されないよう充分にバッファリングされるまではアニメーションを始めたくないという考え方があります。そこで、データが充分にバッファリングされてビデオが切れ目なく再生できると期待できることを、<code>video</code> 要素が通知するまで待つためのイベントリスナを追加します。</p>

<p><code>startVideo()</code> 関数は以下のようにします:</p>

<pre class="brush: js">function startVideo() {
  videoElement.play();
  intervalID = setInterval(drawScene, 15);
}
</pre>

<p>これは単にビデオの再生を開始して、キューブの描画を制御するために <code>drawScene()</code> のインターバル駆動による呼び出しを定義します。</p>

<p>また、ビデオの再生が終わったときにアニメーションを停止できるように、video の "ended" イベントにイベントリスナを追加します。そうしなければ、正当な理由がないのに CPU 時間を浪費することになってしまうためです。</p>

<pre class="brush: js">function videoDone() {
  clearInterval(intervalID);
}</pre>

<p><code>videoDone()</code> 関数は単純に、アニメーションの更新を終わらせるために {{domxref("window.clearInterval()")}} を呼び出します。</p>

<h2 id="Using_the_video_frames_as_a_texture" name="Using_the_video_frames_as_a_texture">ビデオフレームをテクスチャとして使用する</h2>

<p>次に変更するのは <code>initTexture()</code> です。画像ファイルを読み込む必要がなくなったため、とても単純になります。画像を読み込む代わりに、空のテクスチャオブジェクトを作成して、後で使用するフィルタを設定します:</p>

<pre class="brush: js">function initTextures() {
  cubeTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}
</pre>

<p><code>updateTexture()</code> 関数は以下のようになります。ここで実際の処理を行います:</p>

<pre class="brush: js">function updateTexture() {
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
        gl.UNSIGNED_BYTE, videoElement);
}
</pre>

<p>このコードは、以前見たことがあります。これは以前の例にあった <code>handleTextureLoaded()</code> ルーチンとほぼ同じであり、<code>texImage2D()</code> を呼び出すときに <code>Image</code> オブジェクトに代わり {{HTMLElement("video")}} 要素を渡すところが異なります。WebGL は、現在のフレームを取り出してテクスチャとして使用する方法がわかります。</p>

<p><code>updateTexture()</code> はシーンを再描画する準備が整ったときに毎回、<code>drawScene()</code> によって呼び出されます。<code>drawScene()</code> の唯一の変更点は、処理の最初に <code>updateTexture()</code> の呼び出しを追加することです。</p>

<p>以上で完了です!</p>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample8/index.html', 670, 510)}}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample8">コードを確認する</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample8/">新しいページでデモを開く</a></p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Using_HTML5_audio_and_video" title="Using audio and video in Firefox">HTML5 の audio 要素と video 要素の使用</a></li>
</ul>

<p>{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}</p>
