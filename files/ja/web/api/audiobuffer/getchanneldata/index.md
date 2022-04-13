---
title: AudioBuffer.getChannelData()
slug: Web/API/AudioBuffer/getChannelData
translation_of: Web/API/AudioBuffer/getChannelData
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("AudioBuffer") }}インターフェースの<code>getChannelData()メソッドは、引数channel(0が最初のチャンネル)に結び付けられたPCMデータを</code>{{domxref("Float32Array")}}で返します。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="brush: js;highlight[22]">var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
var nowBuffering = myArrayBuffer.getChannelData(channel);</pre>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("Float32Array")}}</p>

<h2 id="例">例</h2>

<p>次の例は、2秒間のバッファを生成し、ホワイトノイズを書き込み、{{ domxref("AudioBufferSourceNode") }}で再生します。コメントは何をしているかを簡単に説明しています。<a href="http://mdn.github.io/audio-buffer/">コードをすぐに実行する</a>ことや、<a href="https://github.com/mdn/audio-buffer">ソースコードを閲覧する</a>こともできます。</p>

<pre class="brush: js;highlight[21]">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
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

<h2 id="引数">引数</h2>

<dl>
 <dt>channel</dt>
 <dd>channelプロパティはデータを得るチャンネルの番号である。0が最初のチャンネルを表す。<code>channel</code>が{{domxref("AudioBuffer.numberOfChannels")}}以上ならば、<code>INDEX_SIZE_ERR例外が発生する。</code></dd>
</dl>

<h2 id="使用">使用</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioBuffer-getChannelData-Float32Array-unsigned-long-channel', 'getChannelData')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.AudioBuffer.getChannelData")}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
