---
title: "移動、向き、モーション: WebXR の例"
slug: Web/API/WebXR_Device_API/Movement_and_motion
---

{{DefaultAPISidebar("WebXR Device API")}}

この記事では、[WebXR](/ja/docs/Web/API/WebXR_Device_API) チュートリアルシリーズの以前の記事で紹介した情報を利用して、ユーザーが VR ヘッドセット、キーボード、マウスを使用して自由に移動できる回転立方体をアニメーション化する例を作成します。 これは、3D グラフィックスと VR の幾何学がどのように機能するかについての理解を深めるのに役立つだけでなく、XR レンダリング中に使用される関数とデータがどのように連携するかを確実に理解するのに役立ちます。

**この例の実際のスクリーンショット**
![ユーザーが動きまわることができるテクスチャー付き立方体を示す例のスクリーンショット](xr-sample.png)

この例のコアである、回転するテクスチャー付きで照明付きの立方体は、WebGL チュートリアルシリーズから抜粋したものです。 つまり、シリーズの最後から 2 番目の記事の [WebGL でのライティング](/ja/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)をカバーします。

この記事と付随するソースコードを読むときは、3D ヘッドセットのディスプレイが半分に分割された単一の画面であることを覚えておくと役に立ちます。 画面の左半分は左目でのみ表示され、右半分は右目でのみ表示されます。 没入型プレゼンテーションのためにシーンをレンダリングするには、各目の視点から 1 回ずつ、シーンを複数回レンダリングする必要があります。

左目をレンダリングする場合、{{domxref("XRWebGLLayer")}} の {{domxref("XRWebGLLayer.viewport", "viewport")}} は、描画を描画面の左半分に制限するように構成されています。 逆に、右目をレンダリングする場合、ビューポートは描画を描画面の右半分に制限するように設定されます。

この例では、XR デバイスを使用して没入型ディスプレイとしてシーンを提示する場合でも、画面上のキャンバスに表示することでこれを示しています。

## 依存関係

この例では、[`three.js`](https://threejs.org/) などの 3D グラフィックフレームワークに依存しませんが、行列演算には過去に他の例で使用している [`glMatrix`](http://glmatrix.net/) ライブラリーを使用します。 この例では、WebXR API の仕様を担当するチームである Immersive Web Working Group によって管理されている [WebXR ポリフィル](https://github.com/immersive-web/webxr-polyfill/)もインポートします。 このポリフィルをインポートすることで、WebXR がまだ実装されていない多くのブラウザーでこの例を機能させることができ、WebXR 仕様のまだ実験的な日々の間に発生する仕様からの一時的な逸脱を滑らかにします。

## オプション

この例には、ブラウザーにロードする前に定数の値を調整することで構成できるいくつかのオプションがあります。 コードは次のようになります。

```js
const xRotationDegreesPerSecond = 25;
const yRotationDegreesPerSecond = 15;
const zRotationDegreesPerSecond = 35;
const enableRotation = true;
const allowMouseRotation = true;
const allowKeyboardMotion = true;
const enableForcePolyfill = false;
//const SESSION_TYPE = "immersive-vr";
const SESSION_TYPE = "inline";
const MOUSE_SPEED = 0.003;
```

- `xRotationDegreesPerSecond`
  - : X 軸を中心に回転させる 1 秒あたりの度数。
- `yRotationDegreesPerSecond`
  - : Y 軸を中心に回転させる 1 秒あたりの度数。
- `zRotationDegreesPerSecond`
  - : Z 軸を中心に回転させる 1 秒あたりの度数。
- `enableRotation`
  - : 立方体の回転を有効にするかどうかを示すブール値。
- `allowMouseRotation`
  - : `true` の場合、マウスを使用して視野角をピッチ（上下）したりヨー（左右）したりできます。
- `allowKeyboardMotion`
  - : `true` の場合、W、A、S、D キーはビューアーを上、左、下、右に移動し、上下の矢印キーは前後に移動します。 `false` の場合、ビューへの XR デバイスの変更のみを許可します。
- `enableForcePolyfill`
  - : このブール値が `true` の場合、ブラウザーが実際に WebXR をサポートしている場合でも、この例では WebXR ポリフィルの使用を試みます。 `false` の場合、ブラウザーが {{domxref("navigator.xr")}} を実装していない場合にのみポリフィルを使用します。
- `SESSION_TYPE`
  - : 作成する XR セッションのタイプ: ドキュメントのコンテキストで提示するインラインセッションの `inline` と、シーンを没入型 VR ヘッドセットに提示する `immersive-vr`。
- `MOUSE_SPEED`
  - : ピッチとヨーの制御に使用するマウスからの入力をスケーリングするために使用される乗数。
- `MOVE_DISTANCE`
  - : シーン内でビューアーを移動するために使用するキーのいずれかに応答して移動する距離。

> **メモ:** この例では、`immersive-vr` モードを使用している場合でも、常に画面にレンダリングされる内容が表示されます。 これにより、2 つのモード間のレンダリングの違いを比較でき、ヘッドセットがない場合でも没入型モードからの出力を確認できます。

## セットアップおよびユーティリティ関数

次に、WebGL および WebXR 固有の情報を格納するために使用されるものから始めて、アプリケーション全体で使用される変数と定数を宣言します。

```js
let polyfill = null;
let xrSession = null;
let xrInputSources = null;
let xrReferenceSpace = null;
let xrButton = null;
let gl = null;
let animationFrameRequestID = 0;
let shaderProgram = null;
let programInfo = null;
let buffers = null;
let texture = null;
let mouseYaw = 0;
let mousePitch = 0;
```

この後に一連の定数が続きます。 これには主に、シーンのレンダリング中に使用されるさまざまなベクトルと行列が含まれます。

```js
const viewerStartPosition = vec3.fromValues(0, 0, -10);
const viewerStartOrientation = vec3.fromValues(0, 0, 1.0);

const cubeOrientation = vec3.create();
const cubeMatrix = mat4.create();
const mouseMatrix = mat4.create();
const inverseOrientation = quat.create();
const RADIANS_PER_DEGREE = Math.PI / 180.0;
```

最初の 2 つ（`viewerStartPosition` と `viewerStartOrientation`）は、空間の中心に対してビューアーが配置される場所と、最初に見る方向を示します。 `cubeOrientation` は立方体の現在の方向を格納し、`cubeMatrix` と `mouseMatrix` はシーンのレンダリング中に使用される行列のストレージです。 `inverseOrientation` は、レンダリングされるフレーム内のオブジェクトの参照空間に適用する回転を表すために使用されるクォータニオンです。

`RADIANS_PER_DEGREEE` は、角度をラジアンに変換するために度単位の角度を乗算する値です。

宣言された最後の 4 つの変数は、ユーザーに行列を見せるための出力先の {{HTMLElement("div")}} 要素を参照するためのストレージです。

### エラーのロギング

`LogGLError()` と呼ばれる関数は、WebGL 関数の実行中に発生したエラーのログ情報を出力するための簡単にカスタマイズされた方法を提供するために実装されています。

```js
function LogGLError(where) {
  let err = gl.getError();
  if (err) {
    console.error(`WebGL error returned by ${where}: ${err}`);
  }
}
```

これは、プログラムのどの部分がエラーを生成したかを示すために使用される文字列 `where` を唯一の入力として受け取ります。 これは、同様のエラーが複数の状況で発生する可能性があるためです。

### 頂点シェーダーとフラグメントシェーダー

頂点シェーダーとフラグメントシェーダーはどちらも、[WebGL でのライティング](/ja/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)の記事の例で使用されているものとまったく同じです。 ここで使用されている基本的なシェーダーの [GLSL](/ja/docs/Web/API/WebGL_API/By_example/Hello_GLSL) ソースコードに興味がある場合は、[それを参照](/ja/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL#Update_the_shaders)してください。

頂点シェーダーは、各頂点の初期位置と、ビューアーの現在の位置と方向をシミュレートするためにそれらを変換するために適用する必要のある変換を指定して、各頂点の位置を計算するとだけ言っておきましょう。 フラグメントシェーダーは、テクスチャーで見つかった値から必要に応じて補間し、照明効果を適用して各頂点の色を返します。

## WebXR の起動と停止

スクリプトを最初にロードするときに、{{domxref("Window.load_event", "load")}} イベントのハンドラーをインストールして、初期化を実行できるようにします。

```js
window.addEventListener("load", onLoad);

function onLoad() {
  xrButton = document.querySelector("#enter-xr");
  xrButton.addEventListener("click", onXRButtonClick);

  projectionMatrixOut = document.querySelector("#projection-matrix div");
  modelMatrixOut = document.querySelector("#model-view-matrix div");
  cameraMatrixOut = document.querySelector("#camera-matrix div");
  mouseMatrixOut = document.querySelector("#mouse-matrix div");

  if (!navigator.xr || enableForcePolyfill) {
    console.log("Using the polyfill");
    polyfill = new WebXRPolyfill();
  }
  setupXRButton();
}
```

`load` イベントハンドラーは、WebXR のオンとオフを切り替えるボタンへの参照を `xrButton` に取得し、{{domxref("Element.click_event", "click")}} イベントのハンドラーを追加します。 次に、4 つの {{HTMLElement("div")}} ブロックへの参照を取得します。 このブロックには、シーンの実行中に情報提供の目的で、手がかりとなる行列それぞれの現在の内容が出力されます。

次に、{{domxref("navigator.xr")}} が定義されているかどうかを確認します。 そうでない場合、および/または `enableForcePolyfill` 構成定数が `true` に設定されている場合は、`WebXRPolyfill` クラスをインスタンス化して WebXR ポリフィルをインストールします。

### 起動と停止の UI の処理

次に、`setupXRButton()` 関数を呼び出します。 この関数は、`SESSION_TYPE` 定数で指定されたセッションタイプに対する WebXR サポートの有無により、必要に応じて "Enter/Exit WebXR" ボタンを有効または無効にするための構成を処理します。

```js
function setupXRButton() {
  if (navigator.xr.isSessionSupported) {
    navigator.xr.isSessionSupported(SESSION_TYPE)
    .then((supported) => {
      xrButton.disabled = !supported;
    });
  } else {
    navigator.xr.supportsSession(SESSION_TYPE)
    .then(() => {
      xrButton.disabled = false;
    })
    .catch(() => {
      xrButton.disabled = true;
    });
  }
}
```

ボタンのラベルは、実際に WebXR セッションの開始と停止を処理するコードで調整されます。 以下にそれを示します。

WebXR セッションは、ボタンの {{domxref("Element.click_event", "click")}} イベントのハンドラーによってオンとオフが切り替えられ、ボタンのラベルは、"Enter WebXR" または "Exit WebXR" に適切に設定されます。 これは、`onXRButtonClick()` イベントハンドラーによって行われます。

```js
async function onXRButtonClick(event) {
  if (!xrSession) {
    navigator.xr.requestSession(SESSION_TYPE)
    .then(sessionStarted);
  } else {
    await xrSession.end();

    if (xrSession) {
      sessionEnded();
    }
  }
}
```

これは、`xrSession` の値を調べて、進行中の WebXR セッションを表す {{domxref("XRSession")}} オブジェクトがすでにあるかどうかを確認することから始まります。 ない場合は、クリックは WebXR モードを有効にする要求を表しているので、{{domxref("XRSystem.requestSession", "requestSession()")}} を呼び出して、目的の WebXR セッションタイプの WebXR セッションを要求し、次に `sessionStarted()` を呼び出して、その WebXR セッションでシーンの実行を開始します。

一方、進行中のセッションがすでにある場合は、その {{domxref("XRSession.end", "end()")}} メソッドを呼び出してセッションを停止します。

このコードで最後に行うことは、`xrSession` がまだ非 `NULL` かどうかを確認することです。 そうである場合は、{{domxref("XRSession.end_event", "end")}} イベントのハンドラーである `sessionEnded()` を呼び出します。 このコードは必要ないはずですが、少なくとも一部のブラウザーが `end` イベントを正しく発火しないという問題があるようです。 イベントハンドラーを直接実行することにより、この状況で終了プロセスを手動で完了します。

### WebXR セッションの開始

`sessionStarted()` 関数は、イベントハンドラーを設定し、頂点シェーダーとフラグメントシェーダーの GLSL コードをコンパイルしてインストールし、レンダリングループを開始する前に WebGL レイヤーを WebXR セッションにアタッチすることにより、実際のセッションの設定と開始を処理します。 これは、{{domxref("XRSystem.requestSession", "requestSession()")}} によって返される promise のハンドラーとして呼び出されます。

```js
function sessionStarted(session) {
  let refSpaceType;

  xrSession = session;
  xrButton.innerText = "Exit WebXR";
  xrSession.addEventListener("end", sessionEnded);

  let canvas = document.querySelector("canvas");
  gl = canvas.getContext("webgl", { xrCompatible: true });

  if (allowMouseRotation) {
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("contextmenu", (event) => { event.preventDefault(); });
  }

  if (allowKeyboardMotion) {
    document.addEventListener("keydown", handleKeyDown);
  }

  shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexNormal: gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      normalMatrix: gl.getUniformLocation(shaderProgram, 'uNormalMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler')
    },
  };

  buffers = initBuffers(gl);
  texture = loadTexture(gl, 'https://cdn.glitch.com/a9381af1-18a9-495e-ad01-afddfd15d000%2Ffirefox-logo-solid.png?v=1575659351244');

  xrSession.updateRenderState({
    baseLayer: new XRWebGLLayer(xrSession, gl)
  });

  if (SESSION_TYPE == "immersive-vr") {
    refSpaceType = "local";
  } else {
    refSpaceType = "viewer";
  }

  mat4.fromTranslation(cubeMatrix, viewerStartPosition);

  vec3.copy(cubeOrientation, viewerStartOrientation);

  xrSession.requestReferenceSpace(refSpaceType)
  .then((refSpace) => {
    xrReferenceSpace = refSpace.getOffsetReferenceSpace(
          new XRRigidTransform(viewerStartPosition, cubeOrientation));
    animationFrameRequestID = xrSession.requestAnimationFrame(drawFrame);
  });

  return xrSession;
}
```

新しく作成した {{domxref("XRSession")}} オブジェクトを `xrSession` に保存した後、ボタンのラベルを "Exit WebXR" に設定して、シーンの開始後の新しい機能を示します。 また、{{domxref("XRSession.end_event", "end")}} イベントのハンドラーをインストールしているため、`XRSession` の終了が通知されます。

次に、HTML にある {{HTMLElement("canvas")}} への参照とその WebGL レンダリングコンテキストを取得します。 これは、シーンの描画面として使用されます。 `xrCompatible` プロパティは、要素で {{domxref("HTMLCanvasElement.getContext", "getContext()")}} を呼び出して、キャンバスの WebGL レンダリングコンテキストにアクセスするときに要求されます。 これにより、コンテキストが WebXR レンダリングのソースとして使用できるように構成されます。

次に、{{domxref("Element.mousemove_event", "mousemove")}} と {{domxref("Element.contextmenu_event","contextmenu")}} のイベントハンドラーを追加しますが、`allowMouseRotation` 定数が `true` の場合に限ります。 `mousemove` ハンドラーは、マウスの動きに基づいてビューのピッチとヨーを処理します。 「マウスルック」機能はマウスの右ボタンを押している間のみ機能し、マウスの右クリックでコンテキストメニューがトリガーされるため、`contextmenu` イベントのハンドラーをキャンバスに追加して、ユーザーが最初にマウスのドラッグを開始したときにコンテキストメニューが表示されないようにします。

次に、シェーダープログラムをコンパイルし、その変数への参照を取得し、各位置の配列を格納するバッファーを初期化し、各頂点の位置テーブルへのインデックス、頂点法線、各頂点のテクスチャー座標を格納します。 これはすべて WebGL サンプルコードから直接取得されているため、[WebGL でのライティング](/ja/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)とその前の記事の [WebGL を用いた 3D オブジェクトの作成](/ja/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL)および [WebGL でのテクスチャーの使用](/ja/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)を参照してください。 次に、`loadTexture()` 関数を呼び出して、テクスチャーファイルをロードします。

レンダリング構造とデータがロードされたので、`XRSession` を実行する準備を開始します。 `baseLayer` を新しい {{domxref("XRWebGLLayer")}} に設定して {{domxref("XRSession.updateRenderState()")}} を呼び出すことにより、セッションを WebGL レイヤーに接続して、レンダリング面として何を使用するかを認識します。

次に、`SESSION_TYPE` 定数の値を調べて、WebXR コンテキストを没入型にするかインラインにするかを確認します。 没入型セッションは `local` 参照空間を使用し、インラインセッションは `viewer` 参照空間を使用します。

`glMatrix` ライブラリーの 4x4 行列用の `fromTranslation()` 関数は、`viewerStartPosition` 定数で指定されたビューアーの開始位置を変換行列 `cubeMatrix` に変換するために使用します。 ビューアーの開始方向である `viewerStartOrientation` 定数は、`cubeOrientation` にコピーして、時間の経過に伴う立方体の回転を追跡するために使用します。

`sessionStarted()` は、セッションの {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} メソッドを呼び出して、オブジェクトを作成する空間を記述する参照空間オブジェクトを取得することで仕上げます。 返された promise が {{domxref("XRReferenceSpace")}} オブジェクトに解決されると、その {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace")}} メソッドを呼び出して、オブジェクトの座標系を表す参照空間オブジェクトを取得します。 新しい空間の原点は、`viewerStartPosition` で指定された世界座標にあり、その方向は `cubeOrientation` に設定されています。 次に、{{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} メソッドを呼び出して、フレームを描画する準備ができたことをセッションに通知します。 後でリクエストをキャンセルする必要がある場合に備えて、返されたリクエスト ID を記録します。

最後に、`sessionStarted()` は、ユーザーの WebXR セッションを表す {{domxref("XRSession")}} を返します。

### セッション終了時

（ユーザーによる終了か、{{domxref("XRSession.end()")}} の呼び出しで）WebXR セッションが終了すると、{{domxref("XRSession.end_event", "end")}} イベントが送信されます。 これを、`sessionEnded()` という関数を呼び出すように設定しました。

```js
function sessionEnded() {
  xrButton.innerText = "Enter WebXR";

  if (animationFrameRequestID) {
    xrSession.cancelAnimationFrame(animationFrameRequestID);
    animationFrameRequestID = 0;
  }
  xrSession = null;
}
```

プログラムで WebXR セッションを終了したい場合は、`sessionEnded()` を直接呼び出すこともできます。 いずれの場合も、ボタンのラベルを更新して、クリックによってセッションが開始されることを示します。 その後、アニメーションフレームに対する保留中のリクエストがある場合は、{{domxref("XRSession.cancelAnimationFrame", "cancelAnimationFrame")}} を呼び出してキャンセルします。

それが完了すると、`xrSession` の値を `NULL` に変更して、セッションが終了したことを示します。

## コントロールの実装

それでは、キーボードとマウスのイベントを WebXR シナリオでアバターを制御するために使用できるものに変換するコードを見てみましょう。

### キーボードを使用した移動

空間を移動するための入力を備えた WebXR デバイスがなくても、ユーザーが 3D 世界を移動できるようにするために、{{domxref("Element.keydown_event", "keydown")}} のハンドラーである `handleKeyDown()` は、押されたキーに基づいてオブジェクトの原点からのオフセットを更新することで応答します。

```js
function handleKeyDown(event) {
  switch(event.key) {
    case "w":
    case "W":
      verticalDistance -= MOVE_DISTANCE;
      break;
    case "s":
    case "S":
      verticalDistance += MOVE_DISTANCE;
      break;
    case "a":
    case "A":
      transverseDistance += MOVE_DISTANCE;
      break;
    case "d":
    case "D":
      transverseDistance -= MOVE_DISTANCE;
      break;
    case "ArrowUp":
      axialDistance += MOVE_DISTANCE;
      break;
    case "ArrowDown":
      axialDistance -= MOVE_DISTANCE;
      break;
    case "r":
    case "R":
      transverseDistance = axialDistance = verticalDistance = 0;
      mouseYaw = mousePitch = 0;
      break;
    default:
      break;
  }
}
```

キーとその効果は次のとおりです。

- <kbd>W</kbd>

  &#x20;キーは、ビューアーを `MOVE_DISTANCE` だけ上に移動します。

- <kbd>S</kbd>

  &#x20;キーは、ビューアーを `MOVE_DISTANCE` だけ下に移動します。

- <kbd>A</kbd>

  &#x20;キーは、ビューアーを `MOVE_DISTANCE` だけ左にスライドさせます。

- <kbd>D</kbd>

  &#x20;キーは、ビューアーを `MOVE_DISTANCE` だけ右にスライドさせます。

- 上矢印キー

  <kbd>↑</kbd>

  は、ビューアーを `MOVE_DISTANCE` だけ前方にスライドさせます。

- 下矢印キー

  <kbd>↓</kbd>

  は、ビューアーを `MOVE_DISTANCE` だけ後方にスライドさせます。

- <kbd>R</kbd>

  &#x20;キーは、入力オフセットをすべて 0 にリセットすることにより、ビューアーを開始位置と方向にリセットします。

これらのオフセットは、次のフレームの描画からレンダラーによって適用されます。

### マウスによるピッチとヨー

また、マウスの右ボタンが押されているかどうかを確認する {{domxref("Element.mousemove_event", "mousemove")}} イベントハンドラーがあり、押されている場合は、その次に定義されている `rotateViewBy()` 関数を呼び出して、新しいピッチ（上下を見る）とヨー（左右を見る）の値を計算して保存します。

```js
function handlePointerMove(event) {
  if (event.buttons & 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
}
```

新しいピッチとヨーの値の計算は、次の `rotateViewBy()` 関数で処理します。

```js
function rotateViewBy(dx, dy) {
  mouseYaw -= dx * MOUSE_SPEED;
  mousePitch -= dy * MOUSE_SPEED;

  if (mousePitch < -Math.PI * 0.5) {
    mousePitch = -Math.PI * 0.5;
  } else if (mousePitch > Math.PI * 0.5) {
    mousePitch = Math.PI * 0.5;
  }
}
```

入力としてマウス移動量の `dx` と `dy` が与えられると、新しいヨー値は、`mouseYaw` の現在の値から `dx` と `MOUSE_SPEED` スケーリング定数の積を引くことで計算します。 そして、`MOUSE_SPEED` の値を増やすことで、マウスの応答性を制御できます。

## フレームの描画

{{domxref("XRSession.requestAnimationFrame()")}} のコールバックは、以下に示す `drawFrame()` 関数に実装されています。 その仕事は、ビューアーの参照空間を取得し、最後のフレームからの経過時間を考慮して、アニメーション化されたオブジェクトに適用する必要のある動きの量を計算し、ビューアーの {{domxref("XRPose")}} によって指定された各ビューをレンダリングすることです。

```js
let lastFrameTime = 0;

function drawFrame(time, frame) {
  let session = frame.session;
  let adjustedRefSpace = xrReferenceSpace;
  let pose = null;

  animationFrameRequestID = session.requestAnimationFrame(drawFrame);
  adjustedRefSpace = applyViewerControls(xrReferenceSpace);
  pose = frame.getViewerPose(adjustedRefSpace);

  if (pose) {
    let glLayer = session.renderState.baseLayer;

    gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
    LogGLError("bindFrameBuffer");

    gl.clearColor(0, 0, 0, 1.0);
    gl.clearDepth(1.0);                 // Clear everything
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    LogGLError("glClear");

    const deltaTime = (time - lastFrameTime) * 0.001;  // Convert to seconds
    lastFrameTime = time;

    for (let view of pose.views) {
      let viewport = glLayer.getViewport(view);
      gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
      LogGLError(`Setting viewport for eye: ${view.eye}`);
      gl.canvas.width = viewport.width * pose.views.length;
      gl.canvas.height = viewport.height;
      renderScene(gl, view, programInfo, buffers, texture, deltaTime);
    }
  }
}
```

最初に行うことは、{{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} を呼び出して、次のフレームをレンダリングするために `drawFrame()` を再度呼び出すように要求することです。 次に、オブジェクトの参照空間を `applyViewerControls()` 関数に渡します。 この関数は、キーボードとマウスを使用してユーザーが適用した移動、ピッチ、ヨーを考慮してオブジェクトの位置と方向を変換する、改訂された {{domxref("XRReferenceSpace")}} を返します。 いつものように、ビューアーではなく、世界のオブジェクトを、移動し、方向を変更することを忘れないでください。 返された参照空間により、それを簡単に行うことができます。

新しい参照空間が手元にあると、ビューアーの両目の視点を表す {{domxref("XRViewerPose")}} が得られます。 それが成功した場合は、セッションで使用されている {{domxref("XRWebGLLayer")}} を取得し、そのフレームバッファーを WebGL フレームバッファーとして使用するようにバインドすることでレンダリングの準備を開始します（WebGL のレンダリングはレイヤーに描画することで、XR デバイスのディスプレイに描画されます）。 XR デバイスにレンダリングするように WebGL が構成されたので、フレームを黒にクリアして、レンダリングを開始する準備が整いました。

最後のフレームがレンダリングされてからの経過時間（秒単位）は、`time` パラメーターで指定された現在の時刻から前のフレームのタイムスタンプ `lastFrameTime` を減算し、0.001 を掛けてミリ秒を秒に変換することで計算します。 次に、現在の時刻を `lastFrameTime` に保存します。

`drawFrame()` 関数は、{{domxref("XRViewerPose")}} で見つかったすべてのビューを反復処理し、ビューのビューポートを設定し、`renderScene()` を呼び出してフレームをレンダリングすることで終了します。 各ビューのビューポートを設定することにより、各目のビューがそれぞれ WebGL フレームの半分にレンダリングされる典型的なシナリオを処理します。 次に、XR ハードウェアは、各目がその目向けの画像の部分のみを表示するように処理します。

> **メモ:** この例では、XR デバイスと画面の両方にフレームを視覚的に表示しています。 画面上のキャンバスがこれを実行できる適切なサイズであることを確認するために、その幅を個々の {{domxref("XRView")}} の幅にビューの数を掛けたものに等しくなるように設定します。 キャンバスの高さは常にビューポートの高さと同じです。 キャンバスサイズを調整する 2 行のコードは、通常の WebXR レンダリングループでは必要ありません。

### ユーザー入力の適用

何かをレンダリングし始める前に `drawFrame()` によって呼び出される `applyViewerControls()` 関数は、ユーザーがキーを押したり、マウスの右ボタンを押したままマウスをドラッグしたときに `handleKeyDown()` 関数と `handlePointerMove()` 関数によって記録された 3 方向のそれぞれのオフセット、ヨーオフセット、およびピッチオフセットを取得します。 オブジェクトのベース参照空間を入力として受け取り、入力の結果と一致するようにオブジェクトの位置と方向を変更する新しい参照空間を返します。

```js
function applyViewerControls(refSpace) {
  if (!mouseYaw && !mousePitch && !axialDistance &&
      !transverseDistance && !verticalDistance) {
    return refSpace;
  }

  quat.identity(inverseOrientation);
  quat.rotateX(inverseOrientation, inverseOrientation, -mousePitch);
  quat.rotateY(inverseOrientation, inverseOrientation, -mouseYaw);

  let newTransform = new XRRigidTransform({x: transverseDistance,
                                           y: verticalDistance,
                                           z: axialDistance},
                         {x: inverseOrientation[0], y: inverseOrientation[1],
                          z: inverseOrientation[2], w: inverseOrientation[3]});
  mat4.copy(mouseMatrix, newTransform.matrix);

  return refSpace.getOffsetReferenceSpace(newTransform);
}
```

すべての入力オフセットがゼロの場合、元の参照空間を返すだけです。 それ以外の場合は、`mousePitch` と `mouseYaw` の方向の変更から、その方向の逆を指定するクォータニオンを作成します。 これにより、`inverseOrientation` を立方体に適用すると、ビューアーの動きが正しく表示されます。

次に、移動または方向変更されたオブジェクトの新しい {{domxref("XRReferenceSpace")}} を作成するために使用する変換を表す新しい {{domxref("XRRigidTransform")}} オブジェクトを作成します。 位置は、`x`、`y`、`z` がこれらの各軸に沿って移動したオフセットに対応する新しいベクトルです。 方向は、`inverseOrientation` クォータニオンです。

変換の {{domxref("XRRigidTransform.matrix", "matrix")}} を `mouseMatrix` にコピーします。 これは、後でマウス追跡行列（Mouse tracking matrix）をユーザーに表示するために使用します（したがって、これは通常スキップできる手順です）。 最後に、`XRRigidTransform` をオブジェクトの現在の {{domxref("XRReferenceSpace")}} に渡して、この変換を統合し、ユーザーの動きを考慮したユーザーに対する立方体の配置を表す参照空間を取得します。 その新しい参照空間を呼び出し元に返します。

### シーンのレンダリング

`renderScene()` 関数は、ユーザーがその瞬間に見える世界の部分を実際にレンダリングするために呼び出されます。 XR ギアに必要な 3D 効果を確立するために、それぞれの目でわずかに異なる位置を使用し、それぞれの目に対して 1 回ずつ呼び出されます。

このコードのほとんどは、[WebGL でのライティング](/ja/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)の記事の `drawScene()` 関数から直接取得した典型的な WebGL レンダリングコードであり、この例の WebGL レンダリング部分の詳細についてはそこを参照してください（[GitHub でコードを見る](https://github.com/mdn/webgl-examples/blob/gh-pages/tutorial/sample7/webgl-demo.js)）。 しかし、ここでは、この例に固有のコードから始まっているので、その部分について詳しく見ていきます。

```js
const normalMatrix = mat4.create();
const modelViewMatrix = mat4.create();

function renderScene(gl, view, programInfo, buffers, texture, deltaTime) {
  const xRotationForTime = (xRotationDegreesPerSecond * RADIANS_PER_DEGREE) * deltaTime;
  const yRotationForTime = (yRotationDegreesPerSecond * RADIANS_PER_DEGREE) * deltaTime;
  const zRotationForTime = (zRotationDegreesPerSecond * RADIANS_PER_DEGREE) * deltaTime;

  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

  if (enableRotation) {
    mat4.rotate(cubeMatrix,  // destination matrix
                cubeMatrix,  // matrix to rotate
                zRotationForTime,     // amount to rotate in radians
                [0, 0, 1]);       // axis to rotate around (Z)
    mat4.rotate(cubeMatrix,  // destination matrix
                cubeMatrix,  // matrix to rotate
                yRotationForTime, // amount to rotate in radians
                [0, 1, 0]);       // axis to rotate around (Y)
    mat4.rotate(cubeMatrix,  // destination matrix
                cubeMatrix,  // matrix to rotate
                xRotationForTime, // amount to rotate in radians
                [1, 0, 0]);       // axis to rotate around (X)
  }

  mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, cubeMatrix);
  mat4.invert(normalMatrix, modelViewMatrix);
  mat4.transpose(normalMatrix, normalMatrix);

  displayMatrix(view.projectionMatrix, 4, projectionMatrixOut);
  displayMatrix(modelViewMatrix, 4, modelMatrixOut);
  displayMatrix(view.transform.matrix, 4, cameraMatrixOut);
  displayMatrix(mouseMatrix, 4, mouseMatrixOut);

  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);
  }

  {
    const numComponents = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
    gl.vertexAttribPointer(
        programInfo.attribLocations.textureCoord,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.textureCoord);
  }

  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexNormal,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexNormal);
  }

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
  gl.useProgram(programInfo.program);

  gl.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      view.projectionMatrix);
  gl.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix);
  gl.uniformMatrix4fv(
      programInfo.uniformLocations.normalMatrix,
      false,
      normalMatrix);
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture);

  gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

  {
    const vertexCount = 36;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
}
```

`renderScene()` は、前のフレームがレンダリングされてから経過した時間内に、3 つの軸のそれぞれの周りで発生する回転量を計算することから始まります。 これらの値により、アニメーションする立方体の回転を適切な量に調整して、システムの負荷によって発生する可能性のあるフレームレートの変動に関係なく、その移動速度が一定に保たれるようにすることができます。 これらの値は、経過時間を指定して適用する回転のラジアン数として計算して、定数の `xRotationForTime`、`yRotationForTime`、`zRotationForTime` に格納します。

奥行きテストを有効にして構成した後、`enableRotation` 定数の値をチェックして、立方体の回転が有効になっているかどうかを確認します。 そうである場合は、glMatrix を使用して、3 つの軸を中心に `cubeMatrix`（世界空間に対する立方体の現在の方向を表す）を回転させます。 立方体のグローバルな方向が確立されたら、それをビューの変換行列の逆行列で乗算して、最終的なモデルビュー行列を取得します。 この行列は、オブジェクトに適用して、アニメーションの目的でそれを回転させるだけでなく、それを移動したり方向を変えたりして、空間を介したビューアーのモーションをシミュレートすることもします。

次に、モデルビュー行列を取得して反転（逆行列を計算）し、転置（列と行を入れ替える）することで、ビューの正規行列を計算します。

この例で追加されたコードの最後の数行は、ユーザーによる分析のために行列の内容を表示する関数である `displayMatrix()` への 4 つの呼び出しです。 関数の残りの部分は、このコードの派生元である古い WebGL サンプルと同一または本質的に同一です。

### 行列の表示

この例では、説明のために、シーンのレンダリング中に使用している重要な行列の内容を表示しています。 これには、`displayMatrix()` 関数を使用します。 この関数は MathML を使用して行列をレンダリングし、MathML がユーザーのブラウザーでサポートされていない場合は、より配列に近い形式にフォールバックします。

```js
function displayMatrix(mat, rowLength, target) {
  let outHTML = "";

  if (mat && rowLength && rowLength <= mat.length) {
    let numRows = mat.length / rowLength;
    outHTML = "<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>\n<mrow>\n<mo>[</mo>\n<mtable>\n";

    for (let y=0; y<numRows; y++) {
      outHTML += "<mtr>\n";
      for (let x=0; x<rowLength; x++) {
        outHTML += `<mtd><mn>${mat[(x*rowLength) + y].toFixed(2)}</mn></mtd>\n`;
      }
      outHTML += "</mtr>\n";
    }

    outHTML += "</mtable>\n<mo>]</mo>\n</mrow>\n</math>";
  }

  target.innerHTML = outHTML;
}
```

これにより、`target` で指定された要素の内容が、4x4 行列を含む新しく作成された {{MathMLElement("math")}} 要素に置き換えられます。 各エントリーは、小数点以下 2 桁まで表示します。

### ほかのすべて

残りのコードは、前の例で見つかったものと同じです。

- `initShaderProgram()`
  - : GLSL シェーダープログラムを初期化し、`loadShader()` を呼び出して各シェーダーのプログラムをロードおよびコンパイルしてから、各シェーダーを WebGL コンテキストにアタッチします。 それらがコンパイルされると、プログラムはリンクされ、呼び出し元に返されます。
- `loadShader()`
  - : シェーダーオブジェクトを作成し、指定されたソースコードをそのオブジェクトにロードしてから、コードをコンパイルし、コンパイラが成功したことを確認してから、新しくコンパイルされたシェーダーを呼び出し元に返します。 エラーが発生した場合は、代わりに `NULL` を返します。
- `initBuffers()`
  - : WebGL に渡すデータを含んだバッファーを初期化します。 これらのバッファーには、頂点位置の配列、頂点法線の配列、立方体の各面のテクスチャー座標、および頂点インデックスの配列（頂点リストのどのエントリーが立方体のそれそれの角を表すかを指定）が含まれます。
- `loadTexture()`
  - : 指定された URL で画像をロードし、そこから WebGL テクスチャーを作成します。 画像の寸法が両方とも 2 の累乗でない場合（`isPowerOf2()` 関数を参照）、ミップマップを無効とし、ラッピングをエッジに固定します。 これは、ミップマップテクスチャーの最適化されたレンダリングが、WebGL 1 の 2 の累乗の寸法のテクスチャーに対してのみ機能するためです。 WebGL 2 は、ミップマップに任意の寸法のテクスチャーをサポートしています。
- `isPowerOf2()`
  - : 指定された値が 2 の累乗の場合、`true` を返します。 それ以外の場合は `false` を返します。

### すべてをまとめる

このコードをすべて取得して、上記に含まれていない HTML およびその他の JavaScript コードを追加すると、この例を [Glitch で試した](https://webxr-experiment.glitch.me/)ときに表示されるものが得られます。 覚えておいてください、歩き回って迷子になったら、<kbd>R</kbd> キーを押すだけで最初に戻ることができます。

ヒント: XR デバイスをお持ちでない場合は、顔を画面に非常に近づけて、キャンバス内の左目と右目の画像の境界に沿って鼻を中央に配置すると、3D 効果を得ることができるかもしれません。 画面を通して画像に注意深く焦点を合わせ、ゆっくりと前後に動くことで、最終的に 3D 画像に焦点を合わせることができるはずです。 これには練習が必要で、視力の鋭さによっては、文字通り鼻が画面に触れているかもしれません。

この例を出発点として、できることはたくさんあります。 世界にオブジェクトを追加したり、移動コントロールを改善してよりリアルに移動してみてください。 壁、天井、床を追加して、無限に見える宇宙に迷うのではなく、空間に閉じ込めます。 衝突テストやヒットテスト、または立方体の各面のテクスチャーを変更する機能を追加します。

自分で設定すれば、できることに制限はほとんどありません。

## 関連情報

- [WebGL を学ぶ](http://learnwebgl.brown37.net/#)（英語、カメラの優れた視覚化と、それが仮想世界とどのように関連しているかを含む）
- [WebGL の基本](https://webglfundamentals.org/webgl/lessons/ja/)
- [OpenGL を学ぶ](https://learnopengl.com/)（英語）
