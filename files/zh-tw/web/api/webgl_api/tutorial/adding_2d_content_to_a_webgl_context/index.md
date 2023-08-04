---
title: 增加一個 2D 物件到 WebGL 環境
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

當你[建立了 WebGL 的 context](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)後，便可開始渲染。最簡單的例子就是加入一個普通的正方形。接下來，我們會介紹如何畫一個正方形。

## 畫場景

首先我們需要知道雖然這個範例只是要畫一個正方形，但我們還是在 3D 的空間裡作圖。基本上，我們就是畫一個正方形並把它放在相機前面，使正方形與使用者的視角垂直。我們要定義一個 shader，透過它來渲染我們的物件。接下來，我們會展示如何在螢幕前顯示一個正方形。

### Shader

WebGL Shader 使用 [OpenGL ES Shading Language](https://www.khronos.org/files/opengles_shading_language.pdf)。 這邊不討論 shader 的細節的，但簡而言之，我們需要定義兩個 shader (GPU 上可執行的函數): vertex shader 和 fragment shader。這兩個 shader 會以字串的形式傳入 WebGL，編譯後在 GPU 上執行。

#### Vertex shader

Vertex shader 是用來定義一個變數 gl_Position 的值來控制畫布空間的值(-1 到+1)，下面的範例，我們設了一個變數`aVertexPosition`用來記錄 vertex 的位置。接下來我們將該位置乘上兩個 4x4 的矩陣(`uProjectionMatrix`和`uModelMatrix`)，並將結果設定為 gl_Position 的值。如果想要了解更多關於 Projection 和其他矩陣可以參閱這篇[文件](https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html)。

```js
// Vertex shader program

const vsSource = `
    attribute vec4 aVertexPosition;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
  `;
```

#### Fragment shader

每次 vertex shader 給 gl_Position 1 到 3 個值的時候，它會分別畫出點、線、三角形。畫圖的時候，會呼叫 fragment shader 來詢問每個 pixel 的顏色。在這個範例中，我們對於每次詢問都回傳白色。

`gl_FragColor` 是 GL 預設的變數用來定義每個 fragment 的顏色，透過設定該變數的值來定義每個 pixel 的顏色，如下：

```js
const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;
```

### 初始化 shader

現在我們已經定義了兩個 shader ，我們接下來要將它們傳入 WebGL，編譯並連結。下面的程式碼呼叫了 loadShader 來建立兩個 shader。接下來，我們要新增一個程式，並將 shader 加入該程式，並將程式連結起來。如果編譯或連接失敗，程式碼會顯示錯誤訊息。

```js
//
// 初始化 shader 來告知WebGL怎麼畫
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // 建立 shader 程式

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // 錯誤處理

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      "Unable to initialize the shader program: " +
        gl.getProgramInfoLog(shaderProgram),
    );
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
    alert(
      "An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader),
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
```

我們可以透過呼叫 initShaderProgram 來建立 shader 程式

```js
const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
```

接下來我們需要找到 WebGL 生成出的位置。這個例子中我們有一個 attribute、兩個 uniform。 Attributes 從 buffer 獲得值。每次迭代時，vertex shader 從 buffer 得到下一個值並傳入到 attribute。 Uniform 則像是 Javascript 的全域變數。每次迭代，他們的值不會改變。為了之後方便，我們將 shader 程式與 attribute 和 uniform 存放在同一個物件中。

```js
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

## 建立正方形平面

在我們渲染前，我們要建立一個 buffer 用來儲存頂點的座標。在此我們宣告一個函數 `initBuffers()` ，隨著之後建立更多複雜的物件，這個動作會重複見到很多次。

```js
function initBuffers(gl) {
  // 建立一個 buffer 來儲存正方形的座標

  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the square.

  const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
  };
}
```

這個步驟非常簡單，一開始呼叫`gl`物件的函數 {{domxref("WebGLRenderingContext.createBuffer()", "createBuffer()")}} 來產生一個儲存座標的 buffer，並將將該 buffer 綁定 WebGL 的 context。

完成後，我們宣告一個陣列來儲存正方形平面各頂點的座標，並轉型為浮點數陣列並用{{domxref("WebGLRenderingContext.bufferData()", "bufferData()")}}函數傳入 `gl` 物件。

## 渲染場景

Shader 建立好了、位置也確定好了、正方形平面頂點的位置也已經放到 buffer 後，我們就可以實際來渲染場景了。因為這個例子沒有任何的動畫，`drawScene()`函數非常單純。

```js
function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // 設定為全黑
  gl.clearDepth(1.0); // 清除所有東西
  gl.enable(gl.DEPTH_TEST); // Enable 深度測試
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things

  // 開始前先初始化畫布

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfView = (45 * Math.PI) / 180; // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  const modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  mat4.translate(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to translate
    [-0.0, 0.0, -6.0],
  ); // amount to translate

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute.
  {
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

  // Tell WebGL to use our program when drawing

  gl.useProgram(programInfo.program);

  // Set the shader uniforms

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
```

第一步，我們先將畫布背景設定為黑色，並設定相機的視角。我們將角度設為 45°，並設定成與畫布的長寬比相同。另外我們指定我們只要渲染離相機 0.1 \~ 100 單位遠的物件。

接下來，我們讀入正方形的位置，並把它擺在離相機 6 單位遠的位置。然後我們將正方形頂點的 buffer 綁定到 gl 上。最後我們呼叫{{domxref("WebGLRenderingContext.drawArrays()", "drawArrays()")}}函數來渲染物件。

{{EmbedGHLiveSample('webgl-examples/tutorial/sample2/index.html', 670, 510) }}

[檢視完整程式碼](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample2) | [開啟新頁面來檢視結果](http://mdn.github.io/webgl-examples/tutorial/sample2/)

## 矩陣運算

矩陣的運算看起來很複雜，但其實[一步一步運算其實不會那麼困難](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html)。大部分使用者不會寫自己的運算函數，多半是使用現成的矩陣函數庫，這個例子中我們用的是 [glMatrix library](http://glmatrix.net/) 。

可參考以下資料

- [Matrices](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html) on WebGLFundamentals
- [Matrices](http://mathworld.wolfram.com/Matrix.html) on Wolfram MathWorld
- [Matrix](<http://en.wikipedia.org/wiki/Matrix_(mathematics)>) on Wikipedia

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
