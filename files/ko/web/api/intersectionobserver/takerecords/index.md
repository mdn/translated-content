---
title: IntersectionObserver.takeRecords()
slug: Web/API/IntersectionObserver/takeRecords
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Method
  - NeedsExample
  - Reference
  - takeRecords
browser-compat: api.IntersectionObserver.takeRecords
translation_of: Web/API/IntersectionObserver/takeRecords
---
{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}}의 **`takeRecords()`** 메서드는 주시 대상 중에서 마지막 교차 변화 알림 이후, 즉 명시적인 `takeRecords()` 호출 또는 감지기의 콜백 자동 호출 이후 교차 영역에 변화가 생긴 요소를 나타내는 {{domxref("IntersectionObserverEntry")}} 객체의 배열을 반환합니다.

> **참고:** 콜백으로 교차 영역의 변화를 관측하고 있으면 굳이 이 메서드를 호출하지 않아도 됩니다. `takeRecords()`를 호출하면 대기 중인 교차 변화 감지 목록을 초기화하므로 감지기가 콜백을 호출하지 않을 것입니다.

## 구문

```js
intersectionObserverEntries = intersectionObserver.takeRecords();
```

### 반환 값

마지막 교차 변화 알림 이후 교차 영역의 변화를 감지한 대상 요소를 나타내는 {{domxref("IntersectionObserverEntry")}}의 배열.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Intersection Observer API](/ko/docs/Web/API/Intersection_Observer_API)
