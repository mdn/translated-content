---
title: Geolocation API 사용하기
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Geolocation API는 사용자의 현재 위치를 가져오는 API로, 지도에 사용자 위치를 표시하는 등 다양한 용도로 사용할 수 있습니다. 이 글에서는 Geolocation API의 기초 사용법을 설명합니다.

## geolocation 객체

[Geolocation API](/ko/docs/Web/API/Geolocation)는 {{domxref("navigator.geolocation")}} 객체를 통해 사용할 수 있습니다.

`geolocation` 객체가 존재하는 경우 위치 정보 서비스를 지원하는 것입니다. 객체의 존재 여부는 다음과 같이 알아낼 수 있습니다.

```js
if ("geolocation" in navigator) {
  /* 위치정보 사용 가능 */
} else {
  /* 위치정보 사용 불가능 */
}
```

### 현재 위치 가져오기

사용자의 현재 위치는 {{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}} 메서드를 호출해서 가져올 수 있습니다. 이 메서드는 사용자의 위치를 탐지하는 비동기 요청을 시작하고, 위치 관련 하드웨어에 최신 정보를 요청하며, 위치를 알아낸 후 주어진 콜백 함수를 호출합니다. 선택적으로, 오류가 발생하면 호출할 콜백을 두 번째 매개변수로 지정할 수 있습니다. 또 다른 선택 사항인 세 번째 매개변수는 위치 정보의 최대 수명, 요청의 최대 대기시간, 고정밀 위치정보 여부 등의 옵션을 담은 객체입니다.

> **참고:** {{domxref("Geolocation.getCurrentPosition", "getCurrentPosition()")}}의 기본 설정에서는 정밀도가 낮더라도 최대한 빠르게 응답을 반환하므로, 정확도보다 속도가 중요한 상황에서 유용합니다. 예를 들어, GPS 기능을 가진 장비는 보정 과정에 수 분이 걸릴 수도 있으므로 그동안 IP 위치와 Wi-Fi 등 정확하지 않은 출처에 기반한 위치 정보를 반환할 수 있습니다.

```js
navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

위의 예제는 사용자 위치가 확인되면 `doSomething()` 함수를 실행합니다.

### 현재 위치 추적하기

장치의 이동이나 위치 정밀도 향상으로 인해 위치 정보가 바뀔 때 호출할 콜백 함수를 {{domxref("Geolocation.watchPosition","watchPosition()")}} 메서드로 설정할 수 있습니다. 이 메서드의 매개변수는 {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}}과 같습니다. 이 콜백은 여러 번 호출될 수 있으므로 브라우저가 사용자의 움직임에 따라 위치를 업데이트하거나, 고정밀 위치 기술을 적용해 보다 정밀한 위치를 표시할 수 있습니다. `getCurrentPosition()`과 마찬가지로 선택 사항인 오류 콜백 역시 여러 번 호출될 수 있습니다.

> **참고:** {{domxref("Geolocation.getCurrentPosition", "getCurrentPosition()")}}을 먼저 호출하지 않아도 {{domxref("Geolocation.watchPosition", "watchPosition()")}}을 사용할 수 있습니다.

```js
const watchID = navigator.geolocation.watchPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

{{domxref("Geolocation.watchPosition","watchPosition()")}} 메서드는 위치 추적 요청을 식별할 수 있는 고유 숫자를 반환합니다. 이 숫자를 {{domxref("Geolocation.clearWatch","clearWatch()")}} 메서드에 전달하면 해당 위치 추적을 종료할 수 있습니다.

```js
navigator.geolocation.clearWatch(watchID);
```

### 응답 미세 조정

{{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}}과 {{domxref("Geolocation.watchPosition","watchPosition()")}} 둘 다 성공 콜백, 실패 콜백, 그리고 옵션 객체를 받을 수 있습니다.

이 옵션 객체로는 고정밀도 활성화 여부, 위치 정보의 최대 수명(수명이 끝나기 전에는 이전에 반환했던 위치 정보를 저장했다가, 같은 요청을 또 받으면 그대로 반환합니다), 그리고 위치 정보 요청의 응답을 기다릴 최대 대기시간을 지정할 수 있습니다.

옵션 객체를 사용한 {{domxref("Geolocation.watchPosition","watchPosition")}}의 호출 예시는 다음과 같습니다.

```js
function success(position) {
  doSomething(position.coords.latitude, position.coords.longitude);
}

function error() {
  alert("죄송합니다. 위치 정보를 사용할 수 없습니다.");
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

const watchID = navigator.geolocation.watchPosition(success, error, options);
```

## 위치 표현

사용자의 위치는 {{domxref("GeolocationPosition")}} 객체 인스턴스와, 그 안의 {{domxref("GeolocationCoordinates")}} 객체 인스턴스로 표현됩니다.

`GeolocationPosition`은 오직 두 가지, `GeolocationCoordinates` 인스턴스를 가진 `coords` 속성과, 위치 정보의 기록 시점을 타임스탬프([Unix 시간](/ko/docs/Glossary/Unix_time), 밀리초)로 나타내는 `timestamp` 속성만 갖습니다.

`GeolocationCoordinates` 인스턴스는 여러 속성을 갖지만, 그중 가장 많이 쓰게 될 두 가지는 지도 위에 위치를 표시할 때 필요한 `latitude`와 `longitude`입니다. 따라서 대부분의 `Geolocation` 성공 콜백은 아래와 같이 꽤 간단한 형태입니다.

```js
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // 위도와 경도를 사용해 작업 수행
}
```

그러나 `GeolocationCoordinates` 객체에서 고도, 속도, 장치의 방향, 위경도와 고도의 오차범위 등 다른 다양한 정보도 가져올 수 있습니다.

## 오류 처리

`getCurrentPosition()` 또는 `watchPosition()`에 오류 콜백을 제공한 경우, 콜백은 첫 번째 매개변수로 [`GeolocationPositionError`](/ko/docs/Web/API/GeolocationPositionError) 객체를 받습니다. 해당 객체는 오류의 유형을 나타내는 `code` 속성과, 사람이 읽을 수 있는 형태로 오류 코드의 뜻을 설명한 `message` 속성을 갖습니다.

다음 형태로 사용할 수 있습니다.

```js
function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
}
```

## 예제

다음 예제는 Geolocation API를 사용해 사용자의 위경도를 가져오는 데 성공하면, 사용자의 위치로 향하는 `openstreetmap.org` 링크를 생성하고 하이퍼링크에 지정합니다.

```css hidden
body {
  padding: 20px;
  background-color: #ffffc9;
}

button {
  margin: 0.5rem 0;
}
```

### HTML

```html
<button id="find-me">내 위치 보기</button><br />
<p id="status"></p>
<a id="map-link" target="_blank"></a>
```

### JavaScript

```js
function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `위도: ${latitude} °, 경도: ${longitude} °`;
  }

  function error() {
    status.textContent = "현재 위치를 가져올 수 없음";
  }

  if (!navigator.geolocation) {
    status.textContent = "브라우저가 위치 정보를 지원하지 않음";
  } else {
    status.textContent = "위치 파악 중…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);
```

### 결과

{{EmbedLiveSample('예제', 350, 150)}}
