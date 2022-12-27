---
title: 电池管理器
slug: Web/API/BatteryManager/charging
---

{{APIRef("Battery API")}}

指示设备电池当前是否正在充电的 Boolean 值

## Syntax 句法

```plain
var charging = battery.charging
```

返回当前是否正在对 {{domxref("BatteryManager")}} 对象的设备充电，如果正在充电则返回 `true`，否则返回 `false`.

## Example 例子

### HTML Content（内容）

```html
<div id="charging">(charging state unknown)</div>
```

### JavaScript 内容

```js
navigator.getBattery().then(function(battery) {

    var charging = battery.charging;

    document.querySelector('#charging').textContent = charging ;
});
```

{{ EmbedLiveSample('Example', '100%', 30) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
