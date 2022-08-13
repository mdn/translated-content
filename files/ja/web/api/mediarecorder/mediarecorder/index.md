---
title: MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
tags:
  - API
  - Audio
  - Constructor
  - Media
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Reference
  - Video
translation_of: Web/API/MediaRecorder/MediaRecorder
---
<div>{{APIRef("MediaStream Recording")}}</div>

<p><span class="seoSummary"><strong><code>MediaRecorder()</code></strong> コンストラクタは、指定された {{domxref("MediaStream")}} を記録する新しい {{domxref("MediaRecorder")}} オブジェクトを作成します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>mediaRecorder</em> = new MediaRecorder(<em>stream</em>[, <em>options</em>]);</pre>

<h3 id="Parameters" name="Parameters">パラメータ</h3>

<dl>
 <dt><code><strong>stream</strong></code></dt>
 <dd>記録される {{domxref("MediaStream")}}。 このソースメディアは、{{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} を使用して作成したストリーム、または {{HTMLElement("audio")}}、{{HTMLElement("video")}}、{{HTMLElement("canvas")}} 要素から取得できます。</dd>
 <dt>
 <p><strong><code>options</code> </strong>{{optional_inline}}</p>
 </dt>
 <dd>
 <p>以下のプロパティを含むことができる辞書オブジェクト。</p>

 <ul>
  <li><code>mimeType</code>: 新しい <code>MediaRecorder</code> の記録コンテナとして使用する MIME タイプ。アプリは、{{domxref("MediaRecorder.isTypeSupported()")}} を呼び出すことによって、この <code>mimeType</code> がユーザーエージェントによってサポートされているかどうかを事前に確認できます。</li>
  <li><code>audioBitsPerSecond</code>: メディアの音声コンポーネントに選択したビットレート。</li>
  <li><code>videoBitsPerSecond</code>: メディアの動画コンポーネントに選択したビットレート。</li>
  <li><code>bitsPerSecond</code>: メディアの音声コンポーネントおよび動画コンポーネントに選択したビットレート。 上記の2つのプロパティの代わりにこれを指定できます。 これを上記のプロパティのいずれかと一緒に指定している場合、これは指定していないものに使用されます。</li>
 </ul>

 <div class="note">
 <p>動画や音声にビット/秒の値を指定していない場合、動画が採用しているデフォルトは 2.5Mbps ですが、音声のデフォルトはサンプルレートとチャネル数に応じてアダプティブです。</p>
 </div>
 </dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p>この例では、音声のビットレートを 128 Kビット/秒に設定し、動画のビットレートを 2.5 Mビット/秒に設定して、指定したストリーム用のメディアレコーダーを作成する方法を示します。 記録したメディアデータは MP4 ラッパーに保存されます（従って、メディアデータのチャンクを集めてディスクに保存すると、それらは MP4 ファイルになります）。</p>

<pre class="brush: js">...
<code class="language-html">

if (navigator.mediaDevices.getUserMedia) {
  var constraints = { audio: true, video: true };
  var chunks = [];

  </code>var onSuccess = function(stream) {
    var options = {
      audioBitsPerSecond : 128000,
      videoBitsPerSecond : 2500000,
      mimeType : 'video/mp4'
    }
    var mediaRecorder = new MediaRecorder(stream,options);
    m = mediaRecorder;

...</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("MediaStream Recording")}}</td>
   <td>{{Spec2("MediaStream Recording")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.MediaRecorder.MediaRecorder")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API">Media​Stream Recording API の使用</a></li>
 <li><a href="http://mdn.github.io/web-dictaphone/">ウェブディクタフォン</a>: MediaRecorder + getUserMedia + Web Audio API 可視化デモ、<a href="https://twitter.com/chrisdavidmills">Chris Mills</a> 著（<a href="https://github.com/mdn/web-dictaphone/">Github のソース</a>）。（英語）</li>
 <li><a href="http://simpl.info/mediarecorder/">simpl.info の MediaStream Recording のデモ</a>、<a href="https://twitter.com/sw12">Sam Dutton</a> 著。（英語）</li>
 <li>{{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}}</li>
</ul>
