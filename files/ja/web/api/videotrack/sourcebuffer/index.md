---
title: VideoTrack.sourceBuffer
slug: Web/API/VideoTrack/sourceBuffer
tags:
  - API
  - HTML DOM
  - MSE
  - Media
  - Media Source Extensions
  - Property
  - Read-only
  - Reference
  - SourceBuffer
  - Video
  - VideoTrack
  - track
translation_of: Web/API/VideoTrack/sourceBuffer
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary">読み取り専用の <strong>{{domxref("VideoTrack")}}</strong> の <strong><code>sourceBuffer</code></strong> プロパティは、トラックを作成した {{domxref("SourceBuffer")}} を返します。 トラックが {{domxref("SourceBuffer")}} によって作成されなかった場合、または {{domxref("SourceBuffer")}} がその親メディアソースの {{domxref("MediaSource.sourceBuffers")}} 属性から取り除かれた場合は null を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>sourceBuffer</em> = <em>VideoTrack</em>.sourceBuffer;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("SourceBuffer")}} または null。</p>

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
   <td>{{SpecName('Media Source Extensions', '#dom-videotrack-sourcebuffer', 'VideoTrack: sourceBuffer')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.VideoTrack.sourceBuffer")}}</p>
