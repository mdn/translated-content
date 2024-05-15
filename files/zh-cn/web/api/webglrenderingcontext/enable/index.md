---
title: WebGLRenderingContext：enable() 方法
slug: Web/API/WebGLRenderingContext/enable
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.enable()`** 方法用于为上下文启用特定的 WebGL 的功能。

## 语法

```js-nolint
enable(cap)
```

### 参数

- `cap`

  - : 一个指定要启用的 WebGL 的功能的 {{domxref("WebGL_API/Types", "GLenum")}}。可能的值有：

    | 常量                          | 描述                                                                                              |
    | ----------------------------- | ------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | 激活片元的颜色融合计算。参见 {{domxref("WebGLRenderingContext.blendFunc()")}}。                   |
    | `gl.CULL_FACE`                | 激活多边形的面剔除。参见 {{domxref("WebGLRenderingContext.cullFace()")}}。                        |
    | `gl.DEPTH_TEST`               | 激活深度比较，并更新深度缓冲区。参见 {{domxref("WebGLRenderingContext.depthFunc()")}}。           |
    | `gl.DITHER`                   | 激活在写入颜色缓冲区之前，抖动颜色成分。                                                          |
    | `gl.POLYGON_OFFSET_FILL`      | 激活添加多边形片段的深度值偏移。参见 {{domxref("WebGLRenderingContext.polygonOffset()")}}。       |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | 激活通过 alpha 值确定临时掩模的计算。                                                             |
    | `gl.SAMPLE_COVERAGE`          | 激活片段掩模与临时掩模的与运算。参见 {{domxref("WebGLRenderingContext.sampleCoverage()")}}。      |
    | `gl.SCISSOR_TEST`             | 激活剪裁测试，即丢弃在剪裁矩形范围外的片段。参见 {{domxref("WebGLRenderingContext.scissor()")}}。 |
    | `gl.STENCIL_TEST`             | 激活模板测试并更新模板缓冲区。参见 {{domxref("WebGLRenderingContext.stencilFunc()")}}。           |

    当使用 {{domxref("WebGL2RenderingContext", "WebGL 2 上下文", "", 1)}}时，还可以使用以下值：

    | 常量                    | 描述                                                                          |
    | ----------------------- | ----------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | 图元在光栅化阶段前，可选的变换反馈之后被立刻丢弃。`gl.clear()` 命令会被忽略。 |

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
gl.enable(gl.DITHER);
```

要检测功能是否启用，请使用 {{domxref("WebGLRenderingContext.isEnabled()")}} 方法：

```js
gl.isEnabled(gl.DITHER);
// true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.disable()")}}
- {{domxref("WebGLRenderingContext.isEnabled()")}}
