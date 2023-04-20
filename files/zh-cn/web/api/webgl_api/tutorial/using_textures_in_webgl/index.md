---
title: Using textures in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

现在我们已经创建好了一个可以旋转的 3D 的立方体，接下来是时候使用贴图来代替每个面的单一的颜色了。

## 加载纹理

首先加入加载纹理的代码。现在我们只使用一张单一的纹理贴到立方体的 6 个面上，但是同样的方法可以用来加载任意数量的纹理贴图。

> **备注：** 值得注意的一点是对纹理的加载同样需要遵循[跨域访问规则](zh-CN/docs/Web/HTTP/Access_control_CORS)；也就是说你只能从允许跨域访问的网址加载你需要的纹理。下面的例子就是支持跨域访问的。

添加下面两个函数到"webgl-demo.js"中：

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
    pixel
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
      image
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

函数 `initTextures()` 首先调用 WebGL {{domxref("WebGLRenderingContext.createTexture()", "createTexture()")}} 函数来创建一个 WebGL 纹理对象。然后使用`texImage2D()`函数上传一个蓝色像素。这样即使我们的图像需要一些时间来下载，纹理也立即可用作纯蓝色。

为了从图像文件中加载纹理，需要创建一个 `Image` 对象，并将 `src` 赋值为我们希望用作纹理的图像的 URL。我们分配给 `image.onload` 的函数将在图像下载完成后被调用。在那时，我们再次调用 `texImage2D()`，这次使用图像作为纹理的源。之后，我们根据下载的图像是否在两个维度中都为2的幂次方，为纹理设置纹理过滤器和纹理坐标包装。

WebGL1仅支持使用过滤方式为`NEAREST`或`LINEAR`的非2的幂次方纹理，并且无法为它们生成多级渐进纹理。此外，它们的纹理坐标包装模式必须设置为`CLAMP_TO_EDGE`。如果纹理在两个维度上都是2的幂次方，则WebGL可以进行更高质量的过滤，可以使用多级渐进纹理，并且可以将纹理坐标包装模式设置为“REPEAT”或“MIRRORED_REPEAT”。

> **备注：** 在多数情况下，纹理的宽和高都必须是 2 的幂（如：1，2，4，8，16 等等）。如果有什么特殊情况请参考下面的“[非 2 的幂纹理](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#非2的幂纹理)”小节。

代码的接下来两行设置了纹理过滤器，过滤器用来控制当图片缩放时像素如何生成如何插值。在这个例子里，我们对图片放大使用的是线性过滤，而对图片缩小使用的是多级渐进纹理过滤。接下来我们通过调用 {{domxref("WebGLRenderingContext.generateMipMap()", "generateMipMap()")}} 来生成多级渐进纹理，接着通过给 `gl.TEXTURE_2D` 绑定值 `null` 来告诉 WebGL 我们对当前纹理的操作已经结束了。

### 非 2 的幂纹理

一般来说，宽和高都是 2 的幂的纹理使用是最理想的。2 的幂纹理在渲染内存里的存储更高效，而且对它们的使用限制也更少。由美术工作人员生成的纹理最终在用来渲染前都应该使用放大或缩小的方式把它生成为 2 的幂纹理，其实事实上来说，在创作纹理之初就应该直接使用大小是 2 的幂的宽和高。纹理的每一边都应该是像 1，2，4，8，16，32，64，128，256，512，1024 或 2048 这样的值。当然也要注意尺寸的大小，因为虽说现在的大部分设置都已经可以支持 4096 像素的图片，但也不是全部；而有一些设备甚至可以支持 8192 或更高像素呢。

有的时候从你的特定情况出发，使用 2 的幂纹理会比较困难。当使用到第三方的资源时，一般来说最好的方式就是先使用 HTML5 的画布把图片修正成 2 的幂然后再放到 WebGL 中进行渲染使用，这样一来，如果图片拉伸比较明显的话纹理坐标的值可需要适当地进行修正。

但是，如果你一定要使用非 2 的幂纹理的话，WebGL 也有原生支持，不过这些支持是受限的。当然在某些情况下使用非 2 的幂纹理也是很有用的，比如这张纹理刚好与你的显示器的分辨率相匹配，或者使用画布重新生成纹理的方式并不值得时。但是要特别注意的是：这种非 2 的幂纹理不能用来生成多级渐进纹理，而且不能使用纹理重复（重复纹理寻址等）。

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

为了加载图像，在我们的`main()`函数中添加对`loadTexture()`函数的调用。这可以在`initBuffers(gl)`调用之后添加。但需要注意的是：浏览器会从加载的图像中按从左上角开始的自上而下顺序复制像素，而WebGL需要按自下而上的顺序——从左下角开始的像素顺序。所以为了防止渲染时图像纹理方向错误，我们还需要调用`pixelStorei()`并将`gl.UNPACK_FLIP_Y_WEBGL`参数设置为`true`，以调整像素顺序，使其翻转成WebGL需要的自下而上顺序。

添加下面的代码到`main()`函数，紧跟在调用`initBuffers()`之后：

```js
// Load texture
const texture = loadTexture(gl, "cubetexture.png");
// Flip image pixels into the bottom-to-top order that WebGL expects.
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
```
这里用到的图片可以用本地同目录下图片代替。

## 映射纹理到面

现在，纹理已加载并准备就绪。这将取代`initBuffers()`中为设置每个立方体面颜色而存在的所有先前代码。
添加这个函数到"init-buffer.js"模块：
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
    gl.STATIC_DRAW
  );

  return textureCoordBuffer;
}
```

首先，这段代码创建了一个WebGL缓冲区，我们将在其中存储每个面的纹理坐标，然后将该缓冲区绑定为将要写入的数组。
`textureCoordinates` 数组定义好了与每个面上的每个顶点一一对应的纹理坐标。请注意，纹理坐标的取值范围只能从 0.0 到 1.0，所以不论纹理贴图的实际大小是多少，为了实现纹理映射，我们要使用的纹理坐标只能规范化到 0.0 到 1.0 的范围内。

一旦我们建立了纹理映射数组，我们将数组传递到缓冲区中，这样WebGL就可以使用该数据了。然后我们返回新的缓冲区。

接下来，我们需要更新`initBuffers()`来创建并返回纹理坐标缓冲区代替颜色缓冲区。

下面是修改后的"init-buffers.js"模块中的`initBuffers()`函数：

```js
function initBuffers(gl) {
  // 初始化顶点缓冲区并将它赋值给positionBuffer变量
  const positionBuffer = initPositionBuffer(gl);
  //   const colorBuffer = initColorBuffer(gl);
  const indexBuffer = initIndexBuffer(gl);
  const textureCoordBuffer = initTextureBuffer(gl);
  // 返回一个对象，包含了初始化好的positionBuffer

  return {
    position: positionBuffer,
    // color: colorBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
  };
}
```
## 更新着色器

为了使用纹理来代替单一的颜色，着色器程序和着色器程序的初始化代码都需要进行修改。

### 顶点着色器

我们需要更改顶点着色器，使其不再获取颜色数据，而是获取纹理坐标数据。

像这样更新`main()`函数中的`vsSource`声明：

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

那么片段着色器也要相应地进行更改，像这样更新`main()`函数中的`fsSource`声明：

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

### Attribute 和 Uniform 位置

由于我们更改了一个属性并添加了一个统一变量，因此需要查找它们的位置。

请按照以下方式更新您`main()`函数中的`programInfo`声明：

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

`drawScene()`函数的修改很简单。

在“draw-scene.js”模块的`drawScene()`函数中，添加以下函数：

```js
// 告诉WebGL如何从缓冲区中提取纹理坐标
function setTextureAttribute(gl, buffers, programInfo) {
  const num = 2; // 每个坐标由2个值组成
  const type = gl.FLOAT; // 缓冲区中的数据为32位浮点数
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
    offset
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
}
```

在“draw-scene.js”模块的`drawScene()`函数中，将调用`setColorAttribute()`替换为以下代码：

```js
setTextureAttribute(gl, buffers, programInfo);
```

在您的`drawScene()`函数中，在两次调用`gl.uniformMatrix4fv()`之后，添加以下代码：

```js
// Tell WebGL we want to affect texture unit 0
gl.activeTexture(gl.TEXTURE0);

// Bind the texture to texture unit 0
gl.bindTexture(gl.TEXTURE_2D, texture);

// Tell the shader we bound the texture to texture unit 0
gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

```

WebGL 最多可同时注册 32 张纹理；`gl.TEXTURE0` 是第一张。我们把我们之前加载的纹理绑定到了第一个寄存器，然后着色器程序里的采样器 `uSampler` 就会完成它的功能：使用纹理。

最后，将`texture`作为参数添加到`drawScene()`函数中，同时定义和调用该函数。

请更新`drawScene()`函数的声明以添加新参数：

```js
function drawScene(gl, programInfo, buffers, texture, cubeRotation) {
```
在`main()`函数调用`drawScene`时添加传参`texture`：
```js
drawScene(gl, programInfo, buffers, texture, cubeRotation);
```

好，现在我们的立方体就会像这样旋转起来了。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[查看完整示例代码](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [在新窗口里打开示例](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## 关于跨域纹理

加载 WebGL 纹理应该也可以说是跨域访问控制里的一个话题。为了在我们的显示内容里使用其他域名里的纹理图片，允许跨域访问也是要考虑的。可以通过查看[HTTP 访问控制](/zh-CN/docs/Web/HTTP/Access_control_CORS)来获取到更多的相关细节。

[这篇文章](http://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/)也对跨域加载纹理到 WebGL 做出了解释。而且文章里面还包含了一个使用的[例子](http://people.mozilla.org/~bjacob/webgltexture-cors-js.html)。

> **备注：** 对跨域加载 WebGL 纹理的支持和对 image 元素的 `crossOrigin` 的属性的支持都是在 Gecko 8.0 版本中实现的。

被污染过的（只写）画布是不能拿来当作 WebGL 纹理来使用的。举个例子来说，当把一张跨域的图片画到一个 2D 的 {{ HTMLElement("canvas") }} 中时，这个画布就是“被污染过的”。

> **备注：** 对 Canvas 2D 的 `drawImage` 的跨域支持已经在 Gecko 9.0 版本实现的。这就意味着使用支持跨域的图片来污染一个 2D 的画布，这张画布也已经可以作为 WebGL 的纹理来使用了。

> **备注：** 视频对跨域的支持以及 {{ HTMLElement("video") }} 元素的 `crossorigin` 属性的支持是在 Gecko 12.0 版本中实现的。

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
