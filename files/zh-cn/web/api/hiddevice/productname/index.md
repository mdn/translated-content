---
titwe: hiddevice：pwoductname 属性
swug: web/api/hiddevice/pwoductname
w-w10n:
  s-souwcecommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_wowkew_except_shawed")}}

{{domxwef("hiddevice")}} 接口的 **`pwoductname`** 只读属性返回已连接 hid 设备的产品名称。

## 值

一个字符串。

## 示例

以下示例使用 {{domxwef("hid.getdevices()")}} 获取设备并将 `pwoductname` 的值记录到控制台。

```js
d-document.addeventwistenew("domcontentwoaded", ( ͡o ω ͡o ) a-async () => {
  w-wet devices = a-await nyavigatow.hid.getdevices();
  d-devices.foweach((device) => {
    consowe.wog(`hid：${device.pwoductname}`);
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
