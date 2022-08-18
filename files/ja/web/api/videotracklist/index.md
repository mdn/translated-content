---
title: VideoTrackList
slug: Web/API/VideoTrackList
tags:
  - API
  - HTML DOM
  - Interface
  - Media
  - Reference
  - Track List
  - Tracks
  - Video
  - VideoTrackList
  - list
translation_of: Web/API/VideoTrackList
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><strong><code>VideoTrackList</code></strong> インターフェイスは、{{HTMLElement("video")}} 要素内に含まれる動画トラックのリストを表すために使用します。 各トラックはリスト内の個別の {{domxref("VideoTrack")}} オブジェクトで表します。</span></p>

<p>{{domxref('HTMLMediaElement.videoTracks')}} を使用してこのオブジェクトのインスタンスを取得します。 個々のトラックは、配列構文または {{jsxref("Array.forEach", "forEach()")}} などの関数を使用してアクセスできます。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>このインターフェイスは、その親インターフェイスである {{domxref("EventTarget")}} からもプロパティを継承します。</em></p>

<dl>
 <dt>{{domxref("VideoTrackList.length", "length")}} {{ReadOnlyInline}}</dt>
 <dd>リスト内のトラック数。</dd>
 <dt>{{domxref("VideoTrackList.selectedIndex", "selectedIndex")}} {{ReadOnlyInline}}</dt>
 <dd>現在選択されているトラックがある場合はそのインデックス、それ以外の場合は <code>-1</code>。</dd>
</dl>

<h2 id="Event_handlers" name="Event_handlers">イベントハンドラー</h2>

<dl>
 <dt>{{domxref("VideoTrackList.onaddtrack", "onaddtrack")}}</dt>
 <dd>{{event("addtrack")}} イベントが発生したときに呼び出されるイベントハンドラー。 新しい動画トラックがメディア要素に追加されたことを示します。</dd>
 <dt>{{domxref("VideoTrackList.onchange", "onchange")}}</dt>
 <dd>{{event("change")}} イベントが発生したときに呼び出されるイベントハンドラー。 つまりトラックの {{domxref("VideoTrack.selected", "selected")}} プロパティの値が変更されて、トラックがアクティブまたは非アクティブになったときです。</dd>
 <dt>{{domxref("VideoTrackList.onremovetrack", "onremovetrack")}}</dt>
 <dd>{{event("removetrack")}} イベントが発生したときに呼び出されるイベントハンドラー。 動画トラックがメディア要素から取り除かれたことを示します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェイスは、その親インターフェイスである {{domxref("EventTarget")}} からもメソッドを継承しています。</em></p>

<dl>
 <dt>{{domxref("VideoTrackList.getTrackById", "getTrackById()")}}</dt>
 <dd>指定された文字列と {{domxref("VideoTrack.id", "id")}} が一致する <code>VideoTrackList</code> 内で見つかった {{domxref("VideoTrack")}} を返します。 一致が見つからない場合は、<code>null</code> を返します。</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<dl>
 <dt>{{domxref("VideoTrackList.addtrack_event", "addtrack")}}</dt>
 <dd>新しい動画トラックがメディア要素に追加されたときに発生します。<br>
 {{domxref("VideoTrackList.onaddtrack", "onaddtrack")}} プロパティからも利用できます。</dd>
 <dt>{{domxref("VideoTrackList.change_event", "change")}}</dt>
 <dd>動画トラックがアクティブまたは非アクティブになったときに発生します。<br>
 {{domxref("VideoTrackList.onchange", "onchange")}} プロパティからも利用できます。</dd>
 <dt>{{domxref("VideoTrackList.removetrack_event", "removetrack")}}</dt>
 <dd>動画トラックがメディア要素から取り除かれたときに発生します。<br>
 {{domxref("VideoTrackList.onremovetrack", "onremovetrack")}} プロパティからも利用できます。</dd>
</dl>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p><code>VideoTrackList</code> を使用すると、メディア要素にある動画トラックに直接アクセスできるだけでなく、{{event("addtrack")}} イベントと {{event("removetrack")}} イベントにイベントハンドラを設定できるため、メディア要素のストリームにトラックが追加されたときまたは取り除かれたときに検出できます。 詳細と例については、{{domxref("VideoTrackList.onaddtrack", "onaddtrack")}} と {{domxref("VideoTrackList.onremovetrack", "onremovetrack")}} を参照してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Getting_a_media_elements_video_track_list" name="Getting_a_media_element's_video_track_list">メディア要素の動画トラックリストの取得</h3>

<p>メディア要素の <code>VideoTrackList</code> を取得するには、その {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} プロパティを使用します。</p>

<pre class="brush: js">var videoTracks = document.querySelector("video").videoTracks;</pre>

<h3 id="Monitoring_track_count_changes" name="Monitoring_track_count_changes">トラック数の変化の監視</h3>

<p>この例では、利用可能なチャンネル数に関する情報を表示するアプリがあります。 それを最新に保つために、{{event("addtrack")}} と {{event("removetrack")}} イベントのためのハンドラが設定されています。</p>

<pre class="brush: js">videoTracks.onaddtrack = updateTrackCount;
videoTracks.onremovetrack = updateTrackCount;

function updateTrackCount(event) {
  trackCount = videoTracks.length;
  drawTrackCountIndicator(trackCount);
}
</pre>

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
   <td>{{SpecName('HTML WHATWG', '#videotracklist', 'VideoTrackList')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.VideoTrackList")}}</p>
