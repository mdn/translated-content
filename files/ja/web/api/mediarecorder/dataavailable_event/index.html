---
title: MediaRecorder.ondataavailable
slug: Web/API/MediaRecorder/dataavailable_event
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - MediaStream Recording API
  - Property
  - Reference
  - Video
  - ondataavailable
translation_of: Web/API/MediaRecorder/ondataavailable
original_slug: Web/API/MediaRecorder/ondataavailable
---
<p>{{APIRef("MediaStream Recording")}}</p>

<p><span class="seoSummary"><strong><code>MediaRecorder.ondataavailable</code></strong> イベントハンドラ（<a href="/ja/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a> の一部）は {{event("dataavailable")}} イベントを処理します。 これにより、{{domxref("Blob")}} データが使用可能になったことに応じてコードを実行できます。</span></p>

<p><code>dataavailable</code> イベントは、<code>MediaRecorder</code> がメディアデータをアプリで使用するために引き渡すときに発生します。 データはデータを含む {{domxref("Blob")}} オブジェクトで提供されます。 これは次の4つの状況で発生します。</p>

<ul>
 <li>メディアストリームが終了すると、<code>ondataavailable</code> ハンドラにまだ引き渡されていないメディアデータはすべて単一の {{domxref("Blob")}} で渡されます。</li>
 <li>{{domxref("MediaRecorder.stop()")}} を呼び出すと、記録を開始してから、または最後に <code>dataavailable</code> イベントが発生してからキャプチャされたすべてのメディアデータが {{domxref("Blob")}} で引き渡されます。 この後、キャプチャは終了します。</li>
 <li>{{domxref("MediaRecorder.requestData()")}} を呼び出すと、記録を開始してから、または最後に <code>dataavailable</code> イベントが発生してからキャプチャされたすべてのメディアデータが引き渡されます。 その後、新しい <code>Blob</code> が作成され、メディアのキャプチャがその blob に対して続行されます。</li>
 <li>メディアキャプチャを開始した {{domxref("MediaRecorder.start()")}} メソッドに <code>timeslice</code> プロパティを渡した場合は、<code>timeslice</code> ミリ秒ごとに <code>dataavailable</code> イベントが発生します。 つまり、各 blob は特定の期間を持つことになります（最後の blob を除いてで、最後のイベント以降に残っているものは何でもということになるので、これはもっと短いかもしれません）。 そのため、メソッド呼び出しが次のようになっていれば — <code>recorder.start(1000);</code> — <code>dataavailable</code> イベントはメディアキャプチャの毎秒後に発生し、イベントハンドラは一秒の長さのメディアデータの blob で毎秒呼ばれるでしょう。 {{domxref("MediaRecorder.stop()")}} および {{domxref("MediaRecorder.requestData()")}} と共に <code>timeslice</code> を使用して、複数の同じ長さの blob と他の短い blob を生成することもできます。</li>
</ul>

<div class="note">
<p>メディアデータを含む {{domxref("Blob")}} は、{{event("dataavailable")}} イベントの <code>data</code> プロパティで利用できます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><span class="idlInterface" id="idl-def-IDBRequest"><span class="idlAttribute"><span class="idlInterface" id="idl-def-MediaRecorder"><span class="idlAttribute"><em>MediaRecorder</em>.ondataavailable = function(event) { ... }
<em>MediaRecorder</em>.addEventListener('dataavailable', function(event) { ... })</span></span></span></span>
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js" id="line1"><span>...
  var chunks = [];

  mediaRecorder.onstop = function(e) {
    console.log("MediaRecorder.stop() 呼び出し後に利用可能なデータ。");

    var audio = document.createElement('audio');
    audio.controls = true;
    var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
    var audioURL = window.URL.createObjectURL(blob);
    audio.src = audioURL;
    console.log("レコーダー停止");
  }

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

...</span>
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("MediaStream Recording", "#widl-MediaRecorder-ondataavailable", "MediaRecorder.ondataavailable")}}</td>
   <td>{{Spec2("MediaStream Recording")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.MediaRecorder.ondataavailable")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/MediaStream_Recording_API">Using the MediaStream Recording API</a></li>
 <li><a href="http://mdn.github.io/web-dictaphone/">ウェブディクタフォン</a>: MediaRecorder + getUserMedia + Web Audio API 可視化デモ、<a href="https://twitter.com/chrisdavidmills">Chris Mills</a> 著（<a href="https://github.com/mdn/web-dictaphone/">Github のソース</a>）。（英語）</li>
 <li><a href="http://simpl.info/mediarecorder/">simpl.info の MediaStream Recording のデモ</a>、<a href="https://twitter.com/sw12">Sam Dutton</a> 著。（英語）</li>
 <li>{{domxref("MediaDevices.getUserMedia")}}</li>
</ul>
