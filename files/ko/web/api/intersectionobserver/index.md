---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
tags:
  - API
  - Interface
  - Intersection Observer API
  - IntersectionObserver
  - Reference
browser-compat: api.IntersectionObserver
translation_of: Web/API/IntersectionObserver
---
{{APIRef("Intersection Observer API")}}

[Intersection Observer API](/ko/docs/Web/API/Intersection_Observer_API)의 **`IntersectionObserver`** 인터페이스는 대상 요소와 상위 요소, 또는 대상 요소와 최상위 문서의 {{Glossary("viewport", "뷰포트")}}가 서로 교차하는 영역이 달라지는 경우 이를 비동기적으로 감지할 수 있는 수단을 제공합니다.

`IntersectionObserver`가 생성되면 루트 내에서 설정된 가시성 비율이 자신의 주시 대상 중에서 나타나는지 감지하기 시작합니다. 한 번 생성한 이후에는 설정을 변경할 수 없으므로, 이미 생성된 감지기 객체는 지정했던 가시성 비율의 감지에만 사용할 수 있습니다. 그래도 하나의 감지기가 다수의 대상을 한꺼번에 주시할 수 있습니다.

## 생성자

- {{domxref("IntersectionObserver.IntersectionObserver()")}}
  - : `IntersectionObserver` 객체를 생성합니다. `IntersectionObserver` 객체는 대상 요소의 가시성 비율이 설정한 역치 값을 넘어가는 것을 감지하면 지정한 콜백을 호출합니다.

## 속성

- {{domxref("IntersectionObserver.root")}} {{readonlyinline}}
  - : 교차 영역 계산에 사용하는 바운딩 박스의 기준이 되는 {{domxref("Element")}} 또는 {{domxref("Document")}}입니다. `root` 설정을 생성자에 제공하지 않았거나, `root`의 값이 `null`인 경우 최상위 문서의 뷰포트를 사용합니다.
- {{domxref("IntersectionObserver.rootMargin")}} {{readonlyinline}}
  - : 교차 영역을 계산할 때 루트의 {{glossary("bounding box", "바운딩 박스")}}에 적용할 오프셋입니다. 즉, 필요에 따라 계산 용도로 루트 영역을 늘리거나 줄일 수 있습니다. 생성자 설정에 지정한 값은 생성자 내에서 내부 조건에 맞도록 조정 과정을 거치므로, 이 속성의 반환 값이 설정 값과 다를 수도 있습니다. 각각의 오프셋에는 픽셀(`px`)과 퍼센트(`%`)를 사용할 수 있으며, 기본 값은 `0px 0px 0px 0px`입니다.
- {{domxref("IntersectionObserver.thresholds")}} {{readonlyinline}}
  - : 오름차순으로 정렬된 역치 리스트입니다. 각각의 역치는 대상의 바운딩 박스 영역과 교차 영역 사이의 비율에 대한 역치입니다. 대상에 대한 교차 알림(콜백 호출)은 이 역치 값 중 하나라도 넘어갈 때 발생합니다. 아무 값도 생성자에 지정하지 않은 경우의 기본 값은 0입니다.

## 메서드

- {{domxref("IntersectionObserver.disconnect()")}}
  - : 모든 대상의 주시를 해제합니다.
- {{domxref("IntersectionObserver.observe()")}}
  - : 주어진 대상 요소를 주시합니다.
- {{domxref("IntersectionObserver.takeRecords()")}}
  - : 모든 주시 대상에 대한 {{domxref("IntersectionObserverEntry")}} 배열을 반환합니다.
- {{domxref("IntersectionObserver.unobserve()")}}
  - : 특정 대상 요소에 대한 주시를 해제합니다.

## 예제

```js
var intersectionObserver = new IntersectionObserver(function(entries) {
  // intersectionRatio가 0이라는 것은 대상을 볼 수 없다는 것이므로
  // 아무것도 하지 않음
  if (entries[0].intersectionRatio <= 0) return;

  loadItems(10);
  console.log('새 항목 불러옴');
});
// 주시 시작
intersectionObserver.observe(document.querySelector('.scrollerFooter'));
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref('MutationObserver')}}
- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}
