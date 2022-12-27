---
title: DeviceProximityEvent
slug: Web/API/DeviceProximityEvent
---

{{APIRef("Proximity Events")}}{{deprecated_header}}

`DeviceProximityEvent` 接口利用设备的近距离感应器提供有关邻近物品的距离信息。

## 属性

- {{domxref("DeviceProximityEvent.max")}} {{readonlyinline}}
  - : 最大可反馈的感应距离，以厘米记。
- {{domxref("DeviceProximityEvent.min")}} {{readonlyinline}}
  - : 最小可反馈的感应距离，以厘米记，通常是零。
- {{domxref("DeviceProximityEvent.value")}} {{readonlyinline}}
  - : 当前设备接近距离，以厘米记。

## 示例

```js
window.addEventListener('deviceproximity', function(event) {
  console.log("value: " + event.value, "max: " + event.max, "min: " + event.min);
});
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{event("deviceproximity")}}
- {{domxref("UserProximityEvent")}}
- [Proximity API](/zh-CN/docs/WebAPI/Proximity)
