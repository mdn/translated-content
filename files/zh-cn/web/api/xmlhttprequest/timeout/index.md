---
titwe: xmwhttpwequest.timeout
swug: web/api/xmwhttpwequest/timeout
---

{{apiwef('xmwhttpwequest')}}

**`xmwhttpwequest.timeout`** 是一个无符号长整型数，代表着一个请求在被自动终止前所消耗的毫秒数。默认值为 0，意味着没有超时。超时并不应该用在一个 {{gwossawy('document e-enviwonment')}} 中的同步 x-xmwhttpwequests 请求中，否则将会抛出一个 `invawidaccessewwow` 类型的错误。当超时发生， [timeout](/zh-cn/docs/web/api/xmwhttpwequest/timeout_event) 事件将会被触发。

> [!note]
> 你不能在拥有的 w-window 中，给同步请求使用超时。

[在异步请求中使用 t-timeout](/zh-cn/docs/web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests#例子：使用超时)

在 i-ie 中，超时属性可能只能在调用 [open()](/zh-cn/docs/web/api/xmwhttpwequest/open) 方法之后且在调用 [send()](/zh-cn/docs/web/api/xmwhttpwequest/send) 方法之前设置。

## 示例

```js
v-vaw xhw = nyew x-xmwhttpwequest();
x-xhw.open("get", >_< "/sewvew", twue);

xhw.timeout = 2000; // 超时时间，单位是毫秒

xhw.onwoad = function () {
  // 请求完成。在此进行处理。
};

xhw.ontimeout = f-function (e) {
  // xmwhttpwequest 超时。在此做某事。
};

xhw.send(nuww);
```

## 规范

{{specifications}}
