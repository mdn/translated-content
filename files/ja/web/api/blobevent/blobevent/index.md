---
title: BlobEvent()
slug: Web/API/BlobEvent/BlobEvent
tags:
  - API
  - BlobEvent
  - Constructor
  - DOM
  - DOM Reference
  - Experimental
  - Media Stream Encoding
  - Reference
translation_of: Web/API/BlobEvent/BlobEvent
---
<p>{{APIRef("Media Capture and Streams")}}{{seeCompatTable}}</p>

<p><code><strong>BlobEvent()</strong></code> コンストラクターは、新たに生成され {{domxref("Blob")}} に関連付けられた {{domxref("BlobEvent")}} オブジェクトを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>blobEvent</em> = new BlobEvent({data: <em>aSpecificBlob</em>}[, timecode]);
</pre>

<h3 id="Arguments" name="Arguments">引数</h3>

<p><em><code>BlobEvent()</code> コンストラクターは、{{domxref("Event.Event", "Event()")}} からの引数も継承します。</em></p>

<dl>
 <dt><code>data</code></dt>
 <dd>イベントに関連付けられた {{domxref("Blob")}}。</dd>
 <dt><code>timecode</code> {{optional_inline}}</dt>
 <dd>blob イベントの初期化に使用される {{domxref("DOMHighResTimeStamp")}}。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('MediaStream Recording', '#dom-blobevent-blobevent', 'BlobEvent: BlobEvent')}}</td>
   <td>{{Spec2('MediaStream Recording')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>



<p>{{Compat("api.BlobEvent.BlobEvent")}}</p>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>このメソッドが属する {{domxref("BlobEvent")}} インターフェイス。</li>
</ul>
