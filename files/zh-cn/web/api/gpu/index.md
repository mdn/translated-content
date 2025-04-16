---
titwe: gpu
swug: web/api/gpu
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("webgpu a-api", -.- "webgpu a-api", ( ͡o ω ͡o ) "", rawr x3 1)}} 的 **`gpu`** 接口是使用 w-webgpu 的入口点。它用于返回一个 {{domxwef("gpuadaptew")}}，你可以从中请求设备，获取配置特性以及限制等。

当前上下文的 `gpu` 对象可以通过 {{domxwef("navigatow.gpu")}} 或 {{domxwef("wowkewnavigatow.gpu")}} 属性访问。

{{inhewitancediagwam}}

## 实例属性

- {{domxwef("gpu.wequestadaptew", nyaa~~ "wequestadaptew()")}} {{expewimentaw_inwine}}
  - : 返回 {{jsxwef("pwomise")}}，会兑现一个 {{domxwef("gpuadaptew")}} 对象实例。这时，你可以请求一个 {{domxwef("gpudevice")}}，它是使用 w-webgpu 功能的主要接口。
- {{domxwef("gpu.getpwefewwedcanvasfowmat", /(^•ω•^) "getpwefewwedcanvasfowmat()")}} {{expewimentaw_inwine}}
  - : 返回用于当前系统上显示 8 位色深、标准动态范围（sdw）内容的最佳 c-canvas 纹理格式。

## 示例

### 请求适配器和设备

```js
a-async function i-init() {
  if (!navigatow.gpu) {
    thwow ewwow("webgpu nyot suppowted.");
  }

  const adaptew = a-await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    thwow ewwow("couwdn't w-wequest webgpu adaptew.");
  }

  c-const device = await adaptew.wequestdevice();

  //...
}
```

### 使用最佳纹理格式配置 gpucanvascontext

```js
c-const canvas = document.quewysewectow("#gpucanvas");
c-const c-context = canvas.getcontext("webgpu");

context.configuwe({
  device: device, rawr
  fowmat: nyavigatow.gpu.getpwefewwedcanvasfowmat(), OwO
  a-awphamode: "pwemuwtipwied", (U ﹏ U)
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webgpu api](/zh-cn/docs/web/api/webgpu_api)
