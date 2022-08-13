---
title: 'AudioTrackList: removetrack イベント'
slug: Web/API/AudioTrackList/removetrack_event
tags:
  - AudioTrackList
  - Event
  - events
  - removeTrack
translation_of: Web/API/AudioTrackList/removetrack_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><code>removeTrack</code> イベントは、トラックが {{domxref("AudioTrackList")}} から取り除かれたときに発生します。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("TrackEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラプロパティ</th>
   <td><code><a href="/ja/docs/Web/API/AudioTrackList/onremovetrack">onremovetrack</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p><code>AddEventListener()</code> を使用する場合</p>

<pre class="brush: js">const videoElement = document.querySelector('video');

videoElement.audioTracks.addEventListener('removetrack', (event) =&gt; {
  console.log(`Audio track: ${event.track.label} removed`);
});</pre>

<p><code>onremovetrack</code> イベントハンドラプロパティを使用する場合</p>

<pre class="brush: js">const videoElement = document.querySelector('video');

videoElement.audioTracks.onremovetrack = (event) =&gt; {
  console.log(`Audio track: ${event.track.label} removed`);
};</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'media.html#event-media-removetrack', 'removetrack')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.AudioTrackList.removetrack_event")}}</p>

<h2 id="See_also" name="See_also">See also</h2>

<ul>
 <li>関連情報: <code><a href="/ja/docs/Web/API/AudioTrackList/addtrack_event">addtrack</a></code>, <code><a href="/ja/docs/Web/API/AudioTrackList/change_event">change</a></code></li>
 <li><code><a href="/ja/docs/Web/API/VideoTrackList">VideoTrackList</a></code> 対象でのこのイベント: <code><a href="/ja/docs/Web/API/VideoTrackList/removetrack_event">removetrack</a></code></li>
 <li><code><a href="/ja/docs/Web/API/MediaStream">MediaStream</a></code> 対象でのこのイベント: <code><a href="/ja/docs/Web/API/MediaStream/removetrack_event">removetrack</a></code></li>
 <li><a href="/ja/docs/Web/API/Media_Streams_API">Media Streams API</a></li>
 <li><a href="/ja/docs/Web/API/WebRTC_API">WebRTC API</a></li>
</ul>
