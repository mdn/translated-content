---
title: WebGLRenderingContext.scissor()
slug: Web/API/WebGLRenderingContext/scissor
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.scissor()`** 方法指定了一个裁剪区域，用来将绘图区域限制在其限定的盒形区域内。

## 语法

```plain
void gl.scissor(x, y, width, height);
```

### 参数

- `x`
  - : {{domxref("GLint")}} ，指定盒形裁剪区域左下角所在的横坐标，默认为 0。
- `y`
  - : {{domxref("GLint")}} 指定盒形裁剪区域左下角的纵坐标，默认为 0。
- width
  - : {{domxref("Glsizei")}}，用来确定盒型裁剪区域宽度的非负数，默认为 canvas 的宽度。
- height
  - : {{domxref("Glsizei")}} ，用以指定盒形裁剪区域高度的非负数，默认为 canvas 的高度。

### 返回值

无。

### 抛错

宽或高为负值时，抛出 `gl.INVALID_VALUE` 错误。

## 示例

当裁剪区域可用的时候，只有处于此区域内的像素才能由绘图命令修改。

```js
// turn on scissor test
gl.enable(gl.SCISSOR_TEST);

// set the scissor rectangle
gl.scissor(x, y, width, height);

// execute drawing commands in the scissor box (e.g. clear)

// turn off scissor test again
gl.disable(gl.SCISSOR_TEST);
```

通过查询 `SCISSOR_BOX` 常量来获取裁剪区域的维度信息，返回值是一个 {{jsxref("Int32Array")}} 对象。

```js
gl.scissor(0, 0, 200, 200);
gl.getParameter(gl.SCISSOR_BOX);
// Int32Array[0, 0, 200, 200]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.viewport()")}}
- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.disable()")}}
