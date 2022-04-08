---
title: MediaStream.getAudioTracks()
slug: Web/API/MediaStream/getAudioTracks
translation_of: Web/API/MediaStream/getAudioTracks
---
<p>{{APIRef("Media Capture and Streams")}}</p>

<p>{{domxref("MediaStream")}} インタフェースの<strong><dfn><code>getAudioTracks()</code></dfn></strong> メソッドは、そのストリームの<code><a href="https://www.w3.org/TR/mediacapture-streams/#track-set">track set</a></code>の中から、{{domxref("MediaStreamTrack.kind")}}が<code>audio</code>である{{domxref("MediaStreamTrack")}} を表すオブジェクトの配列を返します。</p>

<h2 id="文法">文法</h2>

<pre class="syntaxbox notranslate">var <em>mediaStreamTracks</em> = <em>mediaStream</em>.getAudioTracks()</pre>

<h3 id="引数">引数</h3>

<p>なし。</p>

<h3 id="戻り値">戻り値</h3>

<p>ストリームに含まれるオーディオトラックである{{domxref("MediaStreamTrack")}}オブジェクトの配列。オーディオトラックとは{{domxref("MediaStreamTrack.kind", "kind")}}プロパティが <code>audio</code>のトラックです。ストリーム内にオーディオトラックがない場合はこの配列は空になります。</p>

<div class="note">
<p><strong>注意:</strong> トラックの順番は仕様では定義されておらず、実際、<code>getAudioTracks()</code>を呼び出すたびに変わりえます。</p>
</div>

<p>このAPIの初期バージョンでは、オーディオストリーム内の要素の型として使われていた特別な<code>AudioStreamTrack</code>インタフェースを含んでいました。しかし、こちらは後ほど、{{domxref("MediaStreamTrack")}}インタフェース内に統合されました。</p>

<h2 id="例">例</h2>

<p>この例では、Webカメラの音声とビデオを{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}を使ってストリームとして取得し、そのストリームを{{HTMLElement("video")}}要素に設定します。その後、終了時にストリーム内の最初のオーディオトラックを停止するタイマーを設定します。</p>

<pre class="brush: js notranslate">navigator.mediaDevices.getUserMedia({audio: true, video: true})
.then(mediaStream =&gt; {
  document.querySelector('video').srcObject = mediaStream;
  // Stop the audio stream after 5 seconds
  setTimeout(() =&gt; {
    const tracks = mediaStream.getAudioTracks()
    tracks[0].stop()
  }, 5000)
})
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Media Capture','#dom-mediastream-getaudiotracks','getAudioTracks()')}}</td>
   <td>{{Spec2('Media Capture')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.MediaStream.getAudioTracks")}}</p>
