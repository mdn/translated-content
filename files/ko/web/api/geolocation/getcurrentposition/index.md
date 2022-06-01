---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
tags:
  - API
  - Geolocation
  - Geolocation API
  - Method
  - Reference
  - Secure context
  - getCurrentPosition
  - 위치
  - 위치정보
browser-compat: api.Geolocation.getCurrentPosition
translation_of: Web/API/Geolocation/getCurrentPosition
---
{{securecontext_header}}{{ APIRef("Geolocation API") }}

**`Geolocation.getCurrentPosition()`** 메서드는 장치의 현재 위치를 가져옵니다.

## 구문

```js
navigator.geolocation.getCurrentPosition(success, error, [options])
```

### 매개변수

- `success`
  - : {{domxref("GeolocationPosition")}} 객체를 유일한 매개변수로 받는 콜백 함수입니다.
- `error` {{optional_inline}}
  - : {{domxref("GeolocationPositionError")}} 객체를 유일한 매개변수로 받는 콜백 함수입니다.
- `options` {{optional_inline}}
  - : 다음을 포함하는 객체입니다.
    - `maximumAge`
      - : 캐시에 저장한 위치정보를 대신 반환할 수 있는 최대 시간을 나타내는 양의 `long` 값입니다. `0`을 지정한 경우 장치가 위치정보 캐시를 사용할 수 없으며 반드시 실시간으로 위치를 알아내려 시도해야 한다는 뜻입니다. {{jsxref("Infinity")}}를 지정한 경우 지난 시간에 상관없이 항상 캐시에 저장된 위치정보를 반환해야 함을 나타냅니다. 기본 값은 0입니다.
    - `timeout`
       : 기기가 위치를 반환할 때 소모할 수 있는 최대 시간(밀리초)을 나타내는 양의 `long` 값입니다. 기본 값은 {{jsxref("Infinity")}}로, 위치를 알아내기 전에는 `getCurrentPosition()`이 반환하지 않을 것임을 나타냅니다.
    - `enableHighAccuracy`
      - : 위치정보를 가장 높은 정확도로 수신하고 싶음을 나타내는 불리언 값입니다. `true`를 지정했으면, 지원하는 경우 장치가 더 정확한 위치를 제공합니다. 그러나 응답 속도가 느려지며 전력 소모량이 증가하는 점에 주의해야 합니다. 반면 `false`를 지정한 경우 기기가 더 빠르게 반응하고 전력 소모도 줄일 수 있는 대신 정확도가 떨어집니다. 기본 값은 `false`입니다.

## 예제

```js
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Geolocation API 사용하기](/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Navigator.geolocation")}}
