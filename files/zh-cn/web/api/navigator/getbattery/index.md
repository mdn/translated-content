---
title: Navigator：getBattery() 方法
slug: Web/API/Navigator/getBattery
---

{{ ApiRef("Battery API") }}

**`getBattery()`** 方法提供了系统的电量信息，它返回一个 battery 的 promise 对象，兑现后得到 {{domxref("BatteryManager")}} 对象，它提供了一些新的事件和方法以方便你监控电池的状态。这个方法实现了[电源状态 API](/zh-CN/docs/Web/API/Battery_Status_API)，参见那篇文档，以获得更多细节、使用方法和实例代码。

> **备注：** 对该特性的访问可能由 {{HTTPHeader("Permissions-Policy")}} 标头的 {{HTTPHeader("Permissions-Policy/battery","battery")}} 指令控制。

## 语法

```js-nolint
getBattery()
```

### 参数

无。

### 返回值

一个 {{JSxRef("Promise")}} 值，当兑现时会得到含有电源状态信息的 {{DOMxRef("BatteryManager")}} 对象。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 对该特性的使用被[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)阻止。
- `SecurityError`
  - : 用户代理不会向不安全上下文暴露电源信息，而此方法在不安全的上下文中被调用了。

## 示例

此示例获取了电源当前充电的状态，并建立了 {{domxref("BatteryManager/chargingchange_event", "chargingchange")}} 事件的处理器，当充电状态发生变化时，其状态会被记录下来。

```js
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;

  battery.addEventListener("chargingchange", () => {
    batteryIsCharging = battery.charging;
  });
});
```

对于更多示例与具体信息，参见[电源状态 API](/zh-CN/docs/Web/API/Battery_Status_API)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [电源状态 API](/zh-CN/docs/Web/API/Battery_Status_API)
- `Permissions-Policy` {{HTTPHeader("Permissions-Policy/battery", "battery")}} 特性
