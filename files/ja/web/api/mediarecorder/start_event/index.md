---
title: MediaRecorder.onstart
slug: Web/API/MediaRecorder/start_event
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Property
  - Reference
  - Video
  - onstart
translation_of: Web/API/MediaRecorder/onstart
original_slug: Web/API/MediaRecorder/onstart
---
<div>{{APIRef("Media Recorder API")}}</div>

<p><strong><code>MediaRecorder.onstartevent</code></strong> ハンドラ（<a href="/ja/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a> の一部）は <code>start</code> イベントを処理します。 これにより、<code>MediaRecorder</code> によってメディアの記録が開始されたことに応答してコードを実行できるようにします。</p>

<p><code>start</code> イベントは、{{domxref("MediaRecorder.start()")}} メソッドを呼び出した結果としてスローされます。 この時点で、データは {{domxref("Blob")}} に集められ始めます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">MediaRecorder.onstart = function(event) { ... }
MediaRecorder.addEventListener('start', function(event) { ... })</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">...

  record.onclick = function() {
    mediaRecorder.start();
    console.log("レコーダーが起動しました");
  }

  mediaRecorder.onstart = function() {
    // 記録の開始に
    // 応答して何かをする
  }

...</pre>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p>無し。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("MediaStream Recording", "#widl-MediaRecorder-onstart", "MediaRecorder.onstart")}}</td>
   <td>{{Spec2("MediaStream Recording")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.MediaRecorder.onstart")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API">Media​Stream Recording API の使用</a></li>
 <li><a href="http://mdn.github.io/web-dictaphone/">ウェブディクタフォン</a>: MediaRecorder + getUserMedia + Web Audio API 可視化デモ、<a href="https://twitter.com/chrisdavidmills">Chris Mills</a> 著（<a href="https://github.com/mdn/web-dictaphone/">Github のソース</a>）。（英語）</li>
 <li><a href="http://simpl.info/mediarecorder/">simpl.info の MediaStream Recording のデモ</a>、<a href="https://twitter.com/sw12">Sam Dutton</a> 著。（英語）</li>
 <li>{{domxref("MediaDevices.getUserMedia")}}</li>
</ul>
