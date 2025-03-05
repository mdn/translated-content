---
title: BatteryManager：chargingTime 属性
slug: Web/API/BatteryManager/chargingTime
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("Battery API")}}{{securecontext_header}}

{{domxref("BatteryManager")}} 接口的 **`chargingTime`** 只读属性指示电池充满电所需要的时间（以秒为单位），如果电池充满电或用户代理无法报告电池状态信息则为 `0`。如果电池当前正在耗电，则其值为 {{jsxref("Infinity")}}。当其值更改时，会触发 {{domxref("BatteryManager/chargingtimechange_event", "chargingtimechange")}} 事件。

> [!NOTE]
> 即使返回的时间精确到秒，出于隐私原因，浏览器会将它们舍入到更大的间隔（通常为最接近的 15 分钟的倍数）。

## 值

一个数字。

## 示例

### HTML

```html
<div id="chargingTime">（充电时间未知）</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  const time = battery.chargingTime;

  document.querySelector("#chargingTime").textContent =
    `电池完全充满电所需的时间：${time}秒`;
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
