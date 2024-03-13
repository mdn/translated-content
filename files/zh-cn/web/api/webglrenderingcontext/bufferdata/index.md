---
title: WebGLRenderingContext.bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.bufferData()`** 方法创建并初始化了 Buffer 对象的数据存储区。

## 语法

```plain
// WebGL1:
void gl.bufferData(target, size, usage);
void gl.bufferData(target, ArrayBuffer? srcData, usage);
void gl.bufferData(target, ArrayBufferView srcData, usage);

// WebGL2:
void gl.bufferData(target, ArrayBufferView srcData, usage, srcOffset, length);
```

### 参数

- target

  - : {{domxref("GLenum")}} 指定 Buffer 绑定点（目标）。可取以下值：

    - `gl.ARRAY_BUFFER`: 包含顶点属性的 Buffer，如顶点坐标，纹理坐标数据或顶点颜色数据。
    - `gl.ELEMENT_ARRAY_BUFFER`: 用于元素索引的 Buffer。
    - 当使用 {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} 时，可以使用以下值：

      - `gl.COPY_READ_BUFFER`: 从一个 Buffer 对象复制到另一个 Buffer 对象。
      - `gl.COPY_WRITE_BUFFER`: 从一个 Buffer 对象复制到另一个 Buffer 对象。
      - `gl.TRANSFORM_FEEDBACK_BUFFER`: 用于转换反馈操作的 Buffer。
      - `gl.UNIFORM_BUFFER`: 用于存储统一块的 Buffer。
      - `gl.PIXEL_PACK_BUFFER`: 用于像素转换操作的 Buffer。
      - `gl.PIXEL_UNPACK_BUFFER`: 用于像素转换操作的 Buffer。

- size
  - : {{domxref("GLsizeiptr")}} 设定 Buffer 对象的数据存储区大小。
- srcData {{optional_inline}}
  - : 一个{{jsxref("ArrayBuffer")}}，{{jsxref("SharedArrayBuffer")}} 或者 {{domxref("ArrayBufferView")}} 类型的数组对象，将被复制到 Buffer 的数据存储区。如果为`null`，数据存储区仍会被创建，但是不会进行初始化和定义。
- usage

  - : {{domxref("GLenum")}} 指定数据存储区的使用方法。可取以下值：

    - `gl.STATIC_DRAW`: 缓冲区的内容可能经常使用，而不会经常更改。内容被写入缓冲区，但不被读取。
    - `gl.DYNAMIC_DRAW`: 缓冲区的内容可能经常被使用，并且经常更改。内容被写入缓冲区，但不被读取。
    - `gl.STREAM_DRAW`: 缓冲区的内容可能不会经常使用。内容被写入缓冲区，但不被读取。
    - 当使用 {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} 时，可以使用以下值：

      - `gl.STATIC_READ`: 缓冲区的内容可能经常使用，而不会经常更改。内容从缓冲区读取，但不写入。
      - `gl.DYNAMIC_READ`: 缓冲区的内容可能经常使用，并且经常更改。内容从缓冲区读取，但不写入。
      - `gl.STREAM_READ`: 缓冲区的内容可能不会经常使用。内容从缓冲区读取，但不写入。
      - `gl.STATIC_COPY`: 缓冲区的内容可能经常使用，而不会经常更改。用户不会从缓冲区读取内容，也不写入。
      - `gl.DYNAMIC_COPY`: 缓冲区的内容可能经常使用，并且经常更改。用户不会从缓冲区读取内容，也不写入。
      - `gl.STREAM_COPY`: 缓冲区的内容可能不会经常使用。用户不会从缓冲区读取内容，也不写入。

- srcOffset
  - : {{domxref("GLuint")}} 指定读取缓冲时的初始元素索引偏移量。
- `length` {{optional_inline}}
  - : {{domxref("GLuint")}} 默认为 0。

### 返回值

None.

### 异常

- 如果无法创建`size`指定大小的数据存储区，则会抛出`gl.OUT_OF_MEMORY`异常。
- 如果`size`是负值，则会抛出`gl.INVALID_VALUE`异常。
- 如果`target`或`usage`不属于枚举值之列，则会抛出`gl.INVALID_ENUM`异常。

## 示例

### 使用 `bufferData`

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
```

### 获取缓冲区信息

使用 {{domxref("WebGLRenderingContext.getBufferParameter()")}} 方法检查当前缓冲区的使用情况和缓冲区大小。

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
