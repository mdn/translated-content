---
title: WebGL コンテキストへの平面コンテンツの追加
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
---


{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

[WebGL コンテキストの作成](/ja/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)に成功したら、レンダリングを開始できます。もっとも簡単にできることは、テクスチャが貼り付けられていない単純な正方形を描画することです。そこで、正方形の平面を描画するコードを作成することから始めましょう。

## シーンを描画する

レンダリングを始める前に理解しておくべきもっとも重要なことは、今回の例では正方形の平面オブジェクトのみをレンダリングしていますが、それは 3 次元の空間に描画されるということです。正方形を描いているだけで、カメラの正面に視線方向に垂直に直接配置しています。単純なシーンの色を作成し、オブジェクトを描画するシェーダーを定義する必要があります。これらは正方形の平面が画面にどのように表示されるかを確立します。

### シェーダー

**シェーダー** は、 [OpenGL ES Shading Language](https://www.khronos.org/files/opengles_shading_language.pdf) (**GLSL**) を使用して記述されたプログラムであり、形状を構成する頂点に関する情報を取得し、画面上にピクセルをレンダリングするために必要なデータ、すなわちピクセルの位置とその色を生成します。

WebGL コンテンツを描画するときに実行される 2 つのシェーダー関数があります。**頂点シェーダー**と**フラグメントシェーダー**です。これらを GLSL で記述し、コードのテキストを WebGL に渡して、GPU で実行するためにコンパイルします。 頂点シェーダーとフラグメントシェーダーのセットを合わせて、**シェーダープログラム**と呼びます。

2 種類のシェーダーを WebGL コンテキストに描画する例を念頭に置いて、2 種類のシェーダーを簡単に見てみましょう。

#### 頂点シェーダー

シェイプがレンダリングされるたびに、頂点シェーダーがシェイプの各頂点に対して実行されます。その仕事は、入力頂点を元の座標系から WebGL が使用する **clipspace** 座標系に変換することです。各軸の範囲はアスペクト比、実際のサイズ、またはその他の要因に関係なく -1.0 〜 1.0 です。

頂点シェーダーは頂点の位置で必要な変換を実行し、頂点ごとに行う必要がある他の調整または計算を行い、GLSL によって提供される `gl_Position` と呼ばれる特別な変数に保存して、変換された頂点を返す必要があります。

シェーダーは必要に応じて [texel](https://en.wikipedia.org/wiki/texel_(graphics)) の面のテクスチャ内の座標を決定して頂点に適用したり、法線を適用して頂点に適用する照明係数を決定したりすることもできます。この情報は、フラグメントシェーダーと共有するために、必要に応じて [varyings](/ja/docs/Web/API/WebGL_API/Data#Varyings) または [attributes](/ja/docs/Web/API/WebGL_API/Data#Attributes) に保存できます。

以下の頂点シェーダーは `aVertexPosition` と呼ばれる定義した属性から頂点位置の値を受け取ります。次に、その位置に `uProjectionMatrix` および `uModelViewMatrix`という 2 つの 4 x 4 行列を乗算します。`gl_Position` は結果に設定されます。投影法およびその他のマトリックスの詳細については、[この記事が役立つ場合があります](https://webglfundamentals.org/webgl/lessons/ja/webgl-3d-perspective.html)。

```html
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

**フラグメントシェーダー**は、図形の頂点が頂点シェーダーによって処理された後、描画される各図形のすべてのピクセルに対して 1 回呼び出されます。その仕事は、ピクセルに適用するテクセル (つまり、シェイプのテクスチャ内のピクセル) を特定し、そのテクセルの色を取得し、その色に適切な照明を適用することによりそのピクセルの色を決定することです。色は特別な変数 `gl_FragColor` に保存することにより、WebGL レイヤーに返されます。その色は、図形の対応するピクセルの正しい位置で画面に描画されます。

この場合、照明を使用せずに白い正方形を描画するだけなので、毎回単純に白を返します。

```html
  const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;
```

### シェーダーの初期化

2 つのシェーダーを定義したので、それらを WebGL に渡してコンパイルし、リンクする必要があります。以下のコードは `loadShader()` を呼び出して 2 つのシェーダーを作成し、シェーダーのタイプとソースを渡します。次にプログラムを作成し、シェーダーを接続してそれらをリンクします。コンパイルまたはリンクが失敗した場合、コードはアラートを表示します。

```js
//
// シェーダープログラムを初期化し、WebGLにデータの描画方法を教える
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
    alert('シェーダープログラムを初期化出来ません: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

//
// 指定されたタイプのシェーダを作成し、ソースをアップロード、
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
    alert('シェーダーのコンパイル時にエラーが発生しました: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
```

`loadShader()`関数はWebGLコンテキスト、シェーダーのタイプ、シェーダーのソースコードを入力として受け取り、以下の順序でシェーダーを作成しコンパイルします:

1. 新たなシェーダーは{{domxref("WebGLRenderingContext.createShader", "gl.createShader()")}}を呼ぶことで作成される。
2. シェーダーのソースコードは{{domxref("WebGLRenderingContext.shaderSource", "gl.shaderSource()")}}を呼ぶことでシェーダーに送られる。
3. シェーダーはソースコードを得るとすぐに、{{domxref("WebGLRenderingContext.compileShader", "gl.compileShader()")}}を用いてコンパイルする。
4. シェーダーのコンパイルが成功したか確かめるため、シェーダーのパラメータである`gl.COMPILE_STATUS`をチェックする。このパラメータを得るために{{domxref("WebGLRenderingContext.getShaderParameter", "gl.getShaderParameter()")}}を呼び、シェーダーとチェックしたいパラメータの名前を指定する(`gl.COMPILE_STATUS`)。もし`false`ならシェーダーがコンパイルに失敗したという事であり、{{domxref("WebGLRenderingContext.getShaderInfoLog", "gl.getShaderInfoLog()")}}を用いてコンパイラから得たログと共にアラートを表示する。そしてシェーダーを削除し、シェーダーの読み込みに失敗したことを示すため`null`を返す。
5. シェーダーのコンパイルに成功した場合、コンパイルされたシェーダーを呼び出し元に返す。

このコードは以下のように呼び出し、使用します。

```js
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
```

シェーダープログラムを作成した後、WebGLが入力に割り当てた位置を調べる必要があります。この場合、一つの属性と二つのユニフォームがあります。属性はバッファから値を受け取ります。頂点シェーダは実行される度にその属性に割り当てられたバッファから次の値を受け取ります。[ユニフォーム](/ja/docs/Web/API/WebGL_API/Data#Uniforms) はJavaScriptのグローバル変数に似ており、シェーダーのどの実行時においても値は不変です。属性とユニフォームの位置は、単一のシェーダプログラムに固有のものなので、それらをまとめて保存して、簡単に受け渡しできるようにします。

```js
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };
```

## 正方形を作成する

正方形をレンダリングする前に、正方形の各頂点の座標を含むバッファを作成し、そこに頂点座標を書き込む必要があります。これを行うのに`initBuffers()`関数を利用します。より高度なWebGLの概念に踏み込むにつれて、この操作はより多くの(そしてより複雑な)3Dオブジェクトを作成するために拡張されるでしょう。

```js
function initBuffers(gl) {

  // 正方形の頂点の位置を保存するためのバッファを作成する

  const positionBuffer = gl.createBuffer();

  // 以降でpositionBufferをバッファ操作の適応対象として指定する

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // 正方形の頂点座標の配列を作成する

  const positions = [
    -1.0,  1.0,
     1.0,  1.0,
    -1.0, -1.0,
     1.0, -1.0,
  ];

  // 形を作るために頂点座標のリストをWebGLに渡す。
  // JavaScriptの配列からFloat32Arrayに変換したもので
  // バッファを埋める。

  gl.bufferData(gl.ARRAY_BUFFER,
                new Float32Array(positions),
                gl.STATIC_DRAW);

  return {
    position: positionBuffer,
  };
}
```

このルーチンは、この例のシーンの基本的な性質を考えると、かなり単純なものです。まず、`gl`オブジェクトの {{domxref("WebGLRenderingContext.createBuffer()", "createBuffer()")}} メソッドを呼び出してバッファを取得し、そこに頂点の位置を格納します。次に、{{domxref("WebGLRenderingContext.bindBuffer()", "bindBuffer()")}} メソッドを呼び出すことで、このバッファをコンテキストに関連付けます。

それが完了すると、正方形の各頂点の座標を持ったJavaScriptの配列を作成します。そしてこの配列は浮動小数点数の配列へと変換され、`gl`オブジェクトの{{domxref("WebGLRenderingContext.bufferData()", "bufferData()")}}メソッドへとオブジェクトの頂点座標を作るために渡されます。

## シーンをレンダリングする

シェーダーを確立し、位置を調べ、正方形の頂点位置をバッファに格納したら、実際にシーンをレンダリングすることができます。この例では、何もアニメーション行わないため、`drawScene()` 関数は非常にシンプルです。この関数では、後述するいくつかのユーティリティルーチンを使用しています。

> **メモ:** "mat4 is not defined" という JavaScript エラーが発生することがあります。これは、`glmatrix`に依存があることを意味します。この問題を解決するには、[ここ](https://github.com/mdn/webgl-examples/issues/20)で提案されているように、[gl-matrix.js](https://mdn.github.io/webgl-examples/tutorial/gl-mat)をインクルードする必要があります。

```js
function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // 黒でクリア、完全に不透明
  gl.clearDepth(1.0);                 // 全てをクリア
  gl.enable(gl.DEPTH_TEST);           // 深度テストを有効化
  gl.depthFunc(gl.LEQUAL);            // 奥にあるものは隠れるようにする

  // 描写を行う前にキャンバスをクリアする

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // カメラで遠近感を再現するために使用される特殊な行列、
  // パースペクティブマトリクスを作成します。視野角は45度、
  // 幅と高さの比率はキャンバスの表示サイズに合わせ、
  // カメラから0.1単位から100単位までのオブジェクトのみを
  // 表示するようにします。

  const fieldOfView = 45 * Math.PI / 180;   // ラジアンにする
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // メモ: glmatrix.js は常に第一引数として結果の受け取り先を取る
  mat4.perspective(projectionMatrix,
                   fieldOfView,
                   aspect,
                   zNear,
                   zFar);

  // 描写位置をシーンの中央である"identity"ポイントにセットする
  const modelViewMatrix = mat4.create();

  // そして描写位置を正方形を描写し始めたい位置に少しだけ動かす

  mat4.translate(modelViewMatrix,     // 変換結果の格納先
                 modelViewMatrix,     // 変換する行列
                 [-0.0, 0.0, -6.0]);  // 変換量

  // WebGLにどのように座標バッファからvertexPosition属性に座標を引き出すか伝える
  {
    const numComponents = 2;  // 2つの値をイテレーションの度に引き出す
    const type = gl.FLOAT;    // バッファのデータは32bit浮動小数点数
    const normalize = false;  // 正規化を行わない
    const stride = 0;         // ある値のセットから次の値まで何バイト取得するか
                              // 0 = typeとnumComponentsの値を用いる
    const offset = 0;         // バッファの何バイトから開始するか
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

  // WebGLに、描写するのに我々のプログラムを用いるように伝える

  gl.useProgram(programInfo.program);

  // シェーダユニフォームをセット

  gl.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix);
  gl.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix);

  {
    const offset = 0;
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  }
}
```

最初のステップはキャンバスを背景色でクリアし、カメラ視点を確立します。今回は視野角は45°、縦横比はキャンバスの表示寸法に合わせました。また、カメラから0.1単位から100単位までのオブジェクトのみをレンダリングするように指定しました。

次に、identity 位置をロードして正方形の位置をカメラから 6単位だけ遠ざかるように平行移動させ、確定します。その後、正方形の頂点バッファをシェーダーが `aVertexPosition` に使用している属性にバインドし、そこからデータを引き出す方法を WebGL に指示します。最後に、{{domxref("WebGLRenderingContext.drawArrays()", "drawArrays()")}} メソッドを呼び出してオブジェクトを描画します。

{{EmbedGHLiveSample('webgl-examples/tutorial/sample2/index.html', 670, 510) }}

[View the complete code](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample2) | [Open this demo on a new page](http://mdn.github.io/webgl-examples/tutorial/sample2/)

## マトリックスユーティリティの操作

行列の操作は複雑に見えるかもしれませんが、[一歩ずつ進めていけば、実はとても簡単です](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html)。一般に、人々は自分で書くよりも行列ライブラリを使用します。この例では、人気のある [glMatrix ライブラリ](http://glmatrix.net/)を使用しています。

関連情報

- [Matrices](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html) on WebGLFundamentals
- [Matrices](http://mathworld.wolfram.com/Matrix.html) on Wolfram MathWorld
- [Matrix](<http://en.wikipedia.org/wiki/Matrix_(mathematics)>) on Wikipedia

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
