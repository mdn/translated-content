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
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
```

The `loadShader()` function takes as input the WebGL context, the shader type, and the source code, then creates and compiles the shader as follows:

1. A new shader is created by calling {{domxref("WebGLRenderingContext.createShader", "gl.createShader()")}}.
2. The shader's source code is sent to the shader by calling {{domxref("WebGLRenderingContext.shaderSource", "gl.shaderSource()")}}.
3. Once the shader has the source code, it's compiled using {{domxref("WebGLRenderingContext.compileShader", "gl.compileShader()")}}.
4. To check to be sure the shader successfully compiled, the shader parameter `gl.COMPILE_STATUS` is checked. To get its value, we call {{domxref("WebGLRenderingContext.getShaderParameter", "gl.getShaderParameter()")}}, specifying the shader and the name of the parameter we want to check (`gl.COMPILE_STATUS`). If that's `false`, we know the shader failed to compile, so show an alert with log information obtained from the compiler using {{domxref("WebGLRenderingContext.getShaderInfoLog", "gl.getShaderInfoLog()")}}, then delete the shader and return `null` to indicate a failure to load the shader.
5. If the shader was loaded and successfully compiled, the compiled shader is returned to the caller.

To use this code we call it like this

```js
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
```

After we've created a shader program we need to look up the locations that WebGL assigned to our inputs. In this case we have one attribute and two uniforms. Attributes receive values from buffers. Each iteration of the vertex shader receives the next value from the buffer assigned to that attribute. [Uniforms](/ja/docs/Web/API/WebGL_API/Data#Uniforms) are similar to JavaScript global variables. They stay the same value for all iterations of a shader. Since the attribute and uniform locations are specific to a single shader program we'll store them together to make them easy to pass around

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

## Creating the square plane

Before we can render our square plane, we need to create the buffer that contains its vertex positions and put the vertex positions in it. We'll do that using a function we call `initBuffers()`; as we explore more advanced WebGL concepts, this routine will be augmented to create more -- and more complex -- 3D objects.

```js
function initBuffers(gl) {

  // Create a buffer for the square's positions.

  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the square.

  const positions = [
    -1.0,  1.0,
     1.0,  1.0,
    -1.0, -1.0,
     1.0, -1.0,
  ];

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.

  gl.bufferData(gl.ARRAY_BUFFER,
                new Float32Array(positions),
                gl.STATIC_DRAW);

  return {
    position: positionBuffer,
  };
}
```

This routine is pretty simplistic given the basic nature of the scene in this example. It starts by calling the `gl` object's {{domxref("WebGLRenderingContext.createBuffer()", "createBuffer()")}} method to obtain a buffer into which we'll store the vertex positions. This is then bound to the context by calling the {{domxref("WebGLRenderingContext.bindBuffer()", "bindBuffer()")}} method.

Once that's done, we create a JavaScript array containing the position for each vertex of the square plane. This is then converted into an array of floats and passed into the `gl` object's {{domxref("WebGLRenderingContext.bufferData()", "bufferData()")}} method to establish the vertex positions for the object.

## Rendering the scene

Once the shaders are established, the locations are looked up, and the square plane's vertex positions put in a buffer, we can actually render the scene. Since we're not animating anything in this example, our `drawScene()` function is very simple. It uses a few utility routines we'll cover shortly.

> **メモ:** You might get a JavaScript error saying " mat4 is not defined". This means there is a dependency on `glmatrix`. You can include [gl-matrix.js](https://mdn.github.io/webgl-examples/tutorial/gl-matrix.js) to resolve this issue, as suggested [here](https://github.com/mdn/webgl-examples/issues/20).

```js
function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfView = 45 * Math.PI / 180;   // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix,
                   fieldOfView,
                   aspect,
                   zNear,
                   zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  const modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [-0.0, 0.0, -6.0]);  // amount to translate

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute.
  {
    const numComponents = 2;  // pull out 2 values per iteration
    const type = gl.FLOAT;    // the data in the buffer is 32bit floats
    const normalize = false;  // don't normalize
    const stride = 0;         // how many bytes to get from one set of values to the next
                              // 0 = use type and numComponents above
    const offset = 0;         // how many bytes inside the buffer to start from
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

  // Tell WebGL to use our program when drawing

  gl.useProgram(programInfo.program);

  // Set the shader uniforms

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

The first step is to clear the canvas to our background color; then we establish the camera's perspective. We set a field of view of 45°, with a width to height ratio that match the display dimensions of our canvas. We also specify that we only want objects between 0.1 and 100 units from the camera to be rendered.

Then we establish the position of the square plane by loading the identity position and translating away from the camera by 6 units. After that, we bind the square's vertex buffer to the attribute the shader is using for `aVertexPosition` and we tell WebGL how to pull the data out of it. Finally we draw the object by calling the {{domxref("WebGLRenderingContext.drawArrays()", "drawArrays()")}} method.

{{EmbedGHLiveSample('webgl-examples/tutorial/sample2/index.html', 670, 510) }}

[View the complete code](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample2) | [Open this demo on a new page](http://mdn.github.io/webgl-examples/tutorial/sample2/)

## Matrix utility operations

Matrix operations might seem complicated but [they are actually pretty simple if you take them one step at a time](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html). Generally people use a matrix library rather than writing their own. In our case we're using the popular [glMatrix library](http://glmatrix.net/).

See also

- [Matrices](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html) on WebGLFundamentals
- [Matrices](http://mathworld.wolfram.com/Matrix.html) on Wolfram MathWorld
- [Matrix](<http://en.wikipedia.org/wiki/Matrix_(mathematics)>) on Wikipedia

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
