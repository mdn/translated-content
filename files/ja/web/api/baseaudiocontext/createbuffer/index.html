---
title: AudioContext.createBuffer()
slug: Web/API/BaseAudioContext/createBuffer
translation_of: Web/API/BaseAudioContext/createBuffer
original_slug: Web/API/AudioContext/createBuffer
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>インターフェースの<code>createBuffer()メソッドは、</code>新規の空の{{ domxref("AudioBuffer") }}オブジェクトを生成します。そこにデータを書きこめば、{{ domxref("AudioBufferSourceNode") }}で再生できます。</p>
</div>

<div class="note">
<p><strong>Note</strong>: <code>createBuffer()</code> used to be able to take compressed data and give back decoded samples, but this ability was removed from the spec, because all the decoding was done on the main thread, therefore <code>createBuffer()</code> was blocking other code execution. The asynchronous method <code>decodeAudioData()</code> does the same thing — takes compressed audio, say, an MP3 file, and directly gives you back an {{ domxref("AudioBuffer") }} that you can then set to play via in an {{ domxref("AudioBufferSourceNode") }}. For simple uses like playing an MP3, <code>decodeAudioData()</code> is what you should be using.</p>
</div>

<h2 id="構文">構文</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var buffer = audioCtx.createBuffer(numOfChannels, length, sampleRate);</pre>

<h3 id="引数">引数</h3>

<div class="note">
<p><strong>Note</strong>: For an in-depth explanation of how audio buffers work, and what these parameters mean, read <a href="/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#Audio_buffers.3A_frames.2C_samples_and_channels">Audio buffers: frames, samples and channels</a> from our Basic concepts guide.</p>
</div>

<dl>
 <dt>numOfChannels</dt>
 <dd>integerで現されたバッファのチャンネルの数。実装は少なくとも32チャンネルに対応している</dd>
 <dt>length</dt>
 <dd>integerで表されたバッファのサンプルフレームの数</dd>
 <dt>sampleRate</dt>
 <dd>1秒あたりのサンプルフレームの数。実装は少なくとも22050から96000の範囲に対応している</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("AudioBuffer")}}</p>

<h2 id="例">例</h2>

<p>まずは2つの小さな例で、引数をどのように設定するかを説明します:</p>

<pre class="brush: js">var audioCtx = new AudioContext();
var buffer = audioCtx.createBuffer(2, 22050, 44100);</pre>

<p>このようにすると、ステレオ(2チャンネル)のバッファが生成され、44100Hz(極めて一般的で、多くの通常のサウンドカードはこのレートで動作します)の<code>AudioContext</code>で再生すると、0.5秒間(22050フレーム / 44100Hz )となります。</p>

<pre class="brush: js">var audioCtx = new AudioContext();
var buffer = audioCtx.createBuffer(1, 22050, 22050);</pre>

<p>このようにすると、モノラル(1チャンネル)のバッファが生成され、44100Hzの<code>AudioContext</code>で再生すると、自動的に44100Hzに再サンプリングされ(そして結果として44100フレームとなり)、1秒間(44100フレーム / 44100Hz)となります。</p>

<div class="note">
<p><strong>Note</strong>: audio resampling is very similar to image resizing: say you've got a 16 x 16 image, but you want it to fill a 32x32 area: you resize (resample) it. the result has less quality (it can be blurry or edgy, depending on the resizing algorithm), but it works, and the resized image takes up less space. Resampled audio is exactly the same — you save space, but in practice you will be unable to properly reproduce high frequency content (treble sound).</p>
</div>

<p>次は少し複雑な<code>createBuffer()</code>の例を見てみましょう。2秒間のバッファを生成し、ホワイトノイズを書き込み、{{ domxref("AudioBufferSourceNode") }}で再生します。<a class="external external-icon" href="http://mdn.github.io/audio-buffer/">コードをすぐに実行する</a>ことや、<a class="external external-icon" href="https://github.com/mdn/audio-buffer">ソースコードを閲覧する</a>こともできます。</p>

<pre class="brush: js;highlight[14]">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var button = document.querySelector('button');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

// ステレオ
var channels = 2;
// AudioContextのサンプルレートで2秒間の空のステレオバッファを生成する
var frameCount = audioCtx.sampleRate * 2.0;

var myArrayBuffer = audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate);

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
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createBuffer-AudioBuffer-unsigned-long-numberOfChannels-unsigned-long-length-float-sampleRate', 'createBuffer()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.BaseAudioContext.createBuffer")}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
