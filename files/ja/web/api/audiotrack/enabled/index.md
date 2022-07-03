---
title: AudioTrack.enabled
slug: Web/API/AudioTrack/enabled
tags:
  - Audio
  - AudioTrack
  - HTML DOM
  - Media
  - Media Controls
  - Media Track
  - Property
  - Reference
  - Video
  - enabled
  - mute
  - track
translation_of: Web/API/AudioTrack/enabled
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><strong>{{domxref("AudioTrack")}}</strong> の <code><strong>enabled</strong></code> プロパティは、記述された音声トラックが現在使用可能かどうかを指定します。 <code>enabled</code> を <code>false</code> に設定してトラックを無効にすると、トラックはミュートになり、音声は生成されません。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>isAudioEnabled</em> = <em>AudioTrack</em>.enabled;

<em>AudioTrack</em>.enabled = <em>true</em> | <em>false</em>;</pre>

<h3 id="Value" name="Value">値</h3>

<p><code>enabled</code> プロパティは Boolean の値で、トラックが有効な場合は値が <code>true</code> です。 有効なトラックは、メディアの再生中に音声を生成します。 <code>enabled</code> を <code>false</code> に設定すると、音声トラックが効果的にミュートされ、メディアの音声パフォーマンスに寄与しなくなります。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、メディア要素のメイン音声トラックと解説音声トラックを切り替えます。</p>

<pre class="brush: js">function swapCommentaryMain() {
  var videoElem = document.getElementById("main-video");
  var audioTrackMain;
  var audioTrackCommentary;

  videoElem.audioTracks.forEach(track) {
    if (track.kind === "main") {
      audioTrackMain = track;
    } else if (track.kind === "commentary") {
      audioTrackCommentary = track;
    }
  }

  if (audioTrackMain &amp;&amp; audioTrackCommentary) {
    var commentaryEnabled = audioTrackCommentary.enabled;
    audioTrackCommentary.enabled = audioTrackMain.enabled;
    audioTrackMain.enabled = commentaryEnabled;
  }
}
</pre>

<p>上記の <code>swapCommentaryMain()</code> 関数は、{{HTMLElement("video")}} 要素の <code>"main-video"</code> の音声トラック内で、{{domxref("AudioTrack.kind", "kind")}} の値が <code>"main"</code> と <code>"commentary"</code> である音声トラックを見つけます。 これらはプライマリ音声トラックと解説トラックを表します。</p>

<div class="note">
<p><strong>注</strong>: この例では、動画には各 <code>kind</code> のトラックが1つしかないと想定していますが、必ずしもそうとは限りません。</p>
</div>

<p>次に、要素の音声トラックを、JavaScript の {{jsxref("Array.forEach", "forEach()")}} メソッドを使用してスキャンします（メディア要素の {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}} プロパティは実際には JavaScript の配列ではありませんが、ほとんどの場合は同様にアクセスできます）。</p>

<p>スキャンは、{{domxref("AudioTrack.kind", "kind")}} の値が <code>"main"</code> と <code>"commentary"</code> のトラックを探し、それらの {{domxref("AudioTrack")}} オブジェクトを記憶します。 それらが見つかると、2つのトラックの <code>enabled</code> プロパティの値を交換することで、2つのトラックのどちらが現在アクティブになっているかを交換します。</p>

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
   <td>{{SpecName('HTML WHATWG', 'media.html#dom-audiotrack-enabled', 'AudioTrack.enabled')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'embedded-content-0.html#dom-audiotrack-enabled', 'AudioTrack.enabled')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.AudioTrack.enabled")}}</p>
