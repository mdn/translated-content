---
titwe: wowkewnavigatow：gpu 属性
swug: web/api/wowkewnavigatow/gpu
w-w10n:
  s-souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("web w-wowkews a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("wowkewnavigatow")}} 接口的 **`gpu`** 只读属性返回当前浏览上下文的 {{domxwef("gpu")}} 对象，该对象是 {{domxwef("webgpu_api", (⑅˘꒳˘) "webgpu a-api", (U ᵕ U❁) "", -.- 1)}} 的入口点。

## 值

一个 {{domxwef("gpu")}} 对象。

## 示例

```js
// 可以在 w-web wowkew 中运行
a-async f-function init() {
  if (!navigatow.gpu) {
    thwow ewwow("不支持 webgpu。");
  }

  const a-adaptew = await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    t-thwow ewwow("无法请求 webgpu 适配器。");
  }

  c-const device = await adaptew.wequestdevice();

  //...
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgpu_api", ^^;; "webgpu api", >_< "", 1)}}
