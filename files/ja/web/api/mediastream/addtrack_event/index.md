---
title: MediaStream.onaddtrack
slug: Web/API/MediaStream/addtrack_event
translation_of: Web/API/MediaStream/onaddtrack
original_slug: Web/API/MediaStream/onaddtrack
---
<p>{{APIRef("Media Streams API")}}</p>

<p><span class="seoSummary"><strong><code>MediaStream.onaddtrack</code></strong> プロパティは、{{event("Event_handlers", "event handler")}}であり、{{domxref("MediaStream")}}インスタンスで{{event("addtrack")}}イベントが発生した時に呼び出される関数です。このイベントは、メディアストリームへ新しいトラックが追加された時に発生します。</span>このイベントはブラウザがストリームへ新しいトラックを追加した時に発生します。たとえば、{{domxref("RTCPeerConnection")}}が再交渉された時や、{{domxref("HTMLMediaElement.captureStream()")}}を用いてキャプチャーが開始されたストリームが、新しいトラックを取得した時です。</p>

<p>JavaScriptのコードによって明示的にストリームへトラックを追加した場合({{domxref("MediaStream.addTrack", "addTrack()")}}の呼び出しによるもの)は、<code>addtrack</code>イベントは発生しません。</p>

<h2 id="文法">文法</h2>

<pre class="syntaxbox"><em>MediaStream</em>.onaddtrack = <em>eventHandler</em>;
</pre>

<h3 id="値">値</h3>

<p>どのトラックで{{event("addtrack")}}イベントが発生したのかを表現するための{{domxref("MediaStreamTrackEvent")}}オブジェクトを引数として受け取る関数を設定してください。追加されたトラックは、イベントの{{domxref("MediaStreamTrackEvent.track", "track")}}プロパティで表されます。</p>

<h2 id="例">例</h2>

<p>この例では、新しいトラックがストリームへ追加された時に、トラックのリストへ新しいアイテムを追加しています。新しいアイテムには、トラックの<code>kind</code>(<code>"audio"<font face="Open Sans, arial, x-locale-body, sans-serif"><span style="background-color: #ffffff;">または</span></font></code><code>"video"</code>)と<code>label</code>が表示されます。</p>

<pre class="brush: js">stream.onaddtrack = function(event) {
  let trackList = document.getElementById("tracks");
  let label = document.createElement("li");

  label.innerHTML = event.track.kind + ": " + event.track.label;
  trackList.appendChild(label);
};
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
   <td>{{ SpecName('Media Capture', '#event-mediastream-addtrack', 'MediaStream.onaddtrack') }}</td>
   <td>{{ Spec2('Media Capture') }}</td>
   <td>初版</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.MediaStream.onaddtrack")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{event("addtrack")}}イベントおよび、その型である{{domxref("MediaStreamTrackEvent")}}</li>
</ul>
