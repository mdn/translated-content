---
title: AudioListener
slug: Web/API/AudioListener
translation_of: Web/API/AudioListener
---
<p>{{ APIRef("Web Audio API") }}</p>

<p><code>AudioListener</code>インターフェースは特定の人物が聞いている音場の位置と方向を表します、そしてそれは<a href="/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialisation_basics">audio spatialization</a>に使用されます。すべての{{domxref("PannerNode")}}は、{{domxref("BaseAudioContext.listener")}}属性に格納されている<code>AudioListener</code>に関連して空間化されます。</p>

<p>コンテキストごとにリスナーは1つだけであり、{{domxref("AudioNode")}}ではないことに注意することが重要です。</p>

<p><img alt="We see the position, up and front vectors of an AudioListener, with the up and front vectors at 90° from the other." src="https://mdn.mozillademos.org/files/14311/WebAudioListenerReduced.png" style="display: block; margin: 0 auto;"></p>

<h2 id="Properties">Properties</h2>

<p>親である{{domxref('AudioNode')}}の属性を継承します。</p>

<div class="note">
<p>position、forward、およびupの値は、さまざまな構文を使用して設定および取得されます。 値の取得は、例えば<code>AudioListener.positionX</code>にアクセスすることによって行われ、同じプロパティの設定は<code>AudioListener.positionX.value</code>によって行われます。 これらの値が読み取り専用とマークされていないのはこのためです。つまり、仕様のIDLにはこれらの値が表示されます。</p>
</div>

<dl>
 <dt>{{domxref("AudioListener.positionX")}}</dt>
 <dd>右直交座標系におけるリスナーの水平位置を表します。 デフォルトは0です。</dd>
 <dt>{{domxref("AudioListener.positionY")}}</dt>
 <dd>右直交座標系におけるリスナーの垂直位置を表します。 デフォルトは0です。</dd>
 <dt>{{domxref("AudioListener.positionZ")}}</dt>
 <dd>右直交座標系におけるリスナーの縦方向（前後）の位置を表します。 デフォルトは0です。</dd>
 <dt>{{domxref("AudioListener.forwardX")}}</dt>
 <dd>ポジション(<code>positionX</code>, <code>positionY</code>,および <code>positionZ</code>)の値と同じ直交座標系におけるリスナーの前方向の水平位置を表します。 順方向と上方向の値は互いに線形的に独立しています。 デフォルトは0です。</dd>
 <dt>{{domxref("AudioListener.forwardY")}}</dt>
 <dd>ポジション(<code>positionX</code>, <code>positionY</code>,および <code>positionZ</code>)の値と同じ直交座標系におけるリスナーの前方方向の垂直位置を表します。 順方向と上方向の値は互いに線形的に独立しています。 デフォルトは0です。</dd>
 <dt>{{domxref("AudioListener.forwardZ")}}</dt>
 <dd>ポジション(<code>positionX</code>, <code>positionY</code>,および <code>positionZ</code>)の値と同じ直交座標系でのリスナーの前方向の前後（前後）の位置を表します。 順方向と上方向の値は互いに線形的に独立しています。 デフォルトは-1です。</dd>
 <dt>{{domxref("AudioListener.upX")}}</dt>
 <dd>ポジション(<code>positionX</code>, <code>positionY</code>,および <code>positionZ</code>)と同じ直交座標系でのリスナーの前方向の前後（前後）の位置を表します。 順方向と上方向の値は互いに線形的に独立しています。 デフォルトは-1です。</dd>
 <dt>{{domxref("AudioListener.upY")}}</dt>
 <dd>ポジション(<code>positionX</code>, <code>positionY</code>,および <code>positionZ</code>)の値と同じ直交座標系における、リスナーの頭のてっぺんの垂直位置を表します。 順方向と上方向の値は互いに線形的に独立しています。 デフォルトは1です。</dd>
 <dt>{{domxref("AudioListener.upZ")}}</dt>
 <dd>ポジション(<code>positionX</code>, <code>positionY</code>,および <code>positionZ</code>)の値と同じ直交座標系における、リスナーの頭の上端の縦方向（前後）の位置を表します。 順方向と上方向の値は互いに線形的に独立しています。 デフォルトは0です。</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p>親である{{domxref('AudioNode')}}のメソッドを継承します。</p>

<h2 id="Deprecated_features">Deprecated features</h2>

<dl>
 <dt>{{domxref("AudioListener.dopplerFactor")}} {{obsolete_inline}}</dt>
 <dd><a href="http://en.wikipedia.org/wiki/Doppler_effect">doppler effect</a>(ドップラー効果)をレンダリングするときに使用するピッチシフトの量を表すdouble値です。</dd>
 <dt>{{domxref("AudioListener.speedOfSound")}} {{obsolete_inline}}</dt>
 <dd>音速をメートル単位で表したdouble値です。</dd>
 <dt>{{domxref("AudioListener.setOrientation()")}}</dt>
 <dd>リスナーの向きを設定します。</dd>
 <dt>{{domxref("AudioListener.setPosition()")}}</dt>
 <dd>リスナーの位置を設定します。</dd>
</dl>

<p>この仕様の以前のバージョンでは、<code>dopplerFactor</code>および<code>speedOfSound</code>プロパティと<code>setPosition()</code>メソッドを使用して、ダウンストリームに接続された {{domxref("AudioBufferSourceNode")}} に適用されるドップラー効果を制御できました — これらは {{domxref("PannerNode")}} と {{domxref("AudioListener")}} の相対速度に応じて上下にピッチが変わります。 これらの機能には多くの問題がありました。</p>

<ul>
 <li>Only {{domxref("AudioBufferSourceNode")}}s were pitched up or down, not other source nodes.</li>
 <li>他のソースノードではなく、{{domxref("AudioBufferSourceNode")}}だけが上下にピッチされました。</li>
 <li>{{domxref("AudioBufferSourceNode")}}が複数の{{domxref("PannerNode")}}に接続されている場合に採用する動作は不明でした。</li>
 <li>パンナーとリスナーのベロシティは{{domxref("AudioParam")}}ではなかったため、ピッチの変更はスムーズに適用できず、オーディオグリッチが発生しました。</li>
</ul>

<p>これらの問題のため、これらのプロパティとメソッドは削除されました。</p>

<p><code>setOrientation()</code> および<code>setPosition()</code> メソッドは、それらのプロパティ値を同等に設定することで置き換えられました。 例えば、<code>setPosition(x, y, z)</code>は、それぞれ<code>positionX.value</code>, <code>positionY.value</code>および <code>positionZ.value</code>を設定することによって実現できます。</p>

<dl>
</dl>

<h2 id="Example">Example</h2>

<p>{{page("/en-US/docs/Web/API/AudioContext.createPanner","Example")}}</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#audiolistener', 'AudioListener')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>


<p>{{Compat("api.AudioListener")}}</p>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
