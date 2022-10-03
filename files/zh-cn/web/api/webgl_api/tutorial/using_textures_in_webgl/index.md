---
title: Using textures in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
---

{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

现在我们已经创建好了一个可以旋转的 3D 的立方体，接下来是时候使用贴图来代替每个面的单一的颜色了。

## 加载纹理

首先加入加载纹理的代码。现在我们只使用一张单一的纹理贴到立方体的 6 个面上，但是同样的方法可以用来加载任意数量的纹理贴图。

> **备注：** 值得注意的一点是对纹理的加载同样需要遵循[跨域访问规则](zh-CN/docs/Web/HTTP/Access_control_CORS)；也就是说你只能从允许跨域访问的网址加载你需要的纹理。下面的例子就是支持跨域访问的。

加载纹理的代码如下：

```js
function initTextures() {
  cubeTexture = gl.createTexture();
  cubeImage = new Image();
  cubeImage.onload = function() { handleTextureLoaded(cubeImage, cubeTexture); }
  cubeImage.src = "cubetexture.png";
}

function handleTextureLoaded(image, texture) {
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.bindTexture(gl.TEXTURE_2D, null);
}
```

函数 `initTextures()` 首先调用 GL {{domxref("WebGLRenderingContext.createTexture()", "createTexture()")}} 函数来创建一个 GL 纹理对象 cubeTexture。为了把图片文件加载到纹理，代码首先创建了一个 `Image` 对象然后把需要当作纹理使用的图形文件加载了进来。当图片加载完成后回调函数 `handleTextureLoaded()` 就会执行。

接下来为了真正地形成纹理，我们通过把新创建的纹理对象绑定到 `gl.TEXTURE_2D 来让它成为当前操作纹理。然后通过调用` {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}} 把已经加载的图片图形数据写到纹理。

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

## 映射纹理到面

现在，纹理已经加载好了，而且已经可以使用了。但是在使用之前我们还要创建好纹理坐标到立方体各个面的顶点的映射关系。下面的代码通过替换之前的设置每个面颜色的代码，当然还是在 `initBuffers()` 函数里。

```js
cubeVerticesTextureCoordBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesTextureCoordBuffer);

var textureCoordinates = [
  // Front
  0.0,  0.0,
  1.0,  0.0,
  1.0,  1.0,
  0.0,  1.0,
  // Back
  0.0,  0.0,
  1.0,  0.0,
  1.0,  1.0,
  0.0,  1.0,
  // Top
  0.0,  0.0,
  1.0,  0.0,
  1.0,  1.0,
  0.0,  1.0,
  // Bottom
  0.0,  0.0,
  1.0,  0.0,
  1.0,  1.0,
  0.0,  1.0,
  // Right
  0.0,  0.0,
  1.0,  0.0,
  1.0,  1.0,
  0.0,  1.0,
  // Left
  0.0,  0.0,
  1.0,  0.0,
  1.0,  1.0,
  0.0,  1.0
];

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
              gl.STATIC_DRAW);
```

首先，代码创建了一个 GL 缓存区，用来保存每个面的纹理坐标信息，然后把这个缓存区绑定到 GL 以方便我们写入数据。

`数组变量 textureCoordinates` 中定义好了与每个面上的每个顶点一一对应的纹理坐标。请注意，纹理坐标的取值范围只能从 0.0 到 1.0，所以不论纹理贴图的实际大小是多少，为了实现纹理映射，我们要使用的纹理坐标只能规范化到 0.0 到 1.0 的范围内。

纹理坐标信息给定了之后，把这个数组里的数据都写到 GL 缓存区，这样 GL 就能使用这个坐标数据了。

## 更新着色器

为了使用纹理来代替单一的颜色，着色器程序和着色器程序的初始化代码都需要进行修改。

先让我们看一看需要加入函数 initShaders() 里的非常简单的改变：

```js
textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
gl.enableVertexAttribArray(textureCoordAttribute);
gl.vertexAttribPointer(texCoordAttribute, 2, gl.FLOAT, false, 0, 0);
```

这段代码中我们使用包含纹理坐标信息的属性替换之前使用的顶点颜色属性。

### 顶点着色器

接下来我们会修改顶点着色器代码，现在不再需要获取顶点颜色数据，而是获取纹理坐标数据。

```html
<script id="shader-vs" type="x-shader/x-vertex">
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  varying highp vec2 vTextureCoord;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
  }
</script>
```

代码的关键更改在于不再获取顶点颜色数据转而获取和设置纹理坐标数据；这样就能把顶点与其对应的纹理联系在一起了。

### 片段着色器

那么片段着色器也要相应地进行更改：

```html
<script id="shader-fs" type="x-shader/x-fragment">
  varying highp vec2 vTextureCoord;

  uniform sampler2D uSampler;

  void main(void) {
    gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
  }
</script>
```

现在的代码不会再使用一个简单的颜色值填充片段颜色，片段的颜色是通过采样器使用最好的映射方式从纹理中的每一个像素计算出来的。

## 绘制具体纹理贴图的立方体

接下来是对 `drawScene()` 函数的更改，为了使整体的代码看起来更简洁，我们去掉了让立方体位置变化的代码，现在它只会随着时间的变化进行旋转，而为了使用纹理，所要进行的代码更改确是很少的。

使用下面的代码代替映射颜色到纹理的代码：

```js
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
gl.uniform1i(gl.getUniformLocation(shaderProgram, "uSampler"), 0);
```

GL 最多可同时注册 32 张纹理；`gl.TEXTURE0 是第一张。我们把我们之前加载的纹理绑定到了第一个寄存器，然后着色器程序里的采样器 uSampler` 就会完成它的功能：使用纹理。

好，现在我们的立方体就会像这样旋转起来了。

{{EmbedGHLiveSample('webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[查看完整示例代码](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample6) | [在新窗口里打开示例](http://mdn.github.io/webgl-examples/tutorial/sample6/)

## 关于跨域纹理

加载 WebGL 纹理应该也可以说是跨域访问控制里的一个话题。为了在我们的显示内容里使用其它域名里的纹理图片，允许跨域访问也是要考虑的。可以通过查看[HTTP 访问控制](/zh-CN/docs/Web/HTTP/Access_control_CORS)来获取到更多的相关细节。

[这篇文章](http://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/)也对跨域加载纹理到 WebGL 做出了解释。而且文章里面还包含了一个使用的[例子](http://people.mozilla.org/~bjacob/webgltexture-cors-js.html)。

> **备注：** 对跨域加载 WebGL 纹理的支持和对 image 元素的 `crossOrigin` 的属性的支持都是在 {{Gecko("8.0")}} 版本中实现的。

被污染过的（只写）画布是不能拿来当作 WebGL 纹理来使用的。举个例子来说，当把一张跨域的图片画到一个 2D 的 {{ HTMLElement("canvas") }} 中时，这个画布就是“被污染过的”。

> **备注：** 对 Canvas 2D 的 `drawImage` 的跨域支持已经在 {{Gecko("9.0")}} 版本实现的。这就意味着使用支持跨域的图片来污染一个 2D 的画布，这张画布也已经可以作为 WebGL 的纹理来使用了。

> **备注：** 视频对跨域的支持以及 {{ HTMLElement("video") }} 元素的 `crossorigin` 属性的支持是在 {{Gecko("12.0")}} 版本中实现的。

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
