---
title: Battery Status API
slug: Web/API/Battery_Status_API
---

{{DefaultAPISidebar("Battery API")}}

**Battery API** 만큼이나 자주 언급되는 **Battery Status API**는 시스템의 배터리 충전 상태에 대한 정보를 제공하고, 배터리 상태에 따라 발생하는 이벤트를 다룰 수 있도록 해 줍니다. 배터리가 얼마남지 않은 상황에서, 앱에서 배터리의 소모를 줄인다거나 배터리가 방전되기 전에 데이터를 저장하거나 하는 것들이 가능합니다.

Battery Status API 는 {{domxref("window.navigator.battery")}} 를 제공 합니다. 이는 {{domxref("BatteryManager")}} 객체이며 배터리 상태를 감시하고 전달받아 처리할 수 있는 이벤트를 가지고 있습니다.

## 예제

아래 예제에서는 배터리가 충전중인 상태 (전원 케이블을 연결하여 충전 중인지) 와 배터리 수준의 변화를 감시합니다. 각각 {{domxref("BatteryManager.chargingchange_event", "chargingchange")}} 와 {{domxref("BatteryManager.levelchange_event", "levelchange")}} 이벤트가 발생하면 완료 됩니다.

```js
var battery =
  navigator.battery || navigator.mozBattery || navigator.webkitBattery;

function updateBatteryStatus() {
  console.log("Battery status: " + battery.level * 100 + " %");

  if (battery.charging) {
    console.log("Battery is charging");
  }
}

battery.addEventListener("chargingchange", updateBatteryStatus);
battery.addEventListener("levelchange", updateBatteryStatus);
updateBatteryStatus();
```

명세서의 예제도 [**확인**](http://dev.w3.org/2009/dap/system-info/battery-status.html#introduction)해보세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더보기

- [Hacks blog post - Using the Battery API](http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
- {{domxref("BatteryManager")}}
- {{domxref("window.navigator.battery","navigator.battery")}}
