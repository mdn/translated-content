---
title: window.navigator.battery
slug: Web/API/Navigator/getBattery
---

{{ Apiref() }}

`battery` 객체는 시스템의 배터리 충전 상태에 대한 정보를 제공합니다. 배터리의 충전 상태가 변화할때 발생하는 이벤트에 대한 처리도 가능 합니다. 이 객체는 [Battery Status API](/ko/docs/Web/API/Battery_Status_API) 의 구현입니다. 보다 자세한 내용, API, 샘플 코드 등은 문서를 참고 해 주세요.

## 문법

```js
var battery = window.navigator.battery;
```

## 값

`navigator.battery` 는 {{domxref("BatteryManager")}} 객체 입니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("BatteryManager")}}
- [Battery Status API](/ko/docs/Web/API/Battery_Status_API) 문서
- [블로그 - Using the Battery API](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
- [David Walsh 가 쓴 the JavaScript Battery Api](https://davidwalsh.name/battery-api)
- [battery.js - 경량의 크로스 브라우저 랩퍼(wrapper)](https://github.com/pstadler/battery.js)
