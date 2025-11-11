---
title: WebGLRenderingContext.activeTexture()
slug: Web/API/WebGLRenderingContext/activeTexture
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.activeTexture()`** 是 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 方法之一，用来激活指定的纹理单元。

## 句法

```plain
void gl.activeTexture(texture);
```

### 参数

- `texture`
  - : 需要激活的纹理单元。其值是 `gl.TEXTUREI` ，其中的 _I_ 在 0 到 `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1` 范围内。

### 返回值

无返回值。

### 异常

如果 _texture_ 不是 `gl.TEXTUREI(` _I_ 在 0 到 `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1` 范围内)，一个 `gl.INVALID_ENUM` 错误将被抛出。

## 示例

接下来调用 `gl.TEXTURE1` 作为当前纹理，随后对纹理状态的更改将会影响到这个纹理。

```js
gl.activeTexture(gl.TEXTURE1);
```

纹理单元的数量视实现而定，你可以通过访问常量 `MAX_COMBINED_TEXTURE_IMAGE_UNITS` 来获取这个值。按照规范来说，最少是 8 个。

```js
gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
```

想要获取激活的纹理，可以查询常量 `ACTIVE_TEXTURE`。

```js
gl.activeTexture(gl.TEXTURE0);
gl.getParameter(gl.ACTIVE_TEXTURE);
// returns "33984" (0x84C0, gl.TEXUTURE0 enum value)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.getParameter()")}}
