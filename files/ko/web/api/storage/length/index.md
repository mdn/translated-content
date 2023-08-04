---
title: Storage.length
slug: Web/API/Storage/length
---

{{APIRef("Web Storage API")}}

{{domxref("Storage")}} 인터페이스의 `length` 읽기 전용 속성은 `Storage` 객체에 저장된 데이터 항목의 수를 반환합니다.

## 구문

```js
length = storage.length;
```

### 반환 값

`Storage` 객체에 저장된 항목의 수.

## 예제

다음의 함수는 현재 도메인의 로컬 저장소에 세 개의 항목을 추가한 후 저장소 항목의 수를 반환합니다.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "yellow");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "cats.png");

  return localStorage.length; // Should return 3
}
```

> **참고:** 실제 사용 예제를 보시려면 저희의 [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/)를 방문하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Storage API 사용하기](/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
