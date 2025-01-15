---
title: 基本的な 2D WebGL アニメーションの例
slug: Web/API/WebGL_API/Basic_2D_animation_example
l10n:
  sourceCommit: e826ecdcc6ff759c8441f62ef17f54bf666a4c1c
---

{{DefaultAPISidebar("WebGL")}}

この WebGL の例では、キャンバスを作成し、その中に WebGL を使用して回転する四角形をレンダリングします。シーンを表すために使用する座標系は、キャンバスの座標系と同じです。つまり、(0, 0) は左上隅にあり、右下隅は (600, 460) となります。

## 回転する正方形の例

様々な手順で、回転する正方形を取得してみましょう。

### 頂点シェーダー

まず頂点シェーダーを見てみましょう。いつものように、シーンに使用している座標をクリップスペース座標に変換することです (つまり (0, 0) がコンテキストの中心にあり、コンテキストの実際のサイズに関係なく各軸が -1.0 から 1.0 に伸びるシステムです)

```html
<script id="vertex-shader" type="x-shader/x-vertex">
  attribute vec2 aVertexPosition;

  uniform vec2 uScalingFactor;
  uniform vec2 uRotationVector;

  void main() {
    vec2 rotatedPosition = vec2(
      aVertexPosition.x * uRotationVector.y +
            aVertexPosition.y * uRotationVector.x,
      aVertexPosition.y * uRotationVector.y -
            aVertexPosition.x * uRotationVector.x
    );

    gl_Position = vec4(rotatedPosition * uScalingFactor, 0.0, 1.0);
  }
</script>
```

メインプログラムは属性 `aVertexPosition` を共有します。これは使用している座標系の頂点の位置です。位置の両方のコンポーネントが -1.0 から 1.0 の範囲になるように、これらの値を変換する必要があります。これは、コンテキストのアスペクト比に基づいたスケーリング係数を掛けることで簡単に実行できます。この計算については、後ほど説明します。

形状も回転し、変換を適用することでそれを行うことができます。最初にそれを行います。頂点の回転位置は、JavaScript コードによって計算された均一な `uRotationVector` にある回転ベクトルを適用して計算されます。

次に、`uScalingFactor` の JavaScript コードによって提供されるスケーリングベクトルを回転位置に乗算することにより、最終位置が計算されます。2D で描画しているため、`z` と `w` の値はそれぞれ 0.0 と 1.0 に固定されています。

次に、標準 WebGL グローバル変数の `gl_Position` へ変換および回転された頂点の位置を設定します。

### フラグメントシェーダー

次はフラグメントシェーダーです。その役割はレンダリングされる形状の各ピクセルの色を返すことです。ライティングが適用されていない、テクスチャのないソリッドオブジェクトを描画しているため、これはとても簡単です。

```html
<script id="fragment-shader" type="x-shader/x-fragment">
  #ifdef GL_ES
    precision highp float;
  #endif

  uniform vec4 uGlobalColor;

  void main() {
    gl_FragColor = uGlobalColor;
  }
</script>
```

これは必要に応じて `float` 型の精度を指定することから始まります。次に、グローバル変数 `gl_FragColor` へ uniform 修飾子付きの `uGlobalColor` の値を設定します。これは、JavaScript コードにより正方形の描画に使用される色に設定されます。

### HTML

HTML は、WebGL コンテキストを取得する {{HTMLElement("canvas")}} のみで構成されています。

```html
<canvas id="glcanvas" width="600" height="460">
  Oh no! Your browser doesn't support canvas!
</canvas>
```

### グローバル変数と初期化

まず、グローバル変数。ここではこれらについては説明しません。代わりに、今後のコードで使用される場合について説明します。

```js
let gl = null;
let glCanvas = null;

// Aspect ratio and coordinate system
// details

let aspectRatio;
let currentRotation = [0, 1];
let currentScale = [1.0, 1.0];

// Vertex information

let vertexArray;
let vertexBuffer;
let vertexNumComponents;
let vertexCount;

// Rendering data shared with the
// scalers.

let uScalingFactor;
let uGlobalColor;
let uRotationVector;
let aVertexPosition;

// Animation timing

let previousTime = 0.0;
let degreesPerSecond = 90.0;
```

プログラムの初期化は `startup()` と呼ばれる {{domxref("Window/load_event", "load")}} イベントハンドラーによって処理します。

```js
window.addEventListener("load", startup, false);

function startup() {
  glCanvas = document.getElementById("glcanvas");
  gl = glCanvas.getContext("webgl");

  const shaderSet = [
    {
      type: gl.VERTEX_SHADER,
      id: "vertex-shader",
    },
    {
      type: gl.FRAGMENT_SHADER,
      id: "fragment-shader",
    },
  ];

  shaderProgram = buildShaderProgram(shaderSet);

  aspectRatio = glCanvas.width / glCanvas.height;
  currentRotation = [0, 1];
  currentScale = [1.0, aspectRatio];

  vertexArray = new Float32Array([
    -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5,
  ]);

  vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexArray, gl.STATIC_DRAW);

  vertexNumComponents = 2;
  vertexCount = vertexArray.length / vertexNumComponents;

  currentAngle = 0.0;

  animateScene();
}
```

WebGL コンテキスト `gl` を取得し、シェーダープログラムを構築することから始める必要があります。ここでは、プログラムに複数のシェーダーをとても簡単に追加できるように設計されたコードを使用しています。配列 `shaderSet` にはオブジェクトのリストが含まれ、各オブジェクトはプログラムにコンパイルされる 1 つのシェーダー関数を記述しています。各関数には、タイプ (`gl.VERTEX_SHADER` または `gl.FRAGMENT_SHADER` のいずれか) と ID (シェーダーのコードを含む {{HTMLElement("script")}} 要素の ID) の両方があります。

シェーダーセットは `buildShaderProgram()` 関数に渡され、コンパイルされリンクされたシェーダープログラムを返します。次にこれがどのように機能するかを見ていきます。

シェーダープロシェグラムが構築し、幅を高さで割ってからコンテキストのアスペクト比を計算します。次に、アニメーションの現在の回転ベクトルを `[0, 1]` に設定し、スケーリングベクトルを `[1.0, aspectRatio]` に設定します。頂点シェーダーで見たスケーリングベクトルは、-1.0 から 1.0 の範囲に合うように座標をスケーリングするために使用されます。

次に頂点の配列が {{jsxref("Float32Array")}} として作成され、三角形ごとに 6 つの座標 (3 つの 2D 頂点) が描画され、合計 12 個の値が作成されます。

ご覧のとおり、各軸に -1.0 〜 1.0 の座標系を使用しています。なぜ調整する必要があるのでしょうか？これは単にコンテキストが正方形ではないためです。幅 600 ピクセル、高さ 460 のコンテキストを使用しています。これらの各ディメンションは、-1.0 〜 1.0 の範囲にマッピングされます。2 つの軸は同じ長さではないため、2 つの軸のいずれかの値を調整しないと、正方形は一方または他方に引き伸ばされます。したがって、これらの値を正規化する必要があります。

頂点配列が作成されたら、{{domxref("WebGLRenderingContext.createBuffer", "gl.createBuffer()")}} を呼び出し、それらを含む新しい GL バッファーを作成します。{{domxref("WebGLRenderingContext.bindBuffer", "gl.bindBuffer()")}} を呼び出して標準の WebGL 配列バッファー参照をバインドし、{{domxref("WebGLRenderingContext.bufferData", "gl.bufferData()")}} を使用して頂点データをバッファーにコピーします。`gl.STATIC_DRAW` の使用法が指定されており、データは 1 回だけ設定され、変更されることはありませんが、繰り返し使用されることを WebGL に伝えます。これにより、WebGL は、その情報に基づいてパフォーマンスを向上させる可能性のある、適用可能な最適化を検討します。

WebGL に提供される頂点データを使用して、`vertexNumComponents` を各頂点のコンポーネントの数 (2D 頂点であるため 2) に設定し、`vertexCount` を頂点リストの頂点の数に設定します。

次に、まだ回転を実行していないため、現在の回転角度 (度) を 0.0 に設定し、回転速度 (画面の更新期間ごとの度、通常 60 FPS) を 6 に設定します。

最後に、`animateScene()` が呼び出されて、最初のフレームをレンダリングし、アニメーションの次のフレームのレンダリングをスケジュールします。

### シェーダープログラムのコンパイルとリンク

`buildShaderProgram()` 関数は、シェーダープログラムにコンパイルおよびリンクされるシェーダー関数のセットを記述するオブジェクトの配列を入力として受け取り、ビルドおよびリンク後にシェーダープログラムを返します。

```js
function buildShaderProgram(shaderInfo) {
  const program = gl.createProgram();

  shaderInfo.forEach((desc) => {
    const shader = compileShader(desc.id, desc.type);

    if (shader) {
      gl.attachShader(program, shader);
    }
  });

  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.log("Error linking shader program:");
    console.log(gl.getProgramInfoLog(program));
  }

  return program;
}
```

まず、{{domxref("WebGLRenderingContext.createProgram", "gl.createProgram()")}} は新しい空の GLSL プログラムを作成するために呼び出されます。

次に、指定されたシェーダーのリスト内の各シェーダーに対して、`compileShader()` 関数を呼び出してコンパイルし、ビルドするシェーダー関数の ID とタイプを渡します。前述のように、これらの各オブジェクトには、シェーダーコードが存在する `<script>` 要素の ID とシェーダーのタイプが含まれます。コンパイルされたシェーダーは、{{domxref("WebGLRenderingContext.attachShader", "gl.attachShader()")}} へ渡すことでシェーダープログラムにアタッチされます。

> [!NOTE]
> 実際には、ここよりさらに一歩進んで、`<script>` 要素の `type` 属性の値を見て、シェーダーのタイプを判断できます。

すべてのシェーダーがコンパイルされると、{{domxref("WebGLRenderingContext.linkProgram", "gl.linkProgram()")}} を使用してプログラムがリンクされます。

プログラムのリンク中にエラーが発生した場合、エラーメッセージはコンソールに記録されます。

最後に、コンパイルされたプログラムが呼び出し元に返されます。

### 個々のシェーダーをコンパイルする

以下の `compileShader()` 関数は、単一のシェーダーをコンパイルするために `buildShaderProgram()` によって呼び出されます。

```js
function compileShader(id, type) {
  const code = document.getElementById(id).firstChild.nodeValue;
  const shader = gl.createShader(type);

  gl.shaderSource(shader, code);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.log(
      `Error compiling ${
        type === gl.VERTEX_SHADER ? "vertex" : "fragment"
      } shader:`,
    );
    console.log(gl.getShaderInfoLog(shader));
  }
  return shader;
}
```

コードは指定された ID を持つ {{HTMLElement("script")}} 要素内に含まれるテキストノードの値を取得することにより、HTML ドキュメントから取得されます。次に {{domxref("WebGLRenderingContext.createShader", "gl.createShader()")}} を使用して、指定されたタイプの新しいシェーダーが作成されます。

ソースコードは {{domxref("WebGLRenderingContext.shaderSource", "gl.shaderSource()")}} を通して新しいシェーダーに送信され、そのときシェーダーは {{domxref("WebGLRenderingContext.compileShader", "gl.compileShader()")}} を使用してコンパイルされます。

コンパイルエラーはコンソールに記録されます。生成されるメッセージに正しいシェーダータイプの文字列を挿入するための[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)文字列の使用に注意してください。実際のエラーの詳細は、{{domxref("WebGLRenderingContext.getShaderInfoLog", "gl.getShaderInfoLog()")}}を呼び出すことによって取得されます。

最後に、コンパイルされたシェーダーが呼び出し元 (`buildShaderProgram()` 関数) へ返します。

### シーンの描画とアニメーション化

`animateScene()` 関数は各アニメーションフレームをレンダリングするために呼び出されます。

```js
function animateScene() {
  gl.viewport(0, 0, glCanvas.width, glCanvas.height);
  gl.clearColor(0.8, 0.9, 1.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const radians = (currentAngle * Math.PI) / 180.0;
  currentRotation[0] = Math.sin(radians);
  currentRotation[1] = Math.cos(radians);

  gl.useProgram(shaderProgram);

  uScalingFactor = gl.getUniformLocation(shaderProgram, "uScalingFactor");
  uGlobalColor = gl.getUniformLocation(shaderProgram, "uGlobalColor");
  uRotationVector = gl.getUniformLocation(shaderProgram, "uRotationVector");

  gl.uniform2fv(uScalingFactor, currentScale);
  gl.uniform2fv(uRotationVector, currentRotation);
  gl.uniform4fv(uGlobalColor, [0.1, 0.7, 0.2, 1.0]);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

  aVertexPosition = gl.getAttribLocation(shaderProgram, "aVertexPosition");

  gl.enableVertexAttribArray(aVertexPosition);
  gl.vertexAttribPointer(
    aVertexPosition,
    vertexNumComponents,
    gl.FLOAT,
    false,
    0,
    0,
  );

  gl.drawArrays(gl.TRIANGLES, 0, vertexCount);

  requestAnimationFrame((currentTime) => {
    const deltaAngle =
      ((currentTime - previousTime) / 1000.0) * degreesPerSecond;

    currentAngle = (currentAngle + deltaAngle) % 360;

    previousTime = currentTime;
    animateScene();
  });
}
```

アニメーションのフレームを描画するために最初に行う必要があるのは、背景を目的の色にクリアすることです。この場合、{{HTMLElement("canvas")}} のサイズに基づいてビューポートを設定し、{{domxref("WebGLRenderingContext.clearColor", "clearColor()")}} を呼び出して使用する色を設定します。コンテンツをクリアするとき、{{domxref("WebGLRenderingContext.clear", "clear()")}} でバッファーをクリアします。

次に、現在の回転ベクトルは、現在の回転角度 (`currentAngle`) を[ラジアン](https://ja.wikipedia.org/wiki/ラジアン)に変換し、回転ベクトルの最初のコンポーネントを [sin](https://ja.wikipedia.org/wiki/三角関数) へ設定し、2 番目のコンポーネントを [cos](https://ja.wikipedia.org/wiki/三角関数) へ設定します。`currentRotation` ベクトルは、現在の角度 `currentAngle` にある[単位円](https://ja.wikipedia.org/wiki/単位円)上の点の位置です。

{{domxref("WebGLRenderingContext.useProgram", "useProgram()")}} は、以前に確立した GLSL シェーディングプログラムをアクティブにするために呼び出されます。次に、JavaScript コードとシェーダー間 ({{domxref("WebGLRenderingContext.getUniformLocation", "getUniformLocation()")}} を使用) で情報を共有するために使用される各 uniform の位置を取得します。

`uScalingFactor` という名前の uniform は、以前に計算された `currentScale` 値に設定されます。覚えているかもしれませんが、これはコンテキストのアスペクト比に基づいて座標系を調整するために使用される値です。これは {{domxref("WebGLRenderingContext.uniform2fv", "uniform2fv()")}} を使用して行われます (これは 2 値の浮動小数点ベクトルであるため)。

`uRotationVector` は、同じく `uniform2fv()` を使用して、現在の回転ベクトル (`currentRotation`) に設定されます。

`uGlobalColor` は {{domxref("WebGLRenderingContext/uniform", "uniform4fv()")}} を使用して、正方形を描画するときに使用する色に設定されます。これは 4 コンポーネントの浮動小数点ベクトルです (赤、緑、青、およびアルファごとに 1 つのコンポーネント)。

これですべてが終ったので、頂点バッファーを設定して形状を描画できます。まず、{{domxref("WebGLRenderingContext.bindBuffer", "bindBuffer()")}} を呼び出すことにより、形状の三角形の描画に使用される頂点のバッファーを設定します。次に、{{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}} を呼び出して、シェーダープログラムから頂点位置属性のインデックスを取得します。

頂点位置属性のインデックスが `aVertexPosition` で利用可能になったので、`enableVertexAttribArray()` を呼び出して位置属性を有効にし、シェーダープログラム (特に頂点シェーダー) で使用できるようにします。

次に、{{domxref("WebGLRenderingContext.vertexAttribPointer", "vertexAttribPointer()")}} を呼び出すことにより、頂点バッファーが `aVertexPosition` 属性にバインドされます。このステップはほとんど副作用であるため、このステップは明らかではありません。ただし、結果として、`aVertexPosition` にアクセスすると、頂点バッファーからデータを取得するようになります。

シェイプの頂点バッファーと頂点を 1 つずつ頂点シェーダーに配信するために使用される `aVertexPosition` 属性との間に関連付けがあれば、{{domxref("WebGLRenderingContext.drawArrays", "drawArrays()")}} を呼び出してシェイプを描画する準備が整います。

この時点で、フレームが描画されました。あとは、次の描画をスケジュールするだけです。ここでは {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} を呼び出して、ブラウザーが画面を更新する準備ができたときにコールバック関数を実行するように要求します。

`requestAnimationFrame()` コールバックは、フレーム描画が開始された時間を指定する単一のパラメーター `currentTime` を入力として受け取ります。それと、最後のフレームが描画された保存時間、`previousTime`、および正方形が回転する 1 秒あたりの度数 (`degreesPerSecond`) を使用して、`currentAngle` の新しい値を計算します。次に、`previousTime` の値が更新され、`animateScene()` を呼び出して次のフレームを描画します (そして、次のフレームが描画されるように無限にスケジュールします )。

### 結果

これは 1 つの単純なオブジェクトを描画しているだけのとても単純な例ですが、ここで使用されている概念ははるかに複雑なアニメーションに拡張されます。

{{EmbedLiveSample("A_rotating_square_example", 660, 500)}}

## 関連情報

- [WebGL API](/ja/docs/Web/API/WebGL_API)
- [WebGL チュートリアル](/ja/docs/Web/API/WebGL_API/Tutorial)
