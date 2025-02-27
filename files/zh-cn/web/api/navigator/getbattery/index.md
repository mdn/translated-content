---
title: Navigator：getBattery() 方法
slug: Web/API/Navigator/getBattery
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ApiRef("Battery API")}}{{securecontext_header}}

**`getBattery()`** 方法提供了系统的电池信息，它返回一个包含电池对象的 promise 对象，兑现一个 {{domxref("BatteryManager")}} 对象，它提供了一些新的属性和事件来获取与监控电池状态。这个方法实现了 {{domxref("Battery Status API", "", "", "nocode")}}，参见那篇文档以获得更多额外的细节、使用 API 的指引和示例代码。

自 Chrome 103 起，{{domxref("Battery Status API", "", "", "nocode")}} 的 `Navigator.getBattery()` 方法只在严格上下文中暴露。

> [!NOTE]
> 对该特性的访问可由 {{HTTPHeader("Permissions-Policy")}} 的 {{HTTPHeader("Permissions-Policy/battery","battery")}} 指令控制。

## 语法

```js-nolint
getBattery()
```

### 参数

无。

### 返回值

一个 {{JSxRef("Promise")}}，兑现一个可用于获取电池状态信息的 {{DOMxRef("BatteryManager")}} 对象。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 对该特性的使用被[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)阻止。
- `SecurityError`
  - : 用户代理不会向不安全上下文暴露电池信息，而此方法在不安全的上下文中被调用了。

## 示例

此示例获取了电池当前充电的状态，并建立了 {{domxref("BatteryManager/chargingchange_event", "chargingchange")}} 事件的处理器，因此当充电状态发生变化时，其状态会被记录下来。

```js
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;

  battery.addEventListener("chargingchange", () => {
    batteryIsCharging = battery.charging;
  });
});
```

对于更多示例与具体信息，参见 {{domxref("Battery Status API", "", "", "nocode")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Battery Status API", "", "", "nocode")}}
- {{HTTPHeader("Permissions-Policy")}} 的 {{HTTPHeader("Permissions-Policy/battery", "battery")}} 指令
