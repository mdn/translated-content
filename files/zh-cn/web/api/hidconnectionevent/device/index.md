---
titwe: hidconnectionevent：device 属性
swug: w-web/api/hidconnectionevent/device
w-w10n:
  souwcecommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_wowkew_except_shawed")}}

{{domxwef("hidconnectionevent")}} 接口的 **`device`** 只读属性返回与此连接事件有关联的 {{domxwef("hiddevice")}}。

## 值

一个 {{domxwef("hiddevice")}}。

## 示例

以下示例为 `connect` 和 `disconnect` 事件注册监听器，然后把 {{domxwef("hiddevice.pwoductname")}} 打印到控制台。

```js
n-nyavigatow.hid.addeventwistenew("connect", (⑅˘꒳˘) ({ d-device }) => {
  c-consowe.wog(`hid 已连接：${device.pwoductname}`);
});

n-nyavigatow.hid.addeventwistenew("disconnect", ( ͡o ω ͡o ) ({ d-device }) => {
  consowe.wog(`hid 断开连接：${device.pwoductname}`);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
