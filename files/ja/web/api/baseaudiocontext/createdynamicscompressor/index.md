---
title: AudioContext.createDynamicsCompressor()
slug: Web/API/BaseAudioContext/createDynamicsCompressor
translation_of: Web/API/BaseAudioContext/createDynamicsCompressor
original_slug: Web/API/AudioContext/createDynamicsCompressor
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("AudioContext") }}インターフェースの<code>createDynamicsCompressor()</code>メソッドは、音声信号にコンプレッサーを適用する{{domxref("DynamicsCompressorNode")}}を生成します。</p>
</div>

<p>コンプレッサーは、音声信号の最大部分の音量を小さくし、最小部分の音量を大きくします。一般的に、より大きく、豊かで、高密度な音になります。これはゲームや音楽アプリケーションでたくさんの別々の音を同時に再生する場合に特に重要です。このような場合、全体の音量の操作したり、出力音声のクリッピング(ひずみ)を避けたいはずです。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var compressor = audioCtx.createDynamicsCompressor();</pre>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("DynamicsCompressorNode")}}</p>

<h2 id="例">例</h2>

<p>音声トラックにコンプレッサーを追加するために<code>createDynamicsCompressor()</code>を使う簡単なデモコードです。より完全なサンプルは、<a href="http://mdn.github.io/compressor-example/">basic Compressor example</a> (<a href="https://github.com/mdn/compressor-example">ソースコードの閲覧</a>)を参照してください。</p>

<pre class="brush: js;highlight[6,18,19]">// MediaElementAudioSourceNodeを生成する
// そこにHTMLMediaElementを入れる
var source = audioCtx.createMediaElementSource(myAudio);

// コンプレッサーノードを生成する
var compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.value = -50;
compressor.knee.value = 40;
compressor.ratio.value = 12;
compressor.reduction.value = -20;
compressor.attack.value = 0;
compressor.release.value = 0.25;

// AudioBufferSourceNodeを行き先(destination)につなげる
source.connect(audioCtx.destination);

button.onclick = function() {
  var active = button.getAttribute('data-active');
  if(active == 'false') {
    button.setAttribute('data-active', 'true');
    button.innerHTML = 'Remove compression';

    source.disconnect(audioCtx.destination);
    source.connect(compressor);
    compressor.connect(audioCtx.destination);
  } else if(active == 'true') {
    button.setAttribute('data-active', 'false');
    button.innerHTML = 'Add compression';

    source.disconnect(compressor);
    compressor.disconnect(audioCtx.destination);
    source.connect(audioCtx.destination);
  }
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
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createDynamicsCompressor-DynamicsCompressorNode', 'createDynamicsCompressor()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.BaseAudioContext.createDynamicsCompressor")}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
