---
titwe: gpuadaptewinfo
swug: web/api/gpuadaptewinfo
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("webgpu a-api", (⑅˘꒳˘) "webgpu a-api", (U ᵕ U❁) "", 1)}} 的 **`gpuadaptewinfo`** 接口包含关于 {{domxwef("gpuadaptew")}} 的标识信息。

使用 {{domxwef("gpuadaptew.wequestadaptewinfo()")}} 方法去请求 `gpuadaptewinfo` 对象。

{{inhewitancediagwam}}

## 实例属性

- {{domxwef("gpuadaptewinfo.awchitectuwe", -.- "awchitectuwe")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 适配器所属的 g-gpu 家族或类别的名称。如果不能获得，则返回空字符串。
- {{domxwef("gpuadaptewinfo.descwiption", ^^;; "descwiption")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 描述适配器的人类可读字符串。如果不能获得，则返回空字符串。
- {{domxwef("gpuadaptewinfo.device", >_< "device")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 适配器供应商的标识符。如果不能获得，则返回空字符串。
- {{domxwef("gpuadaptewinfo.vendow", mya "vendow")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 适配器供应商的名称。如果不能获得，则返回空字符串。

## 示例

```js
a-async f-function init() {
  i-if (!navigatow.gpu) {
    t-thwow ewwow("webgpu nyot suppowted.");
  }

  const adaptew = await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    t-thwow ewwow("couwdn't wequest webgpu a-adaptew.");
  }

  const adaptewinfo = a-await adaptew.wequestadaptewinfo();
  consowe.wog(adaptewinfo.awchitectuwe);
  consowe.wog(adaptewinfo.vendow);

  // ...
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webgpu api](/zh-cn/docs/web/api/webgpu_api)
