---
title: AudioTrack
slug: Web/API/AudioTrack
tags:
  - Audio
  - AudioTrack
  - HTML
  - HTML DOM
  - Interface
  - Media
  - Reference
  - track
translation_of: Web/API/AudioTrack
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><strong><code>AudioTrack</code></strong> インターフェイスは、HTML のメディア要素（{{HTMLElement("audio")}} または {{HTMLElement("video")}}）の1つからの単一の音声トラックを表します。</span> <code>AudioTrack</code> オブジェクトにアクセスする最も一般的な用途は、トラックをミュートおよびミュート解除するためにその {{domxref("AudioTrack.enabled", "enabled")}} プロパティを切り替えることです。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("AudioTrack.enabled", "enabled")}}</dt>
 <dd>音声トラックの音を有効にするかどうかを制御する <code>Boolean</code> の値。この値を <code>false</code> に設定すると、トラックの音声がミュートになります。</dd>
 <dt>{{domxref("AudioTrack.id", "id")}} {{ReadOnlyInline}}</dt>
 <dd>メディア内のトラックを一意に識別する {{domxref("DOMString")}}。 この ID は、{{domxref("AudioTrackList.getTrackById()")}} を呼び出すことによって、音声トラックリスト内の特定のトラックを見つけるために使用できます。 メディアが <a href="https://www.w3.org/TR/media-frags/">Media Fragments URI 仕様</a>（<a href="http://www.asahi-net.or.jp/~ax2s-kmtn/internet/media/REC-media-frags-10-20120925.html">その日本語訳</a>）に従ってメディアフラグメントによるシークをサポートしている場合は、ID を URL のフラグメント部分として使用することもできます。</dd>
 <dt>{{domxref("AudioTrack.kind", "kind")}} {{ReadOnlyInline}}</dt>
 <dd>トラックが属するカテゴリを指定する {{domxref("DOMString")}}。 例えば、メイン音声トラックは <code>kind</code> に <code>"main"</code> を持ちます。</dd>
 <dt>{{domxref("AudioTrack.label", "label")}} {{ReadOnlyInline}}</dt>
 <dd>トラックに人間が読めるラベルを提供する {{domxref("DOMString")}}。 例えば、映画の音声解説トラックには、<code>"監督 John Q. Public と俳優 John Doe と Jane Eod による解説"</code> という <code>label</code> が付いています。 ラベルが指定されていない場合、この文字列は空です。</dd>
 <dt>{{domxref("AudioTrack.language", "language")}} {{ReadOnlyInline}}</dt>
 <dd>音声トラックの主要言語を指定する {{domxref("DOMString")}}、または不明の場合は空の文字列。 言語は、<code>"en-US"</code> や <code>"pt-BR"</code> などの BCP 47（{{RFC(5646)}}）言語コードで指定されています。</dd>
 <dt>{{domxref("AudioTrack.sourceBuffer", "sourceBuffer")}} {{ReadOnlyInline}}</dt>
 <dd>トラックを作成した {{domxref("SourceBuffer")}}。 トラックが {{domxref("SourceBuffer")}} によって作成されなかった場合、または {{domxref("SourceBuffer")}} がその親メディアソースの {{domxref("MediaSource.sourceBuffers")}} 属性から取り除かれた場合は、null を返します。</dd>
</dl>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p>特定のメディア要素の <code>AudioTrack</code> を取得するには、その要素の {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}} プロパティを使用します。 このプロパティは、メディアに含まれる個々のトラックを取得できる {{domxref("AudioTrackList")}} オブジェクトを返します。</p>

<pre class="brush: js">var el = document.querySelector("video");
var tracks = el.audioTracks;
</pre>

<p>その後、配列の構文または {{jsxref("Array.forEach", "forEach()")}} などの関数を使用して、メディアの個々のトラックにアクセスできます。</p>

<p>この最初の例は、メディア上の最初の音声トラックを取得します。</p>

<pre class="brush: js">var firstTrack = tracks[0];</pre>

<p>次の例では、メディアのすべての音声トラックをスキャンして、（変数 <code>userLanguage</code> から取得した）ユーザーの優先言語のものを有効にし、それ以外を無効にします。</p>

<pre class="brush: js">tracks.forEach(function(track) {
  if (track.language === userLanguage) {
    track.enabled = true;
  } else {
    track.enabled = false;
  }
});
</pre>

<p>{{domxref("AudioTrack.language", "language")}} は標準（{{RFC(5646)}}）形式です。 例えば、アメリカ英語の場合、これは <code>"en-US"</code> になります。</p>

<h2 id="Example" name="Example">例</h2>

<p>{{page("/ja/docs/Web/API/AudioTrack/label", "Example")}}</p>

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
   <td>{{SpecName('HTML WHATWG', 'media.html#audiotrack', 'AudioTrack')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'embedded-content-0.html#audiotrack', 'AudioTrack')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.AudioTrack")}}</p>
