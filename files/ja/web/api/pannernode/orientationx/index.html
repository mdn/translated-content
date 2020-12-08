---
title: PannerNode.orientationX
slug: Web/API/PannerNode/orientationX
tags:
  - PannerNode
  - Property
  - Reference
  - Web Audio API
  - orientationX
translation_of: Web/API/PannerNode/orientationX
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("PannerNode") }} インターフェイスの <strong><code>orientationX</code></strong> プロパティは、オーディオソースが向いている方向の X (水平) 成分を 3D 直交座標空間で表示します。</p>

<p>完全ベクトルは ({{domxref("PannerNode.positionX", "positionX")}}、{{domxref("PannerNode.positionY", "positionY")}}、{{domxref("PannerNode.positionZ", "positionZ")}}) として与えられたオーディオソースの位置と、({{domxref("PannerNode.orientationX", "orientationX")}}、{{domxref("PannerNode.orientationY", "orientationY")}}、{{domxref("PannerNode.orientationZ", "orientationZ")}}) として与えられたオーディオソースの向き (つまり、オーディオソースが向いている方向) によって定義されます。</p>

<p>サウンドの指向性 ({{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}}、{{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}}、および {{domxref("PannerNode.coneOuterGain", "coneOuterGain")}}) の属性を使用して指定されている) に応じて、サウンドの方向 (orientation) は、再生中のサウンドが知覚される音量を変化させることがあります。音がリスナーの方に向けられている場合は、リスナーから離れたところに向けられている場合よりも大きな音になります。</p>

<p>このプロパティに含まれる {{domxref("AudioParam")}} は読み取り専用ですが、{{domxref("AudioParam.value")}} プロパティに新しい値を代入することで、パラメーターの値を変更できます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <em>orientationX</em> = <em>PannerNode</em>.orientationX;

<em>PannerNode</em>.orientationX.value = <em>newOrientationX</em>;
</pre>

<h3 id="Value" name="Value">Value</h3>

<p>{{domxref("AudioParam")}} の値は、オーディオソースが向いている方向の X 成分であり、3D 直交座標空間での値です。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、{{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} と {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} を組み合わせて {{ domxref("PannerNode") }} の方向パラメーターを変更すると、ボリュームにどのように影響するかを示します。方向ベクトル (orientation vector) がどのように影響するかを視覚化するために、<a href="https://ja.wikipedia.org/wiki/%E5%8F%B3%E6%89%8B%E3%81%AE%E6%B3%95%E5%89%87">右手の法則</a>を使用することができます。</p>

<p><img alt="This chart visualises how the PannerNode orientation vectors affect the direction of the sound cone." src="https://mdn.mozillademos.org/files/16238/pannernode-orientation.png" style="height: 381px; width: 935px;"></p>

<p>まず、方向ベクトルを理解するためのユーティリティ関数を作成することから始めましょう。X 成分と Z 成分は常に互いに 90°であるため、ラジアン単位で同じ量だけオフセットされる正弦関数と余弦関数を使用できます。ただし、これは通常、{{ domxref("PannerNode") }} が 0°回転でリスナーの<strong>左側</strong>を指すことを意味します。`x= cos(0)= 1` および `z = sin(0) = 0` であるためです。角度を -90°オフセットするとより便利です。つまり、{{ domxref("PannerNode") }} は 0°の回転で<strong>リスナーを直接</strong>指します。</p>

<pre class="brush: js notranslate">// このユーティリティは、Y 軸周りの回転量 (つまり「水平面」での回転) を
// 方向ベクトルに変換します
const yRotationToVector = degrees =&gt; {
  // 度をラジアンに変換し、0 でリスナーの方を向くように角度をオフセットします
  const radians = (degrees - 90) * (Math.PI / 180);
  // ここで cosine と sine を使用すると，出力値は常に正規化されます
  // つまり、これらは -1 から 1 の間の範囲です
  const x = Math.cos(radians);
  const z = Math.sin(radians);

  // Y は回転軸なので、Y 成分を 0 にハードコードします。
  return [x, 0, z];
};
</pre>

<p>これで、{{ domxref("AudioContext") }}、オシレーター、および {{ domxref("PannerNode") }} を作成できます。</p>

<pre class="brush: js notranslate">const context = new AudioContext();

const osc = new OscillatorNode(context);
osc.type = 'sawtooth';

const panner = new PannerNode(context);
panner.panningModel = 'HRTF';</pre>

<p>次に、スペーシャルサウンドの<em>コーン</em>を設定し、それが聞こえる範囲を決めます。</p>

<pre class="brush: js notranslate">// この値は、音量が一定となる領域のサイズを決定します
// たとえば coneInnerAngle == 30 のとき、
// サウンドを左右どちらかに 15 度 (30/2) まで回転させても音量は変わりません。
panner.coneInnerAngle = 30;
// この値は、音量が徐々に減衰する領域のサイズを決定します
// たとえば coneOuterAngle == 45 かつ coneInnerAngle == 30 のとき、
// 音を左右どちらかに 15 度 (30/2) から 22.5 度 (45/2) の間で回転させると、
// 徐々に音量が小さくなります。
panner.coneOuterAngle = 45;
// この値は、inner/outer の両方のコーンの外側の音の大きさを決定します
// 0 に設定すると音が出ず、コーンから離れたときにはっきり聞こえます
// 0 はデフォルト値でもあります
panner.coneOuterGain = 0;
// Z位置を大きくして、コーンの効果を確実にします
// 利用しない場合、音はリスナーと同じ位置にあります
panner.positionZ.setValueAtTime(1, context.currentTime);</pre>

<p>{{ domxref("PannerNode") }} を設定したら、Y 軸の回転を更新するスケジュールを設定できます。</p>

<pre class="brush: js notranslate">// 回転がない場合のベクトルを計算する
// これは音がフルボリュームで再生されることを意味します
const [x1, y1, z1] = yRotationToVector(0);
// 無回転ベクトルを直ちにスケジュールする
panner.orientationX.setValueAtTime(x1, context.currentTime);
panner.orientationY.setValueAtTime(y1, context.currentTime);
panner.orientationZ.setValueAtTime(z1, context.currentTime);

// -22.4 度のためのベクトルを計算する
// ここでの coneOuterAngle は 45 であるため、ちょうど音が聞こえるようになります
// これを +/-22.5 に設定すると、しきい値が排他的なので音量は 0 になります。
const [x2, y2, z2] = yRotationToVector(-22.4);
panner.orientationX.setValueAtTime(x2, context.currentTime + 2);
panner.orientationY.setValueAtTime(y2, context.currentTime + 2);
panner.orientationZ.setValueAtTime(z2, context.currentTime + 2);</pre>

<p>最後に、すべてのノードを接続して、オシレーターを起動しましょう！</p>

<pre class="brush: js notranslate">osc.connect(panner)
   .connect(context.destination);

osc.start(0);
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#dom-pannernode-orientationx', 'orientationX')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("api.PannerNode.orientationX")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Web Audio API の使用</a></li>
 <li><a href="/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics">Web Audio spatialisation basics</a></li>
 <li>{{domxref("PannerNode")}}</li>
</ul>
