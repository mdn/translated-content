---
title: BlobEvent.timecode
slug: Web/API/BlobEvent/timecode
tags:
  - API
  - BlobEvent
  - Media
  - Media Stream Recording
  - Property
  - Reference
translation_of: Web/API/BlobEvent/timecode
---
<p>{{SeeCompatTable}}{{APIRef("Media Capture and Streams")}}</p>

<p><span class="seoSummary">{{domxref("BlobEvent")}} インタフェースの <strong><code>timecode</code></strong> 読み取り専用プロパティは、データ内の最初のチャンクのタイムスタンプと、このレコーダによって生成された最初の <code>BlobEvent</code> 内の最初のチャンクのタイムスタンプとの差を示す {{domxref("DOMHighResTimeStamp")}} です。</span> 最初に生成された <code>BlobEvent</code> の <code>timecode</code> はゼロである必要はないことに注意してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var timecode = BlobEvent.timecode</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("DOMHighResTimeStamp")}}。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('MediaStream Recording','#dom-blobevent-timecode','timecode')}}</td>
   <td>{{Spec2('MediaStream Recording')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">ブラウザーの実装状況</h2>

<div>


<p>{{Compat("api.BlobEvent.timecode")}}</p>
</div>
