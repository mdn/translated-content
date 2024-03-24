---
title: BatteryManager：dischargingtimechange 事件
slug: Web/API/BatteryManager/dischargingtimechange
l10n:
  sourceCommit: cf05364b23bc44af37a350319a1dd47485746a9c
---

{{ApiRef("Battery API")}}{{securecontext_header}}

{{domxref("BatteryManager")}} 接口的 **`dischargingtimechange`** 事件在电池的 {{domxref("BatteryManager.dischargingTime", "dischargingTime")}} 属性更新时触发。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理程序属性。

```js-nolint
addEventListener("dischargingtimechange", (event) => { })

ondischargingtimechange = (event) => { }
```

## 事件类型

_一个通用的 {{domxref("Event")}}。_

## 示例

### HTML

```html
<div id="level">（电池电量未知）</div>
<div id="chargingTime">（电池充电时间未知）</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  battery.ondischargingtimechange = () => {
    document.querySelector("#level").textContent = battery.level;
    document.querySelector("#chargingTime").textContent = battery.chargingTime;
  };
});
```

{{ EmbedLiveSample('示例', '100%', 40) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery()")}}
