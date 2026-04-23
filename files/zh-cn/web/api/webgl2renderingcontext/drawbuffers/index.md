---
title: WebGL2RenderingContext.drawBuffers()
slug: Web/API/WebGL2RenderingContext/drawBuffers
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

[WebGL 2 API](/zh-CN/docs/Web/API/WebGL_API)的 **`WebGL2RenderingContext.drawBuffers()`** 方法定义了将写入零散数据（fragment colors）的绘制缓存 (draw buffer)。绘制缓存设置了上一次绑定帧缓存状态，如果没有帧缓存可用的话，则用绘制缓存。

## 语法

```plain
void gl.drawBuffers(buffers);
```

### 参数

- `buffers`
  - : 一个 {{domxref("GLenum")}}的{{jsxref("Array")}} 对碎片颜色的说明将被写入缓冲区。可能的值有：
    - `gl.NONE`: 碎片着色器的输出没有被写入到任何颜色缓存中。
    - `gl.BACK`: 碎片着色器的输出被写入到返回的颜色缓存中。
    - `gl.COLOR_ATTACHMENT{0-15}`: 碎片着色器的输出被写入当前帧缓存的第 n 个颜色缓存中。Fragment shader output is written in the nth color attachment of the current framebuffer.

### 返回值

没有。

### 报错信息

- 如果 `buffers` 包含了不止一个合法值， `gl.INVALID_ENUM`错误会被抛出

## 示例

```js
gl.drawBuffers([gl.NONE, gl.COLOR_ATTACHMENT1]);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 详见

- {{domxref("WebGL2RenderingContext.clearBuffer", "WebGL2RenderingContext.clearBuffer[fiuv]()")}}
