---
title: Geolocation.clearWatch()
slug: Web/API/Geolocation/clearWatch
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

**`Geolocation.clearWatch()`** 메서드는 {{domxref("Geolocation.watchPosition()")}}로 등록한 위치 변화 감지 콜백을 해제합니다.

## 구문

```js
navigator.geolocation.clearWatch(id);
```

### 매개변수

- `id`
  - : {{domxref("Geolocation.watchPosition()")}} 메서드가 반환하는 콜백 ID.

## 예제

```js
var id, target, option;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulation, you reach the target");
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
- {{domxref("Geolocation")}}
- {{domxref("Geolocation.watchPosition()")}}
- {{domxref("Geolocation.getCurrentPosition()")}}
