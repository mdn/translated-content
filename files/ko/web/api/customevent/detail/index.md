---
title: CustomEvent.detail
slug: Web/API/CustomEvent/detail
---

{{APIRef("DOM")}}

{{domxref("CustomEvent")}} 인터페이스의 **`detail`** 읽기 전용 속성은 이벤트를 초기화할 때 제공한 데이터를 반환합니다.

## 값

이벤트를 초기화할 때 제공한 데이터입니다.

## 예제

```js
// CustomEvent 생성
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});

// 적합한 이벤트 수신기 부착
obj.addEventListener("animalfound", (e) => console.log(e.detail.name));

// 이벤트 발송
obj.dispatchEvent(catFound);
obj.dispatchEvent(dogFound);

// 콘솔에 "cat"과 "dog"가 기록됨
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("CustomEvent")}}
