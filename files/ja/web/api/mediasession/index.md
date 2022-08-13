---
title: MediaSession
slug: Web/API/MediaSession
tags:
  - Media Session API
  - MediaSession
  - Reference
  - インターフェイス
  - オーディオ
  - ビデオ
  - メディア
translation_of: Web/API/MediaSession
---
<p>{{SeeCompatTable}}{{APIRef("Media Session API")}}</p>

<p> <a href="/ja/docs/Web/API/Media_Session_API">Media Session API</a> の <strong><code>MediaSession</code></strong> インターフェースは、ウェブページで標準のメディア再生操作に対する専用の動作を提供します。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("MediaSession.metadata")}}</dt>
 <dd>プラットフォームのユーザーインターフェイスに表示するためのリッチメタデータを含む {{domxref("MediaMetadata")}} のインスタンスを返します。</dd>
 <dt>{{domxref("MediaSession.playbackState")}}</dt>
 <dd>現在のメディアセッションが再生中であるかどうかを示します。有効な値は <code>"none"</code>, <code>"paused"</code>, <code>"playing"</code>です。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("MediaSession.setActionHandler()")}}</dt>
 <dd>再生や一時停止などのメディアセッションの操作のためのイベントハンドラーを設定します。完全な一覧はメソッドのページをご覧ください。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例では、新しいメディアセッションを作成し、それにアクションハンドラーを割り当てます。</p>

<pre class="brush: js">if ('mediaSession' in navigator){
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Podcast Episode Title",
    artist: "Podcast Host",
    album: "Podcast Name",
    artwork: [{src: "podcast.jpg"}]
  });
  navigator.mediaSession.setActionHandler('play', function() {});
  navigator.mediaSession.setActionHandler('pause', function() {});
  navigator.mediaSession.setActionHandler('seekbackward', function() {});
  navigator.mediaSession.setActionHandler('seekforward', function() {});
  navigator.mediaSession.setActionHandler('previoustrack', function() {});
  navigator.mediaSession.setActionHandler('nexttrack', function() {});
}</pre>

<p>以下の例では、一時停止と再生のためのイベントハンドラーを設定します。</p>

<pre class="brush: js">var audio = document.querySelector("#player");
audio.src = "song.mp3";

navigator.mediaSession.setActionHandler('play', play);
navigator.mediaSession.setActionHandler('pause', pause);

function play() {
   audio.play();
   navigator.mediaSession.playbackState = "playing";
}

function pause() {
   audio.pause();
   navigator.mediaSession.playbackState = "paused";
}</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Media Session','#the-mediasession-interface','MediaSession')}}</td>
   <td>{{Spec2('Media Session')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.MediaSession")}}</p>
