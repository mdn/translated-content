---
title: AudioContext.createStereoPanner()
slug: Web/API/BaseAudioContext/createStereoPanner
translation_of: Web/API/BaseAudioContext/createStereoPanner
original_slug: Web/API/AudioContext/createStereoPanner
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("AudioContext") }}インターフェースの<code>createStereoPanner()</code>メソッドは、音源にステレオパンニングを適用する{{ domxref("StereoPannerNode") }}を生成します。入力されたオーディオストリームは、低コストな<a class="external external-icon" href="http://webaudio.github.io/web-audio-api/#equal-power">equal-power</a>パンニングアルゴリズムで位置が決められます。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var panNode = audioCtx.createStereoPanner();</pre>

<h3 id="Description" name="Description">戻り値</h3>

<p>{{domxref("StereoPannerNode")}}</p>

<h2 id="Example" name="Example">例</h2>

<p>この<a href="http://mdn.github.io/stereo-panner-node/">StereoPannerNodeサンプル</a>(<a href="https://github.com/mdn/stereo-panner-node">ソースコード</a>)のHTMLには、{{htmlelement("audio")}}要素と、パン値を増減させるスライダー{{domxref("input")}}しかありません。JavaScpriptでは、{{domxref("MediaElementAudioSourceNode")}}と{{domxref("StereoPannerNode")}}を生成し、この2つを<code>connect()</code>メソッドで接続しています。そして、スライダーを動かすと、<code>oninput</code>イベントハンドラで{{domxref("StereoPannerNode.pan")}}パラメータの値を変更し、ディスプレイのパン値を更新しています。</p>

<p>スライダーを左から右に動かすと、音楽のスピーカーからの出力が左から右にパンされます。</p>

<pre class="brush: js">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector('audio');

var panControl = document.querySelector('.panning-control');
var panValue = document.querySelector('.panning-value');

pre.innerHTML = myScript.innerHTML;

// MediaElementAudioSourceNodeを生成し、そこにHTMLMediaElementを入れる
var source = audioCtx.createMediaElementSource(myAudio);

// ステレオパンナーを生成する
var panNode = audioCtx.createStereoPanner();

// イベントハンドラ関数で、スライダーが動いたとき左右のパンの値を左右する

panControl.oninput = function() {
  panNode.pan.value = panControl.value;
  panValue.innerHTML = panControl.value;
}

// AudioBufferSourceNodeをpanNodeに接続し、panNodeを行き先(destination)に接続する
// これでこのコントロールで音楽をパンを調整することができる
source.connect(panNode);
panNode.connect(audioCtx.destination);</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createStereoPanner-StereoPannerNode', 'createStereoPanner()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.BaseAudioContext.createStereoPanner")}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
