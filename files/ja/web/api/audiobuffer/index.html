---
title: AudioBuffer
slug: Web/API/AudioBuffer
translation_of: Web/API/AudioBuffer
---
<p>{{APIRef("Web Audio API")}}</p>

<div>
<p><code>AudioBuffer</code>インターフェースはメモリ上の短い音声を表すもので、それは{{ domxref("AudioContext.decodeAudioData()") }}メソッドを使ってオーディオファイルから、または{{ domxref("AudioContext.createBuffer()") }}を使って生のデータから生成されます。AudioBufferに入れた後は、その音声は{{ domxref("AudioBufferSourceNode") }}に渡せば再生できます。</p>
</div>

<p>これらのオブジェクトは短い、一般的には45秒未満の、断片的な音声を保持するために設計されています。それよりも長い音声は、{{domxref("MediaElementAudioSourceNode")}}のオブジェクトが適しています。バッファには次の形式でデータが書き込まれます: ノンインターリーブ IEEE754 32bit リニア PCMで、-1から+1の範囲で正規化されています。つまり、32bit 浮動小数点バッファで、それぞれのサンプルは-1.0から1.0の間です。AudioBufferに複数のチャンネルがある場合は、それぞれ分かれたバッファに格納されます。</p>

<h2 id="プロパティ">プロパティ</h2>

<dl>
 <dt>{{domxref("AudioBuffer.sampleRate")}} {{readonlyInline}}</dt>
 <dd>バッファに格納されたPCMデータの1秒あたりのサンプル数をfloatで返す</dd>
 <dt>{{domxref("AudioBuffer.length")}} {{readonlyInline}}</dt>
 <dd>バッファに格納されたPCMデータの長さをintegerで返す</dd>
 <dt>{{domxref("AudioBuffer.duration")}} {{readonlyInline}}</dt>
 <dd>バッファに格納されたPCMデータの時間(秒)をdoubleで返す</dd>
 <dt>{{domxref("AudioBuffer.numberOfChannels")}} {{readonlyInline}}</dt>
 <dd>バッファに格納されたPCMデータのチャンネルの数をintegerで返す</dd>
</dl>

<h2 id="メソッド">メソッド</h2>

<dl>
 <dt>{{domxref("AudioBuffer.getChannelData()")}}</dt>
 <dd>引数channel(0が最初のチャンネルを表す)のチャンネルに結び付けられたPCMデータを{{jsxref("Float32Array")}}で返す</dd>
 <dt>{{domxref("AudioBuffer.copyFromChannel()")}}</dt>
 <dd>サンプルを、AudioBufferの指定のチャンネルから、コピー先の配列へコピーする</dd>
 <dt>{{domxref("AudioBuffer.copyToChannel()")}}</dt>
 <dd>サンプルを、コピー元の配列から、AudioBufferの指定のチャンネルへコピーする</dd>
</dl>

<h2 id="例">例</h2>

<p>次の簡単な例では、AudioBufferの生成し、バッファにランダムなホワイトノイズを書き込む方法を示しています。<a href="https://github.com/mdn/audio-buffer">audio-buffer demo</a> リポジトリには完全なソースコードと、<a href="http://mdn.github.io/audio-buffer/">すぐに実行できるバージョン</a>があります。</p>

<pre class="brush: js;highlight:[7,14,27]">// ステレオ
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
   <td>{{SpecName('Web Audio API', '#the-audiobuffer-interface', 'AudioBuffer')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.AudioBuffer")}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
