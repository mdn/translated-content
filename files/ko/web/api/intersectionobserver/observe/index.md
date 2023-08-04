---
title: IntersectionObserver.observe()
slug: Web/API/IntersectionObserver/observe
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}}의 **`observe()`** 메서드는 `IntersectionObserver`의 주시 대상 목록에 요소를 추가합니다. 하나의 감지기는 하나의 루트와 하나의 역치 목록만 가질 수 있지만, 동시에 여러 요소를 주시할 수 있습니다.

요소의 주시를 중단하려면 {{domxref("IntersectionObserver.unobserve()")}}를 호출하세요.

지정한 주시 대상 요소의 가시성 비율이 감지기의 역치({{domxref("IntersectionObserver.thresholds")}})를 통과하는 순간 감지기 콜백이 호출됩니다. 이때 역치를 통과한 요소를 나타내는 {{domxref("IntersectionObserverEntry")}}의 배열을 콜백 매개변수로 제공합니다. 이런 구조 덕분에 한 번의 콜백 호출만으로 많은 요소의 가시성 변화를 한 번에 처리할 수 있습니다.

## 구문

```js
IntersectionObserver.observe(targetElement);
```

### 매개변수

- `targetElement`
  - : 루트 내에서의 가시성 변화를 감지할 {{domxref("element")}}입니다. 루트 요소의 자손이어야 합니다. 루트가 현재 문서의 뷰포트일 경우 이 요소도 문서 내에 위치해야 합니다.

### 반환 값

`undefined`.

## 예제

```js
// IntersectionObserver 등록
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // 주시 대상이 뷰포트 안으로 들어오면 active 클래스 추가
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("active");
    }
    // 아니면 active 클래스 제거
    else {
      entry.target.classList.remove("active");
    }
  });
});

// 주시 대상 선언, 주시 시작
const boxElList = document.querySelectorAll(".box");
boxElList.forEach((el) => {
  io.observe(el);
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("IntersectionObserver.unobserve()")}}
