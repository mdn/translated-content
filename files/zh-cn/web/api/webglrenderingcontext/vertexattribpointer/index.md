---
title: WebGLRenderingContext：vertexAttribPointer() 方法
slug: Web/API/WebGLRenderingContext/vertexAttribPointer
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.vertexAttribPointer()`** 方法将当前绑定到 `gl.ARRAY_BUFFER` 的缓冲区绑定到当前顶点缓冲区对象的通用顶点属性，并指定其布局。

## 语法

```js-nolint
vertexAttribPointer(index, size, type, normalized, stride, offset)
```

### 参数

- `index`
  - : 指定要修改的顶点属性索引的 {{domxref("WebGL_API/Types", "GLuint")}}。
- `size`
  - : 指定每个顶点属性的分量数量的 {{domxref("WebGL_API/Types", "GLint")}}。必须为 1、2、3 或 4。
- `type`
  - : 指定数组中每个分量数据类型的 {{domxref("WebGL_API/Types", "GLenum")}}。可选值如下：
    - `gl.BYTE`：有符号 8 位整数，取值范围为 \[-128, 127]
    - `gl.SHORT`：有符号 16 位整数，取值范围为 \[-32768, 32767]
    - `gl.UNSIGNED_BYTE`：无符号 8 位整数，取值范围为 \[0, 255]
    - `gl.UNSIGNED_SHORT`：无符号 16 位整数，取值范围为 \[0, 65535]
    - `gl.FLOAT`：32 位 IEEE 浮点数

    使用 {{domxref("WebGL2RenderingContext", "WebGL 2 上下文", "", 1)}}时，还可使用以下值：
    - `gl.HALF_FLOAT`：16 位 IEEE 浮点数
    - `gl.INT`：32 位有符号二进制整数
    - `gl.UNSIGNED_INT`：32 位无符号二进制整数
    - `gl.INT_2_10_10_10_REV`：32 位有符号整数，取值范围为 \[-512, 511]
    - `gl.UNSIGNED_INT_2_10_10_10_REV`：32 位无符号整数，取值范围为 \[0, 1023]

- `normalized`
  - : 指定整数数据值在转换为浮点数时是否应归一化到特定范围的 {{domxref("WebGL_API/Types", "GLboolean")}}。
    - 对于 `gl.BYTE` 和 `gl.SHORT` 类型，若为 `true`，则将值归一化到 \[-1, 1]。
    - 对于 `gl.UNSIGNED_BYTE` 和 `gl.UNSIGNED_SHORT` 类型，若为 `true`，则将值归一化到 \[0, 1]。
    - 对于 `gl.FLOAT` 和 `gl.HALF_FLOAT` 类型，此参数无效。

- `stride`
  - : 指定连续顶点属性起始位置之间字节偏移的 {{domxref("WebGL_API/Types", "GLsizei")}}。不能为负数或大于 255。若 stride 为 0，则假定属性为紧密打包：即属性并非交错存储，而是每个属性位于单独的块中，下一顶点的属性紧接在当前顶点的属性之后。
- `offset`
  - : 指定顶点属性数组中第一个分量的字节偏移的 {{domxref("WebGL_API/Types", "GLintptr")}}。必须为 `type` 字节长度的倍数。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- 若 `stride` 或 `offset` 为负数，则抛出 `gl.INVALID_VALUE` 错误。
- 若 `stride` 和 `offset` 不是数据类型大小的倍数，则抛出 `gl.INVALID_OPERATION` 错误。
- 若没有 WebGLBuffer 绑定到 ARRAY_BUFFER 目标，则抛出 `gl.INVALID_OPERATION` 错误。
- 使用 {{domxref("WebGL2RenderingContext", "WebGL 2 上下文", "", 1)}} 时，若此顶点属性在顶点着色器中被定义为整数（例如 `uvec4` 或 `ivec4`，而不是 `vec4`），则抛出 `gl.INVALID_OPERATION` 错误。

## 描述

假设我们要渲染一些 3D 几何体，为此需要向顶点着色器提供顶点。每个顶点都有一些属性，例如位置、法向量或纹理坐标。这些属性定义在 {{jsxref("ArrayBuffer")}} 中，并将提供给顶点缓冲区对象（VBO）。首先，需要将要使用的 {{domxref("WebGLBuffer")}} 绑定到 `gl.ARRAY_BUFFER`，然后通过此方法 `gl.vertexAttribPointer()` 指定属性的存储顺序及其数据类型。此外，还需要提供 stride，即一个顶点所有属性的总字节长度。还必须调用 {{domxref("WebGLRenderingContext/enableVertexAttribArray", "gl.enableVertexAttribArray()")}}，以告知 WebGL 应使用数组缓冲区中的数据填充此属性。

通常，3D 几何体已经采用特定的二进制格式，因此需要阅读该格式的规范以了解内存布局。但是，如果自行设计格式，或几何体位于文本文件中（例如 [Wavefront .obj 文件](https://zh.wikipedia.org/wiki/Wavefront_.obj文件)）且必须在运行时转换为 `ArrayBuffer`，则可以自由选择内存结构。为获得最高性能，应将属性[交错](https://en.wikipedia.org/wiki/Interleaved_memory)存储，并使用仍能准确表示几何体的最小数据类型。

顶点属性的最大数量取决于显卡；可调用 `gl.getParameter(gl.MAX_VERTEX_ATTRIBS)` 获取该值。高端显卡的最大值为 16，低端显卡的值会更小。

### 属性索引

必须为每个属性指定索引。该索引独立于数组缓冲区中的位置，因此可以按与属性在数组缓冲区中的存储顺序不同的顺序发送属性。你有两种选择：

- 自行指定索引。此时，调用 {{domxref("WebGLRenderingContext.bindAttribLocation()", "gl.bindAttribLocation()")}}，将顶点着色器中有名称的属性连接到要使用的索引。必须在调用 {{domxref("WebGLRenderingContext.linkProgram()", "gl.linkProgram()")}} 之前执行此操作。随后可将相同索引提供给 `gl.vertexAttribPointer()`。
- 使用显卡在编译顶点着色器时分配的索引。索引因显卡而异，因此必须调用 {{domxref("WebGLRenderingContext.getAttribLocation()", "gl.getAttribLocation()")}} 查找索引，然后将该索引提供给 `gl.vertexAttribPointer()`。若使用 WebGL 2，可在顶点着色器代码中自行指定索引，以覆盖显卡所用的默认值。例如，`layout(location = 3) in vec4 position;` 会将 `"position"` 属性设为索引 3。

### 整数属性

虽然 `ArrayBuffer` 可以填充整数和浮点数，但属性发送到顶点着色器时始终会转换为浮点数。如果需要在顶点着色器代码中使用整数，可以在顶点着色器中将浮点数转换回整数（例如 `(int) floatNumber`），或使用 WebGL2 的 {{domxref("WebGL2RenderingContext.vertexAttribIPointer()", "gl.vertexAttribIPointer()")}}。

### 默认属性值

顶点着色器代码可能包含多个属性，但不必为每个属性指定值。可以提供对所有顶点都相同的默认值。调用 {{domxref("WebGLRenderingContext.disableVertexAttribArray()", "gl.disableVertexAttribArray()")}} 可告知 WebGL 使用默认值；调用 {{domxref("WebGLRenderingContext.enableVertexAttribArray()", "gl.enableVertexAttribArray()")}} 则会按 `gl.vertexAttribPointer()` 的指定从数组缓冲区读取值。

类似地，若顶点着色器需要一个由 `vec4` 表示的四分量属性，但在 `gl.vertexAttribPointer()` 调用中将 `size` 设为 `2`，那么 WebGL 会根据数组缓冲区设置前两个分量，而第三和第四个分量取自默认值。

默认值为 `vec4(0.0, 0.0, 0.0, 1.0)`，但可以通过 {{domxref("WebGLRenderingContext.vertexAttrib()", "gl.vertexAttrib[1234]f[v]()")}} 指定其他默认值。

例如，顶点着色器可能使用位置和颜色属性。大多数网格在每个顶点级别指定颜色，但某些网格具有统一色调。对于这些网格，无需将相同的颜色放入数组缓冲区中每个顶点的位置，因此可以使用 `gl.vertexAttrib4fv()` 设置恒定颜色。

### 查询当前设置

可以调用 {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} 和 {{domxref("WebGLRenderingContext.getVertexAttribOffset()", "gl.getVertexAttribOffset()")}} 获取一个属性的当前参数，例如数据类型或属性是否应归一化。请注意，这些 WebGL 函数性能较慢，最好在 JavaScript 应用程序内部存储状态。不过，它们非常适合在不改动应用程序代码的情况下调试 WebGL 上下文。

## 示例

此示例展示如何将顶点属性发送到着色器程序。我们使用一种假想的数据结构，其中每个顶点的属性交错存储，每个顶点占 20 字节：

1. **位置：**需要存储 X、Y 和 Z 坐标。为获得最高精度，使用 32 位浮点数；总共占用 12 字节。
2. **法向量：**需要存储法向量的 X、Y 和 Z 分量，但由于精度不那么重要，使用 8 位有符号整数。为获得更好的性能，还存储一个值为零的第四分量，以便将数据对齐到 32 位，总大小为 4 字节。此外，告知 WebGL 将值归一化，因为法向量始终位于 \[-1, 1] 范围内。
3. **纹理坐标：**需要存储 U 和 V 坐标；16 位无符号整数提供足够精度，总大小为 4 字节。还告知 WebGL 将值归一化到 \[0, 1]。

例如，以下顶点：

```json
{
  "position": [1.0, 2.0, 1.5],
  "normal": [1.0, 0.0, 0.0],
  "texCoord": [0.5, 0.25]
}
```

会按如下方式存储在数组缓冲区中：

![WebGL 数组缓冲区内容](webgl-array-buffer.svg)

### 创建数组缓冲区

首先，使用 {{jsxref("DataView")}} 从 JSON 数据动态创建数组缓冲区。请注意使用 `true`，因为 WebGL 期望数据采用小端序。

```js
// 使用 fetch() 和 Response.json() 加载几何体
const response = await fetch("assets/geometry.json");
const vertices = await response.json();

// 创建数组缓冲区
const buffer = new ArrayBuffer(20 * vertices.length);
// 填充数组缓冲区
const dv = new DataView(buffer);
vertices.forEach((vertex, i) => {
  dv.setFloat32(20 * i, vertex.position[0], true);
  dv.setFloat32(20 * i + 4, vertex.position[1], true);
  dv.setFloat32(20 * i + 8, vertex.position[2], true);
  dv.setInt8(20 * i + 12, vertex.normal[0] * 0x7f);
  dv.setInt8(20 * i + 13, vertex.normal[1] * 0x7f);
  dv.setInt8(20 * i + 14, vertex.normal[2] * 0x7f);
  dv.setInt8(20 * i + 15, 0);
  dv.setUint16(20 * i + 16, vertex.texCoord[0] * 0xffff, true);
  dv.setUint16(20 * i + 18, vertex.texCoord[1] * 0xffff, true);
});
```

为获得更高性能，也可以在服务器端执行前述 JSON 到 ArrayBuffer 的转换，例如使用 Node.js。然后可加载二进制文件并将其解释为数组缓冲区：

```js
const response = await fetch("assets/geometry.bin");
const buffer = await response.arrayBuffer();
```

### 用 WebGL 使用数组缓冲区

首先，创建一个新的顶点缓冲区对象（VBO），并为其提供数组缓冲区：

```js
// 将数组缓冲区绑定到顶点缓冲区对象
const vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
```

然后，通过自行设置索引来指定数组缓冲区的内存布局：

```js
// 描述缓冲区的布局：
// 1. 位置，不归一化
gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(0);
// 2. 法向量，归一化到 [-1, 1]
gl.vertexAttribPointer(1, 4, gl.BYTE, true, 20, 12);
gl.enableVertexAttribArray(1);
// 3. 纹理坐标，归一化到 [0, 1]
gl.vertexAttribPointer(2, 2, gl.UNSIGNED_SHORT, true, 20, 16);
gl.enableVertexAttribArray(2);

// 将顶点着色器中的属性设为相同索引
gl.bindAttribLocation(shaderProgram, 0, "position");
gl.bindAttribLocation(shaderProgram, 1, "normal");
gl.bindAttribLocation(shaderProgram, 2, "texUV");
// 因属性索引已变更，必须重新链接着色器
// 请注意，这会重置此前设置的所有 uniform。
gl.linkProgram(shaderProgram);
```

也可使用显卡提供的索引，而非自行设置索引；这样可避免重新链接着色器程序。

```js
const locPosition = gl.getAttribLocation(shaderProgram, "position");
gl.vertexAttribPointer(locPosition, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(locPosition);

const locNormal = gl.getAttribLocation(shaderProgram, "normal");
gl.vertexAttribPointer(locNormal, 4, gl.BYTE, true, 20, 12);
gl.enableVertexAttribArray(locNormal);

const locTexUV = gl.getAttribLocation(shaderProgram, "texUV");
gl.vertexAttribPointer(locTexUV, 2, gl.UNSIGNED_SHORT, true, 20, 16);
gl.enableVertexAttribArray(locTexUV);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [顶点规范](https://wikis.khronos.org/opengl/Vertex_Specification)（OpenGL wiki）
- {{domxref("WebGL2RenderingContext.vertexAttribIPointer()")}}
