---
title: 在 WebGL 中使用纹理
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

现在我们已经创建好了一个可以旋转的 3D 的立方体，接下来是时候使用贴图来代替每个面的单一的颜色了。

## 加载纹理

首先加入加载纹理的代码。现在我们只使用一张单一的纹理贴到立方体的 6 个面上，但是同样的方法可以用来加载任意数量的纹理贴图。

> **备注：** 值得注意的一点是对纹理的加载同样需要遵循[跨域访问规则](/zh-CN/docs/Web/HTTP/CORS)；也就是说你只能从允许跨域访问的网址加载你需要的纹理。见[下方跨域纹理](#跨域纹理)小节以了解详情。

> **备注：** 在你的“webgl-demo.js”脚本中添加下面的两个函数：

```js
//
// Initialize a texture and load an image.
// When the image finished loading copy it into the texture.
//
function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Because images have to be downloaded over the internet
  // they might take a moment until they are ready.
  // Until then put a single pixel in the texture so we can
  // use it immediately. When the image has finished downloading
  // we'll update the texture with the contents of the image.
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    width,
    height,
    border,
    srcFormat,
    srcType,
    pixel,
  );

  const image = new Image();
  image.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      level,
      internalFormat,
      srcFormat,
      srcType,
      image,
    );

    // WebGL1 has different requirements for power of 2 images
    // vs. non power of 2 images so check if the image is a
    // power of 2 in both dimensions.
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      // Yes, it's a power of 2. Generate mips.
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      // No, it's not a power of 2. Turn off mips and set
      // wrapping to clamp to edge
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;

  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) === 0;
}
```

函数 `loadTexture()` 首先调用 WebGL 的 {{domxref("WebGLRenderingContext.createTexture()", "createTexture()")}} 函数来创建一个 WebGL 纹理对象 texture。接下来使用 {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}} 以上传一个蓝色的像素点。这样我们就可以在图片下载完成之前使用这个蓝色的纹理了。

要从图片文件加载纹理，接下来创建一个 `Image` 对象，并为 `src` 设置我们想要用作纹理的图片的 URL。我们为 `image.onload` 设置的函数会在图片下载完成时被调用。那时我们再次调用 {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}}，这次我们将图片作为纹理的数据源。之后，我们根据下载的图像在两个维度上是否为 2 的幂来设置纹理的过滤（filter）和平铺（wrap）。

WebGL1 中，对于非 2 的幂纹理只能使用 `NEAREST` 和 `LINEAR` 过滤，且不会生成贴图。此外，平铺模式也必须设置为 `CLAMP_TO_EDGE`。另一方面，如果纹理在两个维度上都是 2 的幂，那么 WebGL 就可以使用更高质量的过滤，可以使用贴图，还能够将平铺模式设置为 `REPEAT` 或 `MIRRORED_REPEAT`。

使用重复纹理寻址的一个例子就是使用一张砖块的纹理来平铺满一面墙壁。

多级渐进纹理和纹理坐标重复可以通过调用 {{domxref("WebGLRenderingContext.texParameter()", "texParameteri()")}} 来禁用，当然首先你已经通过调用 {{domxref("WebGLRenderingContext.bindTexture()", "bindTexture()")}} 绑定过纹理了。这样虽然已经可以使用非 2 的幂纹理了，但是你将无法使用多级渐进纹理，纹理坐标包装，纹理坐标重复，而且无法控制设备如何处理你的纹理。

```js
// gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Prevents s-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Prevents t-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

现在，当使用以上参数时，兼容 WebGL 的设备就会自动变得可以使用任何分辨率的纹理（当然还要考虑像素上限）。如果不使用上面这些参数的话，任何非 2 的幂纹理使用都会失败然后返回一张纯黑图片。

为了加载图像，在我们的 `main()` 函数中添加对 `loadTexture()` 函数的调用。这可以在 `initBuffers(gl)` 调用之后添加。

但需要注意的是：浏览器会从加载的图像中按从左上角开始的自上而下顺序复制像素，而 WebGL 需要按自下而上的顺序——从左下角开始的像素顺序。（参见[为什么我的 WebGL 纹理是颠倒的？](https://jameshfisher.com/2020/10/22/why-is-my-webgl-texture-upside-down/)以了解详情。）

所以为了防止渲染时图像纹理方向错误，我们还需要调用 `pixelStorei()` 并将 `gl.UNPACK_FLIP_Y_WEBGL` 参数设置为 `true`，以调整像素顺序，使其翻转成 WebGL 需要的自下而上顺序。

> **备注：** 添加下面的代码到 `main()` 函数，紧跟在 `initBuffers()` 调用之后：

```js
// Load texture
const texture = loadTexture(gl, "cubetexture.png");
// Flip image pixels into the bottom-to-top order that WebGL expects.
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
```

> **备注：** 最后，将 [cubetexture.png](https://raw.githubusercontent.com/mdn/dom-examples/main/webgl-examples/tutorial/sample6/cubetexture.png) 下载到与 JavaScript 文件相同的本地目录。

## 映射纹理到面

现在，纹理已加载并准备就绪。但在我们使用它之前，我们需要建立纹理坐标到立方体上的面的顶点的映射。这将取代 `initBuffers()` 中为设置每个立方体面颜色而存在的所有先前的代码。

> **备注：** 添加这个函数到“init-buffer.js”模块：

```js
function initTextureBuffer(gl) {
  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // Front
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Back
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Top
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Bottom
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Right
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Left
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  ];

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(textureCoordinates),
    gl.STATIC_DRAW,
  );

  return textureCoordBuffer;
}
```

首先，这段代码创建了一个 WebGL 缓冲区，我们将在其中存储每个面的纹理坐标，然后将该缓冲区绑定为将要写入的数组。

`textureCoordinates` 数组定义好了与每个面上的每个顶点一一对应的纹理坐标。请注意，纹理坐标的取值范围只能从 0.0 到 1.0，所以不论纹理贴图的实际大小是多少，为了实现纹理映射，我们要使用的纹理坐标只能规范化到 0.0 到 1.0 的范围内。

一旦我们建立了纹理映射数组，我们将数组传递到缓冲区中，这样 WebGL 就可以使用该数据了。

然后我们返回新的缓冲区。

接下来，我们需要更新 `initBuffers()` 来创建并返回纹理坐标缓冲区代替颜色缓冲区。

> **备注：** 在“init-buffers.js”模块的 `initBuffers()` 函数中，将 `initColorBuffer()` 的调用替换为下面的这行：

```js
const textureCoordBuffer = initTextureBuffer(gl);
```

> **备注：** 在“init-buffers.js”模块的 `initBuffers()` 函数中，将 `return` 语句替换为以下内容：

```js
return {
  position: positionBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

## 更新着色器

为了使用纹理来代替单一的颜色，着色器程序和着色器程序的初始化代码都需要进行修改。

### 顶点着色器

我们需要更改顶点着色器，使其不再获取颜色数据，而是获取纹理坐标数据。

> **备注：** 在你的 `main()` 函数中更新 `vsSource` 定义，像这样：

```js
const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;
    }
  `;
```

代码的关键更改在于不再获取顶点颜色数据转而获取和设置纹理坐标数据；这样就能把顶点与其对应的纹理联系在一起了。

### 片段着色器

那么片段着色器也要相应地进行更改，像这样更新 `main()` 函数中的 `fsSource` 声明：

```js
const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
  `;
```

现在的代码不会再使用一个简单的颜色值填充片段颜色，片段的颜色是通过采样器使用最好的映射方式从纹理中的每一个像素计算出来的。

### Attribute 与 Uniform 位置

因为我们修改了 attribute 并添加了 uniform，所以我们需要查找它们的位置。

> **备注：** 在你的 `main()` 函数中，像这样更新 `programInfo` 的定义：

```js
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
  },
};
```

## 绘制具体纹理贴图的立方体

对 `drawScene()` 函数的更改很简单。

> **备注：** 在“draw-scene.js”模块的 `drawScene()` 函数中添加以下函数：

```js
// 告诉 WebGL 如何从缓冲区中提取纹理坐标
function setTextureAttribute(gl, buffers, programInfo) {
  const num = 2; // 每个坐标由 2 个值组成
  const type = gl.FLOAT; // 缓冲区中的数据为 32 位浮点数
  const normalize = false; // 不做标准化处理
  const stride = 0; // 从一个坐标到下一个坐标要获取多少字节
  const offset = 0; // 从缓冲区内的第几个字节开始获取数据
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
  gl.vertexAttribPointer(
    programInfo.attribLocations.textureCoord,
    num,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
}
```

> **备注：** 在你的“draw-scene.js”模块的 `drawScene()` 函数中，用下面一行替换 `setColorAttribute()` 的调用：

```js
setTextureAttribute(gl, buffers, programInfo);
```

然后添加代码来指定要映射到面的纹理。

> **备注：** 在你的 `drawScene()` 函数中，就在对 `gl.uniformMatrix4fv()` 的两次调用之后，添加以下代码：

```js
// Tell WebGL we want to affect texture unit 0
gl.activeTexture(gl.TEXTURE0);

// Bind the texture to texture unit 0
gl.bindTexture(gl.TEXTURE_2D, texture);

// Tell the shader we bound the texture to texture unit 0
gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
```

WebGL 提供了至少 8 个纹理单元，`gl.TEXTURE0` 是第一个。若我们想要改变第一个单元，我们需要调用 {{domxref("WebGLRenderingContext.bindTexture()", "bindTexture()")}} 以将纹理绑定到纹理单元 0 的 `TEXTURE_2D` 绑定点。然后告诉着色器所用纹理单元 0 作为 `uSampler`。

最后，在 `drawScene()` 函数中添加 `texture` 作为参数，包括它被定义和被调用的地方。

> **备注：** 更新你的 `drawScene()` 函数的定义以添加新的参数：

```js-nolint
function drawScene(gl, programInfo, buffers, texture, cubeRotation) {
```

> **备注：** 更新你的 `main()` 函数中调用 `drawScene()` 的地方：

```js
drawScene(gl, programInfo, buffers, texture, cubeRotation);
```

好，现在我们的立方体就会像这样旋转起来了。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[查看完整示例代码](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [在新窗口里打开示例](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## 跨域纹理

加载 WebGL 纹理应该也可以说是跨域访问控制里的一个话题。为了在我们的显示内容里使用其他域名里的纹理图片，允许跨域访问也是要考虑的。可以通过查看[HTTP 访问控制](/zh-CN/docs/Web/HTTP/CORS)来获取到更多的相关细节。

[这篇文章](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/)也对跨域加载纹理到 WebGL 做出了解释。而且文章里面还包含了一个使用的[例子](https://people.mozilla.org/~bjacob/webgltexture-cors-js.html)。

被污染过的（只写）画布是不能拿来当作 WebGL 纹理来使用的。举个例子来说，当把一张跨域的图片画到一个 2D 的 {{ HTMLElement("canvas") }} 中时，这个画布就是“被污染过的”。

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
