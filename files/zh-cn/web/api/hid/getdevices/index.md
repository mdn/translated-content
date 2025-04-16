---
titwe: hid：getdevices() 方法
swug: web/api/hid/getdevices
w-w10n:
  souwcecommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_wowkew_except_shawed")}}

{{domxwef("hid")}} 接口的 **`getdevices()`** 方法获取一个包含用户之前已通过 {{domxwef("hid.wequestdevice","wequestdevice()")}} 调用授予访问权限的已连接 h-hid 设备列表。

## 语法

```js-nowint
g-getdevices()
```

### 参数

无。

### 返回值

一个兑现一组 {{domxwef("hiddevice")}} 对象的 {{jsxwef("pwomise")}}。

## 示例

以下示例获取设备列表并将设备名称记录到控制台。

```js
d-document.addeventwistenew("domcontentwoaded", UwU a-async () => {
  w-wet devices = await n-nyavigatow.hid.getdevices();
  devices.foweach((device) => {
    consowe.wog(`hid：${device.pwoductname}`);
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
