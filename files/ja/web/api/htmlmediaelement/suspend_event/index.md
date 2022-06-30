---
title: 'HTMLMediaElement: suspend イベント'
slug: Web/API/HTMLMediaElement/suspend_event
tags:
  - Audio
  - HTMLMediaElement
  - Reference
  - Video
  - events
translation_of: Web/API/HTMLMediaElement/suspend_event
---
{{APIRef("HTMLMediaElement")}}

<span class="seoSummary">`suspend` イベントは、メディアデータの読み込みが中断されたときに発生します。</span>

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
   <td>{{DOMxRef("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">対象</th>
   <td>要素</td>
  </tr>
  <tr>
   <th scope="row">既定のアクション</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラプロパティ</th>
   <td>{{domxref("GlobalEventHandlers.onsuspend")}}</td>
  </tr>
  <tr>
   <th scope="row">仕様</th>
   <td><a class="external" href="https://html.spec.whatwg.org/multipage/media.html#event-media-suspend">HTML5 メディア</a></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

これらの例では、`HTMLMediaElement` の `suspend` イベントのイベントリスナーを追加し、そのイベントハンドラがイベントの発生に反応したときにメッセージを投稿します。

`AddEventListener()` を使用する場合

<pre class="brush: js">const video = document.querySelector('video');

video.addEventListener('suspend', (event) =&gt; {
  console.log('データの読み込みが中断されました。');
});</pre>

`onsuspend` イベントハンドラプロパティを使用する場合

<pre class="brush: js">const video = document.querySelector('video');

video.onsuspend = (event) =&gt; {
  console.log('データの読み込みが中断されました。');
};</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "media.html#event-media-suspend", "suspend media event")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#event-media-suspend", "suspend media event")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



{{Compat("api.HTMLMediaElement.suspend_event")}}

<h2 id="Related_Events" name="Related_Events">関連イベント</h2>

<ul>
 <li>{{domxref("HTMLMediaElement.playing_event", 'HTMLMediaElement: playing イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.waiting_event", 'HTMLMediaElement: waiting イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.seeking_event", 'HTMLMediaElement: seeking イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.seeked_event", 'HTMLMediaElement: seeked イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.ended_event", 'HTMLMediaElement: ended イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.loadedmetadata_event", 'HTMLMediaElement: loadedmetadata イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.loadeddata_event", 'HTMLMediaElement: loadeddata イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.canplay_event", 'HTMLMediaElement: canplay イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.canplaythrough_event", 'HTMLMediaElement: canplaythrough イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.durationchange_event", 'HTMLMediaElement: durationchange イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.timeupdate_event", 'HTMLMediaElement: timeupdate イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.play_event", 'HTMLMediaElement: play イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.pause_event", 'HTMLMediaElement: pause イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.ratechange_event", 'HTMLMediaElement: ratechange イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.volumechange_event", 'HTMLMediaElement: volumechange イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.suspend_event", 'HTMLMediaElement: suspend イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.emptied_event", 'HTMLMediaElement: emptied イベント')}}</li>
 <li>{{domxref("HTMLMediaElement.stalled_event", 'HTMLMediaElement: stalled イベント')}}</li>
</ul>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>{{domxref("HTMLAudioElement")}}</li>
 <li>{{domxref("HTMLVideoElement")}}</li>
 <li>{{HTMLElement("audio")}}</li>
 <li>{{HTMLElement("video")}}</li>
</ul>

<ul>
 <li>[Web Audio API](/ja/docs/Web/API/Web_Audio_API)</li>
</ul>
