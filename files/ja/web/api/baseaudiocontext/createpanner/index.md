---
title: AudioContext.createPanner()
slug: Web/API/BaseAudioContext/createPanner
translation_of: Web/API/BaseAudioContext/createPanner
original_slug: Web/API/AudioContext/createPanner
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("AudioContext") }} の <code>createPanner()</code> を利用すると、新しい {{domxref("PannerNode")}} を作成できます。これは空間音響を実現するために利用されます。</p>

<p>作成された PannerNode は、音声の聴取者の位置と向きから空間的な再生を行います。聴取者の位置と向きは、 {{domxref("AudioListener") }} オブジェクトとして表現され、{{domxref("AudioContext.listener") }} で参照できます。</p>
</div>

<h2 id="Syntax" name="Syntax">記法</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var panner = audioCtx.createPanner();</pre>

<h3 id="Returns" name="Returns">返り値</h3>

<p>{{domxref("PannerNode")}} を返します。</p>

<h2 id="Example" name="Example">利用例</h2>

<p>以下の例では、<code>createPanner()</code> メソッドの利用方法と、 {{domxref("AudioListener")}} と{{domxref("PannerNode")}} による空間音響のコントロール方法について解説します。一般的には、聴取者と音源の 3 次元空間上での位置を決め、アプリケーションの動きに合わせてそれらを更新することになります。これを利用することで、キャラクターが世界の中を動き回るようなゲームで、近づくと聞こえ、遠ざかると聞こえなくなるステレオを実現できます。 以下の例では <code>moveRight()</code> や <code>moveLeft()、</code><code>PositionPanner()</code> などを利用して、位置をコントロールしています。</p>

<p>完全な実装例は <a href="http://mdn.github.io/panner-node/">panner-node example</a> (<a href="https://github.com/mdn/panner-node">ソースコード</a>) を確認してください。このデモでは 2.5 次元上の「メタルの部屋」上で、曲を再生するラジカセの位置を変更させることで変化する音声を体験できます。</p>

<p>付記：以下の例では比較的新しい属性を利用するために、ブラウザの機能を調べています。例えば位置を設定する {{domxref("AudioListener.forwardX")}}) などです。これらが利用できる場合は利用し、そうでない場合は{{domxref("AudioListener.setOrientation()")}}) のような古いメソッドを利用しています。</p>

<pre class="brush: js">// set up listener and panner position information
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var xPos = Math.floor(WIDTH/2);
var yPos = Math.floor(HEIGHT/2);
var zPos = 295;

// define other variables

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var panner = audioCtx.createPanner();
panner.panningModel = 'HRTF';
panner.distanceModel = 'inverse';
panner.refDistance = 1;
panner.maxDistance = 10000;
panner.rolloffFactor = 1;
panner.coneInnerAngle = 360;
panner.coneOuterAngle = 0;
panner.coneOuterGain = 0;

if(panner.orientationX) {
  panner.orientationX.value = 1;
  panner.orientationY.value = 0;
  panner.orientationZ.value = 0;
} else {
  panner.setOrientation(1,0,0);
}

var listener = audioCtx.listener;

if(listener.forwardX) {
  listener.forwardX.value = 0;
  listener.forwardY.value = 0;
  listener.forwardZ.value = -1;
  listener.upX.value = 0;
  listener.upY.value = 1;
  listener.upZ.value = 0;
} else {
  listener.setOrientation(0,0,-1,0,1,0);
}

var source;

var play = document.querySelector('.play');
var stop = document.querySelector('.stop');

var boomBox = document.querySelector('.boom-box');

var listenerData = document.querySelector('.listener-data');
var pannerData = document.querySelector('.panner-data');

leftBound = (-xPos) + 50;
rightBound = xPos - 50;

xIterator = WIDTH/150;

// listener will always be in the same place for this demo

if(listener.positionX) {
  listener.positionX.value = xPos;
  listener.positionY.value = yPos;
  listener.positionZ.value = 300;
} else {
  listener.setPosition(xPos,yPos,300);
}

listenerData.innerHTML = 'Listener data: X ' + xPos + ' Y ' + yPos + ' Z ' + 300;

// panner will move as the boombox graphic moves around on the screen
function positionPanner() {
  if(panner.positionX) {
    panner.positionX.value = xPos;
    panner.positionY.value = yPos;
    panner.positionZ.value = zPos;
  } else {
    panner.setPosition(xPos,yPos,zPos);
  }
  pannerData.innerHTML = 'Panner data: X ' + xPos + ' Y ' + yPos + ' Z ' + zPos;
}</pre>

<div class="note">
<p>listener と panner に設定された位置が正しく機能するためには、それらがスクリーン上の位置を正しく反映している必要があります。そのためには少し面倒な計算が必要となりますが、すこしやれば慣れる類のものです。</p>
</div>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createPanner-PannerNode', 'createPanner()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー互換性">ブラウザー互換性</h2>

<p>{{Compat("api.BaseAudioContext.createPanner")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
