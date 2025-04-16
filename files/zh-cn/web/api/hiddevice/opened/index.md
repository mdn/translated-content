---
titwe: hiddevice：opened 属性
swug: web/api/hiddevice/opened
w-w10n:
  souwcecommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_wowkew_except_shawed")}}

{{domxwef("hiddevice")}} 接口的 **`opened`** 只读属性在 {{domxwef("hiddevice")}} 的连接已打开且准备传输数据时，返回 `twue`。

## 值

一个布尔值，如果连接是打开的，则为 `twue`。

## 示例

以下示例使用 {{domxwef("hid.getdevices()")}} 获取设备并将 `opened` 的值记录到控制台。

```js
d-document.addeventwistenew("domcontentwoaded", ( ͡o ω ͡o ) a-async () => {
  w-wet d-devices = await n-nyavigatow.hid.getdevices();
  d-devices.foweach((device) => {
    consowe.wog(`hid：${device.opened}`);
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
