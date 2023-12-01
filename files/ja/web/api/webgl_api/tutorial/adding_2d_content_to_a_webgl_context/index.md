---
title: WebGL コンテキストへの 2D コンテンツの追加
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
l10n:
  sourceCommit: 78d0bc65b22445bba65ad4d6e81044041a001fd9
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

[WebGL コンテキストの作成](/ja/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)に成功したら、レンダリングを開始できます。簡単にできることは、テクスチャが貼り付けられていない単純な正方形を描画することです。そこから始めましょう。

このプロジェクトの完全なソースコードは [GitHub で利用できます](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2)。

## glMatrix ライブラリーのインクルード

このプロジェクトは、行列操作を行うために [glMatrix](https://glmatrix.net/) ライブラリーを使用しますので、プロジェクトのインクルードする必要があります。CDN からコピーを読み込みます。

> **メモ:** "index.html" を更新すると、次のようになります。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>WebGL Demo</title>
    <link rel="stylesheet" href="./webgl.css" type="text/css" />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
      integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
      crossorigin="anonymous"
      defer></script>
    <script src="webgl-demo.js" type="module"></script>
  </head>

  <body>
    <canvas id="glcanvas" width="640" height="480"></canvas>
  </body>
</html>
```

## シーンの描画

レンダリングを始める前に理解しておくべきもっとも重要なことは、今回の例では正方形の平面オブジェクトのみをレンダリングしていますが、それは 3 次元の空間に描画されるということです。正方形を描いているだけで、カメラの正面に視線方向に垂直に直接配置しています。単純なシーンの色を作成し、オブジェクトを描画するシェーダーを定義する必要があります。これらは正方形の平面が画面にどのように表示されるかを確立します。

### シェーダー

**シェーダー** は、 [OpenGL ES Shading Language](https://www.khronos.org/files/opengles_shading_language.pdf) (**GLSL**) を使用して記述されたプログラムであり、形状を構成する頂点に関する情報を取得し、画面上にピクセルをレンダリングするために必要なデータ、すなわちピクセルの位置とその色を生成します。

WebGL コンテンツを描画するときに実行される 2 つのシェーダー関数があります。**頂点シェーダー**と**フラグメントシェーダー**です。これらを GLSL で記述し、コードのテキストを WebGL に渡して、GPU で実行するためにコンパイルします。 頂点シェーダーとフラグメントシェーダーのセットを合わせて、**シェーダープログラム**と呼びます。

2 種類のシェーダーを WebGL コンテキストに描画する例を念頭に置いて、2 種類のシェーダーを簡単に見てみましょう。

#### 頂点シェーダー

シェイプがレンダリングされるたびに、頂点シェーダーがシェイプの各頂点に対して実行されます。その仕事は、入力頂点を元の座標系から WebGL が使用する **[clip space](/ja/docs/Web/API/WebGL_API/WebGL_model_view_projection#clip_space)** 座標系に変換することです。各軸の範囲はアスペクト比、実際のサイズ、またはその他の要因に関係なく -1.0 〜 1.0 です。

頂点シェーダーは頂点の位置で必要な変換を実行し、頂点ごとに行う必要がある他の調整または計算を行い、GLSL によって提供される `gl_Position` と呼ばれる特別な変数に保存して、変換された頂点を返す必要があります。

シェーダーは必要に応じて{{Glossary("texel", "テクセル")}}の面のテクスチャ内の座標を決定して頂点に適用したり、法線を適用して頂点に適用する照明係数を決定したりすることもできます。この情報は、フラグメントシェーダーと共有するために、必要に応じて [varyings](/ja/docs/Web/API/WebGL_API/Data#varyings) または [attributes](/ja/docs/Web/API/WebGL_API/Data#attributes) に保存できます。

以下の頂点シェーダーは `aVertexPosition` と呼ばれる定義した属性から頂点位置の値を受け取ります。次に、その位置に `uProjectionMatrix` および `uModelViewMatrix`という 2 つの 4 x 4 行列を乗算します。`gl_Position` は結果に設定されます。投影法およびその他のマトリックスの詳細については、[この記事が役立つ場合があります](https://webglfundamentals.org/webgl/lessons/ja/webgl-3d-perspective.html)。

> **メモ:** このコードを `main()` 関数に追加してください。

```js
// 頂点シェーダーのプログラム
const vsSource = `
    attribute vec4 aVertexPosition;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
  `;
```

頂点の位置に `vec4` 属性を使用していることに注意してください。実際には 4 コンポーネントベクトルを使用していません。つまり、状況に応じて `vec2` または `vec3` として処理できます。ただし、数学を実行するときは `vec4` である必要があります。したがって、数学を実行するたびに `vec4` に変換するのではなく、最初から `vec4` を使用します。これにより、シェーダーで行うすべての計算から操作が排除されます。 パフォーマンスが重要です。

この例ではシーンにまだ何も適用していないため、ライティングをまったく計算していません。これは、[WebGL でのライティング](/ja/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)の例で後ほど説明します。また、ここではテクスチャを使用した作業がないことに注意してください。これは、[WebGL でのテクスチャの使用](/ja/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)に追加されます。

#### フラグメントシェーダー

**フラグメントシェーダー**は、図形の頂点が頂点シェーダーによって処理された後、描画される各図形のすべてのピクセルに対して 1 回呼び出されます。その仕事は、ピクセルに適用するテクセル（つまり、シェイプのテクスチャ内のピクセル）を特定し、そのテクセルの色を取得し、その色に適切な照明を適用することによりそのピクセルの色を決定することです。色は特別な変数 `gl_FragColor` に保存することにより、WebGL レイヤーに返されます。その色は、図形の対応するピクセルの正しい位置で画面に描画されます。

この場合、照明を使用せずに白い正方形を描画するだけなので、毎回単純に白を返します。

> **メモ:** このコードを `main()` 関数に追加してください。

```js
const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;
```

### シェーダーの初期化

2 つのシェーダーを定義したので、それらを WebGL に渡してコンパイルし、リンクする必要があります。以下のコードは `loadShader()` を呼び出して 2 つのシェーダーを作成し、シェーダーのタイプとソースを渡します。次にプログラムを作成し、シェーダーを接続してそれらをリンクします。コンパイルまたはリンクが失敗した場合、コードはアラートを表示します。

> **メモ:** これらの 2 つの関数を "webgl-demo.js" スクリプトに追加してください。

```js
//
// シェーダープログラムを初期化し、WebGL にデータの描画方法を教える
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // シェーダープログラムの作成

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // シェーダープログラムの作成に失敗した場合、アラートを出す

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      `シェーダープログラムを初期化できません: ${gl.getProgramInfoLog(
        shaderProgram,
      )}`,
    );
    return null;
  }

  return shaderProgram;
}

//
// 指定された種類のシェーダーを作成し、ソースをアップロード、
// そしてコンパイル。
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // シェーダーオブジェクトにソースを送信

  gl.shaderSource(shader, source);

  // シェーダープログラムをコンパイル

  gl.compileShader(shader);

  // コンパイルが成功したか確認する

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      `シェーダーのコンパイル時にエラーが発生しました: ${gl.getShaderInfoLog(
        shader,
      )}`,
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
```

`loadShader()` 関数は WebGL コンテキスト、シェーダーのタイプ、シェーダーのソースコードを入力として受け取り、以下の順序でシェーダーを作成しコンパイルします。

1. 新たなシェーダーは {{domxref("WebGLRenderingContext.createShader", "gl.createShader()")}} を呼ぶことで作成される。
2. シェーダーのソースコードは {{domxref("WebGLRenderingContext.shaderSource", "gl.shaderSource()")}} を呼ぶことでシェーダーに送られる。
3. シェーダーはソースコードを得るとすぐに、{{domxref("WebGLRenderingContext.compileShader", "gl.compileShader()")}} を用いてコンパイルする。
4. シェーダーのコンパイルが成功したか確かめるため、シェーダーの引数である `gl.COMPILE_STATUS` をチェックする。この引数を得るために {{domxref("WebGLRenderingContext.getShaderParameter", "gl.getShaderParameter()")}} を呼び出し、シェーダーとチェックしたい引数の名前を指定する (`gl.COMPILE_STATUS`)。もし `false` ならシェーダーがコンパイルに失敗したということであり、{{domxref("WebGLRenderingContext.getShaderInfoLog", "gl.getShaderInfoLog()")}} を用いてコンパイラから得たログと共にアラートを表示する。そしてシェーダーを削除し、シェーダーの読み込みに失敗したことを示すため `null` を返す。
5. シェーダーのコンパイルに成功した場合、コンパイルされたシェーダーを呼び出し元に返す。

> **メモ:** このコードを `main()` 関数に追加してください。

```js
// シェーダープログラムを初期化します。ここで頂点への
// ライティングなどがすべて確立されます。
const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
```

シェーダープログラムを作成した後、WebGL が入力に割り当てた位置を調べる必要があります。この場合、1 つの属性と 2 つのユニフォームがあります。属性はバッファーから値を受け取ります。頂点シェーダーは実行される度にその属性に割り当てられたバッファーから次の値を受け取ります。[ユニフォーム](/ja/docs/Web/API/WebGL_API/Data#uniforms)は JavaScript のグローバル変数に似ており、シェーダーのどの実行時においても値は不変です。属性とユニフォームの位置は、単一のシェーダープログラムに固有のものなので、それらをまとめて保存して、簡単に受け渡しできるようにします。

> **メモ:** このコードを `main()` 関数に追加してください。

```js
// シェーダープログラムを使用するために必要な情報をすべて収集する。
// シェーダープログラムが aVertexPosition に使用している属性を調べ、
// ユニフォームの位置を調べます。
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
  },
};
```

## 正方形の作成

正方形をレンダリングする前に、正方形の各頂点の座標を含むバッファーを作成し、そこに頂点座標を書き込む必要があります。

これを行うのに `initBuffers()` 関数を使用しますが、これは別な [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)に実装します。より高度な WebGL の概念に踏み込むにつれて、この操作はより多くの（そしてより複雑な）3D オブジェクトを作成するために拡張していきます。

> **メモ:** "init-buffers.js" という新しいファイルを作成し、以下の内容にしてください。

```js
function initBuffers(gl) {
  const positionBuffer = initPositionBuffer(gl);

  return {
    position: positionBuffer,
  };
}

function initPositionBuffer(gl) {
  // 正方形の位置を保存するためのバッファーを作成する
  const positionBuffer = gl.createBuffer();

  // positionBuffer をバッファー操作の適用対象として
  // 選択する
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // 正方形の頂点座標の配列を作成する
  const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

  // 形を作るために頂点座標のリストを WebGL に渡す。
  // JavaScript の配列から Float32Array に変換したもので
  // バッファーを埋める。
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return positionBuffer;
}

export { initBuffers };
```

このルーチンは、この例のシーンの基本的な性質を考えると、かなり単純なものです。まず、`gl` オブジェクトの {{domxref("WebGLRenderingContext.createBuffer()", "createBuffer()")}} メソッドを呼び出してバッファーを取得し、そこに頂点の位置を格納します。次に、{{domxref("WebGLRenderingContext.bindBuffer()", "bindBuffer()")}} メソッドを呼び出すことで、このバッファーをコンテキストに関連付けます。

それが完了すると、正方形の各頂点の座標を持った JavaScript の配列を作成します。そしてこの配列は浮動小数点数の配列へと変換され、`gl` オブジェクトの {{domxref("WebGLRenderingContext.bufferData()", "bufferData()")}} メソッドへとオブジェクトの頂点座標を作るために渡されます。

## シーンをレンダリングする

シェーダーを確立し、位置を調べ、正方形の頂点位置をバッファーに格納したら、実際にシーンをレンダリングすることができます。この例では、何もアニメーション行わないため、`drawScene()` 関数は非常にシンプルです。この関数では、後述するいくつかのユーティリティルーチンを使用しています。

> **メモ:** "draw-scene.js" という新しいファイルを作成し、以下の内容にしてください。

```js
function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // 黒でクリア、完全に不透明
  gl.clearDepth(1.0); // 全てをクリア
  gl.enable(gl.DEPTH_TEST); // 深度テストを有効化
  gl.depthFunc(gl.LEQUAL); // 奥にあるものは隠れるようにする

  // 描写を行う前にキャンバスをクリアする

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // カメラで遠近感を再現するために使用される特殊な行列、
  // パースペクティブマトリクスを作成します。視野角は45度、
  // 幅と高さの比率はキャンバスの表示サイズに合わせ、
  // カメラから 0.1 単位から 100 単位までのオブジェクトのみを
  // 表示するようにします。

  const fieldOfView = (45 * Math.PI) / 180; // ラジアンにする
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // メモ: glmatrix.js は常に第一引数として結果の
  // 受け取り先を取る
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  // 描写位置をシーンの中央である "identity" ポイントにセットする
  const modelViewMatrix = mat4.create();

  // そして描写位置を正方形を描写し始めたい位置に少しだけ動かす
  mat4.translate(
    modelViewMatrix, // 変換結果の格納先
    modelViewMatrix, // 変換する行列
    [-0.0, 0.0, -6.0],
  ); // 変換量

  // WebGL にどのように座標バッファーから vertexPosition 属性に
  // 座標を引き出すか伝える
  setPositionAttribute(gl, buffers, programInfo);

  // WebGLに、描写するのに我々のプログラムを用いるように伝える
  gl.useProgram(programInfo.program);

  // シェーダーユニフォームをセット
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.projectionMatrix,
    false,
    projectionMatrix,
  );
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    modelViewMatrix,
  );

  {
    const offset = 0;
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  }
}

// WebGL に、位置バッファーから vertexPosition 属性に
// 位置を引き出す方法を指示する。
function setPositionAttribute(gl, buffers, programInfo) {
  const numComponents = 2; // pull out 2 values per iteration
  const type = gl.FLOAT; // the data in the buffer is 32bit floats
  const normalize = false; // don't normalize
  const stride = 0; // how many bytes to get from one set of values to the next
  // 0 = use type and numComponents above
  const offset = 0; // how many bytes inside the buffer to start from
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexPosition,
    numComponents,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
}

export { drawScene };
```

最初の手順は、キャンバスを背景色にクリアすることで、次にカメラの視点位置を設定します。視野角は 45 度、幅と高さの比率はキャンバスの表示寸法と一致するように設定します。また、カメラから 0.1 〜 100 単位離れたオブジェクトだけをレンダリングするように指定します。

次に、正方形の平面の位置を設定します。同じ位置を読み込んで、カメラから 6 単位だけ遠ざかるように対応させます。その後、正方形の頂点バッファーとシェーダーが使用する `aVertexPosition` という属性を結びつけ、そこからデータを引き出す方法を WebGL に指示します。最後に {{domxref("WebGLRenderingContext.drawArrays()", "drawArrays()")}} メソッドを呼び出してオブジェクトを描きます。

最後に、`initBuffers()` と `drawScene()` を呼び出してみましょう。

> **メモ:** このコードを "webgl-demo.js" ファイルの先頭に追加してください。

```js
import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";
```

> **メモ:** このコードを `main()` 関数の末尾に追加してください。

```js
// ここでは、これから描画するすべてのオブジェクトを
// 構築するルーチンを呼び出しています。
const buffers = initBuffers(gl);

// シーンを描画
drawScene(gl, programInfo, buffers);
```

結果は次のようになります。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample2/index.html', 670, 510) }}

[完全なコードを見る](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2) | [このデモを新しいページで開く](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample2/)

## 行列ユーティリティの操作

行列の操作は複雑に見えるかもしれませんが、[一歩ずつ進めていけば、実はとても簡単です](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html)。一般に、人々は自分で書くよりも行列ライブラリーを使用します。この例では、人気のある [glMatrix ライブラリー](https://glmatrix.net/)を使用しています。

### 関連情報

- [Matrices](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html) (WebGLFundamentals)
- [Matrices](https://mathworld.wolfram.com/Matrix.html) (Wolfram MathWorld)
- [行列](http://ja.wikipedia.org/wiki/行列) （ウィキペディア）

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
