---
title: Battery Status API
slug: Web/API/Battery_Status_API
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Battery API")}}{{securecontext_header}}

**Battery API** 만큼이나 자주 언급되는 **Battery Status API**는 시스템의 배터리 충전 상태에 대한 정보를 제공하고, 배터리 상태에 따라 발생하는 이벤트를 다룰 수 있도록 해 줍니다. 배터리가 얼마남지 않은 상황에서, 앱에서 배터리의 소모를 줄인다거나 배터리가 방전되기 전에 데이터를 저장하거나 하는 것들이 가능합니다.

> [!NOTE]
> 이 API는 [Web Workers](/ko/docs/Web/API/Web_Workers_API) 에서 사용이 불가능합니다. ({{domxref("WorkerNavigator")}} 에 포함되어 있지 않음)

## 인터페이스

- {{domxref("BatteryManager")}}
  - : 시스템의 배터리 충전 상태에 대한 정보를 제공합니다.

### 다른 인터페이스로의 확장

- {{domxref("Navigator.getBattery()")}}
  - : {{DOMxRef("BatteryManager")}} 객체를 이행하는 {{JSxRef("Promise")}}를 리턴합니다.

## 예제

이 예제에서는 배터리가 충전중인 상태(전원 케이블을 연결하여 충전 중인지)와 배터리 잔량 및 타이밍의 변화를 모두 관찰합니다. 이 작업은 {{domxref("BatteryManager.chargingchange_event", "chargingchange")}}, {{domxref("BatteryManager.levelchange_event", "levelchange")}}, {{domxref("BatteryManager.chargingtimechange_event", "chargingtimechange")}}, {{domxref("BatteryManager.dischargingtimechange_event", "dischargingtimechange")}} 이벤트를 수신하는 방식으로 수행됩니다.

```js
navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log(`Battery level: ${battery.level * 100}%`);
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log(`Battery charging time: ${battery.chargingTime} seconds`);
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
  }
});
```

[명세서의 예시도](https://www.w3.org/TR/battery-status/#examples) 참조하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Hacks blog post - Using the Battery API](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
