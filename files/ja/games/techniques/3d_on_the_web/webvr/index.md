---
title: WebVR — ウェブによる仮想現実
slug: Games/Techniques/3D_on_the_web/WebVR
---

{{GamesSidebar}}

仮想現実の概念自体は新しいものではありませんが、今ではそれをあるべき姿で機能させるためのテクノロジーと、それをウェブアプリケーションで活用するための JavaScript API があります。 この記事では、ゲームでの使用の観点から WebVR を紹介しています。

> **メモ:** WebVR API は [WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API) に置き換えられました。 WebVR は標準として承認されることはなく、ごく少数のブラウザーが既定で実装および有効化し、少数の機器に対応していました。

## VR 機器

Oculus Rift の人気とその他の多くの機器が間もなく市場に登場することで、未来は明るいように見えます。 ゲームをプレイするのに "十分な" VR 体験を実現するのに十分なテクノロジーがすでにあります。 Oculus Rift や HTC Vive などのデスクトップ型のものから、 Playstation VR (現時点では WebVR に対応していないことは確かです) を備えたコンソール、Gear VR や Google Cardboard などのモバイルエクスペリエンスまで、選択できる機器はたくさんあります。

![](hmds.jpg)

> **メモ:** 詳細については [WebVR の概念](/ja/docs/Web/API/WebVR_API/Concepts) をご覧ください。

## WebVR API

[WebVR API](/ja/docs/Web/API/WebVR_API) は、コンピューターに接続された VR 機器の情報とヘッドセットの位置/向き/速度/加速度の情報をキャプチャし、それをゲームやその他のアプリケーションで使用できる有用なデータに変換するための中心的な API です。

> **メモ:** もちろん、ゲームの作成に役立つ他の API もあります。 例えば、コントロール入力用の [ゲームパッド API](/ja/docs/Web/API/Gamepad_API) や、モバイルでのディスプレイの方向を扱うための [Device Orientation API](/ja/docs/Web/Events/Detecting_device_orientation) などです。

### ブラウザーの対応と仕様書の状態

現在、 WebVR API のブラウザー対応はまだ実験的です — [nightly builds of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/) と [experimental builds of Chrome](https://drive.google.com/folderview?id=0BzudLt22BqGRbW9WTHMtOWMzNjQ&usp=sharing#list) で動作しますが（Mozilla と Google が一丸となって実装に取り組みます）、遅かれ早かれ通常のビルドで見ることができるようになるでしょう。

[WebVR 仕様](http://mozvr.github.io/webvr-spec/webvr.html)は、編集者草案の状態にあり、これはまだ変更される可能性があることを意味します。 開発は、Mozilla の [Vladimir Vukicevic](https://twitter.com/vvuk) と Google の [Brandon Jones](https://twitter.com/tojiro) が主導しています。 詳細については、 <https://mixedreality.mozilla.org/> および [WebVR.info](https://webvr.info/) のウェブサイトにアクセスしてください。

### WebVR API の使用

WebVR API は、ヘッドセットの両方のレンズに[立体画像](/ja/docs/Web/API/WebVR_API/Concepts#stereoscopic_vision)を送信することと、センサーから頭の位置データを受信することの 2 つの概念に基づいており、これら 2 つは {{domxref("HMDVRDevice")}}（head-mounted display virtual reality device、ヘッドマウントディスプレイ仮想現実機器）と {{domxref("PositionSensorVRDevice")}} によって処理されます。

### 機器の取得

コンピューターに接続されている機器に関する情報を取得するには、次のように {{domxref("Navigator/getVRDisplays")}} メソッドを使用できます。

```js
navigator.getVRDevices().then(function (devices) {
  for (var i = 0; i < devices.length; ++i) {
    if (devices[i] instanceof HMDVRDevice) {
      gHMD = devices[i];
      break;
    }
  }
  if (gHMD) {
    for (var i = 0; i < devices.length; ++i) {
      if (
        devices[i] instanceof PositionSensorVRDevice &&
        devices[i].hardwareUnitId === gHMD.hardwareUnitId
      ) {
        gPositionSensor = devices[i];
        break;
      }
    }
  }
});
```

このコードは、利用可能な機器をループして、適切なセンサーをヘッドセットに割り当てます。最初の `devices` 配列には、接続された機器が含まれており、{{domxref("HMDVRDevice")}} を見つけるためのチェックが行われ、変数 `gHMD` に割り当てられます。これを使用して、シーンを設定し、目のパラメーターを得て、フィールドオブビュー等を設定することができます。例として

```js
function setCustomFOV(up, right, down, left) {
  var testFOV = new VRFieldOfView(up, right, down, left);

  gHMD.setFieldOfView(testFOV, testFOV, 0.01, 10000.0);
}
```

`gPositionSensor` 変数は {{domxref("PositionSensorVRDevice")}} を保持します — これを使用して、現在の位置や方向の状態を取得したり（例えば、すべてのフレームでシーンビューを更新したり）、センサーをリセットできます。 例えば、次のコードは画面上の位置情報を出力します。

```js
function setView() {
  var posState = gPositionSensor.getState();

  if (posState.hasPosition) {
    posPara.textContent =
      "Position: x" +
      roundToTwo(posState.position.x) +
      " y" +
      roundToTwo(posState.position.y) +
      " z" +
      roundToTwo(posState.position.z);
    xPos = -posState.position.x * WIDTH * 2;
    yPos = posState.position.y * HEIGHT * 2;
    if (-posState.position.z > 0.01) {
      zPos = -posState.position.z;
    } else {
      zPos = 0.01;
    }
  }

  // …
}
```

これを取得するデモの完全な説明と詳細については、[WebVR API の使い方](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)を参照してください。

## ツールとテクニック

最初の WebVR の実験とデモでは、おそらくウェブで最も人気のある 3D エンジンである Three.js を使用しました。 Three.js github で利用可能な [VREffect](https://github.com/mrdoob/three.js/blob/master/examples/js/effects/VREffect.js) および [VRControls](https://github.com/mrdoob/three.js/blob/master/examples/js/controls/VRControls.js) 関数を参照して、Three.js で WebVR を実装および処理するのに役立ててください。

![](sechelt.jpg)

Boris Smus は、[レスポンシブ WebVR](http://smus.com/responsive-vr/) の概念について書いています。 このコンセプトでは、 VR ハードウェアのないラップトップ、 Oculus Rift を搭載した PC、Google Cardboard に内蔵したスマートフォンなど、さまざまなデバイスで単一のウェブゲームをプレイしながら、それらすべてにユニークで価値のある体験を提供できます。 レスポンシブデザインに似ていますが、 VR の世界に適用されます — 一度書けば VR ヘッドセットで実行できます ... またはそれなしで。 [WebVR ボイラープレート](http://github.com/borismus/webvr-boilerplate)のソースを確認できます。 これは、WebVR の学習を開始する良い例であり、Web ベースの VR 体験の出発点です。

WebVR のシンプルなビルディングブロックを提供する [A-Frame](https://aframe.io/) と呼ばれるマークアップフレームワークもあるため、VRウェブサイトやゲームをすばやく構築して実験できます。 詳細については、[A-Frame を使った基本的なデモの作成](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)というチュートリアルを参照してください。

没入感は、ゲームプレイやグラフィックスよりも重要です — 体験の "内側にいる" と感じる必要があります。 実現するのは簡単ではありませんが、リアルな画像は必要ありません。 それどころか、基本的な形状を高フレームレートで飛び交うだけで、かなりの効果が得られます。 実験が重要なことを覚えておいてください — 特にあなたのゲームに何が有効かを確認してください。

## WebVR の未来

それは起こっています — 消費者向けデバイスは現在市場に出回っており、Web 上でそれらをサポートする JavaScript API がすでにあります。 今必要なのは、安定した仕様、優れた UX と UI、より優れたハードウェア、より多くのツールとライブラリーです。 そしてそのすべてが間近に迫っています。 WebVR に飛び込んで実験するのに最適な時期です。

## 関連項目

- [WebVR API](/ja/docs/Web/API/WebVR_API)
- [WebVR の概念](/ja/docs/Web/API/WebVR_API/Concepts)
- [WebVR API の使い方](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [A-Frame を使った基本的なデモの作成](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
