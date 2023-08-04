---
title: BatteryManager.charging
slug: Web/API/BatteryManager/charging
---

{{APIRef("Battery API")}}

현재 배터리가 충전중인지를 나타내는 Boolean 값 입니다.

## 문법

```js
var charging = battery.charging;
```

`charging` 변수는 배터리가 충전 중인지의 여부를 가져옵니다. 충전중일경우 `true`. 이외에는 `false` 를 가리킵니다.

## 예제

### HTML Content

```html
<div id="charging">(charging state unknown)</div>
```

### JavaScript Content

```js
navigator.getBattery().then(function (battery) {
  var charging = battery.charging;

  document.querySelector("#charging").textContent = charging;
});
```

{{ EmbedLiveSample('Example') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
