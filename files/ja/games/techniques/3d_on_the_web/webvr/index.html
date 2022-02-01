---
title: WebVR — Webによる仮想現実
slug: Games/Techniques/3D_on_the_web/WebVR
tags:
  - 3D
  - Games
  - WebGL
  - WebVR
translation_of: Games/Techniques/3D_on_the_web/WebVR
---
<div>{{GamesSidebar}}</div>

<p class="summary">仮想現実の概念自体は新しいものではありませんが、今ではそれをあるべき姿で機能させるためのテクノロジーと、それを Web アプリケーションで活用するための JavaScript API があります。 この記事では、ゲームでの使用の観点から WebVR を紹介しています。</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: WebVR API は <a href="/ja/docs/Web/API/WebXR_Device_API">WebXR Device API</a> に置き換えられました。 WebVR は標準として承認されることはなく、ごく少数のブラウザーでデフォルトで実装および有効化され、少数のデバイスをサポートしていました。</p>
</div>

<h2 id="VR_devices" name="VR_devices">VR デバイス</h2>

<p>Oculus Rift の人気とその他の多くのデバイスが間もなく市場に登場することで、未来は明るいように見えます。 ゲームをプレイするのに "十分な" VR 体験を実現するのに十分なテクノロジーがすでにあります。 Oculus Rift や HTC Vive などのデスクトップ型のものから、Playstation VR (現時点では WebVR をサポートしていないことは確かです) を備えたコンソール、Gear VR や Google Cardboard などのモバイルエクスペリエンスまで、選択できるデバイスはたくさんあります。</p>

<p><img alt="" src="http://end3r.com/tmp/vr/hmds.jpg" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<div class="note">
<p><strong>Note</strong>: 詳細については <a href="/ja/docs/Web/API/WebVR_API/WebVR_concepts">WebVR Concepts</a> をご覧ください。</p>
</div>

<h2 id="The_WebVR_API" name="The_WebVR_API">WebVR API</h2>

<p><a href="/ja/docs/Web/API/WebVR_API">WebVR API</a> は、コンピューターに接続された VR デバイスの情報とヘッドセットの位置/向き/速度/加速度の情報をキャプチャし、それをゲームやその他のアプリケーションで使用できる有用なデータに変換するための中心的な API です。</p>

<div class="note">
<p><strong>Note</strong>: もちろん、ゲームの作成に役立つ他の API もあります。 例えば、コントロール入力用の <a href="/ja/docs/Web/API/Gamepad_API">The Gamepad API</a> や、モバイルでのディスプレイの方向を扱うための <a href="/ja/docs/Web/API/Detecting_device_orientation">Device Orientation API</a> などです。</p>
</div>

<h3 id="Browser_support_and_spec_status" name="Browser_support_and_spec_status">ブラウザーサポートと仕様の状態</h3>

<p>現在、WebVR API のブラウザーサポートはまだ実験的です — <a href="https://nightly.mozilla.org/">nightly builds of Firefox</a> と <a href="https://drive.google.com/folderview?id=0BzudLt22BqGRbW9WTHMtOWMzNjQ&amp;usp=sharing#list">experimental builds of Chrome</a> で動作しますが（Mozilla と Google が一丸となって実装に取り組みます）、遅かれ早かれ通常のビルドで見ることができるようになるでしょう。</p>

<p><a href="|http://mozvr.github.io/webvr-spec/webvr.html">WebVR 仕様</a>は、編集者草案の状態にあり、これはまだ変更される可能性があることを意味します。 開発は、Mozilla の <a href="https://twitter.com/vvuk">Vladimir Vukicevic</a> と Google の <a href="https://twitter.com/tojiro">Brandon Jones</a> が主導しています。 詳細については、<a href="http://mozvr.com/">MozVR.com</a> および <a href="http://webvr.info/">WebVR.info</a> の Web サイトにアクセスしてください。</p>

<h3 id="Using_the_WebVR_API" name="Using_the_WebVR_API">WebVR API の使用</h3>

<p>WebVR API は、ヘッドセットの両方のレンズに<a href="/ja/docs/Web/API/WebVR_API/WebVR_concepts#Stereoscopic_vision">立体画像</a>を送信することと、センサーから頭の位置データを受信することの2つの概念に基づいており、これら2つは {{domxref("HMDVRDevice")}}（head-mounted display virtual reality device、ヘッドマウントディスプレイ仮想現実デバイス）と {{domxref("PositionSensorVRDevice")}} によって処理されます。</p>

<h3 id="Get_the_devices" name="Get_the_devices">デバイスの取得</h3>

<p>コンピューターに接続されているデバイスに関する情報を取得するには、次のように {{domxref("Navigator.getVRDevices")}} メソッドを使用できます。</p>

<pre class="brush: js notranslate">navigator.getVRDevices().then(function(devices) {
  for (var i = 0; i &lt; devices.length; ++i) {
    if (devices[i] instanceof HMDVRDevice) {
      gHMD = devices[i];
      break;
    }
  }
  if (gHMD) {
    for (var i = 0; i &lt; devices.length; ++i) {
      if (devices[i] instanceof PositionSensorVRDevice
      	 &amp;&amp; devices[i].hardwareUnitId === gHMD.hardwareUnitId) {
        gPositionSensor = devices[i];
        break;
      }
    }
  }
});</pre>

<p>このコードは、使用可能なデバイスをループし、ヘッドセットに適切なセンサーを割り当てます — <code>devices</code> 配列の最初には接続されているデバイスが含まれており、{{domxref("HMDVRDevice")}} を見つけるためのチェックが行われ、それを <code>gHMD</code> 変数に割り当てます — これを使用して、 シーンの設定、目のパラメータの取得、視野の設定などを行うことができます。 例えば次のようにです。</p>

<pre class="brush: js notranslate">function setCustomFOV(up,right,down,left) {
  var testFOV = new VRFieldOfView(up,right,down,left);

  gHMD.setFieldOfView(testFOV,testFOV,0.01,10000.0);
}</pre>

<p><code>gPositionSensor</code> 変数は {{domxref("PositionSensorVRDevice")}} を保持します — これを使用して、現在の位置や方向の状態を取得したり（例えば、すべてのフレームでシーンビューを更新したり）、センサーをリセットできます。 例えば、次のコードは画面上の位置情報を出力します。</p>

<pre class="brush: js notranslate">function setView() {
  var posState = gPositionSensor.getState();

  if(posState.hasPosition) {
    posPara.textContent = 'Position: x' + roundToTwo(posState.position.x) + " y"
                                + roundToTwo(posState.position.y) + " z"
                                + roundToTwo(posState.position.z);
    xPos = -posState.position.x * WIDTH * 2;
    yPos = posState.position.y * HEIGHT * 2;
    if(-posState.position.z &gt; 0.01) {
      zPos = -posState.position.z;
    } else {
      zPos = 0.01;
    }
  }

  ...

}</pre>

<p>これを取得するデモの完全な説明と詳細については、<a href="/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API">WebVR API の使い方</a>を参照してください。</p>

<h2 id="Tools_and_techniques" name="Tools_and_techniques">ツールとテクニック</h2>

<p>最初の WebVR の実験とデモでは、おそらく Web で最も人気のある 3D エンジンである Three.js を使用しました。 Three.js github で利用可能な <a href="https://github.com/mrdoob/three.js/blob/master/examples/js/effects/VREffect.js">VREffect</a> および <a href="https://github.com/mrdoob/three.js/blob/master/examples/js/controls/VRControls.js">VRControls</a> 関数を参照して、Three.js で WebVR を実装および処理するのに役立ててください。</p>

<p><img alt="" src="http://end3r.com/tmp/vr/sechelt.jpg" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<p>Boris Smus は、<a href="http://smus.com/responsive-vr/">レスポンシブ WebVR</a> の概念について書いています。 このコンセプトでは、VR ハードウェアのないラップトップ、Oculus Rift を搭載した PC、Google Cardboard に内蔵したスマートフォンなど、さまざまなデバイスで単一の Web ゲームをプレイしながら、それらすべてにユニークで価値のある体験を提供できます。 レスポンシブデザインに似ていますが、VR の世界に適用されます — 一度書けば VR ヘッドセットで実行できます ... またはそれなしで。 <a href="http://github.com/borismus/webvr-boilerplate">WebVR ボイラープレート</a>のソースを確認できます。 これは、WebVR の学習を開始する良い例であり、Web ベースの VR 体験の出発点です。</p>

<p>WebVR のシンプルなビルディングブロックを提供する <a href="https://aframe.io/">A-Frame</a> と呼ばれるマークアップフレームワークもあるため、VR Web サイトやゲームをすばやく構築して実験できます。 詳細については、<a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame">A-Frame を使った基本的なデモの作成</a>というチュートリアルを参照してください。</p>

<p>没入感は、ゲームプレイやグラフィックスよりも重要です — 体験の "内側にいる" と感じる必要があります。 実現するのは簡単ではありませんが、リアルな画像は必要ありません。 それどころか、基本的な形状を高フレームレートで飛び交うだけで、かなりの効果が得られます。 実験が重要なことを覚えておいてください — 特にあなたのゲームに何が有効かを確認してください。</p>

<h2 id="The_future_of_WebVR" name="The_future_of_WebVR">WebVR の未来</h2>

<p>それは起こっています — 消費者向けデバイスは現在市場に出回っており、Web 上でそれらをサポートする JavaScript API がすでにあります。 今必要なのは、安定した仕様、優れた UX と UI、より優れたハードウェア、より多くのツールとライブラリーです。 そしてそのすべてが間近に迫っています。 WebVR に飛び込んで実験するのに最適な時期です。</p>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API</a></li>
 <li><a href="/ja/docs/Web/API/WebVR_API/WebVR_concepts">WebVR concepts</a></li>
 <li><a href="/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API">WebVR API の使い方</a></li>
 <li><a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame">A-Frame を使った基本的なデモの作成</a></li>
</ul>
