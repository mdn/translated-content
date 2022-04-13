---
title: AudioBuffer.numberOfChannels
slug: Web/API/AudioBuffer/numberOfChannels
translation_of: Web/API/AudioBuffer/numberOfChannels
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>インターフェースの<code>numberOfChannelsプロパティは、</code>バッファに格納されたPCMデータのチャンネルの数をintegerで返します。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="brush: js;highlight[22]">var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
myArrayBuffer.numberOfChannels;</pre>

<h3 id="値">値</h3>

<p>integer</p>

<h2 id="例">例</h2>

<pre class="brush: js;highlight[22]">// ステレオ
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

  console.log(myArrayBuffer.numberOfChannels);
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
   <td>{{SpecName('Web Audio API', '#widl-AudioBuffer-numberOfChannels', 'numberOfChannels')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.AudioBuffer.numberOfChannels")}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
