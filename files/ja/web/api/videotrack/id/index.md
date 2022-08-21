---
title: VideoTrack.id
slug: Web/API/VideoTrack/id
tags:
  - API
  - HTML DOM
  - Interface
  - Media
  - Property
  - Read-only
  - Reference
  - Video
  - Video Track
  - VideoTrack
  - id
  - track
translation_of: Web/API/VideoTrack/id
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><strong><code>id</code></strong> プロパティは、<strong>{{domxref("VideoTrack")}}</strong> によって表されるトラックを一意に識別する文字列を含みます。</span> この ID を {{domxref("VideoTrackList.getTrackById()")}} メソッドと共に使用して、メディア要素に関連付けられたメディア内の特定のトラックを見つけることができます。</p>

<p>トラック ID は、特定のトラックをロードする URL のフラグメントとしても使用できます（メディアがメディアフラグメントをサポートしている場合）。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>trackID</em> = <em>VideoTrack</em>.id;</pre>

<h3 id="Value" name="Value">値</h3>

<p>トラックを識別する {{domxref("DOMString")}}。メディア要素の {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} プロパティで指定されたものなどの {{domxref("VideoTrackList")}} で {{domxref("VideoTrackList.getTrackById", "getTrackById()")}} を呼び出すときに使用するのに適しています。</p>

<p> </p>

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
   <td>{{SpecName('HTML WHATWG', '#dom-videotrack-id', 'VideoTrack: id')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.VideoTrack.id")}}</p>
