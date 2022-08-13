---
title: BlobEvent
slug: Web/API/BlobEvent
tags:
  - API
  - Audio
  - Blob
  - Interface
  - Media
  - MediaStream Recording
  - MediaStream Recording API
  - Recording Media
  - Reference
  - Video
  - events
translation_of: Web/API/BlobEvent
---
<p>{{APIRef("Media Capture and Streams")}}</p>

<p><strong><code>BlobEvent</code></strong> インターフェイスは、{{domxref("Blob")}} に関連付けられたイベントを表します。 これらの blob は、一般的にメディアコンテンツと関連付けられますが、必ずしもそうとは限りません。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("BlobEvent.BlobEvent", "BlobEvent()")}}</dt>
 <dd>与えられた引数で <code>BlobEvent</code> イベントを生成する。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>自身の親 {{domxref("Event")}} からのプロパティを継承します。</em></p>

<dl>
 <dt>{{domxref("BlobEvent.data")}} {{readonlyInline}}</dt>
 <dd>イベントと関連付けられたデータを表す {{domxref("Blob")}}。 イベントは、特定の {{domxref("Blob")}} で何かが起こることにより、{{domxref("EventTarget")}} 上で発生します。</dd>
 <dt>{{domxref("BlobEvent.timecode")}} {{readonlyinline}}</dt>
 <dd><code>data</code> 内の最初のチャンクのタイムスタンプと、このレコーダーによって生成された最初の <code>BlobEvent</code> 内の最初のチャンクのタイムスタンプとの差を示す {{domxref("DOMHighResTimeStamp")}}。 最初に生成された <code>BlobEvent</code> の <code>timecode</code> はゼロである必要はないことに注意してください。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p>固有のメソッドはありません。<em> 自身の親 {{domxref("Event")}} からのメソッドを継承します。</em></p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('MediaStream Recording', '#blobevent-section', 'BlobEvent')}}</td>
   <td>{{Spec2('MediaStream Recording')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>



<p>{{Compat("api.BlobEvent")}}</p>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>{{domxref("Event")}} 基本インターフェイス</li>
 <li><a href="/ja/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a>: メディアのチャンクの準備ができるたびに <code>BlobEvent</code> オブジェクトを送信します。</li>
 <li><a href="/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API">Media​Stream Recording API の使用</a></li>
</ul>
