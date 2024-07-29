---
title: WebVR API の使用
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: 081123785142051fba3e353ff2d8c743af69b862
---

{{APIRef("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> WebVR API は [WebXR API](/ja/docs/Web/API/WebXR_Device_API) に置き換えられました。 WebVR は標準として批准されることはなく、ごく少数のブラウザーでしか既定で実装・有効化されず、少数の端末しか対応していませんでした。

WebVR API はウェブ開発者のツールキットへのすばらしい追加機能で、 Oculus Rift のようなバーチャルリアリティハードウェアへのアクセスが可能となります。そして出力された動きや向きはウェブアプリの描画更新に変換されます。しかし VR アプリを開発はどのようにやればいいのでしょうか？ この記事では、それに関する基礎的な解説を行います。

## 始めましょう

始めるには、次のものが必要です。

- 対応している VR ハードウェア

  - 最も安価なオプションは、モバイル端末、対応しているブラウザー、および機器マウント（例えば Google Cardboard）を使用することです。これは、専用のハードウェアほど良い使い勝手ではありませんが、強力なコンピューターや専用の VR ディスプレイを購入する必要はありません。
  - 専用のハードウェアはコストがかかりますが、より良い使い勝手を提供することができます。現時点で最も WebVR と互換性のあるハードウェアは、 HTC VIVE と Oculus Rift です。 [webvr.info](https://webvr.info/) のトップページには、利用できるハードウェアや対応しているブラウザーについて、さらに有益な情報が掲載されています。

- 使用した場合、 VR 専用ハードウェアを使用して VR シーンのレンダリング/表示を処理するのに十分な性能のコンピューター。購入する VR の関連ガイド（例： [VIVE READY コンピューター](https://www.vive.com/us/ready/)）を見ていただくと、必要なものがわかると思います。
- 対応しているブラウザーがインストールされていること - 最新の[Firefox Nightly](https://www.mozilla.org/ja/firefox/channel/desktop/) または [Chrome](https://www.google.com/chrome/index.html) が、デスクトップでもモバイルでも、正しい選択となります。

すべての組み立てが完了したら、 [simple A-Frame demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) にアクセスすると、シーンがレンダリングされるか、右下のボタンを押して VR 表示モードに入ることができるかどうかで、セットアップによって WebVR が正しく動作するかどうかをテストすることができます。

新しい JavaScript コードの束を理解する必要なく、WebVR 互換の 3D シーンをすばやく作成したい場合は、[A-Frame](https://aframe.io/) が断然最適なオプションと言えます。しかし、これは生の WebVR API がどのように動作するのかを教えてはくれませんので、次に取りかかるのはこの点です。

## 簡単なデモ

WebVR API がどのように動作するのかを説明するために、次のような raw-webgl-example を勉強してみましょう。

![灰色の回転する 3D 立方体](capture1.png)

> **メモ:** [このデモのソースコード](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) は GitHub で、[ライブで見ることができます](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/) also.

> [!NOTE]
> ブラウザーで WebVR が動作しない場合、グラフィックカードを通して実行しているかどうかを確認する必要がある場合があります。例えば NVIDIA のカードの場合、 NVIDIA コントロールパネルが正常に設定されていれば、利用できるコンテキストメニューオプションがあります - Firefox を右クリックし、 _Run with graphics processor > High-performance NVIDIA processor_ を選んでください。

このデモでは、WebGL のデモの聖杯である、回転する 3D 立方体を扱っています。私たちはこれを生の [WebGL API](/ja/docs/Web/API/WebGL_API) コードを使用して実装しています。基本的な JavaScript や WebGL は一切教えず、WebVR の部分のみを教える予定です。

このデモでは、次のような機能も備えています。

- VR ディスプレイに存在するシーンを開始（および停止）するためのボタン。
- VR の正の値、すなわちヘッドセットの位置と方向をリアルタイムで更新して表示（および非表示）するボタン。

このデモのメインの [JavaScript ファイル](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js)のソースコードを見ていくと、先行するコメントで "WebVR" という文字列を探せば、簡単に WebVR に特化した部分を見つけることができます。

> [!NOTE]
> 基本的な JavaScript と WebGL については、 [JavaScript 学習素材](/ja/docs/Learn/JavaScript)、[WebGL チュートリアル](/ja/docs/Web/API/WebGL_API/Tutorial)を参照してください。

## アプリはどう動くか

この点で、コードの WebVR 部分がどのように動作するのかを見ていきましょう。

典型的な（単純な） WebVR アプリはこのように作業します。

1. {{domxref("Navigator.getVRDisplays()")}} を使用して、 VRディスプレイへの参照を取得します。
2. {{domxref("VRDisplay.requestPresent()")}} を使用して VR ディスプレイへの表示を開始します。
3. WebVR 専用の {{domxref("VRDisplay.requestAnimationFrame()")}} メソッドを使用して、ディスプレイの正しいリフレッシュレートでアプリのレンダリングループが実行されます。
4. レンダリングループ内では、現在のフレームを表示するために必要なデータを取得し（{{domxref("VRDisplay.getFrameData()")}}）、表示シーンを両眼で 2 回描画し、レンダリングしたビューをディスプレイに送信してユーザに表示します ({{domxref("VRDisplay.submitFrame()")}})。

下記の節では、この raw-webgl-demo を詳しく見ていき、上記の機能が具体的にどこで使用されるかを見ていきます。

### いくつかの変数で始める

最初に出会う WebVR 関連のコードは、以下のブロックです。

```js
// WebVR 変数

const frameData = new VRFrameData();
let vrDisplay;
const btn = document.querySelector(".stop-start");
let normalSceneFrame;
let vrSceneFrame;

const poseStatsBtn = document.querySelector(".pose-stats");
const poseStatsSection = document.querySelector("section");
poseStatsSection.style.visibility = "hidden"; // hide it initially

const posStats = document.querySelector(".pos");
const orientStats = document.querySelector(".orient");
const linVelStats = document.querySelector(".lin-vel");
const linAccStats = document.querySelector(".lin-acc");
const angVelStats = document.querySelector(".ang-vel");
const angAccStats = document.querySelector(".ang-acc");
let poseStatsDisplayed = false;
```

これらについて簡単に説明します。

- `frameData` には {{domxref("VRFrameData")}} オブジェクトを入れ、これは {{domxref("VRFrameData.VRFrameData", "VRFrameData()")}} コンストラクターで作成します。これは初期状態では空ですが、後に VR ディスプレイに表示する各フレームのレンダリングに必要なデータを格納し、レンダリングループの実行に合わせて常に更新されます。
- `vrDisplay` は初期化されていませんが、後に VR ヘッドセット（{{domxref("VRDisplay")}} — API の中心的な制御オブジェクト）への参照を保持するようになります。
- `btn` と `poseStatsBtn` には、アプリを制御するために使用する 2 つのボタンへの参照が格納されています。
- `normalSceneFrame` と `vrSceneFrame` は初期化されずに始まりますが、後で {{domxref("Window.requestAnimationFrame()")}} と {{domxref("VRDisplay.requestAnimationFrame()")}} の呼び出しへの参照を格納します。これらは通常のレンダリングループと特別な WebVR レンダリングループを実行するようになりますが、後でこの 2 つの違いを説明することになります。
- 他にも、UI の右下に表示される VR ポーズデータの表示ボックスの異なる形への参照を格納する変数があります。

### VR ディスプレイへの参照の取得

コード内の主要な関数の一つは `start()` で、本体の読み込みが完了したときにこの関数を実行しています。

```js
// start
//
// 本体が読み込まれたときに呼び出され、ボールを取得するために作成されます。

document.body.onload = start;
```

まず始めに、`start()` は WebGL コンテキストを取得して、3D グラフィックを [HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) の {{htmlelement("canvas")}} 要素にレンダリングするために使用します。次に、`gl` コンテキストが利用できるかどうかを調べます。利用できる場合は、表示するシーンを設定するためにいくつかの関数を実行します。

```js
function start() {
  canvas = document.getElementById("glcanvas");

  initWebGL(canvas);      // Initialize the GL context

  // WebGL setup code here
```

次に、キャンバスをブラウザーのビューポートいっぱいに設定し、レンダリングループ (`drawScene()`) を最初に実行して、シーンをキャンバスに実際にレンダリングする処理を始めます。これは WebVR ではない、通常のレンダリングループです。

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

これで最初の WebVR 固有のコードに入ります。まず最初に、 {{domxref("Navigator.getVRDisplays")}} が存在するかどうかを調べます - これは API へのエントリーポイントであり、したがって WebVR の基本的な機能を適切に検出することができます。ブロックの最後（`else` 句の中）に、これが存在しない場合、 WebVR 1.1 がブラウザーで対応していないことを示すメッセージをログ出力していることがわかります。

```js
  // WebVR: Check to see if WebVR is supported
  if (navigator.getVRDisplays) {
    console.log('WebVR 1.1 supported');
```

`if () { }` ブロックの中で、 {{domxref("Navigator.getVRDisplays()")}} という関数を実行しています。この関数は、コンピューターに接続されているすべての VR ディスプレイ機器を格納した配列で履行されるプロミスを返します。 1 台も接続されていない場合は、配列は空になります。

```js
    // Then get the displays attached to the computer
    navigator.getVRDisplays().then((displays) => {
```

プロミスの `then()` ブロックの中で、配列の長さが 0 以上かどうかを調べます。0 以上であれば、変数 `vrDisplay` の値を配列の 0 番目のインデックスに集合させます。これで `vrDisplay` には、接続されたディスプレイを表す {{domxref("VRDisplay")}} オブジェクトが格納されました。

```js
      // If a display is available, use it to present the scene
      if (displays.length > 0) {
        vrDisplay = displays[0];
        console.log('Display found');
```

> [!NOTE]
> コンピューターに複数の VR ディスプレイを保有することはまずないでしょうし、このデモでは単純なものなので、とりあえずはこれで大丈夫でしょう。

### VR 表示の開始と停止

これで {{domxref("VRDisplay")}} オブジェクトを取得し、このオブジェクトを使用してさまざまなことを行うことができます。次に行うことは、ディスプレイへの WebGL コンテンツの表示を始めたり、止めたりするための機能を設定することです。

前のコードブロックに引き続き、今度は開始/停止ボタン (`btn`) にイベントリスナーを追加します。このボタンがクリックされたときに、ディスプレイにすでに表示されているかどうかを確認します（これはかなり間抜けな方法で、ボタン [`textContent`](/ja/docs/Web/API/Node/textContent) が何を格納しているかを調べることによって行われます）。

ディスプレイがまだ表示されていない場合、 {{domxref("VRDisplay.requestPresent()")}} メソッドを使用して、ブラウザーがディスプレイへのコンテンツの表示を始めるようにリクエストします。これは、引数として、ディスプレイに表示したいレイヤーを表す {{domxref("VRLayerInit")}} オブジェクトの配列を取ります。

現在、表示できるレイヤーの最大数は 1 で、必要なオブジェクトのメンバーは {{domxref("VRLayerInit.source")}} プロパティ(これは、そのレイヤーで表示したい {{htmlelement("canvas")}} への参照です。他の引数は、感覚的な既定値として与えられています - {{domxref("VRLayerInit.leftBounds", "leftBounds")}} および {{domxref("VRLayerInit.rightBounds", "rightBounds")}})) で、引数は \[{ source: canvas }] になっています。］

`requestPresent()` は表示が正常に始まったときに履行されるプロミスを返します。

```js
        // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
        btn.addEventListener('click', () => {
          if (btn.textContent === 'Start VR display') {
            vrDisplay.requestPresent([{ source: canvas }]).then(() => {
              console.log('Presenting to WebVR display');
```

表示リクエストが成功したので、今度は VRDisplay に表示しているコンテンツをレンダリングするための設定を始めたいと思います。最初の設定として、キャンバスで VR ディスプレイと同じ大きさに設定します。これは、{{domxref("VRDisplay.getEyeParameters()")}} を使用して両目の {{domxref("VREyeParameters")}} を取得することによって行われます。

次に、単純な計算を行って、目の {{domxref("VREyeParameters.renderWidth")}} と {{domxref("VREyeParameters.renderHeight")}} に基づいて VRDisplay 描画領域の合計幅を計算します。

```js
// Set the canvas size to the size of the vrDisplay viewport

const leftEye = vrDisplay.getEyeParameters("left");
const rightEye = vrDisplay.getEyeParameters("right");

canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
```

次に、前回 `drawScene()` 関数内の {{domxref("Window.requestAnimationFrame()")}} 呼び出しによって設定されたアニメーションのループをキャンセルし、代わりに `drawVRScene()` を呼び出すことにします。この関数は前と同じシーンをレンダリングしますが、WebVR の特別なマジックが行われます。ここでのループは WebVR の特別な {{domxref("VRDisplay.requestAnimationFrame")}} メソッドによって維持されています。

```js
// stop the normal presentation, and start the vr presentation
window.cancelAnimationFrame(normalSceneFrame);
drawVRScene();
```

最後に、ボタンテキストを更新し、次にボタンが押された時刻に VR ディスプレイへの表示を停止するようにします。

```js
              btn.textContent = 'Exit VR display';
            });
```

続いてボタンが押されたときに VR 表示を停止するために、 {{domxref("VRDisplay.exitPresent()")}} を呼び出しています。また、ボタンのテキストコンテンツを反転させ、 `requestAnimationFrame` の呼び出しを入れ替えました。ここで、 {{domxref("VRDisplay.cancelAnimationFrame")}} を使用して VR レンダリングのループを停止し、 `drawScene()` を使用して通常のレンダリングループを再び開始していることが分かります。

```js
          } else {
            vrDisplay.exitPresent();
            console.log('Stopped presenting to WebVR display');

            btn.textContent = 'Start VR display';

            // Stop the VR presentation, and start the normal presentation
            vrDisplay.cancelAnimationFrame(vrSceneFrame);
            drawScene();
          }
        });
      }
    });
  } else {
    console.log('WebVR API not supported by this browser.');
  }
}
```

プレゼンテーションを始めるには、ブラウザーに表示される立体視を確認します。

![3D 立方体の立体視画像](capture2.png)

実際にどのように立体視が行われるかは下記をご覧ください。

### なぜ WebVR は独自の requestAnimationFrame() を持つのか

これは良い質問です。なぜなら、 VR ディスプレイ内でスムーズなレンダリングを行うには、コンピューターのリフレッシュレートではなく、ディスプレイのネイティブリフレッシュレートでコンテンツをレンダリングする必要があるからです。 VR ディスプレイのリフレッシュレートは PC のリフレッシュレートよりも大きく、通常は最大で 90fps です。このレートは、コンピューターのコアリフレッシュレートとは異なる形になります。

VR ディスプレイが表示されていないときは、{{domxref("VRDisplay.requestAnimationFrame")}} は {{domxref("Window.requestAnimationFrame")}} と同じように動作するので、必要に応じて、このアプリで使用している 2 つのレンダリング ループではなく、1 つのレンダリング ループだけを使用できることに留意してください。2 つ使用したのは、VR ディスプレイが存在するかどうかに応じて異なることを行い、理解しやすいように物事を別個のものにしたかったからです。

### レンダリングと表示

この点で、 VR ハードウェアにアクセスし、ハードウェアにシーンを表示するようリクエストし、レンダリング ループを実行し始めるために必要なすべてのコードを見てきました。これで、レンダリング ループのコードを見て、 WebVR 固有の部分がどのように動作するのかを説明します。

まずすべて、レンダリングループ関数である `drawVRScene()` の定義から始めます。この内部で最初に行うことは {{domxref("VRDisplay.requestAnimationFrame()")}} を呼び出して、ループが一度呼ばれた後（これはコードの前半で VR ディスプレイに表示を開始したときに発生します）、ループを実行し続けるようにすることです。この呼び出しをグローバル変数 `vrSceneFrame` の値として設定し、VR プレゼンテーションを終了したら {{domxref("VRDisplay.cancelAnimationFrame()")}} の呼び出しでループをキャンセルできるようにしています。

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
```

次に {{domxref("VRDisplay.getFrameData()")}} を呼び出して、フレームデータを格納するために使用したい変数名を渡します。先ほど、`frameData`という変数で初期化しました。呼び出された後、この変数には次のフレームを VR 機器にレンダリングするために必要なデータが {{domxref("VRFrameData")}} オブジェクトとしてパッケージングされて格納されます。これには、左目用と右目用のシーンを正しくレンダリングするための投影およびビューマトリックス、そして方向や位置などVRディスプレイのデータを格納する現在の {{domxref("VRPose")}} オブジェクトといったものが含まれています。

これは、レンダリングされたビューが常に最新の状態になるように、フレームごとに呼び出される必要があります。

```js
// Populate frameData with the data of the next frame to display
vrDisplay.getFrameData(frameData);
```

これで、{{domxref("VRPose")}} プロパティから現在の {{domxref("VRFrameData.pose")}} を取得し、後で使用するために位置と方向を格納し、変数 `poseStatsDisplayed` が true の場合は現在の pose を pose stats ボックスに送って表示することができました。

```js
// You can get the position, orientation, etc. of the display from the current frame's pose

const curFramePose = frameData.pose;
const curPos = curFramePose.position;
const curOrient = curFramePose.orientation;
if (poseStatsDisplayed) {
  displayPoseStats(curFramePose);
}
```

これで、キャンバスには描画を始める前にクリアされ、次のフレームがはっきりと見えるようになり、前回のレンダリングフレームも見えなくなりました。

```js
// Clear the canvas before we start drawing on it.

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
```

これで、左目と右目の両方のビューをレンダリングすることができます。最初に、レンダリングに使用する投影位置と表示位置を作成する必要があります。これらは {{domxref("WebGLUniformLocation")}} オブジェクトで、 {{domxref("WebGLRenderingContext.getUniformLocation()")}} メソッドを使用して作成し、引数としてシェーダープログラムの識別子と識別名 を渡します。

```js
// WebVR: Create the required projection and view matrix locations needed
// for passing into the uniformMatrix4fv methods below

const projectionMatrixLocation = gl.getUniformLocation(
  shaderProgram,
  "projMatrix",
);
const viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");
```

次のレンダリング手順では、次のことを行います。

- 左目のビューポートサイズを {{domxref("WebGLRenderingContext.viewport")}} で指定します - これは論理的にはキャンバス幅の最初の半分と、キャンバス高さいっぱいになります。
- 左目のレンダリングに使用するビューおよび投影行列の値を指定します - これは {{domxref("WebGLRenderingContext.uniformMatrix", "WebGLRenderingContext.uniformMatrix4fv")}} メソッドで行います。このメソッドには、上で取得した位置情報と {{domxref("VRFrameData")}} オブジェクトで得た左行列の値が渡され、使用します。
- 実際のシーンをレンダリングする `drawGeometry()` 関数を実行します。前回の2つの手順で指定した内容から、左目用にのみレンダリングすることになります。

```js
// WebVR: Render the left eye's view to the left half of the canvas
gl.viewport(0, 0, canvas.width * 0.5, canvas.height);
gl.uniformMatrix4fv(
  projectionMatrixLocation,
  false,
  frameData.leftProjectionMatrix,
);
gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.leftViewMatrix);
drawGeometry();
```

これで、まったく同じことを右目で行います。

```js
// WebVR: Render the right eye's view to the right half of the canvas
gl.viewport(canvas.width * 0.5, 0, canvas.width * 0.5, canvas.height);
gl.uniformMatrix4fv(
  projectionMatrixLocation,
  false,
  frameData.rightProjectionMatrix,
);
gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.rightViewMatrix);
drawGeometry();
```

次に、 `drawGeometry()` 関数を定義します。この関数のほとんどは、 3D 立方体を描画するために必要な一般的な WebGL コードです。 `mvTranslate()` と `mvRotate()` 関数呼び出しに WebVR 固有の部分があります。これらは、現在のフレームにおける立方体の移動と回転を定義する行列を WebGL プログラムに渡すものです。

これらの値を {{domxref("VRPose")}} オブジェクトから取得した VR ディスプレイの位置 (`curPos`) と方向 (`curOrient`) によって変更していることがわかると思います。その結果、例えば頭を左に動かしたり回転させたりすると、x 位置値 (`curPos[0]`) と y 回転値 (`[curOrient[1]`) が x 移動値に追加されます。つまり、何かを見ているときに頭を左に移動/回転させると、キューブは右に移動することを意味します。

これは、VR ポーズデータを使用するためのすばやく汚い方法ですが、基本的な原理を説明しています。

```js
function drawGeometry() {
  // Establish the perspective with which we want to view the
  // scene. Our field of view is 45 degrees, with a width/height
  // ratio of 640:480, and we only want to see objects between 0.1 units
  // and 100 units away from the camera.
  perspectiveMatrix = makePerspective(45, 640.0 / 480.0, 0.1, 100.0);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  loadIdentity();

  // Now move the drawing position a bit to where we want to start
  // drawing the cube.
  mvTranslate([
    0.0 - curPos[0] * 25 + curOrient[1] * 25,
    5.0 - curPos[1] * 25 - curOrient[0] * 25,
    -15.0 - curPos[2] * 25,
  ]);

  // Save the current matrix, then rotate before we draw.
  mvPushMatrix();
  mvRotate(cubeRotation, [0.25, 0, 0.25 - curOrient[2] * 0.5]);

  // Draw the cube by binding the array buffer to the cube's vertices
  // array, setting attributes, and pushing it to GL.
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesBuffer);
  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

  // Set the texture coordinates attribute for the vertices.
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesTextureCoordBuffer);
  gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);

  // Specify the texture to map onto the faces.
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.uniform1i(gl.getUniformLocation(shaderProgram, "uSampler"), 0);

  // Draw the cube.
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);
  setMatrixUniforms();
  gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);

  // Restore the original matrix
  mvPopMatrix();
}
```

次のコードは WebVR とは何の関係もなく、各フレームで立方体の回転を更新するだけです。

```js
// Update the rotation for the next draw, if it's time to do so.
let currentTime = new Date().getTime();
if (lastCubeUpdateTime) {
  const delta = currentTime - lastCubeUpdateTime;

  cubeRotation += (30 * delta) / 1000.0;
}
lastCubeUpdateTime = currentTime;
```

レンダリングループの最後の部分で {{domxref("VRDisplay.submitFrame()")}} を呼び出します。このメソッドでは、すべての作業が完了し、 {{htmlelement("canvas")}} に表示がレンダリングされると、フレームを VR ディスプレイに送信して、そこに表示することができます。

```js
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### ポーズ（位置、向きなど）データの表示

この節では、各フレームで更新されたポーズデータを表示する `displayPoseStats()` 関数について説明します。この関数はかなり単純です。

すべて {{domxref("VRPose")}} オブジェクトから得られる 6 つの異なる形のプロパティ値を自分自身で変数に格納します。それぞれ {{jsxref("Float32Array")}} とします。

```js
function displayPoseStats(pose) {
  const pos = pose.position;
  const orient = pose.orientation;
  const linVel = pose.linearVelocity;
  const linAcc = pose.linearAcceleration;
  const angVel = pose.angularVelocity;
  const angAcc = pose.angularAcceleration;
```

そして、そのデータを情報ボックスに書き出し、フレームごとに更新しています。そうしないと値が読みにくいので、 [`toFixed()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) で各値を小数点以下 3 桁に固定しています。

データを表示する前に、線形加速度と角加速度の配列が正常に返されたかどうかを検出するために、条件式を使用していることにメモしておいてください。これらの値はまだほとんどの VR ハードウェアで報告されないので、これを行わないとコードがエラーを発生します（配列は正常に報告されないと `null` を返します）。

```js
  posStats.textContent = `Position: ` +
    `x ${pos[0].toFixed(3)}, ` +
    `y ${pos[1].toFixed(3)}, ` +
    `z ${pos[2].toFixed(3)}`;
  orientStats.textContent = `Orientation: ` +
    `x ${orient[0].toFixed(3)}, ` +
    `y ${orient[1].toFixed(3)}, ` +
    `z ${orient[2].toFixed(3)}`;
  linVelStats.textContent = `Linear velocity: ` +
    `x ${linVel[0].toFixed(3)}, ` +
    `y ${linVel[1].toFixed(3)}, ` +
    `z ${linVel[2].toFixed(3)}`;
  angVelStats.textContent = `Angular velocity: ` +
    `x ${angVel[0].toFixed(3)}, ` +
    `y ${angVel[1].toFixed(3)}, ` +
    `z ${angVel[2].toFixed(3)}`;

  if (linAcc) {
    linAccStats.textContent = `Linear acceleration: ` +
      `x ${linAcc[0].toFixed(3)}, ` +
      `y ${linAcc[1].toFixed(3)}, ` +
      `z ${linAcc[2].toFixed(3)}`;
  } else {
    linAccStats.textContent = 'Linear acceleration not reported';
  }

  if (angAcc) {
    angAccStats.textContent = `Angular acceleration: ` +
    `x ${angAcc[0].toFixed(3)}, ` +
    `y ${angAcc[1].toFixed(3)}, ` +
    `z ${angAcc[2].toFixed(3)}`;
  } else {
    angAccStats.textContent = 'Angular acceleration not reported';
  }
}
```

## WebVR イベント

WebVR の仕様では、 VR ディスプレイの状態の変化にアプリのコードが反応できるように、いくつかのイベントが発行される機能があります ([Window イベント](/ja/docs/Web/API/WebVR_API#window_events) を参照してください)。例として、

- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}} - VR ディスプレイの表示状態が変化したとき、つまり表示から非表示、または非表示から表示へと変化したときに発行されま す。
- {{domxref("Window.vrdisplayconnect_event", "vrdisplayconnect")}} - 対応する VR ディスプレイがコンピューターに接続されたときに発行されます。
- {{domxref("Window.vrdisplaydisconnect_event", "vrdisplaydisconnect")}} - 対応する VR ディスプレイがコンピュータから切断されたときに発行されます。

これらがどのように動作するのかを示すために、この単純なデモでは以下のような例を記載しています。

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

このプロパティには、イベントが発行された {{domxref("VRDisplay")}} への参照が格納され、イベントが発生した理由を人間が読み取り可能な値で示します。

これはとても有益なイベントです。ディスプレイが予期せず切断された場合を処理するために使用することができ、エラーが発生するのを阻止し、ユーザーに状況を認識させることができます。 Google の Webvr.info プレゼンテーションのデモでは、このイベントを使用して [`onVRPresentChange()` function](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) が実行され、UI コントロールが適宜更新されてキャンバスのサイズが変更されます。

## まとめ

この記事では、単純な WebVR 1.1 アプリを作成する方法について、取得するのに役立つ、ごく基本的なことを説明しました。
