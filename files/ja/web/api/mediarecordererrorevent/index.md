---
title: MediaRecorderErrorEvent
slug: Web/API/MediaRecorderErrorEvent
tags:
  - AV
  - Audio
  - Error
  - Event
  - Interface
  - Media
  - MediaRecorderErrorEvent
  - MediaStream
  - MediaStream Recording
  - MediaStream Recording API
  - Recording Audio
  - Recording Media
  - Recording Video
  - Video
  - WebRTC
translation_of: Web/API/MediaRecorderErrorEvent
---
<div>{{APIRef("MediaStream Recording")}}</div>

<p><span class="seoSummary"><code>MediaRecorderErrorEvent</code> インターフェイスは、<a href="/ja/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a> によって返されるエラーを表します。 発生したエラーを記述する {{domxref("DOMException")}} への参照をカプセル化した {{domxref("Event")}} オブジェクトです。</span></p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>親インタフェースである {{domxref("Event")}} からプロパティを継承します。</em></p>

<dl>
 <dt>{{domxref("MediaRecorderErrorEvent.error", "error")}} {{ReadOnlyInline}}</dt>
 <dd>発生したエラーに関する情報を含む {{domxref("DOMException")}}。 読み取り専用</dd>
</dl>

<h2 id="Constructor" name="Constructor">コンストラクタ</h2>

<dl>
 <dt>{{domxref("MediaRecorderErrorEvent.MediaRecorderErrorEvent", "MediaStreamRecorderEvent()")}}</dt>
 <dd>指定されたパラメータを使用して新しい <code>MediaRecorderErrorEvent</code> イベントオブジェクトを作成して返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>親インタフェースである {{domxref("Event")}} からメソッドを継承します。</em></p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('MediaStream Recording', 'MediaRecorder.html#errorevent-section', 'MediaRecorderErrorEvent') }}</td>
   <td>{{ Spec2('MediaStream Recording') }}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.MediaRecorderErrorEvent")}}</p>
