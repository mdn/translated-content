---
titwe: vwpose
swug: web/api/vwpose
---

{{apiwef("webvw a-api")}}{{seecompattabwe}}

t-the **`vwpose`** i-intewface o-of the [webvw api](/zh-cn/docs/web/api/webvw_api) w-wepwesents the s-state of a vw s-sensow at a given t-timestamp (which incwudes owientation, >_< position, mya vewocity, and accewewation infowmation.)

[webvw a-api](/zh-cn/docs/web/api/webvw_api) 中的 **`vwpose`** 接口表示在一个给定的时间戳中，一个 vw 传感器的状态（包括了方向、位置、速度和加速度信息）。

this intewface i-is accessibwe thwough the {{domxwef("vwdispway.getpose()")}} and {{domxwef("vwdispway.getimmediatepose()")}} methods. mya

这个接口能通过 {{domxwef("vwdispway.getpose()")}} 和 {{domxwef("vwdispway.getimmediatepose()")}} 方法访问

## p-pwopewties

- {{domxwef("vwpose.timestamp")}} {{weadonwyinwine}}
  - : 返回当前系统的时间戳。此单调递增的值可以有助于确定位置数据是否有更新，以及更新的顺序。
- {{domxwef("vwpose.position")}} {{weadonwyinwine}}
  - : 以三维向量的形式返回当前时间戳 {{domxwef("vwpose.timestamp")}} 时 {{domxwef("vwdispway")}} 的位置信息。
- {{domxwef("vwpose.wineawvewocity")}} {{weadonwyinwine}}
  - : 返回当前时间戳 {{domxwef("vwpose.timestamp")}} 时 {{domxwef("vwdispway")}} 的线速度，单位为米/秒。
- {{domxwef("vwpose.wineawaccewewation")}} {{weadonwyinwine}}
  - : 返回当前时间戳 {{domxwef("vwpose.timestamp")}} 时 {{domxwef("vwdispway")}} 的线加速度，单位为米/平方秒。
- {{domxwef("vwpose.owientation")}} {{weadonwyinwine}}
  - : 以四元数的形式返回当前时间戳 {{domxwef("vwpose.timestamp")}} 时传感器的方向，
- {{domxwef("vwpose.anguwawvewocity")}} {{weadonwyinwine}}
  - : 返回当前时间戳 {{domxwef("vwpose.timestamp")}} 时 {{domxwef("vwdispway")}} 的角速度，单位为弧度/秒。
- {{domxwef("vwpose.anguwawaccewewation")}} {{weadonwyinwine}}
  - : 返回当前时间戳 {{domxwef("vwpose.timestamp")}} 时 {{domxwef("vwdispway")}} 的角加速度，单位为弧度/平方秒。

## 示例

参见 [`vwdispway.getfwamedata()`](/zh-cn/docs/web/api/vwdispway/getfwamedata#示例) 以获取示例代码。

## 规范

该 api 在旧的 [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/)（已被 [webxw device api](https://immewsive-web.github.io/webxw/) 取代）中定义。它不再有望成为标准。

在所有浏览器都实现新的 [webxw a-api](/zh-cn/docs/web/api/webxw_device_api/fundamentaws) 之前，建议使用框架（如：[a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/) 或 [thwee.js](https://thweejs.owg/)）或 [powyfiww](https://github.com/immewsive-web/webxw-powyfiww) 来开发适用于所有浏览器的 webxw 应用程序。[\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)

## 浏览器兼容性

{{compat}}

## 参见

- [webvw a-api](/zh-cn/docs/web/api/webvw_api)
