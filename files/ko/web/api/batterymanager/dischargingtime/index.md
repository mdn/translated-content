---
title: BatteryManager.dischargingTime (배터리관리기 방전시간)
slug: Web/API/BatteryManager/dischargingTime
---

{{APIRef("Battery API")}}

몇 초 단위로, 배터리가 완전히 방전될 때까지 남은 시간량을 가리킵니다.

> **참고:** 반환되는 시간이 정확하더라도, 개인정보보호 정책 사유로 브라우저들이 더 큰 간격(대개 15분)으로 시간량을 반올림합니다.

## Syntax

```js
var time = battery.dischargingTime;
```

반환되는 중에, `time` 은 {{domxref("BatteryManager")}} object(객체)인 `battery` 가 완전히 방전되고 시스템이 중단되는 몇 초 뒤에 남게 되는 시간입니다. 배터리가 현재 방전되기보다 충전되거나 시스템이 남은 방전 시간을 보고할 수 없다면, 이 값은 무한 값입니다.

## 예제

### HTML 콘텐츠

```html
<div id="dischargingTime">(discharging time unknown)</div>
```

### 자바언어 콘텐츠

```js
navigator.getBattery().then(function (battery) {
  var time = battery.dischargingTime;

  document.querySelector("#dischargingTime").textContent =
    battery.dischargingTime;
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
