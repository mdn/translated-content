---
title: MediaRecorder.onpause
slug: Web/API/MediaRecorder/pause_event
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Property
  - Reference
  - Video
  - onpause
translation_of: Web/API/MediaRecorder/onpause
original_slug: Web/API/MediaRecorder/onpause
---
<p>{{APIRef("Media Recorder API")}}</p>

<p><span class="seoSummary"><strong><code>MediaRecorder.onpause</code></strong> イベントハンドラ（<a href="/ja/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a> の一部）は <code>pause</code> イベントを処理します。 これにより、一時停止中のメディアの記録に応答してコードを実行できます。</span></p>

<p><code>pause</code> イベントは、{{domxref("MediaRecorder.pause()")}} メソッドを呼び出した結果としてスローされます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">MediaRecorder.onpause = function(event) { ... }
MediaRecorder.addEventListener('pause', function(event) { ... })
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">...

  pause.onclick = function() {
    if(mediaRecorder.state === "recording") {
      mediaRecorder.pause();
      // 記録を一時停止
    } else if(mediaRecorder.state === "paused") {
      mediaRecorder.resume();
      // 記録を再開
    }
  }

  mediaRecorder.onpause = function() {
    // 記録の一時停止に
    // 応答して何かをする
  }

  mediaRecorder.onresume = function() {
    // 記録の再開に
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
   <td>{{SpecName("MediaStream Recording", "#widl-MediaRecorder-onpause", "MediaRecorder.onpause")}}</td>
   <td>{{Spec2("MediaStream Recording")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.MediaRecorder.onpause")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API">Media​Stream Recording API の使用</a></li>
 <li><a href="http://mdn.github.io/web-dictaphone/">ウェブディクタフォン</a>: MediaRecorder + getUserMedia + Web Audio API 可視化デモ、<a href="https://twitter.com/chrisdavidmills">Chris Mills</a> 著（<a href="https://github.com/mdn/web-dictaphone/">Github のソース</a>）。（英語）</li>
 <li><a href="http://simpl.info/mediarecorder/">simpl.info の MediaStream Recording のデモ</a>、<a href="https://twitter.com/sw12">Sam Dutton</a> 著。（英語）</li>
 <li>{{domxref("MediaDevices.getUserMedia")}}</li>
</ul>
