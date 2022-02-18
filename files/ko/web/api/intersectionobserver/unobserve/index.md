---
title: IntersectionObserver.unobserve()
slug: Web/API/IntersectionObserver/unobserve
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Method
  - Reference
  - unobserve
browser-compat: api.IntersectionObserver.unobserve
translation_of: Web/API/IntersectionObserver/unobserve
---
{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}}의 **`unobserve()`** 메서드는 특정 요소에 대한 가시성 변화 주시를 중단합니다.

## 구문

```js
IntersectionObserver.unobserve(target);
```

### 매개변수

- `target`
  - : 주시를 중단할 {{domxref("Element")}}입니다. 지정한 요소를 이미 주시하고 있지 않을 때는 아무것도 수행하지 않으며 예외도 발생하지 않습니다.

### 반환 값

`undefined`.

## 예제

아래 코드는 감지기를 생성한 후 요소를 주시하고, 다시 주시를 해제하는 예제입니다.

```js
var observer = new IntersectionObserver(callback);
observer.observe(document.getElementById("elementToObserve"));

/* ... */

observer.unobserve(document.getElementById("elementToObserve"));
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Intersection Observer API](/ko/docs/Web/API/Intersection_Observer_API)
- {{domxref("IntersectionObserver.observe()")}}
