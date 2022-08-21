---
title: AudioTrackList.length
slug: Web/API/AudioTrackList/length
tags:
  - API
  - Audio
  - AudioTrackList
  - HTML DOM
  - Media
  - Property
  - Read-only
  - Reference
  - length
  - list
  - track
translation_of: Web/API/AudioTrackList/length
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary">読み取り専用の <strong>{{domxref("AudioTrackList")}}</strong> の <strong><code>length</code></strong> プロパティは、<code>AudioTrackList</code> 内のエントリ数を返します。 各エントリは、メディア要素内の1つの音声トラックを表す {{domxref("AudioTrack")}} です。</span> 値 0 は、メディアに音声トラックがないことを示します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>trackCount</em> = <em>AudioTrackList</em>.length;</pre>

<h3 id="Value" name="Value">値</h3>

<p><code>AudioTrackList</code> に含まれる音声トラックの数を示す数値。 <code>AudioTrackList</code> を {{domxref("AudioTrack")}} 型のオブジェクトの配列として扱うことで、各トラックにアクセスできます。</p>

<h2 id="Example" name="Example">例</h2>

<p>このスニペットは、{{domxref("Document.querySelector", "querySelector()")}} によって {{Glossary("DOM")}} 内で見つかった最初の {{HTMLElement("video")}} 要素内の音声トラックの数を取得します。</p>

<pre class="brush: js">var videoElem = document.querySelector("video");
var numAudioTracks = 0;

if (videoElem.audioTracks) {
  numAudioTracks = videoElem.audioTracks.length;
}
</pre>

<p>このサンプルは、{{domxref("AudioTrack")}} をサポートしていないブラウザーで失敗するのを避けるために、{{domxref("HTMLMediaElement.audioTracks")}} が定義されていることを確認していることに注意してください。</p>

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
   <td>{{SpecName('HTML WHATWG', 'media.html#dom-audiotracklist-length', 'AudioTrackList.length')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'embedded-content-0.html#dom-audiotracklist-length', 'AudioTrackList.length')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.AudioTrackList.length")}}</p>
