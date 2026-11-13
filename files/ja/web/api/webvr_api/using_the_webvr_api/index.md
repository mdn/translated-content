---
title: WebVR API の使用
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{DefaultAPISidebar("WebVR API")}}

> [!NOTE]
> WebVR API は [WebXR API](/ja/docs/Web/API/WebXR_Device_API) に置き換えられました。 WebVR は標準として批准されることはなく、ごく少数のブラウザーでしかデフォルトで実装・有効化されず、少数の端末しか対応していませんでした。

WebVR API はウェブ開発者のツールキットに加わったすばらしい機能で、Oculus Rift や HTC Vive のような VR ディスプレイに WebGL シーンを表示できます。しかし、ウェブ向けの VR アプリはどのように開発すればよいのでしょうか？この記事では、その基本を解説します。

## 始めましょう

始めるには、次のものが必要です。

- 対応している VR ハードウェア
  - 最も安価なオプションは、モバイル端末、対応しているブラウザー、および機器マウント（例えば Google Cardboard）を使用することです。これは、専用のハードウェアほど良い使い勝手ではありませんが、強力なコンピューターや専用の VR ディスプレイを購入する必要はありません。
  - 専用のハードウェアは高価ですが、より良い使い勝手を提供します。現時点で最も WebVR と互換性のあるハードウェアは HTC VIVE と Oculus Rift です。[webvr.info](https://webvr.info/) のトップページには、利用できるハードウェアや対応しているブラウザーについて、さらに有益な情報が掲載されています。

- 専用の VR ハードウェアを使用する場合は、VR シーンのレンダリングと表示を処理できるだけの性能を持つコンピューター。必要な性能の目安として、購入する VR ハードウェアに対応するガイド (例: [VIVE READY コンピューター](https://www.vive.com/us/vive-ready/)) を確認してください。
- 対応ブラウザー。現時点では、デスクトップでもモバイルでも、最新の [Firefox Nightly](https://www.firefox.com/ja/channel/desktop/) または [Chrome](https://www.google.com/chrome/index.html) が最適です。

必要なものをすべて揃えたら、[シンプルな A-Frame デモ](https://mdn.github.io/webvr-tests/webvr/aframe-demo/)にアクセスして、セットアップで WebVR が正しく動作するかテストできます。シーンがレンダリングされるか、右下のボタンを押して VR 表示モードに入れるかを確認してください。

大量の新しい JavaScript コードを理解せずに WebVR 対応の 3D シーンをすばやく作成したい場合は、[A-Frame](https://aframe.io/) が最適です。ただし、A-Frame では WebVR API 自体の動作は学べません。そこで、次に API の動作を見ていきます。

## 簡単なデモ

WebVR API がどのように動作するのかを説明するために、次のような raw-webgl-example を勉強してみましょう。

![灰色の回転する 3D 立方体](capture1.png)

> [!NOTE]
> [このデモのソースコード](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example)は GitHub で確認でき、[ライブデモ](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example)も見ることができます。

> [!NOTE]
> ブラウザーで WebVR が動作しない場合、グラフィックカードを通して実行しているかどうかを確認する必要がある場合があります。例えば NVIDIA のカードの場合、 NVIDIA コントロールパネルが正常に設定されていれば、利用できるコンテキストメニューオプションがあります - Firefox を右クリックし、 _Run with graphics processor > High-performance NVIDIA processor_ を選んでください。

このデモでは、WebGL デモの定番である回転する 3D 立方体を扱います。これは生の [WebGL API](/ja/docs/Web/API/WebGL_API) コードを使って実装されています。基本的な JavaScript や WebGL ではなく、WebVR の部分だけを説明します。

このデモでは、次のような機能も備えています。

- VR ディスプレイでのシーン表示を開始 (および停止) するボタン。
- VR ポーズデータ、すなわちヘッドセットの位置と方向をリアルタイムで表示 (および非表示に) するボタン。

このデモのメインの [JavaScript ファイル](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js)のソースコードでは、コメントの中から "WebVR" という文字列を探すと、WebVR に特化した部分を簡単に見つけられます。

> [!NOTE]
> 基本的な JavaScript と WebGL については、 [JavaScript 学習素材](/ja/docs/Learn_web_development/Core/Scripting)、[WebGL チュートリアル](/ja/docs/Web/API/WebGL_API/Tutorial)を参照してください。

## アプリはどう動くか

それでは、コードの WebVR 部分がどのように動作するのかを見ていきましょう。

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
poseStatsSection.style.visibility = "hidden"; // 最初は非表示にする

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
- `normalSceneFrame` と `vrSceneFrame` は初期化されずに始まりますが、後で {{domxref("Window.requestAnimationFrame()")}} と {{domxref("VRDisplay.requestAnimationFrame()")}} の呼び出しが返す ID を格納します。これらの ID を使って通常のレンダリングループと WebVR 専用のレンダリングループを実行します。この 2 つの違いについては後で説明します。
- 他にも、UI の右下に表示される VR ポーズデータの表示ボックスの異なる形への参照を格納する変数があります。

### VR ディスプレイへの参照の取得

まず始めに、WebGL コンテキストを取得して、三次元グラフィックを [HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) の {{htmlelement("canvas")}} 要素にレンダリングするために使用します。次に、`gl` コンテキストが利用できるかどうかを調べます。利用できる場合は、表示するシーンを設定するためにいくつかの関数を実行します。

```js
const canvas = document.getElementById("gl-canvas");

initWebGL(canvas); // GL コンテキストを初期化する

// ここに WebGL のセットアップコードを記述する
```

次に、キャンバスをブラウザーのビューポートいっぱいに設定し、レンダリングループ (`drawScene()`) を最初に実行して、シーンをキャンバスに実際にレンダリングする処理を始めます。これは WebVR ではない、通常のレンダリングループです。

```js
// WebVR を使わずに通常どおりシーンを描画する。WebVR がなくてもブラウザーでシーンを見られるようにする

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

これで最初の WebVR 固有のコードに入ります。まず最初に、 {{domxref("Navigator.getVRDisplays")}} が存在するかどうかを調べます - これは API へのエントリーポイントであり、したがって WebVR の基本的な機能を適切に検出することができます。これが存在しない場合、 WebVR 1.1 がブラウザーで対応していないことを示すメッセージをログ出力していることがわかります。

```js
// WebVR: WebVR に対応しているか確認する
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // ...
} else {
  console.log("WebVR API not supported by this browser.");
}
```

残りのコードは `if (navigator.getVRDisplays) { }` ブロック内に記述し、WebVR が対応している場合にのみ実行されるようにします。

まず {{domxref("Navigator.getVRDisplays()")}} メソッドを呼び出します。このメソッドは、コンピューターに接続されているすべての VR ディスプレイを格納した配列で履行されるプロミスを返します。接続されているディスプレイがなければ、配列は空になります。

プロミスの `then()` ブロックの中で、配列の長さが 0 より大きいかどうかを調べます。1 つ以上あれば、配列のインデックス 0 にある値を変数 `vrDisplay` に代入します。これで `vrDisplay` には、接続されたディスプレイを表す {{domxref("VRDisplay")}} オブジェクトが格納されました。

```js
// コンピューターに接続されているディスプレイを取得する
navigator.getVRDisplays().then((displays) => {
  // ディスプレイがあれば、シーンの表示に使用する
  if (displays.length > 0) {
    vrDisplay = displays[0];
    console.log("Display found");
    // ...
  }
});
```

残りのコードは `if (displays.length > 0) { }` ブロック内に記述します。これにより、利用できる VR ディスプレイが少なくとも 1 つある場合にのみ、そのコードが実行されるようになります。

> [!NOTE]
> コンピューターに複数の VR ディスプレイを保有することはまずないでしょうし、このデモでは単純なものなので、とりあえずはこれで大丈夫でしょう。

### VR 表示の開始と停止

これで {{domxref("VRDisplay")}} オブジェクトを取得し、このオブジェクトを使用してさまざまなことを行うことができます。次に行うことは、ディスプレイへの WebGL コンテンツの表示を始めたり、止めたりするための機能を設定することです。

前のコードブロックに引き続き、今度は開始/停止ボタン (`btn`) にイベントリスナーを追加します。このボタンがクリックされたときに、ディスプレイにすでに表示されているかどうかを確認します（これはかなり間抜けな方法で、ボタン [`textContent`](/ja/docs/Web/API/Node/textContent) が何を格納しているかを調べることによって行われます）。

ディスプレイがまだ表示されていない場合、 {{domxref("VRDisplay.requestPresent()")}} メソッドを使用して、ブラウザーがディスプレイへのコンテンツの表示を始めるようにリクエストします。これは、引数として、ディスプレイに表示したいレイヤーを表す {{domxref("VRLayerInit")}} オブジェクトの配列を取ります。

現在、表示できるレイヤーの最大数は 1 で、必須のオブジェクトメンバーは {{domxref("VRLayerInit.source")}} プロパティだけです。これは、そのレイヤーに表示する {{htmlelement("canvas")}} への参照です。他のメンバーには妥当なデフォルト値が設定されます。{{domxref("VRLayerInit.leftBounds", "leftBounds")}} と {{domxref("VRLayerInit.rightBounds", "rightBounds")}} を参照してください。したがって、引数は `[{ source: canvas }]` です。

`requestPresent()` は表示が正常に始まったときに履行されるプロミスを返します。

```js
// ボタンのクリック時に表示を開始する。ユーザーの操作に応じてのみ呼び出せる
btn.addEventListener("click", () => {
  if (btn.textContent === "Start VR display") {
    vrDisplay.requestPresent([{ source: canvas }]).then(() => {
      console.log("Presenting to WebVR display");
      // ...
    });
  } else {
    // ...
  }
});
```

表示リクエストが成功したので、今度は VRDisplay に表示しているコンテンツをレンダリングするための設定を始めたいと思います。最初の設定として、キャンバスで VR ディスプレイと同じ大きさに設定します。これは、{{domxref("VRDisplay.getEyeParameters()")}} を使用して両目の {{domxref("VREyeParameters")}} を取得することによって行われます。

次に、単純な計算を行って、目の {{domxref("VREyeParameters.renderWidth")}} と {{domxref("VREyeParameters.renderHeight")}} に基づいて VRDisplay 描画領域の合計幅を計算します。

```js
vrDisplay.requestPresent([{ source: canvas }]).then(() => {
  // ...
  // キャンバスのサイズを vrDisplay のビューポートに合わせる

  const leftEye = vrDisplay.getEyeParameters("left");
  const rightEye = vrDisplay.getEyeParameters("right");

  canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
  canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
  // ...
});
```

次に、前回 `drawScene()` 関数内の {{domxref("Window.requestAnimationFrame()")}} 呼び出しによって設定された[アニメーションのループをキャンセル](/ja/docs/Web/API/Window/cancelAnimationFrame)し、代わりに `drawVRScene()` を呼び出すことにします。この関数は前と同じシーンをレンダリングしますが、WebVR の特別なマジックが行われます。ここでのループは WebVR の特別な {{domxref("VRDisplay.requestAnimationFrame")}} メソッドによって維持されています。

```js
vrDisplay.requestPresent([{ source: canvas }]).then(() => {
  // ...
  // 通常の表示を停止し、VR 表示を開始する
  window.cancelAnimationFrame(normalSceneFrame);
  drawVRScene();
  // ...
});
```

最後に、ボタンテキストを更新し、次にボタンが押された時刻に VR ディスプレイへの表示を停止するようにします。

```js
vrDisplay.requestPresent([{ source: canvas }]).then(() => {
  // ...
  btn.textContent = "Exit VR display";
});
```

続いてボタンが押されたときに VR 表示を停止するために、 {{domxref("VRDisplay.exitPresent()")}} を呼び出しています。また、ボタンのテキストコンテンツを反転させ、 `requestAnimationFrame` の呼び出しを入れ替えました。ここで、 {{domxref("VRDisplay.cancelAnimationFrame")}} を使用して VR レンダリングのループを停止し、 `drawScene()` を使用して通常のレンダリングループを再び開始していることが分かります。

```js
if (btn.textContent === "Start VR display") {
  // ...
} else {
  vrDisplay.exitPresent();
  console.log("Stopped presenting to WebVR display");

  btn.textContent = "Start VR display";

  // VR 表示を停止し、通常の表示を開始する
  vrDisplay.cancelAnimationFrame(vrSceneFrame);
  drawScene();
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
  // WebVR: アニメーションの次のフレームを要求する
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
  // ...
}
```

次に {{domxref("VRDisplay.getFrameData()")}} を呼び出して、フレームデータを格納するために使用したい変数名を渡します。先ほど、`frameData`という変数で初期化しました。呼び出された後、この変数には次のフレームを VR 機器にレンダリングするために必要なデータが {{domxref("VRFrameData")}} オブジェクトとしてパッケージングされて格納されます。これには、左目用と右目用のシーンを正しくレンダリングするための投影およびビューマトリックス、そして方向や位置などVRディスプレイのデータを格納する現在の {{domxref("VRPose")}} オブジェクトといったものが含まれています。

これは、レンダリングされたビューが常に最新の状態になるように、フレームごとに呼び出される必要があります。

```js
function drawVRScene() {
  // ...
  // 表示する次のフレームのデータを frameData に格納する
  vrDisplay.getFrameData(frameData);
  // ...
}
```

次に、現在の {{domxref("VRFrameData.pose")}} ({{domxref("VRPose")}} オブジェクト) を取得し、後で使うために位置と方向を格納します。変数 `poseStatsDisplayed` が true の場合は、現在のポーズをポーズデータ表示ボックスに表示します。

```js
function drawVRScene() {
  // ...
  // 現在のフレームのポーズからディスプレイの位置や向きなどを取得できる

  const curFramePose = frameData.pose;
  const curPos = curFramePose.position;
  const curOrient = curFramePose.orientation;
  if (poseStatsDisplayed) {
    displayPoseStats(curFramePose);
  }
  // ...
}
```

描画を始める前にキャンバスをクリアして、次のフレームをはっきり表示し、前のフレームが残らないようにします。

```js
function drawVRScene() {
  // ...
  // 描画を始める前にキャンバスをクリアする

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  // ...
}
```

これで左目と右目の両方のビューをレンダリングできます。まず、レンダリングに使う投影行列とビュー行列のロケーションを作成します。これらは {{domxref("WebGLUniformLocation")}} オブジェクトで、{{domxref("WebGLRenderingContext.getUniformLocation()")}} メソッドにシェーダープログラムと変数名を渡して作成します。

```js
function drawVRScene() {
  // ...
  // WebVR: 下の uniformMatrix4fv メソッドに渡す投影行列とビュー行列のロケーションを作成する

  const projectionMatrixLocation = gl.getUniformLocation(
    shaderProgram,
    "projMatrix",
  );
  const viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");
  // ...
}
```

次のレンダリング手順では、次のことを行います。

- 左目のビューポートサイズを {{domxref("WebGLRenderingContext.viewport")}} で指定します - これは論理的にはキャンバス幅の最初の半分と、キャンバス高さいっぱいになります。
- 左目のレンダリングに使用するビューおよび投影行列の値を指定します - これは {{domxref("WebGLRenderingContext.uniformMatrix", "WebGLRenderingContext.uniformMatrix4fv")}} メソッドで行います。このメソッドには、上で取得した位置情報と {{domxref("VRFrameData")}} オブジェクトで得た左行列の値が渡され、使用します。
- 実際のシーンをレンダリングする `drawGeometry()` 関数を実行します。前回の2つの手順で指定した内容から、左目用にのみレンダリングすることになります。

```js
function drawVRScene() {
  // ...
  // WebVR: 左目のビューをキャンバスの左半分に描画する
  gl.viewport(0, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(
    projectionMatrixLocation,
    false,
    frameData.leftProjectionMatrix,
  );
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.leftViewMatrix);
  drawGeometry();
  // ...
}
```

これで、まったく同じことを右目で行います。

```js
function drawVRScene() {
  // ...
  // WebVR: 右目のビューをキャンバスの右半分に描画する
  gl.viewport(canvas.width * 0.5, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(
    projectionMatrixLocation,
    false,
    frameData.rightProjectionMatrix,
  );
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.rightViewMatrix);
  drawGeometry();
  // ...
}
```

次に、 `drawGeometry()` 関数を定義します。この関数のほとんどは、 3D 立方体を描画するために必要な一般的な WebGL コードです。 `mvTranslate()` と `mvRotate()` 関数呼び出しに WebVR 固有の部分があります。これらは、現在のフレームにおける立方体の移動と回転を定義する行列を WebGL プログラムに渡すものです。

これらの値は、{{domxref("VRPose")}} オブジェクトから取得した VR ディスプレイの位置 (`curPos`) と方向 (`curOrient`) に応じて変化します。例えば、頭を左に動かしたり回転させたりすると、x 位置の値 (`curPos[0]`) と y 回転の値 (`curOrient[1]`) が x 移動の値に加算されます。つまり、何かを見ているときに頭を左に動かしたり回転させたりすると、期待どおりキューブは右に移動します。

これは、VR ポーズデータを使用するためのすばやく汚い方法ですが、基本的な原理を説明しています。

```js
function drawGeometry() {
  // シーンを見るための遠近感を設定する。
  // 視野角は 45 度、幅と高さの比率は 640:480 とし、
  // カメラから 0.1 から 100 単位の範囲にあるオブジェクトだけを表示する。
  perspectiveMatrix = makePerspective(45, 640.0 / 480.0, 0.1, 100.0);

  // 描画位置を単位行列にリセットし、シーンの中心を基準にする。
  loadIdentity();

  // 立方体の描画を始めたい位置まで、描画位置を少し移動する。
  mvTranslate([
    0.0 - curPos[0] * 25 + curOrient[1] * 25,
    5.0 - curPos[1] * 25 - curOrient[0] * 25,
    -15.0 - curPos[2] * 25,
  ]);

  // 現在の行列を保存し、描画前に回転させる。
  mvPushMatrix();
  mvRotate(cubeRotation, [0.25, 0, 0.25 - curOrient[2] * 0.5]);

  // 配列バッファーを立方体の頂点配列にバインドし、
  // 属性を設定して GL に渡し、立方体を描画する。
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesBuffer);
  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

  // 頂点のテクスチャー座標属性を設定する。
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesTextureCoordBuffer);
  gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);

  // 面にマッピングするテクスチャーを指定する。
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.uniform1i(gl.getUniformLocation(shaderProgram, "uSampler"), 0);

  // 立方体を描画する。
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);
  setMatrixUniforms();
  gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);

  // 元の行列に戻す
  mvPopMatrix();
}
```

次のコードは WebVR とは何の関係もなく、各フレームで立方体の回転を更新するだけです。

```js
function drawVRScene() {
  // ...
  // 必要であれば、次の描画に向けて回転を更新する。
  let currentTime = new Date().getTime();
  if (lastCubeUpdateTime) {
    const delta = currentTime - lastCubeUpdateTime;

    cubeRotation += (30 * delta) / 1000.0;
  }
  lastCubeUpdateTime = currentTime;
  // ...
}
```

レンダリングループの最後の部分で {{domxref("VRDisplay.submitFrame()")}} を呼び出します。このメソッドでは、すべての作業が完了し、 {{htmlelement("canvas")}} に表示がレンダリングされると、フレームを VR ディスプレイに送信して、そこに表示することができます。

```js
function drawVRScene() {
  // ...
  // WebVR: 描画したフレームを VR ディスプレイに表示する準備ができたことを示す
  vrDisplay.submitFrame();
}
```

### ポーズ（位置、向きなど）データの表示

この節では、各フレームで更新されるポーズデータを表示する `displayPoseStats()` 関数について説明します。この関数はかなり単純です。

まず、{{domxref("VRPose")}} オブジェクトから取得できる 6 種類のプロパティ値を、それぞれ個別の変数に格納します。各値は {{jsxref("Float32Array")}} です。

```js
function displayPoseStats(pose) {
  const pos = pose.position;
  const orient = pose.orientation;
  const linVel = pose.linearVelocity;
  const linAcc = pose.linearAcceleration;
  const angVel = pose.angularVelocity;
  const angAcc = pose.angularAcceleration;
  // ...
}
```

そして、そのデータを情報ボックスに書き出し、フレームごとに更新しています。そうしないと値が読みにくいので、 [`toFixed()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) で各値を小数点以下 3 桁に固定しています。

データを表示する前に、線形加速度と角加速度の配列が返されたかどうかを条件式で確認している点に注意してください。これらの値はまだほとんどの VR ハードウェアで報告されません。この確認をしないと、配列が正常に報告されず `null` を返した場合にコードでエラーが発生します。

```js
function displayPoseStats(pose) {
  // ...
  posStats.textContent =
    `Position: ` +
    `x ${pos[0].toFixed(3)}, ` +
    `y ${pos[1].toFixed(3)}, ` +
    `z ${pos[2].toFixed(3)}`;
  orientStats.textContent =
    `Orientation: ` +
    `x ${orient[0].toFixed(3)}, ` +
    `y ${orient[1].toFixed(3)}, ` +
    `z ${orient[2].toFixed(3)}`;
  linVelStats.textContent =
    `Linear velocity: ` +
    `x ${linVel[0].toFixed(3)}, ` +
    `y ${linVel[1].toFixed(3)}, ` +
    `z ${linVel[2].toFixed(3)}`;
  angVelStats.textContent =
    `Angular velocity: ` +
    `x ${angVel[0].toFixed(3)}, ` +
    `y ${angVel[1].toFixed(3)}, ` +
    `z ${angVel[2].toFixed(3)}`;

  if (linAcc) {
    linAccStats.textContent =
      `Linear acceleration: ` +
      `x ${linAcc[0].toFixed(3)}, ` +
      `y ${linAcc[1].toFixed(3)}, ` +
      `z ${linAcc[2].toFixed(3)}`;
  } else {
    linAccStats.textContent = "Linear acceleration not reported";
  }

  if (angAcc) {
    angAccStats.textContent =
      `Angular acceleration: ` +
      `x ${angAcc[0].toFixed(3)}, ` +
      `y ${angAcc[1].toFixed(3)}, ` +
      `z ${angAcc[2].toFixed(3)}`;
  } else {
    angAccStats.textContent = "Angular acceleration not reported";
  }
}
```

## WebVR イベント

WebVR の仕様では、VR ディスプレイの状態の変化にアプリのコードが反応できるよう、いくつかのイベントが発行されます ([Window イベント](/ja/docs/Web/API/WebVR_API#window_events)を参照してください)。例えば、次のイベントがあります。

- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}} - VR ディスプレイの表示状態が変化したとき、つまり表示中から非表示中、またはその逆に変化したときに発行されます。
- {{domxref("Window.vrdisplayconnect_event", "vrdisplayconnect")}} - 対応する VR ディスプレイがコンピューターに接続されたときに発行されます。
- {{domxref("Window.vrdisplaydisconnect_event", "vrdisplaydisconnect")}} - 対応する VR ディスプレイがコンピューターから切断されたときに発行されます。

これらの動作を示すため、このシンプルなデモには次の例があります。

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

ご覧のとおり、{{domxref("VRDisplayEvent")}} オブジェクトには便利なプロパティが 2 つあります。{{domxref("VRDisplayEvent.display")}} は、イベント発生の原因となった {{domxref("VRDisplay")}} への参照です。{{domxref("VRDisplayEvent.reason")}} には、イベントが発生した理由が人間に読み取れる形で含まれます。

このイベントは、ディスプレイが予期せず切断された場合の処理に役立ちます。エラーの発生を防ぎ、ユーザーに状況を知らせることができます。Google の WebVR.info プレゼンテーションデモでは、このイベントによって [`onVRPresentChange()` 関数](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174)を実行し、UI コントロールを適切に更新してキャンバスのサイズを変更します。

## まとめ

この記事では、WebVR 1.1 を使ったシンプルなアプリの作成を始めるための基本を説明しました。
