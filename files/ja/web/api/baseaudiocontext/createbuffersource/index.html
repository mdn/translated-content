---
title: AudioContext.createBufferSource()
slug: Web/API/BaseAudioContext/createBufferSource
translation_of: Web/API/BaseAudioContext/createBufferSource
original_slug: Web/API/AudioContext/createBufferSource
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("AudioContext") }}インターフェースの<code>createBufferSource()</code>メソッドは、{{ domxref("AudioBuffer") }}オブジェクトに書き込まれた音声データを再生する{{ domxref("AudioBufferSourceNode") }}を生成します。{{ domxref("AudioBuffer") }}は{{domxref("AudioContext.createBuffer")}}を使った場合や、{{domxref("AudioContext.decodeAudioData")}}でオーディオトラックをデコードしたときに生成されます。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var source = audioCtx.createBufferSource();</pre>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("AudioBufferSourceNode")}}</p>

<h2 id="例">例</h2>

<p>この例では、2秒間のバッファを生成し、ホワイトノイズを書き込み、{{ domxref("AudioBufferSourceNode") }}で再生します。コメントは何をしているかを簡単に説明しています。</p>

<div class="note">
<p><strong>注:</strong> <a href="http://mdn.github.io/audio-buffer/">コードの実行</a>と<a href="https://github.com/mdn/audio-buffer">ソースの閲覧</a>もできます。</p>
</div>

<pre class="brush: js;highlight[31]">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var button = document.querySelector('button');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

// ステレオ
var channels = 2;
// AudioContextのサンプルレートで2秒間の空のステレオバッファを生成する
var frameCount = audioCtx.sampleRate * 2.0;

var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = function() {
  // バッファにホワイトノイズを書き込む;
  // 単なる-1.0から1.0の間の乱数の値である
  for (var channel = 0; channel &lt; channels; channel++) {
   // 実際のデータの配列を得る
   var nowBuffering = myArrayBuffer.getChannelData(channel);
   for (var i = 0; i &lt; frameCount; i++) {
     // Math.random()は[0; 1.0]である
     // 音声は[-1.0; 1.0]である必要がある
     nowBuffering[i] = Math.random() * 2 - 1;
   }
  }

  // AudioBufferSourceNodeを得る
  // これはAudioBufferを再生するときに使うAudioNodeである
  var source = audioCtx.createBufferSource();
  // AudioBufferSourceNodeにバッファを設定する
  source.buffer = myArrayBuffer;
  // AudioBufferSourceNodeを出力先に接続すると音声が聞こえるようになる
  source.connect(audioCtx.destination);
  // 音源の再生を始める
  source.start();
}</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createBufferSource-AudioBufferSourceNode', 'createBufferSource()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.BaseAudioContext.createBufferSource")}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
