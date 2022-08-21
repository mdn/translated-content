---
title: TrackEvent
slug: Web/API/TrackEvent
tags:
  - API
  - Audio
  - HTML DOM
  - Interface
  - Media
  - Reference
  - TrackEvent
  - Video
translation_of: Web/API/TrackEvent
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary">HTML DOM 仕様の一部である <strong><code>TrackEvent</code></strong> インターフェイスは、HTML メディア要素で使用可能なトラックのセットに対する変更を表すイベントに使用されます。 これらのイベントは {{event("addtrack")}} と {{event("removetrack")}} です。</span> <code>TrackEvent</code> を {{domxref("RTCPeerConnection")}} の一部であるトラックに使用される {{domxref("RTCTrackEvent")}} インターフェイスと混同しないでください。<br>
  </p>

<p><code>TrackEvent</code> に基づくイベントは、常に次のメディアトラックリストの種類のいずれかに送信されます。</p>

<ul>
 <li><span class="hidden"> </span>動画トラックに関連するイベントは、常に {{domxref("HTMLMediaElement.videoTracks")}} にある {{domxref("VideoTrackList")}} に送信されます。</li>
 <li>音声トラックに関連するイベントは、常に {{domxref("HTMLMediaElement.audioTracks")}} で指定された {{domxref("AudioTrackList")}} に送信されます。</li>
 <li>テキストトラックに影響を与えるイベントは、{{domxref("HTMLMediaElement.textTracks")}} によって示される {{domxref("TextTrackList")}} オブジェクトに送信されます。</li>
</ul>

<dl>
</dl>

<h2 id="Constructor" name="Constructor">コンストラクタ</h2>

<dl>
 <dt>{{domxref("TrackEvent.TrackEvent", "TrackEvent()")}}</dt>
 <dd>指定されたイベントタイプとオプションの追加プロパティで、新しい <code>TrackEvent</code> オブジェクトを作成して初期化します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em><code>TrackEvent</code> は {{domxref("Event")}} に基づいているため、<code>Event</code> のプロパティは <code>TrackEvent</code> オブジェクトでも利用できます。</em></p>

<dl>
 <dt>{{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}</dt>
 <dd>イベントが参照している DOM のトラックオブジェクト。 <code>null</code> でない場合、これは常にメディアトラックの種類のうちの1つのオブジェクト（{{domxref("AudioTrack")}}、{{domxref("VideoTrack")}}、または {{domxref("TextTrack")}}）です。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em><code>TrackEvent</code> には独自のメソッドはありません。 しかし、それは {{domxref("Event")}} に基づいているので、<code>Event</code> オブジェクトで利用可能なメソッドを提供します。</em></p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、<code>handleTrackEvent()</code> 関数を設定します。 この関数は、文書内で見つかった最初の {{HTMLElement("video")}} 要素の {{event("addtrack")}} イベントまたは {{event("removetrack")}} イベントに対して呼び出されます。</p>

<pre class="brush: js">var videoElem = document.querySelector("video");

videoElem.videoTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.videoTracks.addEventListener("removetrack", handleTrackEvent, false);
videoElem.audioTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.audioTracks.addEventListener("removetrack", handleTrackEvent, false);
videoElem.textTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.textTracks.addEventListener("removetrack", handleTrackEvent, false);

function handleTrackEvent(event) {
  var trackKind;

  if (event.target instanceof(VideoTrackList)) {
    trackKind = "動画";
  } else if (event.target instanceof(AudioTrackList)) {
    trackKind = "音声";
  } else if (event.target instanceof(TextTrackList)) {
    trackKind = "テキスト";
  } else {
    trackKind = "不明な";
  }

  switch(event.type) {
    case "addtrack":
      console.log(trackKind + "トラックが追加されました。");
      break;
    case "removetrack":
      console.log(trackKind + "トラックが取り除かれました。");
      break;
  }
}
</pre>

<p>イベントハンドラは、JavaScript の <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/instanceof">instanceof</a></code> 演算子を使用してイベントが発生したトラックの種類を判断し、それがどの種類のトラックであるか、および要素に追加されているのか、要素から取り除かれているのかを示すメッセージをコンソールに出力します。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "media.html#the-trackevent-interface", "TrackEvent")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#trackevent", "TrackEvent")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.TrackEvent")}}</p>
