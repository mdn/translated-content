---
title: WebGLRenderingContext.drawElements()
slug: Web/API/WebGLRenderingContext/drawElements
---

{{APIRef("WebGL")}}

该 **`WebGLRenderingContext.drawElements()`** 方法 在 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 从数组数据渲染图元。

## 语法

```plain
void gl.drawElements(mode, count, type, offset);
```

### 参数

- `mode`
  - : {{domxref("枚举类型")}} 指定要渲染的图元类型。可以是以下类型：
    - `gl.POINTS`: 画单独的点。
    - `gl.LINE_STRIP`: 画一条直线到下一个顶点。
    - `gl.LINE_LOOP`: 绘制一条直线到下一个顶点，并将最后一个顶点返回到第一个顶点。
    - `gl.LINES`: 在一对顶点之间画一条线。
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: 为一组三个顶点绘制一个三角形。

- count
  - : {{domxref("整数型")}} 指定要渲染的元素数量。
- type
  - : {{domxref("枚举类型")}} 指定元素数组缓冲区中的值的类型。可能的值是：
    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - 当使用 {{domxref("OES_element_index_uint")}} 扩展时：
      - `gl.UNSIGNED_INT`

- offset
  - : {{domxref("字节单位")}} 指定元素数组缓冲区中的偏移量。必须是给定类型大小的有效倍数。

### 返回值

None.

### 异常

- 如果 `mode` 不是正确值， `gl.INVALID_ENUM` 将会抛出错误异常。
- 如果`offset` 不是给定类型大小的有效倍数，`gl.INVALID_OPERATION` 将会抛出错误异常。
- 如果 `count` 是负的， `gl.INVALID_VALUE` 将会抛出错误异常。

## 例子

```js
gl.drawElements(gl.POINTS, 8, gl.UNSIGNED_BYTE, 0);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关参考

- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("OES_element_index_uint")}}
