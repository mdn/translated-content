---
title: WebVR APIの使い方
slug: Web/API/WebVR_API/Using_the_WebVR_API
---

[WebVR API](/ja/docs/Web/API/WebVR_API) はウェブ開発者のツールキットへのすばらしい追加機能で、[Oculus Rift](https://developer.oculus.com/) のようなバーチャルリアリティハードウェアへのアクセスが可能となります。そして出力された動きや向きはウェブアプリの描画更新に変換されます。しかし VR アプリを開発はどのようにやればいいのでしょうか？ この記事では、それに関する基礎的な解説を行います。

> **メモ:** WebVR は現在実験的な段階にあります（[最新の仕様はこちら](http://mozvr.github.io/webvr-spec/webvr.html)にあります); 今の段階でもっとも正常に動作するのは Firefox Nightly/Developer Edition で、一部の機能は Google Chrome でも動作します。詳細は Brandon Jones の [Bringing VR to Chrome](http://blog.tojicode.com/2014/07/bringing-vr-to-chrome.html) を参照してください。

## 始めるには

WebVR を始めるには，VR ハードウェアのマニュアルに従ったセットアップと、[WebVR environment setup](/ja/docs/Web/API/WebVR_API/WebVR_environment_setup) に示されているコンピュータへの設定が必要になります、スムースな動作には専用 GPU が推奨されます。

[Firefox Nightly](https://nightly.mozilla.org/) (または [Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)) のインストールと合わせて [WebVR Enabler Add-on](http://www.mozvr.com/downloads/webvr-addon-0.1.0.xpi) も必要となります。

いちど環境が設定できたら、テストのために私たちの [MozVR projects](http://mozvr.com/projects/) を開いて、\[Enter VR**]** ボタンをクリックすることを試してください。

> **メモ:** より深い情報のために，[WebVR environment setup](/ja/docs/Web/API/WebVR_API/WebVR_environment_setup) をチェックしてください。

> **メモ:** モバイルデバイスを HMD として用いるような安価な選択肢もあります。この場合，位置センサは利用できませんので、代わりに [deviceorientation API](/ja/Apps/Build/gather_and_modify_data/responding_to_device_orientation_changes) を用いて擬似的な向きデータを使う必要があるかもしれません。

## 簡単なデモ

WebVR のデモは [MozVR team repo](https://github.com/MozVR/) や [MDN webvr-tests repo](https://github.com/mdn/webvr-tests) にたくさんありますが、この記事では、主に[positionsensorvrdevice](https://github.com/mdn/webvr-tests/tree/gh-pages/positionsensorvrdevice) について ([動作しているデモ](http://mdn.github.io/webvr-tests/positionsensorvrdevice/)) を例に解説します。

![](https://mdn.mozillademos.org/files/10797/vrpositionsensor-demo.png)

これは簡単な 2.5D のデモで，[HTML5 Canvas](/ja/docs/Web/HTML/Element/canvas) にレンダリングされた Firefox ロゴが右目と左目のビューに表示されるものです．VR HMD でデモを見ているときにキャンバスをクリックすると、デモはフルスクリーンになり、Firefox ロゴに近づけるようになります。あなたが動くと頭の動きに合わせて上下左右や回転してリアルに動きます。

あなたが WebVR のコードがどう動いているかを簡単に確認できるように、デモは意図的にシンプルになるよう保持されています。API は十分シンプルであるため，単純な DOM ベースインターフェイスでも複雑な WebGL シーンでも、好きなアプリに WebVR 制御の移動を簡単に適用できます。

## アプリはどう動く?

このセクションでは、アプリを動作させるために必要なコードの変更箇所を通じて、基礎的なレベルで何が必要かを知ることができます。

### VR デバイスへのアクセス

最初にコンピュータに接続中の VR ハードウェアへのプログラム的な参照を取得します。それには接続中の全 VR デバイスの配列へと解決できるプロミスを返す {{domxref("Navigator.getVRDevices")}} を使います。

返される可能性のあるオブジェクトが 2 種類あります:

- {{domxref("PositionSensorVRDevice")}}: 位置センサカメラ。
- {{domxref("HMDVRDevice")}}: VR ヘッドマウントディスプレイ。

[vrdevice demo](https://github.com/mdn/webvr-tests/tree/gh-pages/vrdevice) で基本的なデバイス情報を表示するための非常に簡単なコードを見ることができます。

本当に欲しいものはデバイスのペアを取得するものです (将来のマルチプレイヤ VR ゲームでは複数のペアになるかもですが)。WebVR 仕様からもってきた（そして [positionsensorvrdevice](https://github.com/mdn/webvr-tests/tree/gh-pages/positionsensorvrdevice) デモでも使っている）次のコードはかなりよく使うトリックです:

```js
var gHMD, gPositionSensor;

navigator.getVRDevices().then(function(devices) {
  for (var i = 0; i < devices.length; ++i) {
    if (devices[i] instanceof HMDVRDevice) {
      gHMD = devices[i];
      break;
    }
  }

  if (gHMD) {
    for (var i = 0; i < devices.length; ++i) {
      if (devices[i] instanceof PositionSensorVRDevice && devices[i].hardwareUnitId === gHMD.hardwareUnitId) {
        gPositionSensor = devices[i];
        break;
      }
    }
  }
});
```

最初に見つかった {{domxref("HMDVRDevice")}} のインスタンスを取得し、それを `gHMD` 変数へ保存します．次に見つかった {{domxref("PositionSensorVRDevice")}} のインスタンスを取得して `gPositionSensor` 変数に代入していますが，それは先ほど取得した `gHMD` オブジェクトの {{domxref("VRDevice.hardWareUnitId")}} プロパティが一致するものだけを対象にしています。同一のハードウェアは複数のデバイスとして取得されますが、それらはハードウェアユニット ID を共有しています — これは取得した 2 つのデバイスの参照がマッチングしているかをチェックする方法です。

### アプリの初期化

シーンを描画する {{htmlelement("canvas")}} 要素を次のように作成し、配置します:

```js
var myCanvas = document.createElement('canvas');
var ctx = myCanvas.getContext('2d');
var body = document.querySelector('body');
body.appendChild(myCanvas);
```

次に、新しい [image](/ja/docs/Web/API/HTMLImageElement) を作成し、アプリの [main loop](/ja/docs/Games/Anatomy#Building_a_main_loop_in_JavaScript) である`draw()` を実行する前に `image` が ロードされているかをチェックするために` {{event("load")}} イベントを使います:

```js
var image = new Image();
image.src = 'firefox.png';
image.onload = draw;
```

### メインループ

`draw()` は次のように実装します:

```js
function draw() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  lCtrOffset = WIDTH*0.25;
  rCtrOffset = WIDTH*0.25;

  myCanvas.width = WIDTH;
  myCanvas.height = HEIGHT;

  setView();
  drawImages();
  drawCrosshairs();

  requestAnimationFrame(draw);
}
```

[window](/ja/docs/Web/API/Window) の `WIDTH` と `HEIGHT` は各フレームでリサンプリングされ，次の設定に使われます:

- 左右の目のビュー中心からの相対的に描画される画像を維持するのに使われる左右のオフセット値です。半分の幅のシーンのコピーを描画するので、各コピーの中心はそれぞれ、エッジの端から端までのキャンバス全体幅のちょうど 1/4 の幅になります。
- キャンバスの [width](/ja/docs/Web/API/HTMLCanvasElement/width) と [height](/ja/docs/Web/API/HTMLCanvasElement/height)。

これによってブラウザウィンドウがリサイズされたとしても、シーンが正しくリサイズされます。

次にメインループの中で 3 つの関数を実行しています:

- `setView()` は，VR ハードウェアから位置と向きの情報を受け取り，シーン内の更新された画像位置の描画に使用する準備をします。
- `drawImages()` はシーンを更新された位置で実際に描画します。
- `drawCrosshairs()` は常にシーンの中央にある十字線を描画します。

これらの詳細は、後ほど解説します。

ループの最後に [requestAnimationFrame(draw)](/ja/docs/Web/API/window/requestAnimationFrame) を実行し`、draw()` ループが連続して呼び出されるようにします。

### 位置と向き情報の受取り

では `setView()` 関数の詳細を見ていきましょう。コードの各部分を順に追って、そこで何をしているかを説明します:

```js
function setView() {
  var posState = gPositionSensor.getState();
```

位置センサへの参照を使って {{domxref("PositionSensorVRDevice.getState")}} を呼び出します。このメソッドは、あなたが知りたい現在の HMD の状態のすべてを返します — {{domxref("VRPositionState")}} オブジェクトへのアクセスを通じて — 位置、向き、そして速度/ 加速度や角速度 / 角加速度のようなより高度な情報を含んでいます。

```js
  if(posState.hasPosition) {
    posPara.textContent = 'Position: x' + roundToTwo(posState.position.x) + " y"
                                + roundToTwo(posState.position.y) + " z"
                                + roundToTwo(posState.position.z);
    xPos = -posState.position.x * WIDTH * 2;
    yPos = posState.position.y * HEIGHT * 2;
    if(-posState.position.z > 0.01) {
      zPos = -posState.position.z;
    } else {
      zPos = 0.01;
    }
  }
```

HMD のスイッチが OFF にされたり位置センサを向いていなかったりした場合など、アプリがエラーになったり停止したりしないように、 {{domxref("VRPositionState.hasPosition")}} を使って HMD の正常な位置情報が利用可能かを確認する方法をチェックします。

そして通知を目的として、アプリの UI 内のパラグラフへ現在の位置情報を出力します。読みやすくするために、カスタム関数を使って小数点以下 2 桁に丸めています。

最後に {{domxref("VRPositionState.position")}} に格納されている位置情報に関して、`xPos`、 `yPos`、`zPos` 変数に代入します。`zPos` の値を 0.01 以上にするのに `if ... else` ブロックが利用されていることに気付くでしょう — このアプリは 0 以下になると例外を投げていました。

```js
  if(posState.hasOrientation) {
    orientPara.textContent = 'Orientation: x' + roundToTwo(posState.orientation.x) + " y"
                                + roundToTwo(posState.orientation.y) + " z"
                                + roundToTwo(posState.orientation.z);
    xOrient = posState.orientation.x * WIDTH;
    yOrient = -posState.orientation.y * HEIGHT * 2;
    zOrient = posState.orientation.z * 180;

  }
```

次に同じような処理をして、HMD の向きに応じてシーンの更新処理をします — {{domxref("VRPositionState.hasOrientation")}} を使って有効な向きデータかをチェックして，向きのデータを通知用の UI に表示し、`xOrient`、`yOrient`、`zOrient` の値を {{domxref("VRPositionState.orientation")}} に格納されている値から設定します．

```
  timePara.textContent = 'Timestamp: ' + Math.floor(posState.timeStamp);
}
```

最後に {{domxref("VRPositionState.timeStamp")}} に格納されている現在のタイムスタンプを通知 UI に出力します。この値は位置データが更新済みか、どんな順序で更新が発生したかを判断するのに役立ちます。

### シーンの更新

`setView()` で取得された `xPos`、`yPos`、`zPos`、`xOrient`、`yOrient`、`zOrient` の値は、`drawImages()` で行われるシーン病がの更新のための変更値として使用されます。どうやっているかを見ていきますが、左目のビューの描画コードだけをウォークスルーしていきます。右目については、右にオーバーシフトしている以外はほぼ同じです:

```js
function drawImages() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0,0,WIDTH,HEIGHT);
```

最初に次のフレームが描画される前にシーンをクリアするため、白い {{domxref("CanvasRenderingContext2D.fillRect","fillRect()")}} を描画します。

```js
  ctx.save();
  ctx.beginPath();
  ctx.translate(WIDTH/4,HEIGHT/2);
  ctx.rect(-(WIDTH/4),-(HEIGHT/2),WIDTH/2,HEIGHT);
```

次に左目のビューを別の画像として扱って右目のビューに影響を与えないコードにするので、 {{domxref("CanvasRenderingContext2D.save","save()")}} でコンテキスト状態を保存します。

そして {{domxref("CanvasRenderingContext2D.beginPath","pathを開始し")}}, {{domxref("CanvasRenderingContext2D.translate","canvasを変換します")}}、これによって原点を左目の中心（全体の 1/4 幅で半分の高さ）に移動させます。回転を正しく動かすためにもこれは必要です。回転は canvas の原点が中心となります。そして左目のビュー全体を覆うように {{domxref("CanvasRenderingContext2D.rect","rect()")}} を描画します。

`rect()` はマイナスの 1/4 幅，マイナスの 1/2 高さから描画し始めていることに注意してください。これは原点が既に移動しているためです。

```
  ctx.clip();
```

canvas を {{domxref("CanvasRenderingContext2D.clip","clip()")}} します。`rect()` が描画された直後にこれを呼ぶので、キャンバス上に対して行うことは `rect() の内側に制限され`、`restore()` が呼び出されるまですべてのオーバーフローは隠蔽されます（後述）。これは左ビュー全体が右ビューから独立したままであることを保証します。

```js
  ctx.rotate(zOrient * Math.PI / 180);
```

頭の回転と同じようにシーンを回転させるために、zOrient の値に従った回転が画像に適用します。

```js
  ctx.drawImage(image,-(WIDTH/4)+lCtrOffset-((image.width)/(2*(1/zPos)))+xPos-yOrient,-((image.height)/(2*(1/zPos)))+yPos+xOrient,image.width*zPos,image.height*zPos);
```

実際に画像を描画しましょう! この少し厄介なコードを、ここでは引数ごとに分解してみましょう:

- `image`: 描画する画像
- `-(WIDTH/4)+lCtrOffset-((image.width)/(2*(1/zPos)))+xPos-yOrient`: 画像原点の水平座標。前に行った平行移動を打ち消すために `WIDTH/4` を引きます．そして中心に戻すために左中心オフセットを加えて，画像幅を `zPos` の逆数の 2 倍で割ったものを引きます— 描画する画像が小さい（大きい）ほど減算値が小さい（大きい）くなり，画像中心が保持されます．最後に，HMD の水平方向の動きや回転にあわせて画像位置を更新するために `xPos` を加えて，`yOrient` を引きます（y 軸周りの回転が画像を水平方向に移動します)。
- `-((image.height)/(2*(1/zPos)))+yPos+xOrient`: 画像原点の垂直方向の座標です。これは In this case the "HEIGHT/2 の減算"と"右中心オフセットの追加"は、ちょうどお互いにキャンセルされるので、計算式から取り除きます。計算式の残りは上と同じように、zPos の逆数の 2 倍で画像幅を割ったものを減算することによる画像中心を保持と、`yPos` と `xOrient` による描画位置の修正です。
- `image.width*zPos`: 画像を描画する幅; 近いものほど大きく描画されるように `zPos` で修正します。
- `image.height*zPos`: 画像を描画する高さ; 近いものほど大きく描画されるように `zPos` で修正します。

```js
  ctx.strokeStyle = "black";
  ctx.stroke();
```

左目ビューの周囲に黒い {{domxref("CanvasRenderingContext2D.stroke","stroke()")}} を描画します。これはビューの分離をちょっとだけわかりやすくする手助けとなります。

```js
  ctx.restore();
```

右目ビューの描画の実施に移行するため、キャンバスの復元を {{domxref("CanvasRenderingContext2D.restore","restore()")}} で行います。

```js
  ...
}
```

> **メモ:** ここである種のチートをしていて，2D キャンバスを使って 3D シーンを擬似的に表現しています。学習目的の場合、物事を簡単にすることができます。WEB テクノロジで作成された任意のアプリで、ビューレンダリングを修正するために上述した位置と向きのデータを使うことができます。例えば [3Dpositionorientation](https://github.com/mdn/webvr-tests/tree/gh-pages/3Dpositionorientation) デモでは、[Three.js](http://threejs.org/) を使って作成された WebGL シーンのビューを制御するために上述の方法と非常によく似たコードを使っています。

> **メモ:** [`drawCrosshairs() のコード`](https://github.com/mdn/webvr-tests/blob/gh-pages/positionsensorvrdevice/index.html#L106-L119) は `drawImages()と比較して`非常にシンプルですので、もし興味があるなら自分自身で勉強することをおすすめします!

### フルスクリーン表示

VR エフェクトはアプリを [フルスクリーンモード](/ja/docs/Web/Guide/API/DOM/Using_full_screen_mode) で実行すると非常に効果的です。ディスプレイのダブルクリックやボタンの押下のような、特定のイベントが発生した時に {{htmlelement("canvas")}} 要素をフルスクリーンにするための一般的な設定を説明します。

シンプルさを保つために、ここではキャンバスのクリック時に `fullScreen()` 関数を実行します:

```js
myCanvas.addEventListener('click',fullScreen,false);
```

`fullScreen()` 関数は、できるだけ互換性を保つために、ブラウザによって異なるキャンバスに実装されている `requestFullscreen()` メソッドのバージョンをチェックして、見つかった適切な関数を呼び出します:

```js
function fullScreen() {
  if (myCanvas.requestFullscreen) {
    myCanvas.requestFullscreen();
  } else if (myCanvas.msRequestFullscreen) {
    myCanvas.msRequestFullscreen();
  } else if (myCanvas.mozRequestFullScreen) {
    myCanvas.mozRequestFullScreen();
  } else if (myCanvas.webkitRequestFullscreen) {
    myCanvas.webkitRequestFullscreen();
  }
}
```

## FOV とデバイスのキャリブレーション

現在のデモではあまり考えませんでしたが，商用アプリでは，ユーザが持っている VR ハードウェアを正しく動作させるためにユーザキャリブレーションをする必要があるでしょう．WebVR API はそれを手助けする多くの機能があります。

HMD の位置と姿勢をリセットするために {{domxref("PositionSensorVRDevice.resetSensor")}} メソッドを利用できます。実行すると、現在のヘッドセットの位置/向きが 0 にセットされます。実行前に，ヘッドセットが検知可能な位置にあることを保証する必要があります。positionsensorvrdevice demo では、\[Reset Sensor] ボタンでそれを実行することができます:

```html
<button>Reset Sensor</button>
```

```js
document.querySelector('button').onclick = function() {
  gPositionSensor.resetSensor();
}
```

他にもヘッドセットの視野角 (FOV) を、シーン内で上，右，下，左方向に見える範囲がどの程度かキャリブレーションします。それぞれの目のパラメータを別々に返す {{domxref("HMDVRDevice.getEyeParameters")}} メソッドを呼ぶと、両目それぞれの情報を個別に受け取ることができます。なお左目用パラメータで 1 回、右目用で 1 回の計 2 回の呼出しが必要です。それぞれの目用に {{domxref("VREyeParameters")}} オブジェクトを返します。

一例として、 {{domxref("VREyeParameters.currentFieldOfView")}} を用いて片目分の現在の FOV を受け取れます。これは次の 4 つのプロパティを持つ {{domxref("VRFieldOfView")}} オブジェクトを返します:

- {{domxref("VRFieldOfViewReadOnly.upDegrees","upDegrees")}}: FOV の上方向へ広がる角度の値．
- {{domxref("VRFieldOfViewReadOnly.rightDegrees","rightDegrees")}}: FOV の右方向へ広がる角度の値．
- {{domxref("VRFieldOfViewReadOnly.downDegrees","downDegrees")}}: FOV の下方向へ広がる角度の値．
- {{domxref("VRFieldOfViewReadOnly.leftDegrees","leftDegrees")}}: FOV の左方向へ広がる角度の値．

FOV は眼を頂点としたピラミッド形になっています．

あなたのアプリに適切な FOV をユーザが持っているかをチェックし，もしそうでないなら {{domxref("HMDVRDevice.setFieldOfView")}} メソッドを使って新しい FOV を設定します．これを扱う簡単な関数は次のような感じです:

```js
function setCustomFOV(up,right,down,left) {
  var testFOV = new VRFieldOfView(up,right,down,left);

  gHMD.setFieldOfView(testFOV,testFOV,0.01,10000.0);
}
```

この関数は引数として 4 つの角度を受け取り、VRFieldOfView() コンストラクタを用いて新しい {{domxref("VRFieldOfView")}} オブジェクトを作成します。これを `setFieldOfView()` の最初の 2 つの引数（左目と右目の FOV）として渡します。第 3、4 引数は，FOV のオブジェクト可視領域を定義する眼からの最短、最大距離を示す `zNear` と `zFar` です．
