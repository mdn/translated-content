---
title: WebGLRenderingContext.drawArrays()
slug: Web/API/WebGLRenderingContext/drawArrays
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 中的 **`WebGLRenderingContext.drawArrays()`** 方法用于从向量数组中绘制图元。

## 语法

```plain
void gl.drawArrays(mode, first, count);
```

### 参数

- `mode`

  - : {{domxref("GLenum")}} 类型，指定绘制图元的方式，可能值如下。

    - `gl.POINTS`: 绘制一系列点。
    - `gl.LINE_STRIP`: 绘制一个线条。即，绘制一系列线段，上一点连接下一点。
    - `gl.LINE_LOOP`: 绘制一个线圈。即，绘制一系列线段，上一点连接下一点，并且最后一点与第一个点相连。
    - `gl.LINES`: 绘制一系列单独线段。每两个点作为端点，线段之间不连接。
    - `gl.TRIANGLE_STRIP`：绘制一个[三角带](https://en.wikipedia.org/wiki/Triangle_strip)。
    - `gl.TRIANGLE_FAN`：绘制一个[三角扇](https://en.wikipedia.org/wiki/Triangle_fan)。
    - `gl.TRIANGLES`: 绘制一系列三角形。每三个点作为顶点。

- first
  - : {{domxref("GLint")}} 类型，指定从哪个点开始绘制。
- count
  - : {{domxref("GLsizei")}} 类型，指定绘制需要使用到多少个点。

### 返回值

无。

### 异常

- 如果 `mode` 不是一个可接受值，将会抛出 `gl.INVALID_ENUM` 异常。
- 如果 `first` 或者 `count` 是负值，会抛出 `gl.INVALID_VALUE` 异常。
- 如果 `gl.CURRENT_PROGRAM` 为 {{jsxref("null")}}，会抛出 `gl.INVALID_OPERATION` 异常。

## 示例

```js
gl.drawArrays(gl.POINTS, 0, 8);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.drawElements()")}}
- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
