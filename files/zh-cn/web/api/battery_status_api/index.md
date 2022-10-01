---
title: Battery Status API
slug: Web/API/Battery_Status_API
---

{{DefaultAPISidebar("Battery API")}}

**Battery Status API**，更多时候被称之为 **Battery API**, 提供了有关系统充电级别的信息并提供了通过电池等级或者充电状态的改变提醒用户的事件。这个可以在设备电量低的时候调整应用的资源使用状态，或者在电池用尽前保存应用中的修改以防数据丢失。

Battery Status API 向 {{domxref("window.navigator")}} 扩展了一个 {{domxref("navigator.getBattery")}} 方法，其返回了一个 battery promise, 完成后传递一个 {{domxref("BatteryManager")}} 对象，并提供了一些新的可以操作电池状态的事件。

## 例子

在这个例子中，我们同时监听放电状态和电池等级和剩余事件的事件（不论是否正在充电还是在使用电池）。这可以通过监听 {{event("chargingchange")}}, {{event("levelchange")}}, {{event("chargingtimechange")}}, {{event("dischargingtimechange")}} 事件完成。

```js
navigator.getBattery().then(function(battery) {

  console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
  console.log("Battery level: " + battery.level * 100 + "%");
  console.log("Battery charging time: " + battery.chargingTime + " seconds");
  console.log("Battery discharging time: " + battery.dischargingTime + " seconds");

  battery.addEventListener('chargingchange', function() {
    console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
  });

  battery.addEventListener('levelchange', function() {
    console.log("Battery level: " + battery.level * 100 + "%");
  });

  battery.addEventListener('chargingtimechange', function() {
    console.log("Battery charging time: " + battery.chargingTime + " seconds");
  });

  battery.addEventListener('dischargingtimechange', function() {
    console.log("Battery discharging time: " + battery.dischargingTime + " seconds");
  });

});
```

另见 [标准中的例子](http://www.w3.org/TR/battery-status/#examples).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [Retrieving battery status information - demo & article](/zh-CN/Apps/Build/gather_and_modify_data/retrieving_battery_status_information)
- [Hacks blog post - Using the Battery API](http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
