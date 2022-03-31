---
title: AudioContext.createChannelMerger()
slug: Web/API/BaseAudioContext/createChannelMerger
translation_of: Web/API/BaseAudioContext/createChannelMerger
original_slug: Web/API/AudioContext/createChannelMerger
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("AudioContext") }}インターフェースの<code>createChannelMerger()</code>メソッドは、複数のオーディオストリームを1つに混合する{{domxref("ChannelMergerNode")}}を生成します。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var merger = audioCtx.createChannelMerger(numberOfInputs);</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt>numberOfInputs</dt>
 <dd>入力オーディオストリームのチャンネルの数。指定がない場合は6になる。</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("ChannelMergerNode")}}</p>

<h2 id="例">例</h2>

<p>この例ではステレオトラックを分け、左右のチャンネルをそれぞれ別に処理する方法を示しています。これを使うためには、{{domxref("AudioNode.connect(AudioNode)") }}メソッドの2番目と3番目の引数を使い、接続元と接続先のチャンネルの番号を指定する必要があります。</p>

<pre class="brush: js;highlight[7,16,17,24]">var ac = new AudioContext();
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
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createChannelMerger-ChannelMergerNode-unsigned-long-numberOfInputs', 'createChannelMerger()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.BaseAudioContext.createChannelMerger")}}</p>

<h2 id="参照">参照</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
