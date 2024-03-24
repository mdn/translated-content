---
title: BatteryManager：dischargingTime 属性
slug: Web/API/BatteryManager/dischargingTime
l10n:
  sourceCommit: cf05364b23bc44af37a350319a1dd47485746a9c
---

{{ApiRef("Battery API")}}{{securecontext_header}}

{{domxref("BatteryManager")}} 接口的 **`dischargingTime`** 只读属性指示电池完全放电所需的时间（以秒为单位），如果电池当前正在充电而不是放电或者用户代理无法报告电池状态信息则为 {{jsxref("Infinity")}}。当其值发生变化时，会触发 {{domxref("BatteryManager/dischargingtimechange_event", "dischargingtimechange")}} 事件。

> **备注：** 即使返回的时间精确到秒，出于隐私原因，浏览器会将它们四舍五入到更大的间隔（通常为最接近 15 分钟的数字）。

## 值

一个数字。

## 示例

### HTML

```html
<div id="dischargingTime">（电量耗尽时间未知）</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  const time = battery.dischargingTime;

  document.querySelector("#dischargingTime").textContent =
    `电池电量完全耗尽的剩余时间：${time}秒`;
});
```

{{ EmbedLiveSample('示例', '100%', 30) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery()")}}
