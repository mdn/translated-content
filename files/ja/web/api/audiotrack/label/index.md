---
title: AudioTrack.label
slug: Web/API/AudioTrack/label
tags:
  - API
  - Audio
  - Audio Track
  - AudioTrack
  - HTML DOM
  - Media
  - Property
  - Read-only
  - Reference
  - label
  - metadata
  - track
translation_of: Web/API/AudioTrack/label
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary">読み取り専用の <strong>{{domxref("AudioTrack")}}</strong> の <strong><code>label</code></strong> プロパティは、音声トラックの判読可能なラベルがあればそれを指定する文字列を返します。 それ以外の場合は、空の文字列を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>audioTrackLabel</em> = <em>AudioTrack</em>.label;</pre>

<h3 id="Value" name="Value">値</h3>

<p>トラックのメタデータで利用可能な場合は、トラックの判読可能なラベルを指定する {{domxref("DOMString")}}。 それ以外の場合は、空の文字列（<code>""</code>）が返されます。</p>

<p>例えば、{{domxref("AudioTrack.kind", "kind")}} が <code>"commentary"</code> のトラックには、<code>"監督 Mark Markmarkimark とスター Donna Donnalidon の解説"</code> のような <code>label</code> が付けられます。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、指定されたメディア要素の音声トラックを選択するためにユーザーインターフェイスで使用される可能性のあるトラックの kind とラベルの配列を返します。 リストは特定の kind のトラックのみを通過させるようにフィルタされます。</p>

<pre class="brush: js">function getTrackList(el) {
  var trackList = [];
  const wantedKinds = [
    "main", "alternative", "main-desc", "translation", "commentary"
  ];

  el.audioTracks.forEach(function(track) {
    if (wantedKinds.includes(track.kind)) {
      trackList.push({
        id: track.id,
        kind: track.kind,
        label: track.label
      });
    }
  });
  return trackList;
}</pre>

<p>結果の <code>trackList</code> には、<code>wantKinds</code> 配列のいずれかの <code>kind</code> の音声トラックの配列が含まれ、各エントリにはトラックの {{domxref("AudioTrack.id", "id")}}、{{domxref("AudioTrack.kind", "kind")}}、{{domxref("AudioTrack.label", "label")}} が含まれます。</p>

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
   <td>{{SpecName('HTML WHATWG', 'media.html#dom-audiotrack-label', 'AudioTrack.label')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'embedded-content-0.html#dom-audiotrack-label', 'AudioTrack.label')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.AudioTrack.label")}}</p>
