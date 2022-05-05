---
title: AudioContext.createChannelSplitter()
slug: Web/API/BaseAudioContext/createChannelSplitter
translation_of: Web/API/BaseAudioContext/createChannelSplitter
original_slug: Web/API/AudioContext/createChannelSplitter
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>インターフェースの<code>createChannelSplitter()</code>メソッドは、オーディオストリームを個別に処理するためにチャンネルを分離する{{domxref("ChannelSplitterNode")}}を生成します。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var splitter = audioCtx.createChannelSplitter(numberOfOutputs);</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt>numberOfOutputs</dt>
 <dd>入力オーディオストリームを分ける数。引数の指定がなければ6。</dd>
</dl>

<h3 id="Returns">Returns</h3>

<p>{{domxref("ChannelSplitterNode")}}</p>

<h2 id="例">例</h2>

<p>この例ではステレオトラックを分け、左右のチャンネルをそれぞれ別に処理する方法を示しています。これを使うためには、{{domxref("AudioNode.connect(AudioNode)") }}メソッドの2番目と3番目の引数を使い、接続元と接続先のチャンネルの番号を指定する必要があります。</p>

<pre class="brush: js;highlight[5,12,17]">var ac = new AudioContext();
ac.decodeAudioData(someStereoBuffer, function(data) {
 var source = ac.createBufferSource();
 source.buffer = data;
 var splitter = ac.createChannelSplitter(2);
 source.connect(splitter);
 var merger = ac.createChannelMerger(2);

 // 左チャンネルのボリュームのみ小さくする
 var gain = ac.createGain();
 gain.value = 0.5;
 splitter.connect(gain, 0);

 // splitterをmergerの2番目の入力にして戻す
 // ここではチャンネルを入れ替えることで、ステレオ音声の左右を逆にしている
 gain.connect(merger, 0, 1);
 splitter.connect(merger, 1, 0);

 var dest = ac.createMediaStreamDestination();

 // ChannelMergerNodeを使ったのでステレオのMediaStreamとなった
 // webオーディオグラフのWebRTCやMediaRecorderなどに渡す
 merger.connect(dest);
});</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createChannelSplitter-ChannelSplitterNode-unsigned-long-numberOfOutputs', 'createChannelSplitter()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.BaseAudioContext.createChannelSplitter")}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
