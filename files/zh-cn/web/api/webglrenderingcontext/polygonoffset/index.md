---
title: WebGLRenderingContext.polygonOffset()
slug: Web/API/WebGLRenderingContext/polygonOffset
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.polygonOffset()`** method of the [WebGL API](/zh-CN/docs/Web/API/WebGL_API) specifies the scale factors and units to calculate depth values.

The offset is added before the depth test is performed and before the value is written into the depth buffer.

## 语法

```plain
void gl.polygonOffset(factor, units);
```

### 参数

- factor
  - : A {{domxref("GLfloat")}} which sets the scale factor for the variable depth offset for each polygon. 默认值为 0.
- units
  - : A {{domxref("GLfloat")}} which sets the multiplier by which an implementation-specific value is multiplied with to create a constant depth offset. 默认值为 0.

### 返回值

None.

## 例子

The polygon offset fill is disabled by default. To enable or disable polygon offset fill, use the {{domxref("WebGLRenderingContext.enable", "enable()")}} and {{domxref("WebGLRenderingContext.disable", "disable()")}} methods with the argument `gl.POLYGON_OFFSET_FILL`.

```js
gl.enable(gl.POLYGON_OFFSET_FILL);
gl.polygonOffset(2, 3);
```

想要查看当前多边形偏移的 factor 或 units，查询 `POLYGON_OFFSET_FACTOR` 和`POLYGON_OFFSET_UNITS` 的内容即可。

```js
gl.getParameter(gl.POLYGON_OFFSET_FACTOR); // 2
gl.getParameter(gl.POLYGON_OFFSET_UNITS); // 3
```

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.depthFunc()")}}
