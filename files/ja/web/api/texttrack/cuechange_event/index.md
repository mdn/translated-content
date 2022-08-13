---
title: 'TextTrack: cuechange イベント'
slug: Web/API/TextTrack/cuechange_event
tags:
  - API
  - Event
  - Reference
  - TextTrack
  - WebVTT
  - cuechange
  - oncuechange
  - track
  - イベント
  - テキストトラック
  - トラック
translation_of: Web/API/TextTrack/cuechange_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><strong><code>cuechange</code></strong> イベントは、 {{domxref("TextTrack")}} が現在表示しているキューが変更されたときに発生します。</span>このイベントは、もし表示されているものがあれば、 <code>TextTrack</code> <em>および</em> {{domxref("HTMLTrackElement")}} の両方に発生します。</p>

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
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers.oncuechange")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="On_the_TextTrack" name="On_the_TextTrack">TextTrack 上で</h3>

<p><code>cuechange</code> イベントのリスナーを <code>TextTrack</code> に設定するには、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} メソッドを使用します。</p>

<pre class="brush: js">track.addEventListener('cuechange', function () {
  let cues = track.activeCues;  // 現在のキューの配列
});
</pre>

<p>あるいは、 <code><a href="/ja/docs/Web/API/TextTrack/oncuechange">oncuechange</a></code> イベントハンドラ－プロパティを設定しても構いません。</p>

<pre class="brush: js">track.oncuechange = function () {
  let cues = track.activeCues; // 現在のキューの配列
}</pre>

<h3 id="On_the_track_element" name="On_the_track_element">track 要素上で</h3>

<p>基本となる {{domxref("TextTrack")}} は、 {{domxref("HTMLTrackElement.track", "track")}} プロパティで識別されますが、現在表示されているキューが変更されるたびに {{domxref("TextTrack.cuechange_event", "cuechange")}} イベントを受け取ります。これは、トラックがメディア要素に結び付けられていなくても発生します。</p>

<p>トラックがメディア要素に結び付けられて<em>いる</em>場合、 {{HTMLElement("track")}} 要素を {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素の子として使用すると、 <code>cuechange</code> イベントは {{domxref("HTMLTrackElement")}} にも送信されます。</p>

<pre class="brush: js">let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) =&gt; {
  let cues = event.target.track.activeCues;
});
</pre>

<p>また、<code>oncuechange</code> イベントハンドラーを使用することもできます。</p>

<pre class="brush: js">let textTrackElem = document.getElementById("texttrack");

textTrackElem.oncuechange = (event) =&gt; {
  let cues = event.target.track.activeCues;
});</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#event-media-cuechange', 'cuechange')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.TextTrack.cuechange_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{glossary("WebVTT")}}</li>
</ul>
