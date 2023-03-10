---
title: Navigator.getBattery()
slug: Web/API/Navigator/getBattery
---

{{ ApiRef("Battery API") }}

`getBattery() 方法提供了系统的电量信息，返回一个 battery 的 promise 对象，然后 resolve 后得到`{{domxref("BatteryManager")}}对象，它提供了一些新的事件，以及方法供您监控电池的状态。这个方法实现了 [Battery Status API](/zh-CN/docs/WebAPI/Battery_Status)（查看更多细节以及使用方法和实例代码）

## 语法

```plain
navigator.getBattery().then(funcRef);
```

`funcRef` 是{{domxref("navigator.getBattery")}} 返回的 battery promise 对象被 resolve 后执行的函数，即回调函数。

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 请参见

- [Battery Status API](/zh-CN/docs/WebAPI/Battery_Status)
