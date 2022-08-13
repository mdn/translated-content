---
title: 'VideoTrackList: change イベント'
slug: Web/API/VideoTrackList/change_event
tags:
  - API
  - Change
  - Reference
  - events
translation_of: Web/API/VideoTrackList/change_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><code>change</code> イベントは、動画トラックがアクティブまたは非アクティブになったとき（トラックの <code><a href="/ja/docs/Web/API/VideoTrack/selected">selected</a></code> プロパティを変更したときなど）に発生します。</span></p>

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
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラプロパティ</th>
   <td><code><a href="/ja/docs/Web/API/VideoTrackList/onchange">onchange</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p><code>AddEventListener()</code> を使用する場合</p>

<pre class="brush: js">const videoElement = document.querySelector('video');
videoElement.videoTracks.addEventListener('change', (event) =&gt; {
    console.log(`'${event.type}' イベント発生`);
});

// `selected` の値を変更すると `change` イベントを引き起こします
const toggleTrackButton = document.querySelector('.toggle-track');
toggleTrackButton.addEventListener('click', () =&gt; {
  const track = videoElement.videoTracks[0];
  track.selected = !track.selected;
});
</pre>

<p><code>onchange</code> イベントハンドラプロパティを使用する場合</p>

<pre class="brush: js">const videoElement = document.querySelector('video');
videoElement.videoTracks.onchange = (event) =&gt; {
    console.log(`'${event.type}' イベント発生`);
};

// `selected` の値を変更すると `change` イベントを引き起こします
const toggleTrackButton = document.querySelector('.toggle-track');
toggleTrackButton.addEventListener('click', () =&gt; {
  const track = videoElement.videoTracks[0];
  track.selected = !track.selected;
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'media.html#event-media-change', 'change')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.VideoTrackList.change_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>Related events: <code><a href="/ja/docs/Web/API/VideoTrackList/addtrack_event">addtrack</a></code>, <code><a href="/ja/docs/Web/API/VideoTrackList/removetrack_event">removetrack</a></code></li>
 <li><code><a href="/ja/docs/Web/API/AudioTrackList">AudioTrackList</a></code> 対象でのこのイベント: <code><a href="/ja/docs/Web/API/AudioTrackList/change_event">change</a></code></li>
 <li><a href="/ja/docs/Web/API/Media_Streams_API">Media Streams API</a></li>
 <li><a href="/ja/docs/Web/API/WebRTC_API">WebRTC API</a></li>
</ul>
