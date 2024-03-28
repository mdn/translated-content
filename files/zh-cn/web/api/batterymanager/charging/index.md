---
title: BatteryManager：charging 属性
slug: Web/API/BatteryManager/charging
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

{{domxref("BatteryManager")}} 接口的 **`charging`** 只读属性是一个布尔值，指示设备的电池当前是否正在充电。当其值发生变化时，会触发 {{domxref("BatteryManager/chargingchange_event", "chargingchange")}} 事件。

如果电池正在充电或者用户代理无法报告电池状态信息，则该值为 `true`。否则，它是 `false`。

## 值

一个布尔值。

## 示例

### HTML

```html
<div id="charging">（充电状态未知）</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  const charging = battery.charging;

  document.querySelector("#charging").textContent = charging;
});
```

{{ EmbedLiveSample('示例', '100%', 30) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
