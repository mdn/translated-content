---
title: WebGLRenderingContext.blendFunc()
slug: Web/API/WebGLRenderingContext/blendFunc
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的**`WebGLRenderingContext.blendFunc()`** 方法定义了一个用于混合像素算法的函数。

## 语法

```js-nolint
blendFunc(sfactor, dfactor)
```

### 参数

- `sfactor`
  - : {{domxref("GLenum")}} 为源混合因子指定一个乘数。默认值是 `gl.ONE`. 有关可能的值，查看下面。
- `dfactor`
  - : {{domxref("GLenum")}} 为源目标合因子指定一个乘数。默认值是 `gl.ZERO`. 有关可能的值，查看下面。

### 返回值

None.

### 异常

- 如果 `sfactor` 或 `dfactor` 不是列出的可能值一直，则抛出 `gl.INVALID_ENUM` 错误。
- 如果使用恒定的颜色和恒定的 alpha 值作为源和目标因子，则抛出`gl.INVALID_ENUM` 错误。

## 常量

下列常数可用于 `sfactor` 和`dfactor`.

混合颜色的公式可以这样描述：color(RGBA) = (sourceColor \* _sfactor_) + (destinationColor \* _dfactor_). RBGA 值在 0 到 1 之间。

| Constant                      | Factor                                               | Description                                                                 |
| ----------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------- |
| `gl.ZERO`                     | 0,0,0,0                                              | 所有颜色乘 0.                                                               |
| `gl.ONE`                      | 1,1,1,1                                              | 所有颜色乘 1.                                                               |
| `gl.SRC_COLOR`                | RS, GS, BS, AS                                       | 将所有颜色乘上源颜色。                                                      |
| `gl.ONE_MINUS_SRC_COLOR`      | 1-RS, 1-GS, 1-BS, 1-AS                               | 每个源颜色所有颜色乘 1 .                                                    |
| `gl.DST_COLOR`                | RD, GD, BD, AD                                       | 将所有颜色与目标颜色相乘。                                                  |
| `gl.ONE_MINUS_DST_COLOR`      | 1-RD, 1-GD, 1-BD, 1-AD                               | 将所有颜色乘以 1 减去每个目标颜色。                                         |
| `gl.SRC_ALPHA`                | AS, AS, AS, AS                                       | 将所有颜色乘以源 alpha 值。                                                 |
| `gl.ONE_MINUS_SRC_ALPHA`      | 1-AS, 1-AS, 1-AS, 1-AS                               | 将所有颜色乘以 1 减去源 alpha 值。                                          |
| `gl.DST_ALPHA`                | AD, AD, AD, AD                                       | 将所有颜色与目标 alpha 值相乘。                                             |
| `gl.ONE_MINUS_DST_ALPHA`      | 1-AD, 1-AD, 1-AD, 1-AD                               | 将所有颜色乘以 1 减去目标 alpha 值。                                        |
| `gl.CONSTANT_COLOR`           | RC, GC, BC, AC                                       | 将所有颜色乘以一个常数颜色。                                                |
| `gl.ONE_MINUS_CONSTANT_COLOR` | 1-RC, 1-GC, 1-BC, 1-AC                               | 所有颜色乘以 1 减去一个常数颜色。                                           |
| `gl.CONSTANT_ALPHA`           | AC, AC, AC, AC                                       | 将所有颜色乘以一个常数。                                                    |
| `gl.ONE_MINUS_CONSTANT_ALPHA` | 1-AC, 1-AC, 1-AC, 1-AC                               | 所有颜色乘以 1 减去一个常数。                                               |
| `gl.SRC_ALPHA_SATURATE`       | min(AS, 1 - AD), min(AS, 1 - AD), min(AS, 1 - AD), 1 | 将 RGB 颜色乘以源 alpha 值或 1 减去目标 alpha 值中的较小值。alpha 值乘以 1. |

## 示例

使用混合函数，你首先必须使用参数 `gl.BLEND`来激活{{domxref("WebGLRenderingContext.enable()")}} 的混合。

```js
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_COLOR, gl.DST_COLOR);
```

要获得当前的混合函数，查询`BLEND_SRC_RGB`, `BLEND_SRC_ALPHA`, `BLEND_DST_RGB`, 和`BLEND_DST_ALPHA` 常量中返回混合函数常量。

```js
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_COLOR, gl.DST_COLOR);
gl.getParameter(gl.BLEND_SRC_RGB) == gl.SRC_COLOR;
// true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.blendColor()")}}
- {{domxref("WebGLRenderingContext.blendEquation()")}}
