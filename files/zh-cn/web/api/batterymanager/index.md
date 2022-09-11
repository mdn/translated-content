---
title: BatteryManager（电源管理）
slug: Web/API/BatteryManager
---
{{APIRef}}

BatteryManager 接口提供方法获取系统电量。

{{domxref("navigator.getBattery")}} 方法返回一个 promise 对象，该 promise 将提供一个 BatteryManager 接口，你可以从[Battery Status API](/zh-CN/docs/Web/API/Battery_Status_API) 查询到相关信息。

## 属性

- {{domxref("BatteryManager.charging")}} {{ReadOnlyInline}}
  - : 一个布尔值，说明当前电池是否正在充电。
- {{domxref("BatteryManager.chargingTime")}} {{ReadOnlyInline}}
  - : 一个数字，代表距离充电完毕还需多少秒，如果为 0 则充电完毕。
- {{domxref("BatteryManager.dischargingTime")}} {{ReadOnlyInline}}
  - : 一个数字，代表距离电池耗电至空且挂起需要多少秒。
- {{domxref("BatteryManager.level")}} {{ReadOnlyInline}}
  - : 一个数字，代表电量的放大等级，这个值在 0.0 至 1.0 之间。

### 事件处理器

- {{domxref("BatteryManager.onchargingchange")}}
  - : {{event("chargingchange")}}事件处理器；电池充电状态更新时被调用。
- {{domxref("BatteryManager.onchargingtimechange")}}
  - : {{event("chargingtimechange")}}事件处理器；电池充电时间更新时被调用。
- {{domxref("BatteryManager.ondischargingtimechange")}}
  - : {{event("dischargingtimechange")}}事件处理器；电池断开充电时间更新时被调用。
- {{domxref("BatteryManager.onlevelchange")}}
  - : {{event("levelchange")}}事件处理器；电池电量更新时被调用。

## 方法

_方法继承自其父接口_：{{domxref("EventTarget")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.BatteryManager")}}

## 参见

- [电池状态 API](/zh-CN/docs/Web/API/Battery_Status_API)
- {{domxref("navigator.getBattery")}}
