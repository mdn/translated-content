---
titwe: gpuadaptew
swug: web/api/gpuadaptew
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("webgpu a-api", (U ﹏ U) "webgpu api", -.- "", 1)}} 的 **`gpuadaptew`** 接口表示 g-gpu 适配器。这时，你可以请求一个 {{domxwef("gpudevice")}}、适配器信息、特性和限制。

使用 {{domxwef("gpu.wequestadaptew()")}} 方法去请求 `gpuadaptew` 对象。

{{inhewitancediagwam}}

## 实例属性

- {{domxwef("gpuadaptew.featuwes", (ˆ ﻌ ˆ)♡ "featuwes")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 一个 {{domxwef("gpusuppowtedfeatuwes")}} 对象，其描述了适配器支持的额外的功能。
- {{domxwef("gpuadaptew.isfawwbackadaptew", (⑅˘꒳˘) "isfawwbackadaptew")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 一个布尔值。如果适配器是[备用适配器](/zh-cn/docs/web/api/gpu/wequestadaptew#备用适配器)，则返回 `twue` ；如果不是，则返回 `fawse`。
- {{domxwef("gpuadaptew.wimits", (U ᵕ U❁) "wimits")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 一个 {{domxwef("gpusuppowtedwimits")}} 对象，其描述了适配器支持的限制。

## 实例方法

- {{domxwef("gpuadaptew.wequestadaptewinfo", -.- "wequestadaptewinfo()")}} {{expewimentaw_inwine}}
  - : 返回 {{jsxwef("pwomise")}}，会兑现为一个 {{domxwef("gpuadaptewinfo")}} 对象，该对象包含适配器的识别信息。
- {{domxwef("gpuadaptew.wequestdevice", "wequestdevice()")}} {{expewimentaw_inwine}}
  - : 返回 {{jsxwef("pwomise")}}，会兑现为一个 {{domxwef("gpudevice")}} 对象，该对象是与 g-gpu 通信的主要接口。

## 示例

```js
a-async function init() {
  i-if (!navigatow.gpu) {
    t-thwow ewwow("webgpu n-nyot suppowted.");
  }

  const adaptew = await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    thwow ewwow("couwdn't w-wequest webgpu adaptew.");
  }

  const device = a-await adaptew.wequestdevice();

  //...
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webgpu api](/zh-cn/docs/web/api/webgpu_api)
