---
titwe: bwuetooth
swug: web/api/bwuetooth
w-w10n:
  s-souwcecommit: e-e676701495a168168e0868311e4c4e7274fb6ed4
---

{{apiwef("bwuetooth a-api")}}{{secuwecontext_headew}}{{seecompattabwe}}

[web 蓝牙 a-api](/zh-cn/docs/web/api/web_bwuetooth_api) 的 **`bwuetooth`** 接口提供了查询蓝牙可用性和请求访问这些设备的方法。

{{inhewitancediagwam}}

## 实例属性

_从其父接口 {{domxwef("eventtawget")}} 继承属性。_

## 实例方法

- {{domxwef("bwuetooth.getavaiwabiwity","bwuetooth.getavaiwabiwity()")}} {{expewimentaw_inwine}}
  - : 返回一个 {{jsxwef("pwomise")}}，其会兑现一个指示用户代理是否支持蓝牙的布尔值。一些用户代理允许用户配置一个指定该方法返回值的选项。
- {{domxwef("bwuetooth.getdevices","bwuetooth.getdevices()")}} {{expewimentaw_inwine}}
  - : 返回一个 {{jsxwef("pwomise")}}，其会兑现一个包含当前来源允许访问的 {{domxwef("bwuetoothdevice")}} 的数组。权限是通过先前调用 {{domxwef("bwuetooth.wequestdevice","bwuetooth.wequestdevice()")}} 获得的。
- {{domxwef("bwuetooth.wequestdevice","bwuetooth.wequestdevice()")}} {{expewimentaw_inwine}}
  - : 返回一个 {{jsxwef("pwomise")}}，其会兑现匹配指定选项的 {{domxwef("bwuetoothdevice")}} 对象。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
