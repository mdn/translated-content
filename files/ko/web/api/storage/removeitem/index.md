---
title: Storage.removeItem()
slug: Web/API/Storage/removeItem
---

{{APIRef("Web Storage API")}}

{{domxref("Storage")}} 인터페이스의 removeItem() 메소드에 키 이름을 파라미터로 전달하면 스토리지에서 해당 키를 삭제합니다.

## 문법

```js
storage.removeItem(keyName);
```

### 파라미터

- _**keyName**_
  - : 삭제하고자 하는 키 이름({{domxref("DOMString")}}).

### 반환값

_반환값 없음._

## 예제

아래의 함수는 로컬 스토리지에 3 개의 데이터 아이템을 생성한 후 그 중 하나를 삭제합니다.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");

  localStorage.removeItem("image");
}
```

> **참고:** 실 사용 예제는 [Web Storage Demo](https://github.com/mdn/web-storage-demo)를 참고하시기 바랍니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

[Web Storage API 사용하기](/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
