---
title: AudioContext.createPeriodicWave()
slug: Web/API/BaseAudioContext/createPeriodicWave
translation_of: Web/API/BaseAudioContext/createPeriodicWave
original_slug: Web/API/AudioContext/createPeriodicWave
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("AudioContext") }}インターフェースの<code>createPeriodicWave()</code>メソッドは、周期的な波形を定義するために使われる{{domxref("PeriodicWave")}}を生成します。これは{{ domxref("OscillatorNode") }}の出力を決めるために使われます。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var wave = audioCtx.createPeriodicWave(real, imag);</pre>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("PeriodicWave")}}</p>

<h3 id="引数">引数</h3>

<dl>
 <dt>real</dt>
 <dd>余弦項の配列 (伝統的なA項)</dd>
 <dt>imag</dt>
 <dd>正弦項の配列 (伝統的なB項)</dd>
</dl>

<h2 id="例">例</h2>

<p>The following example illustrates simple usage of <code>createPeriodicWave()</code>, to create a {{domxref("PeriodicWave")}} object containing a simple sine wave.</p>

<pre class="brush: js;highlight[11]">var real = new Float32Array(2);
var imag = new Float32Array(2);
var ac = new AudioContext();
var osc = ac.createOscillator();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

var wave = ac.createPeriodicWave(real, imag);

osc.setPeriodicWave(wave);

osc.connect(ac.destination);

osc.start();
osc.stop(2);</pre>

<p>This works because a sound that contains only a fundamental tone is by definition a sine wave.<br>
 <br>
 Here, we create a <code>PeriodicWave</code> with two values. The first value is the DC offset, which is the value at which the oscillator starts. 0 is good here, because we want to start the curve at the middle of the [-1.0; 1.0] range.</p>

<p>The second and subsequent values are sine and cosine components. You can think of it as the result of a Fourier transform, where you get frequency domain values from time domain value. Here, with <code>createPeriodicWave()</code>, you specify the frequencies, and the browser performs a an inverse Fourier transform to get a time domain buffer for the frequency of the oscillator. Here, we only set one component at full volume (1.0) on the fundamental tone, so we get a sine wave.</p>

<p>The coefficients of the Fourier transform should be given in <em>ascending</em> order (i.e. <math><semantics><mrow><mrow><mo>(</mo><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mi>i</mi></msup><mo>,</mo><mrow><mo>(</mo><mrow><mi>c</mi><mo>+</mo><mi>d</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>i</mi></mrow></msup><mo>,</mo><mrow><mo>(</mo><mrow><mi>f</mi><mo>+</mo><mi>g</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mrow><mn>3</mn><mi>i</mi></mrow></msup></mrow><annotation encoding="TeX">\left(a+bi\right)e^{i} , \left(c+di\right)e^{2i} , \left(f+gi\right)e^{3i}   </annotation></semantics></math>etc.) and can be positive or negative.  A simple way of manually obtaining such coefficients (though not the best) is to use a graphing calculator.</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createPeriodicWave-PeriodicWave-Float32Array-real-Float32Array-imag', 'createPeriodicWave')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.BaseAudioContext.createPeriodicWave")}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
