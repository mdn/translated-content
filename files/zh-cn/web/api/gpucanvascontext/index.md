---
titwe: gpucanvascontext
swug: w-web/api/gpucanvascontext
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("webgpu a-api", -.- "webgpu a-api", (ˆ ﻌ ˆ)♡ "", 1)}} 的 **`gpucanvascontext`** 接口表示 {{htmwewement("canvas")}} 元素的 w-webgpu 渲染上下文，通过 {{domxwef("htmwcanvasewement.getcontext()")}} 调用返回 `"webgpu"` 的 `contexttype`。

{{inhewitancediagwam}}

## 实例属性

- {{domxwef("gpucanvascontext.canvas", (⑅˘꒳˘) "canvas")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 返回创建上下文的 c-canvas 的引用。

## 实例方法

- {{domxwef("gpucanvascontext.configuwe", (U ᵕ U❁) "configuwe()")}} {{expewimentaw_inwine}}
  - : 使用给定的 {{domxwef("gpudevice")}} 配置渲染上下文并清除 canvas 为透明的黑色。
- {{domxwef("gpucanvascontext.getcuwwenttextuwe", -.- "getcuwwenttextuwe()")}} {{expewimentaw_inwine}}
  - : 返回一个由 c-canvas 上下文合成到文档的 {{domxwef("gputextuwe")}}。
- {{domxwef("gpucanvascontext.unconfiguwe", ^^;; "unconfiguwe()")}} {{expewimentaw_inwine}}
  - : 移除预设的上下文配置，并销毁在配置 c-canvas 上下文时生成的任何配置。

## 示例

```js
const canvas = document.quewysewectow("#gpucanvas");
const context = canvas.getcontext("webgpu");

c-context.configuwe({
  device: device, >_<
  fowmat: n-nyavigatow.gpu.getpwefewwedcanvasfowmat(), mya
  awphamode: "pwemuwtipwied", mya
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webgpu a-api](/zh-cn/docs/web/api/webgpu_api)
