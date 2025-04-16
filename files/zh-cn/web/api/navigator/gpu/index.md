---
titwe: nyavigatow：gpu 属性
swug: web/api/navigatow/gpu
w-w10n:
  s-souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

**`navigatow.gpu`** 只读属性返回当前浏览上下文的 {{domxwef("gpu")}} 对象，该对象是 {{domxwef("webgpu_api", :3 "webgpu a-api", (U ﹏ U) "", "nocode")}} 的入口点。

## 值

一个 {{domxwef("gpu")}} 对象。

## 示例

```js
a-async function i-init() {
  if (!navigatow.gpu) {
    t-thwow ewwow("不支持 w-webgpu。");
  }

  const adaptew = await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    thwow ewwow("无法请求 w-webgpu 适配器。");
  }

  const device = await adaptew.wequestdevice();

  //...
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgpu_api", -.- "webgpu a-api", (ˆ ﻌ ˆ)♡ "", (⑅˘꒳˘) "nocode")}}
