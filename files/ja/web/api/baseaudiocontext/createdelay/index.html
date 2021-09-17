---
title: AudioContext.createDelay()
slug: Web/API/BaseAudioContext/createDelay
translation_of: Web/API/BaseAudioContext/createDelay
original_slug: Web/API/AudioContext/createDelay
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("AudioContext") }}インターフェースの<code>createDelay()</code>メソッドは、入力音声信号を一定時間遅らせる{{domxref("DelayNode")}}を生成します。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var synthDelay = audioCtx.createDelay(maxDelayTime);</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt>maxDelayTime</dt>
 <dd>音声信号の最大遅れ時間の秒数。デフォルトは0</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("DelayNode")}}</p>

<h2 id="例">例</h2>

<p>ループする3つの異なる簡単な例を用意しました。<a href="http://chrisdavidmills.github.io/create-delay/">create-delay</a>を見てください。(<a href="https://github.com/chrisdavidmills/create-delay">ソースコードも閲覧</a>できます。)ただPlayボタンを押すと、ループはすぐ始まります。スライダーを右に動かしPlayボタンを押すと、待ち時間が挿入され、少し時間が過ぎるまで再生が始まりません。</p>

<pre class="brush: js;highlight[4,15,16,21,22]">var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var synthDelay = audioCtx.createDelay(5.0);

  ...

var synthSource;

playSynth.onclick = function() {
  synthSource = audioCtx.createBufferSource();
  synthSource.buffer = buffers[2];
  synthSource.loop = true;
  synthSource.start();
  synthSource.connect(synthDelay);
  synthDelay.connect(destination);
  this.setAttribute('disabled', 'disabled');
}

stopSynth.onclick = function() {
  synthSource.disconnect(synthDelay);
  synthDelay.disconnect(destination);
  synthSource.stop();
  playSynth.removeAttribute('disabled');
}

...

var delay1;
rangeSynth.oninput = function() {
delay1 = rangeSynth.value;
synthDelay.delayTime.value = delay1;
}
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createDelay-DelayNode-double-maxDelayTime', 'createDelay()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.BaseAudioContext.createDelay")}}</p>

<h2 id="参照">参照</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
