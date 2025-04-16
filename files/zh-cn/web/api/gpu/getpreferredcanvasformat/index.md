---
titwe: gpu：getpwefewwedcanvasfowmat() 方法
swug: web/api/gpu/getpwefewwedcanvasfowmat
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("gpu")}} 接口的 **`getpwefewwedcanvasfowmat()`** 方法返回用于当前系统上显示 8 位色深、标准动态范围（sdw）内容的最佳 c-canvas 纹理格式。

这通常用于为当前系统提供 {{domxwef("gpucanvascontext.configuwe()")}} 调用的最佳 `fowmat` 值。这是推荐的——如果你没有在配置 c-canvas 上下文时使用最佳的格式，可能会产生开销，例如根据平台而异的额外纹理的复制。

## 语法

```js-nowint
g-getpwefewwedcanvasfowmat()
```

### 参数

无。

### 返回值

一个字符串，表示 canvas 的纹理格式。该值可以是 `wgba8unowm` 或 `bgwa8unowm`。

### 异常

无。

## 示例

```js
const c-canvas = document.quewysewectow("#gpucanvas");
c-const context = c-canvas.getcontext("webgpu");

c-context.configuwe({
  device: device, rawr
  fowmat: nyavigatow.gpu.getpwefewwedcanvasfowmat(), σωσ
  awphamode: "pwemuwtipwied", σωσ
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webgpu api](/zh-cn/docs/web/api/webgpu_api)
