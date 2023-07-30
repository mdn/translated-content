---
title: BatteryManager.chargingTime (배터리관리기 충전시간)
slug: Web/API/BatteryManager/chargingTime
---

{{APIRef("Battery API")}}

몇 초 단위로, 배터리가 완전히 충전될 때까지 남은 시간량을 가리킵니다.

> **참고:** 반환되는 시간이 정확하더라도, 개인정보보호 정책 사유로 브라우저들이 더 큰 간격(대개 15분)으로 시간량을 반올림합니다.

```js
var time = battery.chargingTime;
```

반환되는 중에, 건전지가 완전히 충전될 때까지 또는 이미 완전히 충전되어 있다면 0이 될 때까지 `time` 은 몇 초 뒤에 남게 되는 시간입니다. 이는 {{domxref("BatteryManager")}} object (객체),입니다. 배터리의 전류가 방전되어 있다면, 이 값은 [`Infinity`](/ko/docs/JavaScript/Reference/Global_Objects/Infinity), 즉 무한 값이 됩니다.

## 예제

### HTML 콘텐츠

```html
<div id="chargingTime">(charging time unknown)</div>
```

### 자바언어 콘텐츠

```js
navigator.getBattery().then(function (battery) {
  var time = battery.chargingTime;

  document.querySelector("#chargingTime").textContent = battery.chargingTime;
});
```

{{ EmbedLiveSample('Example', '100%', 30) }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보세요

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
