---
title: WebGLRenderingContext.enable()
slug: Web/API/WebGLRenderingContext/enable
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 中的**`WebGLRenderingContext.enable()`** 方法，用于对该上下文开启某种特性。

## 语法

```
void gl.enable(cap);参数
```

- `cap`

  - : 让 WebGL 开启某种特性，可能的值：

    | Constant                      | Description                                                                                           |
    | ----------------------------- | ----------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | 激活片元的颜色融合计算。参见 {{domxref("WebGLRenderingContext.blendFunc()")}}.                        |
    | `gl.CULL_FACE`                | 激活多边形正反面剔除。参见{{domxref("WebGLRenderingContext.cullFace()")}}.                            |
    | `gl.DEPTH_TEST`               | 激活深度比较，并且更新深度缓冲区。参见{{domxref("WebGLRenderingContext.depthFunc()")}}.               |
    | `gl.DITHER`                   | 激活在写入颜色缓冲区之前，抖动颜色成分。                                                              |
    | `gl.POLYGON_OFFSET_FILL`      | 激活添加多边形片段的深度值偏移。参见{{domxref("WebGLRenderingContext.polygonOffset()")}}.             |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | 激活通过 alpha 值决定的临时覆盖值计算。（抗锯齿）                                                     |
    | `gl.SAMPLE_COVERAGE`          | 激活使用临时覆盖值，位和运算片段的覆盖值。参见 {{domxref("WebGLRenderingContext.sampleCoverage()")}}. |
    | `gl.SCISSOR_TEST`             | 激活剪裁测试，即丢弃在剪裁矩形范围外的片段。{{domxref("WebGLRenderingContext.scissor()")}}.           |
    | `gl.STENCIL_TEST`             | 激活模板测试并且更新模板缓冲区。参见{{domxref("WebGLRenderingContext.stencilFunc()")}}.               |

    当使用 {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}时，可以添加使用下面的值。

    | Constant                | Description                                                                                |
    | ----------------------- | ------------------------------------------------------------------------------------------ |
    | `gl.RASTERIZER_DISCARD` | 图元光栅化阶段之前，但在任意的 transform 反馈之后，就立刻被丢弃。`gl.clear() 命令被忽略。` |

### 返回值

None.

## 样例

```js
gl.enable(gl.DITHER);
```

如果要检测可用性，可以使用 {{domxref("WebGLRenderingContext.isEnabled()")}} 方法：

```js
gl.isEnabled(gl.DITHER);
// true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.disable()")}}
- {{domxref("WebGLRenderingContext.isEnabled()")}}
