---
title: AudioContext.createConvolver()
slug: Web/API/BaseAudioContext/createConvolver
translation_of: Web/API/BaseAudioContext/createConvolver
original_slug: Web/API/AudioContext/createConvolver
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("AudioContext") }}インターフェースの<code>createConvolver()</code>メソッドは、音声にリバーブ効果などを適用する{{ domxref("ConvolverNode") }}を生成します。詳細は<a href="http://webaudio.github.io/web-audio-api/#background-3">spec definition of Convolution</a>を参照してください。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var convolver = audioCtx.createConvolver();</pre>

<h3 id="Description" name="Description">戻り値</h3>

<p>{{domxref("ConvolverNode")}}</p>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例は畳み込みノードを生成する基礎的なAudioContextの使い方を示しています。まず、畳み込み(インパルス応答)が適用される音声が書き込まれた<code>AudioBuffer</code>を生成し、そしてそれに畳み込みを適用します。例ではコンサートホールの群集の短い音声を使っていて、深く音響したリバーブ効果がかかっています。</p>

<p>例と情報の応用は、<a href="http://mdn.github.io/voice-change-o-matic/">Voice-change-O-maticデモ</a>(<a href="https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js">ソースコード</a>)をチェックしてください。</p>

<pre class="brush: js">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var convolver = audioCtx.createConvolver();

  ...

// XHRで畳み込みノードのための音声トラックを得る

var soundSource, concertHallBuffer;

ajaxRequest = new XMLHttpRequest();
ajaxRequest.open('GET', 'concert-crowd.ogg', true);
ajaxRequest.responseType = 'arraybuffer';

ajaxRequest.onload = function() {
  var audioData = ajaxRequest.response;
  audioCtx.decodeAudioData(audioData, function(buffer) {
      concertHallBuffer = buffer;
      soundSource = audioCtx.createBufferSource();
      soundSource.buffer = concertHallBuffer;
    }, function(e){"Error with decoding audio data" + e.err});
}

ajaxRequest.send();

  ...

convolver.buffer = concertHallBuffer;</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createConvolver-ConvolverNode', 'createConvolver()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.BaseAudioContext.createConvolver")}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
