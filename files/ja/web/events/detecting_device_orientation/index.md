---
title: デバイスの方向の検出
slug: Web/Events/Detecting_device_orientation
tags:
  - API
  - Device Orientation
  - Firefox OS
  - Intermediate
  - Mobile
  - Motion
  - Orientation
  - Reference
  - WebAPI
translation_of: Web/Events/Detecting_device_orientation
original_slug: Web/Events/Detecting_device_orientation
---
<div>{{SeeCompatTable}}</div>

<p>Web を利用可能なデバイスは、自身の<strong>方向</strong>を特定できるようになってきました。つまりデバイスは、重力との関係による自身の向きの変化を示すデータを報告できます。特に携帯電話のようなハンドヘルドデバイスは、表示内容が直立し続けるよう自動的に回転させるためにこの情報を使用でき、画面の幅が高さより大きくなるようにデバイスを回転させたときは、Web コンテンツをワイドスクリーン表示にします。</p>

<p>方向の情報を制御する JavaScript イベントが 2 つあります。ひとつは {{domxref("DeviceOrientationEvent")}} であり、加速度センサーがデバイスの方向の変化を検出したときに発生します。Orientation イベントが報告するデータを受け取って処理することで、ユーザがデバイスを動かすことによる方向や高さの変化に対してインタラクティブに応答できるようになります。</p>

<p>もうひとつのイベントは {{domxref("DeviceMotionEvent")}} であり、加速度が変化したときに発生します。こちらは方向ではなく加速度の変化を監視することが、{{domxref("DeviceOrientationEvent")}} との違いです。一般的に {{domxref("DeviceMotionEvent")}} を検出できるセンサーには、可動部があるストレージ装置を保護するためラップトップパソコンに内蔵するものも含みます。{{domxref("DeviceOrientationEvent")}} は、モバイルデバイスでとても一般的です。</p>

<h2 id="Processing_orientation_events" name="Processing_orientation_events">orientation イベントを処理する</h2>

<p>方向の変化を受け取り始めるには、{{event("deviceorientation")}} イベントをリッスンします:</p>

<div class="notecard note">
<h4>注記</h4>
<p><a href="https://github.com/wagerfield/parallax">parallax</a> は、モバイルデバイスの加速度センサーやジャイロスコープのデータを正規化するためのポリフィルです。これは、デバイスの方向のサポート状況の違いを克服するのに役立ちます。</p>
</div>

<pre class="brush: js">window.addEventListener("deviceorientation", handleOrientation, true);
</pre>

<p>イベントリスナ (この例では handleOrientation() という名前の JavaScript 関数) を登録すると、リスナ関数は最新の方向データとともに、周期的に呼び出されます。</p>

<p>Orientation イベントは 4 つの値を持ちます:</p>

<ul>
 <li>{{domxref("DeviceOrientationEvent.absolute")}}</li>
 <li>{{domxref("DeviceOrientationEvent.alpha")}}</li>
 <li>{{domxref("DeviceOrientationEvent.beta")}}</li>
 <li>{{domxref("DeviceOrientationEvent.gamma")}}</li>
</ul>

<p>イベントハンドラ関数は以下のようなものです:</p>

<pre class="brush: js">function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  // 新たな方向データに基づいて処理を行う
}
</pre>

<h3 id="Orientation_values_explained" name="Orientation_values_explained">方向として示される値</h3>

<p>それぞれの軸で報告される値は、標準座標系の軸を中心にした回転量を表します。これらは<a href="/ja/docs/Web/Events/Orientation_and_motion_data_explained">方向および動きとして示されるデータ</a>の記事で詳しく説明しており、ここでは概要を記載します。</p>

<ul>
 <li>{{domxref("DeviceOrientationEvent.alpha")}} の値は z 軸を中心にしたデバイスの動きを表し、0 から 360 の範囲による度数で表されます。</li>
 <li>{{domxref("DeviceOrientationEvent.beta")}} の値は x 軸を中心にしたデバイスの動きを表し、-180 から 180 の範囲の値による度数で表されます。これはデバイスの前後の動きです。</li>
 <li>{{domxref("DeviceOrientationEvent.gamma")}} の値は y 軸を中心にしたデバイスの動きを表し、-90 から 90 の範囲の値による度数で表されます。これはデバイスの左右の動きです。</li>
</ul>

<h3 id="Orientation_example" name="Orientation_example">例</h3>

<p>このサンプルは方向を検出可能なデバイス上で、{{event("deviceorientation")}} イベントをサポートするブラウザを実行する場合に動作します。</p>

<p>庭にボールがあると考えます:</p>

<pre class="brush: html">&lt;div class="garden"&gt;
  &lt;div class="ball"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;pre class="output"&gt;&lt;/pre&gt;
</pre>

<p>庭の幅は 200 ピクセルであり (小さな庭です)、ボールは中心にあります:</p>

<pre class="brush: css">.garden {
  position: relative;
  width : 200px;
  height: 200px;
  border: 5px solid #CCC;
  border-radius: 10px;
}

.ball {
  position: absolute;
  top   : 90px;
  left  : 90px;
  width : 20px;
  height: 20px;
  background: green;
  border-radius: 100%;
}
</pre>

<p>デバイスを動かすと、その動きに応じてボールが移動します:</p>

<pre class="brush: js">var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  var x = event.beta;  // -180 から 180 の範囲で角度を示す
  var y = event.gamma; // -90 から 90 の範囲で角度を示す

  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";

  // デバイスをひっくり返したくはないため、
  // x の値を -90 から 90 の範囲に制限する
  if (x &gt;  90) { x =  90};
  if (x &lt; -90) { x = -90};

  // 計算を容易にするため、x および y の値の範囲を
  // 0 から 180 に変換する
  x += 90;
  y += 90;

  // 10 は、ボールのサイズの半分である。
  // これにより、配置場所をボールの中心に合わせる
  ball.style.top  = (maxX*x/180 - 10) + "px";
  ball.style.left = (maxY*y/180 - 10) + "px";
}

window.addEventListener('deviceorientation', handleOrientation);
</pre>

<p>結果を以下に示します:</p>

<div>{{EmbedLiveSample('Orientation_example', '230', '260')}}</div>

<div class="warning">
<p><strong>警告:</strong> Chrome と Firefox では角度の扱い方が異なり、一部の軸の向きが逆になっています。</p>
</div>

<h2 id="Processing_motion_events" name="Processing_motion_events">motion イベントを処理する</h2>

<p>motion イベントは orientation イベントと同じ方法で扱えますが、イベント名は {{event("devicemotion")}} になります。</p>

<pre class="brush: js">window.addEventListener("devicemotion", <em>handleMotion</em>, true);</pre>

<p>実際どのように変化したかの情報は、<em>HandleMotion</em> 関数のパラメータとして渡す {{domxref("DeviceMotionEvent")}} オブジェクトが提供します。</p>

<p>motion イベントは 4 つのプロパティを持ちます:</p>

<ul>
 <li>{{domxref("DeviceMotionEvent.acceleration")}}</li>
 <li>{{domxref("DeviceMotionEvent.accelerationIncludingGravity")}}</li>
 <li>{{domxref("DeviceMotionEvent.rotationRate")}}</li>
 <li>{{domxref("DeviceMotionEvent.interval")}}</li>
</ul>

<h3 id="Motion_values_explained" name="Motion_values_explained">動きとして示される値</h3>

<p>{{domxref("DeviceMotionEvent")}} オブジェクトは Web 開発者に、デバイスの位置や方向が変化した速度の情報を提供します。変化量は 3 つの軸 (詳しくは<a href="/ja/docs/Web/Events/Orientation_and_motion_data_explained">方向および動きとして示されるデータ</a>をご覧ください) に沿って表します。</p>

<p>{{domxref("DeviceMotionEvent.acceleration","acceleration")}} および {{domxref("DeviceMotionEvent.accelerationIncludingGravity","accelerationIncludingGravity")}} で対応する軸は以下のとおりです:</p>

<ul>
 <li><code>x</code>: 西から東へ向かう軸を表します。</li>
 <li><code>y</code>: 南から北へ向かう軸を表します。</li>
 <li><code>z</code>: 地面から直立する軸を表します。</li>
</ul>

<p>{{domxref("DeviceMotionEvent.rotationRate","rotationRate")}} では状況が若干異なります。こちらの情報はそれぞれ以下のように対応します:</p>

<ul>
 <li><code>alpha</code>: スクリーン (デスクトップ環境ではキーボード) から直立する軸を表します。</li>
 <li><code>beta</code>: スクリーンの面 (デスクトップ環境ではキーボード) の左から右へ向かう軸に沿った回転量を表します。</li>
 <li><code>gamma</code>: スクリーンの面 (デスクトップ環境ではキーボード) の下から上へ向かう軸に沿った回転量を表します。</li>
</ul>

<p>最後に {{domxref("DeviceMotionEvent.interval","interval")}} は、デバイスからデータを取得する間隔をミリ秒単位で表します。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Device Orientation')}}</td>
   <td>{{Spec2('Device Orientation')}}</td>
   <td>最初の仕様</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<h3 id="DeviceMotionEvent"><code>DeviceMotionEvent</code></h3>

<p>{{Compat("api.DeviceMotionEvent")}}</p>

<h3 id="DeviceOrientationEvent"><code>DeviceOrientationEvent</code></h3>

<p>{{Compat("api.DeviceOrientationEvent")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("DeviceOrientationEvent")}}</li>
 <li>{{domxref("DeviceMotionEvent")}}</li>
 <li>レガシー化したイベントである <code><a href="/ja/docs/Web/Events/MozOrientation">MozOrientation</a></code></li>
 <li><a href="/ja/docs/Web/Events/Orientation_and_motion_data_explained">方向および動きとして示されるデータ</a></li>
 <li><a href="/ja/docs/Web/Guide/Events/Using_device_orientation_with_3D_transforms">Using deviceorientation in 3D Transforms</a></li>
 <li><a href="/ja/docs/Games/Workflows/HTML5_Gamedev_Phaser_Device_Orientation">Cyber Orb: 2D maze game with device orientation</a></li>
</ul>

<section id="Quick_links">
  <ul>
    <li><a href="/ja/docs/Web/Events/Orientation_and_motion_data_explained">方向および動きとして示されるデータ</a></li>
    <li>{{domxref("DeviceOrientationEvent")}}</li>
    <li>{{domxref("DeviceMotionEvent")}}</li>
    <li><a href="/ja/docs/Web/Events/Using_device_orientation_with_3D_transforms">Using deviceorientation in 3D Transforms</a></li>
    <li><a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">イベントへの入門</a></li>
  </ul>
</section>
