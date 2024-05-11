---
title: BatteryManager
slug: Web/API/BatteryManager
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

{{domxref("Battery Status API", "电池状态 API", "", "nocode")}} 的 **`BatteryManager`** 接口提供了系统电池电量的一些信息。{{domxref("navigator.getBattery()")}} 方法返回一个 promise 对象，其兑现一个 `BatteryManager` 接口。

自 Chrome 103 起，{{domxref("Battery Status API", "电池状态 API", "", "nocode")}} 的 `BatteryManager` 接口只在安全上下文中暴露。

{{InheritanceDiagram}}

## 实例属性

_也从其父接口 {{domxref("EventTarget")}} 继承属性。_

- {{domxref("BatteryManager.charging")}} {{ReadOnlyInline}}
  - : 一个指示当前电池是否正在充电的布尔值。
- {{domxref("BatteryManager.chargingTime")}} {{ReadOnlyInline}}
  - : 一个表示电池距离充电完毕还需多少秒的数字，或为 0 则表示电池已充电完毕。
- {{domxref("BatteryManager.dischargingTime")}} {{ReadOnlyInline}}
  - : 一个表示距离电池完全耗电且系统挂起需要多少秒的数字。
- {{domxref("BatteryManager.level")}} {{ReadOnlyInline}}
  - : 一个表示系统的电池电量水平的数字，其值介于 0.0 和 1.0 之间。

## 实例方法

_也从其父接口 {{domxref("EventTarget")}} 继承方法。_

## 事件

_也从其父接口 {{domxref("EventTarget")}} 继承事件。_

- {{domxref("BatteryManager.chargingchange_event", "chargingchange")}}
  - : 当电池充电状态（{{domxref("BatteryManager.charging", "charging")}} 属性）更新时触发。
- {{domxref("BatteryManager.chargingtimechange_event", "chargingtimechange")}}
  - : 当电池充电时间（{{domxref("BatteryManager.chargingTime", "chargingTime")}} 属性）更新时触发。
- {{domxref("BatteryManager.dischargingtimechange_event", "dischargingtimechange")}}
  - : 当电池续航时间（{{domxref("BatteryManager.dischargingTime", "dischargingTime")}} 属性）更新时触发。
- {{domxref("BatteryManager.levelchange_event", "levelchange")}}
  - : 当电池电量（{{domxref("BatteryManager.level", "level")}} 属性）更新时触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Battery Status API", "电池状态 API", "", "nocode")}}
- {{domxref("Navigator.getBattery()")}}
