---
title: SourceBuffer.audioTracks
slug: Web/API/SourceBuffer/audioTracks
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - SourceBuffer
  - audiotracks
translation_of: Web/API/SourceBuffer/audioTracks
---
<div>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}</div>

<p><span class="seoSummary">{{domxref("SourceBuffer")}} インターフェイスの <strong><code>audioTracks</code></strong> 読み取り専用プロパティは、<code>SourceBuffer</code> 内に現在含まれている音声トラックのリストを返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>myAudioTracks</em> = <em>sourceBuffer</em>.audioTracks;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("AudioTrackList")}} オブジェクト。</p>

<h2 id="例">例</h2>

<p>未定</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-audiotracks', 'audioTracks')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.SourceBuffer.audioTracks")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("MediaSource")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>
