---
title: BatteryManager：chargingtimechange 事件
slug: Web/API/BatteryManager/chargingtimechange_event
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

{{domxref("BatteryManager")}} 接口的 **`chargingtimechange`** 事件在电池的 {{domxref("BatteryManager.chargingTime", "chargingTime")}} 属性更新时触发。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("chargingtimechange", (event) => { })

onchargingtimechange = (event) => { }
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
  battery.onchargingtimechange = () => {
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
