---
title: Geolocation.watchPosition()
slug: Web/API/Geolocation/watchPosition
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

{{domxref("Geolocation")}} 인터페이스의 **`watchPosition()`** 메서드는 장치의 위치가 바뀔 때마다 자동으로 호출할 처리기 함수를 등록할 때 사용합니다. 선택적으로 오류 발생 시 사용할 콜백 함수도 지정할 수 있습니다.

## 구문

```js
navigator.geolocation.watchPosition(success[, error[, options]])
```

### 매개변수

- `success`
  - : {{domxref("GeolocationPosition")}} 객체를 입력 매개변수로 사용하는 콜백 함수.
- `error` {{optional_inline}}
  - : {{domxref("GeolocationPositionError")}} 객체를 입력 매개변수로 사용하는 콜백 함수.
- `options` {{optional_inline}}
  - : 위치 감지 설정 옵션을 제공하는 {{domxref("PositionOptions")}} 객체.

### 반환 값

등록한 처리기를 식별할 때 사용하는 정수 ID. ID를 {{domxref("Geolocation.clearWatch()")}}에 전달해 등록을 해제할 수 있습니다.

## 예제

```js
var id, target, options;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulations, you reached the target");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Geolocation API 사용하기](/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- 메서드가 속한 {{domxref("Geolocation")}} 인터페이스와, 접근하는 방법인 {{domxref("NavigatorGeolocation.geolocation")}}.
- 처리기를 해제하는 {{domxref("Geolocation.clearWatch()")}} 메서드
- 비슷한 {{domxref("Geolocation.getCurrentPosition()")}} 메서드
