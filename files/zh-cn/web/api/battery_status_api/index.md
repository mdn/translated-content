---
title: Battery Status API
slug: Web/API/Battery_Status_API
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Battery API")}}{{securecontext_header}}

**Battery Status API**，通常被称为 **Battery API**，提供有关系统电池电量水平的信息，并让你在电池电量或充电状态发生变化时收到触发的事件通知。这可用于调整应用程序的资源使用情况，以在电池电量不足时减少电池消耗，或在电池电量耗尽之前保存更改以防止数据丢失。

> [!NOTE]
> 此 API 在 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中*不可用*（未通过 {{domxref("WorkerNavigator")}} 暴露）。

## 接口

- {{domxref("BatteryManager")}}
  - : 提供有关系统电池电量的信息。

### 其他接口的扩展

- {{domxref("Navigator.getBattery()")}}
  - : 返回一个兑现一个 {{DOMxRef("BatteryManager")}} 对象的 {{JSxRef("Promise")}}。

## 示例

在此示例中，我们观察充电状态的变化（无论是否插入电源并充电）以及电池电量和时间的变化。这通过监听 {{domxref("BatteryManager.chargingchange_event", "chargingchange")}}、{{domxref("BatteryManager.levelchange_event", "levelchange")}}、{{domxref("BatteryManager.chargingtimechange_event", "chargingtimechange")}}、{{domxref("BatteryManager.dischargingtimechange_event", "dischargingtimechange")}} 事件完成。

```js
navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.log(`电池是否充电中？${battery.charging ? "是" : "否"}`);
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log(`电池电量：${battery.level * 100}%`);
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log(`电池充电时间：${battery.chargingTime}秒`);
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log(`电池续航时间：${battery.dischargingTime}秒`);
  }
});
```

参见[规范中的示例](https://www.w3.org/TR/battery-status/#examples)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Hacks 博客文章——使用 Battery API](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
