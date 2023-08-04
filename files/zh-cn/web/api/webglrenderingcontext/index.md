---
title: WebGLRenderingContext
slug: Web/API/WebGLRenderingContext
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext`** 接口提供基于 OpenGL ES 2.0 的绘图上下文，用于在 HTML {{HTMLElement("canvas")}} 元素内绘图。

要获得这个接口的对象以用于 2D 和 3D 的图形渲染，可以通过在 `<canvas>` 元素上调用 {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} 函数，调用时传入“webgl”参数：

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");
```

当你获取到 canvas 元素的 WebGL 绘图上下文，你便可以在里面绘图。点击 [WebGL 教程](/zh-CN/docs/Web/API/WebGL_API/Tutorial)获取更多资料，例如，关于如何开始 WebGL 编程的知识。

如果你需要一个 WebGL 2.0 的上下文，请参见 {{domxref("WebGL2RenderingContext")}}；其提供了对 OpenGL ES 3.0 图形实现的支持。

## 常量

请参考 [WebGL 常量](/zh-CN/docs/Web/API/WebGL_API/Constants)页面。

## WebGL 上下文

以下的属性和方法提供只读的 WebGL 上下文的信息和特性：

- {{domxref("WebGLRenderingContext.canvas")}}
  - : 只读属性，对 {{domxref("HTMLCanvasElement")}} 的向后引用。如果上下文没有相联系的 {{HTMLElement("canvas")}} 元素，值将会为 {{jsxref("null")}}。
- {{domxref("WebGLRenderingContext.commit()")}} {{Experimental_Inline}}
  - : 如果上下文没有指定的 canvas，把帧交给原始的{{domxref("HTMLCanvasElement")}}元素。
- {{domxref("WebGLRenderingContext.drawingBufferWidth")}}
  - : 只读属性，当前绘图缓冲区的宽度，等于和该上下文相联系的 canvas 元素的宽度。
- {{domxref("WebGLRenderingContext.drawingBufferHeight")}}
  - : 只读属性，当前绘图缓冲区的高度，等于和该上下文相联系的 canvas 元素的高度。
- {{domxref("WebGLRenderingContext.getContextAttributes()")}}
  - : 返回 `WebGLContextAttributes` 对象，该对象包含真实的上下文参数。如果上下文丢失，将会返回 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。
- {{domxref("WebGLRenderingContext.isContextLost()")}}
  - : 如果上下文丢失，返回 `true`；否则，返回 `false`。
- {{domxref("WebGLRenderingContext.makeXRCompatible()")}}
  - : 确保上下文与用户的 XR 硬件的兼容性，必要时使用新配置重新创建上下文。这可用于启动使用标准 2D 演示的应用程序，然后过度到使用 VR 或 AR 模式。

## 视图和裁剪

- {{domxref("WebGLRenderingContext.scissor()")}}
  - : 设置裁剪框。
- {{domxref("WebGLRenderingContext.viewport()")}}
  - : 设置视口。

## 状态信息

- {{domxref("WebGLRenderingContext.activeTexture()")}}
  - : 选择要激活的纹理单元。
- {{domxref("WebGLRenderingContext.blendColor()")}}
  - : 设置源和目标的混和因子。
- {{domxref("WebGLRenderingContext.blendEquation()")}}
  - : 用同一个表达式设置 RGB 混和表达式和 alpha 混和表达式。
- {{domxref("WebGLRenderingContext.blendEquationSeparate()")}}
  - : 分开设置 RGB 混和表达式和 alpha 混和表达式。
- {{domxref("WebGLRenderingContext.blendFunc()")}}
  - : 定义用于像素混合算法的函数。
- {{domxref("WebGLRenderingContext.blendFuncSeparate()")}}
  - : 分别定义混合像素 RGB 通道和透明通道的函数。
- {{domxref("WebGLRenderingContext.clearColor()")}}
  - : 设置用于清空用的颜色。
- {{domxref("WebGLRenderingContext.clearDepth()")}}
  - : 设置清除深度缓存时的深度值。
- {{domxref("WebGLRenderingContext.clearStencil()")}}
  - : 设置清除模板缓冲区时的模板值。
- {{domxref("WebGLRenderingContext.colorMask()")}}
  - : 设置在绘制或渲染{{domxref("WebGLFramebuffer")}}时要开启或关闭的颜色分量。
- {{domxref("WebGLRenderingContext.cullFace()")}}
  - : 设置多边形的正面和/或反面是否要被排除。
- {{domxref("WebGLRenderingContext.depthFunc()")}}
  - : 设置比较输入像素深度和深度缓存值得函数。
- {{domxref("WebGLRenderingContext.depthMask()")}}
  - : 设置是否写入深度缓存。
- {{domxref("WebGLRenderingContext.depthRange()")}}
  - : 设置从规范化设备坐标映射到窗口或视口坐标时的深度范围。
- {{domxref("WebGLRenderingContext.disable()")}}
  - : 禁用这个上下文的 WebGL 功能。
- {{domxref("WebGLRenderingContext.enable()")}}
  - : 启用这个上下文的 WebGL 功能。
- {{domxref("WebGLRenderingContext.frontFace()")}}
  - : 设置多边形的正面使用顺时针还是逆时针绘制表示。
- {{domxref("WebGLRenderingContext.getParameter()")}}
  - : 返回给入参数名的值。
- {{domxref("WebGLRenderingContext.getError()")}}
  - : 返回错误信息。
- {{domxref("WebGLRenderingContext.hint()")}}
  - : 给某些行为设置建议使用的模式。具体建议需要看执行的情况。
- {{domxref("WebGLRenderingContext.isEnabled()")}}
  - : 测试这个上下文的 WebGL 功能是否开启。
- {{domxref("WebGLRenderingContext.lineWidth()")}}
  - : 设置线宽。
- {{domxref("WebGLRenderingContext.pixelStorei()")}}
  - : 设置像素存储模式。
- {{domxref("WebGLRenderingContext.polygonOffset()")}}
  - : 设置多边形偏移的比例和单位，从而计算深度值。（补充：解决深度冲突）
- {{domxref("WebGLRenderingContext.sampleCoverage()")}}
  - : 为抗锯齿效果设置多重取样覆盖参数。
- {{domxref("WebGLRenderingContext.stencilFunc()")}}
  - : 同时设置前面和背面的模板测试函数，及其引用值。
- {{domxref("WebGLRenderingContext.stencilFuncSeparate()")}}
  - : 可分开设置前面或背面的模板测试函数，及其引用值。
- {{domxref("WebGLRenderingContext.stencilMask()")}}
  - : 同时启用或禁用，前面和背面的模板测试掩码。
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
  - : 可分开启用或禁用，前面和背面的模板测试掩码。
- {{domxref("WebGLRenderingContext.stencilOp()")}}
  - : 同时设置，在前面和背面的模板缓冲区上执行的操作。
- {{domxref("WebGLRenderingContext.stencilOpSeparate()")}}
  - : 可分开设置，在前面和背面的模板缓冲区上执行的操作。

## 缓冲区

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
  - : 把 `WebGLBuffer` 对象绑定到指定目标上。
- {{domxref("WebGLRenderingContext.bufferData()")}}
  - : 更新缓冲数据。
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
  - : 更新从给入偏移量开始的缓冲数据。
- {{domxref("WebGLRenderingContext.createBuffer()")}}
  - : 创建 `WebGLBuffer` 对象。
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
  - : 删除 `WebGLBuffer` 对象。
- {{domxref("WebGLRenderingContext.getBufferParameter()")}}
  - : 返回缓冲信息。
- {{domxref("WebGLRenderingContext.isBuffer()")}}
  - : 返回给入的缓冲是否有效。

## 帧缓冲区

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
  - : 把 `WebGLFrameBuffer` 对象绑定到指定对象上。
- {{domxref("WebGLRenderingContext.checkFramebufferStatus()")}}
  - : 返回帧缓冲区的状态。
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
  - : 创建 `WebGLFrameBuffer` 对象。
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
  - : 删除 `WebGLFrameBuffer` 对象。
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
  - : 把 `WebGLRenderingBuffer` 对象附加到 `WebGLFrameBuffer` 对象。
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
  - : 把纹理图像附加到 `WebGLFrameBuffer` 对象。
- {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()")}}
  - : 返回帧缓冲区的信息。
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
  - : 返回布尔值，表示给入的 `WebGLFrameBuffer` 对象是否有效。
- {{domxref("WebGLRenderingContext.readPixels()")}}
  - : 读取 `WebGLFrameBuffer` 的像素。

## 渲染缓冲区

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
  - : 把 `WebGLRenderBuffer` 对象绑定到指定的对象上。
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
  - : 创建 `WebGLRenderBuffer` 对象。
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
  - : 删除 `WebGLRenderBuffer` 对象。
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
  - : 返回渲染缓冲区的信息。
- {{domxref("WebGLRenderingContext.isBuffer()")}}
  - : 返回布尔值，表示给入的 `WebGLRenderingBuffer` 是否有效。
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
  - : 创建渲染缓冲区数据存储。

## 纹理

- {{domxref("WebGLRenderingContext.bindTexture()")}}
  - : 把 `WebGLTexture` 对象绑定到指定对象上。
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
  - : 指定一个为压缩格式的 2D 纹理图片。
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
  - : 指定一个为压缩格式的 2D 纹理子图片。
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
  - : 复制 2D 纹理图片。
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
  - : 复制 2D 纹理子图片。
- {{domxref("WebGLRenderingContext.createTexture()")}}
  - : 创建 `WebGLTexture` 对象。
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
  - : 删除 `WebGLTexture` 对象。
- {{domxref("WebGLRenderingContext.generateMipmap()")}}
  - : 为 `WebGLTexture` 对象生成一组纹理映射。
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
  - : 返回纹理信息。
- {{domxref("WebGLRenderingContext.isTexture()")}}
  - : 返回 Boolean 值，表示给入的 `WebGLTexture` 是否有效。
- {{domxref("WebGLRenderingContext.texImage2D()")}}
  - : 指定 2D 纹理图片。
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
  - : 更新当前 `WebGLTexture` 的子矩形。
- {{domxref("WebGLRenderingContext.texParameterf()")}}
  - : 设置纹理参数。
- {{domxref("WebGLRenderingContext.texParameteri()")}}
  - : 设置纹理参数。

## 程序对象和着色器对象

- {{domxref("WebGLRenderingContext.attachShader()")}}
  - : 把 `WebGLShader` 添加到 `WebGLProgram`。
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
  - : 绑定一个普通顶点索引到一个命名的 attribute 变量
- {{domxref("WebGLRenderingContext.compileShader()")}}
  - : 编译 `WebGLShader`。
- {{domxref("WebGLRenderingContext.createProgram()")}}
  - : 创建 `WebGLProgram`。
- {{domxref("WebGLRenderingContext.createShader()")}}
  - : 创建 `WebGLShader`。
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
  - : 删除 `WebGLProgram`。
- {{domxref("WebGLRenderingContext.deleteShader()")}}
  - : 删除 `WebGLShader`。
- {{domxref("WebGLRenderingContext.detachShader()")}}
  - : 分离 `WebGLShader`。
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
  - : 返回附加在 `WebGLProgram 上的` `WebGLShader` 对象的列表。
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
  - : 返回程序对象的信息。
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
  - : 返回 `WebGLProgram` 对象的信息日志。
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
  - : 返回着色器的信息。
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
  - : 返回一个描述着色器数字类型精度的`WebGLShaderPrecisionFormat` 对象。
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
  - : 返回 `WebGLShader` 对象的信息日志。
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
  - : 以字符串形式返回 `WebGLShader` 的源码。
- {{domxref("WebGLRenderingContext.isProgram()")}}
  - : 返回一个 Boolean 值，表示给入的 `WebGLProgram` 是否有效。
- {{domxref("WebGLRenderingContext.isShader()")}}
  - : 返回一个 Boolean 值，表示给入的 `WebGLShader` 是否有效。
- {{domxref("WebGLRenderingContext.linkProgram()")}}
  - : 链接给入的 `WebGLProgram` 对象。
- {{domxref("WebGLRenderingContext.shaderSource()")}}
  - : 设置一个 `WebGLShader` 的源码。
- {{domxref("WebGLRenderingContext.useProgram()")}}
  - : 使用指定的 `WebGLProgram` 作为当前渲染状态的一部分。
- {{domxref("WebGLRenderingContext.validateProgram()")}}
  - : 使 `WebGLProgram` 生效。

## Uniform 和 Attribute

- {{domxref("WebGLRenderingContext.disableVertexAttribArray()")}}
  - : 在给定的位置，禁用顶点 attribute 数组。
- {{domxref("WebGLRenderingContext.enableVertexAttribArray()")}}
  - : 在给定的位置，启用顶点 attribute 数组。
- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
  - : 返回激活状态的 attribute 变量信息。
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
  - : 返回激活状态的 uniform 变量信息。
- {{domxref("WebGLRenderingContext.getAttribLocation()")}}
  - : 返回 attribute 变量的指针位置。
- {{domxref("WebGLRenderingContext.getUniform()")}}
  - : 返回指定位置的 uniform 变量。
- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
  - : 返回 uniform 变量的指针位置。
- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
  - : 返回指定位置的顶点 attribute 变量。
- {{domxref("WebGLRenderingContext.getVertexAttribOffset()")}}
  - : 获取给定索引的顶点 attribute 位置。
- {{domxref("WebGLRenderingContext.uniform()", "WebGLRenderingContext.uniform[1234][fi][v]()")}}
  - : 指定一个 uniform 变量。
- {{domxref("WebGLRenderingContext.uniformMatrix()", "WebGLRenderingContext.uniformMatrix[234]fv()")}}
  - : 指定一个 uniform 矩阵变量。
- {{domxref("WebGLRenderingContext.vertexAttrib()", "WebGLRenderingContext.vertexAttrib[1234]f[v]()")}}
  - : 指定一个普通顶点 attribute 的值。
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
  - : 指定一个顶点 attributes 数组中，顶点 attributes 变量的数据格式和位置。

## 绘制缓冲区

- {{domxref("WebGLRenderingContext.clear()")}}
  - : 把指定的缓冲区清空为预设的值。
- {{domxref("WebGLRenderingContext.drawArrays()")}}
  - : 渲染数组中的原始数据。
- {{domxref("WebGLRenderingContext.drawElements()")}}
  - : 渲染元素数组中的原始数据。
- {{domxref("WebGLRenderingContext.finish()")}}
  - : 阻断执行，直到之前所有的操作都完成。
- {{domxref("WebGLRenderingContext.flush()")}}
  - : 清空缓冲的命令，这会导致所有命令尽快执行完。

## 色彩空间

- {{domxref("WebGLRenderingContext.drawingBufferColorSpace")}} {{Experimental_Inline}}
  - : 指定 WebGL 绘制缓冲区的色彩空间。
- {{domxref("WebGLRenderingContext.unpackColorSpace")}} {{Experimental_Inline}}
  - : 指定导入纹理时要转换到的色彩空间。

## 使用扩展插件

这些方法用于管理 WebGL 扩展：

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
  - : 返回一个包含字符串的 {{jsxref("Array")}}，每个元素都为支持的 WebGL 扩展。
- {{domxref("WebGLRenderingContext.getExtension()")}}
  - : 返回一个扩展对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLCanvasElement")}}
