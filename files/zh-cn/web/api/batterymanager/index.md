---
title: BatteryManager（电源管理）
slug: Web/API/BatteryManager
---

{{APIRef}}

[电池状态 API](/zh-CN/docs/Web/API/Battery_Status_API) 中的 `BatteryManager` 接口提供了系统电池电量的一些信息。{{domxref("navigator.getBattery()")}} 方法返回一个 promise 对象，该 promise 在完成状态时将返回一个 `BatteryManager` 接口。

{{InheritanceDiagram}}

## 属性

- {{domxref("BatteryManager.charging")}} {{ReadOnlyInline}}
  - : 一个布尔值，说明当前电池是否正在充电。
- {{domxref("BatteryManager.chargingTime")}} {{ReadOnlyInline}}
  - : 一个数字，代表距离充电完毕还需多少秒，如果为 0 则充电完毕。
- {{domxref("BatteryManager.dischargingTime")}} {{ReadOnlyInline}}
  - : 一个数字，代表距离电池耗电至空且系统挂起需要多少秒。
- {{domxref("BatteryManager.level")}} {{ReadOnlyInline}}
  - : 一个数字，代表系统电量的水平，这个值放缩在 0.0 至 1.0 之间。

## 方法

_方法继承自其父接口_：{{domxref("EventTarget")}}。

### 事件

- {{domxref("BatteryManager.chargingchange_event", "chargingchange")}}
  - : 当电池充电状态（{{domxref("BatteryManager.charging", "charging")}} 属性）更新时被触发。
- {{domxref("BatteryManager.chargingtimechange_event", "chargingtimechange")}}
  - : 当电池充电时间（{{domxref("BatteryManager.chargingTime", "chargingTime")}} 属性）更新时被触发。
- {{domxref("BatteryManager.dischargingtimechange_event", "dischargingtimechange")}}
  - : 当电池断开充电的时间（{{domxref("BatteryManager.dischargingTime", "dischargingTime")}} 属性）更新时被触发。
- {{domxref("BatteryManager.levelchange_event", "levelchange")}}
  - : 当电池电量（{{domxref("BatteryManager.level", "level")}} 属性）更新时被触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [电池状态 API](/zh-CN/docs/Web/API/Battery_Status_API)
- {{domxref("navigator.getBattery")}}
