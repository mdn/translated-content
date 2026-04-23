---
title: "Window: caches property"
short-title: caches
slug: Web/API/Window/caches
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{securecontext_header}}

{{domxref("Window")}} 인터페이스의 **`caches`** 읽기 전용 속성은 현재 맥락과 연관 있는 {{domxref("CacheStorage")}} 객체를 반환합니다.
이 객체는 오프라인 사용을 위한 에셋 저장과, 요청에 대한 사용자화 응답을 생성하는 것과 같은 기능을 가능하게 합니다.

## 값

A {{domxref("CacheStorage")}} object.

## 예제

아래 예제는 윈도우가 캐시된 데이터를 검색하는 방법을 보여줍니다.

```js
window.caches.open("v1").then((cache) => {
  return cache.match("/list");
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보

- [서비스 워커](/ko/docs/Web/API/Service_Worker_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
